
import { createFrame, Exception } from "handlebars/runtime";

// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
let isFunction = function(value) {
    return typeof value === "function";
};

// Custom each based on Handlebars each
// https://github.com/wycats/handlebars.js/blob/master/lib/handlebars/helpers/each.js
let customEachFunction = function(context, options, customize) {
    if (!options) {
        throw new Exception("Must pass iterator to #each");
    }

    let fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = "",
        data;

    if (isFunction(context)) { context = context.call(this); }

    if (options.data) {
        data = createFrame(options.data);
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

    if (context && typeof context === "object") {
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
                let hasOwnProp = Object.prototype.hasOwnProperty.call(customizedContext, key);
                if (hasOwnProp) {
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

export { customEachFunction };
