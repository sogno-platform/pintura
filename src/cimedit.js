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
        let id = createNewId();
        let diagram = {
           "cim:Diagram.orientation" : {
                "rdf:resource" : "http://iec.ch/TC57/2013/CIM-schema-cim16#OrientationKind.negative",
            },
            "cim:IdentifiedObject.name": "Diagram "+id,
        };
        addCategorizedItem(newStuff, "cim:Diagram", id, diagram);
        return id;
    };

    var createNewId = function() {
        return idCounter++;
    };
    var idCounter = 2;

    var addCategorizedItem = function(object, category, id, item) {
        if (!object[category]) {
            object[category] = {};
        }
        object[category][id] = item;
    };

    var makeAComponentWithTerminals = function(diagramId, graph, type, attributes, numberOfPoints, numberOfTerminals) {
        let id = createNewId();
        points = [];
        for (let i = 0; i<numberOfPoints; i++) {
            point = {};
            point.x = (100 * i);
            point.y = (100 * i);
            points.push(point);
            console.log(points[i])
        }

        let diagramObjectPoints = makeDiagramObjectWithPoints(graph, diagramId, id, points);
        let terminalIds = [];
        for (let i = 0; i<numberOfTerminals; i++) {
            terminalIds.push(makeTerminal(diagramId, graph, (i+1).toString(), id, points[i]));
        }
        newAttributes = {
            "cim:IdentifiedObject.name": type+id,
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
        let id = createNewId();
        let diagramObjectPoints = makeDiagramObjectWithPoints(newStuff, diagramId, id, [ point ]);
        let terminal = {
            "cim:ACDCTerminal.sequenceNumber": sequenceNumber,
            "cim:IdentifiedObject.name": "terminal"+id,
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
        let diagramObjectPointId = createNewId();
        let diagramObjectId = createNewId();
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
        let diagramObject = {
            "cim:DiagramObject.Diagram": {
                "rdf:resource" : "#"+diagramId,
            },
            "cim:DiagramObject.IdentifiedObject" : {
                "rdf:resource" : "#"+identifiedObjectId,
            },
            "cim:DiagramObject.rotation" : "90",
            "cim:IdentifiedObject.name" : "diagram object "+diagramObjectId,
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
        let id = createNewId();
        addCategorizedItem(newStuff, "cim:DiagramObjectPoint", id, diagramObjectPoint);
        return diagramObjectPoint;
    };

    const oneTerminalTypes = [
        "cim:PowerTransformer",
    ];

    const twoTerminalTypes = [
        "cim:ACLineSegment",
    ];

    var addComponentToBaseJson = function(jsonBaseData, type) {
        let diagramId = makeDiagram(jsonBaseData)
        
        if (jsonBaseData[type] == undefined) {
            jsonBaseData[type] = {}
        }

        if (oneTerminalTypes.indexOf(type) != -1) {
            makeAComponentWithTerminals(diagramId, jsonBaseData, type, {}, 1, 1);
	} else if (twoTerminalTypes.indexOf(type) != -1) {
            makeAComponentWithTerminals(diagramId, jsonBaseData, type, {}, 2, 2);
        } else {
            return null;
	}

    };

    return {
        addComponentToBaseJson,
    };
}());

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        cimxml
    };
}
