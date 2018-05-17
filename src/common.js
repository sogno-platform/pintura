


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

