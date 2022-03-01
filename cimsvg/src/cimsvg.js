/*
 *  Copyright © 2016-2017, RWTH Aachen University
 *  Authors: Richard Marston
 *  SPDX-License-Identifier: MPL-2.0
 */

import templates from "../handlebars/index.js";
import cimfile from "./cimfile.js";
import cimxml from "./cimxml.js";
import cimview from "./cimview.js";
import cimedit from "./cimedit.js";
import cimjson from "./cimjson.js";
import common from "./common.js";
import JSZip from "jszip";
import css from "../css/svg.css";

class cimsvg {

    constructor(cimsvgPanel, dialog) {
        logIfDebug('Logging is enabled!');
        this.cimsvgPanel = cimsvgPanel;
        this.svgNode = cimsvgPanel.querySelector("svg");
        this.readyToMove = false;
        this.processLoop = 0;
        this.dialog = dialog;
        this.cimview = new cimview(this.svgNode);
        this.clearAllData();
        this.cimmenu = null;
        cimsvg.setCimsvg(this);
        this.addPinturaStyle(cimsvgPanel.ownerDocument, css);
        this.testOnly = false;
        this.resizeAllowed = true;
        this.draggedObject = { type: undefined, dopi: undefined, id: undefined };
    }

    ghostModeOn() {
        this.updateStyle(".fillwhenstill", "{ fill: none; stroke-dasharray: 2,4; stroke-width: 0.6px }");
        this.updateStyle(".gridLine", "{ stroke: #000; stroke-dasharray: 1,20; }");
    }

    ghostModeOff() {
        this.updateStyle(".fillwhenstill", "{ fill: inherit; stroke-dasharray: 0; stroke-width: 1px; }");
        this.updateStyle(".gridLine", "{ stroke: #aaa; stroke-dasharray: 0; }");
    }

    hideSvg() {
        this.svgNode.classList.add("nopointer");
        for (let childNode in this.svgNode.childNodes) {
            if (this.svgNode.childNodes[childNode].nodeType === Node.ELEMENT_NODE)
            {
                this.svgNode.childNodes[childNode].classList.add("nodisplay");
            }
        }
    }

    showSvg() {
        this.svgNode.classList.remove("nopointer");
        for (let childNode in this.svgNode.childNodes) {
            if (this.svgNode.childNodes[childNode].nodeType === Node.ELEMENT_NODE)
            {
                this.svgNode.childNodes[childNode].classList.remove("nodisplay");
            }
        }
    }

    addEvent(evt) {
        cimsvg.events.push(evt);
    }

    static getLatestEvent() {
        if (cimsvg.events.length > 0) {
            let evt = cimsvg.events[ cimsvg.events.length-1 ];
            cimsvg.events = [];
            return evt;
        }
        else {
            return null;
        }
    }

    moveComponentInSVG(evt, newPoint) {
        if (evt.draggedObject && evt.draggedObject.componentSvgGroup) {
            let xdiff = newPoint.x - evt.draggedObject.startPoint.x;
            let ydiff = newPoint.y - evt.draggedObject.startPoint.y;
            let transform = "translate(" + xdiff + ", "  + ydiff + ")";
            let componentSvgGroup = evt.draggedObject.componentSvgGroup;
            componentSvgGroup.setAttribute("transform", transform);
        }
    }

    processLatestEvent() {
        currentCimsvg().moved = true;
        let evt = cimsvg.getLatestEvent();
        if (evt != null) {
            if (evt.draggedObject) {
                if (evt.draggedObject.type && evt.draggedObject.id && evt.draggedObject.dopi) {
                    let baseJson = currentCimsvg().getBaseJson();
                    let newPoint = currentCimsvg().cimview.getMouseCoord(evt);
                    currentCimsvg().moveComponentInSVG(evt, newPoint);
                }
            }
            else {
                currentCimsvg().cimview.mouseMove(evt);
            }
        }
    }

