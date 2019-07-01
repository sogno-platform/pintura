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

import templates from '../handlebars/index.js';
import cimfile from './cimfile.js';
import cimxml from './cimxml.js';
import cimview from './cimview.js';
import cimedit from './cimedit.js';
import cimjson from './cimjson.js';
import common from './common.js';
import JSZip from 'jszip';
import css from '../css/svg.css';

class cimsvg {

    constructor(svg, dialog) {
        this.svgNode = svg;
        this.dialog = dialog;
        this.cimview = new cimview(svg);
        if(dialog != undefined) {
            this.loadXml("dist/add_components_menu.xml", (xml)=>{
                this.componentCreationHtml = xml.documentElement.outerHTML;
            });
            this.loadXml("dist/add_all_components_menu.xml", (xml)=>{
                this.allComponentsCreationHtml = xml.documentElement.outerHTML;
            });
        }
        this.clearAllData();
        this.cimmenu = null;
        cimsvg.setCimsvg(this);
        cimsvg.addPinturaStyle(svg, css);
    }

    static addPinturaStyle(svg, css) {
        let docu = svg.ownerDocument;
        let pinturaStyleTags = docu.querySelectorAll('style.pintura');
        let style = docu.createElement('style');
        style.type = 'text/css';
        style.classList.add('pintura');

        if (pinturaStyleTags.length < 1) {
            let head = docu.head;
            if(head === undefined) {
                console.error("Failed to get head from document.");
            }
            docu.head.appendChild(style);
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(docu.createTextNode(css));
            }
        }
    }

    setCimmenu(menu) {
        this.cimmenu = menu;
    }

    updateCimmenu(func) {
        if(this.cimmenu != null) {
            return func();
        }
        return null;
    }

    getValueOf(type, id, attribute) {
        if (id === undefined) {
            console.error("Cannot get value without id for category: ", type, " and attribute: ", attribute);
            return 0;
        }
        if (type === undefined) {
            console.error("Cannot get value without type for id: ", id, " and attribute: ", attribute);
            return 0;
        }
        let object = common.safeExtract(this.getBaseJson(), type, id);
        if (object == undefined) {
            console.error("No object with id: ", id, " in category: ", type);
            return 0;
        }
        if (attribute in object) {
            return object[attribute];
        }
        else {
            return 0;
        };
    };

    /*
     * How many pieces the data will be arriving in
     */
    setFileCount(count) {
        this.rdfFileCount = count;
    };

    updateRawComponentSearch(regexInput) {
        let regex = regexInput.toUpperCase();
        let floatingPanelList = this.floatingMenu.querySelectorAll('.floating-panel-list')
        floatingPanelList.forEach((elem)=>{
            elem.childNodes.forEach((component)=>{
                let name = component.id.toUpperCase().substr(0, regex.length);
                if (regex.match(name)) {
                    component.classList.remove('invisible')
                }
                else {
                    component.classList.add('invisible')
                }
            });
        });
    }

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

    setCurrentDiagramId(diagramId) {
        this.currentDiagramId = diagramId;
    };

    getObjectsOfType(type) {
        let baseJson=this.getBaseJson();
        let objects=common.safeExtract(baseJson, type);
        return objects;
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

    addDiagram() {
        return this.addComponentAndApplyTemplates("cim:Diagram")
    };

    isAllComponentsListVisible() {
        let visible = true;
        let tableList = this.getAllComponentsMenu().querySelectorAll('.floating-panel-table');
        tableList.forEach((table)=>{
            if (table.classList.contains('invisible')) {
                visible = false;
            }
        });
        return visible;
    };

    addRawComponent(type) {
        this.addRawComponentAndApplyTemplates(type);
        this.updateCimmenu(()=>{ this.cimmenu.populateAllComponents(); });
    };

    addComponent(type) {
        if (cimedit.typeIsVisible(type)) {
            this.addingType = type;
            let image = cimjson.getImageName(type);
            let backingList = this.svgNode.querySelectorAll('.backing');
            backingList.forEach(function(backing){
                backing.style.cursor = 'url("' + image + '"), crosshair';
            });
        }
        else {
            return this.addComponentAndApplyTemplates(type);
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

    updateGridLocation (node, length) {
        node.style.gridArea = "1 / 1 / 8 / 2";
    }

    populateDiagramLinks() {
        let baseJson = this.getBaseJson();
        /* getTemplateJson will associate the diagram objects with components */
        this.templateJson = cimjson.getTemplateJson(baseJson);
        this.updateCimmenu(()=>{ this.cimmenu.update(this.templateJson) });
    };

    populateComponentTypeListForDiagram(diagramId) {
        let diagram = common.safeExtract(this.templateJson, 'Diagram', diagramId)
        if (diagramId) {
            let justThisDiagram = { "Diagram": { [diagramId]: diagram } }
            let componentTypesPanel = this.getColumnPanel('.component-types-panel');
            if(componentTypesPanel != null) {
                this.updateCimmenu(()=>{ this.cimmenu.populatePanelWithTemplate(componentTypesPanel, justThisDiagram, 'pinturaJson2DiagramComponentTypeList', "Component Types"); });
            }
        }
    };

    populateComponentsOfTypeListForDiagramAndComponentType(diagramId, componentType) {
        let components = common.safeExtract(this.templateJson, 'Diagram', diagramId, 'components', componentType)
        let diagram = common.safeExtract(this.templateJson, 'Diagram', diagramId)
        if (diagramId) {
            let justThisDiagram = { "Diagram": { [diagramId]: diagram } }
            let justTheseComponents = { "Diagram": { [diagramId]: { 'components': { [componentType]: components } } } };
            let componentsPanel = this.getColumnPanel('.components-panel');
            if(componentsPanel != null) {
                this.updateCimmenu(()=>{ this.cimmenu.populatePanelWithTemplate(componentsPanel, justTheseComponents, 'pinturaJson2ComponentOfTypeList', "Component Types"); });
            }
        }
    };

    loadUri() {
        let uri = this.uriChooser()
        if (uri !== undefined) {
            this.downloadUri(uri);
        }
    };

    saveToUri() {
        let uri = this.uriChooser()
        if (uri !== undefined) {
            this.uploadToUri(uri);
        }
    };

    uriChooser(prev) {
        let response = prompt("Enter URI", prev || this.uri);

        if (response == null || response == "") {
            return undefined;
        } else {
            return response;
        }
    };

    populateAttributes(type, id) {
        this.updateCimmenu(()=>{ return this.cimmenu.populateAttributes(type, id); });
    };

    populateAttributesIdOnly(id) {
        this.updateCimmenu(()=>{ return this.cimmenu.populateAttributesIdOnly(id); });
    };

    /*
     * This function needs to call into the model generation to discover what
     * components are available.
     */
    populateComponentCreationMenu() {
        let accordionList = this.dialog.querySelectorAll('.dialog-list')
        accordionList.forEach((accordion)=>{
            accordion.innerHTML = this.componentCreationHtml;
        });
        let titleList = this.dialog.querySelectorAll('.dialog-title')
        titleList.forEach((title)=>{
            title.innerHTML = "Add Component";
        });
        this.showDialog();
    };

    populateTerminals(type, rdfid) {
        this.updateCimmenu(()=>{ this.cimmenu.populateTerminals(type, this.getCimVersionFolder(), rdfid) });
    };

    checkComponentReadyToAdd(evt) {
        let visibleMenus = this.updateCimmenu(()=>{ return this.cimmenu.getListOfVisibleMenus() });
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
        this.updateCimmenu(()=>{ this.cimmenu.redrawMenus(visibleMenus); });
        return rdfid;
    };

    applyDiagramTemplate(templateJson) {
        let templateHtml = templates.cim2svg(templateJson);
        let diagramList = this.svgNode.querySelectorAll('.diagrams')
        diagramList.forEach(function(diagram) {
            diagram.innerHTML = templateHtml;
        });
    };

    applyTemplates() {
        let baseJson = this.getBaseJson();
        this.templateJson = cimjson.getTemplateJson(baseJson);
        this.applyDiagramTemplate(this.templateJson)
        this.updateCimmenu(()=>{ this.cimmenu.update(this.templateJson, baseJson) });
    };

    addRawComponentAndApplyTemplates(type, point) {
        let baseJson = this.getBaseJson();
        let rdfid = cimedit.addRawComponentToBaseJson(baseJson, type, point);
        this.applyTemplates();
        return rdfid;
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
        this.templateJson = null;
        this.cimVersion = 'cim16';
        this.cimVersionFromFile = false;
        this.entsoe = "";
    };

    getCimVersionFolder() {
        return this.cimVersion + this.entsoe;
    };

    getCimversion() {
        return this.cimVersion;
    };

    setCimVersion(cim, entsoe) {
        let regex = /.*CIM-schema-(.*)#/.exec(cim)
        if (regex.length > 1) {
            let newCimVersion = regex[1];
            if (this.cimVersionFromFile) {
                if (this.cimVersion != newCimVersion) {
                    console.error("Files loaded with non-matching cim versions!");
                    return false;
                }
            }
            this.cimVersion = newCimVersion;
            this.cimVersionFromFile = true;
        }
        else {
            console.error("Failed to parse cim version.");
        }
        this.entsoe = entsoe ? "_entsoe" : "";
        return true;
    };

    loadFile(fileContents) {
        if (!this.getXmlDoc()) {
            this.setXmlDoc(cimxml.getDOM("<rdf:RDF "+cimxml.xmlns()+"/>"));
        }

        let cimParse = cimxml.moreXmlData(fileContents, this.getXmlDoc());
        if (cimParse) {
            if (this.rdfFileCount === 1) {
                this.setCimVersion(cimParse.cimVersion, cimParse.entsoe);
            }
            else {
                this.cimVersion = "cgmes";
                this.entsoe     = "";
            }
            let oSerializer = cimxml.getXMLSerializer();
            var sXML = oSerializer.serializeToString(this.getXmlDoc());
            this.incFileReceivedCount();
            if (this.checkIfParseReady()) {
                this.setBaseJson(cimxml.createObjectGraphFromXml(this.getXmlDoc()));
                this.resetFileReceivedCount(0);
                this.setFileCount(0);
                this.populateDiagramLinks();
                this.applyDiagramTemplate(this.templateJson)
            }
        }

    };

    exportXmlData() {
        return cimxml.getBaseXML(this.getBaseJson());
    };

    exportSVGData() {
        let SVGDiagrams = this.svgNode.querySelectorAll('.diagrams');
        let SVGData = "";
        SVGDiagrams.forEach((data)=>{
            SVGData += data.outerHTML;
        });
        let templateData = {
            style: css,
            diagrams: SVGData,
            viewBox: this.svgNode.getAttribute('viewBox'),
        }
        let returnData = templates.cim2svg(templateData);
        return (returnData);
    };

    saveGridXml(filename) {
        cimfile.saveFile(this.exportXmlData(), filename);
    };

    saveToSVG() {
        cimfile.saveFile(this.exportSVGData(), "pintura.svg");
    };

    saveTemplateJson() {
        cimfile.saveFile(JSON.stringify(this.templateJson, true, 2), "pintura.json");
    };

    saveToMultipartZip() {
        cimfile.convertToMultipartZip(this.getBaseJson(), "pintura.zip");
    };

    updateComponentInBaseJson(type, id, attribute, value) {
        if (this.getBaseJson()[type][id] === undefined) {
            console.error("Cannot find " + id + " in list of " + type);
        }
        else {
            this.getBaseJson()[type][id][attribute] = value;
            let baseJson = this.getBaseJson();
            this.templateJson = cimjson.getTemplateJson(baseJson);
            this.updateCimmenu(()=>{ this.cimmenu.updateComponent(type, id, attribute, value) });
            this.updateCimmenu(()=>{ this.cimmenu.update(this.templateJson) });
        }
    };

    updateComponent(type, id, attribute, value) {
        this.updateComponentInBaseJson(type, id, attribute, value);
    };

    updateComponentRDF(type, id, attribute, rdfid) {
        let value = { "rdf:resource" : "#" + rdfid }
        this.updateComponentInBaseJson(type, id, attribute, value)
        this.updateCimmenu(()=>{ this.cimmenu.updateComponent(type, id, attribute, value) });
        if (type == "cim:Terminal" && attribute == "cim:Terminal.TopologicalNode") {
            let baseJson = this.getBaseJson();
            cimedit.connectTerminalToTopologicalNode(baseJson, id, rdfid);
            /* TODO: are we doing too much work here? */
            let templateJson = cimjson.getTemplateJson(baseJson);
            this.applyDiagramTemplate(templateJson)
        }
    };

    toggleDiagramVisible(id, icon) {
        let diagram = this.svgNode.querySelector('#' + id);
        let diagramComponents = this.cimmenu.panels['diagramsPanel'];
        if(diagramComponents != null) {
            let iconNode = diagramComponents.querySelector('#' + icon);
            if (diagram.classList.contains('invisible')) {
                diagram.classList.remove('invisible');
                iconNode.innerHTML = "&#9728;";
            } else {
                diagram.classList.add('invisible');
                iconNode.innerHTML = "&#9788;";
            }
        }
    };

    importZip(uri, blob) {
        let archive = new JSZip();
        archive.loadAsync(blob, {checkCRC32: true})
            .then((zip)=>{
                let files = Object.keys(zip.files);
                this.setFileCount(files.length);
                files.forEach((filename)=>{
                    let file = zip.files[filename];
                    file.async("string").then((output)=>{
                        this.loadFile(output);
                    });
                });
            }, (error)=>{
                console.error("failure", error);
            }
        );
    };

    setTitle(title) {
        this.svgNode.ownerDocument.documentElement.querySelectorAll('title').forEach((elem)=> {
            elem.innerHTML = title;
        });
    };

    uploadToUri(uri) {
        let fileString = "";
        let uriSuffix = uri.substring(uri.length-4)
        if (uriSuffix == '.xml') {
            let data = this.exportXmlData();
            cimfile.uploadAsText(data, uri);
        }
        else if (uriSuffix == '.zip') {
            let data = this.exportXmlData();
            cimfile.uploadAsZip(data, uri);
        }
    };

    /*
     * This function is used to download models using
     * the uri= parameter in the url
     */
    downloadUri(uri) {
        let length=uri.length;
        if(length > 4) {
            let uriSuffix = uri.substring(length-4)
            fetch(uri,{ headers: { "Accept": "application/xml, application/json, text/plain" }}).then((response)=>{
                if (uriSuffix == '.xml') {
                    response.text().then((text)=>{
                        this.setFileCount(1);
                        this.loadFile(text);
                        this.setTitle(uri);
                        this.uri = uri;
                    })
                }
                else if (uriSuffix == '.zip') {
                    response.blob().then((blob)=>{
                        this.importZip(uri, blob);
                        this.setTitle(uri);
                        this.uri = uri;
                    });
                }
            });
        }
    };

    /*
     * This function is used to import the menu xml
     */
    loadXml(fileName, callback) {
        // Create a connection to the file.
        let Connect = new XMLHttpRequest();
        // Define which file to open and
        Connect.open("GET", fileName, true);
        Connect.setRequestHeader("Content-Type", "text/xml");
        Connect.onerror = function (e) {
            alert("Failed to download " + fileName)
        }
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

    getObjectNameUsingTypeAndId(type, rdfid) {
        return common.safeExtract(this.getBaseJson(), type, rdfid, common.identifiedObjectName())
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

    showFileMenu() {
        this.showCornerPanel('.diagrams-panel');
    };

    hideFileMenu() {
            this.hideCornerPanel('.diagrams-panel');
    };

    showCornerPanel(name) {
        let tables = this.getColumnPanel(name).querySelectorAll(".floating-panel-table");
        tables.forEach(function(table){
            table.classList.remove('invisible');
        });
    };

    hideCornerPanel(name) {
        let tables = this.getColumnPanel(name).querySelectorAll(".floating-panel-table");
        tables.forEach(function(table){
            table.classList.add('invisible');
        });
    };

    closeDialog() {
        this.dialog.classList.add('invisible');
    };

    showDialog() {
        this.dialog.classList.remove('invisible');
    };

    hideAllComponentsList() {
        let tables = this.getAllComponentsMenu().querySelectorAll(".floating-panel-table");
        tables.forEach(function(table){
            table.classList.add('invisible');
        });
        let switchList = this.getAllComponentsMenu().querySelectorAll('.switch');
        switchList.forEach(function(sw){
            sw.classList.remove('invisible');
        });
    };

    static terminalAndPointLimits() {
        return cimedit.terminalAndPointLimits;
    };

    static typeIsVisible(type) {
        return cimedit.typeIsVisible(type);
    };
};

cimsvg.currentCimsvgClass = null;

const currentCimsvg = function() {
    return cimsvg.getCimsvg();
};

export { cimsvg, currentCimsvg, cimxml, cimfile }

