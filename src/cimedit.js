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
        console.log(newStuff)
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
        let diagramObjectPoints = makeDiagramObjectWithPoints(graph, diagramId, id, numberOfPoints);
        let terminalIds = [];
        for (let i = 1; i<= numberOfTerminals; i++) {
            terminalIds.push(makeTerminal(diagramId, graph, i.toString(), id));
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
        console.log(graph)
        addCategorizedItem(graph, type, id, componentData);
        return id;
    };


    var makeTerminal = function(diagramId, newStuff, sequenceNumber, conductingEquipmentId) {
        let id = createNewId();
        let diagramObjectPoints = makeDiagramObjectWithPoints(newStuff, diagramId, id, 1);
        let terminal = {
            "cim:ACDCTerminal.sequenceNumber": sequenceNumber,
            "cim:IdentifiedObject.name": "terminal"+id,
            "cim:Terminal.ConductingEquipment": { "rdf:resource": "#"+conductingEquipmentId },
            "cim:Terminal.ConnectivityNode": { "rdf:resource":"#none" },
            "cim:Terminal.phases": {},
            "diagramObject": { ["#"+diagramId] : { points: diagramObjectPoints }},
            "dirty": true,
        }
        console.log(newStuff)
        addCategorizedItem(newStuff, "cim:Terminal", id, terminal);
        return id;
    };

    var makeDiagramObjectWithPoints = function(graph, diagramId, identifiedObjectId, numberOfPoints) {
        let diagramObjectPointId = createNewId();
        let diagramObjectId = createNewId();
        let diagramObject = makeDiagramObject(graph, diagramId, identifiedObjectId, diagramObjectId);
        let points = [];
        for (let i = 0; i < numberOfPoints; i++) {
            index = (1+i);
            let diagramObjectPoint = makeDiagramObjectPoint(graph, diagramObjectId, index, "100", (index*100).toString());
            points.push(diagramObjectPoint);
        }
        return points;
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
        console.log(newStuff)
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
        console.log(newStuff)
        addCategorizedItem(newStuff, "cim:DiagramObjectPoint", id, diagramObjectPoint);
        return diagramObjectPoint;
    };

    var addComponentToBaseJson = function(jsonBaseData, type) {
        let diagramId = makeDiagram(jsonBaseData)
        
        if (jsonBaseData[type] == undefined) {
            jsonBaseData[type] = {}
        }
        console.log(jsonBaseData[type])

        makeAComponentWithTerminals(diagramId, jsonBaseData, type, {}, 1, 1);
        console.log(jsonBaseData)
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
