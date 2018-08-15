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
    require('../hbrs_templates/handlebarsHelpers.js')
    const templates = require('../generated/template.js');
    global.cimxml = require('./cimxml.js');
    global.cimview = require('./cimview.js');
    global.cimedit = require('./cimedit.js');
    global.cimmenu = require('./cimmenu.js');
    global.cimjson = require('./cimjson.js');
    global.contextmenu = require('./contextmenu.js');
    global.common = require('./common.js');
};

class cimsvg {

    constructor(svg, sidebar, floatingMenuNode) {
        this.svgNode = svg;
        this.sidebarNode = sidebar;
        this.cimview = new cimview(svg);
        this.floatingMenu = floatingMenuNode;
        if(floatingMenuNode != undefined) {
            this.loadXml("generated/add_components_menu.xml", this, function(xml) {
                return xml.documentElement.outerHTML;
            });
        }
        this.addingType = null;
        this.addingPoint = null;
        this.currentDiagramId = undefined;
        this.xmlNode = null;
        this.pinturaNode = null;
        this.nameCounter = {};
        this.xmlDoc;
        this.rdfFileCount = 0;
        this.rdfFileReceived = 0;
        this.jsonBaseData = null;
        this.contextMenu = null;
    }

    setContextMenu(menu) {
        this.contextMenu = menu;
    };

    getContextMenu() {
        return this.contextMenu;
    };

    /*
     * How many pieces the data will be arriving in
     */
    setFileCount(count) {
        this.rdfFileCount = count;
    };

    resetFileReceivedCount() {
        this.rdfFileReceived = 0;
    };

    incFileReceivedCount() {
        this.rdfFileReceived++;
    };

    /*
     * Have we received all the data files yet?
     */
    checkIfParseReady() {
        if (this.rdfFileReceived > 0) {
            if (this.rdfFileCount == this.rdfFileReceived) {
                return true;
            }
        }

    };

    fit() {
        this.cimview.fit();
    };

    getXmlDoc() {
        return this.xmlDoc;
    };

    setXmlDoc(doc) {
        this.xmlDoc = doc;
    };

    getBaseJson() {
        if (this.jsonBaseData === null) {
            this.jsonBaseData = {}
        }
        return this.jsonBaseData;
    };

    setBaseJson(data) {
        this.jsonBaseData = data;
    };

    getNameCounter(type) {
        if (this.nameCounter[type] === undefined){
            this.nameCounter[type] = "0";
        }
        return (++this.nameCounter[type]).toString();
    };

    getComp() {
        return this.componentCreationHtml;
    };

    setCurrentDiagramId(diagramId) {
        this.currentDiagramId = diagramId;
    };

    getObjectsOfType(type) {
        return this.getBaseJson()[type];
    };

    getCurrentDiagramId() {
        return this.currentDiagramId;
    };

    static getCimsvg() {
        return cimsvg.currentCimsvgClass;
    };

    static setCimsvg(cimsvgClass) {
        cimsvg.currentCimsvgClass = cimsvgClass;
    };

    getFloatingMenuNode () {
        return this.componentCreationNode ;
    };

    includeFile (fileName, callback) {
        let dom = this.svgNode.ownerDocument;
        let newTag = dom.createElement("script");
        newTag.type = "text/javascript";
        newTag.src=fileName;
        if ( callback != undefined ) {
            newTag.onload=function() {
                callback();
            };
        }
        this.svgNode.parentElement.appendChild(newTag);
    };

    applyTemplate(data) {
        let template = Handlebars.templates['cim2svg'];
        return template(data);
    };

    addDiagram() {
        return this.addComponentAndApplyTemplates("cim:Diagram")
    };

    addComponent (type) {
        if (cimedit.typeIsVisible(type)) {
            this.addingType = type;
            let image = cimjson.getImageName(type);
            let backingList = this.svgNode.querySelectorAll('.backing');
            backingList.forEach(function(backing){
                backing.style.cursor = 'url("' + image + '"), crosshair';
            });
            this.hideFloatingMenu();
        }
        else {
            return addComponentAndApplyTemplates(type);
        }
    };

