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

import term        from "../images/term.svg";
import brea        from "../images/brea.svg";
import conn        from "../images/conn.svg";
import cons        from "../images/cons.svg";
import gene        from "../images/gene.svg";
import net         from "../images/net.svg";
import tran        from "../images/trans.svg";
import sola        from "../images/sol.svg";
import sync        from "../images/sync.svg";

import common      from "./common.js";
import cimedit     from "./cimedit.js";

class cimjson {

    static getImageName(type) {
        let imageName;
        if (cimjson.imageNames[type] !== undefined) {
            imageName = cimjson.imageNames[type];
        }
        else {
            imageName = cimjson.imageNames["generic"];
        }
        return imageName;
    }

    static convertImagePoints(inputPoints, graph, pointIdentifierAttribute, imageWidth, imageHeight) {
        let points = [];
        for (let index in inputPoints) {
            let point = common.safeExtract(graph, pointIdentifierAttribute, inputPoints[index]);
            points.push(
                {
                    "diagramObjectPointId" : point["pintura:rdfid"],
                    "imageHeight" : imageHeight.toString(),
                    "imageWidth"  : imageWidth.toString(),
                    "x"           : point[ pointIdentifierAttribute + ".xPosition"],
                    "y"           : point[ pointIdentifierAttribute + ".yPosition"]
                });
        }
        return points;
    }

