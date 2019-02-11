import { customEachFunction } from '../../../src/helperUtils.js';
import common from '../../../src/common.js';

export default function(context, options) {
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
};


