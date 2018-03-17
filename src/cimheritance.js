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

var cimheritance = cimheritance || (function() {

    var subClassList = {};

    var addClassRelationship = function(subClass, superClass) {
        if (subClassList[subClass] === undefined)
            subClassList[subClass] = [];
            
        subClassList[subClass].push(superClass);
    };

    let list = [];

    var getSuperClassList = function(searchString) {
        let superClassList = subClassList[searchString];
        if (superClassList != undefined) {
            for(superClass in superClassList) {
                list.push(superClassList[superClass]);
                list.concat(getSuperClassList(superClassList[superClass]));
            }
        }
        return list;
    };

    var getSubClassList=function() {
        return subClassList;
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

    return {
        init: function(xml){
            addClassesToTree(xml)
        },
        getSubClassList,
        getSuperClassList
    };
}());

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

const printSuperClassList = function(searchString) {
    console.log(cimheritance.getSuperClassList(searchString));
};

const printSubClassList = function() {
    console.log(JSON.stringify(cimheritance.getSubClassList(process.argv[2]), null, 3));
};

const readAFile = function(array, index) {
    fs.readFile('data_model/' + array[index], 'utf8', function(err, contents) {
        if (err) {
            console.log(err)
        }
        else {
            let xml = libxmljs.parseXmlString(contents);
            cimheritance.init(xml); 
            if (array.length > index+1) {
                readAFile(array, ++index);
            }
            else {
                printSuperClassList(process.argv[2])
            }
        }
    });
}

readAFile(files, 0);

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cimheritance
}
