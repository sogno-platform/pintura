/*
 *  Copyright © 2016-2017, RWTH Aachen University
 *  Authors: Richard Marston
 *  SPDX-License-Identifier: MPL-2.0
 */

import common from "./common.js";

class cimxml {

    static getBaseXML(baseJson) {
        let baseXml = cimxml.getDOM("<rdf:RDF "+cimxml.xmlns()+"/>");
        for (let component in baseJson) {
            if (component !== "md:FullModel") {
                for (let rdfid in baseJson[component]) {
                    cimxml.copyTag(baseJson[component][rdfid], component, baseXml);
                }
            }
            else {
                cimxml.copyTag(baseJson[component], component, baseXml);
            }
        }
        let oSerializer = cimxml.getXMLSerializer();
        let sXML = oSerializer.serializeToString(baseXml);

        return sXML;
    }

    static copyTag(object, component, baseXml) {
        //let object = baseJson[component][rdfid]
        let child = baseXml.createElement(component);
        if (common.pinturaRdfid() in object) {
            child.setAttribute("rdf:ID", object[common.pinturaRdfid()]);
        }
        for (let item in object) {
            if(item.substring(0, 7) !== "pintura") {
                cimxml.addChild(object[item], item, baseXml, child);
            }
        }
        baseXml.documentElement.appendChild(child);
    }

    static getXMLSerializer() {
        return new XMLSerializer();
    }

    /*
     * Convert a small data item into XML and add it to a node
     */
    static addChild(object, name, doc, owner) {
        let child = doc.createElement(name);
        if (typeof(object) === "object" && "rdf:resource" in object) {
            child.setAttribute("rdf:resource", object["rdf:resource"]);
        }
        else {
            child.appendChild(doc.createTextNode(object));
        }
        if(name !== "about") {
            owner.appendChild(child);
        }
        return owner;
    }

    static copyXmlDataIntoObject(object, node) {
        let nextNode = node.firstChild;
        while (nextNode) {
            if (cimxml.isElementNode(nextNode.nodeType)) {
                if (nextNode.attributes.length > 0) {
                    object[nextNode.nodeName] = { "rdf:resource": nextNode.getAttribute("rdf:resource")};
                }
                else {
                    object[nextNode.nodeName] = nextNode.textContent;
                }
            }
            nextNode = nextNode.nextSibling;
        }
    }

    static importXmlNodeIntoGraph(graph, nodeCategory, node, id) {

        let thisObject = { };

        if (id) {
            thisObject[common.pinturaRdfid()] = id;
        }

        cimxml.copyXmlDataIntoObject(thisObject, node);

        if (!graph[nodeCategory]) {
            graph[nodeCategory] = {};
        }

        if (id) {
            /* add the new object to the graph */
            let categoryGraph = graph[nodeCategory];
            categoryGraph[id] = thisObject;
        }
    }

    static importAboutDataIntoGraph(graph, nodeCategory, thisNode, id) {
        if (graph[nodeCategory] && graph[nodeCategory][id]) {
            graph[nodeCategory][id].about = [];
            cimxml.copyXmlDataIntoObject(graph[nodeCategory][id].about, thisNode, true);
        }
    }

    /*
     * What is the rdf:ID attribute for this node
     */
    static getRdfId(node) {
        return node.getAttribute("rdf:ID");
    }

    /*
     * What is the rdf:about attribute for this node
     */
    static getRdfAbout(node) {
        return node.getAttribute("rdf:about");
    }

    static xmlns(){
        return "xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#' xmlns:cim='http://iec.ch/TC57/2013/CIM-schema-cim16#' xmlns:md='http://iec.ch/TC57/61970-552/ModelDescription/1#' xmlns:entsoe='http://entsoe.eu/Secretariat/ProfileExtension/2#'";
    }

    /*
     * Function to create a JSON document from an RDF (XML) DOM.
     * RDF is a shallow xml format so we don"t have to dig too
     * deep, a node will only ever have children or attributes.
     */
    static createObjectGraphFromXml( xmlData ) {
        let graph = {};

        /* loop through all of the top level nodes */
        let nextNode = xmlData.documentElement.firstChild;
        while (nextNode) {
            if (cimxml.isElementNode(nextNode.nodeType)) {
                /* find out what type of node we are reading */
                let nodeCategory = nextNode.nodeName;
                let id = cimxml.getRdfId(nextNode);
                if (id) {
                    cimxml.importXmlNodeIntoGraph(graph, nodeCategory, nextNode, id);
                }
            }
            nextNode = nextNode.nextSibling;
        }

        /* we need all of the rdf:id nodes before importing the rdf:about nodes */
        nextNode = xmlData.documentElement.firstChild;
        while (nextNode) {
            if (cimxml.isElementNode(nextNode.nodeType)) {
                /* find out what type of node we are reading */
                let nodeCategory = nextNode.nodeName;
                let id = cimxml.getRdfAbout(nextNode);
                if (id) {
                    cimxml.importAboutDataIntoGraph(graph, nodeCategory, nextNode, id.substr(1));
                }
            }
            nextNode = nextNode.nextSibling;
        }
        return graph;
    }

    static isElementNode(nodeType) {
        if (nodeType === Node.ELEMENT_NODE) {
            return true;
        }
        else {
            return false;
        }
    }

    /*
     * Do we have a valid tag?
     */
    static elementContainsAttribute(element, attribute) {
        return element.getAttribute(attribute);
    }

    /*
     * Here comes some more data
     */
    static moreXmlData(text, xmlDoc) {

        let newDoc = cimxml.getDOM(text);
        let cimVersion, entsoe;
        let nodes = newDoc.documentElement.childNodes;
        for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].nodeName == "md:FullModel") {
                let children = nodes[i].childNodes;
                for (let j = 0; j < children.length; j++) {
                    if (children[j].nodeName == "md:Model.profile") {
                        console.log(children[j].textContent)
                    }
                }
            }
            if (cimxml.isElementNode(nodes[i].nodeType)) {
                xmlDoc.documentElement.appendChild(nodes[i].cloneNode(true));
            }
        }

        if (xmlDoc.documentElement === undefined) {
            return false;
        }

        cimVersion = xmlDoc.documentElement.getAttribute("xmlns:cim");

        if (cimVersion === undefined) {
            if (newDoc.documentElement.getAttribute("xmlns:cim") === undefined) {
                return false;
            }
            else {
                cimVersion = newDoc.documentElement.getAttribute("xmlns:cim");
            }
        }

        entsoe = xmlDoc.documentElement.getAttribute("xmlns:entsoe");

        if (entsoe === undefined) {
            if (newDoc.documentElement.getAttribute("xmlns:entsoe") === undefined) {
                return false;
            }
            else {
                entsoe = newDoc.documentElement.getAttribute("xmlns:entsoe");
            }
        }

        return { cimVersion: cimVersion, entsoe: entsoe };
    }

    /*
     * Different method of getting DOM required for some platforms
     */
    static getDOM(text) {
        let newDoc;
        if ( window.DOMParser ) {
            newDoc = ( new DOMParser() ).parseFromString( text, "application/xml" );
        }
        else if( window.ActiveXObject ) {
            let xmlObject = new window.ActiveXObject( "Microsoft.XMLDOM" );
            xmlObject.async = false;
            xmlObject.loadXML( text );
            newDoc = xmlObject;
            xmlObject = undefined;
        }
        else {
            throw new Error( "Cannot find an XML parser!" );
        }
        return newDoc;
    }
}


export default cimxml;
