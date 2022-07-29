import templates from "../../templates/index.js"
import DynamicsFunctionBlock from "./DynamicsFunctionBlock.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class VoltageCompensatorDynamics extends DynamicsFunctionBlock {

    static attributeHTML(object, cimmenu, classType="VoltageCompensatorDynamics") {
        let attributeEntries = DynamicsFunctionBlock.attributeHTML(object, cimmenu, classType);
        if ('cim:VoltageCompensatorDynamics.ExcitationSystemDynamics' in object) {
            attributeEntries['filledEntries']['cim:VoltageCompensatorDynamics.ExcitationSystemDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltageCompensatorDynamics.ExcitationSystemDynamics'],
                                                   'cim:ExcitationSystemDynamics',
                                                   'cim:VoltageCompensatorDynamics.ExcitationSystemDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VoltageCompensatorDynamics.ExcitationSystemDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltageCompensatorDynamics.ExcitationSystemDynamics'],
                                                   'cim:ExcitationSystemDynamics',
                                                   'cim:VoltageCompensatorDynamics.ExcitationSystemDynamics'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ExcitationSystemDynamics': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:VoltageCompensatorDynamics.ExcitationSystemDynamics",
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
            if (!VoltageCompensatorDynamics.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class VoltageCompensatorDynamics: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = VoltageCompensatorDynamics.attributeHTML(object, cimmenu);
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
        "VoltageCompensatorUserDefined",
        "VCompIEEEType1",
        "VCompIEEEType2",
        ];
        return subClasses;
    }
};
export default VoltageCompensatorDynamics
