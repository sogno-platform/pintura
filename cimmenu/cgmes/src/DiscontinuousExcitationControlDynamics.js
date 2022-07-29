import templates from "../../templates/index.js"
import DynamicsFunctionBlock from "./DynamicsFunctionBlock.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class DiscontinuousExcitationControlDynamics extends DynamicsFunctionBlock {

    static attributeHTML(object, cimmenu, classType="DiscontinuousExcitationControlDynamics") {
        let attributeEntries = DynamicsFunctionBlock.attributeHTML(object, cimmenu, classType);
        if ('cim:DiscontinuousExcitationControlDynamics.ExcitationSystemDynamics' in object) {
            attributeEntries['filledEntries']['cim:DiscontinuousExcitationControlDynamics.ExcitationSystemDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscontinuousExcitationControlDynamics.ExcitationSystemDynamics'],
                                                   'cim:ExcitationSystemDynamics',
                                                   'cim:DiscontinuousExcitationControlDynamics.ExcitationSystemDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscontinuousExcitationControlDynamics.ExcitationSystemDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscontinuousExcitationControlDynamics.ExcitationSystemDynamics'],
                                                   'cim:ExcitationSystemDynamics',
                                                   'cim:DiscontinuousExcitationControlDynamics.ExcitationSystemDynamics'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ExcitationSystemDynamics': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DiscontinuousExcitationControlDynamics.ExcitationSystemDynamics",
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
            if (!DiscontinuousExcitationControlDynamics.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class DiscontinuousExcitationControlDynamics: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DiscontinuousExcitationControlDynamics.attributeHTML(object, cimmenu);
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
        "DiscontinuousExcitationControlUserDefined",
        "DiscExcContIEEEDEC1A",
        "DiscExcContIEEEDEC2A",
        "DiscExcContIEEEDEC3A",
        ];
        return subClasses;
    }
};
export default DiscontinuousExcitationControlDynamics