    /*
     *  diagramObjectOrLocation - the object used to represent a point or set of points
     *  graph
     *  categoryGraphName
     *  componentIdentifierAttribute     - the attribute that stores the id of the component being situated
     *  pointIdentifierAttribute         - the name of the attribute that stores the id of the point (cim:DiagramObjectPoint/cim:PositionPoint)
     *  diagramOrCoordsAttribute         - the name of the attribute that stores the id of the diagram or coordinates system
     */
    static convertDiagramObjectToTemplateFormat(diagramObjectOrLocation, graph, categoryGraphName, componentIdentifierAttribute,
                                      pointIdentifierAttribute, diagramOrCoordsAttribute, pinturaPointsAttribute) {
        let originalPoints = diagramObjectOrLocation[pinturaPointsAttribute];
        let preOffsetPoints = [];
        let imagePoints = [];
        let labelPoint;
        let rotation;
        let rotationCenter;
        let object;
        let categoryGraph = graph[categoryGraphName];
        const imageHeight = 18;
        const imageWidth = 18;
        if (diagramObjectOrLocation[pointIdentifierAttribute] !== undefined) {
            let rdfId = diagramObjectOrLocation[pointIdentifierAttribute]["rdf:resource"].substring(1);
            for (let index in originalPoints) {
                let point = common.safeExtract(graph, componentIdentifierAttribute, originalPoints[index]);
                preOffsetPoints.push(
                    {
                        "x": (point[componentIdentifierAttribute + ".xPosition"]),
                        "y": (point[componentIdentifierAttribute + ".yPosition"])
                    });
            }
            if (preOffsetPoints.length > 0) {
                imagePoints = cimjson.convertImagePoints(originalPoints, graph, componentIdentifierAttribute, imageWidth, imageHeight);
                labelPoint = {
                    "x": (parseFloat(preOffsetPoints[0].x) + (imageWidth/2)).toString(),
                    "y": (parseFloat(preOffsetPoints[0].y) - (imageHeight/2)).toString()
                };
                rotation = (diagramObjectOrLocation["cim:DiagramObject.rotation"]);
                if(isNaN(rotation)) {
                    rotation = 0;
                }
                rotationCenter = {
                    "x": (parseFloat(imagePoints[0].x) + (imagePoints[0].imageWidth/2)).toString(),
                    "y": (parseFloat(imagePoints[0].y) + (imagePoints[0].imageHeight/2)).toString()
                };
            }
            object = {
                "pintura:diagram"  : diagramObjectOrLocation[diagramOrCoordsAttribute]["rdf:resource"].substring(1),
                "pintura:image"    : cimjson.getImageName(categoryGraphName),
                "pintura:transform": "rotate(" + rotation + "," + rotationCenter.x + "," + rotationCenter.y + ")",
                "pintura:rdfId"    : rdfId,
                "pintura:points"   : imagePoints,
                "pintura:label"    : {
                    "text": categoryGraph[rdfId]["cim:IdentifiedObject.name"],
                    "x"   : labelPoint.x,
                    "y"   : labelPoint.y
                }
            };
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
                preOffsetPoints.shift();
            }
        }
        return object;
    }

    static addObjectToDiagramList(object, graph, categoryGraphName, diagramList, listAttribute) {
        // pintura:diagram could be the CoordinateSystem
        let diagram = object["pintura:diagram"];
        if (diagram == undefined) {
            return
        }
        else {
            if (graph[listAttribute] && graph[listAttribute][diagram] !== undefined) {
                if (diagramList[diagram] === undefined){
                    diagramList[diagram] = { "pintura:name" : graph[listAttribute][diagram]["cim:IdentifiedObject.name"] };
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
            }
        }
    }

    static convertToTemplatableFormat(diagramObjects, locations, graph) {
        let output = { "Diagram" : {}, "CoordinateSystem": {} };
        let diagramList = output["Diagram"];
        let coordinateSystem = output["CoordinateSystem"];

        /* List the objects to be drawn by diagram */
        for (let categoryGraphName in graph) {
            let categoryGraph = graph[categoryGraphName];
            for (let key in categoryGraph) {
                let location_ = locations[key];
                if (location_ !== undefined) {
                    categoryGraph[key][common.pinturaLocation()] = locations[key][common.pinturaRdfid()];
                    let object = cimjson.convertDiagramObjectToTemplateFormat(location_, graph, categoryGraphName, "cim:PositionPoint",
                                 "cim:Location.PowerSystemResources", "cim:Location.CoordinateSystem", common.pinturaPositionPoints());
                    cimjson.addObjectToDiagramList(object, graph, categoryGraphName, diagramList, "cim:CoordinateSystem");
                }
                let diagramObject = diagramObjects[key];
                if (diagramObject !== undefined) {
                    categoryGraph[key][common.pinturaDiagramObject()] = diagramObjects[key][common.pinturaRdfid()];
                    let object = cimjson.convertDiagramObjectToTemplateFormat(diagramObject, graph, categoryGraphName, "cim:DiagramObjectPoint",
                                 "cim:DiagramObject.IdentifiedObject", "cim:DiagramObject.Diagram", common.pinturaDiagramObjectPoints());
                    cimjson.addObjectToDiagramList(object, graph, categoryGraphName, diagramList, "cim:Diagram");
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
    }

    static indexDiagramGraphByComponentType(input, diagramOrCoordSysAttribute, powerResourceOrIdentifiedObjectAttribute) {
        /*
         * Index the diagram object graph by the identified object's id so we don't
         * have to go hunting for the referenced object inside the diagram objects.
         */
        let graph = {};
        for (let key in input) {
            let diagramObject = input[key];
            let diagramPlusHash = common.safeExtract(diagramObject, diagramOrCoordSysAttribute, "rdf:resource");
            if (diagramPlusHash) {
                let identifiedObject = common.safeExtract(diagramObject,  powerResourceOrIdentifiedObjectAttribute);
                if (identifiedObject) {
                    let identifiedObjectRdfResource = identifiedObject["rdf:resource"].substring(1);
                    graph[identifiedObjectRdfResource] = diagramObject;
                }
            }
        }
        return graph;
    }

    static addDiagramObjectPointsToDiagramObjects(diagramObjectPointGraph, diagramObjectGraph, diagramObjectAttribute, diagramObjectPointAttribute){
        for (let key in diagramObjectPointGraph) {
            cimjson.mergeMatchingDataIntoParentNodeArray(diagramObjectGraph, key, diagramObjectPointGraph[key], diagramObjectAttribute, diagramObjectPointAttribute);
        }
    }

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
                if (destinationGraph[id][destinationElement].indexOf(matchingNodeId) === -1) {
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
    }

    static refineTerminals(graph) {
        if ("cim:Terminal" in graph) {
            Object.keys(graph["cim:Terminal"]).forEach((terminalId)=>{
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
                                graph[conductingEqType][conductingEqId][common.pinturaTerminals()].push(terminalId);
                            }
                        }
                    }
                }
            });
        }
        return graph;
    }

    static getTemplateJson(graph) {
        let diagramObjectsByIdentifiedObjects = {};
        let locationsByPowerSystemResources = {};
        let templateReadyFormat = {};
        try {
            if (graph["cim:DiagramObject"] !== undefined) {
                let diagramObjects = graph["cim:DiagramObject"];
                let diagramObjectPoints = graph["cim:DiagramObjectPoint"];
                cimjson.addDiagramObjectPointsToDiagramObjects(diagramObjectPoints, diagramObjects, "cim:DiagramObjectPoint.DiagramObject", common.pinturaDiagramObjectPoints());
                diagramObjectsByIdentifiedObjects = cimjson.indexDiagramGraphByComponentType(diagramObjects, "cim:DiagramObject.Diagram", "cim:DiagramObject.IdentifiedObject");
            }
            if (graph["cim:CoordinateSystem"] !== undefined) {
                let locations = graph["cim:Location"];
                let positionPoints = graph["cim:PositionPoint"];
                cimjson.addDiagramObjectPointsToDiagramObjects(positionPoints, locations, "cim:PositionPoint.Location", common.pinturaPositionPoints());
                locationsByPowerSystemResources = cimjson.indexDiagramGraphByComponentType(locations, "cim:Location.CoordinateSystem", "cim:Location.PowerSystemResources");
            }
            let refinedGraph = cimjson.refineTerminals(graph);
            templateReadyFormat = cimjson.convertToTemplatableFormat(diagramObjectsByIdentifiedObjects, locationsByPowerSystemResources, refinedGraph);
        }
        catch (e) {
            console.error("getTemplateJson failed: " + e);
            console.trace();
        }
        return templateReadyFormat;
    }
}

cimjson.imageNames = {
    "cim:ACLineSegment":             term,
    "cim:Terminal":                  term,
    "cim:Breaker":                   brea,
    "cim:ConnectivityNode":          conn,
    "cim:EnergyConsumer":            cons,
    "cim:EquivalentInjection":       cons,
    "cim:ExternalNetworkInjection":  net,
    "cim:PowerTransformer":          tran,
    "cim:SolarGeneratingUnit":       sola,
    "cim:SynchronousMachine":        sync,
    "cim:TopologicalNode":           conn,
    "cim:TransformerWinding":        tran,
    "generic":                       gene
};


export default cimjson;
