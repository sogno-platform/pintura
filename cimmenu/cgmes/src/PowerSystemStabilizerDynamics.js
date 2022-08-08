import templates from "../../templates/index.js"
import DynamicsFunctionBlock from "./DynamicsFunctionBlock.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PowerSystemStabilizerDynamics extends DynamicsFunctionBlock {

    static attributeHTML(object, cimmenu, classType="PowerSystemStabilizerDynamics") {
        let attributeEntries = DynamicsFunctionBlock.attributeHTML(object, cimmenu, classType);
        if ('cim:PowerSystemStabilizerDynamics.ExcitationSystemDynamics' in object) {
            attributeEntries['filledEntries']['cim:PowerSystemStabilizerDynamics.ExcitationSystemDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerSystemStabilizerDynamics.ExcitationSystemDynamics'],
                                                   'cim:ExcitationSystemDynamics',
                                                   'cim:PowerSystemStabilizerDynamics.ExcitationSystemDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerSystemStabilizerDynamics.ExcitationSystemDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerSystemStabilizerDynamics.ExcitationSystemDynamics'],
                                                   'cim:ExcitationSystemDynamics',
                                                   'cim:PowerSystemStabilizerDynamics.ExcitationSystemDynamics'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ExcitationSystemDynamics': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PowerSystemStabilizerDynamics.ExcitationSystemDynamics",
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
            if (!PowerSystemStabilizerDynamics.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class PowerSystemStabilizerDynamics: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PowerSystemStabilizerDynamics.attributeHTML(object, cimmenu);
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
        "PowerSystemStabilizerUserDefined",
        "PssIEEE1A",
        "PssIEEE2B",
        "PssIEEE3B",
        "PssIEEE4B",
        "Pss1",
        "Pss1A",
        "Pss2B",
        "Pss2ST",
        "Pss5",
        "PssELIN2",
        "PssPTIST1",
        "PssPTIST3",
        "PssSB4",
        "PssSH",
        "PssSK",
        "PssWECC",
        ];
        return subClasses;
    }
};
export default PowerSystemStabilizerDynamics