    removeComponent(type, rdfid) {
        let baseJson = this.getBaseJson();
        cimedit.removeComponentFromBaseJson(baseJson, type, rdfid)
        this.applyTemplates();
    };

    addTerminal(type, rdfid) {
        let baseJson = this.getBaseJson();
        cimedit.addTerminal(baseJson, type, rdfid);
    };

    removeTerminal(type, rdfid, terminalId) {
        let baseJson = this.getBaseJson();
        if (baseJson[type] && baseJson[type][rdfid]) {
            let terminals = baseJson[type][rdfid][common.pinturaTerminals()];
            if (terminals) {
                let index = terminals.indexOf(terminalId);
                if (index != -1) {
                    terminals.splice(index)
                }
                else {
                    console.error("Cannot remove terminal " + terminalId + " because it does not exist in the list.")
                }
            }
            else {
                console.error("Cannot remove terminal " + terminalId + " because there are none.")
            }
            this.removeComponent("cim:Terminal", terminalId)
        }
    };

    populateAttributes(type, id) {
        cimmenu.populateAttributes(this.floatingMenu, type, id);
    };

    populateAttributesIdOnly(id) {
        cimmenu.populateAttributesIdOnly(this.floatingMenu, id);
    };

    populateComponentCreationMenu() {
        cimmenu.populateFloatingMenu(this.floatingMenu, this.componentCreationHtml, "Add Component");
    };

    populateTerminals(type, rdfid) {
        cimmenu.populateTerminals(this.floatingMenu, type, rdfid)
    };

    checkComponentReadyToAdd(evt) {
        let rdfid = null;
        this.addingPoint = this.cimview.getMouseCoordFromWindow(evt);
        if (this.addingType != null) {
            let type = this.addingType;
            let point = this.addingPoint;
            rdfid = this.addComponentAndApplyTemplates(type, point);
            this.addingType = null;
            this.addingPoint = null;
        };
        let backingList = this.svgNode.querySelectorAll('.backing')
        backingList.forEach(function(backing) {
            backing.style.cursor = 'initial';
        });
        return rdfid;
    };

    applyDiagramTemplate(templateJson) {
        let templateHtml = this.applyTemplate(templateJson);
        let diagramList = this.svgNode.querySelectorAll('.diagrams')
        diagramList.forEach(function(diagram) {
            diagram.innerHTML = templateHtml;
        });
    };

    applyTemplates() {
        let baseJson = this.getBaseJson();
        let templateJson = cimjson.getTemplateJson(baseJson);
        this.applyDiagramTemplate(templateJson)
        if(this.sidebarNode != null) {
            cimmenu.populateSidebar(this.sidebarNode, templateJson);
        }
    };

    addComponentAndApplyTemplates(type, point) {
        let baseJson = this.getBaseJson();
        let rdfid = cimedit.addComponentToBaseJson(baseJson, type, point);
        this.applyTemplates();
        return rdfid;
    };

    clearAllData() {
        this.xmlNode = null;
        this.addingType = null;
        this.addingPoint = null;
        this.currentDiagramId = undefined;
        this.nameCounter = {};
        this.xmlDoc = null;
        this.rdfFileCount = 0;
        this.rdfFileReceived = 0;
        this.jsonBaseData = null;
    };

    loadFile(fileContents) {
        if (cimxml.moreXmlData(fileContents)) {
            let baseJson = this.getBaseJson();
            let templateJson = cimjson.getTemplateJson(baseJson);
            this.applyDiagramTemplate(templateJson)
            if(this.sidebarNode != null) {
                cimmenu.populateSidebar(this.sidebarNode, templateJson);
            }
        }
    };

