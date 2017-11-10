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
        printTag(tag.children[index])
      }
      indent = '    '.repeat(depth--)
      console.log(indent + endTag(tag.name))
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

var makeFileMenu = function (text, input_name, action) {
  let input = new tag('input').a('id', '"' + input_name + '"').a('type', '"file"').a('style', '"display:none"').a('multiple', '"true"')
  let a_tag = new tag('a').t(text).a('href', '"#"').a('class', '"button"').a('type', '"file"').a('onclick', '"javascript:' + input_name + '.click()"')
  return new tag('div').c(input).c(a_tag).a('id', '"menu"')
}

var makeAccordionDiv = function(id, action) {
  return new tag('div').a('id', '"'+id+'"').c(new tag('div').a('id', '"'+id+'-accordion"').t(" "))
}

/*
 * global html tag
 */
var html = new tag('html').c(new tag('head').c(new tag('title').t('Pintura')))

var body = new tag('body')
body.c(new tag('link').a('rel', '"stylesheet"').a('href', '"css/svg.css"'))
body.c(new tag('link').a('rel', '"stylesheet"').a('href', '"css/layout.css"'))
body.c(new tag('link').a('rel', '"stylesheet"').a('href', '"css/colours.css"'))

var middle = new tag('div').a('id', '"middle"').c(            // make a div called middle
                 new tag('div').a('id', '"sidebar"').c(       // with a child div called sidebar
                     makeAccordionDiv('component-search', '"cimmenu.searchSidebar(this.value)"')
                 ).c(
                     makeFileMenu('Open file', 'fileopen', 'fileopen.click()')
                 )
             )

var svg = new tag('svg').a('id', '"svg"').
	        a('xmlns', '"http://www.w3.org/2000/svg"').
	        a('xmlns:xlink','"http://www.w3.org/1999/xlink"').
	        c(new tag('rect').a('id', '"backing"')).
	        c(new tag('g').a('id', '"grid"')).
	        c(new tag('g').a('id', '"diagram-elements"'))

var radio_input = function(onchange, name, id, text, checked=false) {
    var input = new tag('input').
	              a('type', '"radio"').
                      a('onchange', onchange).
                      a('name', name).
                      a('id', id)

    var label = new tag('label').
	              a('class', '"dark-font"').
	              a('for', id).t(text)

    if (checked) {
        input.a('checked', 'NO VALUE')
    }

    return new tag('a').c(input).c(label)
};

var attribute_list_settings = function() {
    return new tag('div').
                 a('id', '"attribute-list-settings"').
		 a('class', '"dropdown-menu"').
		 c(new tag('h4').
                         a('class', '"dark-font blue-grey-background"').
                         a('style', '"height:100%"').
                         t("Sidebar placement")).
                 c(new tag('div').
			 a('id', '"attribute-list-options"').
                         a('class', '"blue-grey-background"').
			 c(radio_input('"addClass(\'component-attributes\', \'dialog-over-diagram\', \'dialog-over-sidebar\', \'dialog-shrink-diagram\');"',
                                       '"attribute-list-placement"', '\"attribute-list-placement-diagram\"', 'Over diagram', '"true"')).
                         c(radio_input('"addClass(\'component-attributes\', \'dialog-shrink-diagram\', \'dialog-over-diagram\', \'dialog-over-sidebar\');"',
                                       '"attribute-list-placement"', '"attribute-list-placement-shrink"', 'Shrink diagram')).
                         c(new tag('div').
                                 a('class', '"line"').
			         t(" ")).
                         c(radio_input('"addClass(\'diagram\', \'row-right\', \'row-left\');addClass(\'component-attributes\', \'dialog-left\', \'dialog-right\', \'row-right\');"',
                                       '"attribute-list-placement-align"', '"attribute-list-placement-align-left"', 'Left', '"true"')).
                         c(radio_input('"addClass(\'diagram\', \'row-left\', \'row-right\');addClass(\'component-attributes\', \'dialog-right\', \'dialog-left\', \'row-left\');"',
                                       '"attribute-list-placement-align"', '"attribute-list-placement-align-right"', 'Right')))
}

var attribute_list_header = function() {
    return new tag('div').
	         a('class', '"wide-row blue-grey-background"').
	         c(new tag('span').
                         a('id', '"attribute-list-component-name"').
                         a('class', '"button row-left"').
                         t("Attributes in Component:")).
                 c(new tag('span').
                         a('id', '"close-attributes"').
                         a('class', '"button row-right"').
                         a('onclick', '"showContainer(\'component-attributes\', null);"').
                         t("<b>&times;</b>")).
                 c(new tag('span').
                         a('class', '"button row-right"').
                         a('onclick', '"showContainer(\'attribute-list-settings\');"').
                         t("&#9881;"))
};


var diagram = new tag('div').a('id', '"diagram"').a('class', '"row-right"').c(svg)
var dropdown = new tag('div').
	             a('class', '"dropdown"').
                     c(attribute_list_settings()).
                     c(new tag('script').
                             a('type', '"text/javascript"').
                             a('src', '"src/cimsvg.js"').
                             t(" ")).
                     c(new tag('script').
                             a('type', '"text/javascript"').
                             a('src', '"index.js"').
                             t(" "))


var component_attributes = new tag('div').
	                         a('id', '"component-attributes"').
                                 a('class', '"blue-grey-background row-left dialog-over-diagram"').
                                 c(attribute_list_header()).
                                 c(dropdown).
                                 c(new tag('div').
                                         a('id', '"attribute-list-div"').
					 t(" "))

var main = new tag('div').a('id', '"main"').c(diagram).c(component_attributes)

middle.c(main)
body.c(middle)

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
printTag(html)
