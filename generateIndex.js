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
  if (numberOfChildren === 0 && emptyInside) {
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
var makeFileMenu = function (open_text, open_name, open_action,
                             save_text, save_name, save_action,
                             diag_text, diag_name, diag_action) {
  let open_input = new tag('input').a('id', '"' + open_name + '"').a('type', '"file"').a('style', '"display:none"').a('multiple', '"true"')
  let open_a_tag = new tag('a').t(open_text).a('href', '"#"').a('class', '"button"').a('type', '"file"').a('onclick', open_action)
  let save_input = new tag('input').a('id', '"' + save_name + '"').a('type', '"submit"').a('value', '""').a('style', '"display:none"')
  let save_a_tag = new tag('a').t(save_text).a('onclick', '"filesave.click()"')
  let form_tag = new tag('form').a('onsubmit', '"' + save_action + '"').a('accept-charset', '"utf-8"')
  let diag_tag = new tag('div').a('id', '"'+diag_name+'"').a('class', '"button"')
  let diag_a_tag = new tag('a').t(diag_text).a('onclick', diag_action)
  return new tag('div').c(open_input).c(open_a_tag).c(form_tag.c(save_input).c(save_a_tag)).c(diag_tag).c(diag_a_tag).a('id', '"menu"')
}
var makeAccordionDiv = function(id, action) {
  return new tag('div').a('id', '"'+id+'"').c(new tag('div').a('id', '"'+id+'-accordion"').t(" "))
}
makePanelOpeningButton = function(id, text, action) {
  return new tag('div').a('id', '"'+id+'"').
               a('class', '"button blue-grey-background"').
               a('onclick', action).
               c(new tag('a').t(text))
}
/*
 * global html tag
 */
var html = new tag('html').c(new tag('head').c(new tag('title').t('Pintura')))

var body = new tag('body').a('onmouseup', '"onBodyMouseUp()"')
body.c(new tag('link').a('rel', '"stylesheet"').a('href', '"css/svg.css"'))
body.c(new tag('link').a('rel', '"stylesheet"').a('href', '"css/layout.css"'))
body.c(new tag('link').a('rel', '"stylesheet"').a('href', '"css/colours.css"'))

var sidebar = new tag('div').
                  a('id', '"sidebar"').
                  c(new tag('div').a('id', '"component-sidebar-list"').t(' ')).
                  c(makeFileMenu('Open file', 'fileopen', 'fileopen.click()',
                                 'Save file', 'filesave', 'cimsvg.saveGridXml()',
                                 'Add Diagram', 'diagram-add', 'cimsvg.addDiagram()'))

var svg = new tag('svg').a('id', '"svg"').
	          a('xmlns', '"http://www.w3.org/2000/svg"').
	          a('xmlns:xlink','"http://www.w3.org/1999/xlink"').
	          c(new tag('rect').
                      a('id', '"backing"').
                      a('onclick', '"cimsvg.checkComponentReadyToAdd(evt)"')).
	          c(new tag('g').a('id', '"grid"')).
	          c(new tag('g').a('id', '"diagrams"'))

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

var floating_panel_settings = function(floating_panel_settings_id, floating_panel_div_id) {

    let over_diagram_radio = radio_input('"addClass(\'' + floating_panel_div_id + '\', \'dialog-over-diagram\', \'dialog-over-sidebar\', \'dialog-shrink-diagram\');"',
                                       '"attribute-list-placement"', '\"attribute-list-placement-diagram\"', 'Over diagram', true)
    let shrink_diagram_radio = radio_input('"addClass(\'' + floating_panel_div_id + '\', \'dialog-shrink-diagram\', \'dialog-over-diagram\', \'dialog-over-sidebar\');"',
                                       '"attribute-list-placement"', '"attribute-list-placement-shrink"', 'Shrink diagram')
    let left_radio = radio_input('"addClass(\'diagram-display\', \'row-right\', \'row-left\');addClass(\'' + floating_panel_div_id + '\', \'dialog-left\', \'dialog-right\', \'row-right\');"',
                                       '"attribute-list-placement-align"', '"attribute-list-placement-align-left"', 'Left', true)
    let right_radio = radio_input('"addClass(\'diagram-display\', \'row-left\', \'row-right\');addClass(\'' + floating_panel_div_id + '\', \'dialog-right\', \'dialog-left\', \'row-left\');"',
                                       '"attribute-list-placement-align"', '"attribute-list-placement-align-right"', 'Right')
    return new tag('div').
                 a('id', '"' + floating_panel_settings_id + '"').
		             a('class', '"dropdown-menu"').
		             c(new tag('span').
                         a('class', '"button blue-grey-background"').
                         a('style', '"height:100%"').
                         t("Sidebar placement")).
                     c(new tag('div').
			             a('id', '"' + floating_panel_div_id + '-options"').
                         a('class', '"blue-grey-background"').
			             c(over_diagram_radio).
                         c(shrink_diagram_radio).
                         c(new tag('div').
                             a('class', '"line"').
			                 t(" ")).
                         c(left_radio).
                         c(right_radio))
}

var floating_panel_header = function(title, floating_panel_id, settings_panel_id) {
    return new tag('div').
	           a('class', '"wide-row list-title"').
	           c(new tag('span').
                   a('id', '"' + floating_panel_id + '-component-name"').
                   a('class', '"button row-left"').
                   t(title)).
               c(new tag('span').
                   c(new tag('span').
                       a('class', '"button row-right panel-button"').
                       a('onclick', '"showContainer(\'' + floating_panel_id + '\', null);"').
                       t("<b>&times;</b>")).
                   c(new tag('span').
                       a('class', '"button row-right panel-button"').
                       a('onclick', '"showContainer(\'' + settings_panel_id + '\');"').
                       t("&#9881;")))
};

var diagram = new tag('div').a('id', '"diagram-display"').a('class', '"row-right"').c(svg)

var dropdown_panel = function(){
    return new tag('div').
	    a('class', '"dropdown"')
}

var make_floating_panel = function(title, id) {
    return new tag('div').
	           a('id', '"'+id+'"').
               a('class', '"floating-panel row-left dialog-over-diagram"').
               c(new tag('div').a('class', '"floating-panel-table"').
               c(floating_panel_header(title, id, id + '-settings')).
           c(dropdown_panel().c(floating_panel_settings(id + '-settings', id))).
           c(new tag('div').
               a('id', '"' + id + '-list-div"').
               a('class', '"floating-panel-list-div"').
			   t(" ")))
}

var component_attributes = make_floating_panel("Attributes in Component", 'component-attributes')
var component_creation = make_floating_panel("Add Component", 'component-creation')
var component_terminals = make_floating_panel("Terminal List", 'component-terminals')

var main = new tag('div').a('id', '"main"').c(diagram).c(component_attributes).c(component_creation).c(component_terminals)

body.c(main).c(sidebar)

body.c(new tag('nav').a('id', '"context-menu"').a('class', '"context-menu"').a('onmouseup', '"onBodyMouseUp()"').c(new tag('ul').a('class', '"context-menu-items"').c(new tag('li').a('class', '"context-menu-item"').c(new tag('a').a('class').a('onclick', '"cimcontextmenu.removeComponent()"').t("Delete Component")))))

body.c(new tag('script').a('type', '"text/javascript"').a('src', '"html/cimsvg.js"').t(" "))
body.c(new tag('script').a('type', '"text/javascript"').a('src', '"index.js"').t(" "))

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
printTag(html) //, true)
