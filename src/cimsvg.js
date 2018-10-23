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
    global.JSZip = require('jszip');
};

class cimsvg {

    constructor(svg, sidebar, floatingMenuNode, allComponents) {
        this.svgNode = svg;
        this.sidebarNode = sidebar;
        this.cimview = new cimview(svg);
        this.floatingMenu = floatingMenuNode;
        this.allComponents = allComponents;
        if(floatingMenuNode != undefined) {
            this.loadXml("generated/add_components_menu.xml", (xml)=>{
                this.componentCreationHtml = xml.documentElement.outerHTML;
            });
            this.loadXml("generated/add_all_components_menu.xml", (xml)=>{
                this.allComponentsCreationHtml = xml.documentElement.outerHTML;
            });
        }
        this.contextMenu = null;
        this.pinturaNode = null;
        this.clearAllData();
    }

    setContextMenu(menu) {
        this.contextMenu = menu;
    };

    getContextMenu() {
        return this.contextMenu;
    };

    getSelectFromFloatingMenuNode(id) {
        return this.floatingMenu.querySelector('#'+id);
    };

    getValueOf(type, id, attribute) {
        let object = common.safeExtract(this.getBaseJson(), type, id);
        if (object == undefined) {
            console.error("No object with id: ", id, " in category: ", type);
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

    applyTemplate(data, templateName) {
        let template = Handlebars.templates[templateName];
        return template(data);
    };

    addDiagram() {
        return this.addComponentAndApplyTemplates("cim:Diagram")
    };

    isAllComponentsListVisible() {
        let visible = true;
        let tableList = this.allComponents.querySelectorAll('.floating-panel-table');
        tableList.forEach((table)=>{
            if (table.classList.contains('invisible')) {
                visible = false;
            }
        });
        return visible;
    };

    addRawComponent(type) {
        this.addRawComponentAndApplyTemplates(type);
        if (this.isAllComponentsListVisible()) {
            this.populateAllComponents();
        }
    };

    addComponent(type) {
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

    populateFileLinks() {
        let items = `
          <ul class="floating-panel-list">
            <li class="wide-row list-subtitle">
              <input id="fileopen" type="file" style="display:none" multiple="true"/>
              <a href="#" class="button" type="file" onclick="fileopen.click();currentCimsvg().hideFloatingMenu()">Open file &#x1F5BF;</a>
            </li>
            <li class="wide-row list-subtitle">
              <a href="#" class="button" type="file" onclick="currentCimsvg().loadUri();currentCimsvg().hideFloatingMenu()">Open link &#x1F517;</a>
            </li>
            <li class="wide-row list-subtitle">
              <input id="filesave" type="hidden" style="display:none"/>
              <a href="#" class="button" type="file" onclick="currentCimsvg().saveGridXml();currentCimsvg().hideFloatingMenu()">Save to file &#x1F5BF;</a>
            </li>
            <li class="wide-row list-subtitle">
              <a href="#" class="button" type="file" onclick="currentCimsvg().saveToUri();currentCimsvg().hideFloatingMenu()">Save to link &#x1F517;</a>
            </li>
          </ul>
        `
        cimmenu.populateFloatingMenu(this.floatingMenu, items, "File menu");
        this.floatingMenu.querySelectorAll('#fileopen').forEach((elem)=>{ elem.addEventListener('change', readFile, false); });
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
        cimmenu.populateAttributes(this.floatingMenu, type, this.getCimVersionFolder(), id);
    };

    populateAttributesIdOnly(id) {
        cimmenu.populateAttributesIdOnly(this.floatingMenu, this.getCimVersionFolder(), id);
    };

    populateComponentCreationMenu() {
        cimmenu.populateFloatingMenu(this.floatingMenu, this.componentCreationHtml, "Add Component");
    };

    populateAllComponentsCreationMenu() {
        cimmenu.populateFloatingMenu(this.floatingMenu, this.allComponentsCreationHtml, "Add Component");
    };

    populateTerminals(type, rdfid) {
        cimmenu.populateTerminals(this.floatingMenu, type, this.getCimVersionFolder(), rdfid)
    };

    populateAllComponents() {
        let baseJson = this.getBaseJson();
        let items = this.applyTemplate(baseJson, 'pinturaJson2AllComponentsList');
        cimmenu.populateFloatingMenu(this.allComponents, items, 'All Components');
        let switchList = this.allComponents.querySelectorAll('.switch');
        switchList.forEach((sw)=>{
          sw.classList.add('invisible');
        });
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
        let templateHtml = this.applyTemplate(templateJson, 'cim2svg');
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
        this.cimVersion = 'cim16';
        this.cimVersionFromFile = false;
        this.entsoe = "";
    };

    getCimVersionFolder() {
        return this.cimVersion + this.entsoe;
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
        if (cimxml.moreXmlData(fileContents)) {
            let baseJson = this.getBaseJson();
            /* getTemplateJson will associate the diagram objects with components */
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
            /* TODO: are we doing too much work here? */
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

    uploadAsZip(xml, uri) {
        let zip = new JSZip();
        zip.file("pinturaGrid.xml", xml);
        zip.generateAsync({type:"blob"})
        .then(function (blob) {
            var oReq = new XMLHttpRequest();
            oReq.open("POST", uri, true);
            oReq.setRequestHeader('Accept', 'text/plain')
            oReq.onreadystatechange = function (oEvent) {
                if (oReq.readyState === 4) {
                    if (oReq.status != 200) {
                        console.error"Error", oReq.statusText);
                    }
                }
            };
            var formData = new FormData();
            formData.append("pinturaGrid.zip", blob);
            oReq.send(formData);
        });
    };

    uploadAsText(xml, uri) {
        fetch(uri, {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'text/plain'
          },
          body: xml
        }).then(res=>res.text())
          .then(res => { let json = JSON.parse(res); alert(json['msg']) });
    };

    uploadToUri(uri) {
        let s = new XMLSerializer();
        let fileString = "";
        let uriSuffix = uri.substring(uri.length-4)
        if (uriSuffix == '.xml') {
            let data = this.exportXmlData();
            this.uploadAsText(data, uri);
        }
        else if (uriSuffix == '.zip') {
            let data = this.exportXmlData();
            this.uploadAsZip(data, uri);
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

    hideAllComponentsList() {
        let tables = this.allComponents.querySelectorAll(".floating-panel-table");
        tables.forEach(function(table){
            table.classList.add('invisible');
        });
        let switchList = this.allComponents.querySelectorAll('.switch');
        switchList.forEach(function(sw){
            sw.classList.remove('invisible');
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

