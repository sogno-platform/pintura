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

/*
 * Utility functions
 */

var startTag = function (name, attributes) {
  let tag = '<' + name
  for (let attr in attributes) {
    if (attributes[attr]['value'] != 'NO VALUE') {
      tag += ' ' + attributes[attr]['key'] + '=' + attributes[attr]['value']
    }
    else {
      tag += ' ' + attributes[attr]['key']
    }
  }
  return tag
}

var endTag = function (name) {
  return '</' + name + '>'
}

var depth = -1

print_with_endl_and_indent = function(front_indent, text, endl='') {
  process.stdout.write(front_indent + text + endl)
}

print_without_endl_or_indent = function(front_indent, text, endl='') {
  process.stdout.write(text)
}

var printTag = function(tag, readable=false) {
  var print_func
  if (readable) {
    print_func = print_with_endl_and_indent
  } else {
    print_func = print_without_endl_or_indent
  }
  var indent = '    '.repeat(++depth)
  var numberOfChildren = invalidOrZeroLength(tag.children) ? 0 : tag.children.length
  var emptyInside = tag.text === undefined || tag.text.length === 0
  print_func(indent, startTag(tag.name, tag.attributes))
  if (tag.name != 'div' && numberOfChildren === 0 && emptyInside) {
    print_func('', '/>', '\n')
    depth--
  } else {
    if (tag.text.length > 0) {
      print_func('', '>' + tag.text)
      print_func('', endTag(tag.name), '\n')
      indent = '    '.repeat(depth--)
    } else {
      print_func('', '>', '\n')
      for (let index in tag.children) {
        printTag(tag.children[index], readable)
      }
      indent = '    '.repeat(depth--)
      print_func(indent, endTag(tag.name), '\n')
    }
  }
}

var invalidOrZeroLength = function(array) {
  return ((array === undefined) || (array === null) || (array.length == 0))
}

var startJson = function(name, attributes) {
  let tag = name+':{'
  for (let attr in attributes) {
    tag += ' ' + attributes[attr]['key'] + '=' + attributes[attr]['value']
  }
  tag += '\n'
  return tag
}

var printTagJson = function(tag) {
  var indent = '    '.repeat(++depth)
  var numberOfChildren = invalidOrZeroLength(tag.children) ? 0 : tag.children.length
  var emptyInside = tag.text === undefined || tag.text.length === 0
  process.stderr.write(indent + startJson(tag.name, tag.attributes))
  for (let index in tag.children) {
    printTagJson(tag.children[index])
  }
  process.stderr.write(indent+'}\n')
  indent = '    '.repeat(depth--)
}

/*
 * This is the tag class that does most of the work
 */
function tag(name){
  this.attributes = []
  this.children = []
  this.text = ""
  this.name = name

  this.a = function(key, value) {
    this.attributes.push({ 'key': key, 'value': value })
    return this
  }
  this.c = function(tag) {
    this.children.push(tag)
    return this
  }
  this.t = function(words) {
    this.text = words
    return this
  }
}
var makeFileMenu = function (links) {
  let menu = new tag('div')
  menu.a('id', '"menu"')
}
var makeAccordionDiv = function(id, action) {
  return new tag('div').a('id', '"'+id+'"').c(new tag('div').a('id', '"'+id+'-accordion"').t(" "))
}
/*
 * global html tag
 */
var html = new tag('html')
var head = new tag('head')

head.c(new tag('meta').a('charset', '"utf-8"'))
head.c(new tag('title').t('Pintura'))
head.c(new tag('link').a('rel', '"stylesheet"').a('href', '"css/svg.css"'))
head.c(new tag('link').a('rel', '"stylesheet"').a('href', '"css/layout.css"'))
head.c(new tag('link').a('rel', '"stylesheet"').a('href', '"css/colours.css"'))
head.c(new tag('link').a('rel', '"stylesheet"').
                       a('href', '"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"').
                       a('crossorigin', '"anonymous"').
                       a('type', '"text/css"'))
head.c(new tag('link').a('rel', '"apple-touch-icon"').a('sizes', '"180x180"').a('href', '"/images/apple-touch-icon.png"'))
head.c(new tag('link').a('rel', '"icon"').a('type', '"image/png"').a('sizes', '"32x32"').a('href', '"/images/favicon-32x32.png"'))
head.c(new tag('link').a('rel', '"icon"').a('type', '"image/png"').a('sizes', '"16x16"').a('href', '"/images/favicon-16x16.png"'))
head.c(new tag('link').a('rel', '"manifest"').a('href', '"/images/site.webmanifest"'))
head.c(new tag('link').a('rel', '"mask-icon"').a('href', '"/images/safari-pinned-tab.svg"').a('color', '"#5bbad5"'))
head.c(new tag('link').a('rel', '"shortcut icon"').a('href', '"/images/favicon.ico"'))
head.c(new tag('meta').a('nam', '"msapplication-TileColor"').a('content', '"#da532c"'))
head.c(new tag('meta').a('nam', '"msapplication-config"').a('content', '"/images/browserconfig.xml"'))
head.c(new tag('meta').a('nam', '"theme-color"').a('content', '"#ffffff"'))

