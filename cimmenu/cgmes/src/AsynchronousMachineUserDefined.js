import templates from "../../templates/index.js"
import AsynchronousMachineDynamics from "./AsynchronousMachineDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class AsynchronousMachineUserDefined extends AsynchronousMachineDynamics {

    static attributeHTML(object, cimmenu, classType="AsynchronousMachineUserDefined") {
        let attributeEntries = AsynchronousMachineDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:AsynchronousMachineUserDefined.proprietary' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachineUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:AsynchronousMachineUserDefined.proprietary'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachineUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:AsynchronousMachineUserDefined.proprietary'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'proprietary': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:AsynchronousMachineUserDefined.proprietary",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( AsynchronousMachineDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!AsynchronousMachineUserDefined.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class AsynchronousMachineUserDefined: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = AsynchronousMachineUserDefined.attributeHTML(object, cimmenu);
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
export default AsynchronousMachineUserDefined
