 /*
 *  Copyright © 2016-2017, RWTH Aachen University
 *  Authors: Richard Marston, Georg Reinke
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

var cimjson = cimjson || (function() {

    var jsonData;
    var xmlDoc;
    var rdfFileCount = 0;
    var rdfFileReceived = 0;
    const xmlnsString = "xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#' xmlns:cim='http://iec.ch/TC57/2012/CIM-schema-cim16#' xmlns:md='http://iec.ch/TC57/61970-552/ModelDescription/1#' xmlns:entsoe='http://entsoe.eu/Secretariat/ProfileExtension/2#'";

    /*
     * Convert a small data item into XML and add it to a node
     */
    var addChild = function(object, name, doc, owner) {
        let child;
        if (typeof object == "object") {
            child = doc.createElement(name);
            child.setAttribute("rdf:resource", object["rdf:resource"]);
        }
        else {
            child = doc.createElement(name);
            child.innerHTML = object;
        }
        owner.appendChild(child);
    };
   
    var copyXmlDataIntoObject = function(object, node) {
        let childNodes = node.children;
        for (let childIndex = 0; childIndex < childNodes.length; childIndex++) {
            let thisChild = childNodes[childIndex];
            if (thisChild.nodeType == Node.ELEMENT_NODE) {
                if (thisChild.attributes.length > 0) {
                    object[thisChild.nodeName] = { "rdf:resource": thisChild.getAttribute("rdf:resource")};
                }
                else {
                    object[thisChild.nodeName] = thisChild.innerHTML;
                }
            }
        }
    };
    
    var importXmlNodeIntoGraph = function(graph, nodeCategory, node, id) {
    
        let thisObject = { };
    
        copyXmlDataIntoObject(thisObject, node);
    
        if (!graph[nodeCategory]) {
            graph[nodeCategory] = {};
        }
    
        /* add the new object to the graph */
        let categoryGraph = graph[nodeCategory];
        categoryGraph[id] = thisObject;
    };
    
    var importAboutDataIntoGraph = function(graph, nodeCategory, thisNode, id) {
        if (graph[nodeCategory] && graph[nodeCategory][id]) {
            let thisObject = graph[nodeCategory][id].about = [];
            copyXmlDataIntoObject(thisObject, thisNode);
        }
    };

    /*
     * What is the rdf:ID attribute for this node
     */
    var getRdfId = function(node) {
        let rdfId = node.getAttribute("rdf:ID");
        return rdfId;
    };

    /*
     * What is the rdf:about attribute for this node
     */
    var getRdfAbout = function(node) {
        let rdfAbout = node.getAttribute("rdf:about");
        return rdfAbout;
    };

    /*
     * Function to create a JSON document from an RDF (XML) DOM.
     * RDF is a shallow xml format so we don"t have to dig too
     * deep, a node will only ever have children or attributes.
     */
    var createObjectGraphFromXml = function( xmlData ) {
        let graph = {};
        graph.ObjectsWithNoPoints = {};
    
        let topLevelNodes = xmlData.documentElement.childNodes;
    
        /* loop through all of the top level nodes */
        for (let topLevelIndex=0; topLevelIndex<topLevelNodes.length; topLevelIndex++) {
            let thisNode = topLevelNodes[topLevelIndex];
            if (thisNode.nodeType == Node.ELEMENT_NODE)
            {
                /* find out what type of node we are reading */
                let nodeCategory = thisNode.nodeName;
                let id = getRdfId(thisNode);
                if (id) {
                    importXmlNodeIntoGraph(graph, nodeCategory, thisNode, id);
                }
            }
        }
    
        /* we need all of the rdf:id nodes before importing the rdf:about nodes */
        for (let topLevelIndex=0; topLevelIndex<topLevelNodes.length; topLevelIndex++) {
            let thisNode = topLevelNodes[topLevelIndex];
            if (thisNode.nodeType == Node.ELEMENT_NODE)
            {
                /* find out what type of node we are reading */
                let nodeCategory = thisNode.nodeName;
                let id = getRdfAbout(thisNode);
                if (id) {
                    importAboutDataIntoGraph(graph, nodeCategory, thisNode, id.substr(1));
                }
            }
        }
        return graph;
    };
    
    /*
     * Clear the buffer of XML data that we use to handle multiple file imports
     */
    var clearXmlData = function() {
        xmlDoc = null;
    };

    /*
     * Tell this module how many pieces the data will be arriving in
     */
    var setRdfFileCount = function(count) {
        rdfFileCount = count;
    };

    var xmlns = function(){
        return xmlnsString;
    };

    var getJsonData = function(){
        return jsonData;
    };

    /*
     * Here comes some more data
     */
    var moreXmlData = function(text, draw=true) {
    
        if (!xmlDoc) {
            xmlDoc = getDOM("<rdf:RDF "+xmlns()+"/>");
        }
    
        let newDoc = getDOM(text);
        let nodes = newDoc.documentElement.childNodes;
        for (let i = 0; i < nodes.length; i++) {
		    if (nodes[i].nodeType == Node.ELEMENT_NODE) {
                if (nodes[i].nodeName != "md:FullModel") {
                    xmlDoc.documentElement.appendChild(nodes[i].cloneNode(true));
                }
            }
        }
    
        rdfFileReceived++;
        if (checkIfParseReady()) {
            let graph = createObjectGraphFromXml(xmlDoc);
            console.log(graph);
            jsonData = consolidateObjectGraph(graph);
            rdfFileReceived = 0;
            rdfFileCount = 0;
            return true;
        }
        return false;
    };

    var copyDiagramObjectFromDiagramIntoComponent = function(categoryGraph, diagramObjectGraph) {
        for (let key in categoryGraph) {
            try {
                categoryGraph[key].diagramObject = diagramObjectGraph["#"+key];
            }
            catch (error) {
                console.log(error.message);
            }
        }
    };

    var consolidateObjectGraph = function(graph) {
        console.log(graph);
        //var create_template_string = "{{#each this}} {{@key}}: {{#items}} {{name}} \n{{/items}}\n{{/each}}\n";
        //var create_template_string = "{{#each components}} [[#{{@key}}]]\n{{#items}}   {{name}}: [[{{inputName}}]] \n{{/items}} [[/{{@key}}]]\n{{/each}}\n";
        var create_template_string = ` 
{ 
  {{#each components}}
    {{!-- first key is the component name --}}
    '{{@key}}': [
      {{!-- loop 1: key here tells the template to loop over the component --}}
      [[#{{@key}}]]
        {{!-- loop 2: then we loop over the array of rdfId-indexed objects --}}
        [[#each this]]
        {
            'rdfId': '[[@key]]'
          {{!-- loop 3: loop over items in definition --}}
          {{#items}}
            '{{name}}': '[[ {{inputName}} ]]'
          {{!-- close loop 3 --}}
          {{/items}}
        },
        {{!-- close loop 2 --}}
        [[/each]]
      {{!-- close loop 1 --}}
      [[/{{@key}}]]
    ]
  {{/each}}\n
}`;

        console.log("create_template_string: "+create_template_string);
        var create_template = Handlebars.compile(create_template_string);
        var create_template_output = create_template({ "components": components });
        create_template_output = create_template_output.replace(/\[\[/g, '{{');
        create_template_output = create_template_output.replace(/\]\]/g, '}}');
        console.log(create_template_output);

        var template = Handlebars.compile(create_template_output);
        var output = template(graph);
        console.log(output);

/*
        var create_diagram_template_output = create_template({ "components": diagram_components });
        create_diagram_template_output = create_diagram_template_output.replace(/\[\[/g, '{{');
        create_diagram_template_output = create_diagram_template_output.replace(/\]\]/g, '}}');
        console.log(create_diagram_template_output);
*/
var create_diagram_template_output = `{ 
    'cim:DiagramObject': [
      {{#cim:DiagramObject}}
        {{#each this}}
        {
            'rdfId': '{{@key}}'
            'Diagram': '{{ [cim:DiagramObject.Diagram].rdf:resource }}'
            'IdentifiedObject': '{{ [cim:DiagramObject.IdentifiedObject].rdf:resource }}'
            'rotation': '{{ [cim:DiagramObject.rotation] }}'
            'Name': '{{ [cim:IdentifiedObject.name] }}'
            'pointList': [
              {{#cim:DiagramObjectPoint}}
              {{#each this}}
              {
                'rdfId': '{{@key}}'
                'object': '{{ [cim:DiagramObjectPoint.DiagramObject].rdf:resource }}'
                'sequenceNumber': '{{ [cim:DiagramObjectPoint.sequenceNumber] }}'
                'x': '{{ [cim:DiagramObjectPoint.xPosition] }}'
                'y': '{{ [cim:DiagramObjectPoint.yPosition] }}'
              },
              {{/each}}
              {{/cim:DiagramObjectPoint}}
            ]
        },
        {{/each}}
      {{/cim:DiagramObject}}
    ]
}`
        var diagram_template = Handlebars.compile(create_diagram_template_output);
        var diagram_output = diagram_template(graph);
        console.log(diagram_output);
    };

    /*
     * Have we received all the data files yet?
     */
    var checkIfParseReady = function() {
        if (rdfFileReceived > 0) {
            if (rdfFileCount == rdfFileReceived) {
                console.log("rdf file count: "+rdfFileCount+" is greater than "+rdfFileReceived);
                return true;
            }
        }
    };
    
    /*
     * Different method of getting DOM required for some platforms
     */
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

    return {
        setRdfFileCount,
        moreXmlData,
        getJsonData,
    };
}());

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        cimjson 
    };
}