    exportXmlData() {
        return cimxml.getBaseXML(this.getBaseJson())
    };

    saveGridXml() {
        saveFile(this.exportXmlData())
    };

    updateComponent(type, id, attribute, value) {
        cimxml.updateComponentInBaseJson(type, id, attribute, value)
        if (attribute === "cim:IdentifiedObject.name") {
            let buttonId = '#' + id + "-sidebar-button"
            let button = this.sidebarNode.querySelector(buttonId)
            button.innerHTML = value;
        }
    };

    updateComponentRDF(type, id, attribute, rdfid) {
        let value = { "rdf:resource" : "#" + rdfid }
        cimxml.updateComponentInBaseJson(type, id, attribute, value)
        if (type == "cim:Terminal" && attribute == "cim:Terminal.TopologicalNode") {
            let baseJson = this.getBaseJson();
            cimedit.connectTerminalToTopologicalNode(baseJson, id, rdfid);
            let templateJson = cimjson.getTemplateJson(baseJson);
            this.applyDiagramTemplate(templateJson)
        }
    };

    toggleDiagramVisible(id, icon) {
        let diagram = this.svgNode.querySelector('#' + id);
        let iconNode = this.sidebarNode.querySelector('#' + icon);
        if (diagram.classList.contains('invisible')) {
            diagram.classList.remove('invisible');
            iconNode.innerHTML = "&#9728;";
        } else {
            diagram.classList.add('invisible');
            iconNode.innerHTML = "&#9788;";
        }
    };

    loadXml(fileName, SVGclass, callback) {
        // Create a connection to the file.
        let Connect = new XMLHttpRequest();
        // Define which file to open and
        Connect.open("GET", fileName, true);
        Connect.setRequestHeader("Content-Type", "text/xml");
        Connect.onload = function (e) {
            if(Connect.readyState === 4) {
                if(Connect.status === 200) {
                    SVGclass.componentCreationHtml = callback(Connect.responseXML);
                }
                else {
                    console.error(Connect.statusText);
                }
            }
        };
        // send the request.
        Connect.send(null);
    };

    getObjectUsingId(id) {
        let baseJson = this.getBaseJson();
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

    getObjectTypeUsingId(rdfid) {
        let baseJson = this.getBaseJson();
        let type = undefined;
        for (let types in baseJson) {
            if (rdfid in baseJson[types]) {
                type = types;
                continue;
            }
        }
        return type;
    };

    getRdfResource(object) {
        if (object) {
            let rdfid = object['rdf:resource'];
            if (rdfid != undefined) {
                return rdfid.substring(1);
            }
        }
        return undefined;
    };

    getAggregateComponentsList(requestedClass, types) {

        let baseJson = this.getBaseJson();
        let aggregateComponents = { aggregates: [{ rdfid: "", name: "Select " + requestedClass }]};
        for (let index in types) {
            let type = "cim:" + types[index];
            for (let component in baseJson[type]) {
                aggregateComponents['aggregates'].push({
                    rdfid: baseJson[type][component][common.pinturaRdfid()],
                    name: baseJson[type][component]["cim:IdentifiedObject.name"],
                    type: type
                })
            }
        }
        return aggregateComponents;
    };

    getFloatingMenuNode() {
        return this.floatingMenu;
    };

    showFloatingMenu() {
        let tables = this.floatingMenu.querySelectorAll(".floating-panel-table");
        tables.forEach(function(table){
            table.classList.remove('invisible');
        });
    };

    hideFloatingMenu() {
        let tables = this.floatingMenu.querySelectorAll(".floating-panel-table");
        tables.forEach(function(table){
            table.classList.add('invisible');
        });
    };
};

cimsvg.currentCimsvgClass = null;

const currentCimsvg = function() {
    return cimsvg.getCimsvg();
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cimsvg, currentCimsvg }
    global.cimsvg = cimsvg
    global.currentCimsvg = currentCimsvg
}

