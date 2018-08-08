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

let cimsvgClass = new cimsvg.cimSVGclass();
cimsvgClass.init(
    document.getElementById("svg"),
    document.getElementById("sidebar"),
    document.getElementById("floating-menu"),
);
let cimsvgClass2 = new cimsvg.cimSVGclass();
cimsvgClass2.init(
    document.getElementById("svg2"),
    document.getElementById("sidebar"),
    document.getElementById("floating-menu"),
);
cimsvg.cimSVGclass.setCimsvg(cimsvgClass2);
cimcontextmenu.init(document.getElementById("context-menu"), "context-menu")
cimcontextmenu.resizeListener(window);
cimcontextmenu.keyUpListener(window);

document.oncontextmenu = function(e){
    if(e.preventDefault != undefined) {
        e.preventDefault();
    }
    if(e.stopPropagation != undefined) {
        e.stopPropagation();
    }
}

document.getElementById("fileopen").addEventListener('change', readFile, false);

var updateComponent = function(type, id, attribute, value) {
    cimsvgClass.updateComponent(type, id, attribute, value)
}

var updateComponentRDF = function(type, id, attribute, value) {
    cimsvgClass.updateComponentRDF(type, id, attribute, value)
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
        cimview.zoomIn();
    }
    /* ctrl + down key */
    else if (evt.ctrlKey && (evt.keyCode == 40)) {
        cimview.zoomOut();
    }
    /* left key */
    else if (evt.keyCode == 37) {
        if (noInputFocus(evt)) {
            cimview.pan({ x: -10, y: 0 });
        }
    }
    /* up key */
    else if (evt.keyCode == 38) {
        if (noInputFocus(evt)) {
            cimview.pan({ x: 0, y: -10 });
        }
    }
    /* right key */
    else if (evt.keyCode == 39) {
        if (noInputFocus(evt)) {
            cimview.pan({ x: 10, y: 0 });
        }
    }
    /* down key */
    else if (evt.keyCode == 40) {
        if (noInputFocus(evt)) {
            cimview.pan({ x: 0, y: 10 });
        }
    }
    /* spacebar */
    else if (evt.keyCode == 32) {
        if (noInputFocus(evt)) {
            cimview.fit();
        }
    }
};
var onMouseDown = function(){
};
var onBodyMouseUp = function(evt){
    cimcontextmenu.toggleMenuOff();
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
        cimcontextmenu.setComponent(type, id);
        let pos = {x: evt.clientX, y: evt.clientY};
        cimcontextmenu.positionMenu(pos, "context-menu");
        cimcontextmenu.toggleMenuOn("context-menu")
    }
    else {
        let type = evt.currentTarget.parentElement.getAttribute("type");
        cimsvg.cimSVGclass.getCimsvg().populateAttributes(type, id);
        cimsvg.cimSVGclass.getCimsvg().showFloatingMenu();
        cimcontextmenu.toggleMenuOff();
    }
    evt.stopPropagation();
};
var onMouseMove = function(){
};
var onMouseOver = function(evt){
    let id = evt.currentTarget.id.slice(0,-5);
    let txt = document.getElementById(id+"-txt0");
    txt.classList.add("svglabel-high");
};
var onMouseLeave = function(evt){
    let id = evt.currentTarget.id.slice(0,-5);
    let txt = document.getElementById(id+"-txt0");
    txt.classList.remove("svglabel-high");
};
var addClass = function(container, newClass, oldClass1, oldClass2) {
    elem = document.getElementById(container);
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
var hideContainer = function(container) {
    var x = document.getElementById(container);
    x.style.display = "none";
};
var showContainer = function(container, icon, show="false", newClass="block"){
    var x = document.getElementById(container);
    var y = document.getElementById(icon);
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
function doSearch(inputId, textareaId) {
    var searchStr=document.getElementById(inputId).value;
    var box=document.getElementById(textareaId);
    var index=box.value.indexOf(searchStr);
    var length=box.value.length*1.0;
    var startIndexStr=index;
    var endIndexStr=index+searchStr.length;

    box.setSelectionRange(index, index);
    //box.setSelectionRange(startIndexStr, endIndexStr);//searchStr.length);
    box.blur();
    box.focus();
    box.setSelectionRange(startIndexStr, endIndexStr);//searchStr.length);
    //box.scrollTop=(index/length)*100;
};
function saveFile(data) {
    let filesave = document.getElementById("filesave")
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
    element.setAttribute('download', "pinturaGrid.xml");
    element.style.display = 'none';
    filesave.appendChild(element);
    element.click();
    filesave.removeChild(element);
}
function readFile(e) {
    var files = e.target.files;
    if (files) {
        cimxml.clearXmlData()
        cimsvgClass.setFileCount(files.length);
        for (var i=0, f; f=files[i]; i++) {
            if (!f) {
                return;
            }
            var reader = new FileReader();
                reader.onload = function(e) {
                var contents = e.target.result;
                loadContents(contents);
            };
            reader.readAsText(f);
        }
    }
};
function loadContents(contents) {
    cimsvgClass.loadFile(contents);
};
function populateAttributes(node, type, id) {
    cimmenu.cimmenuClass.populateAttributes(node, type, id);
};
function populateAttributesIdOnly(node, id) {
    cimmenu.cimmenuClass.populateAttributesIdOnly(node, id);
};

if (typeof module !== 'undefined' && module.exports) {
    global.showContainer = showContainer;
    global.onMouseLeave = onMouseLeave;
    global.onMouseOver = onMouseOver;
    global.onMouseUp = onMouseUp;
    global.onMouseDown = onMouseDown;
    global.onMouseMove = onMouseMove;
};
