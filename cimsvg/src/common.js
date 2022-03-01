/*
 *  Copyright © 2016-2017, RWTH Aachen University
 *  Authors: Richard Marston
 *  SPDX-License-Identifier: MPL-2.0
 */

class common {

    /*
     * Start of Public Domain/MIT section.
     * Taken from https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     */
    static generateUUID() {
        let d = new Date().getTime();
        if (typeof performance !== "undefined" && typeof performance.now === "function"){
            d += performance.now(); //use high-precision timer if available
        }
        return "idxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            let masked = (r & 0x3);
            return (c === "x" ? r : (masked | 0x8)).toString(16);
        });
    }
    /*
     * End of Public Domain/MIT function
     */

    static emptylog(...args) {
    }

    static safeExtract(graph) {
        let object = graph;
        let args = Array.prototype.slice.call(arguments, 1);

        for (let arg in args) {
            let argument = args[arg];
            if (object !== undefined) {
                object = object[argument];
            }
            else {
                return undefined;
            }
        }
        return object;
    }

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
                object = object[argument];
            }
            else {
                return undefined;
            }
        }
        delete owner[key];
    }

    static getObjectTypeFromId(graph, id) {
        for (let type in graph) {
            for (let _id in graph[type]) {
                if (_id === id) {
                    return type;
                }
            }
        }
        return undefined;
    }

    static pinturaLocation() {
        return "pintura:location";
    }

    static pinturaDiagramObjectPoints() {
        return "pintura:diagramObjectPoints";
    }

    static pinturaPositionPoints() {
        return "pintura:positionPoints";
    }

    static pinturaDiagramObject() {
        return "pintura:diagramObject";
    }

    static pinturaRdfid() {
        return "pintura:rdfid";
    }

    static pinturaTerminals() {
        return "pintura:terminals";
    }

    static identifiedObjectName() {
        return "cim:IdentifiedObject.name";
    }
}

export default common;
