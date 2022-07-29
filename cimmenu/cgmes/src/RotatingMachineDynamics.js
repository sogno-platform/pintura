import templates from "../../templates/index.js"
import DynamicsFunctionBlock from "./DynamicsFunctionBlock.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class RotatingMachineDynamics extends DynamicsFunctionBlock {

    static attributeHTML(object, cimmenu, classType="RotatingMachineDynamics") {
        let attributeEntries = DynamicsFunctionBlock.attributeHTML(object, cimmenu, classType);
        if ('cim:RotatingMachineDynamics.damping' in object) {
            attributeEntries['filledEntries']['cim:RotatingMachineDynamics.damping'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachineDynamics.damping'],
                                                   'cim:Simple_Float',
                                                   'cim:RotatingMachineDynamics.damping'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RotatingMachineDynamics.damping'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachineDynamics.damping'],
                                                   'cim:Simple_Float',
                                                   'cim:RotatingMachineDynamics.damping'
                                                 );
        }
        if ('cim:RotatingMachineDynamics.inertia' in object) {
            attributeEntries['filledEntries']['cim:RotatingMachineDynamics.inertia'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachineDynamics.inertia'],
                                                   'cim:Seconds',
                                                   'cim:RotatingMachineDynamics.inertia'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RotatingMachineDynamics.inertia'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachineDynamics.inertia'],
                                                   'cim:Seconds',
                                                   'cim:RotatingMachineDynamics.inertia'
                                                 );
        }
        if ('cim:RotatingMachineDynamics.saturationFactor' in object) {
            attributeEntries['filledEntries']['cim:RotatingMachineDynamics.saturationFactor'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachineDynamics.saturationFactor'],
                                                   'cim:Simple_Float',
                                                   'cim:RotatingMachineDynamics.saturationFactor'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RotatingMachineDynamics.saturationFactor'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachineDynamics.saturationFactor'],
                                                   'cim:Simple_Float',
                                                   'cim:RotatingMachineDynamics.saturationFactor'
                                                 );
        }
        if ('cim:RotatingMachineDynamics.saturationFactor120' in object) {
            attributeEntries['filledEntries']['cim:RotatingMachineDynamics.saturationFactor120'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachineDynamics.saturationFactor120'],
                                                   'cim:Simple_Float',
                                                   'cim:RotatingMachineDynamics.saturationFactor120'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RotatingMachineDynamics.saturationFactor120'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachineDynamics.saturationFactor120'],
                                                   'cim:Simple_Float',
                                                   'cim:RotatingMachineDynamics.saturationFactor120'
                                                 );
        }
        if ('cim:RotatingMachineDynamics.statorLeakageReactance' in object) {
            attributeEntries['filledEntries']['cim:RotatingMachineDynamics.statorLeakageReactance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachineDynamics.statorLeakageReactance'],
                                                   'cim:PU',
                                                   'cim:RotatingMachineDynamics.statorLeakageReactance'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RotatingMachineDynamics.statorLeakageReactance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachineDynamics.statorLeakageReactance'],
                                                   'cim:PU',
                                                   'cim:RotatingMachineDynamics.statorLeakageReactance'
                                                 );
        }
        if ('cim:RotatingMachineDynamics.statorResistance' in object) {
            attributeEntries['filledEntries']['cim:RotatingMachineDynamics.statorResistance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachineDynamics.statorResistance'],
                                                   'cim:PU',
                                                   'cim:RotatingMachineDynamics.statorResistance'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RotatingMachineDynamics.statorResistance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachineDynamics.statorResistance'],
                                                   'cim:PU',
                                                   'cim:RotatingMachineDynamics.statorResistance'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'damping': [CGMESProfile.shortNames.DY, ],
						'inertia': [CGMESProfile.shortNames.DY, ],
						'saturationFactor': [CGMESProfile.shortNames.DY, ],
						'saturationFactor120': [CGMESProfile.shortNames.DY, ],
						'statorLeakageReactance': [CGMESProfile.shortNames.DY, ],
						'statorResistance': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:RotatingMachineDynamics.damping",
            "cim:RotatingMachineDynamics.inertia",
            "cim:RotatingMachineDynamics.saturationFactor",
            "cim:RotatingMachineDynamics.saturationFactor120",
            "cim:RotatingMachineDynamics.statorLeakageReactance",
            "cim:RotatingMachineDynamics.statorResistance",
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
            if (!RotatingMachineDynamics.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class RotatingMachineDynamics: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = RotatingMachineDynamics.attributeHTML(object, cimmenu);
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
        "SynchronousMachineDynamics",
        "SynchronousMachineUserDefined",
        "SynchronousMachineSimplified",
        "SynchronousMachineDetailed",
        "SynchronousMachineTimeConstantReactance",
        "SynchronousMachineEquivalentCircuit",
        "AsynchronousMachineDynamics",
        "AsynchronousMachineUserDefined",
        "AsynchronousMachineTimeConstantReactance",
        "AsynchronousMachineEquivalentCircuit",
        ];
        return subClasses;
    }
};
export default RotatingMachineDynamics
