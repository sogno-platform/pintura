import templates from "../../templates/index.js"
import RotatingMachineDynamics from "./RotatingMachineDynamics.js"
import common from "../../src/common.js"

class SynchronousMachineDynamics extends RotatingMachineDynamics {

    static attributeHTML(object, cimmenu, classType="SynchronousMachineDynamics") {
        let attributeEntries = RotatingMachineDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:SynchronousMachineDynamics.SynchronousMachine' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineDynamics.SynchronousMachine'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineDynamics.SynchronousMachine'],
                                                   'cim:SynchronousMachine',
                                                   'cim:SynchronousMachineDynamics.SynchronousMachine'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineDynamics.SynchronousMachine'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineDynamics.SynchronousMachine'],
                                                   'cim:SynchronousMachine',
                                                   'cim:SynchronousMachineDynamics.SynchronousMachine'
                                                 );
        }
        if ('cim:SynchronousMachineDynamics.ExcitationSystemDynamics' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineDynamics.ExcitationSystemDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineDynamics.ExcitationSystemDynamics'],
                                                   'cim:ExcitationSystemDynamics',
                                                   'cim:SynchronousMachineDynamics.ExcitationSystemDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineDynamics.ExcitationSystemDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineDynamics.ExcitationSystemDynamics'],
                                                   'cim:ExcitationSystemDynamics',
                                                   'cim:SynchronousMachineDynamics.ExcitationSystemDynamics'
                                                 );
        }
        if ('cim:SynchronousMachineDynamics.GenICompensationForGenJ' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineDynamics.GenICompensationForGenJ'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineDynamics.GenICompensationForGenJ'],
                                                   'cim:GenICompensationForGenJ',
                                                   'cim:SynchronousMachineDynamics.GenICompensationForGenJ'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineDynamics.GenICompensationForGenJ'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineDynamics.GenICompensationForGenJ'],
                                                   'cim:GenICompensationForGenJ',
                                                   'cim:SynchronousMachineDynamics.GenICompensationForGenJ'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:SynchronousMachineDynamics.SynchronousMachine",
            "cim:SynchronousMachineDynamics.ExcitationSystemDynamics",
            "cim:SynchronousMachineDynamics.GenICompensationForGenJ",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( RotatingMachineDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!SynchronousMachineDynamics.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class SynchronousMachineDynamics: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SynchronousMachineDynamics.attributeHTML(object, cimmenu);
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
        "SynchronousMachineUserDefined",
        "SynchronousMachineSimplified",
        "SynchronousMachineDetailed",
        "SynchronousMachineTimeConstantReactance",
        "SynchronousMachineEquivalentCircuit",
        ];
        return subClasses;
    }
};
export default SynchronousMachineDynamics
