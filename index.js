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

let cimsvg = libcimsvg.cimsvg;
let cimsvgInstance = new cimsvg(
    document.getElementById("svg"),
    document.getElementById("new-component-dialog")
);

let urlTokens = window.location.href.split('?');
let pairs = urlTokens.slice(1);
let params = {};

for (let index in pairs) {
    let pair = pairs[index];
    let param = pair.split('=');
    if (param.length == 2) {
        params[param[0]] = param[1];
    }
}

if ("uri" in params) {
    let uri=params.uri;
    cimsvgInstance.downloadUri(uri);
}

document.oncontextmenu = function(e) {
    if (e.preventDefault != undefined) {
        e.preventDefault();
    }
    if (e.stopPropagation != undefined) {
        e.stopPropagation();
    }
};

const noInputFocus = function(evt) {
    if (evt.target.nodeName === "BODY") {
        return true;
    }
    return false;
};

document.onkeydown = function(evt) {
    evt = evt || window.event;

    /* ctrl + up key */
    if (evt.ctrlKey && (evt.keyCode == 38)) {
        currentCimsvg().cimview.zoomIn();
    }
    /* ctrl + down key */
    else if (evt.ctrlKey && (evt.keyCode == 40)) {
        currentCimsvg().cimview.zoomOut();
    }
    /* left key */
    else if (evt.keyCode == 37) {
        if (noInputFocus(evt)) {
            currentCimsvg().cimview.pan({ x: -10, y: 0 });
        }
    }
    /* up key */
    else if (evt.keyCode == 38) {
        if (noInputFocus(evt)) {
            currentCimsvg().cimview.pan({ x: 0, y: -10 });
        }
    }
    /* right key */
    else if (evt.keyCode == 39) {
        if (noInputFocus(evt)) {
            currentCimsvg().cimview.pan({ x: 10, y: 0 });
        }
    }
    /* down key */
    else if (evt.keyCode == 40) {
        if (noInputFocus(evt)) {
            currentCimsvg().cimview.pan({ x: 0, y: 10 });
        }
    }
    /* spacebar */
    else if (evt.keyCode == 32) {
        if (noInputFocus(evt)) {
            currentCimsvg().cimview.fit();
        }
    }
};

/* jshint ignore:start */
const onMouseUp = function(evt){
    if (currentCimmenu()) {
        currentCimmenu().onMouseUp(evt);
    }
};
const onBodyMouseUp = function(evt){
    contextMenu.toggleMenuOff();
};
/* jshint ignore:end */

