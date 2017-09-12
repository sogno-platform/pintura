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

var cimview = cimview || (function() {

    var svgNode = null;

    var zoomSizes = [
        { width: 1024, height: 768 },
        { width: 920, height: 690 },
        { width: 816, height: 612 },
        { width: 712, height: 532 },
        { width: 608, height: 456 },
        { width: 504, height: 378 },
        { width: 400, height: 300 },
    ];

    var zoomLevel = 0;

    var zoomToLevel = function(level) {
        zoomLevel = level;
        let rect = getViewBox();
        centreOfGrid = { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
        rect.width = zoomSizes[level].width;
        rect.height = zoomSizes[level].height;
        rect.x = centreOfGrid.x - (rect.width / 2);
        rect.y = centreOfGrid.y - (rect.height / 2);
        setViewBox(rect);
    };

    var zoomOut = function() {
        let level = zoomLevel-1;
        if (level < 0) {
            level = 0;
        }
        zoomToLevel(level);
        //document.getElementById("zoomer").value=level;
    };

    var zoomIn = function() {
        let level = zoomLevel+1;
        let lastIndex = zoomSizes.length-1;
        if (level > lastIndex) {
            level = lastIndex;
        }
        zoomToLevel(level);
        //document.getElementById("zoomer").value=level;
    };

    var pan = function(point) {
        let rect = getViewBox();
        rect.x += point.x;
        rect.y += point.y;
        setViewBox(rect);
    };

    var clearGrid = function() {
        let oldLines = Array.from(svgNode.getElementsByClassName("gridLine"));
        oldLines.forEach(function(key) {
            key.remove();
        });
        let oldLabels = Array.from(svgNode.getElementsByClassName("gridLabel"));
        oldLabels.forEach(function(key) {
            key.remove();
        });
    };

    var createLocationMarker = function(id, loc, x, y) {
        let grid = svgNode.getElementById("grid");
        let textAttributes = {
            "x": x,
            "y": y,
            "class": "gridLabel",
            "id": id,
        };
        let text = createSvgTag("text", textAttributes);
        text.innerHTML = loc;
        grid.appendChild(text);
    };

    var createGridLine = function(x1, y1, x2, y2) {
        let grid = svgNode.getElementById("grid");
        let lineAttributes = {
            "x1": x1,
            "x2": x2,
            "y1": y1,
            "y2": y2,
            "class": "gridLine",
        };
        let line = createSvgTag("line", lineAttributes);
        grid.appendChild(line);
    };

    /*
     * Create a tag in the svg namespace
     */
    const createSvgTag = function(tagname, attributes) {
        let xmlns="http://www.w3.org/2000/svg";
        let newTag = svgNode.ownerDocument.createElementNS(xmlns, tagname);
        for (let key in attributes) {
            newTag.setAttribute(key, attributes[key]);
        }
        return newTag;
    };

    var calculateStartOffset = function(distanceFromOrigin, gridSize) {
        let offset;
        if (distanceFromOrigin < 0) {
            offset = distanceFromOrigin - ( distanceFromOrigin % gridSize );
        }
        else {
            offset = distanceFromOrigin + gridSize - ( distanceFromOrigin % gridSize );
        }
        return offset;
    };

    var createGrid = function() {
        clearGrid();
        let gridSize = 100;
        let viewBoxRect = getViewBox();
        /* horizontal lines */
        let startOffsetY = calculateStartOffset(viewBoxRect.y, gridSize);
        let startOffsetX = calculateStartOffset(viewBoxRect.x, gridSize);
        for (let i=0; i<(viewBoxRect.height/gridSize); i++) {
            let yval = i*gridSize+startOffsetY;
            createGridLine(viewBoxRect.x, yval, viewBoxRect.width+viewBoxRect.x, yval);
            createLocationMarker(yval+"y", yval.toString(), viewBoxRect.x+10, yval+20);
        }
        /* vertical lines */
        for (let i=0; i<(viewBoxRect.width/gridSize); i++) {
            let xval = i*gridSize+startOffsetX;
            createGridLine(xval, viewBoxRect.y, xval, viewBoxRect.height+viewBoxRect.y);
            createLocationMarker(xval+"x", xval.toString(), xval+10, viewBoxRect.y+20);
        }
    };

    var getViewBox = function() {
        let rect = {};
        viewBoxString = svgNode.getAttribute("viewBox");
        viewBoxElements = viewBoxString.split(" ");
        rect.x = parseInt(viewBoxElements[0]);
        rect.y = parseInt(viewBoxElements[1]);
        rect.width = parseInt(viewBoxElements[2]);
        rect.height = parseInt(viewBoxElements[3]);
        return rect;
    };

    var setViewBox = function(rect) {
        let viewBoxString = rect.x+" "+rect.y+" "+rect.width+" "+rect.height;
        svgNode.setAttribute("viewBox", viewBoxString);
        let bg = svgNode.getElementById("backing");
        bg.setAttribute("x", rect.x);
        bg.setAttribute("y", rect.y);
        bg.setAttribute("width", "100%");
        bg.setAttribute("height", "100%");
        createGrid();
    };

    var clearDisplay = function() {
        while (svgNode.firstChild) {
            svgNode.removeChild(svgNode.firstChild);
        }
    };

    var hideAllLabels = function() {
        Array.from(svgNode.getElementsByClassName("svglabel")).forEach(function (label) {
            label.setAttributeNS(null, "visibility", "hidden");
        });
    };

    var init = function(svg) {
        svgNode = svg; 
        let rect = { x: "0", y: "0", width: "1024", height: "768" };
        setViewBox(rect);
    };

    /*
     * Specify the functions that this module exports
     */
    return {
        init,
        pan,
        zoomIn,
        zoomOut,
    };

}());

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        cimview
    }
}
