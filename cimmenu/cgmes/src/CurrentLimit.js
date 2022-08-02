import templates from "../../templates/index.js"
import OperationalLimit from "./OperationalLimit.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class CurrentLimit extends OperationalLimit {

    static attributeHTML(object, cimmenu, classType="CurrentLimit") {
        let attributeEntries = OperationalLimit.attributeHTML(object, cimmenu, classType);
        if ('cim:CurrentLimit.value' in object) {
            attributeEntries['filledEntries']['cim:CurrentLimit.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CurrentLimit.value'],
                                                   'cim:CurrentFlow',
                                                   'cim:CurrentLimit.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CurrentLimit.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CurrentLimit.value'],
                                                   'cim:CurrentFlow',
                                                   'cim:CurrentLimit.value'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'value': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:CurrentLimit.value",
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
            if (!CurrentLimit.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class CurrentLimit: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = CurrentLimit.attributeHTML(object, cimmenu);
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
export default CurrentLimit
