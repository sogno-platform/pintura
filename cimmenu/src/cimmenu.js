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
    require('../../lib/template.js');
    require('./handlebarsHelpers.js');
    global.common = require('./common.js')
}

class cimmenu {

    constructor(node) {
        this.menuNode        = node;
        this.template        = Handlebars.templates['menu'];
        node.innerHTML       = this.template('');
        this.diagramsPanel   = this.menuNode.querySelectorAll('.diagrams-panel')[0];
        this.componentsPanel = this.menuNode.querySelectorAll('.components-panel')[0];
        this.attributesPanel = this.menuNode.querySelectorAll('.attributes-panel')[0];
        this.fileMenu        = this.menuNode.querySelectorAll('#file-menu-panel')[0];
        this.mainMenu        = this.menuNode.querySelector('#main-menu');
        this.panels = {
            'diagramsPanel'   : this.menuNode.querySelectorAll('.diagrams-panel')[0],
            'componentsPanel' : this.menuNode.querySelectorAll('.components-panel')[0],
            'attributesPanel' : this.menuNode.querySelectorAll('.attributes-panel')[0],
            'mainMenu'        : this.menuNode.querySelector('#main-menu'),
            'file-menu-panel'        : null,
            'diagram-menu-panel'     : null,
        }
        this.diagramId       = null;
        this.templateJson    = null;
        this.populateFileLinks();
        this.addEventListeners(this.menuNode);
    };

    addEventListeners(node) {
        let menuArray = Object.values(cimmenu.menuStructure.main);
        menuArray.forEach((menu)=>{
            node.querySelector('#' + menu.button.id).addEventListener("mouseover", (evt)=>{
                this.hideAllMenuPanels();
                this.showPanel(menu.panel.id);
                evt.stopPropagation();
            });
            node.querySelector('#' + menu.panel.id).addEventListener("mouseover", (evt)=>{
                evt.stopPropagation();
            });
            this.panels[menu.panel.id] = this.menuNode.querySelector('#' + menu.panel.id);
        })
    };

    hideIcon(iconId) {
    };

    update(templateJson) {
        this.templateJson = templateJson;
        this.populateDiagramComponents();
    };

    toggleMainMenuVisible() {
        if (this.mainMenu.classList.contains('invisible')) {
            this.mainMenu.classList.remove('invisible');
        }
        else {
            this.mainMenu.classList.add('invisible');
        }
    };

    togglePanelVisible(panelName) {
        if (this.panels[panelName] != undefined) {
            if (this.panels[panelName].classList.contains('invisible')) {
                this.panels[panelName].classList.remove('invisible');
            }
            else {
                this.panels[panelName].classList.add('invisible');
            }
        }
    };

    static readFile(e) {
        let files = e.target.files;
        if (files) {
            currentCimsvg().clearAllData()
            currentCimsvg().setFileCount(files.length);
            Array.from(files).forEach((file)=>{
                if (!file) {
                    return;
                }
                let reader = new FileReader();
                reader.onload = function(e) {
                    let contents = e.target.result;
                    currentCimsvg().loadFile(contents);
                };
                reader.readAsText(file);
            });
        }
    };

    populateFileLinks() {
        let template = Handlebars.templates['menu-json'];
        let items = template(cimmenu.menuStructure);
        this.panels['mainMenu'].innerHTML = items;
        this.panels['mainMenu'].querySelectorAll('#fileopen').forEach((elem)=>{ elem.addEventListener('change', cimmenu.readFile, false); });
    };

    static updateGridLocation (node, column, row, length) {
        let area = row.toString() + " / " + column.toString() + " / " + (row + length).toString() + " / " + (column + 1).toString();
        node.style.gridArea = area;
    };

    showFileMenu(evt) {
        this.showPanel('fileMenu');
        evt.stopPropagation();
    };

    showPanel(panelName) {
        let panel = this.panels[panelName];
        if (panel != undefined) {
            if(panel.classList.contains('invisible')) {
                panel.classList.remove('invisible');
            }
        }
    }

    hideAllMenuPanels() {
        let menuPanels = this.mainMenu.querySelectorAll('.main-menu-panel');
        menuPanels.forEach((panel)=>{
            panel.classList.add('invisible');
        });
    }

