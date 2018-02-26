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

    var componentAttributeNode = null;
    var componentCreationNode = null;

    var populateSidebar = function(sidebar, templateJson) {
        let template = Handlebars.templates['pintura2html'];
        let data = template(templateJson);
        sidebar.querySelector('#component-sidebar-list').innerHTML = data;
    };

    var calculatePanelHeight = function(data, panelNode, containingNode) {
        let links = data.split('<li')
        let listLength = links.length - 1;
        panelHeight = 40 + 10 + (listLength * 39)
        containingPanelHeight = containingNode.getBoundingClientRect().height
        height = 0
        if (panelHeight < containingPanelHeight) {
            height = 'height:' + panelHeight.toString() + 'px'
        } else {
            height = 'height:100%'
        }
        panelNode.setAttribute("style", height)
    };

    var populateComponentCreation = function(menuXml) {
        accordion = componentCreationNode.querySelector('#component-creation-list-div')
        accordion.innerHTML = menuXml.documentElement.innerHTML;
        calculatePanelHeight(menuXml.documentElement.innerHTML, componentCreationNode, document.body);
    };

    var populateAttributes = function(type, id) {
        let list = componentAttributeNode.querySelector('#component-attributes-list-div')
        let baseJson = cimxml.getBaseJson();
        let template = Handlebars.templates[type.substring(4)];
        let data = template(baseJson[type][id]);
        list.innerHTML = data;
        calculatePanelHeight(data, componentAttributeNode, document.body);
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
        init: function(componentAttributes, componentCreation, menuXml){
            componentAttributeNode = componentAttributes;
            componentCreationNode = componentCreation;
            populateComponentCreation(menuXml);
        },
        searchSidebar,
        populateSidebar,
        populateAttributes,
    };
}());

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cimmenu
}
