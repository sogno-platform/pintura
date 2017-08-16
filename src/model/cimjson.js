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

    const PinturaDiagramObject = "Pintura:DiagramObject";
    const PinturaDiagramObjectPoints = "Pintura:DiagramObjectPoints";
    const PinturaLine = "Pintura:Line";
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

    var copyComponentIntoDiagramGraph = function(categoryGraphName, diagramObjects, categoryGraph, output) {
        /*
         * Index the component graph by the identified object's id so we don't
         * have to go hunting for the referenced object inside the diagram objects.
         */
        let newDiagramList = output['Diagram'];
        for (let key in categoryGraph) {
            let diagramObject = diagramObjects[key];
            if (diagramObject === undefined) {
            }
            else {
                let diagram = diagramObject["cim:DiagramObject.Diagram"]["rdf:resource"].substring(1);
                if (newDiagramList[diagram] === undefined){
                    newDiagramList[diagram] = {};
                }
                if (diagramObject["cim:DiagramObject.IdentifiedObject"]) {
                    let identifiedObject = diagramObjects[key]["cim:DiagramObject.IdentifiedObject"]["rdf:resource"].substring(1);
                    if (newDiagramList[diagram][categoryGraphName] === undefined){
                        newDiagramList[diagram][categoryGraphName] = {};
                    }
                    newDiagramList[diagram][categoryGraphName][identifiedObject] = categoryGraph[identifiedObject]
                    newDiagramList[diagram][categoryGraphName][identifiedObject][PinturaDiagramObject] = diagramObjects[key];
                }
            }
        }
        return output;
    };

    var indexDiagramGraphByComponentType = function(input) {
        /*
         * Index the diagram object graph by the identified object's id so we don't
         * have to go hunting for the referenced object inside the diagram objects.
         */
        let graph = {};
        for (let key in input) {
            let diagramObject = input[key];
            let diagram = diagramObject["cim:DiagramObject.Diagram"]["rdf:resource"].substring(1);
            if (diagramObject["cim:DiagramObject.IdentifiedObject"]) {
                let identifiedObject = input[key]["cim:DiagramObject.IdentifiedObject"]["rdf:resource"].substring(1);
                graph[identifiedObject] = input[key];
            }
        }
        return graph;
    };

    var markComponentForLineDrawing = function(categoryGraph) {
        for (let key in categoryGraph) {
            try {
                categoryGraph[key][PinturaLine] = true;
            }
            catch (error) {
                console.log(error.message);
            }
        }
    };

    var copyDiagramObjectIntoComponent = function(categoryGraph, diagramObjectGraph) {
        for (let key in categoryGraph) {
            try {
                categoryGraph[key][PinturaDiagramObject] = diagramObjectGraph[key];
            }
            catch (error) {
                console.log(error.message);
            }
        }
    };

    var addDiagramObjectPointsToDiagramObjects = function(diagramObjectPointGraph, diagramObjectGraph){
        for (let key in diagramObjectPointGraph) {
            mergeMatchingDataIntoParentNodeArray(diagramObjectPointGraph[key], "cim:DiagramObjectPoint.DiagramObject", diagramObjectGraph, PinturaDiagramObjectPoints);
        }
    };

    /*
     * Create link to a member of an array of e.g. points
     */
    var mergeMatchingDataIntoParentNodeArray = function(node, matchingElement, destinationGraph, destinationElement) {
        if (node[matchingElement]) {
            let id = node[matchingElement]["rdf:resource"].substr(1);
            if (destinationGraph[id]) {
                if (destinationGraph[id][destinationElement] === undefined) {
                    destinationGraph[id][destinationElement] = [];
                }
                destinationGraph[id][destinationElement].push(node);
            }
            else {
                console.log("Could not find destination "+matchingElement+" to merge into "+destinationElement+".");
            }
        }
        else {
            console.log("Could not find matching element "+matchingElement+" to merge "+destinationElement+" into .");
        }
    };

    var consolidateObjectGraph = function(graph) {
        console.log(graph);

        const categoryGraphNames = [
            "cim:ACLineSegment",
            "cim:Terminal",
            "cim:Breaker",
            "cim:ConnectivityNode",
            "cim:EnergyConsumer",
            "cim:EquivalentInjection",
            "cim:ExternalNetworkInjection",
            "cim:PowerTransformer",
            "cim:SolarGeneratingUnit",
            "cim:SynchronousMachine",
            "cim:TopologicalNode",
            "cim:TransformerWinding",
        ];

        const categoriesWithLines = [
            "cim:ACLineSegment",
            "cim:ConnectivityNode",
            "cim:TopologicalNode",
        ];

        diagramObjects = graph['cim:DiagramObject'];
        diagramObjectPoints = graph['cim:DiagramObjectPoint'];

        addDiagramObjectPointsToDiagramObjects(diagramObjectPoints, diagramObjects);

        let diagramObjectsByIdentifiedObjects = indexDiagramGraphByComponentType(diagramObjects);

        for (let index in categoriesWithLines) {
            categoryName = categoriesWithLines[index]
            markComponentForLineDrawing(graph[categoryName]);
        }

        for (let index in categoryGraphNames) {
            categoryName = categoryGraphNames[index]
            copyDiagramObjectIntoComponent(graph[categoryName], diagramObjectsByIdentifiedObjects);
        }

        console.log(graph);

        let graphOrderedByDiagram = { 'Diagram' : {} };

        for (let index in categoryGraphNames) {
            categoryName = categoryGraphNames[index]
            copyComponentIntoDiagramGraph(categoryName, diagramObjectsByIdentifiedObjects, graph[categoryName], graphOrderedByDiagram);
        }

        return graphOrderedByDiagram;
    };

    /*
     * Have we received all the data files yet?
     */
    var checkIfParseReady = function() {
        if (rdfFileReceived > 0) {
            if (rdfFileCount == rdfFileReceived) {
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
