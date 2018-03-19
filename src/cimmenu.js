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

    var calculatePanelHeight = function(data, panelNode, containingNode) {
        let links = data.split('<li')
        let listLength = links.length - 1;
        panelHeight = 40 + 10 + (listLength * 40)
        containingPanelHeight = containingNode.getBoundingClientRect().height
        height = 0
        if (panelHeight < containingPanelHeight) {
            height = 'height:' + panelHeight.toString() + 'px'
        } else {
            height = 'height:100%'
        }
        panelNode.setAttribute("style", height)
    };

    var populateComponentCreation = function(componentCreationNode, menuXml) {
        accordion = componentCreationNode.querySelector('#component-creation-list-div')

        let ul = new DOMParser().parseFromString("<ul class='floating-panel-list'></ul>", 'text/xml');
        for (let item in cimedit.terminalAndPointLimits) {
            let xpathQuery = "/menu/ul/li[@id='" + item.substr(4) + "']";
            let xpathResult = menuXml.evaluate( xpathQuery, menuXml.documentElement, null, XPathResult.ANY_TYPE, null );
            let match = xpathResult.iterateNext();
            if (match) {
                ul.documentElement.appendChild(match);
            }
        }
        accordion.innerHTML = ul.documentElement.outerHTML;
        calculatePanelHeight(accordion.innerHTML, componentCreationNode, document.body);
    };

    const populateAttributesIdOnly = function(node, id) {
        let baseJson = cimxml.getBaseJson();
        let type;
        for (let types in baseJson) {
            for (let rdfid in baseJson[types]) {
                if (id == rdfid) {
                    type = types;
                    continue;
                }
            }
        }
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
        populateAttributesIdOnly,
    };
}());

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cimmenu
}
