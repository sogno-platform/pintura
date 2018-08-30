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

var libcimsvg = require("../html/libcimsvg.node.js")

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

getMouseCoordFromWindow = function(evt) {
    return new SVGPoint(evt.clientX, evt.clientY);
}

createCustomEvent = function(x, y) {
    let evt = {};
    evt.clientX = x;
    evt.clientY = y;
    return evt;
};

describe("cimsvg", function() {

    let domReady = null;
    let cimsvgInstance = null;

    beforeAll(function(done) {
        JSDOM.fromFile("index.html", {}).then(dom => {
            let cimsvg = libcimsvg.cimsvg;
            let svg = dom.window.document.querySelector("#svg")
            let floatingMenu = dom.window.document.querySelector("#floating-menu")
            let sidebar = dom.window.document.querySelector("#sidebar")
            cimsvgInstance = new cimsvg()
            spyOn(cimsvgInstance, "loadXml").and.callFake(loadXml);
            cimsvgInstance.init(svg, sidebar, floatingMenu);
            cimsvg.setCimsvg(cimsvgInstance);
            spyOn(cimsvgInstance.cimview, "getMouseCoordFromWindow").and.callFake(getMouseCoordFromWindow);
            let diagramId = cimsvgInstance.addDiagram();
            cimsvgInstance.setCurrentDiagramId(diagramId);
            domReady = dom;
            done();
        });
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
        spyOn(cimxml, "getDOM").and.callFake(getDOM);
        spyOn(cimxml, "isElementNode").and.callFake(isElementNode);
        cimsvgInstance.clearAllData()
        cimsvgInstance.setFileCount(1);
        fs.readFile("test/grid-data/CIM/Components/EnergyConsumer/entsoe.xml", 'utf8', (err, data) => {
            if (err) throw err;
            cimsvgInstance.loadFile(data);
            done();
        });
        expect(cimsvgInstance.getObjectsOfType("cim:EnergyConsumer")).not.toBe(null);
    });
});

