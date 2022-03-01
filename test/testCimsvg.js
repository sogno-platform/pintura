/*
 *  Copyright © 2016-2017, RWTH Aachen University
 *  Authors: Richard Marston
 *  SPDX-License-Identifier: MPL-2.0
 */

class SVGPoint {
    constructor(x_, y_) {
        this.x = x_;
        this.y = y_;
    }
};

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const xmldom = require("xmldom");
const fs = require("fs");

/* TODO: stub-only implementation */
const loadXml = function(fileName, SVGclass, callback) {};

const isElementNode = function(nodeType) {
    if (nodeType == 1) {
        return true;
    }
    else {
        return false;
    }
};

const getDOM = function(text) {
    let DOMParser = xmldom.DOMParser;
    return new DOMParser().parseFromString(text);
};

const getXMLSerializer = function(text) {
    return new xmldom.XMLSerializer();
};

const getMouseCoordFromWindow = function(evt) {
    return new SVGPoint(evt.clientX, evt.clientY);
}

createCustomEvent = function(x, y) {
    let evt = {};
    evt.clientX = x;
    evt.clientY = y;
    return evt;
};

describe("cimsvg", function() {

    let cimsvgInstance = null;

    beforeAll(function(done) {
        JSDOM.fromFile("index.html", {}).then(dom => {
            global.window = { clientWidth: 300, clientHeight: 300 };
            global.document = dom.window.document;
            global.libcimsvg = require("../cimsvg/lib/libcimsvg.umd.js")
            global.currentCimsvg = libcimsvg.currentCimsvg;
            let cimsvg = libcimsvg.cimsvg;
            let svg = dom.window.document.querySelector("#svg")
            let dialog = dom.window.document.querySelector("#dialog")
            spyOn(cimsvg.prototype, "loadXml").and.callFake(loadXml);
            cimsvgInstance = new cimsvg(svg, dialog)
            cimsvgInstance.setTest();
            cimsvg.setCimsvg(cimsvgInstance);
            let menu = dom.window.document.querySelector("#menu")
            Object.defineProperty(menu, 'clientHeight', {value: 400});
            Object.defineProperty(menu, 'clientWidth', {value: 300});
            done();
        });
    });

    beforeEach(function(done) {
        cimsvgInstance.clearAllData()
        let diagramId = cimsvgInstance.addDiagram();
        cimsvgInstance.setCurrentDiagramId(diagramId);
        spyOn(cimsvgInstance.cimview, "getMouseCoordFromWindow").and.callFake(getMouseCoordFromWindow);
        done();
    });

    it("should be able to add a component", function() {
        cimsvgInstance.addComponent("cim:EnergyConsumer");
        let evt = createCustomEvent(10, 10);
        let rdfid = cimsvgInstance.checkComponentReadyToAdd(evt);
        cimsvgInstance.applyTemplates();
        expect(cimsvgInstance.getObjectUsingId(rdfid)).not.toBe(null);
    });

    it("should add the component requested", function() {
        cimsvgInstance.addComponent("cim:EnergyConsumer");
        let evt = createCustomEvent(10, 10);
        let rdfid = cimsvgInstance.checkComponentReadyToAdd(evt);
        cimsvgInstance.applyTemplates();
        expect(cimsvgInstance.getObjectTypeUsingId(rdfid)).toBe("cim:EnergyConsumer");
    });

    it("should be able to join a terminal to a topological node", function() {
        cimsvgInstance.addComponent("cim:EnergyConsumer");
        let evt = createCustomEvent(10, 10);
        let energyConsumerId = cimsvgInstance.checkComponentReadyToAdd(evt);
        cimsvgInstance.applyTemplates();
        let energyConsumer = cimsvgInstance.getObjectUsingId(energyConsumerId);
        let terminalId = energyConsumer['pintura:terminals'][0];
        cimsvgInstance.addComponent("cim:TopologicalNode");
        evt = createCustomEvent(20, 20);
        let topologicalNodeId = cimsvgInstance.checkComponentReadyToAdd(evt);
        cimsvgInstance.updateComponentRDF('cim:Terminal', terminalId, 'cim:Terminal.TopologicalNode', topologicalNodeId);
        cimsvgInstance.applyTemplates();
        let terminal = cimsvgInstance.getObjectUsingId(terminalId);
        expect(terminal['cim:Terminal.TopologicalNode']['rdf:resource']).toEqual('#'+topologicalNodeId)
    });

    it("should be possible to clear the data", function() {
        cimsvgInstance.clearAllData();
        expect(cimsvgInstance.getObjectsOfType("cim:EnergyConsumer")).toBe(undefined);
        expect(cimsvgInstance.getCurrentDiagramId()).toBe(undefined);
    });

    it("should be possible to read a cim file", function(done) {
        spyOn(libcimsvg.cimxml, "getDOM").and.callFake(getDOM);
        spyOn(libcimsvg.cimxml, "isElementNode").and.callFake(isElementNode);
        cimsvgInstance.setFileCount(1);
        fs.readFile("test/grid-data/Components/EnergyConsumer/entsoe.xml", 'utf8', (err, data) => {
            expect(err).toBe(null);
            cimsvgInstance.loadFile(data);
            let energyConsumerObjects=cimsvgInstance.getObjectsOfType("cim:EnergyConsumer");
            expect(energyConsumerObjects).not.toBe(null);
            expect(energyConsumerObjects).not.toBe(undefined);
            done();
        });
    });

    it("should be possible to save a file", function(done) {
        spyOn(libcimsvg.cimxml, "getDOM").and.callFake(getDOM);
        spyOn(libcimsvg.cimxml, "getXMLSerializer").and.callFake(getXMLSerializer);
        cimsvgInstance.addComponent("cim:EnergyConsumer");
        expect(cimsvgInstance.exportXmlData()).not.toBe(null);
        done();
    });
});

