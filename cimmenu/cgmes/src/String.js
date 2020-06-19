
import templates from "../../templates/index.js";
class String {
    static attributeHTML(object, cimmenu) { 
        return {};
    }
    static isMemberAttribute(attribute) {
        return false;
    }
    static renderAsClass(object, cimmenu) { 
        return "";
    }
    static renderAsAttribute(data) {
        return templates.handlebars_cim_render_string(data)
    }
    static subClassList() {
        return [];
    }
};
export default String
