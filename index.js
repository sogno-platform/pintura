

cimsvg.init(document.getElementById("svg"), document.getElementById("sidebar"));
cimsvg.addRawXML(document.getElementById("cim-xml-sidebar"));
cimsvg.addPinturaData(document.getElementById("pintura-data-sidebar"));
document.getElementById("fileopen").addEventListener('change', readFile, false);

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
        cimview.pan({ x: -10, y: 0 });
    }
    /* up key */
    else if (evt.keyCode == 38) {
        cimview.pan({ x: 0, y: -10 });
    }
    /* right key */
    else if (evt.keyCode == 39) {
        cimview.pan({ x: 10, y: 0 });
    }
    /* down key */
    else if (evt.keyCode == 40) {
        cimview.pan({ x: 0, y: 10 });
    }
};
var onMouseDown = function(){
};
var onMouseUp = function(evt){
    let id = evt.currentTarget.id.slice(0,-5);
    let type = evt.currentTarget.parentElement.getAttribute("type");
    populateAttributes(type, id);
    showContainer('component-attributes', null, 'true');
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
    console.log(oldClass1)
    console.log(oldClass2)
    console.log(document.getElementById(container))
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
    console.log(elem.classList)
    console.log(document.getElementById(container))
};
var showContainer = function(container, icon, show="false"){
    var x = document.getElementById(container);
    var y = document.getElementById(icon);
    if ((show == "true") || (x.style.display == "") || (x.style.display == "none")) {
        x.style.display = "block";
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
function readFile(e) {
    var files = e.target.files;
    if (files) {
        cimsvg.setFileCount(files.length);
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
    cimsvg.loadFile(contents);
};
function populateAttributes(type, id) {
    cimmenu.populateAttributes(type, id);
};

