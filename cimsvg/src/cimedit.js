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

import common from './common.js';
import { cimsvg, currentCimsvg } from './cimsvg.js';

class cimedit {

    static makeDiagram(newStuff) {
        let id = common.generateUUID();
        let counter = currentCimsvg().getNameCounter("cim:Diagram");
        let diagram = {
           "cim:Diagram.orientation" : {
                "rdf:resource" : "http://iec.ch/TC57/2013/CIM-schema-cim16#OrientationKind.negative",
            },
            "cim:IdentifiedObject.name": "Diagram " + counter.toString(),
        };
        cimedit.addCategorizedItem(newStuff, "cim:Diagram", id, diagram);
        return id;
    };

    static addCategorizedItem(object, category, id, item) {
        if (!object[category]) {
            object[category] = {};
        }
        item[common.pinturaRdfid()] = id;
        object[category][id] = item;
    };

    static makeVisibleComponent(diagramId, graph, type, point, attributes, terminalConfig) {
        let id = common.generateUUID();
        let componentPoints = [];
        let terminalPoints = [];
        let terminalIds = [];
        componentPoints[0] = point;

        if (terminalConfig['terminalStyle'] == cimedit.linePoints) {
            let nextPoint = {};
            nextPoint.x = point.x;
            nextPoint.y = point.y;
            terminalPoints.push(point);
            if (type == "cim:ACLineSegment") {
                nextPoint.x = 100 + point.x;
            }
            else {
                nextPoint.y = 100 + point.y;
            }
            terminalPoints.push(nextPoint);
            componentPoints.push(nextPoint);
            for (let i = 0; i<terminalConfig["minTerminals"]; i++) {
                terminalIds.push(cimedit.makeTerminal(diagramId, graph, (i+1).toString(), id, terminalPoints[i]));
            }
        }
        if (terminalConfig['terminalStyle'] == cimedit.constellationPoints) {
            let nextPoint = {};
            nextPoint.x = 10 + point.x;
            nextPoint.y = point.y;
            terminalPoints.push(nextPoint);
        }

        let diagramObject = cimedit.makeDiagramObjectWithPoints(graph, diagramId, id, componentPoints);
        let counter = currentCimsvg().getNameCounter(type);
        let newAttributes = {
            "cim:IdentifiedObject.name": type + counter.toString(),
            "pintura:terminals": terminalIds,
            "pintura:diagramObject": diagramObject,
        };
        let componentData = Object.assign({}, attributes, newAttributes);
        cimedit.addCategorizedItem(graph, type, id, componentData);
        if (terminalConfig['terminalStyle'] == cimedit.constellationPoints) {
            for (let i = 0; i<terminalPoints.length; i++) {
                cimedit.addTerminal(graph, type, id)
            }
        }
        return id;
    };

    static getConductingEquipmentFromTerminal(graph, terminalId) {
        if (graph['cim:Terminal'][terminalId]['cim:Terminal.ConductingEquipment']) {
            let conductingEquipmentObject = graph['cim:Terminal'][terminalId]['cim:Terminal.ConductingEquipment'];
            if (conductingEquipmentObject['rdf:resource']) {
                return conductingEquipmentObject['rdf:resource'].substr(1);
            }
        }
    };

    static getConductingEquipmentObjectTypeFromId(graph, rdfid) {
        let type = undefined;
        Object.keys(cimedit.terminalAndPointLimits).forEach((category)=>{
            if (graph[category] && graph[category][rdfid]) {
                type = category;
            }
        });
        return type;
    };

    static moveTerminalIntoComponentOrbit(graph, terminalId, type, conductingEquipmentId) {
        let terminalDiagramObjectId            = common.safeExtract(graph, "cim:Terminal", terminalId, common.pinturaDiagramObject());
        let terminalPoints                     = common.safeExtract(graph, "cim:DiagramObject", terminalDiagramObjectId, common.pinturaDiagramObjectPoints());
        let conductingEquipmentDiagramObjectId = common.safeExtract(graph, type, conductingEquipmentId, common.pinturaDiagramObject());
        let conductingEquipmentPoints          = common.safeExtract(graph, "cim:DiagramObject", conductingEquipmentDiagramObjectId,  common.pinturaDiagramObjectPoints());
        if (conductingEquipmentPoints && conductingEquipmentPoints.length > 0) {
            let conductingEquipmentPoint           = common.safeExtract(graph, "cim:DiagramObjectPoint", conductingEquipmentPoints["0"]);
            if (terminalPoints && conductingEquipmentPoint) {
                let firstPoint                     = common.safeExtract(graph, "cim:DiagramObjectPoint", terminalPoints[0]);
                let x                              = common.safeExtract(conductingEquipmentPoint, "cim:DiagramObjectPoint.xPosition");
                let y                              = common.safeExtract(conductingEquipmentPoint, "cim:DiagramObjectPoint.yPosition");
                firstPoint["cim:DiagramObjectPoint.xPosition"] = (parseInt(x) + 10).toString();
                firstPoint["cim:DiagramObjectPoint.yPosition"] = y;
            }
        }
    };

