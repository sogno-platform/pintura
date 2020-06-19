import templates from "../../templates/index.js"
import UnderexcitationLimiterDynamics from "./UnderexcitationLimiterDynamics.js"
import common from "../../src/common.js"

class UnderexcitationLimiterUserDefined extends UnderexcitationLimiterDynamics {

    static attributeHTML(object, cimmenu, classType="UnderexcitationLimiterUserDefined") {
        let attributeEntries = UnderexcitationLimiterDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:UnderexcitationLimiterUserDefined.proprietary' in object) {
            attributeEntries['filledEntries']['cim:UnderexcitationLimiterUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcitationLimiterUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:UnderexcitationLimiterUserDefined.proprietary'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcitationLimiterUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcitationLimiterUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:UnderexcitationLimiterUserDefined.proprietary'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:UnderexcitationLimiterUserDefined.proprietary",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( UnderexcitationLimiterDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!UnderexcitationLimiterUserDefined.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class UnderexcitationLimiterUserDefined: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = UnderexcitationLimiterUserDefined.attributeHTML(object, cimmenu);
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
export default UnderexcitationLimiterUserDefined
