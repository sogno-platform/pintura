
/*
 * Utility functions
 */

var startTag = function (name, attributes) {
  let tag = '<' + name
  for (let attr in attributes) {
    tag += ' ' + attributes[attr]['key'] + '=' + attributes[attr]['value']
  }
  return tag
}

var endTag = function (name) {
  return '</' + name + '>'
}

var depth = -1 

var attr = function (name, value) {
  return { 'key': name, 'value': value }
}

var invalidOrZeroLength = function(array) {
  return ((array === undefined) || (array === null) || (array.length == 0))
}

var tag = function (name, attributes = [], children, inner = '') {
  var tag = {
    "name": name,
    "attributes": attributes,
    "children": children,
    "text": inner,
  }
  return tag
}

var logTag = function(tag) {
  console.log("tag: ")
  console.log(JSON.stringify(tag, null, 2))
}

var printArrayOfChildren = function(children) {
  for (let index in children) {
    printTag(children[index])
  }
}

var printTag = function(tag) {
  var indent = '    '.repeat(++depth)
  var numberOfChildren = invalidOrZeroLength(tag.children) ? 0 : tag.children.length
  var emptyInside = tag.text === undefined || tag.text.length === 0
  process.stdout.write(indent + startTag(tag.name, tag.attributes))
  if (numberOfChildren === 0 && emptyInside) {
    console.log('/>')
    depth--
  } else {
    if (tag.text.length > 0) {
      process.stdout.write('>' + tag.text)
      console.log(endTag(tag.name))
      indent = '    '.repeat(depth--)
    } else {
      process.stdout.write('>' + '\n')
      for (let index in tag.children) {
        if (Array.isArray(tag.children[index])) {
          printArrayOfChildren(tag.children[index])
        }
        else {
          printTag(tag.children[index])
        }
      }
      indent = '    '.repeat(depth--)
      console.log(indent + endTag(tag.name))
    }
  }
}

var makeDropButton = function(text, dropContainerId) {
  var dropIcon = dropContainerId+"-icon"
  var action = '"javascript:showContainer(\''+dropContainerId+'\', \''+dropIcon+'\')"'
  dropSpans = [
                tag('span',
                    [ attr('style', '"flex-grow: 1"') ],
                    [],
                    text
                   ),
                tag('span',
                    [
                      attr('style', '"flex-grow: 1"'),
                      attr('id', dropIcon)
                    ],
                    [],
                    '&nbsp;&crarr;')
              ]
  return makeButton("", action, dropSpans);
}

var makeButton = function(text, action, children) {
  var buttonAttributes = [ attr('class', '"row w3-btn w3-block w3-grey"'), attr('onclick', action) ]
  return tag('button', buttonAttributes, children, text)
}

var makeHiddenContainerDiv = function(id) {
  return tag('div',
      [
        attr('id', id),
        attr('class', '"w3-container"'),
        attr('style', '"display:none"')
      ],
      [],
      " ")
}

var makeSearchDiv = function(id, action) {
  return tag('div', 
      [
        attr('id', '"'+id+'"'),
        attr('class', '"w3-container"'),
      ],
      [ tag('div',
            [
              attr('class', '"row"')
            ],
            [
              tag('input',
                  [
                    attr('size', '"10"'),
                    attr('type', '"text"'),
                    attr('oninput', action),
                  ]
                 ),
              tag('label',
                  [
                    attr('class', '"w3-label w3-button"'),
                    attr('id', '"searchSidebar"'),
                  ],
                  [],
                  '&#x2315;'
                 )
            ]
           ),
        tag('div',
            [
              attr('id', '"'+id+'-accordion"')
            ], [], " ")
      ]
     )
}

/*
 * global html tag
 */
var html = tag('html', [], [], 0)

/*
 * head contents
 */
var title = tag('title', [], [], 'Pintura')
html.children.push(tag('head', [], [ title ]))

/*
 * body contents
 */
var stylesheet_attribute = attr('rel', '"stylesheet"')

var w3_stylesheet_attributes = [ attr('href', '"https://www.w3schools.com/w3css/4/w3.css"') ]
w3_stylesheet_attributes.unshift(stylesheet_attribute)
var svg_stylesheet_attributes = [ attr('href', '"css/svg.css"') ]
svg_stylesheet_attributes.unshift(stylesheet_attribute)
var layout_stylesheet_attributes = [ attr('href', '"css/layout.css"') ]
layout_stylesheet_attributes.unshift(stylesheet_attribute)
var stylesheets = [
  tag(name = 'link', attributes = w3_stylesheet_attributes),
  tag(name = 'link', attributes = svg_stylesheet_attributes),
  tag(name = 'link', attributes = layout_stylesheet_attributes)
]