var body = new tag('body')

var svg = new tag('svg').a('id', '"svg"').
	          a('xmlns', '"http://www.w3.org/2000/svg"').
	          a('xmlns:xlink','"http://www.w3.org/1999/xlink"').
	          c(new tag('rect').
                      a('class', '"backing"').
                      a('onclick', '"currentCimsvg().checkComponentReadyToAdd(evt)"')).
	          c(new tag('g').a('class', '"grid"')).
	          c(new tag('g').a('class', '"diagrams"'))

var radio_input = function(onchange, name, id, text, checked=false) {
    var input = new tag('input').
	              a('type', '"radio"').
                      a('onchange', onchange).
                      a('name', name).
                      a('id', id)

    var label = new tag('label').
	              a('class', '"dark-font panel-button"').
	              a('for', id).t(text)

    if (checked) {
        input.a('checked', 'NO VALUE')
    }

    return new tag('a').c(input).c(label)
};


var menu = new tag('div').a('id', '"menu"')

var spacer  = function() {
    return new tag('div').a('class', '"spacer"');
}

body.c(menu).c(svg)

var vert_centre = new tag('div').a('class', '"middle-dialog"').
                          c(new tag('div').a('class', '"spacer"')).
                          c(new tag('div').c(new tag('h4').a('class', '"dialog-title"').t(" "))).
                          c(new tag('div').a('class', '"spacer"')).
                          c(new tag('div').a('class', '"dialog-list"')).
                          c(new tag('div').a('class', '"spacer"'));

var page_centre = new tag('div').a('class', '"middle-panel"').
                          c(new tag('div').a('class', '"spacer"')).
                          c(vert_centre).
                          c(new tag('div').a('class', '"spacer"'));

body.c(new tag('div').
             a('id', '"new-component-dialog"').a('class', '"new-component-dialog invisible"').
             c(new tag('div').a('class', '"spacer"')).
                      c(page_centre).
             c(new tag('div').a('class', '"spacer"')));
body.c(new tag('script').a('type', '"text/javascript"').a('src', '"https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.1.0/handlebars.runtime.min.js"').t(" "));
body.c(new tag('script').a('type', '"text/javascript"').a('src', '"https://cdnjs.cloudflare.com/ajax/libs/jszip/3.2.0/jszip.min.js"').t(" "));
body.c(new tag('script').a('type', '"text/javascript"').a('src', '"dist/libcimsvg.js"').t(" "))
body.c(new tag('script').a('type', '"text/javascript"').a('src', '"dist/libcimmenu.js"').t(" "))
body.c(new tag('script').a('type', '"text/javascript"').a('src', '"index.js"').t(" "))
// TODO move event handlers into code so we don't need this stub
head.c(new tag('script').a('type', '"text/javascript"').t("var currentCimmenu=function() { return { hideAllMenuPanels: function () {console.log('ok');} }; }"))
let mouseEventScripts = `
const onMouseDown = function(){
};
const onMouseUp = function(evt){
    if (currentCimmenu()) {
        currentCimmenu().onMouseUp(evt);
    }
};
const onMouseMove = function(){
};
const onMouseOver = function(evt){
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
const onMouseLeave = function(evt){
    let id = evt.currentTarget.id.slice(0,-5);
    let txt = document.getElementById(id+"-txt0");
    let bg = document.getElementById(id+"-bg0");
    txt.classList.remove("svglabel-high");
    bg.classList.remove("svglabel-high");
};
`;
head.c(new tag('script').a('type', '"text/javascript"').t(mouseEventScripts))
let initScript = `
var currentCimmenu = libcimmenu.currentCimmenu;
var currentCimsvg = libcimsvg.currentCimsvg;
var cimmenuInstance = new libcimmenu.cimmenu(document.getElementById('menu'));
`;
body.c(new tag('script').a('type', '"text/javascript"').t(initScript))
body.a('onmouseover', '"currentCimmenu().hideAllMenuPanels();"')
html.c(head)
html.c(body)

console.log(`<!--
    Copyright © 2016-2017, RWTH Aachen University
    Authors: Richard Marston

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    A copy of the GNU General Public License is in the LICENSE file
    in the top level directory of this source tree.
-->
<!DOCTYPE HTML>`)
//printTagJson(html)
if (process.argv[2] == 'debug') {
    printTag(html, true)
}
else {
    printTag(html)
}
