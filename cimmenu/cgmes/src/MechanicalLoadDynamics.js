import templates from "../../templates/index.js"
import DynamicsFunctionBlock from "./DynamicsFunctionBlock.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class MechanicalLoadDynamics extends DynamicsFunctionBlock {

    static attributeHTML(object, cimmenu, classType="MechanicalLoadDynamics") {
        let attributeEntries = DynamicsFunctionBlock.attributeHTML(object, cimmenu, classType);
        if ('cim:MechanicalLoadDynamics.SynchronousMachineDynamics' in object) {
            attributeEntries['filledEntries']['cim:MechanicalLoadDynamics.SynchronousMachineDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MechanicalLoadDynamics.SynchronousMachineDynamics'],
                                                   'cim:SynchronousMachineDynamics',
                                                   'cim:MechanicalLoadDynamics.SynchronousMachineDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MechanicalLoadDynamics.SynchronousMachineDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MechanicalLoadDynamics.SynchronousMachineDynamics'],
                                                   'cim:SynchronousMachineDynamics',
                                                   'cim:MechanicalLoadDynamics.SynchronousMachineDynamics'
                                                 );
        }
        if ('cim:MechanicalLoadDynamics.AsynchronousMachineDynamics' in object) {
            attributeEntries['filledEntries']['cim:MechanicalLoadDynamics.AsynchronousMachineDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MechanicalLoadDynamics.AsynchronousMachineDynamics'],
                                                   'cim:AsynchronousMachineDynamics',
                                                   'cim:MechanicalLoadDynamics.AsynchronousMachineDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MechanicalLoadDynamics.AsynchronousMachineDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MechanicalLoadDynamics.AsynchronousMachineDynamics'],
                                                   'cim:AsynchronousMachineDynamics',
                                                   'cim:MechanicalLoadDynamics.AsynchronousMachineDynamics'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'SynchronousMachineDynamics': [CGMESProfile.shortNames.DY, ],
						'AsynchronousMachineDynamics': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:MechanicalLoadDynamics.SynchronousMachineDynamics",
            "cim:MechanicalLoadDynamics.AsynchronousMachineDynamics",
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
            if (!MechanicalLoadDynamics.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class MechanicalLoadDynamics: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = MechanicalLoadDynamics.attributeHTML(object, cimmenu);
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
        "MechanicalLoadUserDefined",
        "MechLoad1",
        ];
        return subClasses;
    }
};
export default MechanicalLoadDynamics
