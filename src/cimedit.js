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

    var makeDiagram = function(newStuff, type) {
        let id = generateUUID();
        let counter = getNameCounter();
        let diagram = {
           "cim:Diagram.orientation" : {
                "rdf:resource" : "http://iec.ch/TC57/2013/CIM-schema-cim16#OrientationKind.negative",
            },
            "cim:IdentifiedObject.name": "Diagram " + counter.toString(),
        };
        addCategorizedItem(newStuff, "cim:Diagram", id, diagram);
        return id;
    };

    var nameCounter = 0;
    var getNameCounter = function() {
        return nameCounter++;
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
        object[category][id] = item;
    };

    var makeAComponentWithTerminals = function(diagramId, graph, type, point, attributes, numberOfPoints, numberOfTerminals) {
        let id = generateUUID();
        points = [];
        points[0] = point;
        for (let i = 1; i<numberOfPoints; i++) {
            nextPoint = {};
            nextPoint.x = point.x;
            nextPoint.y = (100 * i) + point.y;
            points.push(nextPoint);
        }

        let diagramObjectPoints = makeDiagramObjectWithPoints(graph, diagramId, id, points);
        let terminalIds = [];
        for (let i = 0; i<numberOfTerminals; i++) {
            terminalIds.push(makeTerminal(diagramId, graph, (i+1).toString(), id, points[i]));
        }
        let counter = getNameCounter();
        newAttributes = {
            "cim:IdentifiedObject.name": type + counter.toString(),
            "diagramObject": {
                ["#"+diagramId] : {
                    "cim:DiagramObject.rotation" : "90",
                    points: diagramObjectPoints
                },
            },
            "dirty": "true",
            "terminals": terminalIds,
        };
        let componentData = Object.assign({}, attributes, newAttributes);
        addCategorizedItem(graph, type, id, componentData);
        return id;
    };

    var makeTerminal = function(diagramId, newStuff, sequenceNumber, conductingEquipmentId, point) {
        let id = generateUUID();
        let counter = getNameCounter();
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
        let counter = getNameCounter();
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

    const terminalAndPointLimits = {
        "cim:ACLineSegment": {
            "minTerminals" : 2,
            "maxTerminals" : 2,
            "points": 2,
        },
        "cim:Busbar": {
            "minTerminals" : 2,
            "maxTerminals" : 2,
            "points": 2,
        },
        "cim:EnergyConsumer": {
            "minTerminals" : 1,
            "maxTerminals" : 4,
            "points": 1,
        },
        "cim:PowerTransformer": {
            "minTerminals" : 1,
            "maxTerminals" : 4,
            "points": 1,
        },
        "cim:SynchronousMachine": {
            "minTerminals" : 1,
            "maxTerminals" : 4,
            "points": 1,
        },
    };

    var currentDiagramId = undefined;

    var setCurrentDiagramId = function(diagramId) {
        currentDiagramId = diagramId;
    };

    var addComponentToBaseJson = function(jsonBaseData, type, point, diagramId) {
        // TODO: diagramId is ignored.

        if (type == "cim:Diagram") {
            makeDiagram(jsonBaseData);
            return;
        };

        if (terminalAndPointLimits[type] != undefined) {
            makeAComponentWithTerminals(currentDiagramId, jsonBaseData, type, point, {}, terminalAndPointLimits[type]['minTerminals'], terminalAndPointLimits[type]['points']);
        } else {
            console.error("I don't know what type of component a " + type + " is.")
        }
    };

    return {
        addComponentToBaseJson,
        setCurrentDiagramId,
    };
}());

if (typeof module !== 'undefined' && module.exports) {
    module.exports = cimedit;
}
