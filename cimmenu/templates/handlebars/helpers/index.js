import { SafeString } from 'handlebars/runtime';
import { customEachFunction } from '../../../src/helperUtils.js';
import classStructure from '../../generated/classStructure.js';
import templates from '../../index.js';
import common from '../../../src/common.js';

const complex_type_template = function(type, rdfid, requestedType, matchingComponents) {
    let template = templates.handlebars_cim_update_complex_type;
    let possibleClasses = [ type ];
    possibleClasses = possibleClasses.concat(classStructure.complexTypes[type]);
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
    let possibleValues = JSON.parse(JSON.stringify(classStructure.simpleTypes[type]));
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

export default function(Handlebars) {

  Handlebars.registerHelper('neq', function neq(v1, v2, options) {
    if(v1 !== v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  Handlebars.registerHelper('createGridArea', function (column, row, height) {
    let rowStart     = (row + 1).toString();
    let rowEnd       = (row + 1 + height).toString();
    let columnStart  = (column + 1).toString();
    let columnEnd    = (column + 2).toString();
    
    return new SafeString("grid-area: " + rowStart +
                                             " / " + columnStart +
                                             " / " + rowEnd +
                                             " / " + columnEnd);
  });

  Handlebars.registerHelper('sortEachByPinturaLabel', function(context, options) {
    return customEachFunction(context, options, function(context) {
        let contextSortedById = {};
        Object.keys(context).sort((a, b)=>{
            return (context[a]['pintura:label'].text > context[b]['pintura:label'].text);
        }).forEach(function(key) {
            contextSortedById[key] = context[key];
        });
        return contextSortedById;
    });
  });

  Handlebars.registerHelper('sortEachByIdentifiedObjectName', function(context, options) {
    return customEachFunction(context, options, function(context) {
        let contextSortedById = {};
        Object.keys(context).sort((a, b)=>{
            let a_name = common.safeExtract(context, a, 'cim:IdentifiedObject.name');
            let b_name = common.safeExtract(context, b, 'cim:IdentifiedObject.name');
            if (a_name && b_name) {
                return (a_name > b_name);
            }
            else if (context[a]['pintura:rdfid'] && context[b]['pintura:rdfid']) {
                return (context[a]['pintura:rdfid'].text > context[b]['pintura:rdfid'].text);
            }
            else return -1;
        }).forEach(function(key) {
            contextSortedById[key] = context[key];
        });
        return contextSortedById;
    });
  });

  Handlebars.registerHelper('sortEach', function(context, options) {
    return customEachFunction(context, options, function(context) {
        let sortedContext = {};
        Object.keys(context).sort().forEach(function(key) {
            sortedContext[key] = context[key];
        });
        return sortedContext;
    });
  });

  Handlebars.registerHelper('removeColon', function(str) {
    return new SafeString(common.removeColon(str));
  });

  Handlebars.registerHelper('getAggregateComponentMenu', function (parentType, parentId, rdfid, type, attribute) {
    let updateMenu = "";
    if (type !== undefined) {
        if (type == "Float" || type == "Integer" || type == "Boolean" ) {
            let primitive_template = {
                type: parentType,
                rdfid: parentId,
                attribute: attribute,
                value: currentCimsvg().getValueOf(parentType, parentId, attribute)
            }
            //let template = templates.handlebars_cim_update_primitive_type;
            //updateMenu = template(primitive_template);
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
            if (classStructure.simpleTypes[type]) {
                updateMenu = simple_type_template(type, rdfid, requestedType, matchingComponents);
            }
            else if (classStructure.complexTypes[type]) {
                updateMenu = complex_type_template(type, rdfid, requestedType, matchingComponents);
            }
        }
    }
    return new SafeString(updateMenu);
  });
}
