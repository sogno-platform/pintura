
const constellationPoints = 1;
const linePoints = 2;
const terminalAndPoints = {
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

module.exports = {
    typeIsVisible: function(type) {
        if (type === "cim:Terminal") {
            return false;
        }
        if(terminalAndPoints[type]) {
            return (cimedit.terminalAndPointLimits[type]["points"] > 0);
        }
        else {
            return false;
        }
    },
    terminalAndPointLimits: terminalAndPoints
};
