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

import { simpleTypes, complexTypes } from '../generated/classStructure.js';
import common from './common.js';

// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
let isFunction = function(value) {
  return typeof value === 'function';
};

// Custom each based on Handlebars each
// https://github.com/wycats/handlebars.js/blob/master/lib/handlebars/helpers/each.js
let customEachFunction = function(context, options, customize) {
    if (!options) {
      throw new Exception('Must pass iterator to #each');
    }

    let fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data;

    if (isFunction(context)) { context = context.call(this); }

    if (options.data) {
      data = Handlebars.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: [context[field], field]
      });
    }

    if (context && typeof context === 'object') {
      if (Array.isArray(context)) {
        for (let j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else {
        let priorKey;

        let customizedContext = customize(context);

        for (let key in customizedContext) {
          if (customizedContext.hasOwnProperty(key)) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          }
        }
        if (priorKey !== undefined) {
          execIteration(priorKey, i - 1, true);
        }
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
};

Handlebars.registerHelper('sort_each', function(context, options) {
    return customEachFunction(context, options, function(context) {
        let sortedContext = {};
        Object.keys(context).sort().forEach(function(key) {
            sortedContext[key] = context[key];
        });
        return sortedContext;
    });
});

Handlebars.registerHelper('sort_each_by_name', function(context, options) {
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

Handlebars.registerHelper('removeColon', function(str) {
    return new Handlebars.SafeString(common.removeColon(str));
});

Handlebars.registerHelper('createGridArea', function(column, row, height) {
    let rowStart     = (row + 1).toString();
    let rowEnd       = (row + 1 + height).toString();
    let columnStart  = (column + 1).toString();
    let columnEnd    = (column + 2).toString();
    
    return new Handlebars.SafeString("grid-area: " + rowStart +
                                             " / " + columnStart +
                                             " / " + rowEnd +
                                             " / " + columnEnd);
});

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
    return new Handlebars.SafeString(updateMenu);
});
