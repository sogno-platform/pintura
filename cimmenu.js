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
        console.log(this.getResponseHeader('content-type'));
    }

    var loadXml = function(fileName, callback) {
        // Create a connection to the file.
        var Connect = new XMLHttpRequest();
        // Define which file to open and
        Connect.open("GET", fileName, true);
        Connect.setRequestHeader("Content-Type", "text/xml");
        //Connect.overrideMimeType('text/xml');
        Connect.onreadystatechange = handler;
        Connect.onload = function (e) {
            if(Connect.readyState === 4) {
                if(Connect.status === 200) {
                    console.log(Connect.response);
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
        var elements = document.getElementsByClassName('w3-bar-item');
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

    var init = function(menuNode) {
        xsltProcessor = new XSLTProcessor();
        loadXml("src/model/power/cim_xml_scheme_test.xslt", function(xslt) {
            console.log(xslt);
            xsltProcessor.importStylesheet(xslt);
            loadXml("src/model/power/cim_xml_scheme_test.xsd", function(xsd) {
                console.log(xsd);
                var result = xsltProcessor.transformToFragment(xsd, menuNode.ownerDocument);
                menuNode.append(result);
            });
        });
    };

    return {
        init,
        searchSidebar,
    };
}());

