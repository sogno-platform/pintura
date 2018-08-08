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

var cimxml = cimxml || (function() {

    var xmlDoc;
    var rdfFileCount = 0;
    var rdfFileReceived = 0;
    var jsonBaseData = null;
    const xmlnsString = "xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#' xmlns:cim='http://iec.ch/TC57/2012/CIM-schema-cim16#' xmlns:md='http://iec.ch/TC57/61970-552/ModelDescription/1#' xmlns:entsoe='http://entsoe.eu/Secretariat/ProfileExtension/2#'";

    var getBaseXML = function() {
        let baseJson = getBaseJson();
        baseXml = getDOM("<rdf:RDF "+xmlns()+"/>");
        for (let component in baseJson) {
            for (let rdfid in baseJson[component]) {
                let object = baseJson[component][rdfid]
                let child = baseXml.createElement(component);
                child.setAttribute("rdf:ID", object[common.pinturaRdfid()]);
                for (let item in object) {
                    if(item.substring(0, 7) != "pintura") {
                        addChild(object[item], item, baseXml, child)
                    }
                }
                baseXml.documentElement.appendChild(child)
            }
        }
        var oSerializer = new XMLSerializer();
        var sXML = oSerializer.serializeToString(baseXml);

        return sXML;
    };

    var getBaseJson = function() {
        if (jsonBaseData === null) {
            jsonBaseData = {}
        }
        return jsonBaseData;
    };

    /*
     * Convert a small data item into XML and add it to a node
     */
    var addChild = function(object, name, doc, owner) {

        let child;
        child = doc.createElement(name);
        if (object["rdf:resource"] !== undefined) {
            child.setAttribute("rdf:resource", object["rdf:resource"]);
        }
        else {
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

        thisObject[common.pinturaRdfid()] = id

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
     * Clear the buffer of XML data that we use to handle multiple file imports
     */
    var clearXmlData = function() {

        xmlDoc = null;
    };

    var xmlns = function(){

        return xmlnsString;
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
     * Tell this module how many pieces the data will be arriving in
     */
    var setRdfFileCount = function(count) {

        rdfFileCount = count;
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
            jsonBaseData = createObjectGraphFromXml(xmlDoc);
            rdfFileReceived = 0;
            rdfFileCount = 0;
            return true;
        }
        return false;
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

    var updateComponentInBaseJson = function(type, id, attribute, value) {
        if (jsonBaseData[type][id] === undefined) {
            console.error("Cannot find " + id + " in list of " + type);
        }
        else {
            jsonBaseData[type][id][attribute] = value
        }
    };

    return {
        getBaseJson,
        setRdfFileCount,
        clearXmlData,
        moreXmlData,
        getBaseXML,
        updateComponentInBaseJson,
    };
}());

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cimxml;
}
