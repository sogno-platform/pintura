
const fs = require('fs'),
    xml2js = require('xml2js'),
    path = require('path'),
    async = require('async'),
    handlebars = require('handlebars');

let parser = new xml2js.Parser();
let handlebarsTemplate = `<ul class="floating-panel-list">
    <li class="wide-row floating-panel-item list-entry">
        <span class="row-left floating-panel-name">IdentifiedObject.name</span>
        <span class="row-right wide-row floating-panel-value"><input type="text" value="\\{{[cim:IdentifiedObject.name]}}" onchange="javascript:updateComponent('cim:{{name}}', '\\{{{[pintura:rdfid]}}}', 'cim:IdentifiedObject.name', this.value)"></span>
    </li>
{{#each attributes}}
    <li class="wide-row floating-panel-item list-entry">
        <span class="row-left floating-panel-name">{{label}}</span>
        \\{{{getAggregateComponentMenu 'cim:{{@root.name}}' [pintura:rdfid] [cim:
           {{~getRidOfHash about}}] '{{getType this}}' '{{label}}' \}}}

    </li>
{{/each}}
\\{{#neq '{{name}}' 'Terminal'\}}
<li class="wide-row floating-panel-item list-subtitle">
        <span class="row-left floating-panel-name">Show Terminals</span><span class="row-right floating-panel-value"><button onclick="currentCimsvg().populateTerminals('cim:{{name}}', '\\{{{[pintura:rdfid]}}}')">
                           -&gt;
                       </button></span>
</li>
\\{{/neq\}}
</ul>
`;

handlebars.registerHelper('getRidOfHash', function(input) {
    return new handlebars.SafeString(getRidOfHash(input));
});

handlebars.registerHelper('getType', function(object) {
    if (object.datatype !== undefined) {
        return getRidOfHash(object.datatype);
    }
    else if (object.range !== undefined) {
        return object.range.substr(1);
    }
    else {
        console.error("Failed to determine datatype for: " + JSON.stringify(object, true, 3));
        return object.range;
    }
});

let template = handlebars.compile(handlebarsTemplate);

const inputPath = process.argv.length > 2 ? path.join(process.argv[2]) : path.join(__dirname, '/../../data_model/cgmes/');
let test = false;
if (process.argv[3] === "test") {
    test = true;
}
const outputPath = path.join(__dirname, '/generated/attributes/cgmes');
const indexPath = path.join(__dirname, '/packageIndex.js');

fs.readdir(inputPath, (err, files) => {
    if (err)
        return console.error('Unable to scan directory: ' + err);

    files = files.map(file => path.join(inputPath, file));

    //Read all files in parallel
    async.map(files, fs.readFile, (err, fileContents) => {
        if (err) {
            console.error("ERR ", err)
            return reject(err);
        }
        async.map(fileContents, parser.parseString, (err, parseResults) =>{

            let categoriesArray = [];
            parseResults.forEach((parseResult) => {
                let parsed = parseRDF(parseResult);
                categoriesArray.push(parsed);
            });
            processArrayOfCategoryMaps(categoriesArray);
        });
    });
});

const processArrayOfCategoryMaps = function(mapArray) {
    let finalMap = {};
    let indexData = {};
    // This loop merges all instances of all components into one big map
    mapArray.forEach((profile) => {
        Object.keys(profile).forEach((profileName) => {
            if (!finalMap[profileName]) {
                finalMap[profileName] = {}
            }
            Object.keys(profile[profileName]).forEach((className) => {
                addClassToPackage(finalMap, profileName, profile[profileName][className]);
            });
        });
    });
    Object.keys(finalMap).forEach((profileName) => {
        Object.keys(finalMap[profileName]).forEach((className) => {
            let classJson = finalMap[profileName][className];
            writeHandlebarsFile(profileName, className, classJson['attributes'], indexData);
        });
    });
    writeToFile(indexPath, "export default " + JSON.stringify(indexData, true, 2));
}

const getAboutOrResource = function(object) {
    if ('rdf:resource' in object) {
        return object['rdf:resource'];
    }
    if ('rdf:about' in object) {
        return object['rdf:about'];
    }
    return object;
}

const extractText = function(object) {
    return object[0]['_'];
}

const extractString = function(object) {
    if (object) {
        if (Array.isArray(object)) {
            if (object.length > 0) {
                if (typeof object[0] === 'string' || object[0] instanceof String) {
                    return object;
                }
                if ('$' in object[0]) {
                    return getAboutOrResource(object[0]['$']);
                }
            }
            return object[0];
        }
        if ('$' in object) {
            return getAboutOrResource(object['$']);
        }
        return ("Can't decipher object" + String(object));
    }
    return object;
}

const newAttribute = function(array, object) {
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

const writeHandlebarsFile = function(packageFileStub, className, attributes, lookupMap) {
    if (!test) {
        let keyPath = outputPath + "/" + packageFileStub + "/" + className + ".handlebars";
        if (lookupMap[className]) {
            lookupMap[className].push(packageFileStub);
        }
        else {
            lookupMap[className] = [ packageFileStub ];
        }
        let outputData = template({ name: className, attributes: attributes });
        writeToFile(keyPath, outputData);
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
            if (!component2[item]) {
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
    if (packageName in map) {
        let componentName = object['about'];
        let className = getRidOfHash(componentName);
        if (map[packageName][className]) {
            if (!componentsAreEqual(map[packageName][className], object)) {
                for(let item in object[className]) {
                    if (item != "attributes") {
                        map[packageName][className][item] = object[item];
                    }
                }
                for(let item in object['attributes']) {
                    addAttributeToClassIfUnique(map[packageName][className], object['attributes'][item]);
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

const parseRDF = function(input) {
    let map = {};
    let categories = {};
    let attributes = [];
    //let profileName=extractString(input['rdf:RDF'])['profileName']
    let profileFileStub=extractString(input['rdf:RDF'])['profileFileStub']
    map[profileFileStub] = {};
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
        setIfDefined(object, 'range', extractString(descriptions[objectKey]['rdfs:range']));
        setIfDefined(object, 'subclassof', extractString(descriptions[objectKey]['rdfs:subClassOf']));
        setIfDefined(object, 'stereotype', extractString(descriptions[objectKey]['cims:stereotype']));
        setIfDefined(object, 'type', extractString(descriptions[objectKey]['rdf:type']));
        if (object['type'] === 'http://www.w3.org/2000/01/rdf-schema#Class') {
            newClass(map[profileFileStub], object['about'], object);
        }
        if (object['type'] === "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property") {
            newAttribute(attributes, object);
        }
    });
    attributes.forEach((attribute) => {
        let clarse = attribute['domain'];
        if (clarse && map[profileFileStub][clarse]) {
            map[profileFileStub][clarse].attributes.push(attribute)
        }
        else {
            if (attribute['domain'] == "ACDCTerminal") {
                console.error("Class somewhere else: ", attribute);
            }
        }
    });
    return map;
}


