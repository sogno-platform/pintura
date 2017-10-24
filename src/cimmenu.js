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

    populateRawXML = function(node, rawXML) {
        var XMLS = new XMLSerializer();
        var xmls = XMLS.serializeToString(rawXML);
        node.querySelector('#cim-xml-text').insertAdjacentHTML('afterbegin', xmls);
    };

    populatePinturaData = function(node, templateJson) {
        node.querySelector('#pintura-data-text').innerHTML = JSON.stringify(templateJson, null, 4);
    };

    populateAttributes = function(type, id) {
        let list = document.getElementById('attribute-list-div');
        let baseJson = cimxml.getBaseJson();
        let template = Handlebars.templates['basejson2sidebar'];
        let data = template(baseJson[type][id]);
        list.innerHTML = data;
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

    var init = function(sidebarNode) {
        xsltProcessor = new XSLTProcessor();
        loadXml("src/model/power/cim_xml_scheme_test.xslt", function(xslt) {
            xsltProcessor.importStylesheet(xslt);
            loadXml("src/model/power/cim_xml_scheme_test.xsd", function(xsd) {
                let components = xsltProcessor.transformToFragment(xsd, sidebarNode.ownerDocument);
            });
        });
    };

    return {
        init,
        searchSidebar,
        populateSidebar,
        populateRawXML,
        populatePinturaData,
        selectComponentType,
    };
}());

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        cimmenu
    }
}
