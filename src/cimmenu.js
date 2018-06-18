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

var cimmenu = cimmenu || (function() {

    var populateSidebar = function(sidebar, templateJson) {
        let template = Handlebars.templates['pintura2html'];
        let data = template(templateJson);
        sidebar.querySelector('#component-sidebar-list').innerHTML = data;
    };

    var calculatePanelHeight = function(data, panelNode, containingNode, titleHeight = 50) {
        let links = data.split('<li')
        let listLength = links.length - 1;
        panelHeight = titleHeight + (listLength * 40)
        containingPanelHeight = containingNode.getBoundingClientRect().height
        height = 0
        if (panelHeight < containingPanelHeight) {
            panelNode.style.height = panelHeight.toString() + 'px'
        } else {
            panelNode.style.height = '100%'
        }
    };

    var populateComponentCreation = function(componentCreationNode, menuXml) {
        accordion = componentCreationNode.querySelector('#component-creation-list-div')

        let ul = new DOMParser().parseFromString("<ul class='floating-panel-list'></ul>", 'text/xml');
        for (let item in cimedit.terminalAndPointLimits) {
            if (cimedit.typeIsVisible(item)) {
                let xpathQuery = "/menu/ul/li[@id='" + item.substr(4) + "']";
                let xpathResult = menuXml.evaluate( xpathQuery, menuXml.documentElement, null, XPathResult.ANY_TYPE, null );
                let match = xpathResult.iterateNext();
                if (match) {
                    ul.documentElement.appendChild(match);
                }
            }
        }
        accordion.innerHTML = ul.documentElement.outerHTML;
        calculatePanelHeight(accordion.innerHTML, componentCreationNode, document.body);
    };

    const populateAttributesIdOnly = function(node, id) {
        let type = cimsvg.getObjectTypeUsingId(id);
        if (type != undefined) {
            populateAttributes(node, type, id);
        }
        else {
            console.error("Can't establish type for id: " + id)
        }
    };

    const populateAttributes = function(node, type, id) {
        if (id == "No Object" || id == "Missing rdf:resource") {
            return;
        }
        let list = node.querySelector('#component-attributes-list-div')
        let baseJson = cimxml.getBaseJson();
        if (baseJson[type] == undefined) {
            console.error("Cannot find " + type + " in data to display id " + id);
        }
        if (baseJson[type][id] == undefined) {
            console.error("Cannot find " + id + " in data to display id of " + type);
        }
        let template = Handlebars.templates["attributes/"+type.substring(4)];
        let data = template(baseJson[type][id]);
        list.innerHTML = data;
        calculatePanelHeight(data, node, document.body);
    };

    const populateTerminals = function(node, type, rdfid) {
        let baseJson = cimxml.getBaseJson();
        if (baseJson[type] && baseJson[type][rdfid]) {
            var template = Handlebars.templates['cim_list_terminals'];
            let terminals = baseJson[type][rdfid]['terminals']
            let begin =`
                <span class="row-right wide-row floating-panel-value">
                    <input class="list-subtitle" value="Add New Terminal" type="text"></input>
                    <button onclick='`
            let click = 'cimsvg.addTerminal("' + type + '", "' +rdfid + '");cimsvg.applyTemplates();cimsvg.populateTerminals("' + type + '", "' + rdfid +'")'
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
            let list = node.querySelector('#component-terminals-list-div')
            list.innerHTML = menuData;
            calculatePanelHeight(list.innerHTML, node, document.body, 100);
            showContainer('component-terminals', null, 'true');
        }
        else {
            console.error("Couldn't find " + rdfid + " in " + baseJson[type])
        }
    };
    var searchSidebar=function(searchString) {
        var elements = document.getElementsByClassName('component-list-item');
        for (var i=0; i<elements.length; i++)
        {
            if (elements[i].text.toUpperCase().startsWith(searchString.toUpperCase())) {
                elements[i].style='display:inline';
            }
            else {
                elements[i].style='display:none';
            }
        }
    };

    return {
        init: function(componentCreation, menuXml){
            populateComponentCreation(componentCreation, menuXml);
        },
        searchSidebar,
        populateSidebar,
        populateAttributes,
        populateTerminals,
        populateAttributesIdOnly,
    };
}());

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cimmenu
}