    static addTerminal(baseJson, type, rdfid) {
        if (baseJson[type] && baseJson[type][rdfid]) {
            let sequenceNumber;
            if (baseJson[type][rdfid][common.pinturaTerminals()]) {
                sequenceNumber = baseJson[type][rdfid][common.pinturaTerminals()].length + 1;
            }
            else {
                baseJson[type][rdfid][common.pinturaTerminals()] = [];
                sequenceNumber = 1;
            }
            let terminal = cimedit.makeTerminal(currentCimsvg().getCurrentDiagramId(), baseJson, sequenceNumber, rdfid, { x: 100, y: 100 } );
            cimedit.moveTerminalIntoComponentOrbit(baseJson, terminal, type, rdfid);
            baseJson[type][rdfid][common.pinturaTerminals()].push(terminal)
        }
    };

    static removeDiagramObjectPointFromObject(graph, diagramObjectId, diagramObjectPointId) {
        /* Remove the diagram object from the diagram object list and
           remove the id from the list of points in the diagram object */
        let pointsArray = common.safeExtract(graph["cim:DiagramObject"][diagramObjectId][common.pinturaDiagramObjectPoints()]);
        if (pointsArray) {
            let index = pointsArray.indexOf(diagramObjectPointId);
            if (index > -1) {
                pointsArray.splice(index, 1);
            }
        }
        common.safeDelete(graph, "cim:DiagramObjectPoint", diagramObjectPointId)
    };

    static connectTerminalToTopologicalNode(graph, terminalId, topologicalNodeId) {
        let baseJson                       = currentCimsvg().getBaseJson();
        let terminal                       = common.safeExtract(graph, "cim:Terminal", terminalId);
        let topologicalNode                = common.safeExtract(graph, "cim:TopologicalNode", topologicalNodeId);
        let terminalDiagramObjectId        = terminal[common.pinturaDiagramObject()]
        let terminalDiagramObject          = common.safeExtract(graph, "cim:DiagramObject", terminalDiagramObjectId);
        let topologicalNodeDiagramObjectId = topologicalNode[common.pinturaDiagramObject()];
        let topologicalNodeDiagramObject   = common.safeExtract(graph, "cim:DiagramObject", topologicalNodeDiagramObjectId);
        let topologicalNodePoints    = common.safeExtract(topologicalNodeDiagramObject, common.pinturaDiagramObjectPoints());
        let firstTopologicalNodePointId    = common.safeExtract(topologicalNodeDiagramObject, common.pinturaDiagramObjectPoints(), "0");
        let firstTopologicalNodePoint      = common.safeExtract(graph, "cim:DiagramObjectPoint", firstTopologicalNodePointId);
        let firstTerminalPointId           = common.safeExtract(terminalDiagramObject, common.pinturaDiagramObjectPoints(), "0");
        let firstTerminalPoint             = common.safeExtract(graph, "cim:DiagramObjectPoint", firstTerminalPointId);
        let secondTerminalPointId          = common.safeExtract(terminalDiagramObject, common.pinturaDiagramObjectPoints(), "1");
        if (secondTerminalPointId) {
            cimedit.removeDiagramObjectPointFromObject(graph, terminalDiagramObjectId, secondTerminalPointId);
        };
        if (firstTopologicalNodePoint && firstTerminalPoint) {
            let x = common.safeExtract(firstTopologicalNodePoint, "cim:DiagramObjectPoint.xPosition");
            let y = common.safeExtract(firstTerminalPoint, "cim:DiagramObjectPoint.yPosition");
            if (terminalDiagramObject[common.pinturaDiagramObjectPoints()]) {
                let index                      = terminalDiagramObject[common.pinturaDiagramObjectPoints()].length + 1;
                let newPoint                   = cimedit.makeDiagramObjectPoint(baseJson, terminalDiagramObjectId, index, x, y);
                if (newPoint) {
                    terminalDiagramObject[common.pinturaDiagramObjectPoints()].push(newPoint);
                }
            }
        }
    };

