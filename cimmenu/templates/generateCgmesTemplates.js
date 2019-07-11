
const fs = require('fs'),
    xml2js = require('xml2js'),
    path = require('path'),
    async = require('async'),
    handlebars = require('handlebars');

  handlebars.registerHelper('neq', function neq(v1, v2, options) {
    if(v1 !== v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

handlebars.registerHelper('all', function (thing) {
    console.log(JSON.stringify(thing, true, 2))
    return new handlebars.SafeString(JSON.stringify(thing, true, 2));
});

let parser = new xml2js.Parser();
let handlebarsTemplate = `<ul class="floating-panel-list">
{{#each attributes}}
    <li class="wide-row floating-panel-item list-entry">
        <span class="row-left floating-panel-name">{{@key}}</span>

        \\{{{getAggregateComponentMenu 'cim:{{../name}}' [pintura:rdfid] [cim:{{@key}}] 'cim:{{this}}' 'cim:{{@key}}' \}}}

    </li>
{{/each}}
{{#neq name 'Terminal'}}
    <li class="wide-row floating-panel-item list-subtitle">
        <span class="row-left floating-panel-name">Show Terminals</span>
        <span class="row-right floating-panel-value">
            <button onclick="currentCimsvg().populateTerminals('cim:{{name}}', '\\{{{[pintura:rdfid]}}}')">
                           -&gt;
            </button>
        </span>
    </li>
{{/neq}}
</ul>
`;

handlebars.registerHelper('getRidOfHash', function(input) {
    return new handlebars.SafeString(getRidOfHash(input));
});

handlebars.registerHelper('getType', function(object) {
    let returnString;
    if (object.datatype !== undefined) {
        returnString = getRidOfHash(object.datatype);
    }
    else if (object.range !== undefined) {
        returnString = object.range.substr(1);
    }
    else {
        console.error("Failed to determine datatype for: " + JSON.stringify(object, true, 3));
        returnString = object.range;
    }
    if (returnString === undefined) {
        console.error("Failed to parse: " + JSON.stringify(object, true, 3));
    }
    return returnString;
});

let template = handlebars.compile(handlebarsTemplate);

const inputPath = process.argv.length > 2 ? path.join(process.argv[2]) : path.join(__dirname, '/../../data_model/cgmes/');
const outputPath = path.join(__dirname, '/generated/attributes/cgmes');
const indexPath = path.join(__dirname, '/packageIndex.js');
const cgmesPath = path.join(__dirname, '/generated/cgmes.js');
const concretePath = path.join(__dirname, '/generated/concrete.js');
const extFilter = "rdf";

let test = false;
let files;
if (process.argv[3] === "test") {
    test = true;
    files = [ 'DynamicsProfile.rdf' ];
}
else {
    /*
     * File names left commented out because they are deliberately ommited,
     * as they contain specialized profiles with duplicate classes.
     */
    files = [
        'DiagramLayoutProfileRDFSAugmented-v2_4_15-16Feb2016.rdf',
        'DynamicsProfileRDFSAugmented-v2_4_15-16Feb2016.rdf',
        //'DynamicsProfileRDFSAugmented_noAbstract-v2_4_15-16Feb2016.rdf',
        //'EquipmentBoundaryProfileRDFSAugmented-v2_4_15-16Feb2016.rdf',
        'EquipmentProfileCoreRDFSAugmented-v2_4_15-4Jul2016.rdf',
        //'EquipmentProfileCoreOperationRDFSAugmented-v2_4_15-4Jul2016.rdf',
        //'EquipmentProfileCoreShortCircuitRDFSAugmented-v2_4_15-4Jul2016.rdf',
        //'EquipmentProfileCoreShortCircuitOperationRDFSAugmented-v2_4_15-4Jul2016.rdf',
        'GeographicalLocationProfileRDFSAugmented-v2_4_15-16Feb2016.rdf',
        'StateVariablesProfileRDFSAugmented-v2_4_15-16Feb2016.rdf',
        'SteadyStateHypothesisProfileRDFSAugmented-v2_4_15-16Feb2016.rdf',
        'TopologyProfileRDFSAugmented-v2_4_15-16Feb2016.rdf',
        //'TopologyBoundaryProfileRDFSAugmented-v2_4_15-16Feb2016.rdf',
    ];
}

files = files.map(file => path.join(inputPath, file));

//Read all files in parallel
async.map(files, fs.readFile, (err, fileContents) => {
    if (err) {
        console.error("ERR ", err)
    }
    async.map(fileContents, parser.parseString, (err, parseResults) =>{

        let categoriesArray = [];
        parseResults.forEach((parseResult) => {
            let parsed = parseRDF(parseResult);
            categoriesArray.push(parsed);
        });
        let undiscoveredClasses = [];
        let overloadedClasses = [];
        Object.keys(unorderedClasses).forEach((classList) => {
            if (unorderedClasses[classList].length > 1) {
                overloadedClasses.push(JSON.stringify(classList, true, 3))
            }
        })
        Object.keys(unorderedClasses).forEach((classList) => {
            if (unorderedClasses[classList][0]['subclassof']) {
                let subclass = unorderedClasses[classList][0];
                let profile = subclass.profile;
                let superclassName = unorderedClasses[classList][0]['subclassof'].substring(1) + '.' + profile;
                if (unorderedClasses[superclassName]) {
                    let superclass = unorderedClasses[superclassName][0];
                    recursiveCopyAttributesFromSuperclass(subclass, superclass, profile);
                }
                else {
                    undiscoveredClasses.push(superclassName)
                }
            }
        });
        let discoveredClasses = {};
        Object.keys(unorderedClasses).sort().forEach((classList) => {
            discoveredClasses[classList] = unorderedClasses[classList];
        })
        Object.keys(discoveredClasses).forEach((profileName) => {
            let profile = discoveredClasses[profileName];
            Object.keys(profile).forEach((className) => {
                checkPrimitive(profile[className], className)
            })
        })
        processArrayOfCategoryMaps(discoveredClasses);
    });
});

const checkPrimitive = function(classObject, className) {
    if ('attributes' in classObject) {
        if ('value' in classObject['attributes'] && 'unit' in classObject['attributes'] && 'multiplier' in classObject['attributes']) {
            classObject['primitive'] = 'float';
            return true;
        }
    }
};

const recursiveCopyAttributesFromSuperclass = function(dest, from, profile) {
    // check if the superclass also has attributes in
    // the supersuperclass that need to be copied in
    if (from['subclassof']) {
        let superclassName = from['subclassof'].substring(1) + '.' + profile;
        if (unorderedClasses[superclassName]) {
            let superclass = unorderedClasses[superclassName][0];
            recursiveCopyAttributesFromSuperclass(from, superclass, profile);
        }
    }
    // check the subclass hasn't already had the attributes copied in
    if (dest['copiedIn'] === false) {
        dest['copiedIn'] = true;
        copyAttributesFromSuperclass(dest, from);
    }
}

const copyAttributesFromSuperclass = function(dest, from) {
    Object.keys(from.attributes).forEach((attribute) => {
        let newAttributeName = "Unitialised attribute name.";
        if (attribute.indexOf('.') > 1) {
            newAttributeName = attribute;
        }
        else {
            newAttributeName = from['name'] + "." + attribute;
        }
        dest.attributes[newAttributeName] = from.attributes[attribute];
    });
}

const showComplex = function(matchingComponents) {
}

const processArrayOfCategoryMaps = function(mapArray) {
    let indexData = {};
    let cgmesIndex = {};
    Object.keys(mapArray).forEach((profileAndClassName) => {
        let tokens = profileAndClassName.split('.')
        let profileName = tokens[1]
        let className = tokens[0]
        let classJson = mapArray[profileAndClassName][0];
        let render = undefined;
        if ('primitive' in mapArray[profileAndClassName][0]) {
            let primitive = mapArray[profileAndClassName][0]['primitive'];
            render = '"renderFloat"';
        }
        else {
            render = '"renderClass"';
        }
        writeHandlebarsFile(profileName, className, classJson['attributes'], render, indexData, cgmesIndex);
    });
    writeToFile(indexPath, "export default " + JSON.stringify(indexData, true, 2));
    writeToFile(cgmesPath, "export default " + JSON.stringify(cgmesIndex, true, 2));
    writeToFile(concretePath, "export default " + JSON.stringify(concreteClassList, true, 2));
}

const getAboutOrResource = function(object, log = false) {
    if ('rdf:resource' in object) {
        return object['rdf:resource'];
    }
    else if ('rdf:about' in object) {
        return object['rdf:about'];
    }
    else if ('rdfs:Literal' in object) {
        return object['rdfs:Literal'];
    }
    return object;
}

const extractText = function(object) {
    return object[0]['_'];
}

const extractString = function(object, log = false) {
    if (object) {
        if (Array.isArray(object)) {
            if (object.length > 0) {
                if (typeof object[0] === 'string' || object[0] instanceof String) {
                    return object[0];
                }
                if ('$' in object[0]) {
                    return getAboutOrResource(object[0]['$'], log);
                }
            }
        }
        if ('$' in object) {
            return getAboutOrResource(object['$']);
        }
        return ("Can't decipher object" + String(object));
    }
    return object;
}

const newAttribute = function(array, object) {
    if (object.about.substring(0,4) != "cim:") {
        object.about = "cim:" + object.about;
    }
    array.push(object);
}

const newClass = function (map, domain, object) {
    if (!(domain in map)) {
        map[domain] = object || {};
        map[domain]['attributes'] = [];
    }
    else {
        console.error("Class already exists.");
    }
    return map;
}

const writeToFile = function(outputPath, component) {
    let folderName = path.dirname(outputPath);
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName)
        let helpersData = "import helpers from '../../../../handlebars/helpers/index.js';\nexport default helpers";
        fs.writeFile(folderName + "/helpers.js", helpersData, function (err) {
            if (err) throw err;
        });
    }
    fs.writeFile(outputPath, component, function (err) {
        if (err) throw err;
    });
}

const writeHandlebarsFile = function(packageFileStub, className, attributes, render, lookupMap, jsMap) {
    if (!test) {
        let templatePath = outputPath + "/" + packageFileStub + "/" + className + ".handlebars";
        if (lookupMap[className]) {
            lookupMap[className].push(packageFileStub);
        }
        else {
            lookupMap[className] = [ packageFileStub ];
        }
        let outputData = template({ name: className, attributes: attributes });
        writeToFile(templatePath, outputData);

        let jsCode;
        let codePath = outputPath + "/" + packageFileStub + "/" + className + ".js";
        if (!jsMap[className]) {
            jsMap[className] = {};
        }
        jsMap[className][packageFileStub] = codePath;
        if (render) {
            jsCode = 'export default { "render": ' + render + '}';
        }
        writeToFile(codePath, jsCode);
    }
}

const getRidOfHash = function(name){
    let tokens = name.split('#');
    if (tokens.length == 1) {
        return tokens[0];
    }
    if (tokens.length > 1) {
        return tokens[1];
    }
    return name;
}

const componentsAreEqual = function(component1, component2) {
    if (component1 && component2) {
        if (Object.keys(component1).length != Object.keys(component2).length) {
            return false;
        }
        for (let item in component1) {
            if (!(item in component2)) {
                return false;
            }
            if (typeof(component1[item]) === 'object') {
                if (!componentsAreEqual(component1[item], component2[item])) {
                    return false;
                }
            }
            else {
                if (component1[item] !== component2[item]) {
                    return false;
                }
            }
        }
    }
    else {
        return false;
    }

    return true;
}

const addAttributeToClassIfUnique = function(classObject, attribute) {
    for(let item in classObject['attributes']) {
        if (componentsAreEqual(classObject['attributes'][item], attribute)){
            return;
        }
    }
    classObject['attributes'].push(attribute)
}

const addClassToPackage = function(map, packageName, object) {
    let componentName = object['about'];
    let className = getRidOfHash(componentName);
    if (packageName in map) {
        if (map[packageName][className]) {
            if (!componentsAreEqual(map[packageName][className], object)) {
                for(let item in object[className]) {
                    map[packageName][className][item] = object[item];
                }
            }
        }
        else {
            map[packageName][className] = object;
        }
    }
    else {
        map[packageName] = object;
    }
}

const addOrMergeCategory = function(map, packageName, object) {
    if (packageName in map) {
        for (let componentName in object) {
            let className = getRidOfHash(componentName);
            if (map[packageName][className]) {
                if (!componentsAreEqual(map[packageName][className], object[className])) {
                    for(let item in object[className]) {
                        map[packageName][className][item] = object[className][item];
                    }
                }
            }
            else {
                map[packageName][className] = object[className];
            }
        }
    }
    else {
        map[packageName] = object;
    }
    return map;
}

const setIfDefined = function(object, name, value) {
    if (value) {
        object[name] = value;
    }
}

let concreteClassList = {};

const restructureRDFSJson = function(rdfs, profile) {
    let returnJson = {};
    for (let classJson in rdfs) {
        let className = rdfs[classJson]['label'];
        returnJson[className] = { attributes: [] };

        if (!concreteClassList[className]) {
            concreteClassList[className] = {};
        }

        if (rdfs[classJson]['stereotype'] === 'http://iec.ch/TC57/NonStandard/UML#concrete') {
            concreteClassList[className]['concrete'] = profile;
        }
        else {
            if(!concreteClassList[className]['abstract']) {
                concreteClassList[className]['abstract'] = [ profile ];
            }
            else {
                concreteClassList[className]['abstract'].push(profile);
            }
        }

        if (rdfs[classJson]['subclassof']) {
            returnJson[className]['subclassof'] = rdfs[classJson]['subclassof'];
        }
        for(let prop in rdfs[classJson]) {
            if(prop != 'attributes') {
                returnJson[className][prop] = rdfs[classJson][prop];
            }
        }
        rdfs[classJson]['attributes'].forEach((attribute) => {
            let attr = {
                name: attribute['label'],
                type: ('range' in attribute) ? getRidOfHash(attribute['range']) :
                      ('datatype' in attribute) ? getRidOfHash(attribute['datatype']) : attribute[about]
            }
            if ('isFixed' in attribute) {
                attr.value = attribute['isFixed'];
            }
            returnJson[className].attributes.push(attr)
        });
    }
    return returnJson;
}

var unorderedClasses = {};

const recordClass = function(name, object, profileName) {
    let newClass = { name: name, profile: profileName, attributes: {}, copiedIn: false };

    Object.keys(object).forEach((item) => {
        if (item === 'subclassof') {
            newClass['subclassof'] = object['subclassof'];
        }
    });
    object['attributes'].forEach((attr) => {
        newClass.attributes[attr.name] = attr.type;
    })
    let nameWithProfile = name + "." + profileName;

    if (!unorderedClasses[nameWithProfile]) {
        unorderedClasses[nameWithProfile] = [];
    }
    unorderedClasses[nameWithProfile].push(newClass);
}


const displayProfileNameAndAttributes = function(name, profile) {
    console.log("Profile name: ", name)
    Object.keys(profile).forEach((item) => {
        if (item !== 'attributes') {
            console.log("item: ", item, " value: ", profile[item]);
        }
    });
    profile['attributes'].forEach((attr) => {
        if (attr['value']) {
            console.log("attr name: ", attr['name'], " value: ", attr['value'])
        }
    })
}

const parseRDF = function(input) {
    let profileData = {};
    let attributes = [];
    let profileMetaData = [];
    // rdf file is basically a big array of descriptions
    let descriptions = input['rdf:RDF']['rdf:Description'];

    Object.keys(descriptions).forEach((objectKey) => {
        let object = {}
        if (descriptions[objectKey] !== undefined) {
            setIfDefined(object, 'about', getRidOfHash(extractString(descriptions[objectKey])));
        }
        setIfDefined(object, 'datatype', extractString(descriptions[objectKey]['cims:dataType']));
        if (descriptions[objectKey]['rdfs:domain'] !== undefined) {
            setIfDefined(object, 'domain', getRidOfHash(extractString(descriptions[objectKey]['rdfs:domain'])));
        }
        setIfDefined(object, 'label', extractText(descriptions[objectKey]['rdfs:label']));
        setIfDefined(object, 'range', extractString(descriptions[objectKey]['rdfs:range'], true));
        setIfDefined(object, 'subclassof', extractString(descriptions[objectKey]['rdfs:subClassOf']));
        setIfDefined(object, 'stereotype', extractString(descriptions[objectKey]['cims:stereotype']));
        setIfDefined(object, 'type', extractString(descriptions[objectKey]['rdf:type']));
        setIfDefined(object, 'isFixed', extractString(descriptions[objectKey]['cims:isFixed']));
        if (object['type'] === 'http://www.w3.org/2000/01/rdf-schema#Class') {
            newClass(profileData, object['label'], object);
        }
        if (object['type'] === "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property") {
            newAttribute(attributes, object);
        }
        if (object['stereotype'] === 'Entsoe') {
            // Record the type, which will be [PackageName]Version
            profileMetaData.push(object['about'])
        }
    });
    attributes.forEach((attribute) => {
        let clarse = attribute['domain'];
        if (clarse && profileData[clarse]) {
            profileData[clarse].attributes.push(attribute)
        }
        else {
            console.error("Class somewhere else: ", attribute);
        }
    });
    profileData = restructureRDFSJson(profileData, profileMetaData[0]);
    Object.keys(profileData).forEach((className) => {
        recordClass(className, profileData[className], profileMetaData[0])
    })
    return { [profileMetaData[0]]: profileData };
}


