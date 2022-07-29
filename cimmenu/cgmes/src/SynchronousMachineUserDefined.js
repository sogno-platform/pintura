import templates from "../../templates/index.js"
import SynchronousMachineDynamics from "./SynchronousMachineDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class SynchronousMachineUserDefined extends SynchronousMachineDynamics {

    static attributeHTML(object, cimmenu, classType="SynchronousMachineUserDefined") {
        let attributeEntries = SynchronousMachineDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:SynchronousMachineUserDefined.proprietary' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:SynchronousMachineUserDefined.proprietary'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:SynchronousMachineUserDefined.proprietary'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'proprietary': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:SynchronousMachineUserDefined.proprietary",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( SynchronousMachineDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!SynchronousMachineUserDefined.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class SynchronousMachineUserDefined: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SynchronousMachineUserDefined.attributeHTML(object, cimmenu);
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
export default SynchronousMachineUserDefined