    hidePanel(panelName) {
        let panel = this.panels[panelName];
        if (panel != undefined) {
            if (panel != undefined) {
                panel.classList.add('invisible');
            }
        }
    };

    toggleDiagramComponentsVisibility() {
        if (this.diagramsPanel.classList.contains('invisible')) {
            this.diagramsPanel.classList.remove('invisible');
        }
        else {
            this.diagramsPanel.classList.add('invisible');
        }
    };

    toggleDiagramComponentListVisibility(diagramId) {
        let accordionId = '#' + diagramId + '-accordion';
        let accordionNode = this.diagramsPanel.querySelector(accordionId);
        if (accordionNode.classList.contains('invisible')) {
            accordionNode.classList.remove('invisible');
        }
        else {
            accordionNode.classList.add('invisible');
        }
        let rows = cimmenu.calculatePanelHeight(this.diagramsPanel)
        cimmenu.updateGridLocation(this.diagramsPanel, 1, 1, rows);
    };

    populateDiagramComponents() {
        cimmenu.populatePanelWithTemplate(this.diagramsPanel, this.templateJson, 'pinturaJson2DiagramList', "Diagram Components");
        let rows = cimmenu.calculatePanelHeight(this.diagramsPanel)
        cimmenu.updateGridLocation(this.diagramsPanel, 1, 1, rows);
    };

    populateComponentsListForDiagramAndComponentType(diagramId, componentType) {
        let components = common.safeExtract(this.templateJson, 'Diagram', diagramId, 'components', componentType)
        if (components) {
            this.diagramId = diagramId;
            let justTheseComponents = { "Diagram": { [diagramId]: { 'components': { [componentType]: components } } } };
            if(this.componentsPanel != null) {
                cimmenu.populatePanelWithTemplate(this.componentsPanel, justTheseComponents, 'pinturaJson2ComponentOfTypeList', "Component Types");
            }
            cimmenu.updateGridLocation(this.componentsPanel, 2, 1, Object.keys(components).length);
        }
        this.showPanel('componentsPanel');
    };

    /* calculates the number of rows that would be taken up
     * if all diagrams and components were displayed */
    static calculatePanelHeight(panel) {
        let height = 0;
        let accordionList = panel.querySelectorAll('.component-accordion');
        accordionList.forEach((accordion)=>{
            height++;
            if (!accordion.classList.contains('invisible')) {
                let liList = accordion.querySelectorAll('li');
                height += liList.length;
            }
        });
        return height;
    };

    static populatePanelWithTemplate(panelNode, templateJson, templateName, titleText) {
        let template = Handlebars.templates[templateName];
        let data = template(templateJson);
        let list = panelNode.querySelectorAll('.floating-menu-list');
        list.forEach(function(subpanel) {
            subpanel.innerHTML = data;
        });
        let titleList = panelNode.querySelectorAll('.floating-panel-title')
        titleList.forEach(function(title) {
            title.innerHTML = titleText;
        });

    };

    static populatePanelWithData(panelNode, menuItems, titleText) {
        let accordionList = panelNode.querySelectorAll('.floating-menu-list')
        accordionList.forEach(function(accordion) {
            accordion.innerHTML = menuItems;
        });
        let titleList = panelNode.querySelectorAll('.floating-panel-title')
        titleList.forEach(function(title) {
            title.innerHTML = titleText;
        });
    };

    static populateAttributesIdOnly (node, cimVersion, id) {
        let type = currentCimsvg().getObjectTypeUsingId(id);
        if (type != undefined) {
            cimmenu.populateAttributes(node, type, cimVersion, id);
        }
        else {
            console.error("Can't establish type for id: " + id)
        }
    };

    populateAttributes (type, id) {
        this.populate(this.attributesPanel, type, "cim16", id);
    };

    populate(node, type, cimVersion, id) {
        if (id == "No Object" || id == "Missing rdf:resource") {
            return;
        }
        let attributes = common.safeExtract(this.templateJson,
                                            'Diagram',
                                             this.diagramId,
                                            'components',
                                             type,
                                             id,
                                            'pintura:attributes');
        if (attributes == undefined) {
            console.error("Cannot find " + id + " in data to display id of " + type);
        }
        let templatePath = cimVersion + "/" +type.substring(4);
        let template = Handlebars.templates[templatePath];
        let data = template(attributes);
        cimmenu.populatePanelWithData(node, data, "Attributes");
        cimmenu.updateGridLocation(this.attributesPanel, 3, 1, 9);
        this.showPanel('attributesPanel');
    };

