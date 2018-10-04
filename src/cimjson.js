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

const term = require("../images/term.svg");
const brea = require("../images/brea.svg");
const conn = require("../images/conn.svg");
const cons = require("../images/cons.svg");
const net  = require("../images/net.svg");
const tran = require("../images/trans.svg");
const sola = require("../images/sol.svg");
const sync = require("../images/sync.svg");
const topo = require("../images/topo.svg");
const node = require("../images/node.svg");
const dialog_join = require("../images/dialog_join.svg");


class cimjson {

    static getImageName(type) {
        return cimjson.imageNames[type];
    }

    static convertDiagramObjectToTemplateFormat(diagramObject, graph, categoryGraphName) {
        let originalPoints = diagramObject[common.pinturaDiagramObjectPoints()];
        let preOffsetPoints = [];
        let imagePoints = [];
        let labelPoint;
        let rotation;
        let rotationCenter;
        let object;
        let categoryGraph = graph[categoryGraphName];
        const imageHeight = 18;
        const imageWidth = 18;
        if (diagramObject["cim:DiagramObject.IdentifiedObject"] != undefined) {
            let rdfId = diagramObject["cim:DiagramObject.IdentifiedObject"]["rdf:resource"].substring(1);
            for (let index in originalPoints) {
                let point = common.safeExtract(graph, "cim:DiagramObjectPoint", originalPoints[index]);
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
	    rotation = parseInt(diagramObject["cim:DiagramObject.rotation"])
            rotationCenter = {
                "x": (parseInt(imagePoints[0].x) + parseInt(imagePoints[0].imageWidth/2)).toString(),
                "y": (parseInt(imagePoints[0].y) + parseInt(imagePoints[0].imageHeight/2)).toString()
	    }
            object = {
                "pintura:diagram" : diagramObject["cim:DiagramObject.Diagram"]["rdf:resource"].substring(1),
                "pintura:image"   : cimjson.getImageName(categoryGraphName),
                "pintura:transform": "rotate(" + rotation + "," + rotationCenter.x + "," + rotationCenter.y + ")",
                "pintura:rdfId"   : rdfId,
                "pintura:points"  : imagePoints,
                "pintura:label"   : {
                    "text": categoryGraph[rdfId]["cim:IdentifiedObject.name"],
                    "x"   : labelPoint.x,
                    "y"   : labelPoint.y
                }
            }
            while (preOffsetPoints.length > 1) {
                if (object["pintura:line"] == null) {
                    object["pintura:line"] = [];
                }
                let line = {
                    "x1": preOffsetPoints[0].x,
                    "y1": preOffsetPoints[0].y,
                    "x2": preOffsetPoints[1].x,
                    "y2": preOffsetPoints[1].y
                };
                object["pintura:line"].push(line);
                preOffsetPoints.shift()
            }
        }
        return object;
    };

    static addObjectToDiagramList(object, graph, categoryGraphName, diagramList) {
        let diagram = object["pintura:diagram"]
        if (diagramList[diagram] === undefined){
            diagramList[diagram] = { "pintura:name" : graph["cim:Diagram"][diagram]["cim:IdentifiedObject.name"] };
        }
        if (object["pintura:rdfId"]) {
            let identifiedObject = object["pintura:rdfId"];
            if (diagramList[diagram]["components"] === undefined){
                diagramList[diagram]["components"] = {};
            }
            if (diagramList[diagram]["components"][categoryGraphName] === undefined){
                diagramList[diagram]["components"][categoryGraphName] = {};
            }
            diagramList[diagram]["components"][categoryGraphName][identifiedObject] = object;
        }
    };

    static convertToTemplatableFormat(diagramObjects, graph) {
        let output = { 'Diagram' : {} };
        let diagramList = output['Diagram'];

        /* List the objects to be drawn by diagram */
        for (let categoryGraphName in cimjson.imageNames) {

            let categoryGraph = graph[categoryGraphName];
            for (let key in categoryGraph) {
                let diagramObject = diagramObjects[key];
                if (diagramObject != undefined) {
                    categoryGraph[key][common.pinturaDiagramObject()] = diagramObjects[key][common.pinturaRdfid()]
                    let object = cimjson.convertDiagramObjectToTemplateFormat(diagramObject, graph, categoryGraphName);
                    cimjson.addObjectToDiagramList(object, graph, categoryGraphName, diagramList);
                }
            }
        }

        /* Put the name of the diagram in a more convenient place */
        for (let diagramId in graph["cim:Diagram"]) {
            if (output["Diagram"][diagramId] === undefined) {
                diagramList[diagramId] = { "pintura:name" : graph["cim:Diagram"][diagramId]["cim:IdentifiedObject.name"] };
            }
        }

        return output;
    };

    static indexDiagramGraphByComponentType(input) {
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

    static addDiagramObjectPointsToDiagramObjects(diagramObjectPointGraph, diagramObjectGraph){
        for (let key in diagramObjectPointGraph) {
            cimjson.mergeMatchingDataIntoParentNodeArray(diagramObjectGraph, key, diagramObjectPointGraph[key], "cim:DiagramObjectPoint.DiagramObject", common.pinturaDiagramObjectPoints());
        }
    };

    /*
     * Create link to a member of an array of e.g. points
     */
    static mergeMatchingDataIntoParentNodeArray(destinationGraph, matchingNodeId, matchingNode, matchingElement, destinationElement) {
        if (matchingNode[matchingElement]) {
            let id = matchingNode[matchingElement]["rdf:resource"].substr(1);
            if (destinationGraph[id]) {
                if (destinationGraph[id][destinationElement] === undefined) {
                    destinationGraph[id][destinationElement] = [];
                }
                if (destinationGraph[id][destinationElement].indexOf(matchingNodeId) == -1) {
                    destinationGraph[id][destinationElement].push(matchingNodeId);
                }
            }
            else {
                console.error("Could not find destination "+matchingElement+" to merge into "+destinationElement+".");
            }
        }
        else {
            console.error("Could not find matching element "+matchingElement+" to merge "+destinationElement+" into .");
        }
    };

    static refineTerminals(graph) {
        if ('cim:Terminal' in graph) {
            Object.keys(graph['cim:Terminal']).forEach((terminalId)=>{
                let conductingEqId = cimedit.getConductingEquipmentFromTerminal(graph, terminalId);
                if (conductingEqId !== undefined) {
                    let conductingEqType = cimedit.getConductingEquipmentObjectTypeFromId(graph, conductingEqId);
                    if (conductingEqType !== undefined) {
                        let terminals = common.safeExtract(graph, conductingEqType, conductingEqId, common.pinturaTerminals());
                        if (terminals === undefined) {
                            graph[conductingEqType][conductingEqId][common.pinturaTerminals()] = [ terminalId ];
                        }
                        else {
                            if (!graph[conductingEqType][conductingEqId][common.pinturaTerminals()].includes(terminalId)) {
                                graph[conductingEqType][conductingEqId][common.pinturaTerminals()].push(terminalId)
                            }
                        }
                    }
                }
            });
        }
        return graph;
    };

    static getTemplateJson(graph) {
        let diagramObjectsByIdentifiedObjects = {};
        let refinedGraph = {};
        if (graph['cim:DiagramObject'] !== undefined) {
            let diagramObjects = graph['cim:DiagramObject'];
            let diagramObjectPoints = graph['cim:DiagramObjectPoint'];
            cimjson.addDiagramObjectPointsToDiagramObjects(diagramObjectPoints, diagramObjects);
            diagramObjectsByIdentifiedObjects = cimjson.indexDiagramGraphByComponentType(diagramObjects);
        }
        if (graph['cim:Terminal'] !== undefined) {
            refinedGraph = cimjson.refineTerminals(graph)
        }
        let templateReadyFormat = cimjson.convertToTemplatableFormat(diagramObjectsByIdentifiedObjects, graph);
        return templateReadyFormat;
    };
};

cimjson.imageNames = {
    "cim:ACLineSegment":             term,
    "cim:Terminal":                  term,
    "cim:Breaker":                   brea,
    "cim:ConnectivityNode":          node,
    "cim:EnergyConsumer":            cons,
    "cim:EquivalentInjection":       cons,
    "cim:ExternalNetworkInjection":  net,
    "cim:PowerTransformer":          tran,
    "cim:SolarGeneratingUnit":       sola,
    "cim:SynchronousMachine":        sync,
    "cim:TopologicalNode":           node,
    "cim:TransformerWinding":        tran,
};


if (typeof module !== 'undefined' && module.exports) {
    module.exports = cimjson;
}