    static makeTerminal(diagramId, newStuff, sequenceNumber, conductingEquipmentId, point) {
        let id = common.generateUUID();
        let counter = currentCimsvg().getNameCounter("cim:Terminal");
        let diagramObjectId = cimedit.makeDiagramObjectWithPoints(newStuff, diagramId, id, [ point ]);
        let terminal = {
            "cim:ACDCTerminal.sequenceNumber": sequenceNumber.toString(),
            "cim:IdentifiedObject.name": "terminal" + counter.toString(),
            "cim:Terminal.ConductingEquipment": { "rdf:resource": "#"+conductingEquipmentId },
            "cim:Terminal.ConnectivityNode": { "rdf:resource":"#none" },
            "cim:Terminal.phases": "",
            "pintura:diagramObject": diagramObjectId,
        }
        cimedit.addCategorizedItem(newStuff, "cim:Terminal", id, terminal);
        return id;
    };

    static makeDiagramObjectWithPoints(graph, diagramId, identifiedObjectId, points) {
        let diagramObjectId = cimedit.makeDiagramObject(graph, diagramId, identifiedObjectId);
        let diagramObjectPoints = [];
        for (let i = 0; i < points.length; i++) {
            let index = (1+i);
            let diagramObjectPoint = cimedit.makeDiagramObjectPoint(graph, diagramObjectId, index, points[i].x.toString(), points[i].y.toString());
            diagramObjectPoints.push(diagramObjectPoint);
        }
        graph["cim:DiagramObject"][diagramObjectId][common.pinturaDiagramObjectPoints()] = diagramObjectPoints;
        return diagramObjectId;
    };

    static makeDiagramObject(newStuff, diagramId, identifiedObjectId) {
        let id = common.generateUUID();
        let counter = currentCimsvg().getNameCounter("cim:DiagramObject");
        let diagramObject = {
            "cim:DiagramObject.Diagram": {
                "rdf:resource" : "#"+diagramId,
            },
            "cim:DiagramObject.IdentifiedObject" : {
                "rdf:resource" : "#"+identifiedObjectId,
            },
            "cim:DiagramObject.rotation" : "0",
            "cim:IdentifiedObject.name" : "diagram object " + counter.toString(),
        };
        cimedit.addCategorizedItem(newStuff, "cim:DiagramObject", id, diagramObject);
        return id;
    };

    static makeDiagramObjectPoint(newStuff, diagramObjectId, seq, x, y) {
        let counter = currentCimsvg().getNameCounter("cim:DiagramObjectPoint");
        let diagramObjectPoint = {
           "cim:DiagramObjectPoint.DiagramObject" : {
                "rdf:resource" : "#"+diagramObjectId
            },
            "cim:DiagramObjectPoint.sequenceNumber": seq,
            "cim:DiagramObjectPoint.xPosition" : x,
            "cim:DiagramObjectPoint.yPosition" : y,
            "cim:IdentifiedObject.name" : "diagram object point " + counter.toString(),
        };
        let id = common.generateUUID();
        cimedit.addCategorizedItem(newStuff, "cim:DiagramObjectPoint", id, diagramObjectPoint);
        return id;
    };

    static makeAggregateComponent(diagramId, jsonBaseData, type) {
        let counter = currentCimsvg().getNameCounter(type);
        let aggregateComponent = {
            "cim:IdentifiedObject.name": type.toString() + counter,
            "diagram": diagramId,
        };
        let id = common.generateUUID();
        cimedit.addCategorizedItem(jsonBaseData, type, id, aggregateComponent);
        return id;
    };

    static makeRawAggregateComponent(jsonBaseData, type) {
        let counter = currentCimsvg().getNameCounter(type);
        let aggregateComponent = {
            "cim:IdentifiedObject.name": type.toString() + counter,
        };
        let id = common.generateUUID();
        cimedit.addCategorizedItem(jsonBaseData, type, id, aggregateComponent);
        return id;
    };

    static typeHasVariableTerminalCount(type) {
        if(cimedit.terminalAndPointLimits[type]) {
            return (cimedit.terminalAndPointLimits[type]['minTerminals'] != cimedit.terminalAndPointLimits[type]['maxTerminals'])
        }
        else {
            return false
        }
    };

