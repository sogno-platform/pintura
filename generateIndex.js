
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
        attr('class', '"w3-container"')
      ],
      [
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
var colour_stylesheet_attributes = [ attr('href', '"css/colours.css"') ]
colour_stylesheet_attributes.unshift(stylesheet_attribute)
var stylesheets = [
  tag(name = 'link', attributes = w3_stylesheet_attributes),
  tag(name = 'link', attributes = svg_stylesheet_attributes),
  tag(name = 'link', attributes = layout_stylesheet_attributes),
  tag(name = 'link', attributes = colour_stylesheet_attributes),
]

var sidebarContents = [
  makeSearchDiv('component-search', '"cimmenu.searchSidebar(this.value)"')
]

var sidebar = tag('div',
                  [ attr('id', '"sidebar"') ],
                  sidebarContents
                  )

var svg = tag('svg',
              [
                attr('id', '"svg"'),
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

var radio_input = function(onchange, name, id, text, checked='"false"') {
    return tag('a',
               [],
               [
                   tag('input',
                       [ attr('type', '"radio"'),
                         attr('onchange', onchange),
                         attr('name', name),
                         attr('id', id),
			 attr('checked', checked)
                       ]),
                   tag('label',
                       [ attr('class', '"dark-font"'),
                         attr('for', id)
                       ],
                       [],
                       text)
              ]
              );
};

var attribute_list_settings = function() {
    return tag('div',
               [
                   attr('id', '"attribute-list-settings"'),
		   attr('class', '"dropdown-menu"')
               ],
               [
                   tag('h4',
                   [
                       attr('class', '"dark-font blue-grey-background"'),
                       attr('style', '"height:100%"')
                   ],
                   [],
                   "Sidebar placement"),
                   tag('div',
                       [
                           attr('id', '"attribute-list-options"'),
                           attr('class', '"blue-grey-background"')
                       ],
                       [
                           radio_input('"addClass(\'component-attributes\', \'dialog-over-diagram\', \'dialog-over-sidebar\', \'dialog-shrink-diagram\');"',
                                       '"attribute-list-placement"', '\"attribute-list-placement-diagram\"', 'Over diagram', '"true"'),
                           radio_input('"addClass(\'component-attributes\', \'dialog-shrink-diagram\', \'dialog-over-diagram\', \'dialog-over-sidebar\');"',
                                       '"attribute-list-placement"', '"attribute-list-placement-shrink"', 'Shrink diagram'),
                           tag('div',
                               [ attr('class', '"line"') ],
                               [],
			       " "),
                           radio_input('"addClass(\'diagram\', \'row-right\', \'row-left\');addClass(\'component-attributes\', \'dialog-left\', \'dialog-right\', \'row-right\');"',
                                       '"attribute-list-placement-align"', '"attribute-list-placement-align-left"', 'Left', '"true"'),
                           radio_input('"addClass(\'diagram\', \'row-left\', \'row-right\');addClass(\'component-attributes\', \'dialog-right\', \'dialog-left\', \'row-left\');"',
                                       '"attribute-list-placement-align"', '"attribute-list-placement-align-right"', 'Right'),
                       ]),
               ]);
};

var attribute_list_header = function() {
    return tag('div',
        [ //attr('id', '"attribute-list-header"'),
            attr('class', '"wide-row blue-grey-background"') ],
            [
                tag('span',
                    [   attr('id', '"attribute-list-component-name"'),
                        attr('class', '"w3-button row-left"')
                    ],
                    [],
                    "Attributes in Component:"),
                tag('span',
                    [   attr('id', '"close-attributes"'),
                        attr('class', '"w3-button row-right"'),
                        attr('onclick', '"showContainer(\'component-attributes\', null);"')
                    ],
                    [],
                    "<b>&times;</b>"),
                tag('span',
                    [   attr('class', '"w3-button row-right"'),
                        attr('onclick', '"showContainer(\'attribute-list-settings\');"')
                    ],
                    [],
                    "&#9881;")
                ]
            )
};

var main = tag('div',
               [ attr('id', '"main"') ],
               [
                   tag('div',
                   [
                       attr('id', '"diagram"'),
                       attr('class', '"row-right"')
                   ],
                   [ svg ]),
                   tag('div',
                   [
                       attr('id', '"component-attributes"'),
                       attr('class', '"blue-grey-background row-left dialog-over-diagram"')
                   ],
                   [
                       attribute_list_header(),
                       tag('div',
                       [
                           attr('id', '"dropdown-float"')
                       ],
                       [
                           tag('div',
                           [
                               attr('class', '"dropdown"')
                           ],
                           [
                               attribute_list_settings(),
                               tag('script',
                               [
                                   attr('type', '"text/javascript"'),
                                   attr('src', '"src/cimsvg.js"'),
                               ],
                               [], " "),
                               tag('script',
                               [
                                   attr('type', '"text/javascript"'),
                                   attr('src', '"index.js"'),
                               ],
                               [], " "),
                           ]),
                       ]),
                       tag('div',
                       [
                           attr('id', '"attribute-list-div"')
                       ],
                       [], " ")
                   ]),
               ]);

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

var fileopen = makeFileMenuItem ('Open file', 'fileopen', 'fileopen.click()')
var fileexport = makeFileMenuItem('Export to file', 'fileinput', 'fileinput.click()')

var makeFileMenu = [ fileopen ]

var menu = tag('div',
               [
                 attr('id', '"menu"' ),
                 attr('class', '"w3-bar w3-black"'),
               ],
               makeFileMenu
            )

var body_attributes = [ ]

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
