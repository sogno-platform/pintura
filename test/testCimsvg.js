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

var libcimsvg = require("../html/libcimsvg.node.js")

getMouseCoordFromWindow = function(evt) {
    return new SVGPoint(10, 10);
}

/* TODO: stub-only implementation */
const loadXml = function(fileName, SVGclass, callback) {};

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
            let diagramId = cimsvgInstance.addDiagram();
            cimsvgInstance.setCurrentDiagramId(diagramId); 
            cimsvg.setCimsvg(cimsvgInstance);
            spyOn(cimsvgInstance.cimview, "getMouseCoordFromWindow").and.callFake(getMouseCoordFromWindow);
            domReady = dom;
            done();
        });
    });

    it("should be able to add a component", function() {
        cimsvgInstance.addComponent("cim:EnergyConsumer");
        let point = cimsvgInstance.cimview.getMouseCoordFromWindow();
        let rdfid = cimsvgInstance.checkComponentReadyToAdd(point);
        cimsvgInstance.applyTemplates();
        expect(cimsvgInstance.getObjectUsingId(rdfid)).not.toBe(null);
    });

    it("should add the component requested", function() {
        cimsvgInstance.addComponent("cim:EnergyConsumer");
        let point = cimsvgInstance.cimview.getMouseCoordFromWindow();
        let rdfid = cimsvgInstance.checkComponentReadyToAdd(point);
        cimsvgInstance.applyTemplates();
        expect(cimsvgInstance.getObjectTypeUsingId(rdfid)).toBe("cim:EnergyConsumer");
    });
});

