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

if (typeof module !== 'undefined' && module.exports) {
    global.Handlebars = require('handlebars/runtime')
    var templates = require('../templates/template.js');
    global.cimxml = require('./cimxml.js');
    global.cimview = require('./cimview.js');
    global.cimedit = require('./cimedit.js');
    global.cimmenu = require('./cimmenu.js');
    global.cimjson = require('./cimjson.js');
};

var cimsvg = cimsvg || (function() {

    var svgNode = null;
    var xmlNode = null;
    var pinturaNode = null;
    var sidebarNode = null;
    var addingType = null;
    var addingPoint = null;

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

    var addDiagram = function() {
        addComponentAndApplyTemplates("cim:Diagram")
    };

    var addComponent = function(type) {
        addingType = type;
        image = cimjson.getImageName(type);
        let backing = document.getElementById("backing");
        backing.style.cursor = 'url("' + image + '"), crosshair';
        showContainer('component-creation');
    };

    var checkComponentReadyToAdd = function(evt) {

        addingPoint = cimview.getMouseCoordFromWindow(evt);

        if (addingType != null) {
            let type = addingType;
            let point = addingPoint;
            addComponentAndApplyTemplates(type, point);
            addingType = null;
            addingPoint = null;
        };
        let backing = document.getElementById("backing");
        backing.style.cursor = 'initial';
    };

    var addComponentAndApplyTemplates = function(type, point) {
        baseJson = cimxml.getBaseJson();
        cimedit.addComponentToBaseJson(baseJson, type, point);
        templateJson = cimjson.getTemplateJson(baseJson);
        svgNode.getElementById('diagrams').innerHTML = applyTemplate(templateJson);
        if(sidebarNode != null) {
            cimmenu.populateSidebar(sidebarNode, templateJson);
        }
    };

    var loadFile = function(fileContents) {
        if (cimxml.moreXmlData(fileContents)) {
            baseJson = cimxml.getBaseJson();
            templateJson = cimjson.getTemplateJson(baseJson);
            svgNode.getElementById('diagrams').innerHTML = applyTemplate(templateJson);
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

    var toggleDiagramVisible = function(id, icon) {
        let diagram = svgNode.getElementById(id);
        let iconNode = sidebarNode.querySelector('#' + icon);
        if (diagram.style.display == "none") {
            diagram.style.display = "";
            iconNode.innerHTML = "&#9728;";
        } else {
            diagram.style.display = "none";
            iconNode.innerHTML = "&#9788;";
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
                    console.error(Connect.statusText);
                }
            }
        };
        // send the request.
        Connect.send(null);
    };

    var loadDependencies = function(componentAttributes, componentCreation) {
        includeFile("handlebars.runtime.js", function() {
            includeFile("src/cimview.js", function() {
                cimview.init(svgNode);
                if(sidebarNode != undefined) {
                    console.log(sidebarNode)
                    includeFile("src/cimmenu.js", function() {
                        loadXml("templates/add_components_menu.xml", function(xml){
                            cimmenu.init(componentAttributes, componentCreation, xml)
                        });
                    });
                    includeFile("src/cimedit.js", function() {});
                }
                includeFile("templates/template.js", function(){
                    includeFile("src/cimxml.js", function(){
                        includeFile("src/cimjson.js", function(){});
                    });
                });
            });
        });
    };

    return {
        init : function(svg, sidebar, componentAttributes, componentCreation) {
            svgNode = svg;
            sidebarNode = sidebar;
            if (typeof module !== 'undefined' && module.exports) {
                cimview.init(svgNode);
                if(sidebarNode != undefined) {
                    loadXml("templates/add_components_menu.xml", function(xml){
                        cimmenu.init(componentAttributes, componentCreation, xml)
                    });
                }
            }
            else {
                loadDependencies(componentAttributes, componentCreation);
            }
        },
        setSVG : function(svg) {
            svgNode = svg;
        },
        loadFile,
        setFileCount,
        updateComponent,
        addComponent,
        checkComponentReadyToAdd,
        addDiagram,
        setCurrentDiagramId : function(id) { cimedit.setCurrentDiagramId(id); },
        toggleDiagramVisible,
    };

}());

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cimsvg
    global.cimsvg = cimsvg
}
