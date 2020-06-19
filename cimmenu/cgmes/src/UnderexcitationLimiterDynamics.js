import templates from "../../templates/index.js"
import DynamicsFunctionBlock from "./DynamicsFunctionBlock.js"
import common from "../../src/common.js"

class UnderexcitationLimiterDynamics extends DynamicsFunctionBlock {

    static attributeHTML(object, cimmenu, classType="UnderexcitationLimiterDynamics") {
        let attributeEntries = DynamicsFunctionBlock.attributeHTML(object, cimmenu, classType);
        if ('cim:UnderexcitationLimiterDynamics.ExcitationSystemDynamics' in object) {
            attributeEntries['filledEntries']['cim:UnderexcitationLimiterDynamics.ExcitationSystemDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcitationLimiterDynamics.ExcitationSystemDynamics'],
                                                   'cim:ExcitationSystemDynamics',
                                                   'cim:UnderexcitationLimiterDynamics.ExcitationSystemDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcitationLimiterDynamics.ExcitationSystemDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcitationLimiterDynamics.ExcitationSystemDynamics'],
                                                   'cim:ExcitationSystemDynamics',
                                                   'cim:UnderexcitationLimiterDynamics.ExcitationSystemDynamics'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:UnderexcitationLimiterDynamics.ExcitationSystemDynamics",
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
            if (!UnderexcitationLimiterDynamics.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class UnderexcitationLimiterDynamics: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = UnderexcitationLimiterDynamics.attributeHTML(object, cimmenu);
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
        "UnderexcitationLimiterUserDefined",
        "UnderexcLimIEEE1",
        "UnderexcLimIEEE2",
        "UnderexcLim2Simplified",
        "UnderexcLimX1",
        "UnderexcLimX2",
        ];
        return subClasses;
    }
};
export default UnderexcitationLimiterDynamics