    calculateComponentMove(mouseEvent) {
        let baseJson = this.getBaseJson();
        let newPoint = this.cimview.getMouseCoord(mouseEvent);
        let xdiff = newPoint.x - this.draggedObject.startPoint.x;
        let ydiff = newPoint.y - this.draggedObject.startPoint.y;
        let newComponentPoint = {
            x: Number(this.getValueOf("cim:DiagramObjectPoint", this.draggedObject.dopi, "cim:DiagramObjectPoint.xPosition")) + xdiff,
            y: Number(this.getValueOf("cim:DiagramObjectPoint", this.draggedObject.dopi, "cim:DiagramObjectPoint.yPosition")) + ydiff
        };
        this.updateComponent("cim:DiagramObjectPoint", this.draggedObject.dopi, "cim:DiagramObjectPoint.xPosition", newComponentPoint.x);
        this.updateComponent("cim:DiagramObjectPoint", this.draggedObject.dopi, "cim:DiagramObjectPoint.yPosition", newComponentPoint.y);
        if (this.draggedObject.dopi && this.draggedObject.dopi in baseJson["cim:DiagramObjectPoint"]) {
            let templateJson = cimjson.getTemplateJson(baseJson);
            this.applyDiagramTemplate(templateJson);
        }
        this.draggedObject.type = undefined;
        this.draggedObject.dopi = undefined;
        this.draggedObject.id = undefined;
        this.draggedObject.startPoint = undefined;
        this.draggedObject.componentSvgGroup = undefined;
    }

    addMouseEventListeners(node) {
        const resizeObserver = new ResizeObserver(entries => {
            if (this.resizeAllowed) {
                this.resizeAllowed = false;
                for (const entry of entries) {
                    this.cimview.resize(Math.trunc(entry.contentRect.width), Math.trunc(entry.contentRect.height));
                }
                this.resizeAllowed = true;
            }
        });
	resizeObserver.observe(this.cimsvgPanel);
        node.addEventListener("wheel", (mouseEvent) =>{
            this.cimview.wheelEvent(mouseEvent);
        });
        node.addEventListener("mousedown", (mouseEvent) =>{
            if (mouseEvent.target == this.svgNode) {
                this.checkComponentReadyToAdd(mouseEvent);
            }
            let componentSvgGroup = mouseEvent.target.parentElement.parentElement.parentElement.parentElement;
            let embeddedSvg       = mouseEvent.target.parentElement.parentElement.parentElement;
            let svgImage          = mouseEvent.target.parentElement.parentElement;
            if (componentSvgGroup) {
                let id = componentSvgGroup.id;
                let type = componentSvgGroup.getAttribute("type");
                let diagramObjectPointId = svgImage.getAttribute("diagramobjectpointid");
                this.draggedObject.type = type;
                this.draggedObject.dopi = diagramObjectPointId;
                this.draggedObject.id = id;
                this.draggedObject.startPoint = this.cimview.getMouseCoord(mouseEvent);
                this.draggedObject.componentSvgGroup = embeddedSvg;
            }
            this.moved = false;
            this.readyToMove = true;
            this.processLoop = setInterval(this.processLatestEvent, 330);

            if (cimview.noInputFocus(mouseEvent)) {
                this.cimview.mouseDown(mouseEvent);
                if (!cimsvg.isRightClick(mouseEvent)) {
                    this.ghostModeOn();
                }
            }
        });
        node.addEventListener("mouseup", (mouseEvent) =>{
            clearInterval(this.processLoop);
            cimsvg.events = [];
            this.readyToMove = false;
            this.ghostModeOff();
            this.cimview.mouseUp(mouseEvent);
            if (cimsvg.isRightClick(mouseEvent)) {
                this.updateCimmenu(()=>{ return this.cimmenu.processRightClick(mouseEvent); });
            }
            else {
                if (!this.moved) {
                    this.updateCimmenu(()=>{ this.cimmenu.processLeftClick(mouseEvent); })
                }
                if (this.draggedObject.startPoint) {
                    this.calculateComponentMove(mouseEvent);
                }
                mouseEvent.stopPropagation();
            }
        });
        node.addEventListener("mousemove", (mouseEvent) =>{
            if(this.readyToMove) {
                if (this.draggedObject.type) {
                    mouseEvent.draggedObject = this.draggedObject;
                }
                this.addEvent(mouseEvent);
            }
        });
        node.addEventListener("mouseleave", (mouseEvent) =>{
            clearInterval(this.processLoop);
            this.readyToMove = false;
            this.ghostModeOff();
            this.cimview.mouseLeave(mouseEvent);
        });
    }

