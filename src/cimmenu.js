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

class cimmenu {

    static populateSidebar (sidebarNode, templateJson) {
        let template = Handlebars.templates['pintura2html'];
        let data = template(templateJson);
        let sidebarList = sidebarNode.querySelectorAll('.component-sidebar-list');
        sidebarList.forEach(function(sidebar) {
            sidebar.innerHTML = data;
        });
    };

    static calculatePanelHeight (data, panelNode, containingNode) {
        let panelHeight = 0;
        let tableList = panelNode.querySelectorAll('.floating-panel-table')
        tableList.forEach(function(table) {
            table.classList.remove('invisible');
            panelHeight += table.getBoundingClientRect.height;
        });
        let containingPanelHeight = containingNode.getBoundingClientRect().height
        if (panelHeight < containingPanelHeight) {
            panelNode.style.height = panelHeight.toString() + 'px'
        } else {
            panelNode.style.height = '100%'
        }
    };

    static populateFloatingMenu (floatingMenuNode, menuItems, titleText) {
        let accordionList = floatingMenuNode.querySelectorAll('.floating-menu-list')
        accordionList.forEach(function(accordion) {
            accordion.innerHTML = menuItems;
            cimmenu.calculatePanelHeight(accordion.innerHTML, floatingMenuNode, floatingMenuNode.ownerDocument.body);
        });
        let titleList = floatingMenuNode.querySelectorAll('.floating-panel-title')
        titleList.forEach(function(title) {
            title.innerHTML = titleText;
        });
    };

    static populateAttributesIdOnly (node, id) {
        let type = currentCimsvg().getObjectTypeUsingId(id);
        if (type != undefined) {
            populateAttributes(node, type, id);
        }
        else {
            console.error("Can't establish type for id: " + id)
        }
    };

    static populateAttributes (node, type, id) {
        if (id == "No Object" || id == "Missing rdf:resource") {
            return;
        }
        let baseJson = currentCimsvg().getBaseJson();
        if (baseJson[type] == undefined) {
            console.error("Cannot find " + type + " in data to display id " + id);
        }
        if (baseJson[type][id] == undefined) {
            console.error("Cannot find " + id + " in data to display id of " + type);
        }
        let template = Handlebars.templates["attributes/"+type.substring(4)];
        let data = template(baseJson[type][id]);
        cimmenu.populateFloatingMenu(node, data, "Attributes");
    };

    static populateTerminals (node, type, rdfid) {
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
            cimmenu.populateFloatingMenu(node, menuData, "Terminals");
        }
        else {
            console.error("Couldn't find " + rdfid + " in " + baseJson[type])
        }
    };

}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cimmenu
}

global.cimmenu = cimmenu
