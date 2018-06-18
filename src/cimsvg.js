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
    require('../templates/handlebarsHelpers.js')
    var templates = require('../templates/template.js');
    global.cimxml = require('./cimxml.js');
    global.cimview = require('./cimview.js');
    global.cimedit = require('./cimedit.js');
    global.cimmenu = require('./cimmenu.js');
    global.cimjson = require('./cimjson.js');
    global.common = require('./common.js');
};

var cimsvg = cimsvg || (function() {

    var svgNode = null;
    var xmlNode = null;
    var pinturaNode = null;
    var sidebarNode = null;
    var addingType = null;
    var addingPoint = null;
    var componentCreationNode = null;
    var componentAttributesNode = null;
    var componentTerminalsNode = null;

    const getComponentTerminalsNode = function() {
        return componentTerminalsNode;
    };

    const getComponentCreationNode = function() {
        return componentCreationNode ;
    };

    const getComponentAttributesNode = function() {
        return componentAttributesNode ;
    };

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
        if (cimedit.typeIsVisible(type)) {
            addingType = type;
            image = cimjson.getImageName(type);
            let backing = document.getElementById("backing");
            backing.style.cursor = 'url("' + image + '"), crosshair';
            hideContainer('component-creation');
            hideContainer('component-attributes');
        }
        else {
            return addComponentAndApplyTemplates(type);
        }
    };

    var removeComponent = function(type, rdfid) {
        let baseJson = cimxml.getBaseJson();
        cimedit.removeComponentFromBaseJson(baseJson, type, rdfid)
        applyTemplates();
    };

    var addTerminal = function(type, rdfid) {
        let baseJson = cimxml.getBaseJson();
        cimedit.addTerminal(baseJson, type, rdfid);
    };

    var removeTerminal = function(type, rdfid, terminalId) {
        let baseJson = cimxml.getBaseJson();
        if (baseJson[type] && baseJson[type][rdfid]) {
            let terminals = baseJson[type][rdfid]['terminals'];
            if (terminals) {
                let index = terminals.indexOf(terminalId);
                if (index != -1) {
                    terminals.splice(index)
                 }
            }
        }
    };

    const populateTerminals = function(type, rdfid) {
        cimmenu.populateTerminals(componentTerminalsNode, type, rdfid)
        hideContainer('component-attributes')
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

    var applyTemplates = function() {
        let baseJson = cimxml.getBaseJson();
        let templateJson = cimjson.getTemplateJson(baseJson);
        svgNode.getElementById('diagrams').innerHTML = applyTemplate(templateJson);
        if(sidebarNode != null) {
            cimmenu.populateSidebar(sidebarNode, templateJson);
        }
    };

    var addComponentAndApplyTemplates = function(type, point) {
        let baseJson = cimxml.getBaseJson();
        let rdfid = cimedit.addComponentToBaseJson(baseJson, type, point);
        applyTemplates();
        return rdfid;
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

    const saveGridXml = function() {
        saveFile(cimxml.getBaseXML())
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
        if (attribute === "cim:IdentifiedObject.name") {
            buttonId = '#' + id + "-sidebar-button"
            button = sidebarNode.querySelector(buttonId)
            button.innerHTML = value;
        }
    };

    var updateComponentRDF = function(type, id, attribute, rdfid) {
        let value = { "rdf:resource" : "#" + rdfid }
        cimxml.updateComponentInBaseJson(type, id, attribute, value)
        if (type == "cim:Terminal" && attribute == "cim:Terminal.TopologicalNode") {
            baseJson = cimxml.getBaseJson();
            cimedit.connectTerminalToTopologicalNode(baseJson, id, rdfid);
            templateJson = cimjson.getTemplateJson(baseJson);
            svgNode.getElementById('diagrams').innerHTML = applyTemplate(templateJson);
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

    const getObjectUsingId = function(id) {
        let baseJson = cimxml.getBaseJson();
        let type = undefined;
        for (let types in baseJson) {
            for (let rdfid in baseJson[types]) {
                if (id == rdfid) {
                    type = types;
                    continue;
                }
            }
        }
        if (type != undefined) {
            return baseJson[type][id];
        }
        else {
            return undefined;
        }
    };

    const getObjectTypeUsingId = function(rdfid) {
        let baseJson = cimxml.getBaseJson();
        let type = undefined;
        for (let types in baseJson) {
            if (rdfid in baseJson[types]) {
                type = types;
                continue;
            }
        }
        return type;
    };


    const getRdfResource = function(object) {
        if (object) {
            let rdfid = object['rdf:resource'];
            if (rdfid != undefined) {
                var idSubString = rdfid.substring(1);
                return idSubString;
            }
        }
        return undefined;
    };

    var loadDependencies = function(componentCreation) {
        includeFile("handlebars.runtime.js", function() {
            includeFile("src/cimview.js", function() {
                cimview.init(svgNode);
                if(sidebarNode != undefined) {
                    includeFile("src/cimedit.js", function() {});
                    includeFile("src/cimmenu.js", function() {
                        loadXml("templates/add_components_menu.xml", function(xml){
                            cimmenu.init(componentCreation, xml)
                        });
                    });
                }
                includeFile("templates/template.js", function(){
                    includeFile("src/cimxml.js", function(){
                        includeFile("src/cimjson.js", function(){});
                    });
                });
            });
        });
    };

    const getAggregateComponentsList = function(requestedClass, types) {

        let baseJson = cimxml.getBaseJson();
        let aggregateComponents = { aggregates: [{ rdfid: "", name: "Select " + requestedClass }]};
        for (let index in types) {
            let type = "cim:" + types[index];
            for (let component in baseJson[type]) {
                aggregateComponents['aggregates'].push({
                    rdfid: baseJson[type][component]['rdfid'],
                    name: baseJson[type][component]["cim:IdentifiedObject.name"],
                    type: type
                })
            }
        }
        return aggregateComponents;
    };

    return {
        init : function(svg, sidebar, componentAttributes, componentCreation, componentTerminals) {
            svgNode = svg;
            sidebarNode = sidebar;
            componentAttributesNode = componentAttributes;
            componentCreationNode = componentCreation;
            componentTerminalsNode = componentTerminals;
            if (typeof module !== 'undefined' && module.exports) {
                cimview.init(svgNode);
                if(sidebarNode != undefined) {
                    loadXml("templates/add_components_menu.xml", function(xml){
                        cimmenu.init(componentCreation, xml)
                    });
                }
            }
            else {
                loadDependencies(componentCreation);
            }
        },
        setSVG : function(svg) {
            svgNode = svg;
        },
        loadFile,
        setFileCount,
        updateComponent,
        updateComponentRDF,
        addComponent,
        addTerminal,
        applyTemplates,
        removeComponent,
        removeTerminal,
        populateTerminals,
        checkComponentReadyToAdd,
        addDiagram,
        setCurrentDiagramId : function(id) { cimedit.setCurrentDiagramId(id); },
        toggleDiagramVisible,
        getAggregateComponentsList,
        getComponentAttributesNode,
        getComponentCreationNode,
        getComponentTerminalsNode,
        getObjectUsingId,
        getObjectTypeUsingId,
        getRdfResource,
        saveGridXml,
    };

}());

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cimsvg
    global.cimsvg = cimsvg
}
