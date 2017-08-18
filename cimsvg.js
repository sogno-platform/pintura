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

var cimsvg = cimsvg || (function() {

    var svgNode = null;
    var xmlNode = null;
    var pinturaNode = null;
    var sidebarNode = null;

    var includeFile = function(fileName) {
        let dom = svgNode.ownerDocument;
        let newTag = dom.createElement("script");
        newTag.type = "text/javascript";
        newTag.src=fileName;
        svgNode.appendChild(newTag);
    };

    var applyTemplate = function(data) {
        var template = Handlebars.templates['cim2svg'];
        return template(data);
    };

    var loadFile = function(fileContents) {
        if (cimxml.moreXmlData(fileContents)) {
            baseJson = cimxml.getBaseJson();
            console.log(baseJson);
            templateJson = cimjson.getTemplateJson(baseJson);
            console.log(templateJson);
            svgNode.getElementById('diagram-elements').innerHTML = applyTemplate(templateJson);
            if(sidebarNode != null) {
                cimmenu.populateSidebar(sidebarNode, templateJson);
            }
            if(xmlNode != null) {
                cimmenu.populateRawXML(xmlNode, cimxml.getRawXML());
            }
            if(pinturaNode != null) {
                cimmenu.populatePinturaData(pinturaNode, templateJson);
            }
        }
    };

    var setFileCount = function(count) {
        cimxml.setRdfFileCount(count);
    };

    var isNode = false;
    if (typeof module !== 'undefined' && module.exports) {
        isNode = true;
    }

    var addSidebar = function(node) {
        sidebarNode = node;
        cimmenu.init(sidebarNode);
    };

    var addRawXML = function(node) {
        xmlNode = node;
    };

    var addPinturaData = function(node) {
        pinturaNode = node;
    };

    return {
        init : function(node) {
            svgNode = node;
            includeFile("cimxml.js");
            includeFile("templates/template.js");
            includeFile("src/model/power/components.js");
            includeFile("src/model/diagram.js");
            includeFile("src/model/cimjson.js");
        },
        loadFile,
        setFileCount,
        addSidebar,
        addRawXML,
        addPinturaData,
    };

}());

if (cimsvg.isNode) {
    module.exports = {
        cimsvg 
    }
}
