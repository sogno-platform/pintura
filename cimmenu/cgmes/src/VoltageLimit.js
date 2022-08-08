import templates from "../../templates/index.js"
import OperationalLimit from "./OperationalLimit.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class VoltageLimit extends OperationalLimit {

    static attributeHTML(object, cimmenu, classType="VoltageLimit") {
        let attributeEntries = OperationalLimit.attributeHTML(object, cimmenu, classType);
        if ('cim:VoltageLimit.value' in object) {
            attributeEntries['filledEntries']['cim:VoltageLimit.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltageLimit.value'],
                                                   'cim:Voltage',
                                                   'cim:VoltageLimit.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VoltageLimit.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltageLimit.value'],
                                                   'cim:Voltage',
                                                   'cim:VoltageLimit.value'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'value': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:VoltageLimit.value",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( OperationalLimit.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!VoltageLimit.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class VoltageLimit: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = VoltageLimit.attributeHTML(object, cimmenu);
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
export default VoltageLimit
