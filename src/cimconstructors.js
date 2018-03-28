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

var cimconstructors = cimconstructors || (function() {

    const getBaseType = function(xml, name) {
        let baseQuery = "/xs:schema/xs:complexType[@name='" + name + "']/xs:complexContent/xs:extension";
        let result = xml.find(baseQuery, {'xs':'http://www.w3.org/2001/XMLSchema'})

        // TODO: I think there is a better way of getting one result
        for (let match in result) {
            return result[match].attr('base').value();
        }
        return undefined
    };

    const listElements = function(xml, name) {
        let elementQuery = "/xs:schema/xs:complexType[@name='" + name + "']/xs:complexContent/xs:extension/xs:sequence/xs:element";
        let result = xml.find(elementQuery, {'xs':'http://www.w3.org/2001/XMLSchema'})
        let elements = []
        for (let match in result) {
            let element = {
                'name': result[match].attr('name').value(),
                'type': result[match].attr('type').value(),
                'minOccurs': result[match].attr('minOccurs').value(),
                'maxOccurs': result[match].attr('maxOccurs').value()
            }
            elements.push(element)
        }
        elementQuery = "/xs:schema/xs:complexType[@name='" + name + "']/xs:sequence/xs:element";
        result = xml.find(elementQuery, {'xs':'http://www.w3.org/2001/XMLSchema'})
        for (let match in result) {
            let element = {
                'name': result[match].attr('name').value(),
                'type': result[match].attr('type').value(),
                'minOccurs': result[match].attr('minOccurs').value(),
                'maxOccurs': result[match].attr('maxOccurs').value()
            }
            elements.push(element)
        }
        console.log("name: " + name)
        console.log("elements: " + JSON.stringify(elements, null, 2))
        return elements
    };

    const listSubClasses = function(xml, name, fields) {

        fields[name] = listElements(xml, name)
        let base = getBaseType(xml, name)
        if (base) {
            listSubClasses(xml, base, fields) 
        }
    };

    const executeQuery = function(xml, query) {
        let xpathResult = xml.find(query, {'xs':'http://www.w3.org/2001/XMLSchema'})
        return xpathResult
    };

    var createConstructor = function(xml, name) {
        let xpathQuery = "/xs:schema/xs:complexType[@name='" + name + "']";
        let xpathResult = xml.find(xpathQuery, {'xs':'http://www.w3.org/2001/XMLSchema'})
        for (let match in xpathResult) {
            let subClass = xpathResult[match].attr('name').value();
            console.log("found: " + subClass)
            let baseQuery = "/xs:schema/xs:complexType/xs:complexContent/xs:extension";
            let baseResult = xpathResult[match].find(baseQuery, {'xs':'http://www.w3.org/2001/XMLSchema'})
            for (let match in baseResult) {
                console.log("now : " + baseResult[match])
            }
        }
    };

    return {
        createConstructor,
        listSubClasses, 
    };
}());

let xml = libxmljs.parseXmlString('<?xml version="1.0" encoding="utf-8"?><root/>')
let xsl = xslt.loadXMLDoc("templates/merge_xml_files.xslt");
let entireModel = xslt.performXSLTTranslation(xml, xsl);

if (process.argv[2] != undefined) {
    constructorFields = {}
    cimconstructors.listSubClasses(entireModel, process.argv[2], constructorFields);
    console.log(JSON.stringify(constructorFields, null, 2))
}
else {
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cimconstructors
}
