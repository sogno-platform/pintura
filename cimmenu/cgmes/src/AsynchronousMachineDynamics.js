import templates from "../../templates/index.js"
import RotatingMachineDynamics from "./RotatingMachineDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class AsynchronousMachineDynamics extends RotatingMachineDynamics {

    static attributeHTML(object, cimmenu, classType="AsynchronousMachineDynamics") {
        let attributeEntries = RotatingMachineDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:AsynchronousMachineDynamics.AsynchronousMachine' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachineDynamics.AsynchronousMachine'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineDynamics.AsynchronousMachine'],
                                                   'cim:AsynchronousMachine',
                                                   'cim:AsynchronousMachineDynamics.AsynchronousMachine'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachineDynamics.AsynchronousMachine'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineDynamics.AsynchronousMachine'],
                                                   'cim:AsynchronousMachine',
                                                   'cim:AsynchronousMachineDynamics.AsynchronousMachine'
                                                 );
        }
        if ('cim:AsynchronousMachineDynamics.WindTurbineType1or2Dynamics' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachineDynamics.WindTurbineType1or2Dynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineDynamics.WindTurbineType1or2Dynamics'],
                                                   'cim:WindTurbineType1or2Dynamics',
                                                   'cim:AsynchronousMachineDynamics.WindTurbineType1or2Dynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachineDynamics.WindTurbineType1or2Dynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineDynamics.WindTurbineType1or2Dynamics'],
                                                   'cim:WindTurbineType1or2Dynamics',
                                                   'cim:AsynchronousMachineDynamics.WindTurbineType1or2Dynamics'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'AsynchronousMachine': [CGMESProfile.shortNames.DY, ],
						'WindTurbineType1or2Dynamics': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:AsynchronousMachineDynamics.AsynchronousMachine",
            "cim:AsynchronousMachineDynamics.WindTurbineType1or2Dynamics",
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
            if (!AsynchronousMachineDynamics.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class AsynchronousMachineDynamics: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = AsynchronousMachineDynamics.attributeHTML(object, cimmenu);
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
        "AsynchronousMachineUserDefined",
        "AsynchronousMachineTimeConstantReactance",
        "AsynchronousMachineEquivalentCircuit",
        ];
        return subClasses;
    }
};
export default AsynchronousMachineDynamics
