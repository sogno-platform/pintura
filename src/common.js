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

var common = common || (function() {
    const PinturaDiagramObjectPoints = "Pintura:DiagramObjectPoints";
    const safeExtract = function(graph) {
        let object = graph;
        var args = Array.prototype.slice.call(arguments, 1);

        for (let arg in args) {
            let argument = args[arg];
            if (object !== undefined) {
                object = object[argument]
            }
            else {
                return undefined;
            }
        }
        return object;
    };
    const safeDelete = function(graph) {
        let object = graph;
        let owner = undefined;
        let key = undefined;
        var args = Array.prototype.slice.call(arguments, 1);
        for (let arg in args) {
            let argument = args[arg];
            if (object !== undefined) {
                owner = object;
                key = argument; 
                object = object[argument]
            }
            else {
                return undefined;
            }
        }
        delete owner[key]; 
    };
    const getObjectTypeFromId = function(graph, id) {
        for (let type in graph) {
            for (let _id in graph[type]) {
                if (_id == id) {
                    return type;
                }
            }
        }
        return undefined;
    };
    return {
        safeExtract,
        safeDelete,
        getObjectTypeFromId,
        pinturaDiagramObjectPoints: function() {
            return PinturaDiagramObjectPoints;
        }
    };
}());

if (typeof module !== 'undefined' && module.exports) {
    module.exports = common
}

