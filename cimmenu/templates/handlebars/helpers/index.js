import { SafeString } from 'handlebars/runtime';
import { customEachFunction } from '../../../src/helperUtils.js';
import common from '../../../src/common.js';
import classStructure from '../../generated/classStructure.js';
import templates from '../../index.js';

const complex_type_template = function(matchingComponents) {
    let template = templates.handlebars_cim_update_complex_type;
    let shortenedTypeName = matchingComponents.requestedType.substring(0,4) === 'cim:' ?
        matchingComponents.requestedType.substring(4) : matchingComponents.requestedType;
    let possibleClasses = [ shortenedTypeName ];
    possibleClasses = possibleClasses.concat(classStructure.complexTypes[shortenedTypeName]);
    matchingComponents.aggregates = currentCimmenu().getAggregateComponentsList(matchingComponents.requestedType, possibleClasses).aggregates;
    let targetRdfId;
    if (matchingComponents.attributeRdfid && matchingComponents.attributeRdfid["rdf:resource"]) {
        targetRdfId = matchingComponents.attributeRdfid["rdf:resource"].substr(1)
    }
    else {
        targetRdfId = matchingComponents.attributeRdfid;
    }
    for (let index in matchingComponents.aggregates) {
        if(matchingComponents.aggregates[index].rdfid == targetRdfId) {
            matchingComponents.aggregates[index].selected = 'selected';
        }
    }
    if (matchingComponents.classType == "Terminal") {
        for (let index in matchingComponents.aggregates) {
            if(matchingComponents.aggregates[index].attribute == "cim:Terminal.ConductingEquipment") {
                matchingComponents.aggregates[index].disabled = 'disabled';
            }
        }
    }
    return template(matchingComponents);
};

const simple_type_template = function(matchingComponents) {
    let template = templates.handlebars_cim_update_simple_type;
    let possibleValues = JSON.parse(JSON.stringify(classStructure.simpleTypes[matchingComponents.requestedType]));
    possibleValues.values.splice(0, 0, { value: "--"});
    matchingComponents.values = possibleValues.values;
    for (let index in matchingComponents.values) {
        if(matchingComponents.values[index].value == matchingComponents.parentRdfid) {
            matchingComponents.values[index].selected = 'selected';
        }
    }
    matchingComponents['simpletype'] = true;
    matchingComponents['buttonVisibility'] = "visibility:hidden";
    return template(matchingComponents);
};

const getAggregateComponentMenuCIM16 = function(details){
  let updateMenu = "";
  if (details.type !== undefined) {
      if (details.type == "Float" || details.type == "Integer" || details.type == "Boolean" ) {
          let primitive_template = {
              classType: details.classType,
              rdfid: details.parentId,
              attribute: details.classType + "." + details.attribute,
              value: currentCimsvg().getValueOf(details.classType, details.parentId, details.attribute)
          }
          let template = templates.handlebars_cim_update_primitive_type;
          updateMenu = template(primitive_template);
      }
      else {
          let requestedType = "cim:" + details.type;
          let dropdownId = common.generateUUID();
          let matchingComponents = {
              'attribute': details.attribute,
              'dropdownId': dropdownId,
              'requestedType': details.type,
              'parentRdfid': details.parentId,
              'classType': details.classType,
              'attributeRdfid': details.rdfid,
          }
          if (classStructure.simpleTypes[details.type] !== undefined) {
              updateMenu = simple_type_template(matchingComponents);
          }
          else if (classStructure.complexTypes[details.type] !== undefined) {
              updateMenu = complex_type_template(matchingComponents);
          }
          else {
              console.error("Cannot find ", details.type, " in simple or complex types.")
          }
      }
  }
  return new SafeString(updateMenu);
};

export default function(Handlebars) {

  Handlebars.registerHelper('neq', function (v1, v2, options) {
    if(v1 !== v2) {
      return options.fn(this);
    }
    return options.inverse(this);
  });

  Handlebars.registerHelper('eq', function (v1, v2, options) {
    if(v1 == v2) {
      return options.fn(this);
    }
    return options.inverse(this);
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
  Handlebars.registerHelper('getAggregateComponentMenu', function (classType, parentId, rdfid, type, attribute) {
    let completeAttributeName;
    let tokens = attribute.split(['.'])
    if (tokens.length == 2) {
        completeAttributeName = 'cim:' + attribute
    }
    else {
        completeAttributeName = classType + '.' + tokens[0]
    }
    let details = {
        classType: classType,
        parentId: parentId,
        rdfid: rdfid,
        type: type,
        attribute: completeAttributeName
    };
    if (currentCimsvg().getCimversion() === "cgmes") {
      return getAggregateComponentMenuCGMES(details);
    }
    else {
      return getAggregateComponentMenuCIM16(details);
    }
  });
}
