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

var cimjson = cimjson || (function() {

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

    const PinturaDiagramObject = "Pintura:DiagramObject";
    const PinturaDataObject = "Pintura:DataObject";
    const PinturaDiagramObjectPoints = "Pintura:DiagramObjectPoints";
    const PinturaLine = "Pintura:Line";

    var getImageName = function(type) {

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

        return imageNames[type];
    }

    var convertDiagramObjectToTemplateFormat = function(diagramObject, categoryGraph, categoryGraphName, diagramList) {

        let originalPoints = diagramObject[PinturaDiagramObjectPoints];
        let preOffsetPoints = [];
        let imagePoints = [];
        let labelPoint;
        let object;
        const imageHeight = 12;
        const imageWidth = 12;
        if (diagramObject["cim:DiagramObject.IdentifiedObject"] != undefined) {
            let rdfId = diagramObject["cim:DiagramObject.IdentifiedObject"]["rdf:resource"].substring(1);
            for (let index in originalPoints) {
                let point = originalPoints[index];
                preOffsetPoints.push(
                {
                    "x": parseInt(point["cim:DiagramObjectPoint.xPosition"]).toString(),
                    "y": parseInt(point["cim:DiagramObjectPoint.yPosition"]).toString()
                });
                imagePoints.push(
                {
                    "imageHeight" : imageHeight.toString(),
                    "imageWidth"  : imageWidth.toString(),
                    "x"           : (parseInt(point["cim:DiagramObjectPoint.xPosition"]) - (imageWidth/2)).toString(),
                    "y"           : (parseInt(point["cim:DiagramObjectPoint.yPosition"]) - (imageHeight/2)).toString()
                });
            };
            labelPoint = {
                "x": (parseInt(preOffsetPoints[0].x) + (imageWidth/2)).toString(),
                "y": (parseInt(preOffsetPoints[0].y) - (imageHeight/2)).toString()
            };
            object =
            {
                "pintura:image"  : getImageName(categoryGraphName),
                "pintura:rdfId"  : rdfId,
                "pintura:points" : imagePoints,
                "pintura:label"  : {
                    "text": categoryGraph[rdfId]["cim:IdentifiedObject.name"],
                    "x"   : labelPoint.x,
                    "y"   : labelPoint.y
                }
            }
            if (preOffsetPoints.length == 2) {
                let line = {
                        "x1": preOffsetPoints[0].x,
                        "y1": preOffsetPoints[0].y,
                        "x2": preOffsetPoints[1].x,
                        "y2": preOffsetPoints[1].y
                };
                object["pintura:line"] = line;
            }
        }
        let diagram = diagramObject["cim:DiagramObject.Diagram"]["rdf:resource"].substring(1);
        if (diagramList[diagram] === undefined){
            diagramList[diagram] = {};
        }
        if (diagramObject["cim:DiagramObject.IdentifiedObject"]) {
            let identifiedObject = diagramObject["cim:DiagramObject.IdentifiedObject"]["rdf:resource"].substring(1);
            if (diagramList[diagram][categoryGraphName] === undefined){
                diagramList[diagram][categoryGraphName] = {};
            }
            diagramList[diagram][categoryGraphName][identifiedObject] = object;
        }
    };

    var convertToTemplatableFormat = function(diagramObjects, graph) {

        let output = { 'Diagram' : {} };

        for (let index in categoryGraphNames) {

            categoryGraphName = categoryGraphNames[index]
            categoryGraph = graph[categoryGraphName];

            /*
             * Index the component graph by the identified object's id so we don't
             * have to go hunting for the referenced object inside the diagram objects.
             */
            let diagramList = output['Diagram'];
            for (let key in categoryGraph) {
                let diagramObject = diagramObjects[key];
                if (diagramObject === undefined) {
                }
                else {
                    convertDiagramObjectToTemplateFormat(diagramObject, categoryGraph, categoryGraphName, diagramList);
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

    var markComponentForLineDrawing = function(graph) {

        const categoriesWithLines = [
            "cim:ACLineSegment",
            "cim:ConnectivityNode",
            "cim:TopologicalNode",
        ];

        for (let index in categoriesWithLines) {
            categoryName = categoriesWithLines[index];
            for (let key in graph[categoryName]) {
                try {
                    graph[categoryName][key][PinturaLine] = true;
                }
                catch (error) {
                    console.log(error.message);
                }
            }
        }
    };

    var copyDiagramObjectIntoComponent = function(graph, diagramObjectGraph) {
        for (let index in categoryGraphNames) {
            categoryName = categoryGraphNames[index]
            for (let key in graph[categoryName]) {
                try {
                    graph[categoryName][key][PinturaDiagramObject] = diagramObjectGraph[key];
                }
                catch (error) {
                    console.log(error.message);
                }
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

    var getTemplateJson = function(graph) {

        diagramObjects = graph['cim:DiagramObject'];
        diagramObjectPoints = graph['cim:DiagramObjectPoint'];

        addDiagramObjectPointsToDiagramObjects(diagramObjectPoints, diagramObjects);
        let diagramObjectsByIdentifiedObjects = indexDiagramGraphByComponentType(diagramObjects);
        copyDiagramObjectIntoComponent(graph, diagramObjectsByIdentifiedObjects);
        markComponentForLineDrawing(graph);
        templateReadyFormat = convertToTemplatableFormat(diagramObjectsByIdentifiedObjects, graph);

        console.log(templateReadyFormat);

        return templateReadyFormat;
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
        getTemplateJson,
    };
}());

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        cimjson 
    };
}