    addKeyEventListeners(bodyNode) {
        bodyNode.addEventListener("keydown", (keyEvent) =>{
            /* ctrl + up key */
            if (keyEvent.ctrlKey && (keyEvent.keyCode === 38)) {
                this.cimview.zoomIn();
            }
            /* ctrl + down key */
            else if (keyEvent.ctrlKey && (keyEvent.keyCode === 40)) {
                this.cimview.zoomOut();
            }
            /* left key */
            else if (keyEvent.keyCode === 37) {
                if (cimview.noInputFocus(keyEvent)) {
                    this.cimview.pan({ x: -10, y: 0 });
                }
            }
            /* up key */
            else if (keyEvent.keyCode === 38) {
                if (cimview.noInputFocus(keyEvent)) {
                    this.cimview.pan({ x: 0, y: -10 });
                }
            }
            /* right key */
            else if (keyEvent.keyCode === 39) {
                if (cimview.noInputFocus(keyEvent)) {
                    this.cimview.pan({ x: 10, y: 0 });
                }
            }
            /* down key */
            else if (keyEvent.keyCode === 40) {
                if (cimview.noInputFocus(keyEvent)) {
                    this.cimview.pan({ x: 0, y: 10 });
                }
            }
            /* spacebar */
            else if (keyEvent.keyCode === 32) {
                if (cimview.noInputFocus(keyEvent)) {
                    this.cimview.fit();
                }
            }
        });
    }

    updateStyle(name, value) {
        let counter = 0;
        let docu = this.svgNode.ownerDocument;
        for (let sheetIndex = 0; sheetIndex < docu.styleSheets.length; sheetIndex++) {
            let styleSheet = docu.styleSheets[sheetIndex];
            if (styleSheet.title === "cimsvg-style") {
                let relevantRuleIndex = -1;
                for (let ruleIndex = 0; ruleIndex < styleSheet.cssRules.length; ruleIndex++) {
                    if(styleSheet.cssRules[ruleIndex].selectorText === name) {
                        relevantRuleIndex = ruleIndex;
                    }
                }
                if (relevantRuleIndex !== -1) {
                    styleSheet.deleteRule(relevantRuleIndex);
                    styleSheet.insertRule(name + value, relevantRuleIndex);
		}
            }
        }
    }

    addPinturaStyle(docu, css) {
        let pinturaStyleTags = docu.querySelectorAll("style.pintura");
        if (pinturaStyleTags.length < 1) {
            this.style = docu.createElement("style");
            this.style.type = "text/css";
            this.style.classList.add("pintura");
            this.style.setAttribute("title", "cimsvg-style");

            let head = docu.head;
            if(head === undefined) {
                console.error("Failed to get head from document.");
            }
            docu.head.appendChild(this.style);
            if (this.style.styleSheet) {
                this.style.styleSheet.cssText = css;
            } else {
                this.style.appendChild(docu.createTextNode(css));
            }
        }
    }

    setCimmenu(menu) {
        this.cimmenu = menu;
    }

