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
global.XMLSerializer = xmldom.XMLSerializer;

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

var format = require('html-format');
showDiagramsPanel = function(menu) {
    let diagramPanelList = menu.querySelectorAll('.diagrams-panel');
    diagramPanelList.forEach((diagramPanel) => {
        console.log("Diagram Panel: ", format(diagramPanel.outerHTML));
    });
};

showComponentsPanel = function(menu) {
    let componentsPanelList = menu.querySelectorAll('.components-panel');
    componentsPanelList.forEach((panel) => {
        console.log("Components panel: " , format(panel.outerHTML));
    });
};

checkIdExists = function(html, id) {
    let node = html.querySelector(id);
    expect(node).not.toBe(null);
    expect(node).not.toBe(undefined);
};

checkClassExists = function(html, query) {
    let list = html.querySelectorAll(query);
    expect(list.length).not.toBe(0);
};

checkAttributeDropdownExistsWithValue = function(attributesPanel, attributeName, value) {
    let attributeListEntries = attributesPanel.querySelectorAll(".list-entry");
    let entryFound = false;
    attributeListEntries.forEach((entry) => {
        let attributeNameList = entry.querySelectorAll(".floating-panel-name");
        if (attributeNameList.length == 1) {
            if (attributeNameList[0].innerHTML == attributeName) {
                let selectList = entry.querySelectorAll("option");
                selectList.forEach((selectListEntry) => {
                    if (selectListEntry.innerHTML == value) {
                        entryFound = true;
                    }
                });
            }
        }
    });
    expect(entryFound).toEqual(true);
};

checkSelectedAttributeDropdownHasValue = function(attributesPanel, attributeName, value) {
    let attributeListEntries = attributesPanel.querySelectorAll(".list-entry");
    let entryFound = false;
    attributeListEntries.forEach((entry) => {
        let attributeNameList = entry.querySelectorAll(".floating-panel-name");
        if (attributeNameList.length == 1) {
            if (attributeNameList[0].innerHTML == attributeName) {
                let selectList = entry.querySelectorAll("option[selected='selected']");
                selectList.forEach((selectListEntry) => {
                    expect(selectListEntry.innerHTML).toEqual(value);
                    entryFound = true;
                });
            }
        }
    });
    expect(entryFound).toEqual(true);
};

getOnclickFromAttributeButtonWithText = function(attributesPanel, attributeName, value) {
    let attributeListEntries = attributesPanel.querySelectorAll(".list-entry");
    let onclick = null;
    attributeListEntries.forEach((entry) => {
        let attributeNameList = entry.querySelectorAll(".floating-panel-name");
        if (attributeNameList.length == 1) {
            if (attributeNameList[0].innerHTML == attributeName) {
                let selectList = entry.querySelectorAll("button");
                selectList.forEach((selectListEntry) => {
                    if (selectListEntry.innerHTML === value) {
                        onclick = selectListEntry.getAttribute("onclick");
                    }
                });
            }
        }
    });
    return onclick;
};

getOnchangeFromOptionWithText = function(attributesPanel, attributeName, value) {
    let attributeListEntries = attributesPanel.querySelectorAll(".list-entry");
    let onchange = null;
    attributeListEntries.forEach((entry) => {
        let attributeNameList = entry.querySelectorAll(".floating-panel-name");
        if (attributeNameList.length == 1) {
            if (attributeNameList[0].innerHTML == attributeName) {
                let selectList = entry.querySelectorAll("select");
                selectList.forEach((selectListEntry) => {
                    optionList = selectListEntry.querySelectorAll("option");
                    optionList.forEach((option) => {
                        if (option.innerHTML === value) {
                            let raw = selectListEntry.getAttribute("onchange");
                            onchange = raw.replace("this.value", "'" + option.getAttribute("value") + "'");
                        }
                    });
                });
            }
        }
    });
    expect(onchange).not.toBe(null);
    return onchange;
};

