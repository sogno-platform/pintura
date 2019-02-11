import { customEachFunction } from '../../../src/helperUtils.js';

export default function(context, options) {
    return customEachFunction(context, options, function(context) {
        let sortedContext = {};
        Object.keys(context).sort().forEach(function(key) {
            sortedContext[key] = context[key];
        });
        return sortedContext;
    });
};


