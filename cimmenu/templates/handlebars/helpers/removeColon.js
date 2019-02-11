import { SafeString } from 'handlebars/runtime';
import common from '../../../src/common.js';
export default function(str) {
    return new SafeString(common.removeColon(str));
};