    getAggregateComponentsList(requestedClass, types) {
        let aggregateComponents = { aggregates: [{ rdfid: "", name: "Select " + requestedClass }]};
        for (let index in types) {
            let type = "cim:" + types[index];
            let components = common.safeExtract(this.templateJson, 'Diagram', this.diagramId, 'components', type)
            for (let component in components) {
                aggregateComponents['aggregates'].push({
                    rdfid: component[common.pinturaRdfid()],
                    name:  component[common.identifiedObjectName()],
                    type:  type
                })
            }
        }
        return aggregateComponents;
    };

    static populateTerminals (node, type, cimVersion, rdfid) {
        let title = "Terminal List";
        let titleNode = node.querySelectorAll('.floating-panel-title')
        let baseJson = currentCimsvg().getBaseJson();
        if (baseJson[type] && baseJson[type][rdfid]) {
            let template = Handlebars.templates['cim_list_terminals'];
            let terminals = baseJson[type][rdfid][common.pinturaTerminals()]
            let begin =`
                <span class="row-right wide-row floating-panel-value">
                    <input class="list-subtitle" value="Add New Terminal" type="text"></input>
                    <button onclick='`
            let click = 'currenttCimsvg().addTerminal("' + type + '", "' +rdfid + '");currentCimsvg().applyTemplates();currentCimsvg().populateTerminals("' + type + '", "' + rdfid +'")'
            let end = `;'> + </button>
                </span>
            `;
            let menuData = begin + click + end;
            for (let index in terminals) {
                let terminalId = terminals[index];
                let terminal = baseJson["cim:Terminal"][terminalId];
                let templateData = {
                    "name": terminal['cim:IdentifiedObject.name'],
                    "rdfid": rdfid,
                    "terminalId": terminalId,
                    "type": type,
                };
                menuData += template(templateData);
            }
            cimmenu.populatePanelWithData(node, menuData, "Terminals");
        }
        else {
            console.error("Couldn't find " + rdfid + " in " + baseJson[type])
        }
    };
}

cimmenu.menuStructure = {
    'main': {
        'File': {
            'button': {
                'id': "file-menu-button",
            },
            'panel': {
                'id': "file-menu-panel",
            },
            'links': [
                {
                    'input': {
                        'id': 'fileopen',
                    },
                    'a': {
                        'onclick' : "fileopen.click();cimmenu.hidePanel('file-menu-panel')",
                        'text' : 'Open file 🖿',
                    }
                },
                {
                    'a': {
                        'onclick' : "currentCimsvg().loadUri();cimmenu.hidePanel('file-menu-panel')",
                        'text' : "Open link 🔗",
                    }
                },
                {
                    'input': {
                        'id': 'filesave',
                    },
                    'a': {
                        'onclick' : "currentCimsvg().saveGridXml();cimmenu.hidePanel('file-menu-panel')",
                        'text' : "Save to file 🖿",
                    }
                },
                {
                    'a': {
                        'onclick' : "currentCimsvg().saveTemplateJson();cimmenu.hidePanel('file-menu-panel')",
                        'text' : "Save JSON  🖿",
                    }
                },
                {
                    'a': {
                        'onclick' : "currentCimsvg().saveToUri();cimmenu.hidePanel('file-menu-panel')",
                        'text' : "Save to link 🔗",
                    }
                },
            ]
        },
        'Diagram': {
            'button': {
                'id': "diagram-menu-button",
            },
            'panel': {
                'id': "diagram-menu-panel",
            },
            links: [
                {
                    'a': {
                        'onclick' : "currentCimsvg().addDiagram();cimmenu.hidePanel('diagram-menu-panel')",
                        'text' : "Add Diagram",
                    }
                },
            ]
        },
        'Close' : {
            'button': {
                'id': "close-menu-button",
            },
            'panel': {
                'id': "close-menu-panel",
            },
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cimmenu
}

global.cimmenu = cimmenu
