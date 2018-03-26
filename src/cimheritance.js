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
const xslt = require("../xslt/xslt.js")

var cimheritance = cimheritance || (function() {

    var classMap = { 'complexTypes': {}, 'simpleTypes': {} };

    var addComplexType = function(subClass, superClass) {

        if (classMap['complexTypes'][subClass] === undefined)
        {
            classMap['complexTypes'][subClass] = [];
        }
        classMap['complexTypes'][subClass].push(superClass);
    };

    var addSimpleType = function(name, restrictions) {
        let restrictionType = restrictions.get("@base").value()
        let newSimpleType = { type: restrictionType, values: [] }
        let validValues = restrictions.childNodes()
        for (let i = 0; i < validValues.length; i++) {
            if(validValues[i].type() == 'element')
            {
                newSimpleType.values.push(validValues[i].attr('value').value())
            }
        }
        classMap['simpleTypes'][name] = newSimpleType
    };

    var getSuperClassList = function(baseClass) {
        return recursiveSearch(baseClass);
    };

    var recursiveSearch = function(baseClass, list) {
        let superClassList = classMap['complexTypes'][baseClass];
        if (superClassList != undefined) {
            for(superClass in superClassList) {
                list.push(superClassList[superClass]);
                list.concat(recursiveSearch(superClassList[superClass], list));
            }
        }
        return list;
    };

    var recursiveProcessing = function() {
        let newClassMap = { complexTypes: {}, simpleTypes: classMap['simpleTypes'] };
        for(let base in classMap['complexTypes']) {
            let list = [];
            newClassMap['complexTypes'][base] = recursiveSearch(base, list);
        }
        return newClassMap;
    };

    var getClassMap=function() {
        return recursiveProcessing();
    };

    var addClassesToTree=function(xml) {
        let xpathQuery = "/xs:schema/xs:complexType/xs:complexContent/xs:extension";
        let xpathResult = xml.find(xpathQuery, {'xs':'http://www.w3.org/2001/XMLSchema'})
        for (let match in xpathResult) {
            let superClass = xpathResult[match].parent().parent().attr('name').value();
            let subClass = xpathResult[match].attr('base').value();
            addComplexType(subClass, superClass)
        }
        xpathQuery = "/xs:schema/xs:simpleType/xs:restriction";
        xpathResult = xml.find(xpathQuery, {'xs':'http://www.w3.org/2001/XMLSchema'})
        for (let match in xpathResult) {

            let subClass = xpathResult[match].parent().attr('name').value();
            addSimpleType(subClass, xpathResult[match], "simpleTypes")
        }
    };

    const generateSuperClassTree = function(xml) {
        addClassesToTree(xml);
        let data = "var class_struct = class_struct || (function() {\n return " +
                   JSON.stringify(cimheritance.getClassMap(), null, 3) +
                   "\n}());" +
                   "if (typeof module !== 'undefined' && module.exports) {" +
                       "module.exports = class_struct" +
                   "}";

        fs.writeFile('templates/classStructure.js', data, function(err) {
            if(err) {
                console.error(err)
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

let xml = libxmljs.parseXmlString('<?xml version="1.0" encoding="utf-8"?><root/>')
let xsl = xslt.loadXMLDoc("templates/merge_xml_files.xslt");
let superClassTree = xslt.performXSLTTranslation(xml, xsl);
let classStructure = require('../templates/classStructure.js')

if (process.argv[2] != undefined) {
    cimheritance.init(classStructure)
    console.log(cimheritance.getSuperClassList(process.argv[2]))
}
else {
    cimheritance.generateSuperClassTree(superClassTree);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cimheritance
}
