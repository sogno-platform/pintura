(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['pintura2html'] = template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "        <div class=\"wide-row blue-grey-background\">\r\n            <span class=\"button blue-grey-background row-left\" onclick=\"javascript:showContainer('"
    + alias2(alias1(blockParams[0][1], depth0))
    + "-accordion', null);\">Components in: "
    + alias2(((helper = (helper = helpers["pintura:name"] || (depth0 != null ? depth0["pintura:name"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias3,{"name":"pintura:name","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "</span>\r\n            <span class=\"blue-grey-background row-right\">\r\n                <span id='"
    + alias2(alias1(blockParams[0][1], depth0))
    + "-visibility-icon' class=\"button panel-button blue-grey-background row-right\" onclick=\"cimsvg.toggleDiagramVisible('"
    + alias2(alias1(blockParams[0][1], depth0))
    + "', '"
    + alias2(alias1(blockParams[0][1], depth0))
    + "-visibility-icon');\">&#9728;</span><span class=\"button panel-button blue-grey-background row-right\" onclick=\"javascript:cimsvg.setCurrentDiagramId('"
    + alias2(alias1(blockParams[0][1], depth0))
    + "');showContainer('component-creation')\">&#43;</span>\r\n            </span>\r\n        </div>\r\n        <div id=\""
    + alias2(alias1(blockParams[0][1], depth0))
    + "-accordion\" class=\"component-accordion\" style=\"display:none\">\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.components : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "        </div>\r\n";
},"2":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                <button class=\"component-type-name row button wide-button dark-grey-background\" onclick=\"javascript:showContainer('"
    + alias2(alias1(blockParams[1][1], depth0))
    + "-"
    + alias2(alias1(blockParams[0][1], depth0))
    + "-accordion', null);\">"
    + alias2(alias1(blockParams[0][1], depth0))
    + "</button>\r\n                <div id=\""
    + alias2(alias1(blockParams[1][1], depth0))
    + "-"
    + alias2(alias1(blockParams[0][1], depth0))
    + "-accordion\" style=\"display:none\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(3, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                </div>\r\n";
},"3":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                    <button id=\""
    + alias2(alias1(blockParams[0][1], depth0))
    + "-sidebar-button\" style=\"width:100%\" class=\"button wide-button row light-grey-background\"\r\n                        onclick=\"javascript:populateAttributes('"
    + alias2(alias1(blockParams[1][1], depth0))
    + "', '"
    + alias2(alias1(blockParams[0][1], depth0))
    + "');showContainer('component-attributes', null, 'true', 'table');\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0["pintura:label"] : depth0)) != null ? stack1.text : stack1), depth0))
    + "</button>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "<ul class=\"floating-panel-list\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Diagram : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "</ul>\r\n";
},"useData":true,"useBlockParams":true});
templates['cim2svg'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "  <g id=\""
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\" name=\""
    + alias4(((helper = (helper = helpers["pintura:name"] || (depth0 != null ? depth0["pintura:name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pintura:name","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\">\r\n"
    + ((stack1 = helpers["with"].call(alias1,(depth0 != null ? depth0.components : depth0),{"name":"with","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "  </g>\r\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(3, data, 2, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "    <g class="
    + container.escapeExpression(container.lambda(blockParams[0][1], depth0))
    + " >\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(4, data, 2, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "    </g>\r\n";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda, buffer = 
  "      <g\r\n        id=\""
    + alias4(((helper = (helper = helpers["pintura:rdfId"] || (depth0 != null ? depth0["pintura:rdfId"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pintura:rdfId","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\"\r\n        name=\""
    + alias4(alias5(((stack1 = (depth0 != null ? depth0["pintura:label"] : depth0)) != null ? stack1.text : stack1), depth0))
    + "\"\r\n        type=\""
    + alias4(alias5(blockParams[1][1], depth0))
    + "\"\r\n        class=\"image\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0["pintura:points"] : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
  stack1 = ((helper = (helper = helpers["pintura:label"] || (depth0 != null ? depth0["pintura:label"] : depth0)) != null ? helper : alias2),(options={"name":"pintura:label","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers["pintura:label"]) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0["pintura:line"] : depth0),{"name":"each","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "      </g>\r\n";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "        <image\r\n          x=\""
    + alias4(((helper = (helper = helpers.x || (depth0 != null ? depth0.x : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"x","hash":{},"data":data}) : helper)))
    + "\"\r\n          y=\""
    + alias4(((helper = (helper = helpers.y || (depth0 != null ? depth0.y : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"y","hash":{},"data":data}) : helper)))
    + "\"\r\n          href=\""
    + alias4(alias5((depths[1] != null ? depths[1]["pintura:image"] : depths[1]), depth0))
    + "\"\r\n          id=\""
    + alias4(alias5(blockParams[1][1], depth0))
    + "-img"
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\"\r\n          height=\""
    + alias4(((helper = (helper = helpers.imageHeight || (depth0 != null ? depth0.imageHeight : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageHeight","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\"\r\n          width=\""
    + alias4(((helper = (helper = helpers.imageWidth || (depth0 != null ? depth0.imageWidth : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageWidth","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\"\r\n          imageIndex=\"1\"\r\n          onmousedown=\"onMouseDown(evt)\"\r\n          onmouseup=\"onMouseUp(evt)\"\r\n          onmousemove=\"onMouseMove(evt)\"\r\n          onmouseover=\"onMouseOver(evt)\"\r\n          onmouseleave=\"onMouseLeave(evt)\"\r\n        />\r\n";
},"7":function(container,depth0,helpers,partials,data,blockParams) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "        <text\r\n          x=\""
    + alias4(((helper = (helper = helpers.x || (depth0 != null ? depth0.x : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"x","hash":{},"data":data}) : helper)))
    + "\"\r\n          y=\""
    + alias4(((helper = (helper = helpers.y || (depth0 != null ? depth0.y : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"y","hash":{},"data":data}) : helper)))
    + "\"\r\n          class=\"svglabel\"\r\n          type=\""
    + alias4(alias5(blockParams[2][1], depth0))
    + "\"\r\n          id=\""
    + alias4(alias5(blockParams[1][1], depth0))
    + "-txt0\"\r\n          onmouseup=\"onMouseUp(evt)\"\r\n        >"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "</text>\r\n";
},"9":function(container,depth0,helpers,partials,data,blockParams) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <line\r\n          x1=\""
    + alias4(((helper = (helper = helpers.x1 || (depth0 != null ? depth0.x1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"x1","hash":{},"data":data}) : helper)))
    + "\"\r\n          y1=\""
    + alias4(((helper = (helper = helpers.y1 || (depth0 != null ? depth0.y1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"y1","hash":{},"data":data}) : helper)))
    + "\"\r\n          x2=\""
    + alias4(((helper = (helper = helpers.x2 || (depth0 != null ? depth0.x2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"x2","hash":{},"data":data}) : helper)))
    + "\"\r\n          y2=\""
    + alias4(((helper = (helper = helpers.y2 || (depth0 != null ? depth0.y2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"y2","hash":{},"data":data}) : helper)))
    + "\"\r\n          id=\""
    + alias4(container.lambda(blockParams[1][1], depth0))
    + "-bar"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\"\r\n          class=\"line\"\r\n          onmouseup=\"onMouseUp(evt)\"\r\n          onmouseover=\"onMouseOver(evt)\"\r\n          onmouseleave=\"onMouseLeave(evt)\"\r\n        />\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.Diagram : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\r\n";
},"useData":true,"useDepths":true,"useBlockParams":true});
templates['Diagram'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Diagram\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Diagram', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Diagram.orientation</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Diagram.orientation"] || (depth0 != null ? depth0["cim:Diagram.orientation"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Diagram.orientation","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Diagram', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Diagram.orientation', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Diagram.x1InitialView</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Diagram.x1InitialView"] || (depth0 != null ? depth0["cim:Diagram.x1InitialView"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Diagram.x1InitialView","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Diagram', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Diagram.x1InitialView', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Diagram.x2InitialView</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Diagram.x2InitialView"] || (depth0 != null ? depth0["cim:Diagram.x2InitialView"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Diagram.x2InitialView","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Diagram', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Diagram.x2InitialView', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Diagram.y1InitialView</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Diagram.y1InitialView"] || (depth0 != null ? depth0["cim:Diagram.y1InitialView"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Diagram.y1InitialView","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Diagram', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Diagram.y1InitialView', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Diagram.y2InitialView</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Diagram.y2InitialView"] || (depth0 != null ? depth0["cim:Diagram.y2InitialView"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Diagram.y2InitialView","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Diagram', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Diagram.y2InitialView', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['DiagramObject'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"DiagramObject\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:DiagramObject', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:DiagramObject.drawingOrder</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:DiagramObject.drawingOrder"] || (depth0 != null ? depth0["cim:DiagramObject.drawingOrder"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:DiagramObject.drawingOrder","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:DiagramObject', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:DiagramObject.drawingOrder', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:DiagramObject.isPolygon</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:DiagramObject.isPolygon"] || (depth0 != null ? depth0["cim:DiagramObject.isPolygon"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:DiagramObject.isPolygon","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:DiagramObject', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:DiagramObject.isPolygon', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:DiagramObject.offsetX</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:DiagramObject.offsetX"] || (depth0 != null ? depth0["cim:DiagramObject.offsetX"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:DiagramObject.offsetX","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:DiagramObject', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:DiagramObject.offsetX', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:DiagramObject.offsetY</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:DiagramObject.offsetY"] || (depth0 != null ? depth0["cim:DiagramObject.offsetY"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:DiagramObject.offsetY","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:DiagramObject', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:DiagramObject.offsetY', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:DiagramObject.rotation</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:DiagramObject.rotation"] || (depth0 != null ? depth0["cim:DiagramObject.rotation"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:DiagramObject.rotation","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:DiagramObject', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:DiagramObject.rotation', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:DiagramObject.Diagram</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:DiagramObject.Diagram"] || (depth0 != null ? depth0["cim:DiagramObject.Diagram"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:DiagramObject.Diagram","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:DiagramObject', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:DiagramObject.Diagram', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:DiagramObject.VisibilityLayers</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:DiagramObject.VisibilityLayers"] || (depth0 != null ? depth0["cim:DiagramObject.VisibilityLayers"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:DiagramObject.VisibilityLayers","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:DiagramObject', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:DiagramObject.VisibilityLayers', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:DiagramObject.DiagramObjectPoints</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:DiagramObject.DiagramObjectPoints"] || (depth0 != null ? depth0["cim:DiagramObject.DiagramObjectPoints"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:DiagramObject.DiagramObjectPoints","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:DiagramObject', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:DiagramObject.DiagramObjectPoints', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:DiagramObject.DiagramObjectStyle</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:DiagramObject.DiagramObjectStyle"] || (depth0 != null ? depth0["cim:DiagramObject.DiagramObjectStyle"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:DiagramObject.DiagramObjectStyle","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:DiagramObject', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:DiagramObject.DiagramObjectStyle', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['DiagramObjectGluePoint'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"DiagramObjectGluePoint\"/>\n";
},"useData":true});
templates['DiagramObjectPoint'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"DiagramObjectPoint\"/>\n";
},"useData":true});
templates['DiagramObjectStyle'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"DiagramObjectStyle\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:DiagramObjectStyle', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['DiagramStyle'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"DiagramStyle\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:DiagramStyle', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:DiagramStyle.Diagram</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:DiagramStyle.Diagram"] || (depth0 != null ? depth0["cim:DiagramStyle.Diagram"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:DiagramStyle.Diagram","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:DiagramStyle', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:DiagramStyle.Diagram', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['TextDiagramObject'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"TextDiagramObject\" base=\"DiagramObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TextDiagramObject', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TextDiagramObject.text</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TextDiagramObject.text"] || (depth0 != null ? depth0["cim:TextDiagramObject.text"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TextDiagramObject.text","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TextDiagramObject', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TextDiagramObject.text', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['VisibilityLayer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"VisibilityLayer\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:VisibilityLayer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:VisibilityLayer.drawingOrder</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:VisibilityLayer.drawingOrder"] || (depth0 != null ? depth0["cim:VisibilityLayer.drawingOrder"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:VisibilityLayer.drawingOrder","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:VisibilityLayer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:VisibilityLayer.drawingOrder', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['ActivePower'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"ActivePower\"/>\n";
},"useData":true});
templates['ActivePowerChangeRate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"ActivePowerChangeRate\"/>\n";
},"useData":true});
templates['ActivePowerPerCurrentFlow'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"ActivePowerPerCurrentFlow\"/>\n";
},"useData":true});
templates['ActivePowerPerFrequency'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"ActivePowerPerFrequency\"/>\n";
},"useData":true});
templates['Admittance'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Admittance\"/>\n";
},"useData":true});
templates['AngleDegrees'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"AngleDegrees\"/>\n";
},"useData":true});
templates['AngleRadians'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"AngleRadians\"/>\n";
},"useData":true});
templates['ApparentPower'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"ApparentPower\"/>\n";
},"useData":true});
templates['Area'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Area\"/>\n";
},"useData":true});
templates['Boolean'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Boolean\"/>\n";
},"useData":true});
templates['Capacitance'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Capacitance\"/>\n";
},"useData":true});
templates['CapacitancePerLength'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"CapacitancePerLength\"/>\n";
},"useData":true});
templates['Conductance'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Conductance\"/>\n";
},"useData":true});
templates['ConductancePerLength'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"ConductancePerLength\"/>\n";
},"useData":true});
templates['CostPerEnergyUnit'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"CostPerEnergyUnit\"/>\n";
},"useData":true});
templates['CostPerVolume'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"CostPerVolume\"/>\n";
},"useData":true});
templates['CostRate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"CostRate\"/>\n";
},"useData":true});
templates['CurrentFlow'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"CurrentFlow\"/>\n";
},"useData":true});
templates['Damping'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Damping\"/>\n";
},"useData":true});
templates['Date'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Date\"/>\n";
},"useData":true});
templates['DateInterval'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"DateInterval\"/>\n";
},"useData":true});
templates['DateTime'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"DateTime\"/>\n";
},"useData":true});
templates['DateTimeInterval'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"DateTimeInterval\"/>\n";
},"useData":true});
templates['Decimal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Decimal\"/>\n";
},"useData":true});
templates['DecimalQuantity'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"DecimalQuantity\"/>\n";
},"useData":true});
templates['Displacement'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Displacement\"/>\n";
},"useData":true});
templates['Duration'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Duration\"/>\n";
},"useData":true});
templates['Float'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Float\"/>\n";
},"useData":true});
templates['FloatQuantity'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"FloatQuantity\"/>\n";
},"useData":true});
templates['Frequency'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Frequency\"/>\n";
},"useData":true});
templates['Hours'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Hours\"/>\n";
},"useData":true});
templates['Impedance'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Impedance\"/>\n";
},"useData":true});
templates['Inductance'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Inductance\"/>\n";
},"useData":true});
templates['InductancePerLength'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"InductancePerLength\"/>\n";
},"useData":true});
templates['Integer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Integer\"/>\n";
},"useData":true});
templates['IntegerQuantity'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"IntegerQuantity\"/>\n";
},"useData":true});
templates['KiloActivePower'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"KiloActivePower\"/>\n";
},"useData":true});
templates['Length'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Length\"/>\n";
},"useData":true});
templates['Minutes'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Minutes\"/>\n";
},"useData":true});
templates['Money'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Money\"/>\n";
},"useData":true});
templates['MonthDay'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"MonthDay\"/>\n";
},"useData":true});
templates['MonthDayInterval'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"MonthDayInterval\"/>\n";
},"useData":true});
templates['PU'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"PU\"/>\n";
},"useData":true});
templates['PerCent'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"PerCent\"/>\n";
},"useData":true});
templates['Pressure'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Pressure\"/>\n";
},"useData":true});
templates['Reactance'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Reactance\"/>\n";
},"useData":true});
templates['ReactancePerLength'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"ReactancePerLength\"/>\n";
},"useData":true});
templates['ReactivePower'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"ReactivePower\"/>\n";
},"useData":true});
templates['RealEnergy'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"RealEnergy\"/>\n";
},"useData":true});
templates['Resistance'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Resistance\"/>\n";
},"useData":true});
templates['ResistancePerLength'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"ResistancePerLength\"/>\n";
},"useData":true});
templates['RotationSpeed'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"RotationSpeed\"/>\n";
},"useData":true});
templates['Seconds'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Seconds\"/>\n";
},"useData":true});
templates['Speed'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Speed\"/>\n";
},"useData":true});
templates['String'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"String\"/>\n";
},"useData":true});
templates['StringQuantity'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"StringQuantity\"/>\n";
},"useData":true});
templates['Susceptance'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Susceptance\"/>\n";
},"useData":true});
templates['SusceptancePerLength'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"SusceptancePerLength\"/>\n";
},"useData":true});
templates['Temperature'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Temperature\"/>\n";
},"useData":true});
templates['Time'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Time\"/>\n";
},"useData":true});
templates['TimeInterval'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"TimeInterval\"/>\n";
},"useData":true});
templates['Voltage'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Voltage\"/>\n";
},"useData":true});
templates['VoltagePerReactivePower'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"VoltagePerReactivePower\"/>\n";
},"useData":true});
templates['Volume'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Volume\"/>\n";
},"useData":true});
templates['VolumeFlowRate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"VolumeFlowRate\"/>\n";
},"useData":true});
templates['WaterLevel'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"WaterLevel\"/>\n";
},"useData":true});
templates['Weight'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Weight\"/>\n";
},"useData":true});
templates['ACLineSegment'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"ACLineSegment\" base=\"Conductor\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ACLineSegment', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ACLineSegment.b0ch</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ACLineSegment.b0ch"] || (depth0 != null ? depth0["cim:ACLineSegment.b0ch"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ACLineSegment.b0ch","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ACLineSegment', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ACLineSegment.b0ch', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ACLineSegment.bch</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ACLineSegment.bch"] || (depth0 != null ? depth0["cim:ACLineSegment.bch"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ACLineSegment.bch","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ACLineSegment', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ACLineSegment.bch', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ACLineSegment.g0ch</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ACLineSegment.g0ch"] || (depth0 != null ? depth0["cim:ACLineSegment.g0ch"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ACLineSegment.g0ch","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ACLineSegment', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ACLineSegment.g0ch', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ACLineSegment.gch</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ACLineSegment.gch"] || (depth0 != null ? depth0["cim:ACLineSegment.gch"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ACLineSegment.gch","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ACLineSegment', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ACLineSegment.gch', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ACLineSegment.r</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ACLineSegment.r"] || (depth0 != null ? depth0["cim:ACLineSegment.r"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ACLineSegment.r","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ACLineSegment', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ACLineSegment.r', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ACLineSegment.r0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ACLineSegment.r0"] || (depth0 != null ? depth0["cim:ACLineSegment.r0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ACLineSegment.r0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ACLineSegment', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ACLineSegment.r0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ACLineSegment.shortCircuitEndTemperature</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ACLineSegment.shortCircuitEndTemperature"] || (depth0 != null ? depth0["cim:ACLineSegment.shortCircuitEndTemperature"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ACLineSegment.shortCircuitEndTemperature","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ACLineSegment', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ACLineSegment.shortCircuitEndTemperature', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ACLineSegment.x</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ACLineSegment.x"] || (depth0 != null ? depth0["cim:ACLineSegment.x"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ACLineSegment.x","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ACLineSegment', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ACLineSegment.x', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ACLineSegment.x0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ACLineSegment.x0"] || (depth0 != null ? depth0["cim:ACLineSegment.x0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ACLineSegment.x0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ACLineSegment', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ACLineSegment.x0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ACLineSegment.Clamp</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ACLineSegment.Clamp"] || (depth0 != null ? depth0["cim:ACLineSegment.Clamp"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ACLineSegment.Clamp","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ACLineSegment', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ACLineSegment.Clamp', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['ACLineSegmentPhase'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"ACLineSegmentPhase\" base=\"PowerSystemResource\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ACLineSegmentPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ACLineSegmentPhase.phase</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ACLineSegmentPhase.phase"] || (depth0 != null ? depth0["cim:ACLineSegmentPhase.phase"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ACLineSegmentPhase.phase","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ACLineSegmentPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ACLineSegmentPhase.phase', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ACLineSegmentPhase.ACLineSegment</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ACLineSegmentPhase.ACLineSegment"] || (depth0 != null ? depth0["cim:ACLineSegmentPhase.ACLineSegment"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ACLineSegmentPhase.ACLineSegment","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ACLineSegmentPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ACLineSegmentPhase.ACLineSegment', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['AsynchronousMachine'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"AsynchronousMachine\" base=\"RotatingMachine\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.asynchronousMachineType</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.asynchronousMachineType"] || (depth0 != null ? depth0["cim:AsynchronousMachine.asynchronousMachineType"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.asynchronousMachineType","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.asynchronousMachineType', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.converterFedDrive</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.converterFedDrive"] || (depth0 != null ? depth0["cim:AsynchronousMachine.converterFedDrive"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.converterFedDrive","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.converterFedDrive', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.efficiency</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.efficiency"] || (depth0 != null ? depth0["cim:AsynchronousMachine.efficiency"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.efficiency","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.efficiency', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.iaIrRatio</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.iaIrRatio"] || (depth0 != null ? depth0["cim:AsynchronousMachine.iaIrRatio"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.iaIrRatio","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.iaIrRatio', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.nominalFrequency</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.nominalFrequency"] || (depth0 != null ? depth0["cim:AsynchronousMachine.nominalFrequency"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.nominalFrequency","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.nominalFrequency', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.nominalSpeed</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.nominalSpeed"] || (depth0 != null ? depth0["cim:AsynchronousMachine.nominalSpeed"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.nominalSpeed","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.nominalSpeed', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.polePairNumber</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.polePairNumber"] || (depth0 != null ? depth0["cim:AsynchronousMachine.polePairNumber"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.polePairNumber","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.polePairNumber', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.ratedMechanicalPower</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.ratedMechanicalPower"] || (depth0 != null ? depth0["cim:AsynchronousMachine.ratedMechanicalPower"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.ratedMechanicalPower","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.ratedMechanicalPower', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.reversible</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.reversible"] || (depth0 != null ? depth0["cim:AsynchronousMachine.reversible"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.reversible","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.reversible', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.rr1</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.rr1"] || (depth0 != null ? depth0["cim:AsynchronousMachine.rr1"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.rr1","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.rr1', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.rr2</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.rr2"] || (depth0 != null ? depth0["cim:AsynchronousMachine.rr2"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.rr2","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.rr2', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.rxLockedRotorRatio</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.rxLockedRotorRatio"] || (depth0 != null ? depth0["cim:AsynchronousMachine.rxLockedRotorRatio"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.rxLockedRotorRatio","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.rxLockedRotorRatio', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.tpo</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.tpo"] || (depth0 != null ? depth0["cim:AsynchronousMachine.tpo"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.tpo","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.tpo', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.tppo</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.tppo"] || (depth0 != null ? depth0["cim:AsynchronousMachine.tppo"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.tppo","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.tppo', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.xlr1</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.xlr1"] || (depth0 != null ? depth0["cim:AsynchronousMachine.xlr1"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.xlr1","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.xlr1', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.xlr2</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.xlr2"] || (depth0 != null ? depth0["cim:AsynchronousMachine.xlr2"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.xlr2","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.xlr2', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.xm</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.xm"] || (depth0 != null ? depth0["cim:AsynchronousMachine.xm"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.xm","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.xm', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.xp</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.xp"] || (depth0 != null ? depth0["cim:AsynchronousMachine.xp"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.xp","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.xp', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.xpp</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.xpp"] || (depth0 != null ? depth0["cim:AsynchronousMachine.xpp"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.xpp","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.xpp', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:AsynchronousMachine.xs</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:AsynchronousMachine.xs"] || (depth0 != null ? depth0["cim:AsynchronousMachine.xs"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:AsynchronousMachine.xs","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:AsynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:AsynchronousMachine.xs', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Breaker'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Breaker\" base=\"ProtectedSwitch\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Breaker', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Breaker.inTransitTime</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Breaker.inTransitTime"] || (depth0 != null ? depth0["cim:Breaker.inTransitTime"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Breaker.inTransitTime","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Breaker', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Breaker.inTransitTime', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['BusbarSection'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"BusbarSection\" base=\"Connector\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BusbarSection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BusbarSection.ipMax</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BusbarSection.ipMax"] || (depth0 != null ? depth0["cim:BusbarSection.ipMax"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BusbarSection.ipMax","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BusbarSection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BusbarSection.ipMax', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BusbarSection.VoltageControlZone</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BusbarSection.VoltageControlZone"] || (depth0 != null ? depth0["cim:BusbarSection.VoltageControlZone"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BusbarSection.VoltageControlZone","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BusbarSection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BusbarSection.VoltageControlZone', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Clamp'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Clamp\" base=\"ConductingEquipment\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Clamp', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Clamp.lengthFromTerminal1</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Clamp.lengthFromTerminal1"] || (depth0 != null ? depth0["cim:Clamp.lengthFromTerminal1"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Clamp.lengthFromTerminal1","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Clamp', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Clamp.lengthFromTerminal1', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['CompositeSwitch'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"CompositeSwitch\" base=\"Equipment\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:CompositeSwitch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:CompositeSwitch.compositeSwitchType</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:CompositeSwitch.compositeSwitchType"] || (depth0 != null ? depth0["cim:CompositeSwitch.compositeSwitchType"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:CompositeSwitch.compositeSwitchType","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:CompositeSwitch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:CompositeSwitch.compositeSwitchType', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:CompositeSwitch.Switches</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:CompositeSwitch.Switches"] || (depth0 != null ? depth0["cim:CompositeSwitch.Switches"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:CompositeSwitch.Switches","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:CompositeSwitch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:CompositeSwitch.Switches', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Conductor'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Conductor\" base=\"ConductingEquipment\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Conductor', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Conductor.length</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Conductor.length"] || (depth0 != null ? depth0["cim:Conductor.length"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Conductor.length","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Conductor', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Conductor.length', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Connector'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Connector\" base=\"ConductingEquipment\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Connector', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Cut'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Cut\" base=\"Switch\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Cut', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Cut.lengthFromTerminal1</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Cut.lengthFromTerminal1"] || (depth0 != null ? depth0["cim:Cut.lengthFromTerminal1"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Cut.lengthFromTerminal1","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Cut', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Cut.lengthFromTerminal1', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Cut.ACLineSegment</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Cut.ACLineSegment"] || (depth0 != null ? depth0["cim:Cut.ACLineSegment"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Cut.ACLineSegment","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Cut', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Cut.ACLineSegment', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Disconnector'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Disconnector\" base=\"Switch\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Disconnector', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['EarthFaultCompensator'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"EarthFaultCompensator\" base=\"ConductingEquipment\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EarthFaultCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EarthFaultCompensator.r</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EarthFaultCompensator.r"] || (depth0 != null ? depth0["cim:EarthFaultCompensator.r"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EarthFaultCompensator.r","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EarthFaultCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EarthFaultCompensator.r', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['EnergyConsumer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"EnergyConsumer\" base=\"ConductingEquipment\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergyConsumer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergyConsumer.customerCount</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergyConsumer.customerCount"] || (depth0 != null ? depth0["cim:EnergyConsumer.customerCount"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergyConsumer.customerCount","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergyConsumer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergyConsumer.customerCount', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergyConsumer.grounded</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergyConsumer.grounded"] || (depth0 != null ? depth0["cim:EnergyConsumer.grounded"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergyConsumer.grounded","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergyConsumer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergyConsumer.grounded', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergyConsumer.p</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergyConsumer.p"] || (depth0 != null ? depth0["cim:EnergyConsumer.p"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergyConsumer.p","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergyConsumer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergyConsumer.p', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergyConsumer.pfixed</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergyConsumer.pfixed"] || (depth0 != null ? depth0["cim:EnergyConsumer.pfixed"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergyConsumer.pfixed","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergyConsumer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergyConsumer.pfixed', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergyConsumer.pfixedPct</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergyConsumer.pfixedPct"] || (depth0 != null ? depth0["cim:EnergyConsumer.pfixedPct"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergyConsumer.pfixedPct","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergyConsumer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergyConsumer.pfixedPct', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergyConsumer.phaseConnection</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergyConsumer.phaseConnection"] || (depth0 != null ? depth0["cim:EnergyConsumer.phaseConnection"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergyConsumer.phaseConnection","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergyConsumer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergyConsumer.phaseConnection', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergyConsumer.q</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergyConsumer.q"] || (depth0 != null ? depth0["cim:EnergyConsumer.q"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergyConsumer.q","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergyConsumer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergyConsumer.q', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergyConsumer.qfixed</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergyConsumer.qfixed"] || (depth0 != null ? depth0["cim:EnergyConsumer.qfixed"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergyConsumer.qfixed","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergyConsumer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergyConsumer.qfixed', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergyConsumer.qfixedPct</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergyConsumer.qfixedPct"] || (depth0 != null ? depth0["cim:EnergyConsumer.qfixedPct"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergyConsumer.qfixedPct","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergyConsumer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergyConsumer.qfixedPct', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergyConsumer.LoadResponse</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergyConsumer.LoadResponse"] || (depth0 != null ? depth0["cim:EnergyConsumer.LoadResponse"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergyConsumer.LoadResponse","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergyConsumer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergyConsumer.LoadResponse', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergyConsumer.EnergyConsumerPhase</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergyConsumer.EnergyConsumerPhase"] || (depth0 != null ? depth0["cim:EnergyConsumer.EnergyConsumerPhase"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergyConsumer.EnergyConsumerPhase","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergyConsumer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergyConsumer.EnergyConsumerPhase', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['EnergyConsumerPhase'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"EnergyConsumerPhase\" base=\"PowerSystemResource\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergyConsumerPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergyConsumerPhase.pfixed</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergyConsumerPhase.pfixed"] || (depth0 != null ? depth0["cim:EnergyConsumerPhase.pfixed"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergyConsumerPhase.pfixed","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergyConsumerPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergyConsumerPhase.pfixed', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergyConsumerPhase.pfixedPct</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergyConsumerPhase.pfixedPct"] || (depth0 != null ? depth0["cim:EnergyConsumerPhase.pfixedPct"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergyConsumerPhase.pfixedPct","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergyConsumerPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergyConsumerPhase.pfixedPct', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergyConsumerPhase.phase</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergyConsumerPhase.phase"] || (depth0 != null ? depth0["cim:EnergyConsumerPhase.phase"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergyConsumerPhase.phase","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergyConsumerPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergyConsumerPhase.phase', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergyConsumerPhase.qfixed</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergyConsumerPhase.qfixed"] || (depth0 != null ? depth0["cim:EnergyConsumerPhase.qfixed"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergyConsumerPhase.qfixed","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergyConsumerPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergyConsumerPhase.qfixed', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergyConsumerPhase.qfixedPct</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergyConsumerPhase.qfixedPct"] || (depth0 != null ? depth0["cim:EnergyConsumerPhase.qfixedPct"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergyConsumerPhase.qfixedPct","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergyConsumerPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergyConsumerPhase.qfixedPct', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['EnergySource'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"EnergySource\" base=\"ConductingEquipment\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergySource', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergySource.activePower</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergySource.activePower"] || (depth0 != null ? depth0["cim:EnergySource.activePower"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergySource.activePower","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergySource', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergySource.activePower', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergySource.nominalVoltage</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergySource.nominalVoltage"] || (depth0 != null ? depth0["cim:EnergySource.nominalVoltage"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergySource.nominalVoltage","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergySource', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergySource.nominalVoltage', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergySource.r</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergySource.r"] || (depth0 != null ? depth0["cim:EnergySource.r"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergySource.r","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergySource', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergySource.r', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergySource.r0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergySource.r0"] || (depth0 != null ? depth0["cim:EnergySource.r0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergySource.r0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergySource', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergySource.r0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergySource.reactivePower</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergySource.reactivePower"] || (depth0 != null ? depth0["cim:EnergySource.reactivePower"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergySource.reactivePower","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergySource', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergySource.reactivePower', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergySource.rn</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergySource.rn"] || (depth0 != null ? depth0["cim:EnergySource.rn"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergySource.rn","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergySource', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergySource.rn', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergySource.voltageAngle</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergySource.voltageAngle"] || (depth0 != null ? depth0["cim:EnergySource.voltageAngle"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergySource.voltageAngle","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergySource', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergySource.voltageAngle', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergySource.voltageMagnitude</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergySource.voltageMagnitude"] || (depth0 != null ? depth0["cim:EnergySource.voltageMagnitude"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergySource.voltageMagnitude","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergySource', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergySource.voltageMagnitude', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergySource.x</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergySource.x"] || (depth0 != null ? depth0["cim:EnergySource.x"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergySource.x","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergySource', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergySource.x', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergySource.x0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergySource.x0"] || (depth0 != null ? depth0["cim:EnergySource.x0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergySource.x0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergySource', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergySource.x0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergySource.xn</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergySource.xn"] || (depth0 != null ? depth0["cim:EnergySource.xn"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergySource.xn","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergySource', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergySource.xn', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EnergySource.EnergySchedulingType</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EnergySource.EnergySchedulingType"] || (depth0 != null ? depth0["cim:EnergySource.EnergySchedulingType"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EnergySource.EnergySchedulingType","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergySource', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EnergySource.EnergySchedulingType', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['ExternalNetworkInjection'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"ExternalNetworkInjection\" base=\"RegulatingCondEq\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ExternalNetworkInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ExternalNetworkInjection.governorSCD</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ExternalNetworkInjection.governorSCD"] || (depth0 != null ? depth0["cim:ExternalNetworkInjection.governorSCD"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ExternalNetworkInjection.governorSCD","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ExternalNetworkInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ExternalNetworkInjection.governorSCD', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ExternalNetworkInjection.ikSecond</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ExternalNetworkInjection.ikSecond"] || (depth0 != null ? depth0["cim:ExternalNetworkInjection.ikSecond"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ExternalNetworkInjection.ikSecond","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ExternalNetworkInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ExternalNetworkInjection.ikSecond', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ExternalNetworkInjection.maxInitialSymShCCurrent</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ExternalNetworkInjection.maxInitialSymShCCurrent"] || (depth0 != null ? depth0["cim:ExternalNetworkInjection.maxInitialSymShCCurrent"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ExternalNetworkInjection.maxInitialSymShCCurrent","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ExternalNetworkInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ExternalNetworkInjection.maxInitialSymShCCurrent', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ExternalNetworkInjection.maxP</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ExternalNetworkInjection.maxP"] || (depth0 != null ? depth0["cim:ExternalNetworkInjection.maxP"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ExternalNetworkInjection.maxP","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ExternalNetworkInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ExternalNetworkInjection.maxP', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ExternalNetworkInjection.maxQ</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ExternalNetworkInjection.maxQ"] || (depth0 != null ? depth0["cim:ExternalNetworkInjection.maxQ"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ExternalNetworkInjection.maxQ","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ExternalNetworkInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ExternalNetworkInjection.maxQ', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ExternalNetworkInjection.maxR0ToX0Ratio</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ExternalNetworkInjection.maxR0ToX0Ratio"] || (depth0 != null ? depth0["cim:ExternalNetworkInjection.maxR0ToX0Ratio"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ExternalNetworkInjection.maxR0ToX0Ratio","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ExternalNetworkInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ExternalNetworkInjection.maxR0ToX0Ratio', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ExternalNetworkInjection.maxR1ToX1Ratio</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ExternalNetworkInjection.maxR1ToX1Ratio"] || (depth0 != null ? depth0["cim:ExternalNetworkInjection.maxR1ToX1Ratio"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ExternalNetworkInjection.maxR1ToX1Ratio","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ExternalNetworkInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ExternalNetworkInjection.maxR1ToX1Ratio', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ExternalNetworkInjection.maxZ0ToZ1Ratio</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ExternalNetworkInjection.maxZ0ToZ1Ratio"] || (depth0 != null ? depth0["cim:ExternalNetworkInjection.maxZ0ToZ1Ratio"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ExternalNetworkInjection.maxZ0ToZ1Ratio","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ExternalNetworkInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ExternalNetworkInjection.maxZ0ToZ1Ratio', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ExternalNetworkInjection.minInitialSymShCCurrent</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ExternalNetworkInjection.minInitialSymShCCurrent"] || (depth0 != null ? depth0["cim:ExternalNetworkInjection.minInitialSymShCCurrent"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ExternalNetworkInjection.minInitialSymShCCurrent","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ExternalNetworkInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ExternalNetworkInjection.minInitialSymShCCurrent', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ExternalNetworkInjection.minP</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ExternalNetworkInjection.minP"] || (depth0 != null ? depth0["cim:ExternalNetworkInjection.minP"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ExternalNetworkInjection.minP","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ExternalNetworkInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ExternalNetworkInjection.minP', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ExternalNetworkInjection.minQ</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ExternalNetworkInjection.minQ"] || (depth0 != null ? depth0["cim:ExternalNetworkInjection.minQ"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ExternalNetworkInjection.minQ","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ExternalNetworkInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ExternalNetworkInjection.minQ', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ExternalNetworkInjection.minR0ToX0Ratio</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ExternalNetworkInjection.minR0ToX0Ratio"] || (depth0 != null ? depth0["cim:ExternalNetworkInjection.minR0ToX0Ratio"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ExternalNetworkInjection.minR0ToX0Ratio","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ExternalNetworkInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ExternalNetworkInjection.minR0ToX0Ratio', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ExternalNetworkInjection.minR1ToX1Ratio</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ExternalNetworkInjection.minR1ToX1Ratio"] || (depth0 != null ? depth0["cim:ExternalNetworkInjection.minR1ToX1Ratio"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ExternalNetworkInjection.minR1ToX1Ratio","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ExternalNetworkInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ExternalNetworkInjection.minR1ToX1Ratio', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ExternalNetworkInjection.minZ0ToZ1Ratio</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ExternalNetworkInjection.minZ0ToZ1Ratio"] || (depth0 != null ? depth0["cim:ExternalNetworkInjection.minZ0ToZ1Ratio"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ExternalNetworkInjection.minZ0ToZ1Ratio","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ExternalNetworkInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ExternalNetworkInjection.minZ0ToZ1Ratio', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ExternalNetworkInjection.p</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ExternalNetworkInjection.p"] || (depth0 != null ? depth0["cim:ExternalNetworkInjection.p"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ExternalNetworkInjection.p","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ExternalNetworkInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ExternalNetworkInjection.p', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ExternalNetworkInjection.q</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ExternalNetworkInjection.q"] || (depth0 != null ? depth0["cim:ExternalNetworkInjection.q"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ExternalNetworkInjection.q","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ExternalNetworkInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ExternalNetworkInjection.q', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ExternalNetworkInjection.referencePriority</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ExternalNetworkInjection.referencePriority"] || (depth0 != null ? depth0["cim:ExternalNetworkInjection.referencePriority"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ExternalNetworkInjection.referencePriority","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ExternalNetworkInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ExternalNetworkInjection.referencePriority', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ExternalNetworkInjection.voltageFactor</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ExternalNetworkInjection.voltageFactor"] || (depth0 != null ? depth0["cim:ExternalNetworkInjection.voltageFactor"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ExternalNetworkInjection.voltageFactor","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ExternalNetworkInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ExternalNetworkInjection.voltageFactor', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['FrequencyConverter'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"FrequencyConverter\" base=\"RegulatingCondEq\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:FrequencyConverter', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:FrequencyConverter.frequency</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:FrequencyConverter.frequency"] || (depth0 != null ? depth0["cim:FrequencyConverter.frequency"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:FrequencyConverter.frequency","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:FrequencyConverter', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:FrequencyConverter.frequency', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:FrequencyConverter.maxP</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:FrequencyConverter.maxP"] || (depth0 != null ? depth0["cim:FrequencyConverter.maxP"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:FrequencyConverter.maxP","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:FrequencyConverter', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:FrequencyConverter.maxP', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:FrequencyConverter.maxU</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:FrequencyConverter.maxU"] || (depth0 != null ? depth0["cim:FrequencyConverter.maxU"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:FrequencyConverter.maxU","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:FrequencyConverter', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:FrequencyConverter.maxU', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:FrequencyConverter.minP</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:FrequencyConverter.minP"] || (depth0 != null ? depth0["cim:FrequencyConverter.minP"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:FrequencyConverter.minP","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:FrequencyConverter', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:FrequencyConverter.minP', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:FrequencyConverter.minU</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:FrequencyConverter.minU"] || (depth0 != null ? depth0["cim:FrequencyConverter.minU"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:FrequencyConverter.minU","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:FrequencyConverter', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:FrequencyConverter.minU', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Fuse'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Fuse\" base=\"Switch\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Fuse', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Ground'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Ground\" base=\"ConductingEquipment\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Ground', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['GroundDisconnector'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"GroundDisconnector\" base=\"Switch\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:GroundDisconnector', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['GroundingImpedance'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"GroundingImpedance\" base=\"EarthFaultCompensator\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:GroundingImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:GroundingImpedance.x</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:GroundingImpedance.x"] || (depth0 != null ? depth0["cim:GroundingImpedance.x"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:GroundingImpedance.x","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:GroundingImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:GroundingImpedance.x', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Jumper'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Jumper\" base=\"Switch\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Jumper', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Junction'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Junction\" base=\"Connector\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Junction', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Line'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Line\" base=\"EquipmentContainer\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Line', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['LinearShuntCompensator'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"LinearShuntCompensator\" base=\"ShuntCompensator\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LinearShuntCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:LinearShuntCompensator.b0PerSection</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:LinearShuntCompensator.b0PerSection"] || (depth0 != null ? depth0["cim:LinearShuntCompensator.b0PerSection"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:LinearShuntCompensator.b0PerSection","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LinearShuntCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:LinearShuntCompensator.b0PerSection', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:LinearShuntCompensator.bPerSection</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:LinearShuntCompensator.bPerSection"] || (depth0 != null ? depth0["cim:LinearShuntCompensator.bPerSection"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:LinearShuntCompensator.bPerSection","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LinearShuntCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:LinearShuntCompensator.bPerSection', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:LinearShuntCompensator.g0PerSection</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:LinearShuntCompensator.g0PerSection"] || (depth0 != null ? depth0["cim:LinearShuntCompensator.g0PerSection"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:LinearShuntCompensator.g0PerSection","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LinearShuntCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:LinearShuntCompensator.g0PerSection', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:LinearShuntCompensator.gPerSection</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:LinearShuntCompensator.gPerSection"] || (depth0 != null ? depth0["cim:LinearShuntCompensator.gPerSection"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:LinearShuntCompensator.gPerSection","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LinearShuntCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:LinearShuntCompensator.gPerSection', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['LinearShuntCompensatorPhase'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"LinearShuntCompensatorPhase\" base=\"ShuntCompensatorPhase\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LinearShuntCompensatorPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:LinearShuntCompensatorPhase.bPerSection</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:LinearShuntCompensatorPhase.bPerSection"] || (depth0 != null ? depth0["cim:LinearShuntCompensatorPhase.bPerSection"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:LinearShuntCompensatorPhase.bPerSection","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LinearShuntCompensatorPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:LinearShuntCompensatorPhase.bPerSection', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:LinearShuntCompensatorPhase.gPerSection</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:LinearShuntCompensatorPhase.gPerSection"] || (depth0 != null ? depth0["cim:LinearShuntCompensatorPhase.gPerSection"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:LinearShuntCompensatorPhase.gPerSection","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LinearShuntCompensatorPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:LinearShuntCompensatorPhase.gPerSection', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['LoadBreakSwitch'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"LoadBreakSwitch\" base=\"ProtectedSwitch\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LoadBreakSwitch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['MutualCoupling'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"MutualCoupling\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:MutualCoupling', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:MutualCoupling.b0ch</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:MutualCoupling.b0ch"] || (depth0 != null ? depth0["cim:MutualCoupling.b0ch"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:MutualCoupling.b0ch","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:MutualCoupling', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:MutualCoupling.b0ch', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:MutualCoupling.distance11</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:MutualCoupling.distance11"] || (depth0 != null ? depth0["cim:MutualCoupling.distance11"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:MutualCoupling.distance11","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:MutualCoupling', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:MutualCoupling.distance11', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:MutualCoupling.distance12</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:MutualCoupling.distance12"] || (depth0 != null ? depth0["cim:MutualCoupling.distance12"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:MutualCoupling.distance12","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:MutualCoupling', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:MutualCoupling.distance12', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:MutualCoupling.distance21</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:MutualCoupling.distance21"] || (depth0 != null ? depth0["cim:MutualCoupling.distance21"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:MutualCoupling.distance21","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:MutualCoupling', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:MutualCoupling.distance21', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:MutualCoupling.distance22</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:MutualCoupling.distance22"] || (depth0 != null ? depth0["cim:MutualCoupling.distance22"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:MutualCoupling.distance22","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:MutualCoupling', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:MutualCoupling.distance22', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:MutualCoupling.g0ch</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:MutualCoupling.g0ch"] || (depth0 != null ? depth0["cim:MutualCoupling.g0ch"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:MutualCoupling.g0ch","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:MutualCoupling', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:MutualCoupling.g0ch', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:MutualCoupling.r0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:MutualCoupling.r0"] || (depth0 != null ? depth0["cim:MutualCoupling.r0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:MutualCoupling.r0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:MutualCoupling', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:MutualCoupling.r0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:MutualCoupling.x0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:MutualCoupling.x0"] || (depth0 != null ? depth0["cim:MutualCoupling.x0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:MutualCoupling.x0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:MutualCoupling', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:MutualCoupling.x0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:MutualCoupling.First_Terminal</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:MutualCoupling.First_Terminal"] || (depth0 != null ? depth0["cim:MutualCoupling.First_Terminal"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:MutualCoupling.First_Terminal","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:MutualCoupling', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:MutualCoupling.First_Terminal', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:MutualCoupling.Second_Terminal</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:MutualCoupling.Second_Terminal"] || (depth0 != null ? depth0["cim:MutualCoupling.Second_Terminal"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:MutualCoupling.Second_Terminal","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:MutualCoupling', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:MutualCoupling.Second_Terminal', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['NonlinearShuntCompensator'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"NonlinearShuntCompensator\" base=\"ShuntCompensator\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:NonlinearShuntCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:NonlinearShuntCompensator.NonlinearShuntCompensatorPoints</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:NonlinearShuntCompensator.NonlinearShuntCompensatorPoints"] || (depth0 != null ? depth0["cim:NonlinearShuntCompensator.NonlinearShuntCompensatorPoints"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:NonlinearShuntCompensator.NonlinearShuntCompensatorPoints","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:NonlinearShuntCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:NonlinearShuntCompensator.NonlinearShuntCompensatorPoints', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['NonlinearShuntCompensatorPhase'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"NonlinearShuntCompensatorPhase\" base=\"ShuntCompensatorPhase\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:NonlinearShuntCompensatorPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:NonlinearShuntCompensatorPhase.NonlinearShuntCompensatorPhasePoints</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:NonlinearShuntCompensatorPhase.NonlinearShuntCompensatorPhasePoints"] || (depth0 != null ? depth0["cim:NonlinearShuntCompensatorPhase.NonlinearShuntCompensatorPhasePoints"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:NonlinearShuntCompensatorPhase.NonlinearShuntCompensatorPhasePoints","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:NonlinearShuntCompensatorPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:NonlinearShuntCompensatorPhase.NonlinearShuntCompensatorPhasePoints', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['NonlinearShuntCompensatorPhasePoint'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"NonlinearShuntCompensatorPhasePoint\"/>\n";
},"useData":true});
templates['NonlinearShuntCompensatorPoint'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"NonlinearShuntCompensatorPoint\"/>\n";
},"useData":true});
templates['PerLengthImpedance'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"PerLengthImpedance\" base=\"PerLengthLineParameter\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PerLengthImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PerLengthImpedance.ACLineSegments</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PerLengthImpedance.ACLineSegments"] || (depth0 != null ? depth0["cim:PerLengthImpedance.ACLineSegments"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PerLengthImpedance.ACLineSegments","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PerLengthImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PerLengthImpedance.ACLineSegments', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['PerLengthLineParameter'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"PerLengthLineParameter\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PerLengthLineParameter', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['PerLengthPhaseImpedance'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"PerLengthPhaseImpedance\" base=\"PerLengthImpedance\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PerLengthPhaseImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PerLengthPhaseImpedance.conductorCount</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PerLengthPhaseImpedance.conductorCount"] || (depth0 != null ? depth0["cim:PerLengthPhaseImpedance.conductorCount"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PerLengthPhaseImpedance.conductorCount","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PerLengthPhaseImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PerLengthPhaseImpedance.conductorCount', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PerLengthPhaseImpedance.PhaseImpedanceData</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PerLengthPhaseImpedance.PhaseImpedanceData"] || (depth0 != null ? depth0["cim:PerLengthPhaseImpedance.PhaseImpedanceData"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PerLengthPhaseImpedance.PhaseImpedanceData","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PerLengthPhaseImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PerLengthPhaseImpedance.PhaseImpedanceData', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['PerLengthSequenceImpedance'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"PerLengthSequenceImpedance\" base=\"PerLengthImpedance\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PerLengthSequenceImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PerLengthSequenceImpedance.b0ch</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PerLengthSequenceImpedance.b0ch"] || (depth0 != null ? depth0["cim:PerLengthSequenceImpedance.b0ch"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PerLengthSequenceImpedance.b0ch","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PerLengthSequenceImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PerLengthSequenceImpedance.b0ch', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PerLengthSequenceImpedance.bch</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PerLengthSequenceImpedance.bch"] || (depth0 != null ? depth0["cim:PerLengthSequenceImpedance.bch"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PerLengthSequenceImpedance.bch","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PerLengthSequenceImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PerLengthSequenceImpedance.bch', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PerLengthSequenceImpedance.g0ch</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PerLengthSequenceImpedance.g0ch"] || (depth0 != null ? depth0["cim:PerLengthSequenceImpedance.g0ch"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PerLengthSequenceImpedance.g0ch","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PerLengthSequenceImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PerLengthSequenceImpedance.g0ch', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PerLengthSequenceImpedance.gch</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PerLengthSequenceImpedance.gch"] || (depth0 != null ? depth0["cim:PerLengthSequenceImpedance.gch"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PerLengthSequenceImpedance.gch","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PerLengthSequenceImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PerLengthSequenceImpedance.gch', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PerLengthSequenceImpedance.r</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PerLengthSequenceImpedance.r"] || (depth0 != null ? depth0["cim:PerLengthSequenceImpedance.r"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PerLengthSequenceImpedance.r","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PerLengthSequenceImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PerLengthSequenceImpedance.r', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PerLengthSequenceImpedance.r0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PerLengthSequenceImpedance.r0"] || (depth0 != null ? depth0["cim:PerLengthSequenceImpedance.r0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PerLengthSequenceImpedance.r0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PerLengthSequenceImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PerLengthSequenceImpedance.r0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PerLengthSequenceImpedance.x</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PerLengthSequenceImpedance.x"] || (depth0 != null ? depth0["cim:PerLengthSequenceImpedance.x"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PerLengthSequenceImpedance.x","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PerLengthSequenceImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PerLengthSequenceImpedance.x', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PerLengthSequenceImpedance.x0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PerLengthSequenceImpedance.x0"] || (depth0 != null ? depth0["cim:PerLengthSequenceImpedance.x0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PerLengthSequenceImpedance.x0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PerLengthSequenceImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PerLengthSequenceImpedance.x0', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['PetersenCoil'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"PetersenCoil\" base=\"EarthFaultCompensator\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PetersenCoil', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PetersenCoil.mode</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PetersenCoil.mode"] || (depth0 != null ? depth0["cim:PetersenCoil.mode"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PetersenCoil.mode","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PetersenCoil', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PetersenCoil.mode', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PetersenCoil.nominalU</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PetersenCoil.nominalU"] || (depth0 != null ? depth0["cim:PetersenCoil.nominalU"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PetersenCoil.nominalU","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PetersenCoil', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PetersenCoil.nominalU', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PetersenCoil.offsetCurrent</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PetersenCoil.offsetCurrent"] || (depth0 != null ? depth0["cim:PetersenCoil.offsetCurrent"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PetersenCoil.offsetCurrent","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PetersenCoil', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PetersenCoil.offsetCurrent', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PetersenCoil.positionCurrent</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PetersenCoil.positionCurrent"] || (depth0 != null ? depth0["cim:PetersenCoil.positionCurrent"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PetersenCoil.positionCurrent","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PetersenCoil', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PetersenCoil.positionCurrent', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PetersenCoil.xGroundMax</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PetersenCoil.xGroundMax"] || (depth0 != null ? depth0["cim:PetersenCoil.xGroundMax"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PetersenCoil.xGroundMax","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PetersenCoil', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PetersenCoil.xGroundMax', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PetersenCoil.xGroundMin</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PetersenCoil.xGroundMin"] || (depth0 != null ? depth0["cim:PetersenCoil.xGroundMin"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PetersenCoil.xGroundMin","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PetersenCoil', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PetersenCoil.xGroundMin', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PetersenCoil.xGroundNominal</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PetersenCoil.xGroundNominal"] || (depth0 != null ? depth0["cim:PetersenCoil.xGroundNominal"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PetersenCoil.xGroundNominal","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PetersenCoil', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PetersenCoil.xGroundNominal', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['PhaseImpedanceData'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"PhaseImpedanceData\"/>\n";
},"useData":true});
templates['PhaseTapChanger'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"PhaseTapChanger\" base=\"TapChanger\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PhaseTapChanger', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['PhaseTapChangerAsymmetrical'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"PhaseTapChangerAsymmetrical\" base=\"PhaseTapChangerNonLinear\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PhaseTapChangerAsymmetrical', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PhaseTapChangerAsymmetrical.windingConnectionAngle</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PhaseTapChangerAsymmetrical.windingConnectionAngle"] || (depth0 != null ? depth0["cim:PhaseTapChangerAsymmetrical.windingConnectionAngle"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PhaseTapChangerAsymmetrical.windingConnectionAngle","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PhaseTapChangerAsymmetrical', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PhaseTapChangerAsymmetrical.windingConnectionAngle', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['PhaseTapChangerLinear'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"PhaseTapChangerLinear\" base=\"PhaseTapChanger\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PhaseTapChangerLinear', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PhaseTapChangerLinear.stepPhaseShiftIncrement</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PhaseTapChangerLinear.stepPhaseShiftIncrement"] || (depth0 != null ? depth0["cim:PhaseTapChangerLinear.stepPhaseShiftIncrement"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PhaseTapChangerLinear.stepPhaseShiftIncrement","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PhaseTapChangerLinear', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PhaseTapChangerLinear.stepPhaseShiftIncrement', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PhaseTapChangerLinear.xMax</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PhaseTapChangerLinear.xMax"] || (depth0 != null ? depth0["cim:PhaseTapChangerLinear.xMax"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PhaseTapChangerLinear.xMax","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PhaseTapChangerLinear', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PhaseTapChangerLinear.xMax', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PhaseTapChangerLinear.xMin</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PhaseTapChangerLinear.xMin"] || (depth0 != null ? depth0["cim:PhaseTapChangerLinear.xMin"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PhaseTapChangerLinear.xMin","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PhaseTapChangerLinear', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PhaseTapChangerLinear.xMin', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['PhaseTapChangerNonLinear'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"PhaseTapChangerNonLinear\" base=\"PhaseTapChanger\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PhaseTapChangerNonLinear', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PhaseTapChangerNonLinear.voltageStepIncrement</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PhaseTapChangerNonLinear.voltageStepIncrement"] || (depth0 != null ? depth0["cim:PhaseTapChangerNonLinear.voltageStepIncrement"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PhaseTapChangerNonLinear.voltageStepIncrement","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PhaseTapChangerNonLinear', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PhaseTapChangerNonLinear.voltageStepIncrement', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PhaseTapChangerNonLinear.xMax</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PhaseTapChangerNonLinear.xMax"] || (depth0 != null ? depth0["cim:PhaseTapChangerNonLinear.xMax"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PhaseTapChangerNonLinear.xMax","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PhaseTapChangerNonLinear', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PhaseTapChangerNonLinear.xMax', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PhaseTapChangerNonLinear.xMin</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PhaseTapChangerNonLinear.xMin"] || (depth0 != null ? depth0["cim:PhaseTapChangerNonLinear.xMin"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PhaseTapChangerNonLinear.xMin","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PhaseTapChangerNonLinear', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PhaseTapChangerNonLinear.xMin', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['PhaseTapChangerSymmetrical'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"PhaseTapChangerSymmetrical\" base=\"PhaseTapChangerNonLinear\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PhaseTapChangerSymmetrical', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['PhaseTapChangerTable'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"PhaseTapChangerTable\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PhaseTapChangerTable', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PhaseTapChangerTable.PhaseTapChangerTabular</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PhaseTapChangerTable.PhaseTapChangerTabular"] || (depth0 != null ? depth0["cim:PhaseTapChangerTable.PhaseTapChangerTabular"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PhaseTapChangerTable.PhaseTapChangerTabular","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PhaseTapChangerTable', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PhaseTapChangerTable.PhaseTapChangerTabular', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['PhaseTapChangerTablePoint'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"PhaseTapChangerTablePoint\" base=\"TapChangerTablePoint\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PhaseTapChangerTablePoint', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PhaseTapChangerTablePoint.angle</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PhaseTapChangerTablePoint.angle"] || (depth0 != null ? depth0["cim:PhaseTapChangerTablePoint.angle"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PhaseTapChangerTablePoint.angle","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PhaseTapChangerTablePoint', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PhaseTapChangerTablePoint.angle', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PhaseTapChangerTablePoint.PhaseTapChangerTable</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PhaseTapChangerTablePoint.PhaseTapChangerTable"] || (depth0 != null ? depth0["cim:PhaseTapChangerTablePoint.PhaseTapChangerTable"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PhaseTapChangerTablePoint.PhaseTapChangerTable","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PhaseTapChangerTablePoint', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PhaseTapChangerTablePoint.PhaseTapChangerTable', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['PhaseTapChangerTabular'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"PhaseTapChangerTabular\" base=\"PhaseTapChanger\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PhaseTapChangerTabular', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Plant'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Plant\" base=\"EquipmentContainer\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Plant', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['PowerTransformer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"PowerTransformer\" base=\"ConductingEquipment\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent"] || (depth0 != null ? depth0["cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage"] || (depth0 != null ? depth0["cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformer.beforeShortCircuitAnglePf</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformer.beforeShortCircuitAnglePf"] || (depth0 != null ? depth0["cim:PowerTransformer.beforeShortCircuitAnglePf"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformer.beforeShortCircuitAnglePf","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformer.beforeShortCircuitAnglePf', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformer.highSideMinOperatingU</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformer.highSideMinOperatingU"] || (depth0 != null ? depth0["cim:PowerTransformer.highSideMinOperatingU"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformer.highSideMinOperatingU","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformer.highSideMinOperatingU', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformer.isPartOfGeneratorUnit</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformer.isPartOfGeneratorUnit"] || (depth0 != null ? depth0["cim:PowerTransformer.isPartOfGeneratorUnit"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformer.isPartOfGeneratorUnit","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformer.isPartOfGeneratorUnit', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformer.operationalValuesConsidered</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformer.operationalValuesConsidered"] || (depth0 != null ? depth0["cim:PowerTransformer.operationalValuesConsidered"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformer.operationalValuesConsidered","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformer.operationalValuesConsidered', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformer.vectorGroup</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformer.vectorGroup"] || (depth0 != null ? depth0["cim:PowerTransformer.vectorGroup"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformer.vectorGroup","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformer.vectorGroup', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformer.PowerTransformerEnd</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformer.PowerTransformerEnd"] || (depth0 != null ? depth0["cim:PowerTransformer.PowerTransformerEnd"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformer.PowerTransformerEnd","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformer.PowerTransformerEnd', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['PowerTransformerEnd'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"PowerTransformerEnd\" base=\"TransformerEnd\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformerEnd.b</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformerEnd.b"] || (depth0 != null ? depth0["cim:PowerTransformerEnd.b"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformerEnd.b","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformerEnd.b', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformerEnd.b0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformerEnd.b0"] || (depth0 != null ? depth0["cim:PowerTransformerEnd.b0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformerEnd.b0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformerEnd.b0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformerEnd.connectionKind</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformerEnd.connectionKind"] || (depth0 != null ? depth0["cim:PowerTransformerEnd.connectionKind"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformerEnd.connectionKind","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformerEnd.connectionKind', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformerEnd.g</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformerEnd.g"] || (depth0 != null ? depth0["cim:PowerTransformerEnd.g"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformerEnd.g","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformerEnd.g', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformerEnd.g0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformerEnd.g0"] || (depth0 != null ? depth0["cim:PowerTransformerEnd.g0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformerEnd.g0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformerEnd.g0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformerEnd.phaseAngleClock</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformerEnd.phaseAngleClock"] || (depth0 != null ? depth0["cim:PowerTransformerEnd.phaseAngleClock"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformerEnd.phaseAngleClock","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformerEnd.phaseAngleClock', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformerEnd.r</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformerEnd.r"] || (depth0 != null ? depth0["cim:PowerTransformerEnd.r"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformerEnd.r","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformerEnd.r', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformerEnd.r0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformerEnd.r0"] || (depth0 != null ? depth0["cim:PowerTransformerEnd.r0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformerEnd.r0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformerEnd.r0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformerEnd.ratedS</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformerEnd.ratedS"] || (depth0 != null ? depth0["cim:PowerTransformerEnd.ratedS"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformerEnd.ratedS","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformerEnd.ratedS', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformerEnd.ratedU</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformerEnd.ratedU"] || (depth0 != null ? depth0["cim:PowerTransformerEnd.ratedU"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformerEnd.ratedU","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformerEnd.ratedU', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformerEnd.x</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformerEnd.x"] || (depth0 != null ? depth0["cim:PowerTransformerEnd.x"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformerEnd.x","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformerEnd.x', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerTransformerEnd.x0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerTransformerEnd.x0"] || (depth0 != null ? depth0["cim:PowerTransformerEnd.x0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerTransformerEnd.x0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerTransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerTransformerEnd.x0', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['ProtectedSwitch'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"ProtectedSwitch\" base=\"Switch\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ProtectedSwitch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ProtectedSwitch.breakingCapacity</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ProtectedSwitch.breakingCapacity"] || (depth0 != null ? depth0["cim:ProtectedSwitch.breakingCapacity"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ProtectedSwitch.breakingCapacity","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ProtectedSwitch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ProtectedSwitch.breakingCapacity', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['RatioTapChanger'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"RatioTapChanger\" base=\"TapChanger\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RatioTapChanger', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RatioTapChanger.stepVoltageIncrement</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RatioTapChanger.stepVoltageIncrement"] || (depth0 != null ? depth0["cim:RatioTapChanger.stepVoltageIncrement"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RatioTapChanger.stepVoltageIncrement","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RatioTapChanger', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RatioTapChanger.stepVoltageIncrement', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RatioTapChanger.tculControlMode</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RatioTapChanger.tculControlMode"] || (depth0 != null ? depth0["cim:RatioTapChanger.tculControlMode"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RatioTapChanger.tculControlMode","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RatioTapChanger', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RatioTapChanger.tculControlMode', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RatioTapChanger.RatioTapChangerTable</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RatioTapChanger.RatioTapChangerTable"] || (depth0 != null ? depth0["cim:RatioTapChanger.RatioTapChangerTable"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RatioTapChanger.RatioTapChangerTable","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RatioTapChanger', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RatioTapChanger.RatioTapChangerTable', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['RatioTapChangerTable'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"RatioTapChangerTable\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RatioTapChangerTable', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['RatioTapChangerTablePoint'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"RatioTapChangerTablePoint\" base=\"TapChangerTablePoint\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RatioTapChangerTablePoint', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RatioTapChangerTablePoint.RatioTapChangerTable</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RatioTapChangerTablePoint.RatioTapChangerTable"] || (depth0 != null ? depth0["cim:RatioTapChangerTablePoint.RatioTapChangerTable"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RatioTapChangerTablePoint.RatioTapChangerTable","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RatioTapChangerTablePoint', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RatioTapChangerTablePoint.RatioTapChangerTable', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['ReactiveCapabilityCurve'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"ReactiveCapabilityCurve\" base=\"Curve\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ReactiveCapabilityCurve', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ReactiveCapabilityCurve.coolantTemperature</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ReactiveCapabilityCurve.coolantTemperature"] || (depth0 != null ? depth0["cim:ReactiveCapabilityCurve.coolantTemperature"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ReactiveCapabilityCurve.coolantTemperature","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ReactiveCapabilityCurve', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ReactiveCapabilityCurve.coolantTemperature', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ReactiveCapabilityCurve.hydrogenPressure</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ReactiveCapabilityCurve.hydrogenPressure"] || (depth0 != null ? depth0["cim:ReactiveCapabilityCurve.hydrogenPressure"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ReactiveCapabilityCurve.hydrogenPressure","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ReactiveCapabilityCurve', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ReactiveCapabilityCurve.hydrogenPressure', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ReactiveCapabilityCurve.EquivalentInjection</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ReactiveCapabilityCurve.EquivalentInjection"] || (depth0 != null ? depth0["cim:ReactiveCapabilityCurve.EquivalentInjection"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ReactiveCapabilityCurve.EquivalentInjection","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ReactiveCapabilityCurve', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ReactiveCapabilityCurve.EquivalentInjection', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ReactiveCapabilityCurve.InitiallyUsedBySynchronousMachines</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ReactiveCapabilityCurve.InitiallyUsedBySynchronousMachines"] || (depth0 != null ? depth0["cim:ReactiveCapabilityCurve.InitiallyUsedBySynchronousMachines"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ReactiveCapabilityCurve.InitiallyUsedBySynchronousMachines","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ReactiveCapabilityCurve', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ReactiveCapabilityCurve.InitiallyUsedBySynchronousMachines', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ReactiveCapabilityCurve.SynchronousMachines</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ReactiveCapabilityCurve.SynchronousMachines"] || (depth0 != null ? depth0["cim:ReactiveCapabilityCurve.SynchronousMachines"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ReactiveCapabilityCurve.SynchronousMachines","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ReactiveCapabilityCurve', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ReactiveCapabilityCurve.SynchronousMachines', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Recloser'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Recloser\" base=\"ProtectedSwitch\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Recloser', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['RegulatingCondEq'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"RegulatingCondEq\" base=\"ConductingEquipment\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RegulatingCondEq', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RegulatingCondEq.controlEnabled</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RegulatingCondEq.controlEnabled"] || (depth0 != null ? depth0["cim:RegulatingCondEq.controlEnabled"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RegulatingCondEq.controlEnabled","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RegulatingCondEq', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RegulatingCondEq.controlEnabled', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RegulatingCondEq.RegulatingControl</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RegulatingCondEq.RegulatingControl"] || (depth0 != null ? depth0["cim:RegulatingCondEq.RegulatingControl"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RegulatingCondEq.RegulatingControl","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RegulatingCondEq', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RegulatingCondEq.RegulatingControl', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['RegulatingControl'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"RegulatingControl\" base=\"PowerSystemResource\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RegulatingControl', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RegulatingControl.discrete</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RegulatingControl.discrete"] || (depth0 != null ? depth0["cim:RegulatingControl.discrete"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RegulatingControl.discrete","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RegulatingControl', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RegulatingControl.discrete', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RegulatingControl.enabled</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RegulatingControl.enabled"] || (depth0 != null ? depth0["cim:RegulatingControl.enabled"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RegulatingControl.enabled","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RegulatingControl', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RegulatingControl.enabled', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RegulatingControl.mode</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RegulatingControl.mode"] || (depth0 != null ? depth0["cim:RegulatingControl.mode"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RegulatingControl.mode","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RegulatingControl', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RegulatingControl.mode', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RegulatingControl.monitoredPhase</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RegulatingControl.monitoredPhase"] || (depth0 != null ? depth0["cim:RegulatingControl.monitoredPhase"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RegulatingControl.monitoredPhase","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RegulatingControl', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RegulatingControl.monitoredPhase', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RegulatingControl.targetDeadband</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RegulatingControl.targetDeadband"] || (depth0 != null ? depth0["cim:RegulatingControl.targetDeadband"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RegulatingControl.targetDeadband","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RegulatingControl', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RegulatingControl.targetDeadband', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RegulatingControl.targetValue</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RegulatingControl.targetValue"] || (depth0 != null ? depth0["cim:RegulatingControl.targetValue"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RegulatingControl.targetValue","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RegulatingControl', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RegulatingControl.targetValue', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RegulatingControl.targetValueUnitMultiplier</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RegulatingControl.targetValueUnitMultiplier"] || (depth0 != null ? depth0["cim:RegulatingControl.targetValueUnitMultiplier"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RegulatingControl.targetValueUnitMultiplier","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RegulatingControl', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RegulatingControl.targetValueUnitMultiplier', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['RegulationSchedule'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"RegulationSchedule\" base=\"SeasonDayTypeSchedule\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RegulationSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RegulationSchedule.RegulatingControl</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RegulationSchedule.RegulatingControl"] || (depth0 != null ? depth0["cim:RegulationSchedule.RegulatingControl"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RegulationSchedule.RegulatingControl","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RegulationSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RegulationSchedule.RegulatingControl', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RegulationSchedule.VoltageControlZones</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RegulationSchedule.VoltageControlZones"] || (depth0 != null ? depth0["cim:RegulationSchedule.VoltageControlZones"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RegulationSchedule.VoltageControlZones","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RegulationSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RegulationSchedule.VoltageControlZones', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['RotatingMachine'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"RotatingMachine\" base=\"RegulatingCondEq\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RotatingMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RotatingMachine.p</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RotatingMachine.p"] || (depth0 != null ? depth0["cim:RotatingMachine.p"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RotatingMachine.p","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RotatingMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RotatingMachine.p', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RotatingMachine.q</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RotatingMachine.q"] || (depth0 != null ? depth0["cim:RotatingMachine.q"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RotatingMachine.q","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RotatingMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RotatingMachine.q', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RotatingMachine.ratedPowerFactor</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RotatingMachine.ratedPowerFactor"] || (depth0 != null ? depth0["cim:RotatingMachine.ratedPowerFactor"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RotatingMachine.ratedPowerFactor","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RotatingMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RotatingMachine.ratedPowerFactor', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RotatingMachine.ratedS</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RotatingMachine.ratedS"] || (depth0 != null ? depth0["cim:RotatingMachine.ratedS"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RotatingMachine.ratedS","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RotatingMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RotatingMachine.ratedS', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RotatingMachine.ratedU</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RotatingMachine.ratedU"] || (depth0 != null ? depth0["cim:RotatingMachine.ratedU"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RotatingMachine.ratedU","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RotatingMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RotatingMachine.ratedU', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RotatingMachine.HydroPump</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RotatingMachine.HydroPump"] || (depth0 != null ? depth0["cim:RotatingMachine.HydroPump"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RotatingMachine.HydroPump","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RotatingMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RotatingMachine.HydroPump', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Sectionaliser'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Sectionaliser\" base=\"Switch\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Sectionaliser', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['SeriesCompensator'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"SeriesCompensator\" base=\"ConductingEquipment\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SeriesCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SeriesCompensator.r</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SeriesCompensator.r"] || (depth0 != null ? depth0["cim:SeriesCompensator.r"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SeriesCompensator.r","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SeriesCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SeriesCompensator.r', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SeriesCompensator.r0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SeriesCompensator.r0"] || (depth0 != null ? depth0["cim:SeriesCompensator.r0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SeriesCompensator.r0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SeriesCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SeriesCompensator.r0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SeriesCompensator.varistorPresent</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SeriesCompensator.varistorPresent"] || (depth0 != null ? depth0["cim:SeriesCompensator.varistorPresent"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SeriesCompensator.varistorPresent","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SeriesCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SeriesCompensator.varistorPresent', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SeriesCompensator.varistorRatedCurrent</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SeriesCompensator.varistorRatedCurrent"] || (depth0 != null ? depth0["cim:SeriesCompensator.varistorRatedCurrent"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SeriesCompensator.varistorRatedCurrent","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SeriesCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SeriesCompensator.varistorRatedCurrent', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SeriesCompensator.varistorVoltageThreshold</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SeriesCompensator.varistorVoltageThreshold"] || (depth0 != null ? depth0["cim:SeriesCompensator.varistorVoltageThreshold"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SeriesCompensator.varistorVoltageThreshold","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SeriesCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SeriesCompensator.varistorVoltageThreshold', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SeriesCompensator.x</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SeriesCompensator.x"] || (depth0 != null ? depth0["cim:SeriesCompensator.x"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SeriesCompensator.x","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SeriesCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SeriesCompensator.x', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SeriesCompensator.x0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SeriesCompensator.x0"] || (depth0 != null ? depth0["cim:SeriesCompensator.x0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SeriesCompensator.x0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SeriesCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SeriesCompensator.x0', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['ShuntCompensator'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"ShuntCompensator\" base=\"RegulatingCondEq\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ShuntCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ShuntCompensator.aVRDelay</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ShuntCompensator.aVRDelay"] || (depth0 != null ? depth0["cim:ShuntCompensator.aVRDelay"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ShuntCompensator.aVRDelay","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ShuntCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ShuntCompensator.aVRDelay', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ShuntCompensator.grounded</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ShuntCompensator.grounded"] || (depth0 != null ? depth0["cim:ShuntCompensator.grounded"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ShuntCompensator.grounded","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ShuntCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ShuntCompensator.grounded', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ShuntCompensator.maximumSections</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ShuntCompensator.maximumSections"] || (depth0 != null ? depth0["cim:ShuntCompensator.maximumSections"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ShuntCompensator.maximumSections","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ShuntCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ShuntCompensator.maximumSections', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ShuntCompensator.nomU</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ShuntCompensator.nomU"] || (depth0 != null ? depth0["cim:ShuntCompensator.nomU"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ShuntCompensator.nomU","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ShuntCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ShuntCompensator.nomU', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ShuntCompensator.normalSections</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ShuntCompensator.normalSections"] || (depth0 != null ? depth0["cim:ShuntCompensator.normalSections"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ShuntCompensator.normalSections","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ShuntCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ShuntCompensator.normalSections', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ShuntCompensator.phaseConnection</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ShuntCompensator.phaseConnection"] || (depth0 != null ? depth0["cim:ShuntCompensator.phaseConnection"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ShuntCompensator.phaseConnection","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ShuntCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ShuntCompensator.phaseConnection', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ShuntCompensator.sections</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ShuntCompensator.sections"] || (depth0 != null ? depth0["cim:ShuntCompensator.sections"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ShuntCompensator.sections","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ShuntCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ShuntCompensator.sections', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ShuntCompensator.switchOnCount</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ShuntCompensator.switchOnCount"] || (depth0 != null ? depth0["cim:ShuntCompensator.switchOnCount"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ShuntCompensator.switchOnCount","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ShuntCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ShuntCompensator.switchOnCount', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ShuntCompensator.switchOnDate</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ShuntCompensator.switchOnDate"] || (depth0 != null ? depth0["cim:ShuntCompensator.switchOnDate"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ShuntCompensator.switchOnDate","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ShuntCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ShuntCompensator.switchOnDate', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ShuntCompensator.voltageSensitivity</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ShuntCompensator.voltageSensitivity"] || (depth0 != null ? depth0["cim:ShuntCompensator.voltageSensitivity"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ShuntCompensator.voltageSensitivity","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ShuntCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ShuntCompensator.voltageSensitivity', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ShuntCompensator.ShuntCompensatorPhase</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ShuntCompensator.ShuntCompensatorPhase"] || (depth0 != null ? depth0["cim:ShuntCompensator.ShuntCompensatorPhase"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ShuntCompensator.ShuntCompensatorPhase","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ShuntCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ShuntCompensator.ShuntCompensatorPhase', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['ShuntCompensatorPhase'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"ShuntCompensatorPhase\" base=\"PowerSystemResource\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ShuntCompensatorPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ShuntCompensatorPhase.maximumSections</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ShuntCompensatorPhase.maximumSections"] || (depth0 != null ? depth0["cim:ShuntCompensatorPhase.maximumSections"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ShuntCompensatorPhase.maximumSections","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ShuntCompensatorPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ShuntCompensatorPhase.maximumSections', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ShuntCompensatorPhase.normalSections</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ShuntCompensatorPhase.normalSections"] || (depth0 != null ? depth0["cim:ShuntCompensatorPhase.normalSections"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ShuntCompensatorPhase.normalSections","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ShuntCompensatorPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ShuntCompensatorPhase.normalSections', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ShuntCompensatorPhase.phase</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ShuntCompensatorPhase.phase"] || (depth0 != null ? depth0["cim:ShuntCompensatorPhase.phase"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ShuntCompensatorPhase.phase","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ShuntCompensatorPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ShuntCompensatorPhase.phase', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['StaticVarCompensator'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"StaticVarCompensator\" base=\"RegulatingCondEq\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:StaticVarCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:StaticVarCompensator.capacitiveRating</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:StaticVarCompensator.capacitiveRating"] || (depth0 != null ? depth0["cim:StaticVarCompensator.capacitiveRating"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:StaticVarCompensator.capacitiveRating","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:StaticVarCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:StaticVarCompensator.capacitiveRating', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:StaticVarCompensator.inductiveRating</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:StaticVarCompensator.inductiveRating"] || (depth0 != null ? depth0["cim:StaticVarCompensator.inductiveRating"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:StaticVarCompensator.inductiveRating","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:StaticVarCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:StaticVarCompensator.inductiveRating', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:StaticVarCompensator.q</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:StaticVarCompensator.q"] || (depth0 != null ? depth0["cim:StaticVarCompensator.q"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:StaticVarCompensator.q","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:StaticVarCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:StaticVarCompensator.q', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:StaticVarCompensator.slope</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:StaticVarCompensator.slope"] || (depth0 != null ? depth0["cim:StaticVarCompensator.slope"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:StaticVarCompensator.slope","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:StaticVarCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:StaticVarCompensator.slope', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:StaticVarCompensator.sVCControlMode</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:StaticVarCompensator.sVCControlMode"] || (depth0 != null ? depth0["cim:StaticVarCompensator.sVCControlMode"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:StaticVarCompensator.sVCControlMode","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:StaticVarCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:StaticVarCompensator.sVCControlMode', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:StaticVarCompensator.voltageSetPoint</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:StaticVarCompensator.voltageSetPoint"] || (depth0 != null ? depth0["cim:StaticVarCompensator.voltageSetPoint"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:StaticVarCompensator.voltageSetPoint","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:StaticVarCompensator', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:StaticVarCompensator.voltageSetPoint', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Switch'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Switch\" base=\"ConductingEquipment\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Switch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Switch.normalOpen</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Switch.normalOpen"] || (depth0 != null ? depth0["cim:Switch.normalOpen"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Switch.normalOpen","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Switch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Switch.normalOpen', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Switch.open</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Switch.open"] || (depth0 != null ? depth0["cim:Switch.open"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Switch.open","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Switch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Switch.open', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Switch.ratedCurrent</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Switch.ratedCurrent"] || (depth0 != null ? depth0["cim:Switch.ratedCurrent"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Switch.ratedCurrent","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Switch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Switch.ratedCurrent', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Switch.retained</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Switch.retained"] || (depth0 != null ? depth0["cim:Switch.retained"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Switch.retained","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Switch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Switch.retained', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Switch.switchOnCount</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Switch.switchOnCount"] || (depth0 != null ? depth0["cim:Switch.switchOnCount"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Switch.switchOnCount","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Switch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Switch.switchOnCount', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Switch.switchOnDate</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Switch.switchOnDate"] || (depth0 != null ? depth0["cim:Switch.switchOnDate"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Switch.switchOnDate","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Switch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Switch.switchOnDate', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Switch.SwitchPhase</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Switch.SwitchPhase"] || (depth0 != null ? depth0["cim:Switch.SwitchPhase"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Switch.SwitchPhase","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Switch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Switch.SwitchPhase', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Switch.SwitchSchedules</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Switch.SwitchSchedules"] || (depth0 != null ? depth0["cim:Switch.SwitchSchedules"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Switch.SwitchSchedules","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Switch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Switch.SwitchSchedules', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['SwitchPhase'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"SwitchPhase\" base=\"PowerSystemResource\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SwitchPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SwitchPhase.closed</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SwitchPhase.closed"] || (depth0 != null ? depth0["cim:SwitchPhase.closed"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SwitchPhase.closed","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SwitchPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SwitchPhase.closed', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SwitchPhase.normalOpen</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SwitchPhase.normalOpen"] || (depth0 != null ? depth0["cim:SwitchPhase.normalOpen"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SwitchPhase.normalOpen","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SwitchPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SwitchPhase.normalOpen', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SwitchPhase.phaseSide1</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SwitchPhase.phaseSide1"] || (depth0 != null ? depth0["cim:SwitchPhase.phaseSide1"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SwitchPhase.phaseSide1","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SwitchPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SwitchPhase.phaseSide1', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SwitchPhase.phaseSide2</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SwitchPhase.phaseSide2"] || (depth0 != null ? depth0["cim:SwitchPhase.phaseSide2"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SwitchPhase.phaseSide2","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SwitchPhase', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SwitchPhase.phaseSide2', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['SwitchSchedule'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"SwitchSchedule\" base=\"SeasonDayTypeSchedule\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SwitchSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['SynchronousMachine'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"SynchronousMachine\" base=\"RotatingMachine\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.aVRToManualLag</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.aVRToManualLag"] || (depth0 != null ? depth0["cim:SynchronousMachine.aVRToManualLag"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.aVRToManualLag","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.aVRToManualLag', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.aVRToManualLead</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.aVRToManualLead"] || (depth0 != null ? depth0["cim:SynchronousMachine.aVRToManualLead"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.aVRToManualLead","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.aVRToManualLead', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.baseQ</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.baseQ"] || (depth0 != null ? depth0["cim:SynchronousMachine.baseQ"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.baseQ","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.baseQ', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.condenserP</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.condenserP"] || (depth0 != null ? depth0["cim:SynchronousMachine.condenserP"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.condenserP","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.condenserP', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.coolantCondition</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.coolantCondition"] || (depth0 != null ? depth0["cim:SynchronousMachine.coolantCondition"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.coolantCondition","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.coolantCondition', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.coolantType</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.coolantType"] || (depth0 != null ? depth0["cim:SynchronousMachine.coolantType"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.coolantType","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.coolantType', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.earthing</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.earthing"] || (depth0 != null ? depth0["cim:SynchronousMachine.earthing"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.earthing","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.earthing', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.earthingStarPointR</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.earthingStarPointR"] || (depth0 != null ? depth0["cim:SynchronousMachine.earthingStarPointR"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.earthingStarPointR","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.earthingStarPointR', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.earthingStarPointX</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.earthingStarPointX"] || (depth0 != null ? depth0["cim:SynchronousMachine.earthingStarPointX"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.earthingStarPointX","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.earthingStarPointX', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.ikk</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.ikk"] || (depth0 != null ? depth0["cim:SynchronousMachine.ikk"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.ikk","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.ikk', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.manualToAVR</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.manualToAVR"] || (depth0 != null ? depth0["cim:SynchronousMachine.manualToAVR"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.manualToAVR","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.manualToAVR', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.maxQ</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.maxQ"] || (depth0 != null ? depth0["cim:SynchronousMachine.maxQ"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.maxQ","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.maxQ', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.maxU</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.maxU"] || (depth0 != null ? depth0["cim:SynchronousMachine.maxU"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.maxU","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.maxU', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.minQ</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.minQ"] || (depth0 != null ? depth0["cim:SynchronousMachine.minQ"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.minQ","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.minQ', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.minU</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.minU"] || (depth0 != null ? depth0["cim:SynchronousMachine.minU"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.minU","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.minU', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.mu</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.mu"] || (depth0 != null ? depth0["cim:SynchronousMachine.mu"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.mu","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.mu', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.operatingMode</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.operatingMode"] || (depth0 != null ? depth0["cim:SynchronousMachine.operatingMode"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.operatingMode","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.operatingMode', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.qPercent</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.qPercent"] || (depth0 != null ? depth0["cim:SynchronousMachine.qPercent"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.qPercent","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.qPercent', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.r</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.r"] || (depth0 != null ? depth0["cim:SynchronousMachine.r"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.r","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.r', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.r0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.r0"] || (depth0 != null ? depth0["cim:SynchronousMachine.r0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.r0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.r0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.r2</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.r2"] || (depth0 != null ? depth0["cim:SynchronousMachine.r2"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.r2","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.r2', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.referencePriority</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.referencePriority"] || (depth0 != null ? depth0["cim:SynchronousMachine.referencePriority"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.referencePriority","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.referencePriority', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.satDirectSubtransX</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.satDirectSubtransX"] || (depth0 != null ? depth0["cim:SynchronousMachine.satDirectSubtransX"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.satDirectSubtransX","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.satDirectSubtransX', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.satDirectSyncX</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.satDirectSyncX"] || (depth0 != null ? depth0["cim:SynchronousMachine.satDirectSyncX"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.satDirectSyncX","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.satDirectSyncX', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.satDirectTransX</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.satDirectTransX"] || (depth0 != null ? depth0["cim:SynchronousMachine.satDirectTransX"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.satDirectTransX","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.satDirectTransX', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.shortCircuitRotorType</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.shortCircuitRotorType"] || (depth0 != null ? depth0["cim:SynchronousMachine.shortCircuitRotorType"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.shortCircuitRotorType","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.shortCircuitRotorType', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.type</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.type"] || (depth0 != null ? depth0["cim:SynchronousMachine.type"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.type","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.type', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.voltageRegulationRange</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.voltageRegulationRange"] || (depth0 != null ? depth0["cim:SynchronousMachine.voltageRegulationRange"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.voltageRegulationRange","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.voltageRegulationRange', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.x0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.x0"] || (depth0 != null ? depth0["cim:SynchronousMachine.x0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.x0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.x0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SynchronousMachine.x2</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SynchronousMachine.x2"] || (depth0 != null ? depth0["cim:SynchronousMachine.x2"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SynchronousMachine.x2","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SynchronousMachine', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SynchronousMachine.x2', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['TapChanger'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"TapChanger\" base=\"PowerSystemResource\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapChanger', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TapChanger.controlEnabled</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TapChanger.controlEnabled"] || (depth0 != null ? depth0["cim:TapChanger.controlEnabled"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TapChanger.controlEnabled","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapChanger', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TapChanger.controlEnabled', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TapChanger.highStep</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TapChanger.highStep"] || (depth0 != null ? depth0["cim:TapChanger.highStep"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TapChanger.highStep","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapChanger', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TapChanger.highStep', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TapChanger.initialDelay</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TapChanger.initialDelay"] || (depth0 != null ? depth0["cim:TapChanger.initialDelay"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TapChanger.initialDelay","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapChanger', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TapChanger.initialDelay', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TapChanger.lowStep</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TapChanger.lowStep"] || (depth0 != null ? depth0["cim:TapChanger.lowStep"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TapChanger.lowStep","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapChanger', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TapChanger.lowStep', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TapChanger.ltcFlag</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TapChanger.ltcFlag"] || (depth0 != null ? depth0["cim:TapChanger.ltcFlag"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TapChanger.ltcFlag","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapChanger', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TapChanger.ltcFlag', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TapChanger.neutralStep</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TapChanger.neutralStep"] || (depth0 != null ? depth0["cim:TapChanger.neutralStep"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TapChanger.neutralStep","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapChanger', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TapChanger.neutralStep', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TapChanger.neutralU</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TapChanger.neutralU"] || (depth0 != null ? depth0["cim:TapChanger.neutralU"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TapChanger.neutralU","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapChanger', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TapChanger.neutralU', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TapChanger.normalStep</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TapChanger.normalStep"] || (depth0 != null ? depth0["cim:TapChanger.normalStep"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TapChanger.normalStep","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapChanger', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TapChanger.normalStep', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TapChanger.step</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TapChanger.step"] || (depth0 != null ? depth0["cim:TapChanger.step"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TapChanger.step","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapChanger', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TapChanger.step', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TapChanger.subsequentDelay</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TapChanger.subsequentDelay"] || (depth0 != null ? depth0["cim:TapChanger.subsequentDelay"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TapChanger.subsequentDelay","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapChanger', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TapChanger.subsequentDelay', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TapChanger.TapChangerControl</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TapChanger.TapChangerControl"] || (depth0 != null ? depth0["cim:TapChanger.TapChangerControl"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TapChanger.TapChangerControl","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapChanger', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TapChanger.TapChangerControl', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['TapChangerControl'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"TapChangerControl\" base=\"RegulatingControl\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapChangerControl', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TapChangerControl.limitVoltage</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TapChangerControl.limitVoltage"] || (depth0 != null ? depth0["cim:TapChangerControl.limitVoltage"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TapChangerControl.limitVoltage","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapChangerControl', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TapChangerControl.limitVoltage', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TapChangerControl.lineDropCompensation</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TapChangerControl.lineDropCompensation"] || (depth0 != null ? depth0["cim:TapChangerControl.lineDropCompensation"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TapChangerControl.lineDropCompensation","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapChangerControl', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TapChangerControl.lineDropCompensation', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TapChangerControl.lineDropR</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TapChangerControl.lineDropR"] || (depth0 != null ? depth0["cim:TapChangerControl.lineDropR"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TapChangerControl.lineDropR","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapChangerControl', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TapChangerControl.lineDropR', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TapChangerControl.lineDropX</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TapChangerControl.lineDropX"] || (depth0 != null ? depth0["cim:TapChangerControl.lineDropX"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TapChangerControl.lineDropX","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapChangerControl', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TapChangerControl.lineDropX', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TapChangerControl.reverseLineDropR</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TapChangerControl.reverseLineDropR"] || (depth0 != null ? depth0["cim:TapChangerControl.reverseLineDropR"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TapChangerControl.reverseLineDropR","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapChangerControl', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TapChangerControl.reverseLineDropR', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TapChangerControl.reverseLineDropX</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TapChangerControl.reverseLineDropX"] || (depth0 != null ? depth0["cim:TapChangerControl.reverseLineDropX"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TapChangerControl.reverseLineDropX","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapChangerControl', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TapChangerControl.reverseLineDropX', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['TapChangerTablePoint'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"TapChangerTablePoint\"/>\n";
},"useData":true});
templates['TapSchedule'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"TapSchedule\" base=\"SeasonDayTypeSchedule\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TapSchedule.TapChanger</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TapSchedule.TapChanger"] || (depth0 != null ? depth0["cim:TapSchedule.TapChanger"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TapSchedule.TapChanger","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TapSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TapSchedule.TapChanger', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['TransformerCoreAdmittance'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"TransformerCoreAdmittance\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerCoreAdmittance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerCoreAdmittance.b</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerCoreAdmittance.b"] || (depth0 != null ? depth0["cim:TransformerCoreAdmittance.b"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerCoreAdmittance.b","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerCoreAdmittance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerCoreAdmittance.b', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerCoreAdmittance.b0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerCoreAdmittance.b0"] || (depth0 != null ? depth0["cim:TransformerCoreAdmittance.b0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerCoreAdmittance.b0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerCoreAdmittance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerCoreAdmittance.b0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerCoreAdmittance.g</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerCoreAdmittance.g"] || (depth0 != null ? depth0["cim:TransformerCoreAdmittance.g"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerCoreAdmittance.g","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerCoreAdmittance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerCoreAdmittance.g', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerCoreAdmittance.g0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerCoreAdmittance.g0"] || (depth0 != null ? depth0["cim:TransformerCoreAdmittance.g0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerCoreAdmittance.g0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerCoreAdmittance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerCoreAdmittance.g0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerCoreAdmittance.TransformerEnd</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerCoreAdmittance.TransformerEnd"] || (depth0 != null ? depth0["cim:TransformerCoreAdmittance.TransformerEnd"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerCoreAdmittance.TransformerEnd","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerCoreAdmittance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerCoreAdmittance.TransformerEnd', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['TransformerEnd'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"TransformerEnd\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerEnd.bmagSat</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerEnd.bmagSat"] || (depth0 != null ? depth0["cim:TransformerEnd.bmagSat"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerEnd.bmagSat","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerEnd.bmagSat', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerEnd.endNumber</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerEnd.endNumber"] || (depth0 != null ? depth0["cim:TransformerEnd.endNumber"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerEnd.endNumber","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerEnd.endNumber', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerEnd.grounded</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerEnd.grounded"] || (depth0 != null ? depth0["cim:TransformerEnd.grounded"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerEnd.grounded","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerEnd.grounded', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerEnd.magBaseU</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerEnd.magBaseU"] || (depth0 != null ? depth0["cim:TransformerEnd.magBaseU"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerEnd.magBaseU","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerEnd.magBaseU', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerEnd.magSatFlux</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerEnd.magSatFlux"] || (depth0 != null ? depth0["cim:TransformerEnd.magSatFlux"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerEnd.magSatFlux","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerEnd.magSatFlux', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerEnd.rground</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerEnd.rground"] || (depth0 != null ? depth0["cim:TransformerEnd.rground"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerEnd.rground","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerEnd.rground', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerEnd.xground</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerEnd.xground"] || (depth0 != null ? depth0["cim:TransformerEnd.xground"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerEnd.xground","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerEnd.xground', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerEnd.PhaseTapChanger</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerEnd.PhaseTapChanger"] || (depth0 != null ? depth0["cim:TransformerEnd.PhaseTapChanger"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerEnd.PhaseTapChanger","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerEnd.PhaseTapChanger', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerEnd.StarImpedance</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerEnd.StarImpedance"] || (depth0 != null ? depth0["cim:TransformerEnd.StarImpedance"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerEnd.StarImpedance","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerEnd.StarImpedance', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerEnd.RatioTapChanger</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerEnd.RatioTapChanger"] || (depth0 != null ? depth0["cim:TransformerEnd.RatioTapChanger"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerEnd.RatioTapChanger","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerEnd.RatioTapChanger', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerEnd.BaseVoltage</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerEnd.BaseVoltage"] || (depth0 != null ? depth0["cim:TransformerEnd.BaseVoltage"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerEnd.BaseVoltage","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerEnd.BaseVoltage', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerEnd.Terminal</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerEnd.Terminal"] || (depth0 != null ? depth0["cim:TransformerEnd.Terminal"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerEnd.Terminal","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerEnd.Terminal', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['TransformerMeshImpedance'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"TransformerMeshImpedance\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerMeshImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerMeshImpedance.r</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerMeshImpedance.r"] || (depth0 != null ? depth0["cim:TransformerMeshImpedance.r"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerMeshImpedance.r","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerMeshImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerMeshImpedance.r', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerMeshImpedance.r0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerMeshImpedance.r0"] || (depth0 != null ? depth0["cim:TransformerMeshImpedance.r0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerMeshImpedance.r0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerMeshImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerMeshImpedance.r0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerMeshImpedance.x</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerMeshImpedance.x"] || (depth0 != null ? depth0["cim:TransformerMeshImpedance.x"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerMeshImpedance.x","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerMeshImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerMeshImpedance.x', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerMeshImpedance.x0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerMeshImpedance.x0"] || (depth0 != null ? depth0["cim:TransformerMeshImpedance.x0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerMeshImpedance.x0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerMeshImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerMeshImpedance.x0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerMeshImpedance.ToTransformerEnd</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerMeshImpedance.ToTransformerEnd"] || (depth0 != null ? depth0["cim:TransformerMeshImpedance.ToTransformerEnd"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerMeshImpedance.ToTransformerEnd","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerMeshImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerMeshImpedance.ToTransformerEnd', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerMeshImpedance.FromTransformerEnd</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerMeshImpedance.FromTransformerEnd"] || (depth0 != null ? depth0["cim:TransformerMeshImpedance.FromTransformerEnd"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerMeshImpedance.FromTransformerEnd","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerMeshImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerMeshImpedance.FromTransformerEnd', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['TransformerStarImpedance'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"TransformerStarImpedance\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerStarImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerStarImpedance.r</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerStarImpedance.r"] || (depth0 != null ? depth0["cim:TransformerStarImpedance.r"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerStarImpedance.r","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerStarImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerStarImpedance.r', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerStarImpedance.r0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerStarImpedance.r0"] || (depth0 != null ? depth0["cim:TransformerStarImpedance.r0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerStarImpedance.r0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerStarImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerStarImpedance.r0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerStarImpedance.x</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerStarImpedance.x"] || (depth0 != null ? depth0["cim:TransformerStarImpedance.x"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerStarImpedance.x","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerStarImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerStarImpedance.x', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerStarImpedance.x0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerStarImpedance.x0"] || (depth0 != null ? depth0["cim:TransformerStarImpedance.x0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerStarImpedance.x0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerStarImpedance', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerStarImpedance.x0', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['TransformerTank'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"TransformerTank\" base=\"Equipment\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerTank', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerTank.PowerTransformer</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerTank.PowerTransformer"] || (depth0 != null ? depth0["cim:TransformerTank.PowerTransformer"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerTank.PowerTransformer","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerTank', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerTank.PowerTransformer', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['TransformerTankEnd'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"TransformerTankEnd\" base=\"TransformerEnd\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerTankEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerTankEnd.phases</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerTankEnd.phases"] || (depth0 != null ? depth0["cim:TransformerTankEnd.phases"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerTankEnd.phases","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerTankEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerTankEnd.phases', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TransformerTankEnd.TransformerTank</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TransformerTankEnd.TransformerTank"] || (depth0 != null ? depth0["cim:TransformerTankEnd.TransformerTank"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TransformerTankEnd.TransformerTank","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TransformerTankEnd', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TransformerTankEnd.TransformerTank', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['VoltageControlZone'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"VoltageControlZone\" base=\"PowerSystemResource\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:VoltageControlZone', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['ACDCTerminal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"ACDCTerminal\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ACDCTerminal', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ACDCTerminal.connected</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ACDCTerminal.connected"] || (depth0 != null ? depth0["cim:ACDCTerminal.connected"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ACDCTerminal.connected","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ACDCTerminal', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ACDCTerminal.connected', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ACDCTerminal.sequenceNumber</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ACDCTerminal.sequenceNumber"] || (depth0 != null ? depth0["cim:ACDCTerminal.sequenceNumber"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ACDCTerminal.sequenceNumber","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ACDCTerminal', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ACDCTerminal.sequenceNumber', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['BaseFrequency'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"BaseFrequency\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BaseFrequency', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BaseFrequency.frequency</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BaseFrequency.frequency"] || (depth0 != null ? depth0["cim:BaseFrequency.frequency"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BaseFrequency.frequency","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BaseFrequency', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BaseFrequency.frequency', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['BasePower'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"BasePower\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BasePower', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BasePower.basePower</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BasePower.basePower"] || (depth0 != null ? depth0["cim:BasePower.basePower"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BasePower.basePower","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BasePower', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BasePower.basePower', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['BaseVoltage'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"BaseVoltage\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BaseVoltage', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BaseVoltage.nominalVoltage</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BaseVoltage.nominalVoltage"] || (depth0 != null ? depth0["cim:BaseVoltage.nominalVoltage"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BaseVoltage.nominalVoltage","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BaseVoltage', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BaseVoltage.nominalVoltage', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BaseVoltage.ConductingEquipment</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BaseVoltage.ConductingEquipment"] || (depth0 != null ? depth0["cim:BaseVoltage.ConductingEquipment"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BaseVoltage.ConductingEquipment","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BaseVoltage', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BaseVoltage.ConductingEquipment', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['BasicIntervalSchedule'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"BasicIntervalSchedule\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BasicIntervalSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BasicIntervalSchedule.startTime</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BasicIntervalSchedule.startTime"] || (depth0 != null ? depth0["cim:BasicIntervalSchedule.startTime"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BasicIntervalSchedule.startTime","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BasicIntervalSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BasicIntervalSchedule.startTime', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BasicIntervalSchedule.value1Multiplier</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BasicIntervalSchedule.value1Multiplier"] || (depth0 != null ? depth0["cim:BasicIntervalSchedule.value1Multiplier"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BasicIntervalSchedule.value1Multiplier","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BasicIntervalSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BasicIntervalSchedule.value1Multiplier', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BasicIntervalSchedule.value1Unit</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BasicIntervalSchedule.value1Unit"] || (depth0 != null ? depth0["cim:BasicIntervalSchedule.value1Unit"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BasicIntervalSchedule.value1Unit","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BasicIntervalSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BasicIntervalSchedule.value1Unit', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BasicIntervalSchedule.value2Multiplier</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BasicIntervalSchedule.value2Multiplier"] || (depth0 != null ? depth0["cim:BasicIntervalSchedule.value2Multiplier"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BasicIntervalSchedule.value2Multiplier","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BasicIntervalSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BasicIntervalSchedule.value2Multiplier', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BasicIntervalSchedule.value2Unit</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BasicIntervalSchedule.value2Unit"] || (depth0 != null ? depth0["cim:BasicIntervalSchedule.value2Unit"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BasicIntervalSchedule.value2Unit","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BasicIntervalSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BasicIntervalSchedule.value2Unit', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Bay'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Bay\" base=\"EquipmentContainer\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Bay', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Bay.bayEnergyMeasFlag</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Bay.bayEnergyMeasFlag"] || (depth0 != null ? depth0["cim:Bay.bayEnergyMeasFlag"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Bay.bayEnergyMeasFlag","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Bay', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Bay.bayEnergyMeasFlag', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Bay.bayPowerMeasFlag</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Bay.bayPowerMeasFlag"] || (depth0 != null ? depth0["cim:Bay.bayPowerMeasFlag"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Bay.bayPowerMeasFlag","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Bay', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Bay.bayPowerMeasFlag', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Bay.breakerConfiguration</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Bay.breakerConfiguration"] || (depth0 != null ? depth0["cim:Bay.breakerConfiguration"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Bay.breakerConfiguration","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Bay', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Bay.breakerConfiguration', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Bay.busBarConfiguration</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Bay.busBarConfiguration"] || (depth0 != null ? depth0["cim:Bay.busBarConfiguration"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Bay.busBarConfiguration","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Bay', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Bay.busBarConfiguration', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['ConductingEquipment'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"ConductingEquipment\" base=\"Equipment\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ConductingEquipment', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ConductingEquipment.ProtectiveActionAdjustment</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ConductingEquipment.ProtectiveActionAdjustment"] || (depth0 != null ? depth0["cim:ConductingEquipment.ProtectiveActionAdjustment"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ConductingEquipment.ProtectiveActionAdjustment","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ConductingEquipment', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ConductingEquipment.ProtectiveActionAdjustment', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['ConnectivityNode'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"ConnectivityNode\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ConnectivityNode', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ConnectivityNode.ConnectivityNodeContainer</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ConnectivityNode.ConnectivityNodeContainer"] || (depth0 != null ? depth0["cim:ConnectivityNode.ConnectivityNodeContainer"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ConnectivityNode.ConnectivityNodeContainer","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ConnectivityNode', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ConnectivityNode.ConnectivityNodeContainer', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['ConnectivityNodeContainer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"ConnectivityNodeContainer\" base=\"PowerSystemResource\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ConnectivityNodeContainer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Curve'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Curve\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Curve', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Curve.curveStyle</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Curve.curveStyle"] || (depth0 != null ? depth0["cim:Curve.curveStyle"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Curve.curveStyle","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Curve', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Curve.curveStyle', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Curve.xMultiplier</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Curve.xMultiplier"] || (depth0 != null ? depth0["cim:Curve.xMultiplier"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Curve.xMultiplier","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Curve', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Curve.xMultiplier', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Curve.xUnit</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Curve.xUnit"] || (depth0 != null ? depth0["cim:Curve.xUnit"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Curve.xUnit","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Curve', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Curve.xUnit', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Curve.y1Multiplier</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Curve.y1Multiplier"] || (depth0 != null ? depth0["cim:Curve.y1Multiplier"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Curve.y1Multiplier","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Curve', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Curve.y1Multiplier', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Curve.y1Unit</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Curve.y1Unit"] || (depth0 != null ? depth0["cim:Curve.y1Unit"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Curve.y1Unit","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Curve', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Curve.y1Unit', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Curve.y2Multiplier</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Curve.y2Multiplier"] || (depth0 != null ? depth0["cim:Curve.y2Multiplier"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Curve.y2Multiplier","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Curve', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Curve.y2Multiplier', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Curve.y2Unit</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Curve.y2Unit"] || (depth0 != null ? depth0["cim:Curve.y2Unit"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Curve.y2Unit","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Curve', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Curve.y2Unit', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Curve.y3Multiplier</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Curve.y3Multiplier"] || (depth0 != null ? depth0["cim:Curve.y3Multiplier"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Curve.y3Multiplier","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Curve', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Curve.y3Multiplier', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Curve.y3Unit</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Curve.y3Unit"] || (depth0 != null ? depth0["cim:Curve.y3Unit"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Curve.y3Unit","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Curve', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Curve.y3Unit', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Curve.CurveDatas</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Curve.CurveDatas"] || (depth0 != null ? depth0["cim:Curve.CurveDatas"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Curve.CurveDatas","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Curve', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Curve.CurveDatas', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['CurveData'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"CurveData\"/>\n";
},"useData":true});
templates['Equipment'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Equipment\" base=\"PowerSystemResource\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Equipment', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Equipment.aggregate</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Equipment.aggregate"] || (depth0 != null ? depth0["cim:Equipment.aggregate"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Equipment.aggregate","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Equipment', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Equipment.aggregate', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Equipment.normallyInService</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Equipment.normallyInService"] || (depth0 != null ? depth0["cim:Equipment.normallyInService"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Equipment.normallyInService","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Equipment', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Equipment.normallyInService', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Equipment.WeatherStation</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Equipment.WeatherStation"] || (depth0 != null ? depth0["cim:Equipment.WeatherStation"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Equipment.WeatherStation","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Equipment', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Equipment.WeatherStation', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['EquipmentContainer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"EquipmentContainer\" base=\"ConnectivityNodeContainer\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquipmentContainer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquipmentContainer.Equipments</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquipmentContainer.Equipments"] || (depth0 != null ? depth0["cim:EquipmentContainer.Equipments"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquipmentContainer.Equipments","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquipmentContainer', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquipmentContainer.Equipments', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['GeographicalRegion'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"GeographicalRegion\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:GeographicalRegion', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:GeographicalRegion.Regions</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:GeographicalRegion.Regions"] || (depth0 != null ? depth0["cim:GeographicalRegion.Regions"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:GeographicalRegion.Regions","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:GeographicalRegion', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:GeographicalRegion.Regions', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['IdentifiedObject'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"IdentifiedObject\"/>\n";
},"useData":true});
templates['IrregularIntervalSchedule'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"IrregularIntervalSchedule\" base=\"BasicIntervalSchedule\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:IrregularIntervalSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IrregularIntervalSchedule.TimePoints</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IrregularIntervalSchedule.TimePoints"] || (depth0 != null ? depth0["cim:IrregularIntervalSchedule.TimePoints"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IrregularIntervalSchedule.TimePoints","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:IrregularIntervalSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IrregularIntervalSchedule.TimePoints', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['IrregularTimePoint'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"IrregularTimePoint\"/>\n";
},"useData":true});
templates['Name'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"Name\"/>\n";
},"useData":true});
templates['NameType'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"NameType\"/>\n";
},"useData":true});
templates['NameTypeAuthority'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"NameTypeAuthority\"/>\n";
},"useData":true});
templates['OperatingParticipant'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"OperatingParticipant\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:OperatingParticipant', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['OperatingShare'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"OperatingShare\"/>\n";
},"useData":true});
templates['PSRType'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"PSRType\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PSRType', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['PowerSystemResource'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"PowerSystemResource\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerSystemResource', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerSystemResource.Controls</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerSystemResource.Controls"] || (depth0 != null ? depth0["cim:PowerSystemResource.Controls"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerSystemResource.Controls","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerSystemResource', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerSystemResource.Controls', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerSystemResource.Measurements</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerSystemResource.Measurements"] || (depth0 != null ? depth0["cim:PowerSystemResource.Measurements"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerSystemResource.Measurements","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerSystemResource', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerSystemResource.Measurements', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerSystemResource.PSRType</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerSystemResource.PSRType"] || (depth0 != null ? depth0["cim:PowerSystemResource.PSRType"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerSystemResource.PSRType","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerSystemResource', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerSystemResource.PSRType', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['RegularIntervalSchedule'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"RegularIntervalSchedule\" base=\"BasicIntervalSchedule\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RegularIntervalSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RegularIntervalSchedule.endTime</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RegularIntervalSchedule.endTime"] || (depth0 != null ? depth0["cim:RegularIntervalSchedule.endTime"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RegularIntervalSchedule.endTime","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RegularIntervalSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RegularIntervalSchedule.endTime', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RegularIntervalSchedule.timeStep</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RegularIntervalSchedule.timeStep"] || (depth0 != null ? depth0["cim:RegularIntervalSchedule.timeStep"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RegularIntervalSchedule.timeStep","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RegularIntervalSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RegularIntervalSchedule.timeStep', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:RegularIntervalSchedule.TimePoints</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:RegularIntervalSchedule.TimePoints"] || (depth0 != null ? depth0["cim:RegularIntervalSchedule.TimePoints"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:RegularIntervalSchedule.TimePoints","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:RegularIntervalSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:RegularIntervalSchedule.TimePoints', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['RegularTimePoint'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"RegularTimePoint\"/>\n";
},"useData":true});
templates['ReportingSuperGroup'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"ReportingSuperGroup\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ReportingSuperGroup', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ReportingSuperGroup.ReportingGroup</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ReportingSuperGroup.ReportingGroup"] || (depth0 != null ? depth0["cim:ReportingSuperGroup.ReportingGroup"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ReportingSuperGroup.ReportingGroup","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ReportingSuperGroup', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ReportingSuperGroup.ReportingGroup', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ReportingSuperGroup.ReportingGroup</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ReportingSuperGroup.ReportingGroup"] || (depth0 != null ? depth0["cim:ReportingSuperGroup.ReportingGroup"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ReportingSuperGroup.ReportingGroup","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ReportingSuperGroup', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ReportingSuperGroup.ReportingGroup', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['SubGeographicalRegion'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"SubGeographicalRegion\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SubGeographicalRegion', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SubGeographicalRegion.Lines</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SubGeographicalRegion.Lines"] || (depth0 != null ? depth0["cim:SubGeographicalRegion.Lines"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SubGeographicalRegion.Lines","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SubGeographicalRegion', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SubGeographicalRegion.Lines', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SubGeographicalRegion.Substations</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SubGeographicalRegion.Substations"] || (depth0 != null ? depth0["cim:SubGeographicalRegion.Substations"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SubGeographicalRegion.Substations","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SubGeographicalRegion', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SubGeographicalRegion.Substations', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Substation'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Substation\" base=\"EquipmentContainer\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Substation', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Substation.VoltageLevels</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Substation.VoltageLevels"] || (depth0 != null ? depth0["cim:Substation.VoltageLevels"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Substation.VoltageLevels","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Substation', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Substation.VoltageLevels', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Substation.Bays</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Substation.Bays"] || (depth0 != null ? depth0["cim:Substation.Bays"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Substation.Bays","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Substation', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Substation.Bays', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Substation.DCConverterUnit</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Substation.DCConverterUnit"] || (depth0 != null ? depth0["cim:Substation.DCConverterUnit"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Substation.DCConverterUnit","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Substation', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Substation.DCConverterUnit', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Terminal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Terminal\" base=\"ACDCTerminal\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Terminal', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Terminal.phases</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Terminal.phases"] || (depth0 != null ? depth0["cim:Terminal.phases"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Terminal.phases","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Terminal', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Terminal.phases', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Terminal.ConnectivityNode</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Terminal.ConnectivityNode"] || (depth0 != null ? depth0["cim:Terminal.ConnectivityNode"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Terminal.ConnectivityNode","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Terminal', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Terminal.ConnectivityNode', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Terminal.ConductingEquipment</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Terminal.ConductingEquipment"] || (depth0 != null ? depth0["cim:Terminal.ConductingEquipment"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Terminal.ConductingEquipment","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Terminal', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Terminal.ConductingEquipment', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Terminal.RegulatingControl</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Terminal.RegulatingControl"] || (depth0 != null ? depth0["cim:Terminal.RegulatingControl"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Terminal.RegulatingControl","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Terminal', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Terminal.RegulatingControl', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['VoltageLevel'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"VoltageLevel\" base=\"EquipmentContainer\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:VoltageLevel', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:VoltageLevel.highVoltageLimit</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:VoltageLevel.highVoltageLimit"] || (depth0 != null ? depth0["cim:VoltageLevel.highVoltageLimit"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:VoltageLevel.highVoltageLimit","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:VoltageLevel', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:VoltageLevel.highVoltageLimit', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:VoltageLevel.lowVoltageLimit</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:VoltageLevel.lowVoltageLimit"] || (depth0 != null ? depth0["cim:VoltageLevel.lowVoltageLimit"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:VoltageLevel.lowVoltageLimit","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:VoltageLevel', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:VoltageLevel.lowVoltageLimit', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:VoltageLevel.Bays</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:VoltageLevel.Bays"] || (depth0 != null ? depth0["cim:VoltageLevel.Bays"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:VoltageLevel.Bays","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:VoltageLevel', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:VoltageLevel.Bays', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:VoltageLevel.BaseVoltage</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:VoltageLevel.BaseVoltage"] || (depth0 != null ? depth0["cim:VoltageLevel.BaseVoltage"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:VoltageLevel.BaseVoltage","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:VoltageLevel', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:VoltageLevel.BaseVoltage', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['BusNameMarker'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"BusNameMarker\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BusNameMarker', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BusNameMarker.priority</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BusNameMarker.priority"] || (depth0 != null ? depth0["cim:BusNameMarker.priority"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BusNameMarker.priority","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BusNameMarker', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BusNameMarker.priority', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BusNameMarker.ReportingGroup</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BusNameMarker.ReportingGroup"] || (depth0 != null ? depth0["cim:BusNameMarker.ReportingGroup"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BusNameMarker.ReportingGroup","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BusNameMarker', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BusNameMarker.ReportingGroup', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BusNameMarker.Terminal</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BusNameMarker.Terminal"] || (depth0 != null ? depth0["cim:BusNameMarker.Terminal"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BusNameMarker.Terminal","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BusNameMarker', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BusNameMarker.Terminal', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['DCTopologicalNode'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"DCTopologicalNode\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:DCTopologicalNode', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['TopologicalIsland'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"TopologicalIsland\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TopologicalIsland', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TopologicalIsland.TopologicalNodes</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TopologicalIsland.TopologicalNodes"] || (depth0 != null ? depth0["cim:TopologicalIsland.TopologicalNodes"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TopologicalIsland.TopologicalNodes","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TopologicalIsland', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TopologicalIsland.TopologicalNodes', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TopologicalIsland.AngleRefTopologicalNode</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TopologicalIsland.AngleRefTopologicalNode"] || (depth0 != null ? depth0["cim:TopologicalIsland.AngleRefTopologicalNode"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TopologicalIsland.AngleRefTopologicalNode","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TopologicalIsland', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TopologicalIsland.AngleRefTopologicalNode', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['TopologicalNode'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"TopologicalNode\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TopologicalNode', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TopologicalNode.pInjection</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TopologicalNode.pInjection"] || (depth0 != null ? depth0["cim:TopologicalNode.pInjection"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TopologicalNode.pInjection","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TopologicalNode', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TopologicalNode.pInjection', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TopologicalNode.qInjection</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TopologicalNode.qInjection"] || (depth0 != null ? depth0["cim:TopologicalNode.qInjection"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TopologicalNode.qInjection","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TopologicalNode', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TopologicalNode.qInjection', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TopologicalNode.ReportingGroup</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TopologicalNode.ReportingGroup"] || (depth0 != null ? depth0["cim:TopologicalNode.ReportingGroup"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TopologicalNode.ReportingGroup","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TopologicalNode', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TopologicalNode.ReportingGroup', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TopologicalNode.ConnectivityNodeContainer</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TopologicalNode.ConnectivityNodeContainer"] || (depth0 != null ? depth0["cim:TopologicalNode.ConnectivityNodeContainer"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TopologicalNode.ConnectivityNodeContainer","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TopologicalNode', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TopologicalNode.ConnectivityNodeContainer', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:TopologicalNode.BaseVoltage</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:TopologicalNode.BaseVoltage"] || (depth0 != null ? depth0["cim:TopologicalNode.BaseVoltage"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:TopologicalNode.BaseVoltage","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:TopologicalNode', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:TopologicalNode.BaseVoltage', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['ActivePowerLimit'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"ActivePowerLimit\" base=\"OperationalLimit\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ActivePowerLimit', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ActivePowerLimit.value</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ActivePowerLimit.value"] || (depth0 != null ? depth0["cim:ActivePowerLimit.value"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ActivePowerLimit.value","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ActivePowerLimit', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ActivePowerLimit.value', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['ApparentPowerLimit'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"ApparentPowerLimit\" base=\"OperationalLimit\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ApparentPowerLimit', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ApparentPowerLimit.value</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ApparentPowerLimit.value"] || (depth0 != null ? depth0["cim:ApparentPowerLimit.value"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ApparentPowerLimit.value","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ApparentPowerLimit', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ApparentPowerLimit.value', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['BranchGroup'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"BranchGroup\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BranchGroup', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BranchGroup.maximumActivePower</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BranchGroup.maximumActivePower"] || (depth0 != null ? depth0["cim:BranchGroup.maximumActivePower"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BranchGroup.maximumActivePower","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BranchGroup', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BranchGroup.maximumActivePower', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BranchGroup.maximumReactivePower</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BranchGroup.maximumReactivePower"] || (depth0 != null ? depth0["cim:BranchGroup.maximumReactivePower"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BranchGroup.maximumReactivePower","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BranchGroup', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BranchGroup.maximumReactivePower', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BranchGroup.minimumActivePower</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BranchGroup.minimumActivePower"] || (depth0 != null ? depth0["cim:BranchGroup.minimumActivePower"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BranchGroup.minimumActivePower","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BranchGroup', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BranchGroup.minimumActivePower', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BranchGroup.minimumReactivePower</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BranchGroup.minimumReactivePower"] || (depth0 != null ? depth0["cim:BranchGroup.minimumReactivePower"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BranchGroup.minimumReactivePower","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BranchGroup', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BranchGroup.minimumReactivePower', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BranchGroup.monitorActivePower</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BranchGroup.monitorActivePower"] || (depth0 != null ? depth0["cim:BranchGroup.monitorActivePower"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BranchGroup.monitorActivePower","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BranchGroup', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BranchGroup.monitorActivePower', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BranchGroup.monitorReactivePower</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BranchGroup.monitorReactivePower"] || (depth0 != null ? depth0["cim:BranchGroup.monitorReactivePower"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BranchGroup.monitorReactivePower","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BranchGroup', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BranchGroup.monitorReactivePower', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:BranchGroup.BranchGroupTerminal</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:BranchGroup.BranchGroupTerminal"] || (depth0 != null ? depth0["cim:BranchGroup.BranchGroupTerminal"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:BranchGroup.BranchGroupTerminal","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:BranchGroup', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:BranchGroup.BranchGroupTerminal', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['BranchGroupTerminal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<ul class=\"floating-panel-list\" id=\"BranchGroupTerminal\"/>\n";
},"useData":true});
templates['CurrentLimit'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"CurrentLimit\" base=\"OperationalLimit\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:CurrentLimit', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:CurrentLimit.value</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:CurrentLimit.value"] || (depth0 != null ? depth0["cim:CurrentLimit.value"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:CurrentLimit.value","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:CurrentLimit', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:CurrentLimit.value', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['OperationalLimit'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"OperationalLimit\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:OperationalLimit', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:OperationalLimit.OperationalLimitType</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:OperationalLimit.OperationalLimitType"] || (depth0 != null ? depth0["cim:OperationalLimit.OperationalLimitType"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:OperationalLimit.OperationalLimitType","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:OperationalLimit', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:OperationalLimit.OperationalLimitType', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:OperationalLimit.LimitDependencyModel</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:OperationalLimit.LimitDependencyModel"] || (depth0 != null ? depth0["cim:OperationalLimit.LimitDependencyModel"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:OperationalLimit.LimitDependencyModel","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:OperationalLimit', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:OperationalLimit.LimitDependencyModel', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['OperationalLimitSet'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"OperationalLimitSet\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:OperationalLimitSet', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:OperationalLimitSet.OperationalLimitValue</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:OperationalLimitSet.OperationalLimitValue"] || (depth0 != null ? depth0["cim:OperationalLimitSet.OperationalLimitValue"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:OperationalLimitSet.OperationalLimitValue","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:OperationalLimitSet', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:OperationalLimitSet.OperationalLimitValue', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:OperationalLimitSet.Equipment</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:OperationalLimitSet.Equipment"] || (depth0 != null ? depth0["cim:OperationalLimitSet.Equipment"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:OperationalLimitSet.Equipment","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:OperationalLimitSet', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:OperationalLimitSet.Equipment', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:OperationalLimitSet.Terminal</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:OperationalLimitSet.Terminal"] || (depth0 != null ? depth0["cim:OperationalLimitSet.Terminal"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:OperationalLimitSet.Terminal","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:OperationalLimitSet', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:OperationalLimitSet.Terminal', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['OperationalLimitType'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"OperationalLimitType\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:OperationalLimitType', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:OperationalLimitType.acceptableDuration</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:OperationalLimitType.acceptableDuration"] || (depth0 != null ? depth0["cim:OperationalLimitType.acceptableDuration"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:OperationalLimitType.acceptableDuration","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:OperationalLimitType', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:OperationalLimitType.acceptableDuration', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:OperationalLimitType.direction</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:OperationalLimitType.direction"] || (depth0 != null ? depth0["cim:OperationalLimitType.direction"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:OperationalLimitType.direction","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:OperationalLimitType', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:OperationalLimitType.direction', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['VoltageLimit'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"VoltageLimit\" base=\"OperationalLimit\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:VoltageLimit', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:VoltageLimit.value</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:VoltageLimit.value"] || (depth0 != null ? depth0["cim:VoltageLimit.value"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:VoltageLimit.value","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:VoltageLimit', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:VoltageLimit.value', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['ConformLoad'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"ConformLoad\" base=\"EnergyConsumer\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ConformLoad', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['ConformLoadGroup'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"ConformLoadGroup\" base=\"LoadGroup\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ConformLoadGroup', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ConformLoadGroup.EnergyConsumers</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ConformLoadGroup.EnergyConsumers"] || (depth0 != null ? depth0["cim:ConformLoadGroup.EnergyConsumers"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ConformLoadGroup.EnergyConsumers","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ConformLoadGroup', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ConformLoadGroup.EnergyConsumers', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:ConformLoadGroup.ConformLoadSchedules</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:ConformLoadGroup.ConformLoadSchedules"] || (depth0 != null ? depth0["cim:ConformLoadGroup.ConformLoadSchedules"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:ConformLoadGroup.ConformLoadSchedules","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ConformLoadGroup', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:ConformLoadGroup.ConformLoadSchedules', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['ConformLoadSchedule'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"ConformLoadSchedule\" base=\"SeasonDayTypeSchedule\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:ConformLoadSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['DayType'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"DayType\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:DayType', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:DayType.SeasonDayTypeSchedules</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:DayType.SeasonDayTypeSchedules"] || (depth0 != null ? depth0["cim:DayType.SeasonDayTypeSchedules"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:DayType.SeasonDayTypeSchedules","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:DayType', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:DayType.SeasonDayTypeSchedules', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['EnergyArea'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"EnergyArea\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EnergyArea', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['LoadArea'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"LoadArea\" base=\"EnergyArea\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LoadArea', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:LoadArea.SubLoadAreas</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:LoadArea.SubLoadAreas"] || (depth0 != null ? depth0["cim:LoadArea.SubLoadAreas"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:LoadArea.SubLoadAreas","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LoadArea', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:LoadArea.SubLoadAreas', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['LoadGroup'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"LoadGroup\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LoadGroup', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['LoadResponseCharacteristic'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"LoadResponseCharacteristic\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LoadResponseCharacteristic', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:LoadResponseCharacteristic.exponentModel</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:LoadResponseCharacteristic.exponentModel"] || (depth0 != null ? depth0["cim:LoadResponseCharacteristic.exponentModel"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:LoadResponseCharacteristic.exponentModel","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LoadResponseCharacteristic', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:LoadResponseCharacteristic.exponentModel', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:LoadResponseCharacteristic.pConstantCurrent</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:LoadResponseCharacteristic.pConstantCurrent"] || (depth0 != null ? depth0["cim:LoadResponseCharacteristic.pConstantCurrent"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:LoadResponseCharacteristic.pConstantCurrent","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LoadResponseCharacteristic', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:LoadResponseCharacteristic.pConstantCurrent', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:LoadResponseCharacteristic.pConstantImpedance</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:LoadResponseCharacteristic.pConstantImpedance"] || (depth0 != null ? depth0["cim:LoadResponseCharacteristic.pConstantImpedance"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:LoadResponseCharacteristic.pConstantImpedance","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LoadResponseCharacteristic', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:LoadResponseCharacteristic.pConstantImpedance', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:LoadResponseCharacteristic.pConstantPower</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:LoadResponseCharacteristic.pConstantPower"] || (depth0 != null ? depth0["cim:LoadResponseCharacteristic.pConstantPower"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:LoadResponseCharacteristic.pConstantPower","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LoadResponseCharacteristic', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:LoadResponseCharacteristic.pConstantPower', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:LoadResponseCharacteristic.pFrequencyExponent</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:LoadResponseCharacteristic.pFrequencyExponent"] || (depth0 != null ? depth0["cim:LoadResponseCharacteristic.pFrequencyExponent"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:LoadResponseCharacteristic.pFrequencyExponent","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LoadResponseCharacteristic', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:LoadResponseCharacteristic.pFrequencyExponent', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:LoadResponseCharacteristic.pVoltageExponent</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:LoadResponseCharacteristic.pVoltageExponent"] || (depth0 != null ? depth0["cim:LoadResponseCharacteristic.pVoltageExponent"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:LoadResponseCharacteristic.pVoltageExponent","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LoadResponseCharacteristic', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:LoadResponseCharacteristic.pVoltageExponent', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:LoadResponseCharacteristic.qConstantCurrent</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:LoadResponseCharacteristic.qConstantCurrent"] || (depth0 != null ? depth0["cim:LoadResponseCharacteristic.qConstantCurrent"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:LoadResponseCharacteristic.qConstantCurrent","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LoadResponseCharacteristic', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:LoadResponseCharacteristic.qConstantCurrent', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:LoadResponseCharacteristic.qConstantImpedance</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:LoadResponseCharacteristic.qConstantImpedance"] || (depth0 != null ? depth0["cim:LoadResponseCharacteristic.qConstantImpedance"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:LoadResponseCharacteristic.qConstantImpedance","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LoadResponseCharacteristic', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:LoadResponseCharacteristic.qConstantImpedance', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:LoadResponseCharacteristic.qConstantPower</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:LoadResponseCharacteristic.qConstantPower"] || (depth0 != null ? depth0["cim:LoadResponseCharacteristic.qConstantPower"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:LoadResponseCharacteristic.qConstantPower","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LoadResponseCharacteristic', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:LoadResponseCharacteristic.qConstantPower', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:LoadResponseCharacteristic.qFrequencyExponent</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:LoadResponseCharacteristic.qFrequencyExponent"] || (depth0 != null ? depth0["cim:LoadResponseCharacteristic.qFrequencyExponent"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:LoadResponseCharacteristic.qFrequencyExponent","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LoadResponseCharacteristic', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:LoadResponseCharacteristic.qFrequencyExponent', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:LoadResponseCharacteristic.qVoltageExponent</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:LoadResponseCharacteristic.qVoltageExponent"] || (depth0 != null ? depth0["cim:LoadResponseCharacteristic.qVoltageExponent"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:LoadResponseCharacteristic.qVoltageExponent","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:LoadResponseCharacteristic', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:LoadResponseCharacteristic.qVoltageExponent', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['NonConformLoad'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"NonConformLoad\" base=\"EnergyConsumer\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:NonConformLoad', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['NonConformLoadGroup'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"NonConformLoadGroup\" base=\"LoadGroup\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:NonConformLoadGroup', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:NonConformLoadGroup.EnergyConsumers</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:NonConformLoadGroup.EnergyConsumers"] || (depth0 != null ? depth0["cim:NonConformLoadGroup.EnergyConsumers"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:NonConformLoadGroup.EnergyConsumers","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:NonConformLoadGroup', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:NonConformLoadGroup.EnergyConsumers', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:NonConformLoadGroup.NonConformLoadSchedules</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:NonConformLoadGroup.NonConformLoadSchedules"] || (depth0 != null ? depth0["cim:NonConformLoadGroup.NonConformLoadSchedules"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:NonConformLoadGroup.NonConformLoadSchedules","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:NonConformLoadGroup', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:NonConformLoadGroup.NonConformLoadSchedules', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['NonConformLoadSchedule'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"NonConformLoadSchedule\" base=\"SeasonDayTypeSchedule\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:NonConformLoadSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['PowerCutZone'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"PowerCutZone\" base=\"PowerSystemResource\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerCutZone', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerCutZone.cutLevel1</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerCutZone.cutLevel1"] || (depth0 != null ? depth0["cim:PowerCutZone.cutLevel1"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerCutZone.cutLevel1","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerCutZone', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerCutZone.cutLevel1', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerCutZone.cutLevel2</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerCutZone.cutLevel2"] || (depth0 != null ? depth0["cim:PowerCutZone.cutLevel2"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerCutZone.cutLevel2","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerCutZone', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerCutZone.cutLevel2', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:PowerCutZone.EnergyConsumers</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:PowerCutZone.EnergyConsumers"] || (depth0 != null ? depth0["cim:PowerCutZone.EnergyConsumers"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:PowerCutZone.EnergyConsumers","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:PowerCutZone', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:PowerCutZone.EnergyConsumers', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['Season'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"Season\" base=\"IdentifiedObject\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Season', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Season.endDate</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Season.endDate"] || (depth0 != null ? depth0["cim:Season.endDate"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Season.endDate","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Season', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Season.endDate', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Season.startDate</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Season.startDate"] || (depth0 != null ? depth0["cim:Season.startDate"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Season.startDate","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Season', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Season.startDate', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:Season.SeasonDayTypeSchedules</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:Season.SeasonDayTypeSchedules"] || (depth0 != null ? depth0["cim:Season.SeasonDayTypeSchedules"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:Season.SeasonDayTypeSchedules","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:Season', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:Season.SeasonDayTypeSchedules', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['SeasonDayTypeSchedule'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"SeasonDayTypeSchedule\" base=\"RegularIntervalSchedule\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SeasonDayTypeSchedule', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['StationSupply'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"StationSupply\" base=\"EnergyConsumer\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:StationSupply', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['SubLoadArea'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"SubLoadArea\" base=\"EnergyArea\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SubLoadArea', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:SubLoadArea.LoadGroups</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:SubLoadArea.LoadGroups"] || (depth0 != null ? depth0["cim:SubLoadArea.LoadGroups"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:SubLoadArea.LoadGroups","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:SubLoadArea', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:SubLoadArea.LoadGroups', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['EquivalentBranch'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"EquivalentBranch\" base=\"EquivalentEquipment\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentBranch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentBranch.negativeR12</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentBranch.negativeR12"] || (depth0 != null ? depth0["cim:EquivalentBranch.negativeR12"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentBranch.negativeR12","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentBranch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentBranch.negativeR12', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentBranch.negativeR21</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentBranch.negativeR21"] || (depth0 != null ? depth0["cim:EquivalentBranch.negativeR21"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentBranch.negativeR21","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentBranch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentBranch.negativeR21', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentBranch.negativeX12</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentBranch.negativeX12"] || (depth0 != null ? depth0["cim:EquivalentBranch.negativeX12"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentBranch.negativeX12","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentBranch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentBranch.negativeX12', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentBranch.negativeX21</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentBranch.negativeX21"] || (depth0 != null ? depth0["cim:EquivalentBranch.negativeX21"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentBranch.negativeX21","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentBranch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentBranch.negativeX21', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentBranch.positiveR12</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentBranch.positiveR12"] || (depth0 != null ? depth0["cim:EquivalentBranch.positiveR12"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentBranch.positiveR12","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentBranch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentBranch.positiveR12', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentBranch.positiveR21</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentBranch.positiveR21"] || (depth0 != null ? depth0["cim:EquivalentBranch.positiveR21"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentBranch.positiveR21","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentBranch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentBranch.positiveR21', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentBranch.positiveX12</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentBranch.positiveX12"] || (depth0 != null ? depth0["cim:EquivalentBranch.positiveX12"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentBranch.positiveX12","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentBranch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentBranch.positiveX12', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentBranch.positiveX21</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentBranch.positiveX21"] || (depth0 != null ? depth0["cim:EquivalentBranch.positiveX21"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentBranch.positiveX21","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentBranch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentBranch.positiveX21', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentBranch.r</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentBranch.r"] || (depth0 != null ? depth0["cim:EquivalentBranch.r"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentBranch.r","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentBranch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentBranch.r', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentBranch.r21</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentBranch.r21"] || (depth0 != null ? depth0["cim:EquivalentBranch.r21"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentBranch.r21","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentBranch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentBranch.r21', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentBranch.x</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentBranch.x"] || (depth0 != null ? depth0["cim:EquivalentBranch.x"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentBranch.x","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentBranch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentBranch.x', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentBranch.x21</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentBranch.x21"] || (depth0 != null ? depth0["cim:EquivalentBranch.x21"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentBranch.x21","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentBranch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentBranch.x21', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentBranch.zeroR12</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentBranch.zeroR12"] || (depth0 != null ? depth0["cim:EquivalentBranch.zeroR12"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentBranch.zeroR12","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentBranch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentBranch.zeroR12', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentBranch.zeroR21</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentBranch.zeroR21"] || (depth0 != null ? depth0["cim:EquivalentBranch.zeroR21"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentBranch.zeroR21","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentBranch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentBranch.zeroR21', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentBranch.zeroX12</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentBranch.zeroX12"] || (depth0 != null ? depth0["cim:EquivalentBranch.zeroX12"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentBranch.zeroX12","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentBranch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentBranch.zeroX12', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentBranch.zeroX21</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentBranch.zeroX21"] || (depth0 != null ? depth0["cim:EquivalentBranch.zeroX21"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentBranch.zeroX21","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentBranch', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentBranch.zeroX21', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['EquivalentEquipment'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"EquivalentEquipment\" base=\"ConductingEquipment\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentEquipment', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['EquivalentInjection'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"EquivalentInjection\" base=\"EquivalentEquipment\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentInjection.maxP</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentInjection.maxP"] || (depth0 != null ? depth0["cim:EquivalentInjection.maxP"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentInjection.maxP","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentInjection.maxP', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentInjection.maxQ</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentInjection.maxQ"] || (depth0 != null ? depth0["cim:EquivalentInjection.maxQ"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentInjection.maxQ","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentInjection.maxQ', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentInjection.minP</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentInjection.minP"] || (depth0 != null ? depth0["cim:EquivalentInjection.minP"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentInjection.minP","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentInjection.minP', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentInjection.minQ</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentInjection.minQ"] || (depth0 != null ? depth0["cim:EquivalentInjection.minQ"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentInjection.minQ","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentInjection.minQ', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentInjection.p</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentInjection.p"] || (depth0 != null ? depth0["cim:EquivalentInjection.p"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentInjection.p","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentInjection.p', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentInjection.q</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentInjection.q"] || (depth0 != null ? depth0["cim:EquivalentInjection.q"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentInjection.q","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentInjection.q', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentInjection.r</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentInjection.r"] || (depth0 != null ? depth0["cim:EquivalentInjection.r"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentInjection.r","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentInjection.r', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentInjection.r0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentInjection.r0"] || (depth0 != null ? depth0["cim:EquivalentInjection.r0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentInjection.r0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentInjection.r0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentInjection.r2</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentInjection.r2"] || (depth0 != null ? depth0["cim:EquivalentInjection.r2"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentInjection.r2","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentInjection.r2', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentInjection.regulationCapability</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentInjection.regulationCapability"] || (depth0 != null ? depth0["cim:EquivalentInjection.regulationCapability"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentInjection.regulationCapability","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentInjection.regulationCapability', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentInjection.regulationStatus</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentInjection.regulationStatus"] || (depth0 != null ? depth0["cim:EquivalentInjection.regulationStatus"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentInjection.regulationStatus","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentInjection.regulationStatus', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentInjection.regulationTarget</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentInjection.regulationTarget"] || (depth0 != null ? depth0["cim:EquivalentInjection.regulationTarget"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentInjection.regulationTarget","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentInjection.regulationTarget', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentInjection.x</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentInjection.x"] || (depth0 != null ? depth0["cim:EquivalentInjection.x"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentInjection.x","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentInjection.x', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentInjection.x0</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentInjection.x0"] || (depth0 != null ? depth0["cim:EquivalentInjection.x0"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentInjection.x0","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentInjection.x0', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentInjection.x2</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentInjection.x2"] || (depth0 != null ? depth0["cim:EquivalentInjection.x2"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentInjection.x2","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentInjection', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentInjection.x2', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['EquivalentNetwork'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"EquivalentNetwork\" base=\"ConnectivityNodeContainer\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentNetwork', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentNetwork.EquivalentEquipments</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentNetwork.EquivalentEquipments"] || (depth0 != null ? depth0["cim:EquivalentNetwork.EquivalentEquipments"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentNetwork.EquivalentEquipments","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentNetwork', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentNetwork.EquivalentEquipments', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
templates['EquivalentShunt'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<ul class=\"floating-panel-list\" id=\"EquivalentShunt\" base=\"EquivalentEquipment\">\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:IdentifiedObject.name</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:IdentifiedObject.name"] || (depth0 != null ? depth0["cim:IdentifiedObject.name"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:IdentifiedObject.name","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentShunt', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:IdentifiedObject.name', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentShunt.b</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentShunt.b"] || (depth0 != null ? depth0["cim:EquivalentShunt.b"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentShunt.b","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentShunt', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentShunt.b', this.value)\"/></span>\n    </li>\n    <li class=\"wide-row floating-panel-item dark-grey-background\">\n        <span class=\"row-left floating-panel-name\">cim:EquivalentShunt.g</span>\n        <span class=\"row-right floating-panel-value\"><input type=\"text\" value=\""
    + alias4(((helper = (helper = helpers["cim:EquivalentShunt.g"] || (depth0 != null ? depth0["cim:EquivalentShunt.g"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cim:EquivalentShunt.g","hash":{},"data":data}) : helper)))
    + "\" onchange=\"javascript:updateComponent('cim:EquivalentShunt', '"
    + alias4(((helper = (helper = helpers.rdfid || (depth0 != null ? depth0.rdfid : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rdfid","hash":{},"data":data}) : helper)))
    + "', 'cim:EquivalentShunt.g', this.value)\"/></span>\n    </li>\n</ul>\n";
},"useData":true});
})();
