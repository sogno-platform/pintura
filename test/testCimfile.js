/*
 *  Copyright © 2016-2017, RWTH Aachen University
 *  Authors: Richard Marston
 *  SPDX-License-Identifier: MPL-2.0
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

describe("cimfile", function() {

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

    it("should be able to write a xml file", function(done) {
        spyOn(libcimsvg.cimxml, "getDOM").and.callFake(getDOM);
        spyOn(libcimsvg.cimxml, "isElementNode").and.callFake(isElementNode);
        spyOn(global.libcimsvg.cimfile, "saveFile").and.callFake(saveFileFunction);
        cimsvgInstance.setFileCount(1);
        fs.readFile("test/grid-data/Components/EnergyConsumer/entsoe.xml", 'utf8', (err, data) => {
            expect(err).toBe(null);
            cimsvgInstance.loadFile(data);
            cimsvgInstance.saveGridXml("filename.xml");
            done();
        });
    });

    it("should be able to write a multipart zip file", function(done) {
        spyOn(libcimsvg.cimxml, "getDOM").and.callFake(getDOM);
        spyOn(libcimsvg.cimxml, "isElementNode").and.callFake(isElementNode);
        spyOn(libcimsvg.cimfile, "saveZip").and.callFake(saveZip);
        cimsvgInstance.setFileCount(1);
        fs.readFile("test/grid-data/Components/EnergyConsumer/entsoe.xml", 'utf8', (err, data) => {
            expect(err).toBe(null);
            cimsvgInstance.loadFile(data);
            cimsvgInstance.saveToMultipartZip("myfile.zip");
            done();
        });
    });
});

