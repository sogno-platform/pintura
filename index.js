

cimsvg.init(document.getElementById("svg"), document.getElementById("sidebar"));
cimsvg.addRawXML(document.getElementById("cim-xml-sidebar"));
cimsvg.addPinturaData(document.getElementById("pintura-data-sidebar"));
document.getElementById("fileopen").addEventListener('change', readFile, false);

document.onkeydown = function(evt) {
    evt = evt || window.event;
    let key_press = String.fromCharCode(evt.charCode || evt.keyCode);
    console.log(evt.keyCode);

    /* ctrl + up key */
    if (evt.ctrlKey && (evt.keyCode == 38)) {
        cimview.zoomIn();
    }
    /* ctrl + down key */
    if (evt.ctrlKey && (evt.keyCode == 40)) {
        cimview.zoomOut();
    }
    /* left key */
    if (evt.keyCode == 37) {
        cimview.pan({ x: -50, y: 0 });
    }
    /* up key */
    if (evt.keyCode == 38) {
        cimview.pan({ x: 0, y: -50 });
    }
    /* right key */
    if (evt.keyCode == 39) {
        cimview.pan({ x: 50, y: 0 });
    }
    /* down key */
    if (evt.keyCode == 40) {
        cimview.pan({ x: 0, y: 50 });
    }
};
var onMouseMove = function(){
}
var onMouseOver = function(evt){
    let id = evt.currentTarget.id.slice(0,-5);
    let txt = document.getElementById(id+"-txt0");
    txt.classList.add("svglabel-high");
}
var onMouseLeave = function(evt){
    let id = evt.currentTarget.id.slice(0,-5);
    let txt = document.getElementById(id+"-txt0");
    txt.classList.remove("svglabel-high");
}
var showContainer = function(container, icon, hide="false"){
    var x = document.getElementById(container);
    var y = document.getElementById(icon);
    if ((hide == "true") || (x.style.display == "block")) {
        x.style.display = "none";
        if (y != undefined) {
            y.innerHTML = '&nbsp;&crarr;';
        }
    } else {
        x.style.display = "block";
        if (y != undefined) {
            y.innerHTML = '&nbsp;&darr;';
        }
    }
}
function doSearch(inputId, textareaId) {
    var searchStr=document.getElementById(inputId).value;
    var box=document.getElementById(textareaId);
    var index=box.value.indexOf(searchStr);
    var length=box.value.length*1.0;
    var startIndexStr=index;
    var endIndexStr=index+searchStr.length;
    console.log(startIndexStr, endIndexStr);
    
    box.setSelectionRange(index, index);
    //box.setSelectionRange(startIndexStr, endIndexStr);//searchStr.length);
    box.blur();
    box.focus();
    box.setSelectionRange(startIndexStr, endIndexStr);//searchStr.length);
    //box.scrollTop=(index/length)*100;
}
function readFile(e) {
    console.log("reading file")
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
    console.log("loading contents")
    cimsvg.loadFile(contents);
};

