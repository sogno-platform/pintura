import templates from "../../templates/index.js"
import ConnectivityNodeContainer from "./ConnectivityNodeContainer.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class EquipmentContainer extends ConnectivityNodeContainer {

    static attributeHTML(object, cimmenu, classType="EquipmentContainer") {
        let attributeEntries = ConnectivityNodeContainer.attributeHTML(object, cimmenu, classType);
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.EQ_BD, ],
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
        else if ( ConnectivityNodeContainer.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!EquipmentContainer.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class EquipmentContainer: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = EquipmentContainer.attributeHTML(object, cimmenu);
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
        "DCEquipmentContainer",
        "DCConverterUnit",
        "DCLine",
        "Substation",
        "VoltageLevel",
        "Line",
        "Bay",
        ];
        return subClasses;
    }
};
export default EquipmentContainer