    updateCimmenu(func) {
        if(this.cimmenu !== null) {
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
        if (object === undefined) {
            console.error("No object with id: ", id, " in category: ", type);
            return 0;
        }
        if (attribute in object) {
            return object[attribute];
        }
        else {
            return undefined;
        }
    }

    /*
     * How many pieces the data will be arriving in
     */
    setFileCount(count) {
        this.rdfFileCount = count;
    }

    updateRawComponentSearch(regexInput) {
        let regex = regexInput.toUpperCase();
        let floatingPanelList = this.floatingMenu.querySelectorAll(".floating-panel-list");
        floatingPanelList.forEach((elem)=>{
            elem.childNodes.forEach((component)=>{
                let name = component.id.toUpperCase().substr(0, regex.length);
                if (regex.match(name)) {
                    component.classList.remove("invisible");
                }
                else {
                    component.classList.add("invisible");
                }
            });
        });
    }

    resetFileReceivedCount() {
        this.rdfFileReceived = 0;
    }

    incFileReceivedCount() {
        this.rdfFileReceived++;
    }

    /*
     * Have we received all the data files yet?
     */
    checkIfParseReady() {
        if (this.rdfFileReceived > 0) {
            if (this.rdfFileCount === this.rdfFileReceived) {
                return true;
            }
        }

    }

    setTest() {
        this.testOnly = true;
    }

    fit() {
        if ( this.testOnly === false) {
            this.cimview.fit();
        }
    }

    getXmlDoc() {
        return this.xmlDoc;
    }

    setXmlDoc(doc) {
        this.xmlDoc = doc;
    }

    getBaseJson() {
        if (this.jsonBaseData === null) {
            this.jsonBaseData = {};
        }
        return this.jsonBaseData;
    }

    setBaseJson(data) {
        this.jsonBaseData = data;
    }

    getNameCounter(type) {
        if (this.nameCounter[type] === undefined){
            this.nameCounter[type] = "0";
        }
        return (++this.nameCounter[type]).toString();
    }

    setCurrentDiagramId(diagramId) {
        this.currentDiagramId = diagramId;
    }

    getObjectsOfType(type) {
        let baseJson=this.getBaseJson();
        let objects=common.safeExtract(baseJson, type);
        return objects;
    }

    getCurrentDiagramId() {
        return this.currentDiagramId;
    }

    static getCimsvg() {
        return cimsvg.currentCimsvgClass;
    }

    static setCimsvg(cimsvgClass) {
        cimsvg.currentCimsvgClass = cimsvgClass;
    }

    includeFile (fileName, callback) {
        let dom = this.svgNode.ownerDocument;
        let newTag = dom.createElement("script");
        newTag.type = "text/javascript";
        newTag.src=fileName;
        if ( callback !== undefined ) {
            newTag.onload=function() {
                callback();
            };
        }
        this.cimsvgPanel.appendChild(newTag);
    }

    addDiagram() {
        let newDiagram = this.addComponentAndApplyTemplates("cim:Diagram");
        if (this.currentDiagramId === undefined) {
            this.currentDiagramId = newDiagram
        }
    }

    isAllComponentsListVisible() {
        let visible = true;
        let tableList = this.getAllComponentsMenu().querySelectorAll(".floating-panel-table");
        tableList.forEach((table)=>{
            if (table.classList.contains("invisible")) {
                visible = false;
            }
        });
        return visible;
    }

    addRawComponent(type) {
        this.addRawComponentAndApplyTemplates(type);
        this.updateCimmenu(()=>{ this.cimmenu.populateDiagramComponents(); });
    }

    addComponent(type) {
        if (type.substring(0, 4) !== "cim:") {
            type = "cim:" + type;
        }
        if (cimedit.typeIsVisible(type)) {
            this.addingType = type;
            let image = cimjson.getImageName(type);
            let encodedImage = "url(data:image/svg+xml;base64," + btoa(image) + "), crosshair";
            this.svgNode.style.cursor = encodedImage;
        }
        else {
            return this.addComponentAndApplyTemplates(type);
        }
    }

    removeComponent(type, rdfid) {
        let baseJson = this.getBaseJson();
        cimedit.removeComponentFromBaseJson(baseJson, type, rdfid);
        this.applyTemplates();
    }

    addTerminal(type, rdfid) {
        let baseJson = this.getBaseJson();
        cimedit.addTerminal(baseJson, type, rdfid);
    }

    removeTerminal(type, rdfid, terminalId) {
        let baseJson = this.getBaseJson();
        if (baseJson[type] && baseJson[type][rdfid]) {
            let terminals = baseJson[type][rdfid][common.pinturaTerminals()];
            if (terminals) {
                let index = terminals.indexOf(terminalId);
                if (index !== -1) {
                    terminals.splice(index);
                }
                else {
                    console.error("Cannot remove terminal " + terminalId + " because it does not exist in the list.");
                }
            }
            else {
                console.error("Cannot remove terminal " + terminalId + " because there are none.");
            }
            this.removeComponent("cim:Terminal", terminalId);
        }
    }

    populateDiagramLinks() {
        let baseJson = this.getBaseJson();
        /* getTemplateJson will associate the diagram objects with components */
        this.templateJson = cimjson.getTemplateJson(baseJson);
        this.updateCimmenu(()=>{ this.cimmenu.update(this.templateJson); });
    }

    populateComponentTypeListForDiagram(diagramId) {
        let diagram = common.safeExtract(this.templateJson, "Diagram", diagramId);
        if (diagramId) {
            let justThisDiagram = { "Diagram": { [diagramId]: diagram } };
            let componentTypesPanel = this.getColumnPanel(".component-types-panel");
            if(componentTypesPanel !== null) {
                this.updateCimmenu(()=>{ this.cimmenu.populatePanelWithTemplate(componentTypesPanel, justThisDiagram, "pinturaJson2DiagramComponentTypeList", "Component Types"); });
            }
        }
    }

    populateComponentsOfTypeListForDiagramAndComponentType(diagramId, componentType) {
        let components = common.safeExtract(this.templateJson, "Diagram", diagramId, "components", componentType);
        if (diagramId) {
            let justTheseComponents = { "Diagram": { [diagramId]: { "components": { [componentType]: components } } } };
            let componentsPanel = this.getColumnPanel(".components-panel");
            if(componentsPanel !== null) {
                this.updateCimmenu(()=>{ this.cimmenu.populatePanelWithTemplate(componentsPanel, justTheseComponents, "pinturaJson2ComponentOfTypeList", "Component Types"); });
            }
        }
    }

    loadUri() {
        let uri = this.uriChooser();
        if (uri !== undefined) {
            this.downloadUri(uri);
        }
    }

    saveToUri() {
        let uri = this.uriChooser();
        if (uri !== undefined) {
            this.uploadToUri(uri);
        }
    }

    uriChooser(prev) {
        let response = prompt("Enter URI", prev || this.uri);

        if (response === null || response === "") {
            return undefined;
        } else {
            return response;
        }
    }

    static isRightClick(evt) {
        if (evt.which) {
            return (evt.which === 3);
        }
        else if (evt.button) {
            return (evt.button === 2);
        }
        return false;
    }

    populateAttributes(type, id) {
        this.updateCimmenu(()=>{ return this.cimmenu.populateAttributes(type, id); });
    }

    populateAttributesIdOnly(id) {
        this.updateCimmenu(()=>{ return this.cimmenu.populateAttributesIdOnly(id); });
    }

    populateTerminals(type, rdfid) {
        this.updateCimmenu(()=>{ this.cimmenu.populateTerminals(type, this.getCimVersionFolder(), rdfid); });
    }

    checkComponentReadyToAdd(evt) {
        let rdfid = null;
        this.addingPoint = this.cimview.getMouseCoord(evt);
        if (this.addingType !== null) {
            let type = this.addingType;
            let point = this.addingPoint;
            rdfid = this.addComponentAndApplyTemplates(type, point);
            this.addingType = null;
            this.addingPoint = null;
        }
        this.svgNode.style.cursor = "initial";
        return rdfid;
    }

    applyOSMTemplate(templateJson) {
        if (templateJson == undefined || templateJson == "") {
            console.error("Attempt to draw empty / invalid diagram");
            return;
        }
        logIfDebug("Redrawing OSM")
        return templates.cim2osm(templateJson);
    }

    applyDiagramTemplate(templateJson) {
        if (templateJson == undefined || templateJson == "") {
            console.error("Attempt to draw empty / invalid diagram");
            return;
        }
        logIfDebug("Redrawing SVG")
        let templateHtml = templates.cim2svg(templateJson);
        let diagramList = this.svgNode.querySelectorAll(".diagrams");
        // This is not copying templateHtml for every diagram
        // it is copying it for every node of class "diagrams"
        diagramList.forEach(function(diagram) {
            diagram.innerHTML = templateHtml;
        });
    }

    applyTemplates() {
        let baseJson = this.getBaseJson();
        this.templateJson = cimjson.getTemplateJson(baseJson);
        this.applyDiagramTemplate(this.templateJson);
        this.updateCimmenu(()=>{ this.cimmenu.update(this.templateJson, baseJson); });
    }

    addRawComponentAndApplyTemplates(type, point) {
        let baseJson = this.getBaseJson();
        let rdfid = cimedit.addRawComponentToBaseJson(baseJson, type, point);
        this.applyTemplates();
        return rdfid;
    }

    addComponentAndApplyTemplates(type, point) {
        let baseJson = this.getBaseJson();
        let rdfid = cimedit.addComponentToBaseJson(baseJson, type, point);
        this.applyTemplates();
        return rdfid;
    }

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
        this.cimVersion = "cgmes";
        this.cimVersionFromFile = false;
        this.entsoe = "";
    }