    static typeIsVisible(type) {
        if (type == "cim:Terminal") {
            return false;
        }
        if(cimedit.terminalAndPointLimits[type]) {
            return (cimedit.terminalAndPointLimits[type]["points"] > 0)
        }
        else {
            return false;
        }
    };

    static removeComponentFromBaseJson(jsonBaseData, type, rdfid) {
        if (type == "cim:DiagramObject") {
            let diagramObject = common.safeExtract(jsonBaseData, "cim:DiagramObject", rdfid);
            let points = common.safeExtract(jsonBaseData, "cim:DiagramObject", rdfid, common.pinturaDiagramObjectPoints());
            points.forEach( function(point) {
                removeComponentFromBaseJson(jsonBaseData, "cim:DiagramObjectPoint", point);
            });
        }
        else if (type == "cim:Terminal") {
            let conductingEquipment = common.safeExtract(jsonBaseData, "cim:Terminal", rdfid, "cim:Terminal.ConductingEquipment");
            if (conductingEquipment) {
                let conductingEquipmentId = conductingEquipment["rdf:resource"].substr(1);
                let ownerType = currentCimsvg().getObjectTypeUsingId(conductingEquipmentId);
            }
        }
        else {
            let diagramObjectId = common.safeExtract(jsonBaseData, type, rdfid, "diagramObject");
            if (diagramObjectId) {
                removeComponentFromBaseJson(jsonBaseData, "cim:DiagramObject", diagramObjectId);
            }
            let terminals = common.safeExtract(jsonBaseData, type, rdfid, "terminals");
            if (terminals) {
                terminals.forEach(function(terminal) {
                    currentCimsvg().removeTerminal(type, rdfid, terminal)
                });
            }
        }
        if (jsonBaseData[type] && jsonBaseData[type][rdfid]) {
            delete jsonBaseData[type][rdfid];
        }
    };

    static addRawComponentToBaseJson(jsonBaseData, type) {
        return cimedit.makeAggregateComponent(currentCimsvg().getCurrentDiagramId(), jsonBaseData, type);
    };

    static addComponentToBaseJson(jsonBaseData, type, point, diagramId) {
        // TODO: diagramId is ignored.

        if (type == "cim:Diagram") {
            return cimedit.makeDiagram(jsonBaseData);
        };

        if (cimedit.terminalAndPointLimits[type] != undefined) {
            if (cimedit.typeIsVisible(type)) {
                return cimedit.makeVisibleComponent(currentCimsvg().getCurrentDiagramId(), jsonBaseData, type, point, {}, cimedit.terminalAndPointLimits[type]);
            }
            else {
                return cimedit.makeAggregateComponent(currentCimsvg().getCurrentDiagramId(), jsonBaseData, type);
            }
        }
        else {
            return cimedit.makeAggregateComponent(currentCimsvg().getCurrentDiagramId(), jsonBaseData, type);
        }
    };
};

cimedit.constellationPoints = 1;
cimedit.linePoints = 2;

cimedit.terminalAndPointLimits = {
    "cim:ACLineSegment": {
        "minTerminals" : 2,
        "maxTerminals" : 2,
        "points": 2,
        "terminalStyle": cimedit.linePoints,
    },
    "cim:Busbar": {
        "minTerminals" : 2,
        "maxTerminals" : 2,
        "points": 2,
        "terminalStyle": cimedit.linePoints,
    },
    "cim:Terminal": {
        "minTerminals" : 0,
        "maxTerminals" : 0,
        "points": 1,
    },
    "cim:TopologicalNode": {
        "minTerminals" : 0,
        "maxTerminals" : 0,
        "points": 2,
        "terminalStyle": cimedit.linePoints,
    },
    "cim:EnergyConsumer": {
        "minTerminals" : 1,
        "maxTerminals" : 4,
        "points": 1,
        "terminalStyle": cimedit.constellationPoints,
    },
    "cim:PowerTransformer": {
        "minTerminals" : 1,
        "maxTerminals" : 4,
        "points": 1,
        "terminalStyle": cimedit.constellationPoints,
    },
    "cim:SynchronousMachine": {
        "minTerminals" : 1,
        "maxTerminals" : 4,
        "points": 1,
        "terminalStyle": cimedit.constellationPoints,
    },
};

export default cimedit;
