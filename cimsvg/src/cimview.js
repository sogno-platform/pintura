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

class cimview {

    constructor(svg) {
        this.svgNode = svg;
        let rect = { x: "-100", y: "-100", width: "1024", height: "768" };
        this.setViewBox(rect);
        this.zoomSizes = [
            { width: 1024, height: 768 },
            { width: 920, height: 690 },
            { width: 816, height: 612 },
            { width: 712, height: 532 },
            { width: 608, height: 456 },
            { width: 504, height: 378 },
            { width: 400, height: 300 },
        ];
        this.zoomLevel = 0;
    }

    zoomToLevel(level) {
        this.zoomLevel = level;
        let rect = this.getViewBox();
        let centreOfGrid = { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
        rect.width = this.zoomSizes[level].width;
        rect.height = this.zoomSizes[level].height;
        rect.x = centreOfGrid.x - (rect.width / 2);
        rect.y = centreOfGrid.y - (rect.height / 2);
        this.setViewBox(rect);
    }

    zoomOut() {
        let level = this.zoomLevel-1;
        if (level < 0) {
            level = 0;
        }
        this.zoomToLevel(level);
        //document.getElementById("zoomer").value=level;
    }

    zoomIn() {
        let level = this.zoomLevel+1;
        let lastIndex = this.zoomSizes.length-1;
        if (level > lastIndex) {
            level = lastIndex;
        }
        this.zoomToLevel(level);
        //document.getElementById("zoomer").value=level;
    }

    pan(point) {
        let rect = this.getViewBox();
        rect.x += point.x;
        rect.y += point.y;
        this.setViewBox(rect);
    }

    clearGrid() {
        let oldLines = this.svgNode.querySelectorAll(".gridLine");
        oldLines.forEach(function(key) {
            key.remove();
        });
        let oldLabels = this.svgNode.querySelectorAll(".gridLabel");
        oldLabels.forEach(function(key) {
            key.remove();
        });
    }

    createLocationMarker(id, loc, x, y) {
        let textAttributes = {
            "x": x,
            "y": y,
            "class": "gridLabel",
            "id": id,
        };
        let text = this.createSvgTag("text", textAttributes);
        text.innerHTML = loc;
        let grids = this.svgNode.querySelectorAll(".grid");
        grids.forEach(function(grid) {
            grid.appendChild(text);
        });
    }

    createGridLine(x1, y1, x2, y2) {
        let lineAttributes = {
            "x1": x1,
            "x2": x2,
            "y1": y1,
            "y2": y2,
            "class": "gridLine",
        };
        let line = this.createSvgTag("line", lineAttributes);
        let grids = this.svgNode.querySelectorAll(".grid");
        grids.forEach(function(grid) {
            grid.appendChild(line);
        });
    }

    /*
     * Create a tag in the svg namespace
     */
    createSvgTag(tagname, attributes) {
        let xmlns="http://www.w3.org/2000/svg";
        let newTag = this.svgNode.ownerDocument.createElementNS(xmlns, tagname);
        for (let key in attributes) {
            newTag.setAttribute(key, attributes[key]);
        }
        return newTag;
    }

    calculateStartOffset(distanceFromOrigin, gridSize) {
        let offset;
        if (distanceFromOrigin < 0) {
            offset = distanceFromOrigin - ( distanceFromOrigin % gridSize );
        }
        else {
            offset = distanceFromOrigin + gridSize - ( distanceFromOrigin % gridSize );
        }
        return offset;
    }

    createGrid() {
        this.clearGrid();
        let gridSize = 100;
        let viewBoxRect = this.getViewBox();
        /* horizontal lines */
        let startOffsetY = this.calculateStartOffset(viewBoxRect.y, gridSize);
        let startOffsetX = this.calculateStartOffset(viewBoxRect.x, gridSize);
        for (let i=0; i<(viewBoxRect.height/gridSize); i++) {
            let yval = i*gridSize+startOffsetY;
            this.createGridLine(viewBoxRect.x, yval, viewBoxRect.width+viewBoxRect.x, yval);
            this.createLocationMarker(yval+"y", yval.toString(), viewBoxRect.x+10, yval+20);
        }
        /* vertical lines */
        for (let i=0; i<(viewBoxRect.width/gridSize); i++) {
            let xval = i*gridSize+startOffsetX;
            this.createGridLine(xval, viewBoxRect.y, xval, viewBoxRect.height+viewBoxRect.y);
            this.createLocationMarker(xval+"x", xval.toString(), xval+10, viewBoxRect.y+20);
        }
    }

    /*
     * Convert a point in the window into a point in the svg component.
     */
    getMouseCoordFromWindow(evt) {
        let m = evt.target.getScreenCTM();
        let position = this.svgNode.createSVGPoint();
        position.x = (Number(evt.clientX));
        position.y = (Number(evt.clientY));
        return position.matrixTransform(m.inverse());
    }

    fit() {
        // TODO : this just uses the last diagram, instead of the
        // set of all boundaries. Fine for one diagram.
        let diagramBoundary = null;
        let diagramList = this.svgNode.querySelectorAll(".diagrams");
        diagramList.forEach(function(diagram) {
            diagramBoundary = diagram.getBBox();
        });
        this.setViewBox(diagramBoundary);
    }

    getViewBox() {
        let rect = {};
        this.viewBoxString = this.svgNode.getAttribute("viewBox");
        this.viewBoxElements = this.viewBoxString.split(" ");
        rect.x = parseInt(this.viewBoxElements[0], 10);
        rect.y = parseInt(this.viewBoxElements[1], 10);
        rect.width = parseInt(this.viewBoxElements[2], 10);
        rect.height = parseInt(this.viewBoxElements[3], 10);
        return rect;
    }

    setViewBox(rect) {
        let viewBoxString = rect.x+" "+rect.y+" "+rect.width+" "+rect.height;
        this.svgNode.setAttribute("viewBox", viewBoxString);
        let bg = this.svgNode.querySelectorAll(".backing");
        bg.forEach(function(backing) {
            backing.setAttribute("x", rect.x);
            backing.setAttribute("y", rect.y);
            backing.setAttribute("width", "100%");
            backing.setAttribute("height", "100%");
        });
        this.createGrid();
    }

    clearDisplay() {
        while (this.svgNode.firstChild) {
            this.svgNode.removeChild(this.svgNode.firstChild);
        }
    }

    hideAllLabels() {
        let svglabels = this.svgNode.querySelectorAll(".svglabel");
        svglabels.forEach(function (label) {
            label.setAttributeNS(null, "visibility", "hidden");
        });
    }
}

export default cimview ;
