import { SafeString } from 'handlebars/runtime';
import { customEachFunction } from '../../../src/helperUtils.js';
import classStructure from '../../generated/classStructure.js';
import concrete from '../../generated/concrete.js';
import cgmesClassStructure from '../../generated/cgmesClassStructure.js';
import templates from '../../index.js';
import common from '../../../src/common.js';
import cgmes from '../../cgmesIndex.js';

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

const getRidOfHash = function(name){
    if (name !== undefined) {
       let tokens = name.split('#');
       if (tokens !== undefined) {
           if (tokens.length == 1) {
               return tokens[0];
           }
           if (tokens.length > 1) {
               return tokens[1];
           }
       }
    }
    return name;
}

const render_instance = function(matchingComponents) {
    let template = templates.handlebars_cim_instance_type;
    let shortenedTypeName = matchingComponents.requestedType.substring(0,4) === 'cim:' ?
        matchingComponents.requestedType.substring(4) : matchingComponents.requestedType;
    if (cgmesClassStructure[shortenedTypeName] !== undefined) {

        let possibleValues = JSON.parse(JSON.stringify(cgmesClassStructure[shortenedTypeName].instances));
        possibleValues.splice(0, 0, { value: "--"});
        if (cgmesClassStructure[shortenedTypeName].instances) {
            matchingComponents.aggregates = possibleValues;
        }
        else {
            console.error("render_instance: Cannot create menu for class without instance list!");
            return;
        }
        for (let index in matchingComponents.aggregates) {
            let candidate = matchingComponents.aggregates[index].about;
            let value = matchingComponents.value['rdf:resource']
            if(candidate !== undefined && getRidOfHash(value) == candidate) {
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
    }
    return template(matchingComponents);
};

const render_cgmes_class = function(matchingComponents) {
    let template = templates.handlebars_cim_update_complex_type;
    let shortenedTypeName = matchingComponents.requestedType.substring(0,4) === 'cim:' ?
        matchingComponents.requestedType.substring(4) : matchingComponents.requestedType;
    let possibleClasses = [ shortenedTypeName ];
    if (shortenedTypeName in cgmesClassStructure) {
        let subclasses = cgmesClassStructure[shortenedTypeName].subclasses;
        possibleClasses = possibleClasses.concat(cgmesClassStructure[shortenedTypeName].subclasses);
    }
    matchingComponents.aggregates = currentCimmenu().getAggregateComponentsList(matchingComponents.requestedType, possibleClasses).aggregates;
    let targetRdfId;
    if (matchingComponents.value && matchingComponents.value["rdf:resource"]) {
        targetRdfId = matchingComponents.value["rdf:resource"].substr(1)
    }
    else {
        targetRdfId = matchingComponents.value;
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

class aggregateRenderer {
    static renderFloat(data) {
        return templates.handlebars_cim_render_float(data)
    }
    static renderString(data) {
        return templates.handlebars_cim_render_string(data)
    }
    static renderBoolean(data) {
        return templates.handlebars_cim_render_boolean(data)
    }
    static renderInteger(data) {
        // TODO: WRONG!
        return templates.handlebars_cim_render_string(data)
    }
    static renderClass(data) {
        return render_cgmes_class(data);
    }
    static renderInstance(data) {
        return render_instance(data);
    }
};

const getAggregateComponentMenuCGMES = function(details){
    let updateMenu = "";
    let profile = concrete[details.classType.substring(4)]['concrete']
    let jsObject = 'generated_attributes_cgmes_' + profile + '_' + details.type.substring(4) + '_js';
    if (jsObject in cgmes) {
        let functionName = cgmes[jsObject].render;
        let render = aggregateRenderer[functionName];
        let dropdownId = common.generateUUID();
        if (details.type !== undefined) {
            let value = currentCimsvg().getValueOf(details.classType, details.parentId, details.attribute)
            let attributeDetails = {
                attribute: details.attribute,
                dropdownId: dropdownId,
                parentRdfid: details.parentId,
                requestedType: details.type,
                classType: details.classType,
                value: value
            }
            updateMenu = render(attributeDetails);
        }
        return new SafeString(updateMenu);
    }
    else {
        console.error("Cannot find [", jsObject, "] in cgmes render table.");
        return new SafeString("");
    }
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
