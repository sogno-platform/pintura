import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class OperationalLimit extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="OperationalLimit") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:OperationalLimit.OperationalLimitSet' in object) {
            attributeEntries['filledEntries']['cim:OperationalLimit.OperationalLimitSet'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OperationalLimit.OperationalLimitSet'],
                                                   'cim:OperationalLimitSet',
                                                   'cim:OperationalLimit.OperationalLimitSet'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OperationalLimit.OperationalLimitSet'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OperationalLimit.OperationalLimitSet'],
                                                   'cim:OperationalLimitSet',
                                                   'cim:OperationalLimit.OperationalLimitSet'
                                                 );
        }
        if ('cim:OperationalLimit.OperationalLimitType' in object) {
            attributeEntries['filledEntries']['cim:OperationalLimit.OperationalLimitType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OperationalLimit.OperationalLimitType'],
                                                   'cim:OperationalLimitType',
                                                   'cim:OperationalLimit.OperationalLimitType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OperationalLimit.OperationalLimitType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OperationalLimit.OperationalLimitType'],
                                                   'cim:OperationalLimitType',
                                                   'cim:OperationalLimit.OperationalLimitType'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'OperationalLimitSet': [CGMESProfile.shortNames.EQ, ],
						'OperationalLimitType': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:OperationalLimit.OperationalLimitSet",
            "cim:OperationalLimit.OperationalLimitType",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( IdentifiedObject.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!OperationalLimit.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class OperationalLimit: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = OperationalLimit.attributeHTML(object, cimmenu);
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
        "CurrentLimit",
        "VoltageLimit",
        "ActivePowerLimit",
        "ApparentPowerLimit",
        ];
        return subClasses;
    }
};
export default OperationalLimit