var sidebarContents = [

  makeDropButton('Diagrams', 'diagrams'),

  makeHiddenContainerDiv('"diagrams"'),

  makeButton('Pintura Data',
             '"javascript:showContainer(\'pintura-data-sidebar\', null);showContainer(\'cim-xml-sidebar\', null, \'true\');"',
             []),

  makeButton('Raw XML',
             '"javascript:showContainer(\'cim-xml-sidebar\', null);showContainer(\'pintura-data-sidebar\', null, \'true\');"',
             []),

  makeDropButton('All Components', 'component-search'),

  makeSearchDiv('component-search', '"cimmenu.searchSidebar(this.value)"')

]

var sidebar = tag('div',
                  [ attr('id', '"sidebar"'), attr('class', '"w3-blue-grey"') ],
                  sidebarContents
                  )

var svg = tag('svg',
              [
                attr('id', '"svg"'),
                attr('width', '"1024"'),
                attr('height', '"768"'),
                attr('xmlns', '"http://www.w3.org/2000/svg"'),
                attr('xmlns:xlink','"http://www.w3.org/1999/xlink"'),
              ],
              [
                tag('rect', [ attr('id', '"backing"') ] ),
                tag('g', [ attr('id', '"grid"') ] ),
                tag('g', [ attr('id', '"diagram-elements"') ] ),
              ])

var largeTextBox = function(idBase, text) {
  return tag('div',
              [
                attr('class', '"w3-container data-panel"'),
                attr('id', '"'+idBase+'-sidebar"'),
                attr('style', '"display:none"'),
              ],
              [
                tag('label', [ attr('class', '"w3-bar-item w3-large w3-button data-panel-label"') ], [], text),
                tag('button',
                    [
                      attr('class', '"w3-bar-item w3-button data-panel-button"'),
                      attr('onclick', '"showContainer(\''+idBase+'-sidebar\')"'),
                    ], [], "Close &times;"),
                tag('input',
                    [
                      attr('class', '"'+idBase+'-input"'),
                      attr('id', '"'+idBase+'-search"'),
                      attr('type', '"text"'),
                      attr('onkeyup', '"if (event.keyCode == 13) doSearch(\''+idBase+'-search\', \''+idBase+'-textarea\')"'),
                    ]),
                tag('textarea',
                    [
                      attr('class', '"data-panel-text"'),
                      attr('id', '"'+idBase+'-text"'),
                    ], [], " ")
              ])
}

var setup = ` 
                    cimsvg.init(document.getElementById("svg"));
                    cimsvg.addSidebar(document.getElementById("sidebar"));
                    cimsvg.addRawXML(document.getElementById("cim-xml-sidebar"));
                    cimsvg.addPinturaData(document.getElementById("pintura-data-sidebar"));
                    document.getElementById("fileinput").addEventListener('change', readFile, false);`

var main = tag('div',
               [ attr('id', '"main"') ],
               [
                 svg,
                 largeTextBox('pintura-data', "Pintura JSON"),
                 largeTextBox('cim-xml', "Raw XML"),
                 tag('script',
                     [
                       attr('type', '"text/javascript"'),
                       attr('src', '"index.js"'),
                     ], [], " "),
                 tag('script',
                     [
                       attr('type', '"text/javascript"'),
                       attr('src', '"handlebars.runtime.js"'),
                     ], [], " "),
                 tag('script',
                     [
                       attr('type', '"text/javascript"'),
                       attr('src', '"cimsvg.js"'),
                     ], [], " "),
                 tag('script',
                     [
                       attr('type', '"text/javascript"'),
                       attr('src', '"cimmenu.js"'),
                     ], [], " "),
                 tag('script',
                     [
                       attr('type', '"text/javascript"'),
                     ],
                     [],
                     setup
                    ),
               ])

var middle = tag('div', [ attr('id', '"middle"') ], [ sidebar, main ])

var makeFileMenuItem = function (text, input_name, action) {
  let input_attributes = [
    attr('id', '"' + input_name + '"'),
    attr('type', '"file"'),
    attr('style', '"display:none"'),
    attr('multiple', '"true"')
  ]
  let a_attributes = [
    attr('href', '"#"'),
    attr('class', '"w3-button"'),
    attr('type', '"file"'),
    attr('onclick', '"javascript:' + input_name + '.click()"')
  ]
  return [
    tag(name = 'input', attributes = input_attributes, children = []),
    tag(name = 'a', attributes = a_attributes, children = [], inner = text)
  ]
}

var fileopen = makeFileMenuItem ('Open to file', 'fileopen', 'fileopen.click()')
var fileexport =makeFileMenuItem('Export to file', 'fileinput', 'fileinput.click()')

var makeFileMenu = [ fileopen, fileexport ]

var menu = tag('div',
               [
                 attr('id', '"menu"' ),
                 attr('class', '"w3-bar w3-black"'),
               ],
               makeFileMenu
            )

var body_attributes = [ attr('id', '"body"' ) ]

var body_children = [ stylesheets, menu, middle ]

var body = tag(name = 'body', attributes = body_attributes, children = body_children)

html.children.push(body)

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
printTag(html)
