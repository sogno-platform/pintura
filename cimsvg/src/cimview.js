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

/* The viewport doesn't change. That is the width / height of the parent container.
 * The viewbox does change. That must always have the same ratio as the view box, so
 * that the grid squares are still square and not rectangles. However, we need to be
 * able to pan and zoom within the viewbox. In order to pan we will add an offset to
 * the viewbox's x and y co-ordinates. In order to zoom we will apply a zoom factor
 * to the viewbox's width and height values. This will be calculated from the centre
 * of the viewbox.
 */
class cimview {
    constructor(svg) {
        this.svgNode = svg;
        this.centre = { "x": 0, "y": 0 };
        this.zoomLevel = 0.9;
        this.setViewBox(this.calculateViewBox());
        this.dragPoint = null;
        this.moved = false;
    }

    /*
     * Calculate the view box after a change has occured. Nothing should change except
     * the values in the view box.
     *
     */
    calculateViewBox() {
        let viewPort = { "width": this.svgNode.clientWidth, "height": this.svgNode.clientHeight };
        let zoomedWidth = Math.trunc(viewPort.width * this.zoomLevel).toString();
        let zoomedHeight = Math.trunc(viewPort.height * this.zoomLevel).toString();
	let halfHeight = zoomedHeight/2;
        let halfWidth = zoomedWidth/2;
        let viewBox = { "x": this.centre.x - halfWidth, "y": this.centre.y - halfHeight, "height": zoomedHeight, "width": zoomedWidth };
        return viewBox;
    }

    resize(width, height) {
        let viewPortWidth = width.toString();
        let viewPortHeight = height.toString();
        this.svgNode.setAttribute("width", viewPortWidth);
        this.svgNode.setAttribute("height", viewPortHeight);
        this.setViewBox(this.calculateViewBox());
    }

    fit() {
        let currentDiagramRect;
        let diagramList = this.svgNode.querySelectorAll(".diagrams");
        if (diagramList.length > 0) {
            currentDiagramRect = cimview.convertBoundaryToRect(diagramList[0].getBBox());
        }
        diagramList.forEach(function(diagram) {
            let candidateBoundary = diagram.getBBox();
            let candidateRect = cimview.convertBoundaryToRect(candidateBoundary);
            if (currentDiagramRect.left > candidateBoundary.left) {
                currentDiagramRect.left = candidateBoundary.left;
            }
            if (currentDiagramRect.bottom > candidateBoundary.bottom) {
                currentDiagramRect.bottom = candidateBoundary.bottom;
            }
            if (currentDiagramRect.right < candidateBoundary.right) {
                currentDiagramRect.right = candidateBoundary.right;
            }
            if (currentDiagramRect.top < candidateBoundary.top) {
                currentDiagramRect.top = candidateBoundary.top;
            }
        });
        let diagramBoundary = cimview.convertRectToBoundary(currentDiagramRect);
        let halfDiagramBoundaryHeight = diagramBoundary.height / 2;
        let halfDiagramBoundaryWidth = diagramBoundary.width / 2;
        this.centre.x = diagramBoundary.x + halfDiagramBoundaryWidth;
        this.centre.y = diagramBoundary.y + halfDiagramBoundaryHeight;
        let viewPortHeight = this.svgNode.clientHeight;
	let viewPortWidth = this.svgNode.clientWidth;
        let heightZoomLevel = diagramBoundary.height / viewPortHeight;
        this.zoomLevel = Math.round(heightZoomLevel * 10) / 10;
        this.zoomLevel += 0.1;
        let viewBox = this.calculateViewBox();
        this.setViewBox(viewBox);
    }

    zoomIn() {
	this.zoomLevel -= 0.1;
        this.setViewBox(this.calculateViewBox());
    }

    zoomOut() {
	this.zoomLevel += 0.1;
        this.setViewBox(this.calculateViewBox());
    }

    pan(point, zoomMultiplier=true) {
        let xDelta = point.x;
        let yDelta = point.y;
        this.centre.x += xDelta;
        this.centre.y += yDelta;
        this.setViewBox(this.calculateViewBox());
    }

