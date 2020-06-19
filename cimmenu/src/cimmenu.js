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

import templates from "../templates/index.js";
import common from "./common.js";
import contextmenu from "./contextmenu.js";
import Menu from "./react-menu.js";
const e = React.createElement;
import cgmes from '../cgmes/cgmesIndex.js';

class cimmenu {

    constructor(node) {
        this.reactMenu = e(libcimmenu.Menu)
        ReactDOM.render(this.reactMenu, node);
        this.menuNode                = node;
        this.panels = {
            "diagramsPanel"          : this.menuNode.querySelectorAll(".diagrams-panel")[0],
            "componentsPanel"        : this.menuNode.querySelectorAll(".components-panel")[0],
            "attributesPanel"        : this.menuNode.querySelectorAll(".attributes-panel")[0],
            "allComponentsPanel"     : this.menuNode.querySelectorAll(".all-components-panel")[0],
            "mainMenu"               : this.menuNode.querySelector("#main-menu"),
            "file-menu-panel"        : null,
            "diagram-menu-panel"     : null,
        };
        this.diagramId               = null;
        this.templateJson            = null;
        this.populateFileLinks();
        this.addMenuEventListeners(this.menuNode);
        this.calculateScreenHeight();
        cimmenu.setCimmenu(this);
        this.cimsvg                 = false;
        this.contextMenu = new contextmenu(this.menuNode.querySelector("#context-menu"), "context-menu");
    }

