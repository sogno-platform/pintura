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


let classStructure = require('../generated/classStructure.js');
let simpleTypes = classStructure.simpleTypes;
let complexTypes = classStructure.complexTypes;

Handlebars.registerHelper('getRdfId', function(object) {
    return new Handlebars.SafeString(currentCimsvg().getRdfResource());
});
Handlebars.registerHelper('neq', function(v1, v2, options) {
  if(v1 !== v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

Handlebars.registerHelper('viewAggregateComponentLink', function(rdfIdObject) {
    let rdfid = currentCimsvg().getRdfResource(rdfIdObject);
    if (rdfid) {
        let viewLink = "populateAttributesIdOnly(currentCimsvg().getComponentAttributesNode(), '" +
                    rdfid +"');showContainer('component-attributes', null, 'true', 'table');"
        return new Handlebars.SafeString(viewLink)
    }
    else {
        return undefined;
    }
});

Handlebars.registerHelper('getName', function(rdfIdObject) {
    if (rdfIdObject) {
        let rdfid = rdfIdObject['rdf:resource'];
        if (rdfid != undefined) {
            var idSubString = rdfid.substring(1);
            var object = currentCimsvg().getObjectUsingId(idSubString)
            if (object != undefined) {
                return new Handlebars.SafeString(object['cim:IdentifiedObject.name'])
            }
        }
        else {
            return undefined 
        }
    }
    else {
        return undefined
    }
});

const complex_type_template = function(type, rdfid, requestedType, matchingComponents) {
    let template = Handlebars.templates['cim_update_complex_type'];
    let possibleClasses = [ type ];
    possibleClasses = possibleClasses.concat(complexTypes[type]);
    matchingComponents.aggregates = currentCimsvg().getAggregateComponentsList(requestedType, possibleClasses).aggregates;
    let targetRdfId;
    if (rdfid && rdfid["rdf:resource"]) {
        targetRdfId = rdfid["rdf:resource"].substr(1)
    }
    else {
        targetRdfId = rdfid;
    }
    for (let index in matchingComponents.aggregates) {
        if(matchingComponents.aggregates[index].rdfid == targetRdfId) {
            matchingComponents.aggregates[index].selected = 'selected';
        }
    }
    if (type == "Terminal") {
        for (let index in matchingComponents.aggregates) {
            if(matchingComponents.aggregates[index].attribute == "cim:Terminal.ConductingEquipment") {
                matchingComponents.aggregates[index].disabled = 'disabled';
            }
        }
    }
    return template(matchingComponents);
};

const simple_type_template = function(type, rdfid, requestedType, matchingComponents) {
    let template = Handlebars.templates['cim_update_simple_type'];
    let possibleValues = JSON.parse(JSON.stringify(simpleTypes[type]));
    possibleValues.values.splice(0, 0, { value: "--"});
    matchingComponents.values = possibleValues.values;
    for (let index in matchingComponents.values) {
        if(matchingComponents.values[index].value == rdfid) {
            matchingComponents.values[index].selected = 'selected';
        }
    }
    matchingComponents['simpletype'] = true;
    matchingComponents['buttonVisibility'] = "visibility:hidden";
    return template(matchingComponents);
};

Handlebars.registerHelper('getAggregateComponentMenu', function(parentType, parentId, rdfid, type, attribute) {
    let updateMenu = "";
    if (type !== undefined) {
        if (type == "Float" || type == "Integer" || type == "Boolean" ) {
            let primitive_template = {
                type: parentType,
                rdfid: parentId,
                attribute: attribute,
                value: currentCimsvg().getValueOf(parentType, parentId, attribute)
            }
            let template = Handlebars.templates['cim_update_primitive_type'];
            updateMenu = template(primitive_template);
        }
        else {
            let requestedType = "cim:" + type;
            let dropdownId = cimedit.generateUUID();
            let matchingComponents = {
                    'attribute': attribute,
                    'dropdownId': dropdownId,
                    'requestedType': requestedType,
                    'rdfid': parentId,
                    'type': parentType,
            }
            if (simpleTypes[type]) {
                updateMenu = simple_type_template(type, rdfid, requestedType, matchingComponents);
            }
            else if (complexTypes[type]) {
                updateMenu = complex_type_template(type, rdfid, requestedType, matchingComponents);
            }
        }
    }
    return new Handlebars.SafeString(updateMenu);
});
