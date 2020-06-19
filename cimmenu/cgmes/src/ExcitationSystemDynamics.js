import templates from "../../templates/index.js"
import DynamicsFunctionBlock from "./DynamicsFunctionBlock.js"
import common from "../../src/common.js"

class ExcitationSystemDynamics extends DynamicsFunctionBlock {

    static attributeHTML(object, cimmenu, classType="ExcitationSystemDynamics") {
        let attributeEntries = DynamicsFunctionBlock.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcitationSystemDynamics.SynchronousMachineDynamics' in object) {
            attributeEntries['filledEntries']['cim:ExcitationSystemDynamics.SynchronousMachineDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcitationSystemDynamics.SynchronousMachineDynamics'],
                                                   'cim:SynchronousMachineDynamics',
                                                   'cim:ExcitationSystemDynamics.SynchronousMachineDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcitationSystemDynamics.SynchronousMachineDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcitationSystemDynamics.SynchronousMachineDynamics'],
                                                   'cim:SynchronousMachineDynamics',
                                                   'cim:ExcitationSystemDynamics.SynchronousMachineDynamics'
                                                 );
        }
        if ('cim:ExcitationSystemDynamics.PFVArControllerType1Dynamics' in object) {
            attributeEntries['filledEntries']['cim:ExcitationSystemDynamics.PFVArControllerType1Dynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcitationSystemDynamics.PFVArControllerType1Dynamics'],
                                                   'cim:PFVArControllerType1Dynamics',
                                                   'cim:ExcitationSystemDynamics.PFVArControllerType1Dynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcitationSystemDynamics.PFVArControllerType1Dynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcitationSystemDynamics.PFVArControllerType1Dynamics'],
                                                   'cim:PFVArControllerType1Dynamics',
                                                   'cim:ExcitationSystemDynamics.PFVArControllerType1Dynamics'
                                                 );
        }
        if ('cim:ExcitationSystemDynamics.DiscontinuousExcitationControlDynamics' in object) {
            attributeEntries['filledEntries']['cim:ExcitationSystemDynamics.DiscontinuousExcitationControlDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcitationSystemDynamics.DiscontinuousExcitationControlDynamics'],
                                                   'cim:DiscontinuousExcitationControlDynamics',
                                                   'cim:ExcitationSystemDynamics.DiscontinuousExcitationControlDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcitationSystemDynamics.DiscontinuousExcitationControlDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcitationSystemDynamics.DiscontinuousExcitationControlDynamics'],
                                                   'cim:DiscontinuousExcitationControlDynamics',
                                                   'cim:ExcitationSystemDynamics.DiscontinuousExcitationControlDynamics'
                                                 );
        }
        if ('cim:ExcitationSystemDynamics.PFVArControllerType2Dynamics' in object) {
            attributeEntries['filledEntries']['cim:ExcitationSystemDynamics.PFVArControllerType2Dynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcitationSystemDynamics.PFVArControllerType2Dynamics'],
                                                   'cim:PFVArControllerType2Dynamics',
                                                   'cim:ExcitationSystemDynamics.PFVArControllerType2Dynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcitationSystemDynamics.PFVArControllerType2Dynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcitationSystemDynamics.PFVArControllerType2Dynamics'],
                                                   'cim:PFVArControllerType2Dynamics',
                                                   'cim:ExcitationSystemDynamics.PFVArControllerType2Dynamics'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcitationSystemDynamics.SynchronousMachineDynamics",
            "cim:ExcitationSystemDynamics.PFVArControllerType1Dynamics",
            "cim:ExcitationSystemDynamics.DiscontinuousExcitationControlDynamics",
            "cim:ExcitationSystemDynamics.PFVArControllerType2Dynamics",
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
            if (!ExcitationSystemDynamics.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcitationSystemDynamics: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu);
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
        "ExcitationSystemUserDefined",
        "ExcIEEEAC1A",
        "ExcIEEEAC2A",
        "ExcIEEEAC3A",
        "ExcIEEEAC4A",
        "ExcIEEEAC5A",
        "ExcIEEEAC6A",
        "ExcIEEEAC7B",
        "ExcIEEEAC8B",
        "ExcIEEEDC1A",
        "ExcIEEEDC2A",
        "ExcIEEEDC3A",
        "ExcIEEEDC4B",
        "ExcIEEEST1A",
        "ExcIEEEST2A",
        "ExcIEEEST3A",
        "ExcIEEEST4B",
        "ExcIEEEST5B",
        "ExcIEEEST6B",
        "ExcIEEEST7B",
        "ExcAC1A",
        "ExcAC2A",
        "ExcAC3A",
        "ExcAC4A",
        "ExcAC5A",
        "ExcAC6A",
        "ExcAC8B",
        "ExcANS",
        "ExcAVR1",
        "ExcAVR2",
        "ExcAVR3",
        "ExcAVR4",
        "ExcAVR5",
        "ExcAVR7",
        "ExcBBC",
        "ExcCZ",
        "ExcDC1A",
        "ExcDC2A",
        "ExcDC3A",
        "ExcDC3A1",
        "ExcELIN1",
        "ExcELIN2",
        "ExcHU",
        "ExcOEX3T",
        "ExcPIC",
        "ExcREXS",
        "ExcSCRX",
        "ExcSEXS",
        "ExcSK",
        "ExcST1A",
        "ExcST2A",
        "ExcST3A",
        "ExcST4B",
        "ExcST6B",
        "ExcST7B",
        ];
        return subClasses;
    }
};
export default ExcitationSystemDynamics
