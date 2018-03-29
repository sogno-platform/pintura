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
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
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
        item['rdfid'] = id;
        object[category][id] = item;
    };

    var makeAComponentWithTerminals = function(diagramId, graph, type, point, attributes, terminalConfig) {
        let id = generateUUID();
        componentPoints = [];
        terminalPoints = [];
        componentPoints[0] = point;

        if (terminalConfig['terminalStyle'] == linePoints) {
            nextPoint = {};
            nextPoint.x = point.x;
            nextPoint.y = point.y;
            terminalPoints.push(nextPoint);
            nextPoint.y = 100 + point.y;
            terminalPoints.push(nextPoint);
            componentPoints.push(nextPoint);
        }
        if (terminalConfig['terminalStyle'] == constellationPoints) {
            nextPoint = {};
            nextPoint.x = 10 + point.x;
            nextPoint.y = point.y;
            terminalPoints.push(nextPoint);
        }

        let diagramObjectPoints = makeDiagramObjectWithPoints(graph, diagramId, id, componentPoints);
        let terminalIds = [];
        for (let i = 0; i<terminalPoints.length; i++) {
            terminalIds.push(makeTerminal(diagramId, graph, (i+1).toString(), id, terminalPoints[i]));
        }
        let counter = getNameCounter(type);
        newAttributes = {
            "cim:IdentifiedObject.name": type + counter.toString(),
            "dirty": "true",
            "terminals": terminalIds,
        };
        let componentData = Object.assign({}, attributes, newAttributes);
        addCategorizedItem(graph, type, id, componentData);
        return id;
    };

    var makeTerminal = function(diagramId, newStuff, sequenceNumber, conductingEquipmentId, point) {
        let id = generateUUID();
        let counter = getNameCounter("cim:Terminal");
        let diagramObjectPoints = makeDiagramObjectWithPoints(newStuff, diagramId, id, [ point ]);
        let terminal = {
            "cim:ACDCTerminal.sequenceNumber": sequenceNumber,
            "cim:IdentifiedObject.name": "terminal" + counter.toString(),
            "cim:Terminal.ConductingEquipment": { "rdf:resource": "#"+conductingEquipmentId },
            "cim:Terminal.ConnectivityNode": { "rdf:resource":"#none" },
            "cim:Terminal.phases": {},
            "diagramObject": { ["#"+diagramId] : { points: diagramObjectPoints }},
            "dirty": true,
        }
        addCategorizedItem(newStuff, "cim:Terminal", id, terminal);
        return id;
    };

    var makeDiagramObjectWithPoints = function(graph, diagramId, identifiedObjectId, points) {
        let diagramObjectPointId = generateUUID();
        let diagramObjectId = generateUUID();
        let diagramObject = makeDiagramObject(graph, diagramId, identifiedObjectId, diagramObjectId);
        let diagramObjectPoints = [];
        for (let i = 0; i < points.length; i++) {
            index = (1+i);
            let diagramObjectPoint = makeDiagramObjectPoint(graph, diagramObjectId, index, points[i].x.toString(), points[i].y.toString());
            diagramObjectPoints.push(diagramObjectPoint);
        }
        return diagramObjectPoints;
    };

    var makeDiagramObject = function(newStuff, diagramId, identifiedObjectId, diagramObjectId) {
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
        addCategorizedItem(newStuff, "cim:DiagramObject", diagramObjectId, diagramObject);
        return diagramObject;
    };

    var makeDiagramObjectPoint = function(newStuff, diagramObjectId, seq, x, y) {
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
        return diagramObjectPoint;
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
        "cim:TopologicalNode": {
            "minTerminals" : 2,
            "maxTerminals" : 2,
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
        "cim:PowerTransformerEnd": {
            "minTerminals" : 0,
            "maxTerminals" : 0,
            "points": 0,
        },
        "cim:SynchronousMachine": {
            "minTerminals" : 1,
            "maxTerminals" : 4,
            "points": 1,
            "terminalStyle": constellationPoints,
        },
    };

    var currentDiagramId = undefined;

    var setCurrentDiagramId = function(diagramId) {
        currentDiagramId = diagramId;
    };

    var makeAggregateComponent = function(diagramId, jsonBaseData, type) {
        let counter = getNameCounter(type);
        let aggregateComponent = {
            "cim:IdentifiedObject.name": type.toString() + counter,
            "diagram": diagramId,
        };
        let id = generateUUID();
        addCategorizedItem(jsonBaseData, type, id, aggregateComponent);
        return aggregateComponent;
    };

    const typeIsVisible = function(type) {
        if(terminalAndPointLimits[type]) {
            return (terminalAndPointLimits[type]['points'] > 0)
        }
        else {
            return false
        }
    };

    var addComponentToBaseJson = function(jsonBaseData, type, point, diagramId) {
        // TODO: diagramId is ignored.

        if (type == "cim:Diagram") {
            makeDiagram(jsonBaseData);
            return;
        };

        if (terminalAndPointLimits[type] != undefined) {
            if (typeIsVisible(type)) {
                makeAComponentWithTerminals(currentDiagramId, jsonBaseData, type, point, {}, terminalAndPointLimits[type]);
            }
            else {
                makeAggregateComponent(currentDiagramId, jsonBaseData, type);
            }
        }
        else {
            makeAggregateComponent(currentDiagramId, jsonBaseData, type);
        }
    };

    return {
        addComponentToBaseJson,
        setCurrentDiagramId,
        terminalAndPointLimits,
        typeIsVisible,
    };
}());

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cimedit;
}
