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

var cimedit = cimedit || (function() {

    var nameCounter = {};

    var getNameCounter = function(type) {
        if (nameCounter[type] === undefined){
            nameCounter[type] = "0";
        }
        return (++nameCounter[type]).toString();
    };

    var makeDiagram = function(newStuff) {
        let id = generateUUID();
        let counter = getNameCounter("cim:Diagram");
        let diagram = {
           "cim:Diagram.orientation" : {
                "rdf:resource" : "http://iec.ch/TC57/2013/CIM-schema-cim16#OrientationKind.negative",
            },
            "cim:IdentifiedObject.name": "Diagram " + counter.toString(),
        };
        addCategorizedItem(newStuff, "cim:Diagram", id, diagram);
        return id;
    };

    /*
     * Start of Public Domain/MIT section.
     * Taken from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     */
    var generateUUID = function() {
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
            d += performance.now(); //use high-precision timer if available
        }
        return 'idxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
    /*
     * End of Public Domain/MIT function
     */

    var addCategorizedItem = function(object, category, id, item) {
        if (!object[category]) {
            object[category] = {};
        }
        item[common.pinturaRdfid()] = id;
        object[category][id] = item;
    };

    var makeVisibleComponent= function(diagramId, graph, type, point, attributes, terminalConfig) {
        let id = generateUUID();
        let componentPoints = [];
        let terminalPoints = [];
        let terminalIds = [];
        componentPoints[0] = point;

        if (terminalConfig['terminalStyle'] == linePoints) {
            nextPoint = {};
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
                terminalIds.push(makeTerminal(diagramId, graph, (i+1).toString(), id, terminalPoints[i]));
            }
        }
        if (terminalConfig['terminalStyle'] == constellationPoints) {
            nextPoint = {};
            nextPoint.x = 10 + point.x;
            nextPoint.y = point.y;
            terminalPoints.push(nextPoint);
        }

        let diagramObject = makeDiagramObjectWithPoints(graph, diagramId, id, componentPoints);
        let counter = getNameCounter(type);
        newAttributes = {
            "cim:IdentifiedObject.name": type + counter.toString(),
            "pintura:terminals": terminalIds,
            "pintura:diagramObject": diagramObject,
        };
        let componentData = Object.assign({}, attributes, newAttributes);
        addCategorizedItem(graph, type, id, componentData);
        if (terminalConfig['terminalStyle'] == constellationPoints) {
            for (let i = 0; i<terminalPoints.length; i++) {
                addTerminal(graph, type, id)
            }
        }
        return id;
    };

    const getConductingEquipmentFromTerminal = function(graph, terminalId) {
        if (graph['cim:Terminal'][terminalId]['cim:Terminal.ConductingEquipment']) {
            let conductingEquipmentObject = graph['cim:Terminal'][terminalId]['cim:Terminal.ConductingEquipment'];
            if (conductingEquipmentObject['rdf:resource']) {
                return conductingEquipmentObject['rdf:resource'].substr(1);
            }
        }
    };

    const getConductingEquipmentObjectTypeFromId = function(graph, rdfid) {
        for (type in terminalAndPointLimits) {
            if (graph[type] && graph[type][rdfid]) {
                return type;
            }
        }
        return undefined
    };

    const moveTerminalIntoComponentOrbit = function(graph, terminalId, type, conductingEquipmentId) {

        let terminalDiagramObjectId            = common.safeExtract(graph, "cim:Terminal", terminalId, common.pinturaDiagramObject());
        let terminalPoints                     = common.safeExtract(graph, "cim:DiagramObject", terminalDiagramObjectId, common.pinturaDiagramObjectPoints());

        let conductingEquipmentDiagramObjectId = common.safeExtract(graph, type, conductingEquipmentId, common.pinturaDiagramObject());
        let conductingEquipmentPoints          = common.safeExtract(graph, "cim:DiagramObject", conductingEquipmentDiagramObjectId,  common.pinturaDiagramObjectPoints());
        let conductingEquipmentPoint           = common.safeExtract(graph, "cim:DiagramObjectPoint", conductingEquipmentPoints["0"]);
        if (terminalPoints && conductingEquipmentPoint) {
            let firstPoint                     = common.safeExtract(graph, "cim:DiagramObjectPoint", terminalPoints[0]);
            let x                              = common.safeExtract(conductingEquipmentPoint, "cim:DiagramObjectPoint.xPosition");
            let y                              = common.safeExtract(conductingEquipmentPoint, "cim:DiagramObjectPoint.yPosition");
            firstPoint["cim:DiagramObjectPoint.xPosition"] = (parseInt(x) + 10).toString();
            firstPoint["cim:DiagramObjectPoint.yPosition"] = y;
        }
    };

    var addTerminal = function(baseJson, type, rdfid) {
        if (baseJson[type] && baseJson[type][rdfid]) {
            let sequenceNumber;
            if (baseJson[type][rdfid][common.pinturaTerminals()]) {
                sequenceNumber = baseJson[type][rdfid][common.pinturaTerminals()].length + 1;
            }
            else {
                baseJson[type][rdfid][common.pinturaTerminals()] = [];
                sequenceNumber = 1;
            }
            let terminal = makeTerminal(currentCimsvg().getCurrentDiagramId(), baseJson, sequenceNumber, rdfid, { x: 100, y: 100 } );
            moveTerminalIntoComponentOrbit(baseJson, terminal, type, rdfid);
            baseJson[type][rdfid][common.pinturaTerminals()].push(terminal)
        }
    };

    const removeDiagramObjectPointFromObject = function(graph, diagramObjectId, diagramObjectPointId) {
        /* Remove the diagram object from the diagram object list and
           remove the id from the list of points in the diagram object */
        pointsArray = common.safeExtract(graph["cim:DiagramObject"][diagramObjectId][common.pinturaDiagramObjectPoints()]);
        if (pointsArray) {
            let index = pointsArray.indexOf(diagramObjectPointId);
            if (index > -1) {
                pointsArray.splice(index, 1);
            }
        }
        common.safeDelete(graph, "cim:DiagramObjectPoint", diagramObjectPointId)
    };

    const connectTerminalToTopologicalNode = function(graph, terminalId, topologicalNodeId) {
        let baseJson                       = cimxml.getBaseJson();
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
            removeDiagramObjectPointFromObject(graph, terminalDiagramObjectId, secondTerminalPointId);
        };
        if (firstTopologicalNodePoint && firstTerminalPoint) {
            x = common.safeExtract(firstTopologicalNodePoint, "cim:DiagramObjectPoint.xPosition");
            y = common.safeExtract(firstTerminalPoint, "cim:DiagramObjectPoint.yPosition");
            if (terminalDiagramObject[common.pinturaDiagramObjectPoints()]) {
                let index                      = terminalDiagramObject[common.pinturaDiagramObjectPoints()].length + 1;
                let newPoint                   = makeDiagramObjectPoint(baseJson, terminalDiagramObjectId, index, x, y);
                if (newPoint) {
                    terminalDiagramObject[common.pinturaDiagramObjectPoints()].push(newPoint);
                }
            }
        }
    };

    var makeTerminal = function(diagramId, newStuff, sequenceNumber, conductingEquipmentId, point) {
        let id = generateUUID();
        let counter = getNameCounter("cim:Terminal");
        let diagramObjectId = makeDiagramObjectWithPoints(newStuff, diagramId, id, [ point ]);
        let terminal = {
            "cim:ACDCTerminal.sequenceNumber": sequenceNumber.toString(),
            "cim:IdentifiedObject.name": "terminal" + counter.toString(),
            "cim:Terminal.ConductingEquipment": { "rdf:resource": "#"+conductingEquipmentId },
            "cim:Terminal.ConnectivityNode": { "rdf:resource":"#none" },
            "cim:Terminal.phases": "",
            "pintura:diagramObject": diagramObjectId,
        }
        addCategorizedItem(newStuff, "cim:Terminal", id, terminal);
        return id;
    };

    var makeDiagramObjectWithPoints = function(graph, diagramId, identifiedObjectId, points) {
        let diagramObjectId = makeDiagramObject(graph, diagramId, identifiedObjectId);
        let diagramObjectPoints = [];
        for (let i = 0; i < points.length; i++) {
            index = (1+i);
            let diagramObjectPoint = makeDiagramObjectPoint(graph, diagramObjectId, index, points[i].x.toString(), points[i].y.toString());
            diagramObjectPoints.push(diagramObjectPoint);
        }
        graph["cim:DiagramObject"][diagramObjectId][common.pinturaDiagramObjectPoints()] = diagramObjectPoints;
        return diagramObjectId;
    };

    var makeDiagramObject = function(newStuff, diagramId, identifiedObjectId) {
        let id = generateUUID();
        let counter = getNameCounter("cim:DiagramObject");
        let diagramObject = {
            "cim:DiagramObject.Diagram": {
                "rdf:resource" : "#"+diagramId,
            },
            "cim:DiagramObject.IdentifiedObject" : {
                "rdf:resource" : "#"+identifiedObjectId,
            },
            "cim:DiagramObject.rotation" : "90",
            "cim:IdentifiedObject.name" : "diagram object " + counter.toString(),
        };
        addCategorizedItem(newStuff, "cim:DiagramObject", id, diagramObject);
        return id;
    };

    const makeDiagramObjectPoint = function(newStuff, diagramObjectId, seq, x, y) {
        let diagramObjectPoint = {
           "cim:DiagramObjectPoint.DiagramObject" : {
                "rdf:resource" : "#"+diagramObjectId
            },
            "cim:DiagramObjectPoint.sequenceNumber": seq,
            "cim:DiagramObjectPoint.xPosition" : x,
            "cim:DiagramObjectPoint.yPosition" : y
        };
        let id = generateUUID();
        addCategorizedItem(newStuff, "cim:DiagramObjectPoint", id, diagramObjectPoint);
        return id;
    };

    const constellationPoints = 1;
    const linePoints = 2;

    const terminalAndPointLimits = {
        "cim:ACLineSegment": {
            "minTerminals" : 2,
            "maxTerminals" : 2,
            "points": 2,
            "terminalStyle": linePoints,
        },
        "cim:Busbar": {
            "minTerminals" : 2,
            "maxTerminals" : 2,
            "points": 2,
            "terminalStyle": linePoints,
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
            "terminalStyle": linePoints,
        },
        "cim:EnergyConsumer": {
            "minTerminals" : 1,
            "maxTerminals" : 4,
            "points": 1,
            "terminalStyle": constellationPoints,
        },
        "cim:PowerTransformer": {
            "minTerminals" : 1,
            "maxTerminals" : 4,
            "points": 1,
            "terminalStyle": constellationPoints,
        },
        "cim:SynchronousMachine": {
            "minTerminals" : 1,
            "maxTerminals" : 4,
            "points": 1,
            "terminalStyle": constellationPoints,
        },
    };

    var getCurrentDiagramId = function() {
        return currentCimsvg().getCurrentDiagramId();
    };

    var makeAggregateComponent = function(diagramId, jsonBaseData, type) {
        let counter = getNameCounter(type);
        let aggregateComponent = {
            "cim:IdentifiedObject.name": type.toString() + counter,
            "diagram": diagramId,
        };
        let id = generateUUID();
        addCategorizedItem(jsonBaseData, type, id, aggregateComponent);
        return id;
    };

    const typeHasVariableTerminalCount = function(type) {
        if(terminalAndPointLimits[type]) {
            return (terminalAndPointLimits[type]['minTerminals'] != terminalAndPointLimits[type]['maxTerminals'])
        }
        else {
            return false
        }
    };

    const typeIsVisible = function(type) {
        if (type == "cim:Terminal") {
            return false;
        }
        if(terminalAndPointLimits[type]) {
            return (terminalAndPointLimits[type]["points"] > 0)
        }
        else {
            return false;
        }
    };

    var removeComponentFromBaseJson = function(jsonBaseData, type, rdfid) {
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

    var addComponentToBaseJson = function(jsonBaseData, type, point, diagramId) {
        // TODO: diagramId is ignored.

        if (type == "cim:Diagram") {
            return makeDiagram(jsonBaseData);
        };

        if (terminalAndPointLimits[type] != undefined) {
            if (typeIsVisible(type)) {
                return makeVisibleComponent(currentCimsvg().getCurrentDiagramId(), jsonBaseData, type, point, {}, terminalAndPointLimits[type]);
            }
            else {
                return makeAggregateComponent(currentCimsvg().getCurrentDiagramId(), jsonBaseData, type);
            }
        }
        else {
            return makeAggregateComponent(currentDiagramId, jsonBaseData, type);
        }
    };

    return {
        addTerminal,
        addComponentToBaseJson,
        connectTerminalToTopologicalNode,
        removeComponentFromBaseJson,
        getCurrentDiagramId,
        terminalAndPointLimits,
        typeHasVariableTerminalCount,
        typeIsVisible,
        generateUUID,
    };
}());

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cimedit;
}