    getCimVersionFolder() {
        logIfDebug("CIM Version: ", this.cimVersion + this.entsoe)
        return this.cimVersion + this.entsoe;
    }

    getCimversion() {
        return this.cimVersion;
    }

    setCimVersion(cim, entsoe) {
        let regex = /.*CIM-schema-(.*)#/.exec(cim);
        if (regex.length > 1) {
            let newCimVersion = regex[1];
            if (this.cimVersionFromFile) {
                if (this.cimVersion !== newCimVersion) {
                    console.error("Files loaded with non-matching cim versions!");
                    return false;
                }
            }
            this.cimVersion = newCimVersion;
            this.cimVersionFromFile = true;
        }
        else {
            console.error("Failed to parse cim version.");
            return false;
        }
        this.entsoe = entsoe ? "_entsoe" : "";
        return true;
    }

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
            this.incFileReceivedCount();
            if (this.checkIfParseReady()) {
                logIfDebug("Loading file cimVersion: ", this.cimVersion, " entsoe: ", this.entsoe);
                this.setBaseJson(cimxml.createObjectGraphFromXml(this.getXmlDoc()));
                this.cimmenu.checkBaseJson(this.getBaseJson());
                this.resetFileReceivedCount(0);
                this.setFileCount(0);
                this.populateDiagramLinks();
                this.drawMapOrSvg();
            }
        }

    }

    drawMapOrSvg() {
        console.log(this.getBaseJson())
        let baseJson = this.getBaseJson();
        if ("cim:Diagram" in baseJson && Object.keys(baseJson["cim:Diagram"]).length > 0) {
            this.applyDiagramTemplate(this.templateJson);
            this.fit();
            this.showSvg();
        }
        else if ("cim:CoordinateSystem" in baseJson && Object.keys(baseJson["cim:CoordinateSystem"]).length > 0) {
            let osmxml = this.applyOSMTemplate(this.templateJson);
            this.cimview.importSvgGrid(osmxml);
            this.hideSvg();
        }
        else {
            console.error("No location data found for this network");
        }
    }

    exportXmlData() {
        return cimxml.getBaseXML(this.getBaseJson());
    }

    exportSVGData() {
        let SVGDiagrams = this.svgNode.querySelectorAll(".diagrams");
        let SVGData = "";
        SVGDiagrams.forEach((data)=>{
            SVGData += data.outerHTML;
        });
        let templateData = {
            style: css,
            diagrams: SVGData,
            viewBox: this.svgNode.getAttribute("viewBox"),
        };
        let returnData = templates.cim_create_svg(templateData);
        return (returnData);
    }

    saveGridXml(filename) {
        cimfile.saveFile(this.exportXmlData(), filename);
    }

    saveToSVG() {
        cimfile.saveFile(this.exportSVGData(), "pintura.svg");
    }

    saveTemplateJson() {
        cimfile.saveFile(JSON.stringify(this.templateJson, true, 2), "pintura.json");
    }

    saveToMultipartZip() {
        cimfile.convertToMultipartZip(this.getBaseJson(), "pintura.zip");
    }

    updateComponentInBaseJson(type, id, attribute, value) {
        if (this.getBaseJson()[type][id] === undefined) {
            console.error("Cannot find " + id + " in list of " + type);
        }
        else {
            this.getBaseJson()[type][id][attribute] = value;
            let baseJson = this.getBaseJson();
            this.templateJson = cimjson.getTemplateJson(baseJson);
            this.updateCimmenu(()=>{ this.cimmenu.update(this.templateJson); });
        }
    }

    updateComponent(type, id, attribute, value) {
        this.updateComponentInBaseJson(type, id, attribute, value);
    }

    updateComponentRDF(type, id, attribute, rdfid) {
        logIfDebug("updateComponentRDF(", type, id, attribute, rdfid, ")", )
        let value = { "rdf:resource" : "#" + rdfid };
        this.updateComponentInBaseJson(type, id, attribute, value);
        if (type === "cim:Terminal" && attribute === "cim:Terminal.TopologicalNode") {
            let baseJson = this.getBaseJson();
            cimedit.connectTerminalToTopologicalNode(baseJson, id, rdfid);
            /* TODO: are we doing too much work here? */
            let templateJson = cimjson.getTemplateJson(baseJson);
            this.applyDiagramTemplate(templateJson);
        }
    }

    /*
     * Returns true if diagram has been turned invisible
     */
    toggleDiagramVisible(id) {
        let diagram = this.svgNode.querySelector("#" + id);
        if (diagram.classList.contains("invisible")) {
            diagram.classList.remove("invisible");
            return false;
        } else {
            diagram.classList.add("invisible");
            return true;
        }
    }

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
    }

    setTitle(title) {
        this.svgNode.ownerDocument.documentElement.querySelectorAll("title").forEach((elem)=> {
            elem.innerHTML = title;
        });
    }

    uploadToUri(uri) {
        let uriSuffix = uri.substring(uri.length-4);
        if (uriSuffix === ".xml") {
            let data = this.exportXmlData();
            cimfile.uploadAsText(data, uri);
        }
        else if (uriSuffix === ".zip") {
            let data = this.exportXmlData();
            cimfile.uploadAsZip(data, uri);
        }
    }

    /*
     * This function is used to download models using
     * the uri= parameter in the url
     */
    downloadUri(uri) {
        fetch(uri,{ headers: { "Accept": "application/zip, application/xml, application/json, text/plain" }}).then((response)=>{
            if (response.headers.get("Content-Type") === "application/xml") {
                response.text().then((text)=>{
                    this.setFileCount(1);
                    this.loadFile(text);
                    this.setTitle(uri);
                    this.uri = uri;
                });
            }
            else if (response.headers.get("Content-Type") === "application/zip") {
                response.blob().then((blob)=>{
                    this.importZip(uri, blob);
                    this.setTitle(uri);
                    this.uri = uri;
                });
            }
        }).catch(function(error) {
            console.log(error);
        });
    }

    /*
     * This function is used to import the menu xml
     */
    loadXml(fileName, callback) {
        // Create a connection to the file.
        let Connect = new XMLHttpRequest();
        // Define which file to open and
        Connect.open("GET", fileName, true);
        Connect.setRequestHeader("Content-Type", "text/xml");
        Connect.onerror = function () {
            alert("Failed to download " + fileName);
        };
        Connect.onload = function () {
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
    }

    getObjectUsingId(id) {
        let baseJson = this.getBaseJson();
        let type = undefined;
        for (let types in baseJson) {
            for (let rdfid in baseJson[types]) {
                if (id === rdfid) {
                    type = types;
                    continue;
                }
            }
        }
        if (type !== undefined) {
            return baseJson[type][id];
        }
        else {
            return undefined;
        }
    }

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
    }

    getObjectNameUsingTypeAndId(type, rdfid) {
        return common.safeExtract(this.getBaseJson(), type, rdfid, common.identifiedObjectName());
    }

    getRdfResource(object) {
        if (object) {
            let rdfid = object["rdf:resource"];
            if (rdfid !== undefined) {
                return rdfid.substring(1);
            }
        }
        return undefined;
    }

    showFileMenu() {
        this.showCornerPanel(".diagrams-panel");
    }

    hideFileMenu() {
        this.hideCornerPanel(".diagrams-panel");
    }

    showCornerPanel(name) {
        let tables = this.getColumnPanel(name).querySelectorAll(".floating-panel-table");
        tables.forEach(function(table){
            table.classList.remove("invisible");
        });
    }

    hideCornerPanel(name) {
        let tables = this.getColumnPanel(name).querySelectorAll(".floating-panel-table");
        tables.forEach(function(table){
            table.classList.add("invisible");
        });
    }

    hideAllComponentsList() {
        let tables = this.getAllComponentsMenu().querySelectorAll(".floating-panel-table");
        tables.forEach(function(table){
            table.classList.add("invisible");
        });
        let switchList = this.getAllComponentsMenu().querySelectorAll(".switch");
        switchList.forEach(function(sw){
            sw.classList.remove("invisible");
        });
    }

    static terminalAndPointLimits() {
        return cimedit.terminalAndPointLimits;
    }

    static typeIsVisible(type) {
        return cimedit.typeIsVisible(type);
    }
}

cimsvg.currentCimsvgClass = null;
cimsvg.events = [];

const currentCimsvg = function() {
    return cimsvg.getCimsvg();
};

export { cimsvg, currentCimsvg, cimxml, cimfile };