describe("cimmenu", function() {

    let cimsvgInstance;
    let cimmenuInstance;
    let menu = null;

    beforeAll(function(done) {
        JSDOM.fromFile("index.html", { runScripts: "outside-only" }).then(dom => {
            // TODO: remove the stuffing of dom elements into global
            // https://github.com/jsdom/jsdom/wiki/Don%27t-stuff-jsdom-globals-onto-the-Node-global
            global.window = dom.window;
            Object.defineProperty(dom.window.HTMLHtmlElement.prototype, 'clientHeight', {value: 123});
            global.document = dom.window.document;
            global.libcimsvg = require("../cimsvg/lib/libcimsvg.umd.js")
            global.libcimmenu = require("../cimmenu/lib/libcimmenu.umd.js")
            global.currentCimmenu = libcimmenu.currentCimmenu;
            global.currentCimsvg = libcimsvg.currentCimsvg;
            let cimsvg = libcimsvg.cimsvg;
            let svg = dom.window.document.querySelector("#svg")
            let dialog = dom.window.document.querySelector("#dialog")
            spyOn(cimsvg.prototype, "loadXml").and.callFake(loadXml);
            cimsvgInstance = new cimsvg(svg, dialog)
            cimsvgInstance.setTest();
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

    beforeEach(function(done) {
        cimsvgInstance.clearAllData()
        let diagramId = cimsvgInstance.addDiagram();
        cimsvgInstance.setCurrentDiagramId(diagramId);
        spyOn(cimsvgInstance.cimview, "getMouseCoordFromWindow").and.callFake(getMouseCoordFromWindow);
        done();
    });

    it("should be possible to see a diagram in the menu", function(done) {
        spyOn(libcimsvg.cimxml, "getDOM").and.callFake(getDOM);
        spyOn(libcimsvg.cimxml, "isElementNode").and.callFake(isElementNode);
        cimsvgInstance.setFileCount(1);
        fs.readFile("test/grid-data/Components/EnergyConsumer/entsoe.xml", 'utf8', (err, data) => {
            expect(err).toBe(null);
            cimsvgInstance.loadFile(data);
            let diagramObjects = cimsvgInstance.getObjectsOfType("cim:Diagram");
            let firstDiagram = diagramObjects[Object.keys(diagramObjects)[0]];
            cimmenuInstance.populateDiagramComponents();
            let diagramMenuList = menu.querySelectorAll('.diagrams-panel');
            expect(diagramMenuList.length).not.toBe(0);
            diagramMenuList.forEach((diagramMenu) => {
                let query = '#' + firstDiagram['pintura:rdfid'] + '-visibility-icon';
                let visibilitySpan = diagramMenu.querySelector(query);
                expect(visibilitySpan).not.toBe(null);
            });
            done();
        });
    });

    it("should be possible to see a type in the diagram dropdown list", function(done) {
        spyOn(libcimsvg.cimxml, "getDOM").and.callFake(getDOM);
        spyOn(libcimsvg.cimxml, "isElementNode").and.callFake(isElementNode);
        cimsvgInstance.setFileCount(1);
        fs.readFile("test/grid-data/Components/EnergyConsumer/entsoe.xml", 'utf8', (err, data) => {
            expect(err).toBe(null);
            cimsvgInstance.loadFile(data);
            let diagramObjects = cimsvgInstance.getObjectsOfType("cim:Diagram");
            let firstDiagram = diagramObjects[Object.keys(diagramObjects)[0]];
            let energyConsumerObjects = cimsvgInstance.getObjectsOfType("cim:EnergyConsumer");
            let firstEnergyConsumer = energyConsumerObjects[Object.keys(energyConsumerObjects)[0]];
            cimmenuInstance.showDiagramComponentList(firstDiagram['pintura:rdfid'], "cim:EnergyConsumer");
            let diagramAccordion = menu.querySelector("#" + firstDiagram['pintura:rdfid'] + "-accordion");
            let typeSelector = ".cimEnergyConsumer-li";
            checkClassExists(diagramAccordion, typeSelector);
            done();
        });
    });

    it("should be possible to see an object in the component list", function(done) {
        spyOn(libcimsvg.cimxml, "getDOM").and.callFake(getDOM);
        spyOn(libcimsvg.cimxml, "isElementNode").and.callFake(isElementNode);
        cimsvgInstance.setFileCount(1);
        fs.readFile("test/grid-data/Components/EnergyConsumer/entsoe.xml", 'utf8', (err, data) => {
            expect(err).toBe(null);
            cimsvgInstance.loadFile(data);
            let diagramObjects = cimsvgInstance.getObjectsOfType("cim:Diagram");
            let firstDiagram = diagramObjects[Object.keys(diagramObjects)[0]];
            let energyConsumerObjects = cimsvgInstance.getObjectsOfType("cim:EnergyConsumer");
            let firstEnergyConsumer = energyConsumerObjects[Object.keys(energyConsumerObjects)[0]];
            cimmenuInstance.showDiagramComponentList(firstDiagram['pintura:rdfid'], "cim:EnergyConsumer");
            cimmenuInstance.populateComponentsListForDiagramAndComponentType(
                firstDiagram['pintura:rdfid'], "cim:EnergyConsumer", firstEnergyConsumer['pintura:rdfid']);
            let componentsPanel = menu.querySelectorAll(".components-panel")[0];
            let typeSelector = "#" + firstEnergyConsumer['pintura:rdfid'] + "-components-panel-button";
            checkIdExists(componentsPanel, typeSelector);
            done();
        });
    });

    it("should be possible to see attributes for an object", function(done) {
        spyOn(libcimsvg.cimxml, "getDOM").and.callFake(getDOM);
        spyOn(libcimsvg.cimxml, "isElementNode").and.callFake(isElementNode);
        cimsvgInstance.setFileCount(1);
        fs.readFile("test/grid-data/Components/EnergyConsumer/entsoe.xml", 'utf8', (err, data) => {
            expect(err).toBe(null);
            cimsvgInstance.loadFile(data);
            let energyConsumerObjects = cimsvgInstance.getObjectsOfType("cim:EnergyConsumer");
            let firstEnergyConsumer = energyConsumerObjects[Object.keys(energyConsumerObjects)[0]];
            cimmenuInstance.populateAttributes("cim:EnergyConsumer",  firstEnergyConsumer['pintura:rdfid']);
            let attributesPanel = menu.querySelectorAll(".attributes-panel")[0];
            checkSelectedAttributeDropdownHasValue(attributesPanel, "LoadResponse", "L-1230804819");
            done();
        });
    });

    it("should be possible to add a candidate attribute for an object", function(done) {
        spyOn(libcimsvg.cimxml, "getDOM").and.callFake(getDOM);
        spyOn(libcimsvg.cimxml, "isElementNode").and.callFake(isElementNode);
        cimsvgInstance.setFileCount(1);
        fs.readFile("test/grid-data/Components/EnergyConsumer/entsoe.xml", 'utf8', (err, data) => {
            expect(err).toBe(null);
            cimsvgInstance.loadFile(data);
            let energyConsumerObjects = cimsvgInstance.getObjectsOfType("cim:EnergyConsumer");
            let firstEnergyConsumer = energyConsumerObjects[Object.keys(energyConsumerObjects)[0]];
            cimmenuInstance.populateAttributes("cim:EnergyConsumer",  firstEnergyConsumer['pintura:rdfid']);
            let attributesPanel = menu.querySelectorAll(".attributes-panel")[0];
            let onclick = getOnclickFromAttributeButtonWithText(attributesPanel, "LoadResponse", " + ");
            expect(onclick).not.toBe(null);
            eval(onclick);
            checkAttributeDropdownExistsWithValue(attributesPanel, "LoadResponse", "cim:LoadResponseCharacteristic1");
            done();
        });
    });

    it("should be possible to update an attribute for an object", function(done) {
        spyOn(libcimsvg.cimxml, "getDOM").and.callFake(getDOM);
        spyOn(libcimsvg.cimxml, "isElementNode").and.callFake(isElementNode);
        cimsvgInstance.setFileCount(1);
        fs.readFile("test/grid-data/Components/EnergyConsumer/entsoe.xml", 'utf8', (err, data) => {
            expect(err).toBe(null);
            cimsvgInstance.loadFile(data);
            let energyConsumerObjects = cimsvgInstance.getObjectsOfType("cim:EnergyConsumer");
            let firstEnergyConsumer = energyConsumerObjects[Object.keys(energyConsumerObjects)[0]];
            cimmenuInstance.populateAttributes("cim:EnergyConsumer",  firstEnergyConsumer['pintura:rdfid']);
            let attributesPanel = menu.querySelectorAll(".attributes-panel")[0];
            /* Add a new load response characteristic */
            let onclick = getOnclickFromAttributeButtonWithText(attributesPanel, "LoadResponse", " + ");
            expect(onclick).not.toBe(null);
            eval(onclick);
            /* Select the response characteristic we just created */
            onclick = getOnchangeFromOptionWithText(attributesPanel, "LoadResponse", "cim:LoadResponseCharacteristic1");
            expect(onclick).not.toBe(null);
            eval(onclick);
            /* Check that the new response characteristic is selected */
            cimmenuInstance.populateAttributes("cim:EnergyConsumer",  firstEnergyConsumer['pintura:rdfid']);
            checkSelectedAttributeDropdownHasValue(attributesPanel, "LoadResponse", "cim:LoadResponseCharacteristic1");
            done();
        });
    });
});

