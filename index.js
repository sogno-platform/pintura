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
    document.getElementById("sidebar"),
    document.getElementById("floating-menu"),
    document.getElementById("all-components"),
);
cimsvg.setCimsvg(cimsvgInstance);
let contextMenu = new contextmenu(document.getElementById("context-menu"), "context-menu")
contextMenu.resizeListener(window);
contextMenu.keyUpListener(window);
cimsvgInstance.setContextMenu(contextMenu);

let urlTokens = window.location.href.split('?')
let pairs = urlTokens.slice(1)
let params = {}
for (let index in pairs) {
    let pair = pairs[index]
    let param = pair.split('=');
    if (param.length == 2){
        params[param[0]] = param[1];
    }
}
if ("uri" in params){
    let uri=params['uri'];
    cimsvgInstance.downloadUri(uri);
}
document.oncontextmenu = function(e){
    if(e.preventDefault != undefined) {
        e.preventDefault();
    }
    if(e.stopPropagation != undefined) {
        e.stopPropagation();
    }
}
const readFile=function(e) {
    let files = e.target.files;
    if (files) {
        currentCimsvg().clearAllData()
        currentCimsvg().setFileCount(files.length);
        Array.from(files).forEach((file)=>{
            if (!file) {
                return;
            }
            let reader = new FileReader();
            reader.onload = function(e) {
                let contents = e.target.result;
                currentCimsvg().loadFile(contents);
            };
            reader.readAsText(file);
        });
    }
};

var updateComponent = function(type, id, attribute, value) {
    currentCimsvg().updateComponent(type, id, attribute, value)
}

var updateComponentRDF = function(type, id, attribute, value) {
    currentCimsvg().updateComponentRDF(type, id, attribute, value)
}

var noInputFocus = function(evt) {
    if (evt.target.nodeName === "BODY") {
        return true
    }
    return false
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    let key_press = String.fromCharCode(evt.charCode || evt.keyCode);

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
var onMouseDown = function(){
};
var onBodyMouseUp = function(evt){
    contextMenu.toggleMenuOff();
};
var onMouseUp = function(evt){
    let rightclick;
    if (evt.which) {
        rightclick = (evt.which == 3);
    }
    else if (evt.button) {
        rightclick = (evt.button == 2);
    }
    let id = evt.currentTarget.id.slice(0,-5);
    let type = evt.currentTarget.parentElement.getAttribute("type");
    if (rightclick) {
        contextMenu.setComponent(type, id);
        let pos = {x: evt.clientX, y: evt.clientY};
        contextMenu.positionMenu(pos, "context-menu");
        contextMenu.toggleMenuOn("context-menu")
    }
    else {
        let type = evt.currentTarget.parentElement.getAttribute("type");
        currentCimsvg().populateAttributes(type, id);
        currentCimsvg().showFloatingMenu();
        contextMenu.toggleMenuOff();
    }
    evt.stopPropagation();
};
var onMouseMove = function(){
};
var onMouseOver = function(evt){
    let id = evt.currentTarget.id.slice(0,-5);
    let txt = document.getElementById(id+"-txt0");
    let bbox = txt.getBBox();
    let bg = document.getElementById(id+"-bg0");

    bg.setAttribute("x", bbox.x - 3);
    bg.setAttribute("y", bbox.y - 3);
    bg.setAttribute("width", bbox.width + 6);
    bg.setAttribute("height", bbox.height + 6);

    txt.classList.add("svglabel-high");
    bg.classList.add("svglabel-high");
};
var onMouseLeave = function(evt){
    let id = evt.currentTarget.id.slice(0,-5);
    let txt = document.getElementById(id+"-txt0");
    let bg = document.getElementById(id+"-bg0");
    txt.classList.remove("svglabel-high");
    bg.classList.remove("svglabel-high");
};
var addClass = function(container, newClass, oldClass1, oldClass2) {
    let elem = document.getElementById(container);
    if (oldClass1 != '')
    {
        elem.classList.remove(oldClass1)
    }
    if (oldClass2 != '')
    {
        elem.classList.remove(oldClass2)
    }
    elem.classList.add(newClass)
};
let hideContainer = function(container) {
    let x = document.getElementById(container);
    x.style.display = "none";
};
let showContainer = function(container, icon, show="false", newClass="block"){
    let x = document.getElementById(container);
    let y = document.getElementById(icon);
    if ((show == "true") || (x.style.display == "") || (x.style.display == "none")) {
        x.style.display = newClass;
        if (y != undefined) {
            y.innerHTML = '&nbsp;&darr;';
        }
    } else {
        x.style.display = "none";
        if (y != undefined) {
            y.innerHTML = '&nbsp;&crarr;';
        }
    }
};
const saveFile=function(data) {
    let filesave = document.getElementById("filesave")
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
    element.setAttribute('download', "pinturaGrid.xml");
    element.style.display = 'none';
    filesave.appendChild(element);
    element.click();
    filesave.removeChild(element);
}

function populateAttributes(node, type, id) {
    cimmenu.populateAttributes(node, type, id);
};
function populateAttributesIdOnly(node, id) {
    cimmenu.populateAttributesIdOnly(node, id);
};
if (typeof module !== 'undefined' && module.exports) {
    global.showContainer = showContainer;
    global.onMouseLeave = onMouseLeave;
    global.onMouseOver = onMouseOver;
    global.onMouseUp = onMouseUp;
    global.onMouseDown = onMouseDown;
    global.onMouseMove = onMouseMove;
};
