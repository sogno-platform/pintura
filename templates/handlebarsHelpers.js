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


let classStructure = require('./classStructure.js');
let simpleTypes = classStructure.simpleTypes;
let complexTypes = classStructure.complexTypes;

Handlebars.registerHelper('getRdfId', function(object) {
    return new Handlebars.SafeString(cimsvg.getRdfResource());
});

Handlebars.registerHelper('viewAggregateComponentLink', function(rdfIdObject) {
    let rdfid = cimsvg.getRdfResource(rdfIdObject);
    if (rdfid) {
        let viewLink = "populateAttributesIdOnly(cimsvg.getComponentAttributesNode(), '" + 
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
            var object = cimsvg.getObjectUsingId(idSubString)
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

Handlebars.registerHelper('getAggregateComponentMenu', function(rdfIdObject, type) {
    let updateMenu = "";
    if (type !== undefined) {
        if (simpleTypes[type]) {
            let template = Handlebars.templates['cim_update_simple_type'];
            let possibleValues = JSON.parse(JSON.stringify(simpleTypes[type]));
            possibleValues.values.splice(0, 0, "--");
            updateMenu = template(possibleValues);
        }
        else if (complexTypes[type]) {
            let rdfid = cimsvg.getRdfResource(rdfIdObject);
            if (rdfid) {
            }
            let template = Handlebars.templates['cim_update_complex_type'];
            let possibleClasses = JSON.parse(JSON.stringify(complexTypes[type]));
            possibleClasses.splice(0, 0, type);
            let matchingComponents = cimsvg.getAggregateComponentsList(possibleClasses);
            updateMenu = template(matchingComponents);
        }
    }
    return new Handlebars.SafeString(updateMenu);
});
