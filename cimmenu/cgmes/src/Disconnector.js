import templates from "../../templates/index.js"
import Switch from "./Switch.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Disconnector extends Switch {

    static attributeHTML(object, cimmenu, classType="Disconnector") {
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
            if (!Disconnector.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class Disconnector: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Disconnector.attributeHTML(object, cimmenu);
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
        ];
        return subClasses;
    }
};
export default Disconnector
