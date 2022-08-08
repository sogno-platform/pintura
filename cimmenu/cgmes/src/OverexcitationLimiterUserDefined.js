import templates from "../../templates/index.js"
import OverexcitationLimiterDynamics from "./OverexcitationLimiterDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class OverexcitationLimiterUserDefined extends OverexcitationLimiterDynamics {

    static attributeHTML(object, cimmenu, classType="OverexcitationLimiterUserDefined") {
        let attributeEntries = OverexcitationLimiterDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:OverexcitationLimiterUserDefined.proprietary' in object) {
            attributeEntries['filledEntries']['cim:OverexcitationLimiterUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcitationLimiterUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:OverexcitationLimiterUserDefined.proprietary'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcitationLimiterUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcitationLimiterUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:OverexcitationLimiterUserDefined.proprietary'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'proprietary': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:OverexcitationLimiterUserDefined.proprietary",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( OverexcitationLimiterDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!OverexcitationLimiterUserDefined.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class OverexcitationLimiterUserDefined: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = OverexcitationLimiterUserDefined.attributeHTML(object, cimmenu);
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
export default OverexcitationLimiterUserDefined
