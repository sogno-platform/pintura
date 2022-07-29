import templates from "../../templates/index.js"
import Switch from "./Switch.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ProtectedSwitch extends Switch {

    static attributeHTML(object, cimmenu, classType="ProtectedSwitch") {
        let attributeEntries = Switch.attributeHTML(object, cimmenu, classType);
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( Switch.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!ProtectedSwitch.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ProtectedSwitch: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ProtectedSwitch.attributeHTML(object, cimmenu);
        let filledEntries = separateEntries['filledEntries'];
        let emptyEntries = separateEntries['emptyEntries'];
        let attributeEntries = { ...filledEntries, ...emptyEntries };
        return templates.handlebars_cim_class_render({ 'attributes': attributeEntries});
    }
    static renderAsAttribute(matchingComponents) {
        let template = templates.handlebars_cim_update_complex_type;
        return template(matchingComponents);
    }
    static subClassList() {
        let subClasses = [
        "Breaker",
        "LoadBreakSwitch",
        ];
        return subClasses;
    }
};
export default ProtectedSwitch