    cimsvgFunction(func) {
        try {
            if(this.cimsvg !== undefined && currentCimsvg()) {
                func();
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    setCimsvg(cimsvg) {
        this.cimsvg = cimsvg;
    }

    checkBaseJson(baseJson) {
        Object.keys(baseJson).forEach((component) => {
            let shortName = component.substr(4)
            let cgmesObject = cgmes["src_" + shortName + "_js" ]
            if (cgmesObject) {
                let read = cgmesObject.read;
                let componentMap = baseJson[component];
                Object.keys(componentMap).forEach((componentInstance) => {
                    read(componentMap[componentInstance]);
                });
            }
            else {
                logIfDebug("Cannot find [", shortName, "] in class list.");
            }
	});
    }

    applyTemplate(data, templateName) {
        if (templateName in templates) {
            let template = templates[templateName];
            return template(data);
        }
        else {
            return "";
        }
    }

    calculateScreenHeight() {
        let bottomHalfHeight = this.menuNode.clientHeight / 2;
        let numberOfRowsFloat = bottomHalfHeight / 40;
        this.componentPanelGridHeight = Math.round(numberOfRowsFloat);
    }

    static updateGridLocation (node, column, row, length) {
        let area = row.toString() + " / " + column.toString() + " / " + (row + length).toString() + " / " + (column + 1).toString();
        node.style.gridArea = area;
    }

    addMenuEventListeners(node) {
        let keys = Object.keys(Menu.menuStructure);
        keys.forEach((key)=>{
            let menu = Menu.menuStructure[key];
            node.querySelector("#" + menu.button.id).addEventListener("mouseover", (evt)=>{
                this.hideAllMenuPanels();
                this.showPanel(menu.panel.id);
                evt.stopPropagation();
            });
            node.querySelector("#" + menu.panel.id).addEventListener("mouseover", (evt)=>{
                evt.stopPropagation();
            });
            this.panels[menu.panel.id] = this.menuNode.querySelector("#" + menu.panel.id);
        });
        if(typeof window !== undefined) {
            this.resizeListener(window);
        }
    }

    addEventListeners(bodyNode) {
        bodyNode.addEventListener("contextmenu", (mouseEvent) =>{
            if (mouseEvent.preventDefault !== undefined) {
                mouseEvent.preventDefault();
            }
            if (mouseEvent.stopPropagation !== undefined) {
                mouseEvent.stopPropagation();
            }
        });
        bodyNode.addEventListener("keyup", (keyEvent) =>{
            if ( keyEvent.keyCode === 27 ) {
                this.toggleMenuOff();
            }
        });
    }

    processRightClick(evt) {
        let id = evt.currentTarget.id.slice(0,-8);
        let type = evt.currentTarget.parentElement.getAttribute("type");
        this.contextMenu.setComponent(type, id);
        let pos = {x: evt.clientX, y: evt.clientY};
        this.contextMenu.positionMenu(pos, "context-menu");
        this.contextMenu.toggleMenuOn("context-menu");
    }

    processLeftClick(evt) {
        let id = evt.currentTarget.id.slice(0,-8);
        let type = evt.currentTarget.parentElement.getAttribute("type");
        let diagramId = evt.currentTarget.parentElement.getAttribute("diagram-id");
        if (diagramId && type && id) {
            this.redrawMenu(diagramId, type, id);
        }
        this.contextMenu.toggleMenuOff();
    }

    redrawMenu(diagramId, type, id) {
        this.diagramId = diagramId;
        this.showPanel("diagramsPanel");
        this.showDiagramComponentList(diagramId, type);
        this.populateComponentsListForDiagramAndComponentType(diagramId, type, id);
        this.populateAttributes(type, id);
    }

    redrawMenus(visibleMenus) {
        this.hidePanels(Object.keys(this.panels));
        this.showPanels(visibleMenus);
        if (visibleMenus.includes("componentsAccordion")) {
            let rows = cimmenu.calculatePanelHeight(this.panels.diagramsPanel);
            cimmenu.updateGridLocation(this.panels.diagramsPanel, 1, 1, rows);
        }
        if (visibleMenus.includes("componentsPanel")) {
            this.doPopulateComponentsList(this.diagramId, this.componentType, this.id);
        }
    }

    resizeListener(_window) {
        _window.onresize = () => {
            this.calculateScreenHeight();
            this.contextMenu.toggleMenuOff();
        };
    }

    getContextMenu() {
        return this.contextMenu;
    }

    getListOfVisibleMenus() {
        this.visibleMenus = [];
        Object.keys(this.panels).forEach( ( panelName ) => {
            if (this.panels[panelName] !== undefined) {
                if (!this.panels[panelName].classList.contains("invisible")) {
                    this.visibleMenus.push(panelName);
                }
            }
        });
        return this.visibleMenus;
    }

    update(templateJson) {
        this.templateJson = templateJson;
        this.populateDiagramComponents();
        this.panels.componentsAccordion = this.menuNode.querySelectorAll(".component-accordion")[0];
    }

    toggleMainMenuVisible() {
        if (this.panels.mainMenu.classList.contains("invisible")) {
            this.panels.mainMenu.classList.remove("invisible");
        }
        else {
            this.panels.mainMenu.classList.add("invisible");
        }
    }

    static readFile(e) {
        let files = e.target.files;
        if (files) {
            let cimmenuInstance = currentCimmenu();
            cimmenuInstance.cimsvgFunction(()=>{ currentCimsvg().clearAllData(); });
            cimmenuInstance.cimsvgFunction(()=>{ currentCimsvg().setFileCount(files.length); });
            Array.from(files).forEach((file)=>{
                if (!file) {
                    return;
                }
                let reader = new FileReader();
                reader.onload = function(e) {
                    let contents = e.target.result;
                    cimmenuInstance.cimsvgFunction(()=>{ currentCimsvg().loadFile(contents); });
                };
                reader.readAsText(file);
            });
        }
    }

    updateButtonInPanel(panelName, buttonId, value) {
        let panel = this.panels[panelName];
        if(panel && !panel.classList.contains("invisible")) {
            let button = panel.querySelector(buttonId);
            if (button) {
                button.innerHTML = value;
            }
            else {
                console.error("Cannot update unfound button");
            }
        }
    }

    updateComponent(type, id, attribute, value) {
        if (attribute === "cim:IdentifiedObject.name") {
            let componentsPanelButtonId = "#" + id + "-components-panel-button";
            this.updateButtonInPanel("componentsPanel", componentsPanelButtonId, value);
            let allComponentsPanelButtonId = "#" + id + "-all-components-button";
            this.updateButtonInPanel("allComponentsPanel", allComponentsPanelButtonId, value);
        }
    }

    toggleAllComponentsVisibility() {
        this.panels.diagramsPanel.classList.add("invisible");
        this.panels.componentsPanel.classList.add("invisible");
        this.panels.attributesPanel.classList.add("invisible");
        if (this.panels.allComponentsPanel.classList.contains("invisible")) {
            this.populateAllComponents();
            this.panels.allComponentsPanel.classList.remove("invisible");
        }
        else {
            this.panels.allComponentsPanel.classList.add("invisible");
        }
    }

    populateAllComponents() {
        this.cimsvgFunction(()=> {
            let baseJson = currentCimsvg().getBaseJson();
            let items = this.applyTemplate(baseJson, "handlebars_pinturaJson2AllComponentsList");
            cimmenu.populatePanelWithData(this.panels.allComponentsPanel, items, "All Components");
            cimmenu.updateGridLocation(this.panels.allComponentsPanel, 4, 1, 10);
            this.showPanel("allComponentsPanel");
        });
    }

    populateAllComponentsCreationMenu() {
        cimmenu.populatePanelWithData(this.panels.allComponentsPanel, this.allComponentsCreationHtml, "Add Component");
    }

    populateFileLinks() {
        let template = templates.handlebars_menu_json;
        this.panels["mainMenu"].querySelectorAll("#fileopen").forEach((elem)=>{ elem.addEventListener("change", cimmenu.readFile, false); });
    }

    showFileMenu(evt) {
        this.showPanel("fileMenu");
        evt.stopPropagation();
    }

    showPanel(panelName) {
        let panel = this.panels[panelName];
        if (panel !== undefined) {
            if(panel.classList.contains("invisible")) {
                panel.classList.remove("invisible");
            }
        }
    }

    showPanels(panels) {
        panels.forEach((panelName)=>{
            this.showPanel(panelName);
        });
    }

    hideAllMenuPanels() {
        let menuPanels = this.panels.mainMenu.querySelectorAll(".main-menu-panel");
        menuPanels.forEach((panel)=>{
            panel.classList.add("invisible");
        });
    }

    hidePanels(panels) {
        panels.forEach((panelClass)=>{
            if (this.panels[panelClass] !== undefined) {
                this.panels[panelClass].classList.add("invisible");
            }
        });
    }

    hidePanel(panelName) {
        let panel = this.panels[panelName];
        if (panel !== undefined) {
            if (panel !== undefined) {
                panel.classList.add("invisible");
            }
        }
    }

    toggleDiagramComponentsVisibility() {
        this.panels.componentsPanel.classList.add("invisible");
        this.panels.allComponentsPanel.classList.add("invisible");
        this.panels.attributesPanel.classList.add("invisible");
        if (this.panels.diagramsPanel.classList.contains("invisible")) {
            this.panels.diagramsPanel.classList.remove("invisible");
        }
        else {
            this.panels.diagramsPanel.classList.add("invisible");
        }
    }

    toggleDiagramComponentListVisibility(diagramId) {
        this.panels.componentsPanel.classList.add("invisible");
        this.panels.attributesPanel.classList.add("invisible");
        let accordionId = "#" + diagramId + "-accordion";
        let accordionNode = this.panels.diagramsPanel.querySelector(accordionId);
        if (accordionNode.classList.contains("invisible")) {
            accordionNode.classList.remove("invisible");
        }
        else {
            accordionNode.classList.add("invisible");
        }
        let rows = cimmenu.calculatePanelHeight(this.panels.diagramsPanel);
        cimmenu.updateGridLocation(this.panels.diagramsPanel, 1, 1, rows);
    }

    static markSelected(node, addSelector, removeSelector, markClass) {
        common.removeClassFromNode(node, removeSelector, markClass);
        common.addClassToNode(node, addSelector, markClass);
    }

    showDiagramComponentList(diagramId, type) {
        let accordionId = "#" + diagramId + "-accordion";
        let accordionNode = this.panels.diagramsPanel.querySelector(accordionId);
        if (accordionNode) {
            accordionNode.classList.remove("invisible");
            let classSelector = "." + common.removeColon(type) + "-li";
            if (type) {
                cimmenu.markSelected(accordionNode, classSelector, ".selected", "selected");
            }
        }
        let rows = cimmenu.calculatePanelHeight(this.panels.diagramsPanel);
        cimmenu.updateGridLocation(this.panels.diagramsPanel, 1, 1, rows);
    }

    populateDiagramComponents() {
        cimmenu.populatePanelWithTemplate(this.panels.diagramsPanel,
            this.templateJson, "handlebars_pinturaJson2DiagramList", "Diagram Components");
        let rows = cimmenu.calculatePanelHeight(this.panels.diagramsPanel);
        cimmenu.updateGridLocation(this.panels.diagramsPanel, 1, 1, rows);
    }

    decideWhichRow(prevColumnSelected, numberOfRows) {
        let rowIndex = 1;
        let halfOfRows = parseInt(numberOfRows / 2);
        let rowsBetweenSelectedAndBottom = prevColumnSelected + numberOfRows;

        if (numberOfRows >= this.componentPanelGridHeight) {
            console.warn("Number of rows is bigger than componentPanelGridHeight. numberOfRows: ", numberOfRows, " componentPanelGridHeight: ", this.componentPanelGridHeight);
        }
        else {
            if (rowsBetweenSelectedAndBottom >= this.componentPanelGridHeight) {
                rowIndex = this.componentPanelGridHeight - numberOfRows;
            }
            if (halfOfRows < prevColumnSelected) {
                rowIndex = prevColumnSelected - halfOfRows;
            }
        }

        /* Safety checks */
        if (rowIndex < 0) {
            rowIndex = 1;
        }
        if (rowIndex > this.componentPanelGridHeight) {
            console.error("Correcting excessive row index. rowIndex: ", rowIndex, " componentPanelGridHeight: ", this.componentPanelGridHeight);
            rowIndex = 1;
        }
        return rowIndex;
    }

    populateComponentsListForDiagramAndComponentType(diagramId, componentType, id) {
        if (this.doPopulateComponentsList(diagramId, componentType, id)) {
            this.diagramId = diagramId;
            this.componentType = componentType;
            this.componentId = id;
        }
    }

    doPopulateComponentsList(diagramId, componentType, id) {
        let components = common.safeExtract(this.templateJson, "Diagram", diagramId, "components", componentType);
        if (components) {
            let justTheseComponents = { "Diagram": { [diagramId]: { "components": { [componentType]: components } } } };
            if (id) {
                justTheseComponents["Diagram"][diagramId]["components"][componentType][id].selected = "selected";
            }
            if(this.panels.componentsPanel !== null) {
                cimmenu.populatePanelWithTemplate(this.panels.componentsPanel, justTheseComponents, "handlebars_pinturaJson2ComponentOfTypeList", "Component Types");
            }
            if(id) {
                delete justTheseComponents["Diagram"][diagramId]["components"][componentType][id].selected;
            }
            let prevRowIndex = 2;
            let buttons = this.panels["diagramsPanel"].querySelectorAll(".list-subtitle");
            buttons.forEach((button, index)=>{
                if (button.classList.contains("selected")) {
                    prevRowIndex += index;
                }
            });
            let numberOfRows = Object.keys(components).length;
            let gridRowIndex = this.decideWhichRow(prevRowIndex, numberOfRows);
            let maxRow = (numberOfRows > this.componentPanelGridHeight) ? this.componentPanelGridHeight : numberOfRows;
            cimmenu.updateGridLocation(this.panels.componentsPanel, 2, gridRowIndex, maxRow);
            this.showPanel("componentsPanel");
            return true;
        }
        return false;
    }

    /* calculates the number of rows that would be taken up
     * if all diagrams and components were displayed */
    static calculatePanelHeight(panel) {
        let height = 0;
        let accordionList = panel.querySelectorAll(".component-accordion");
        accordionList.forEach((accordion)=>{
            height++;
            if (!accordion.classList.contains("invisible")) {
                let liList = accordion.querySelectorAll("li");
                height += liList.length;
            }
        });
        return height;
    }

    static populatePanelWithTemplate(panelNode, templateJson, templateName, titleText) {
        if (templateName in templates) {
            let template = templates[templateName];
            let data = template(templateJson);
            let list = panelNode.querySelectorAll(".floating-menu-list");
            list.forEach(function(subpanel) {
                subpanel.innerHTML = data;
            });
            let titleList = panelNode.querySelectorAll(".floating-panel-title");
            titleList.forEach(function(title) {
                title.innerHTML = titleText;
            });
        }
        else {
            console.error("Requested template does not exist!", templateName);
        }
    }

    static populatePanelWithData(panelNode, menuItems, titleText) {
        let accordionList = panelNode.querySelectorAll(".floating-menu-list");
        accordionList.forEach(function(accordion) {
            accordion.innerHTML = menuItems;
        });
        let titleList = panelNode.querySelectorAll(".floating-panel-title");
        titleList.forEach(function(title) {
            title.innerHTML = titleText;
        });
    }

    unselectAllInPanel(panelName) {
        let buttons = this.panels[panelName].querySelectorAll(".selected");
        buttons.forEach((button)=> {
            button.classList.remove("selected");
        });
    }

    componentTypeSelected(htmlNode, diagramId, type) {
        if (htmlNode.classList.contains("selected")) {
            htmlNode.classList.remove("selected");
            this.hidePanels(["componentsPanel", "attributesPanel"]);
        }
        else {
            this.unselectAllInPanel("diagramsPanel");
            this.hidePanel("attributesPanel");
            htmlNode.classList.add("selected");
            this.populateComponentsListForDiagramAndComponentType(diagramId, type);
        }
    }

    componentInstanceSelected(htmlNode, typeName, componentId) {
        if(htmlNode.selected) {
            this.panels.attributesPanel.classList.add("invisible");
            htmlNode.classList.remove("selected");
        }
        else {
            this.unselectAllInPanel("componentsPanel");
            this.populateAttributes(typeName, componentId);
            htmlNode.classList.add("selected");
        }
    }

    populateAttributesIdOnly (node, cimVersion, id) {
        this.cimsvgFunction(()=> {
            let type = currentCimsvg().getObjectTypeUsingId(id);
            if (type !== undefined) {
                cimmenu.populateAttributes(node, type, cimVersion, id);
            }
            else {
                console.error("Can't establish type for id: " + id);
            }
        });
    }

    populateAttributes (type, id) {
        this.cimsvgFunction(()=> {
            this.populate(this.panels.attributesPanel, type, currentCimsvg().getCimVersionFolder(), id);
        });
    }

    findPossibleClasses(matchingComponents, subClassList) {
        let shortenedTypeName = matchingComponents.requestedType.substring(0,4) === 'cim:' ?
            matchingComponents.requestedType.substring(4) : matchingComponents.requestedType;
        let possibleClasses = [ shortenedTypeName ].concat(subClassList);
        matchingComponents.aggregates = this.getAggregateComponentsList(matchingComponents.requestedType, possibleClasses).aggregates;
        let targetRdfId;
        if (matchingComponents.value && matchingComponents.value["rdf:resource"]) {
            targetRdfId = matchingComponents.value["rdf:resource"].substr(1)
        }
        else {
            targetRdfId = matchingComponents.value;
        }
        for (let index in matchingComponents.aggregates) {
            if(matchingComponents.aggregates[index].rdfid == targetRdfId) {
                matchingComponents.aggregates[index].selected = 'selected';
            }
        }
        if (matchingComponents.classType == "Terminal") {
            for (let index in matchingComponents.aggregates) {
                if(matchingComponents.aggregates[index].attribute == "cim:Terminal.ConductingEquipment") {
                    matchingComponents.aggregates[index].disabled = 'disabled';
                }
            }
        }
        return matchingComponents;
    };


    /* TODO: package allocation needs a re-write when we look at
     * serialization in the cimgen project. The general rule is
     * that the big classes are only in one profile and the primitives
     * can be in any of them. So one strategy could be to write all of
     * the classes that only have one profile into their profiles, then
     * write all the components that are connected to them into the
     * same profile, and then check that they are all written.
    static getPackageName(type) {
    }
    */

    getAggregateComponentMenuCGMES(details){
        let updateMenu = "";
        let jsObject = 'src_' + details.type.substring(4) + '_js';
        if (jsObject in cgmes) {
            let render = cgmes[jsObject].renderAsAttribute;
            let subClassList = cgmes[jsObject].subClassList();
            let dropdownId = common.generateUUID();
            if (details.type !== undefined) {
                let value = currentCimsvg().getValueOf(details.classType, details.parentId, details.attribute)
                let attributeDetails = {
                    attribute: details.attribute,
                    dropdownId: dropdownId,
                    parentRdfid: details.parentId,
                    requestedType: details.type,
                    classType: details.classType,
                    value: value
                }
                let matchingComponents = this.findPossibleClasses(attributeDetails, subClassList);
                logIfDebug("Rendering attribute: ", matchingComponents);
                updateMenu = render(matchingComponents);
            }
            return updateMenu;
        }
        else {
            console.error("Cannot find [", jsObject, "] in cgmes render table.");
            return "";
        }
    };

    getAggregateComponentMenu(classType, parentId, rdfid, type, attribute) {
        let completeAttributeName;
        let tokens = attribute.split(['.'])
        if (tokens.length == 2) {
            if (attribute.substring(0,4) == "cim:") {
                completeAttributeName = attribute
            }
            else {
                completeAttributeName = "cim:" + attribute
            }
        }
        else {
            completeAttributeName = classType + '.' + tokens[0]
        }
        let details = {
            classType: classType,
            parentId: parentId,
            rdfid: rdfid,
            type: type,
            attribute: completeAttributeName
        };
        if (currentCimsvg().getCimversion() === "cgmes") {
            return this.getAggregateComponentMenuCGMES(details);
        }
        else {
            return this.getAggregateComponentMenuCIM16(details);
        }
    }

    populate(node, type, cimVersion, id) {
        this.cimsvgFunction(()=> {
            let baseJson = currentCimsvg().getBaseJson();
            if (id === "No Object" || id === "Missing rdf:resource") {
                return;
            }
            let attributes = common.safeExtract(baseJson, type, id);
            if (attributes === undefined) {
                console.error("Cannot find " + id + " in data to display id of " + type);
            }
            else {
                let templatePath;
                if (cimVersion === "cgmes") {
                    templatePath = "src_" + type.substring(4);
                    let renderClass = cgmes[templatePath + "_js"];
                    if (renderClass) {
                        let data = renderClass.renderAsClass(attributes, this);
                        cimmenu.populatePanelWithData(node, data, "Attributes");
                        cimmenu.updateGridLocation(this.panels.attributesPanel, 3, 1, 9);
                        this.showPanel("attributesPanel");
                    }
                    else {
                        console.error("Couldn't find renderClass: ", templatePath, " in templates.");
                    }
                }
                else {
                    templatePath = "generated_attributes_" + cimVersion + "_" +type.substring(4);
                    if (templatePath in templates) {
                        let template = templates[templatePath];
                        let data = template(attributes);
                        cimmenu.populatePanelWithData(node, data, "Attributes");
                        cimmenu.updateGridLocation(this.panels.attributesPanel, 3, 1, 9);
                        this.showPanel("attributesPanel");
                    }
                    else {
                        console.error("Couldn't find templatePath: ", templatePath, " in templates.");
                    }
                }
            }
        });
    }

    getAggregateComponentsList(requestedClass, types) {
        let aggregateComponents = { aggregates: [{ rdfid: "", name: "Select " + requestedClass }]};
        this.cimsvgFunction(()=> {
            let baseJson = currentCimsvg().getBaseJson();
            for (let index in types) {
                let type = types[index];
                if (type.substring(0,4) !== "cim:") {
                    type = "cim:" + type;
                }
                let components = common.safeExtract(baseJson, type);
                if (components !== undefined) {
                    for (let component in components) {
                        aggregateComponents["aggregates"].push({
                            rdfid: components[component][common.pinturaRdfid()],
                            name:  components[component][common.identifiedObjectName()],
                            type:  type
                        });
                    }
                }
            }
        });
        return aggregateComponents;
    }

    static getCimmenu() {
        return cimmenu.currentCimmenuClass;
    }

    static setCimmenu(cimmenuClass) {
        cimmenu.currentCimmenuClass = cimmenuClass;
    }

    populateTerminals (type, cimVersion, rdfid) {
        let menuData = this.cimsvgFunction(()=> {
            let baseJson = currentCimsvg().getBaseJson();
            if (baseJson[type] && baseJson[type][rdfid]) {
                let template = templates.handlebars_cim_list_terminals;
                let terminals = baseJson[type][rdfid][common.pinturaTerminals()];
                let begin =`
                    <span class="row-right wide-row floating-panel-value">
                        <input class="list-subtitle" value="Add New Terminal" type="text"></input>
                        <button onclick='`;
                let click = "currenttCimsvg().addTerminal(\"" + type + "\", \"" +rdfid + "\");currentCimsvg().applyTemplates();currentCimsvg().populateTerminals(\"" + type + "\", \"" + rdfid +"\")";
                let end = `;'> + </button>
                    </span>
                `;
                menuData = begin + click + end;
                for (let index in terminals) {
                    let terminalId = terminals[index];
                    let terminal = baseJson["cim:Terminal"][terminalId];
                    let templateData = {
                        "name": terminal["cim:IdentifiedObject.name"],
                        "rdfid": rdfid,
                        "terminalId": terminalId,
                        "type": type,
                    };
                    menuData += template(templateData);
                }
            }
            else {
                console.error("Couldn't find " + rdfid + " in " + baseJson[type]);
            }
            return menuData;
        });

        cimmenu.populatePanelWithData(this.panels.allComponentsPanel, menuData, "Terminals");
        cimmenu.updateGridLocation(this.panels.allComponentsPanel, 4, 1, 10);
        this.showPanel("allComponentsPanel");
    }

    getSelectFromDropdown(column, id) {
        return this.panels[column].querySelector("#"+id);
    }
}

cimmenu.currentCimmenuClass = null;

const currentCimmenu = function() {
    return cimmenu.getCimmenu();
};

export { cimmenu, currentCimmenu, Menu };

