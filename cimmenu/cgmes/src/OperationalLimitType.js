import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class OperationalLimitType extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="OperationalLimitType") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:OperationalLimitType.acceptableDuration' in object) {
            attributeEntries['filledEntries']['cim:OperationalLimitType.acceptableDuration'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OperationalLimitType.acceptableDuration'],
                                                   'cim:Seconds',
                                                   'cim:OperationalLimitType.acceptableDuration'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OperationalLimitType.acceptableDuration'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OperationalLimitType.acceptableDuration'],
                                                   'cim:Seconds',
                                                   'cim:OperationalLimitType.acceptableDuration'
                                                 );
        }
        if ('cim:OperationalLimitType.limitType' in object) {
            attributeEntries['filledEntries']['cim:OperationalLimitType.limitType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OperationalLimitType.limitType'],
                                                   'cim:LimitTypeKind',
                                                   'cim:OperationalLimitType.limitType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OperationalLimitType.limitType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OperationalLimitType.limitType'],
                                                   'cim:LimitTypeKind',
                                                   'cim:OperationalLimitType.limitType'
                                                 );
        }
        if ('cim:OperationalLimitType.direction' in object) {
            attributeEntries['filledEntries']['cim:OperationalLimitType.direction'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OperationalLimitType.direction'],
                                                   'cim:OperationalLimitDirectionKind',
                                                   'cim:OperationalLimitType.direction'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OperationalLimitType.direction'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OperationalLimitType.direction'],
                                                   'cim:OperationalLimitDirectionKind',
                                                   'cim:OperationalLimitType.direction'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'acceptableDuration': [CGMESProfile.shortNames.EQ, ],
						'limitType': [CGMESProfile.shortNames.EQ, ],
						'direction': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:OperationalLimitType.acceptableDuration",
            "cim:OperationalLimitType.limitType",
            "cim:OperationalLimitType.direction",
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
            if (!OperationalLimitType.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class OperationalLimitType: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = OperationalLimitType.attributeHTML(object, cimmenu);
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
export default OperationalLimitType
