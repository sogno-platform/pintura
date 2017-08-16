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

var cimsvg = cimsvg || (function() {

    var getDOM = function(text) {
        let newDoc;
        if ( window.DOMParser ) {
            newDoc = ( new DOMParser() ).parseFromString( text, "application/xml" );
        }
        else if( window.ActiveXObject ) {
            let xmlObject = new ActiveXObject( "Microsoft.XMLDOM" );
            xmlObject.async = false;
            xmlObject.loadXML( text );
            newDoc = xmlObject;
            xmlObject = undefined;
        }
        else {
            throw new Error( "Cannot find an XML parser!" );
        }
        return newDoc;
    };

    var includeFile = function(fileName) {
        let dom = svgNode.ownerDocument;
        let newTag = dom.createElement("script");
        newTag.type = "text/javascript";
        newTag.src=fileName;
        svgNode.appendChild(newTag);
    };

    var applyTemplate = function(data) {
        var template = Handlebars.templates['cim2svg'];
        var output = template(data);
        console.log(output);
        return output;
    };

    var loadFile = function(fileContents) {
        if (cimjson.moreXmlData(fileContents)) {
            data = cimjson.getJsonData();
            svgNode.getElementById('diagram-elements').innerHTML = applyTemplate(data);
        }
    };

    var setFileCount = function(count) {
        cimjson.setRdfFileCount(count);
    };

    var svgNode = null;

    var isNode = false;
    if (typeof module !== 'undefined' && module.exports) {
        isNode = true;
    }

    var createSideBar = function(xsd) {
        
    };

    return {
        init : function(node) {
            svgNode = node;
            includeFile("templates/template.js");
            includeFile("src/model/power/components.js");
            includeFile("src/model/diagram.js");
            includeFile("src/model/cimjson.js");
        },
        loadFile,
        setFileCount,
    };

}());

if (cimsvg.isNode) {
    module.exports = {
        cimsvg 
    }
}
