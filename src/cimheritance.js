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

    let list = [];

    var getSuperClassList = function(baseClass) {
        return recursiveSearch(baseClass);
    };

    var recursiveSearch = function(baseClass) {
        let superClassList = classMap['complexTypes'][baseClass];
        if (superClassList != undefined) {
            for(superClass in superClassList) {
                list.push(superClassList[superClass]);
                list.concat(recursiveSearch(superClassList[superClass].name));
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
        let data = JSON.stringify(cimheritance.getClassMap(), null, 3)
        fs.writeFile('templates/superclasses.json', data, function(err) {
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

if (process.argv[2] != undefined) {
    fs.readFile('templates/superclasses.json', 'utf8', function(err, contents) {
        if (err) {
            console.error(err)
        }
        else {
            cimheritance.init(JSON.parse(contents))
            data = { superclass: cimheritance.getSuperClassList(process.argv[2]) };
            Handlebars = require("handlebars/runtime")
            require('../templates/template.js');
            var template = Handlebars.templates['cim_aggregate_component_menu'];
            console.log(template(data));
        }
    });
}
else {
    cimheritance.generateSuperClassTree(superClassTree);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cimheritance
}
