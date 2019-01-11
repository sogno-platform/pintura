
const fs = require('fs'),
    xml2js = require('xml2js'),
    path = require('path'),
    mktemp = require('mktemp'),
    async = require('async');

let parser = new xml2js.Parser();

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
        let outFile = path.join(outputPath, "_" + categoryWithoutHash + "_XXXX.txt");
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
    mktemp.createFile(packagePath)
        .then(function(path) {
            writeToFile(JSON.stringify(data, true, 4), path);
        })
    .catch(function(err) {
        console.error("booo ", err);
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
        let stereotype = extractString(descriptions[objectKey]['cims:stereotype']);
        let range = extractString(descriptions[objectKey]['rdfs:range']);
        newDomain(map, domain);
        newDomain(map[domain], about);
        if (range !== undefined)
            map[domain][about]['range'] = range;
        if (datatype !== undefined)
            map[domain][about]['datatype'] = datatype;
        if (stereotype !== undefined)
            map[domain][about]['stereotype'] = stereotype;
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


