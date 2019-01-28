
const fs = require('fs'),
    xml2js = require('xml2js'),
    path = require('path'),
    mktemp = require('mktemp'),
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
           {{~getRidOfHash @key}}] '{{getType this}}' '{{label}}' \}}}

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
        console.log("Failed to determine datatype for: " + JSON.stringify(object, true, 3));
        return object.range;
    }
});

let template = handlebars.compile(handlebarsTemplate);

const inputPath = path.join(__dirname, '/../../data_model/cgmes/');
const outputPath = path.join(__dirname, '/.');

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
    mapArray.forEach((map) => {
        Object.keys(map).forEach((objectName) => {
            addToCategoryIfLarger(finalMap, objectName, map[objectName]);
        });
    });
    Object.keys(finalMap).forEach((category) => {
        let categoryWithoutHash = getRidOfHash(category);
        let outFile = path.join(outputPath, categoryWithoutHash);
        writePackage(outFile, finalMap[category]);
    });
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

const newDomain = function (map, domain) {
    if (!(domain in map)) {
        map[domain] = {};
    }
    return map;
}

const writeToFile = function(component, outputPath) {
    fs.writeFile(outputPath, component, function (err) {
        if (err) throw err;
    });
}

const writePackage = function(packagePath, data) {
    Object.keys(data).forEach((key) => {
        let keyPath = packagePath + '/' + getRidOfHash(key) + ".txt";
        let keyWithoutHash = getRidOfHash(key);
        fs.mkdir(packagePath, { recursive: true }, err => {
            if (err) {
                if (err.code == 'EEXIST') {
                }
                else {
                    console.error("Failed to write directory: ", packagePath, " because: ", err);
                }
            }
            let outputData = template({ name: keyWithoutHash, attributes: data[key] });
            writeToFile(outputData, keyPath);
        });
    });
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

const addToCategoryIfLarger = function(map, name, object) {
    let objectLength = JSON.stringify(object).length;
    if (name in map) {
        let str = JSON.stringify(map[name])
        let categoryObjectLength = str.length;
        if (categoryObjectLength < objectLength) {
            map[name] = object;
        }
    }
    else {
        map[name] = object;
    }
    return map;
}

const parseRDF = function(input) {
    let map = {};
    let categories = {};
    // rdf file is basically a big array of descriptions
    let descriptions = input['rdf:RDF']['rdf:Description'];
    Object.keys(descriptions).forEach((objectKey) => {
        let domain = extractString(descriptions[objectKey]['rdfs:domain']);
        if (domain === undefined) {
            domain = "header";
        }
        let about = extractString(descriptions[objectKey]);
        let datatype = extractString(descriptions[objectKey]['cims:dataType']);
        let label = extractText(descriptions[objectKey]['rdfs:label']);
        let range = extractString(descriptions[objectKey]['rdfs:range']);
        let stereotype = extractString(descriptions[objectKey]['cims:stereotype']);
        let subclassof = extractString(descriptions[objectKey]['rdfs:subClassOf']);
        newDomain(map, domain);
        newDomain(map[domain], about);
        if (range !== undefined)
            map[domain][about]['range'] = range;
        if (label !== undefined)
            map[domain][about]['label'] = label;
        if (datatype !== undefined)
            map[domain][about]['datatype'] = datatype;
        if (stereotype !== undefined)
            map[domain][about]['stereotype'] = stereotype;
        if (subclassof !== undefined)
            map[domain][about]['subclassof'] = subclassof;
    });
    Object.keys(descriptions).forEach((objectKey) => {
        let about = extractString(descriptions[objectKey]);
        let domain = extractString(descriptions[objectKey]['rdfs:domain']);
        if (domain === undefined) {
            domain = "header";
        }
        let belongsToCategory = extractString(descriptions[objectKey]['cims:belongsToCategory']);
        if (belongsToCategory && map[about]) {
            newDomain(categories, belongsToCategory)
            addToCategoryIfLarger(categories[belongsToCategory], about, map[about]);
        }
    });
    return categories;
}

let addToDirectoryMap = function(name, map) {
    let tokens = name.split('_');
    if (tokens.length != 3) {
        console.error("Unexpected token list length: " , tokens.length);
    }
    else {
        if (map[tokens[2]] == undefined) {
            map[tokens[2]] = [ name ];
        }
        else {
            map[tokens[2]].append(name);
        }
    }
}


