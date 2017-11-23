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

    function handler() {
        //console.log(this.getResponseHeader('content-type'));
    }

    var includeFile = function(fileName, callback) {
        let dom = svgNode.ownerDocument;
        let newTag = dom.createElement("script");
        newTag.type = "text/javascript";
        newTag.src=fileName;
        if ( callback != undefined ) {
            newTag.onload=function() {
                callback();
            };
        }
        svgNode.parentElement.appendChild(newTag);
    };

    var applyTemplate = function(data) {
        var template = Handlebars.templates['cim2svg'];
        return template(data);
    };

    var loadFile = function(fileContents) {
        if (cimxml.moreXmlData(fileContents)) {
            baseJson = cimxml.getBaseJson();
            templateJson = cimjson.getTemplateJson(baseJson);
            svgNode.getElementById('diagram-elements').innerHTML = applyTemplate(templateJson);
            if(sidebarNode != null) {
                cimmenu.populateSidebar(sidebarNode, templateJson);
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

    var loadViewAndMenu = function(componentAttributes) {
        includeFile("src/cimview.js", function() {
            cimview.init(svgNode);
        });
        includeFile("src/cimmenu.js", function() {
            cimmenu.init(componentAttributes)
        });
    };

    var updateComponent = function(type, id, attribute, value) {
        cimxml.updateComponentInBaseJson(type, id, attribute, value)
        baseJson = cimxml.getBaseJson();
        templateJson = cimjson.getTemplateJson(baseJson);
        if (attribute === "cim:IdentifiedObject.name") {
            buttonId = '#' + id + "-sidebar-button"
            button = sidebarNode.querySelector(buttonId)
            button.innerHTML = value;
        }
    };

    var loadXml = function(fileName, callback) {
        // Create a connection to the file.
        var Connect = new XMLHttpRequest();
        // Define which file to open and
        Connect.open("GET", fileName, true);
        Connect.setRequestHeader("Content-Type", "text/xml");
        Connect.onreadystatechange = handler;
        Connect.onload = function (e) {
            if(Connect.readyState === 4) {
                if(Connect.status === 200) {
                    callback(Connect.responseXML);
                }
                else {
                    console.log(Connect.statusText);
                }
            }
        };
        // send the request.
        Connect.send(null);
    };

    return {
        init : function(svg, sidebar, componentAttributes) {
            svgNode = svg;
            sidebarNode = sidebar;
            includeFile("handlebars.runtime.js", loadViewAndMenu(componentAttributes));
            includeFile("src/cimxml.js");
            includeFile("templates/template.js");
            includeFile("src/cimjson.js");
            loadXml("templates/generated_add_components/menu.xml", function(xml){
                accordion = sidebarNode.querySelector('#component-creation')
                accordion.innerHTML = xml.documentElement.innerHTML;
            });
        },
        setSVG : function(svg) {
            svgNode = svg;
        },
        loadFile,
        setFileCount,
        updateComponent,
    };

}());

if (cimsvg.isNode) {
    module.exports = {
        cimsvg 
    }
}