    static noInputFocus(evt) {
        if (evt.target.nodeName.toUpperCase() === "BODY" || evt.target.id.toUpperCase() === "BG") {
            return true;
        }
        return false;
    }

    getMouseCoord(evt) {
        let position = this.svgNode.createSVGPoint();
        position.x = (Number(evt.clientX));
        position.y = (Number(evt.clientY));
        return position.matrixTransform(this.screenCTM);
    }

    wheelEvent(mouseEvent) {
        if (cimview.noInputFocus(mouseEvent)) {
            if (mouseEvent.deltaY > 0) {
                this.zoomIn();
            }
            else {
                this.zoomOut();
            }
        }
    }

    mouseDown(mouseEvent) {
        if (cimview.noInputFocus(mouseEvent)) {
            this.dragPoint = this.getMouseCoord(mouseEvent);
        }
    }

    mouseUp(mouseEvent) {
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
    }

    mouseMove(mouseEvent) {
        if (cimview.noInputFocus(mouseEvent)) {
            if(this.dragPoint) {
                let newDragPoint = this.getMouseCoord(mouseEvent);
                let deltaPoint = this.svgNode.createSVGPoint();
                deltaPoint.x = this.dragPoint.x - newDragPoint.x;
                deltaPoint.y = this.dragPoint.y - newDragPoint.y;
                this.pan(deltaPoint, false);
            }
        }
    }

    mouseLeave(mouseEvent) {
        if (cimview.noInputFocus(mouseEvent)) {
            if(this.dragPoint) {
                this.dragPoint = null;
            }
        }
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

    updateStyle(name, value) {
        if(currentCimsvg()) {
            currentCimsvg().updateStyle(name, value);
        }
    }

    calculateGridSize(viewRect){
        let debug = true;
        let provisionalGridSize = viewRect.width / 5;
        let roundedGridSize = parseInt(provisionalGridSize / 100) * 100;
        let fontInt = parseInt(provisionalGridSize / 20);
        this.updateStyle(".gridLabel", "{ font-size: " + fontInt.toString() + "px; }");
        if (roundedGridSize < 100) {
            return 100;
        }
        return roundedGridSize;
    }

    createGrid() {
        this.clearGrid();
        let viewBoxRect = this.getViewBox();
        let gridSize = this.calculateGridSize(viewBoxRect);
        /* horizontal lines */
        let startOffsetY = this.calculateStartOffset(viewBoxRect.y, gridSize);
        let startOffsetX = this.calculateStartOffset(viewBoxRect.x, gridSize);
        for (let i=0; i<(viewBoxRect.height/gridSize); i++) {
            let yval = i*gridSize+startOffsetY;
            this.createGridLine(viewBoxRect.x, yval, viewBoxRect.width+viewBoxRect.x, yval);
            this.createLocationMarker(yval+"y", yval.toString(), viewBoxRect.x+(gridSize / 15), yval+(gridSize / 10));
        }
        /* vertical lines */
        for (let i=0; i<(viewBoxRect.width/gridSize); i++) {
            let xval = i*gridSize+startOffsetX;
            this.createGridLine(xval, viewBoxRect.y, xval, viewBoxRect.height+viewBoxRect.y);
            this.createLocationMarker(xval+"x", xval.toString(), xval+(gridSize / 15), viewBoxRect.y+(gridSize / 10));
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

    static convertBoundaryToRect(boundary) {
        return { "left": parseFloat(boundary.x),
		 "right": boundary.x + boundary.width,
                 "top": boundary.y + boundary.height,
                 "bottom": boundary.y };
    }

    static convertRectToBoundary(rect) {
        return { "x": parseFloat(rect.left),
		 "y": rect.bottom,
                 "width": rect.right - rect.left,
                 "height": rect.top - rect.bottom };
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
        this.createGrid();
        this.screenCTM = svg.getScreenCTM().inverse();
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
