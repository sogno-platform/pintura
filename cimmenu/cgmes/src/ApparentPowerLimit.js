import templates from "../../templates/index.js"
import OperationalLimit from "./OperationalLimit.js"
import common from "../../src/common.js"

class ApparentPowerLimit extends OperationalLimit {

    static attributeHTML(object, cimmenu, classType="ApparentPowerLimit") {
        let attributeEntries = OperationalLimit.attributeHTML(object, cimmenu, classType);
        if ('cim:ApparentPowerLimit.value' in object) {
            attributeEntries['filledEntries']['cim:ApparentPowerLimit.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ApparentPowerLimit.value'],
                                                   'cim:ApparentPower',
                                                   'cim:ApparentPowerLimit.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ApparentPowerLimit.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ApparentPowerLimit.value'],
                                                   'cim:ApparentPower',
                                                   'cim:ApparentPowerLimit.value'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ApparentPowerLimit.value",
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
            if (!ApparentPowerLimit.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ApparentPowerLimit: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ApparentPowerLimit.attributeHTML(object, cimmenu);
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
export default ApparentPowerLimit
