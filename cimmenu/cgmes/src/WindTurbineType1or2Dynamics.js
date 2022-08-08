import templates from "../../templates/index.js"
import DynamicsFunctionBlock from "./DynamicsFunctionBlock.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class WindTurbineType1or2Dynamics extends DynamicsFunctionBlock {

    static attributeHTML(object, cimmenu, classType="WindTurbineType1or2Dynamics") {
        let attributeEntries = DynamicsFunctionBlock.attributeHTML(object, cimmenu, classType);
        if ('cim:WindTurbineType1or2Dynamics.RemoteInputSignal' in object) {
            attributeEntries['filledEntries']['cim:WindTurbineType1or2Dynamics.RemoteInputSignal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType1or2Dynamics.RemoteInputSignal'],
                                                   'cim:RemoteInputSignal',
                                                   'cim:WindTurbineType1or2Dynamics.RemoteInputSignal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindTurbineType1or2Dynamics.RemoteInputSignal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType1or2Dynamics.RemoteInputSignal'],
                                                   'cim:RemoteInputSignal',
                                                   'cim:WindTurbineType1or2Dynamics.RemoteInputSignal'
                                                 );
        }
        if ('cim:WindTurbineType1or2Dynamics.AsynchronousMachineDynamics' in object) {
            attributeEntries['filledEntries']['cim:WindTurbineType1or2Dynamics.AsynchronousMachineDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType1or2Dynamics.AsynchronousMachineDynamics'],
                                                   'cim:AsynchronousMachineDynamics',
                                                   'cim:WindTurbineType1or2Dynamics.AsynchronousMachineDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindTurbineType1or2Dynamics.AsynchronousMachineDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType1or2Dynamics.AsynchronousMachineDynamics'],
                                                   'cim:AsynchronousMachineDynamics',
                                                   'cim:WindTurbineType1or2Dynamics.AsynchronousMachineDynamics'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'RemoteInputSignal': [CGMESProfile.shortNames.DY, ],
						'AsynchronousMachineDynamics': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindTurbineType1or2Dynamics.RemoteInputSignal",
            "cim:WindTurbineType1or2Dynamics.AsynchronousMachineDynamics",
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
            if (!WindTurbineType1or2Dynamics.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class WindTurbineType1or2Dynamics: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindTurbineType1or2Dynamics.attributeHTML(object, cimmenu);
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
        "WindType1or2UserDefined",
        "WindTurbineType1or2IEC",
        "WindGenTurbineType1IEC",
        "WindGenTurbineType2IEC",
        ];
        return subClasses;
    }
};
export default WindTurbineType1or2Dynamics
