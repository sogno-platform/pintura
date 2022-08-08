import templates from "../../templates/index.js"
import DynamicsFunctionBlock from "./DynamicsFunctionBlock.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class OverexcitationLimiterDynamics extends DynamicsFunctionBlock {

    static attributeHTML(object, cimmenu, classType="OverexcitationLimiterDynamics") {
        let attributeEntries = DynamicsFunctionBlock.attributeHTML(object, cimmenu, classType);
        if ('cim:OverexcitationLimiterDynamics.ExcitationSystemDynamics' in object) {
            attributeEntries['filledEntries']['cim:OverexcitationLimiterDynamics.ExcitationSystemDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcitationLimiterDynamics.ExcitationSystemDynamics'],
                                                   'cim:ExcitationSystemDynamics',
                                                   'cim:OverexcitationLimiterDynamics.ExcitationSystemDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcitationLimiterDynamics.ExcitationSystemDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcitationLimiterDynamics.ExcitationSystemDynamics'],
                                                   'cim:ExcitationSystemDynamics',
                                                   'cim:OverexcitationLimiterDynamics.ExcitationSystemDynamics'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ExcitationSystemDynamics': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:OverexcitationLimiterDynamics.ExcitationSystemDynamics",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( DynamicsFunctionBlock.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!OverexcitationLimiterDynamics.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class OverexcitationLimiterDynamics: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = OverexcitationLimiterDynamics.attributeHTML(object, cimmenu);
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
        "OverexcitationLimiterUserDefined",
        "OverexcLimIEEE",
        "OverexcLim2",
        "OverexcLimX1",
        "OverexcLimX2",
        ];
        return subClasses;
    }
};
export default OverexcitationLimiterDynamics
