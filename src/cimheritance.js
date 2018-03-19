/*
 *  Copyright © 2016-2017, RWTH Aachen University
 *  Authors: Richard Marston
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  A copy of the GNU General Public License is in the LICENSE file
 *  in the top level directory of this source tree.
 */

const fs = require('fs');
const libxslt = require('libxslt');
const libxmljs = libxslt.libxmljs;

let files = [ 'Base.xsd',
              'Core.xsd',
              'DiagramLayout.xsd',
              'Domain.xsd',
              'Equivalents.xsd',
              'Generation.xsd',
              'LoadModel.xsd',
              'OperationalLimits.xsd',
              'Topology.xsd',
              'Wires.xsd' ];

var cimheritance = cimheritance || (function() {

    var classMap = {};

    var addClassRelationship = function(subClass, superClass) {
        if (classMap[subClass] === undefined)
            classMap[subClass] = [];
            
        classMap[subClass].push(superClass);
    };

    let list = [];

    var getSuperClassList = function(baseClass) {
        return recursiveSearch(baseClass);
    };

    var recursiveSearch = function(baseClass) {
        let superClassList = classMap[baseClass];
        if (superClassList != undefined) {
            for(superClass in superClassList) {
                list.push(superClassList[superClass]);
                list.concat(recursiveSearch(superClassList[superClass]));
            }
        }
        return list;
    };

    var getClassMap=function() {
        return classMap;
    };

    var addClassesToTree=function(xml) {
        let xpathQuery = "/xs:schema/xs:complexType/xs:complexContent/xs:extension";
        let xpathResult = xml.find(xpathQuery, {'xs':'http://www.w3.org/2001/XMLSchema'})
        for (let match in xpathResult) {
            let superClass = xpathResult[match].parent().parent().attr('name').value();
            let subClass = xpathResult[match].attr('base').value();
            addClassRelationship(subClass, superClass)
        }
    };

    const generateSuperClassTree = function(array, index) {
        fs.readFile('data_model/' + array[index], 'utf8', function(err, contents) {
            if (err) {
                console.error(err)
            }
            else {
                let xml = libxmljs.parseXmlString(contents);
                addClassesToTree(xml);
                if (array.length > index+1) {
                    generateSuperClassTree(array, ++index);
                }
                else {
                    let data = JSON.stringify(cimheritance.getClassMap(), null, 3)
                    fs.writeFile('templates/superclasses.json', data, function(err) {
                        if(err) {
                            console.error(err)
                            }
                    });
                }
            }
        });
    };


    return {
        init: function(json){
            classMap = json;
        },
        generateSuperClassTree,
        getClassMap,
        getSuperClassList
    };
}());

const printSuperClassList = function(searchString) {
    console.log(cimheritance.getSuperClassList(searchString));
};

if (process.argv[2] != undefined) {
    fs.readFile('templates/superclasses.json', 'utf8', function(err, contents) {
        if (err) {
        }
        else {
            cimheritance.init(JSON.parse(contents))
            printSuperClassList(process.argv[2])
        }
    });
}
else {
    cimheritance.generateSuperClassTree(files, 0);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cimheritance
}
