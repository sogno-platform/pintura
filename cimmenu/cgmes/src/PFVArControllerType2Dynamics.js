import templates from "../../templates/index.js"
import DynamicsFunctionBlock from "./DynamicsFunctionBlock.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PFVArControllerType2Dynamics extends DynamicsFunctionBlock {

    static attributeHTML(object, cimmenu, classType="PFVArControllerType2Dynamics") {
        let attributeEntries = DynamicsFunctionBlock.attributeHTML(object, cimmenu, classType);
        if ('cim:PFVArControllerType2Dynamics.ExcitationSystemDynamics' in object) {
            attributeEntries['filledEntries']['cim:PFVArControllerType2Dynamics.ExcitationSystemDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArControllerType2Dynamics.ExcitationSystemDynamics'],
                                                   'cim:ExcitationSystemDynamics',
                                                   'cim:PFVArControllerType2Dynamics.ExcitationSystemDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArControllerType2Dynamics.ExcitationSystemDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArControllerType2Dynamics.ExcitationSystemDynamics'],
                                                   'cim:ExcitationSystemDynamics',
                                                   'cim:PFVArControllerType2Dynamics.ExcitationSystemDynamics'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ExcitationSystemDynamics': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PFVArControllerType2Dynamics.ExcitationSystemDynamics",
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
            if (!PFVArControllerType2Dynamics.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PFVArControllerType2Dynamics: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PFVArControllerType2Dynamics.attributeHTML(object, cimmenu);
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
        "PFVArControllerType2UserDefined",
        "PFVArType2IEEEPFController",
        "PFVArType2IEEEVArController",
        "PFVArType2Common1",
        ];
        return subClasses;
    }
};
export default PFVArControllerType2Dynamics
