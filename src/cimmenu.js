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

    function handler() {
        //console.log(this.getResponseHeader('content-type'));
    }

    var populateSidebar = function(sidebar, templateJson) {
        let template = Handlebars.templates['pintura2html'];
        let data = template(templateJson);
        sidebar.querySelector('#component-search-accordion').innerHTML = data;
    };

    populateAttributes = function(type, id) {
        let list = document.getElementById('attribute-list-div');
        let baseJson = cimxml.getBaseJson();
        let template = Handlebars.templates[type.substring(4)];
        let data = template(baseJson[type][id]);
        links = data.split('<li')
        number_of_attributes = links.length - 1;
        list.innerHTML = data;
        integer_list_height = 38 + 10 + number_of_attributes * 34
        body_height = document.body.getBoundingClientRect().height
        height = 0
        if (integer_list_height < body_height) {
            height = 'height:' + integer_list_height.toString() + 'px'
        } else {
            height = 'height:100%'
        }
        let component_attributes = document.getElementById('component-attributes');
        component_attributes.setAttribute("style", height)
    };

    var loadXml = function(fileName, callback) {
        // Create a connection to the file.
        var Connect = new XMLHttpRequest();
        // Define which file to open and
        Connect.open("GET", fileName, true);
        Connect.setRequestHeader("Content-Type", "text/xml");
        Connect.onreadystatechange = handler;
        Connect.onload = function (e) {
            if(Connect.readyState === 4) {
                if(Connect.status === 200) {
                    callback(Connect.responseXML);
                }
                else {
                    console.log(Connect.statusText);
                }
            }
        };
        // send the request.
        Connect.send(null);
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

    var selectComponentType = function(type) {
        var elements = document.getElementsByClassName('component-type-accordion');
        for (var i=0; i<elements.length; i++)
        {
            elementIdSubStringLength = elements[i].id.length - 10;
            let elementId = elements[i].id.substring( 0, elementIdSubStringLength ).toUpperCase();
            if ( elementId == type.toUpperCase() ) {
                elements[i].style='display:inline';
            }
            else {
                elements[i].style='display:none';
            }
        }
    };

    return {
        searchSidebar,
        populateSidebar,
        selectComponentType,
    };
}());

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        cimmenu
    }
}
