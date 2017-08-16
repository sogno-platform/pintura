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

    const imageNames = {
        "cim:ACLineSegment":             "images/term.svg",
        "cim:Terminal":                  "images/term.svg",
        "cim:Breaker":                   "images/brea.svg",
        "cim:ConnectivityNode":          "images/conn.svg",
        "cim:EnergyConsumer":            "images/cons.svg",
        "cim:EquivalentInjection":       "images/cons.svg",
        "cim:ExternalNetworkInjection":  "images/net.svg",
        "cim:PowerTransformer":          "images/trans.svg",
        "cim:SolarGeneratingUnit":       "images/solar.svg",
        "cim:SynchronousMachine":        "images/sync.svg",
        "cim:TopologicalNode":           "images/topo.svg",
        "cim:TransformerWinding":        "images/trans.svg",
    };

    var applyTemplate = function(data) {
        const imageSize = 12;
        Handlebars.registerHelper('imageSize', function() {
            return imageSize;
        });
        Handlebars.registerHelper('needsLine', function(typeName, contents) {
            if (typeName == "cim:ACLineSegment") {
                return contents.fn();
            }
            return;
        });
        Handlebars.registerHelper('imageCentreOffset', function(x) {
            let newX = parseInt(x)-(imageSize/2);
            console.log("image after offset: "+(x).toString());
            return newX;
        });
        Handlebars.registerHelper('findImage', function(typeName) {
            return new Handlebars.SafeString(imageNames[typeName]);
        });
        Handlebars.registerHelper('inc', function(number) {
            return parseInt(number)+1;
        });
        
        var template_string = `
  {{#each Diagram}}
      {{#each this as |value typeName|}}
        {{#each this as |value componentId|}}
          <g id="{{@key}}" name="{{[cim:IdentifiedObject.name]}}" type="{{typeName}}" class="image">
            {{#if Pintura:Line}}
            {{#Pintura:DiagramObject}}
            <line id="_17086487-56ba-4979-b8de-064025a6b4da-bar"
                   {{#each [Pintura:DiagramObjectPoints]}}
                   x{{inc @index}}="{{[cim:DiagramObjectPoint.xPosition]}}" y{{inc @index}}="{{[cim:DiagramObjectPoint.yPosition]}}"
                   {{/each}}
                   class="line" onmouseup="onMouseUp(evt)" onmouseover="onMouseOver(evt)" onmouseleave="onMouseLeaveNode(evt)"/>
            {{/Pintura:DiagramObject}}
            {{/if}}
            {{#Pintura:DiagramObject}}
              {{#each [Pintura:DiagramObjectPoints]}}
            <image x="{{imageCentreOffset [cim:DiagramObjectPoint.xPosition]}}" y="{{imageCentreOffset [cim:DiagramObjectPoint.yPosition]}}" href="{{findImage typeName}}" id="{{componentId}}-image{{@key}}" height="{{imageSize}}" width="{{imageSize}}" imageIndex="1" onmousedown="onMouseDown(evt)" onmouseup="onMouseUp(evt)" onmousemove="onMouseMove(evt)"/>
              {{/each}}
            {{/Pintura:DiagramObject}}
            <text x="429.2" y="123" class="svglabel" type="text" id="{{componentId}}-text" visibility="hidden" onmouseup="onMouseUp(evt)"></text>
          </g>
        {{/each}}
      {{/each}}
  {{/each}}\n
`;
        var template = Handlebars.compile(template_string);
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
            includeFile("handlebars-latest.js");
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
