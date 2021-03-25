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
import cgmes from '../cgmes/cgmesIndex.js';
import css from "../css/bundle.css";

class cimmenu {

    constructor(leftnode, rightnode) {
        let reactMenu = React.createElement(libcimmenu.Menu)
        this.reactMenu = ReactDOM.render(reactMenu, leftnode);
        this.menuNode                = leftnode;
        this.panels = {
            "file-menu-panel"        : this.menuNode.querySelector("#file-menu-panel"),
            "diagramsPanel"          : this.menuNode.querySelector("#diagram-menu-panel"),
            "componentsPanel"        : this.menuNode.querySelector("#components-menu-panel"),
            "attributesPanel"        : rightnode,
        };
        this.diagramId               = null;
        this.templateJson            = null;
        this.populateFileLinks();
        cimmenu.setCimmenu(this);
        this.cimsvg                 = false;
        this.contextMenu = new contextmenu(this.menuNode.querySelector("#context-menu"), "context-menu");
        this.addCss(leftnode, css);
    }

    addCss(htmlNode, css) {
        let docu = svg.ownerDocument;
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

    cimsvgFunction(func) {
        try {
            if(this.cimsvg !== undefined) {
                func();
            }
        }
        catch (e) {
            console.error(e);
        }
    }

    setCimsvg(cimsvg) {
        this.cimsvg = cimsvg;
        this.contextMenu.setCimsvg(cimsvg);
        this.reactMenu.setCimsvg(cimsvg);
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
        let svgComponentGroup = evt.target.parentElement.parentElement.parentElement.parentElement;
        let id = svgComponentGroup.id;
        let type = svgComponentGroup.getAttribute("type");
        this.contextMenu.setComponent(type, id);
        let pos = {x: evt.clientX, y: evt.clientY};
        this.contextMenu.positionMenu(pos, "context-menu");
        this.contextMenu.toggleMenuOn("context-menu");
    }

    processLeftClick(evt) {
        let svgComponentGroup = evt.target.parentElement.parentElement.parentElement.parentElement;
        if (svgComponentGroup) {
            let id        = svgComponentGroup.id;
            let type      = svgComponentGroup.getAttribute("type");
            let diagramId = svgComponentGroup.getAttribute("diagram-id");
            if (diagramId && type && id) {
                this.redrawMenu(diagramId, type, id);
            }
        }
        this.contextMenu.toggleMenuOff();
    }

    redrawMenu(diagramId, type, id) {
        this.diagramId = diagramId;
        this.populateAttributes(type, id);
    }

    getContextMenu() {
        return this.contextMenu;
    }

    update(templateJson) {
        this.templateJson = templateJson;
        this.populateDiagramComponents();
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

    populateFileLinks() {
        let template = templates.handlebars_menu_json;
        this.panels["file-menu-panel"].querySelectorAll("#fileopen").forEach((elem)=>{ elem.addEventListener("change", cimmenu.readFile, false); });
    }

    showFileMenu(evt) {
        evt.stopPropagation();
    }

    populateDiagramComponents() {
        if (Object.keys(this.templateJson["Diagram"]).length > 0) {
            this.reactMenu.updateDiagramMenuLinks(this.templateJson["Diagram"]);
        }
        if (Object.keys(this.templateJson["CoordinateSystem"]).length > 0) {
            this.reactMenu.updateDiagramMenuLinks(this.templateJson["CoordinateSystem"]);
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

    componentInstanceSelected(htmlNode, typeName, componentId) {
        this.populateAttributes(typeName, componentId);
    }

    populateAttributesIdOnly (node, cimVersion, id) {
        this.cimsvgFunction(()=> {
            let type = this.cimsvg.getObjectTypeUsingId(id);
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
            this.populate(this.panels.attributesPanel, type, this.cimsvg.getCimVersionFolder(), id);
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
                let value = this.cimsvg.getValueOf(details.classType, details.parentId, details.attribute)
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
        if (this.cimsvg.getCimversion() === "cgmes") {
            return this.getAggregateComponentMenuCGMES(details);
        }
        else {
            return this.getAggregateComponentMenuCIM16(details);
        }
    }

    populate(node, type, cimVersion, id) {
        this.cimsvgFunction(()=> {
            let baseJson = this.cimsvg.getBaseJson();
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
                    }
                    else {
                        console.error("Couldn't find templatePath: ", templatePath, " in templates.");
                    }
                }
            }
        });
    }

    getAggregateComponentsList(requestedClass, types) {
        let aggregateComponents = { aggregates: [{ rdfid: "", name: "Select..." }]};
        this.cimsvgFunction(()=> {
            let baseJson = this.cimsvg.getBaseJson();
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
            let baseJson = this.cimsvg.getBaseJson();
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

