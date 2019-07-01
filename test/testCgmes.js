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

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const xmldom = require("xmldom");
const fs = require("fs");
const JSZip = require('jszip');

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

const createCustomEvent = function(x, y) {
    let evt = {};
    evt.clientX = x;
    evt.clientY = y;
    return evt;
};

const saveZip = function(zip, filename) {
    expect(filename).toBe("pintura.zip");
    expect(Object.keys(zip.files).length).not.toBe(0);
    //TODO: perform content checking
};

const saveFileFunction = function(data, filename="BLAG.xml") {
    //TODO: perform content checking
};

const openCgmesFile = function(cimsvgInstance, callback) {
    spyOn(libcimsvg.cimxml, "getDOM").and.callFake(getDOM);
    spyOn(libcimsvg.cimxml, "isElementNode").and.callFake(isElementNode);
    spyOn(global.libcimsvg.cimfile, "saveFile").and.callFake(saveFileFunction);
    cimsvgInstance.setFileCount(3);
    fs.readFile("test/grid-data/CIM/Components/GeneratingUnit/DL.xml", 'utf8', (err, data) => {
        expect(err).toBe(null);
        cimsvgInstance.loadFile(data);
        fs.readFile("test/grid-data/CIM/Components/GeneratingUnit/EQ.xml", 'utf8', (err, data) => {
            expect(err).toBe(null);
            cimsvgInstance.loadFile(data);
            fs.readFile("test/grid-data/CIM/Components/GeneratingUnit/TP.xml", 'utf8', (err, data) => {
                expect(err).toBe(null);
                cimsvgInstance.loadFile(data);
                callback();
            });
        });
    });
};

describe("cgmes", function() {

    let cimsvgInstance = null;
    let cimmenuInstance;
    let menu = null;

    beforeAll(function(done) {
        JSDOM.fromFile("index.html", {}).then(dom => {
            global.window = { clientWidth: 300, clientHeight: 300 };
            global.document = dom.window.document;
            global.libcimsvg = require("../cimsvg/lib/libcimsvg.umd.js")
            global.libcimmenu = require("../cimmenu/lib/libcimmenu.umd.js")
            global.currentCimsvg = libcimsvg.currentCimsvg;
            global.currentCimmenu = libcimmenu.currentCimmenu;
            let cimsvg = libcimsvg.cimsvg;
            let svg = dom.window.document.querySelector("#svg")
            let dialog = dom.window.document.querySelector("#dialog")
            spyOn(cimsvg.prototype, "loadXml").and.callFake(loadXml);
            cimsvgInstance = new cimsvg(svg, dialog)
            cimsvg.setCimsvg(cimsvgInstance);
            menu = dom.window.document.querySelector("#menu")
            Object.defineProperty(menu, 'clientHeight', {value: 400});
            Object.defineProperty(menu, 'clientWidth', {value: 300});
            cimmenuInstance = new libcimmenu.cimmenu(menu)
            cimsvgInstance.setCimmenu(cimmenuInstance);
            libcimmenu.cimmenu.setCimmenu(cimmenuInstance);
            done();
        });
    });

    it("should be able to read a cgmes file", function(done) {
        openCgmesFile(cimsvgInstance, done);
    });

    it("should be possible to see attributes for an object", function(done) {
        openCgmesFile(cimsvgInstance, function() {
            let synchronousMachines = cimsvgInstance.getObjectsOfType("cim:SynchronousMachine");
            let firstSynchronousMachine = synchronousMachines[Object.keys(synchronousMachines)[0]];
            cimmenuInstance.populateAttributes("cim:SynchronousMachine",  firstSynchronousMachine['pintura:rdfid']);
            let attributesPanel = menu.querySelectorAll(".attributes-panel")[0];
            //checkSelectedAttributeDropdownHasValue(attributesPanel, "LoadResponse", "L-1230804819");
            done();
        });
    });


});

