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

class common {

    /*
     * Start of Public Domain/MIT section.
     * Taken from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     */
    static generateUUID() {
        let d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
            d += performance.now(); //use high-precision timer if available
        }
        return 'idxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
    /*
     * End of Public Domain/MIT function
     */

    static safeExtract(graph) {
        let object = graph;
        let args = Array.prototype.slice.call(arguments, 1);

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

    static safeDelete(graph) {
        let object = graph;
        let owner = undefined;
        let key = undefined;
        let args = Array.prototype.slice.call(arguments, 1);
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

    static getObjectTypeFromId(graph, id) {
        for (let type in graph) {
            for (let _id in graph[type]) {
                if (_id == id) {
                    return type;
                }
            }
        }
        return undefined;
    };

    static pinturaDiagramObjectPoints() {
        return "pintura:diagramObjectPoints";
    };

    static pinturaDiagramObject() {
        return "pintura:diagramObject";
    };

    static pinturaRdfid() {
        return "pintura:rdfid";
    };

    static pinturaTerminals() {
        return "pintura:terminals";
    };

    static identifiedObjectName() {
        return "cim:IdentifiedObject.name";
    };
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = common
}

