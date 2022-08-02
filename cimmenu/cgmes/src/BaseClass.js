
import templates from "../../templates/index.js"
import common from "../../src/common.js"

class BaseClass {
    static attributeHTML(object, cimmenu) { 
        return { 'filledEntries': {}, 'emptyEntries': {} };
    }
    static isMemberAttribute(attribute) {
        return false;
    }
    static renderAsClass(object, cimmenu) { 
        return "";
    }
    static renderAsAttribute(matchingComponents) {
        return "";
    }
    static subClassList() {
        return [];
    }
};
export default BaseClass

