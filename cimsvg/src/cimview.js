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
            { width: 400, height: 300 }
        ];
        this.zoomLevel = 0;
        this.dragPoint = null;
    }

    static noInputFocus(evt) {
        if (evt.target.nodeName.toUpperCase() === "BODY" || evt.target.nodeName.toUpperCase() === "RECT") {
            return true;
        }
        return false;
    }

    getMouseCoord(evt) {
        let m = evt.target.getScreenCTM();
        let position = this.svgNode.createSVGPoint();
        position.x = (Number(evt.clientX));
        position.y = (Number(evt.clientY));
        return position.matrixTransform(m.inverse());
    }

    addEventListeners(bodyNode) {
        bodyNode.addEventListener("wheel", (mouseEvent) =>{
            if (mouseEvent.deltaY > 0) {
                this.zoomIn();
            }
            else {
                this.zoomOut();
            }
        });
        bodyNode.addEventListener("mousedown", (mouseEvent) =>{
            if (cimview.noInputFocus(mouseEvent)) {
                this.dragPoint = this.getMouseCoord(mouseEvent);
            }
        });
        bodyNode.addEventListener("mouseup", (mouseEvent) =>{
            if (cimview.noInputFocus(mouseEvent)) {
                if(this.dragPoint) {
                    let newDragPoint = this.getMouseCoord(mouseEvent);
                    let deltaPoint = this.svgNode.createSVGPoint();
                    deltaPoint.x = this.dragPoint.x - newDragPoint.x;
                    deltaPoint.y = this.dragPoint.y - newDragPoint.y;
                    this.pan(deltaPoint, false);
                    this.dragPoint = null;
                }
            }
        });
        bodyNode.addEventListener("mousemove", (mouseEvent) =>{
            if (cimview.noInputFocus(mouseEvent)) {
                if(this.dragPoint) {
                    let newDragPoint = this.getMouseCoord(mouseEvent);
                    let deltaPoint = this.svgNode.createSVGPoint();
                    deltaPoint.x = this.dragPoint.x - newDragPoint.x;
                    deltaPoint.y = this.dragPoint.y - newDragPoint.y;
                    this.pan(deltaPoint, false);
                }
            }
        });
        bodyNode.addEventListener("mouseleave", (mouseEvent) =>{
            if (cimview.noInputFocus(mouseEvent)) {
                if(this.dragPoint) {
                    this.dragPoint = null;
                }
            }
        });
        bodyNode.addEventListener("keydown", (keyEvent) =>{
            /* ctrl + up key */
            if (keyEvent.ctrlKey && (keyEvent.keyCode === 38)) {
                currentCimsvg().cimview.zoomIn();
            }
            /* ctrl + down key */
            else if (keyEvent.ctrlKey && (keyEvent.keyCode === 40)) {
                currentCimsvg().cimview.zoomOut();
            }
            /* left key */
            else if (keyEvent.keyCode === 37) {
                if (cimview.noInputFocus(keyEvent)) {
                    currentCimsvg().cimview.pan({ x: -10, y: 0 });
                }
            }
            /* up key */
            else if (keyEvent.keyCode === 38) {
                if (cimview.noInputFocus(keyEvent)) {
                    currentCimsvg().cimview.pan({ x: 0, y: -10 });
                }
            }
            /* right key */
            else if (keyEvent.keyCode === 39) {
                if (cimview.noInputFocus(keyEvent)) {
                    currentCimsvg().cimview.pan({ x: 10, y: 0 });
                }
            }
            /* down key */
            else if (keyEvent.keyCode === 40) {
                if (cimview.noInputFocus(keyEvent)) {
                    currentCimsvg().cimview.pan({ x: 0, y: 10 });
                }
            }
            /* spacebar */
            else if (keyEvent.keyCode === 32) {
                if (cimview.noInputFocus(keyEvent)) {
                    currentCimsvg().cimview.fit();
                }
            }
        });
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

    getProportionalZoomDelta() {
        /* avoids: - zoom delta of 0
	 *         - divide by 0 in calculation */
        if (this.zoomLevel > 10) {
            return parseInt(this.zoomLevel / 10);
        }
        else {
            return 1;
        }
    }

    zoomIn() {
        let proportionalZoomDelta = this.getProportionalZoomDelta();
        let level = this.zoomLevel - proportionalZoomDelta;
        if (level < 0) {
            level = 0;
        }
        this.zoomToLevel(level);
    }

    zoomOut() {
        let proportionalZoomDelta = this.getProportionalZoomDelta();
        let level = this.zoomLevel + proportionalZoomDelta;
        let lastIndex = this.zoomSizes.length-1;
        while (level > lastIndex) {
            let currentWidth = this.zoomSizes[lastIndex].width;
            this.addNewZoomSize(currentWidth);
            lastIndex = this.zoomSizes.length-1;
        }
        this.zoomToLevel(level);
    }

    pan(point, zoomMultiplier=true) {
        let rect = this.getViewBox();
        let xDelta = zoomMultiplier ? (this.zoomLevel * point.x) : point.x;
        let yDelta = zoomMultiplier ? (this.zoomLevel * point.y) : point.y;
        rect.x += xDelta;
        rect.y += yDelta;
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

    addNewZoomSize(currentWidth) {
        let newWidth = currentWidth + 104;
        let newHeight = newWidth * 0.75;
        let zoomSize = {
            width: newWidth,
            height: newHeight
        };
        this.zoomSizes.push(zoomSize);
        return zoomSize;
    }

    getZoomSize(diagramBoundary) {
        let required = {};
        let newZoomSize = {
            width: this.zoomSizes[this.zoomSizes.length-1].width,
            height: this.zoomSizes[this.zoomSizes.length-1].height
        };
        let currentIndex = this.zoomSizes.length-1;
        while (!(required.widthFound && required.heightFound)) {
            newZoomSize = this.addNewZoomSize(newZoomSize.width);
            currentIndex += 1;
            if (newZoomSize.height > diagramBoundary.height) {
                if (!required.heightFound) {
                    required.heightFound = true;
                    required.height = currentIndex;
                }
            }
            if (newZoomSize.width > diagramBoundary.width) {
                if (!required.widthFound) {
                    required.widthFound = true;
                    required.width = currentIndex;
                }
            }
        }
        return required;
    }

    fit() {
        let diagramBoundary = null;
        let diagramList = this.svgNode.querySelectorAll(".diagrams");
        diagramList.forEach(function(diagram) {
            diagramBoundary = diagram.getBBox();
        });
        let required = this.getZoomSize(diagramBoundary);
        let zoomLevel = required.width > required.height ? required.width : required.height;
        this.setViewBox(diagramBoundary);
        this.zoomToLevel(zoomLevel);
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
