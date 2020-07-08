import { SafeString } from 'handlebars/runtime';
import { customEachFunction } from '../../../src/helperUtils.js';
import common from '../../../src/common.js';
import templates from '../../index.js';

export default function(Handlebars) {

  Handlebars.registerHelper('removeClass', function (str) {
    return new SafeString(common.removeClass(str));
  });

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
}
