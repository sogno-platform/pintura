import { SafeString } from 'handlebars/runtime';
import { simpleTypes, complexTypes } from '../../generated/classStructure.js';
import * as templates from '../../index.js';
import common from '../../../src/common.js';

const complex_type_template = function(type, rdfid, requestedType, matchingComponents) {
    let template = templates.handlebars_cim_update_complex_type;
    let possibleClasses = [ type ];
    possibleClasses = possibleClasses.concat(complexTypes[type]);
    matchingComponents.aggregates = currentCimmenu().getAggregateComponentsList(requestedType, possibleClasses).aggregates;
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
    let template = templates.handlebars_cim_update_simple_type;
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

export default function (parentType, parentId, rdfid, type, attribute) {
    let updateMenu = "";
    if (type !== undefined) {
        if (type == "Float" || type == "Integer" || type == "Boolean" ) {
            let primitive_template = {
                type: parentType,
                rdfid: parentId,
                attribute: attribute,
                value: currentCimsvg().getValueOf(parentType, parentId, attribute)
            }
            let template = templates.handlebars_cim_update_primitive_type;
            updateMenu = template(primitive_template);
        }
        else {
            let requestedType = "cim:" + type;
            let dropdownId = common.generateUUID();
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
    return new SafeString(updateMenu);
};
