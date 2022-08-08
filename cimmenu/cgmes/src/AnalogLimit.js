import templates from "../../templates/index.js"
import Limit from "./Limit.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class AnalogLimit extends Limit {

    static attributeHTML(object, cimmenu, classType="AnalogLimit") {
        let attributeEntries = Limit.attributeHTML(object, cimmenu, classType);
        if ('cim:AnalogLimit.value' in object) {
            attributeEntries['filledEntries']['cim:AnalogLimit.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AnalogLimit.value'],
                                                   'cim:Simple_Float',
                                                   'cim:AnalogLimit.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AnalogLimit.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AnalogLimit.value'],
                                                   'cim:Simple_Float',
                                                   'cim:AnalogLimit.value'
                                                 );
        }
        if ('cim:AnalogLimit.LimitSet' in object) {
            attributeEntries['filledEntries']['cim:AnalogLimit.LimitSet'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AnalogLimit.LimitSet'],
                                                   'cim:AnalogLimitSet',
                                                   'cim:AnalogLimit.LimitSet'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AnalogLimit.LimitSet'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AnalogLimit.LimitSet'],
                                                   'cim:AnalogLimitSet',
                                                   'cim:AnalogLimit.LimitSet'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'value': [CGMESProfile.shortNames.EQ, ],
						'LimitSet': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:AnalogLimit.value",
            "cim:AnalogLimit.LimitSet",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( Limit.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!AnalogLimit.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class AnalogLimit: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = AnalogLimit.attributeHTML(object, cimmenu);
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
export default AnalogLimit
