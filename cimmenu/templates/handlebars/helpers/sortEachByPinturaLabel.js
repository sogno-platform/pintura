import { customEachFunction } from '../../../src/helperUtils.js';

export default function(context, options) {
    return customEachFunction(context, options, function(context) {
        let contextSortedById = {};
        Object.keys(context).sort((a, b)=>{
            return (context[a]['pintura:label'].text > context[b]['pintura:label'].text);
        }).forEach(function(key) {
            contextSortedById[key] = context[key];
        });
        return contextSortedById;
    });
};


