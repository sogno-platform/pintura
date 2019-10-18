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
import packageIndex from "../templates/packageIndex.js";

class cimmenu {

    constructor(node) {
        this.menuNode                = node;
        this.template                = templates.handlebars_menu;
        node.innerHTML               = this.template("");
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
        this.addEventListeners(this.menuNode);
        this.calculateScreenHeight();
        cimmenu.cimsvgFunction(()=> { currentCimsvg().setCimmenu(this); });
        cimmenu.setCimmenu(this);
        this.contextMenu = new contextmenu(this.menuNode.querySelector("#context-menu"), "context-menu");
        this.contextMenu.keyUpListener(window);
    }

    static cimsvgFunction(func) {
        try {
            if(currentCimsvg()) {
                func();
            }
        }
        catch (e) {
            console.error(e);
        }
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

    onMouseUp(evt) {
        let rightclick;
        if (evt.which) {
            rightclick = (evt.which === 3);
        }
        else if (evt.button) {
            rightclick = (evt.button === 2);
        }
        let id = evt.currentTarget.id.slice(0,-5);
        let type = evt.currentTarget.parentElement.getAttribute("type");
        if (rightclick) {
            this.contextMenu.setComponent(type, id);
            let pos = {x: evt.clientX, y: evt.clientY};
            this.contextMenu.positionMenu(pos, "context-menu");
            this.contextMenu.toggleMenuOn("context-menu");
        }
        else {
            let type = evt.currentTarget.parentElement.getAttribute("type");
            let diagramId = evt.currentTarget.parentElement.getAttribute("diagram-id");
            if (diagramId && type && id) {
                this.redrawMenu(diagramId, type, id);
            }
            this.contextMenu.toggleMenuOff();
        }
        evt.stopPropagation();
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

    addEventListeners(node) {
        let keys = Object.keys(cimmenu.menuStructure.main);
        keys.forEach((key)=>{
            let menu = cimmenu.menuStructure.main[key];
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
            cimmenu.cimsvgFunction(()=>{ currentCimsvg().clearAllData(); });
            cimmenu.cimsvgFunction(()=>{ currentCimsvg().setFileCount(files.length); });
            Array.from(files).forEach((file)=>{
                if (!file) {
                    return;
                }
                let reader = new FileReader();
                reader.onload = function(e) {
                    let contents = e.target.result;
                    cimmenu.cimsvgFunction(()=>{ currentCimsvg().loadFile(contents); });
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
        cimmenu.cimsvgFunction(()=> {
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
        let items = template(cimmenu.menuStructure);
        this.panels["mainMenu"].innerHTML = items;
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
            console.error("Number of rows is bigger than componentPanelGridHeight. numberOfRows: ", numberOfRows, " componentPanelGridHeight: ", this.componentPanelGridHeight);
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

    static populateAttributesIdOnly (node, cimVersion, id) {
        cimmenu.cimsvgFunction(()=> {
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
        cimmenu.cimsvgFunction(()=> {
            this.populate(this.panels.attributesPanel, type, currentCimsvg().getCimVersionFolder(), id);
        });
    }

    // TODO: this is not the best way to do this
    static getPackageName(type) {
        let packageArray = packageIndex[type.substring(4)];
        let packageName = null;
        if (packageArray.length === 1) {
            packageName = packageArray[0];
        }
        else if (packageArray.length === 2) {
            packageName = packageArray[0];
        }
        else if (packageArray.length === 3) {
            packageName = packageArray[1];
        }
        else if (packageArray.length === 6) {
            packageName = packageArray[2];
        }
        else {
            packageName = packageArray[1];
        }
        return packageName;
    }

    populate(node, type, cimVersion, id) {
        cimmenu.cimsvgFunction(()=> {
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
                    let packageName = cimmenu.getPackageName(type);
                    templatePath = "generated_attributes_" + cimVersion + "_" + packageName + "_" +type.substring(4);
                }
                else {
                    templatePath = "generated_attributes_" + cimVersion + "_" +type.substring(4);
                }
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
        });
    }

    getAggregateComponentsList(requestedClass, types) {
        let aggregateComponents = { aggregates: [{ rdfid: "", name: "Select " + requestedClass }]};
        cimmenu.cimsvgFunction(()=> {
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
        let menuData = cimmenu.cimsvgFunction(()=> {
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

cimmenu.menuStructure = {
    "main": {
        "File": {
            "button": {
                "id": "file-menu-button",
            },
            "panel": {
                "id": "file-menu-panel",
            },
            "links": [
                {
                    "input": {
                        "id": "fileopen",
                        "type": "file",
                    },
                    "a": {
                        "onclick" : "fileopen.click();currentCimmenu().hidePanel('file-menu-panel')",
                        "text" : "Open file 🖿",
                    }
                },
                {
                    "a": {
                        "onclick" : "currentCimsvg().loadUri();currentCimmenu().hidePanel('file-menu-panel')",
                        "text" : "Open link 🔗",
                    }
                },
                {
                    "input": {
                        "id": "filesave",
                    },
                    "a": {
                        "onclick" : "currentCimsvg().saveGridXml('pinturaGrid.xml');currentCimmenu().hidePanel('file-menu-panel')",
                        "text" : "Save to file 🖿",
                    }
                },
                {
                    "a": {
                        "onclick" : "currentCimsvg().saveToMultipartZip();currentCimmenu().hidePanel('file-menu-panel')",
                        "text" : "Save to multipart zip 🖿",
                    }
                },
                {
                    "a": {
                        "onclick" : "currentCimsvg().saveTemplateJson();currentCimmenu().hidePanel('file-menu-panel')",
                        "text" : "Save JSON  🖿",
                    }
                },
                {
                    "a": {
                        "onclick" : "currentCimsvg().saveToUri();currentCimmenu().hidePanel('file-menu-panel')",
                        "text" : "Save to link 🔗",
                    }
                },
                {
                    "a": {
                        "onclick" : "currentCimsvg().saveToSVG();currentCimmenu().hidePanel('file-menu-panel')",
                        "text" : "Export to SVG 🖿",
                    }
                },
            ]
        },
        "Diagram": {
            "button": {
                "id": "diagram-menu-button",
            },
            "panel": {
                "id": "diagram-menu-panel",
            },
            links: [
                {
                    "a": {
                        "onclick" : "currentCimsvg().addDiagram();currentCimmenu().hidePanel('diagram-menu-panel')",
                        "text" : "Add Diagram",
                    }
                },
            ]
        },
        "Close" : {
            "button": {
                "id": "close-menu-button",
            },
            "panel": {
                "id": "close-menu-panel",
            },
        }
    }
};

cimmenu.currentCimmenuClass = null;

const currentCimmenu = function() {
    return cimmenu.getCimmenu();
};

export { cimmenu, currentCimmenu };

