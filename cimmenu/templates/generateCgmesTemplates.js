
const fs = require('fs'),
    xml2js = require('xml2js'),
    path = require('path');

let parser = new xml2js.Parser();

const inputPath = path.join(__dirname, '/../../data_model/cgmes');
const outputPath = path.join(__dirname, '/../../data_model/cgmes');

fs.readdir(inputPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function (file) {
        readRDFFile(file, outputPath);
    });
});

getAboutOrResource = function(object) {
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
}

const readRDFFile = function(baseFilename, outputPath) {
    let rdfFile = path.join(inputPath, baseFilename);
    fs.readFile(rdfFile, function(err, data) {
        if (err) {
            console.log(err);
        }
        else {
            let map = {};
            parser.parseString(data, function(err, result) {
                let fileHeader = result['rdf:RDF']['$'];
                // rdf file is basically a big array of descriptions
                let descriptions = result['rdf:RDF']['rdf:Description'];
                map['categories'] = {};
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
                    if (about == "#DiagramStyle")
                    {
                        console.log(descriptions[objectKey]);
                        console.log(about);
                        console.log(domain);
                        console.log(belongsToCategory);
                    }
                    if (belongsToCategory) {
                        newDomain(map['categories'], belongsToCategory)
                        map['categories'][belongsToCategory][about] = map[about];
                    }
                });
            });
        }
    });
}

