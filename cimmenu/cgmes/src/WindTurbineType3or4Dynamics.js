import templates from "../../templates/index.js"
import DynamicsFunctionBlock from "./DynamicsFunctionBlock.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class WindTurbineType3or4Dynamics extends DynamicsFunctionBlock {

    static attributeHTML(object, cimmenu, classType="WindTurbineType3or4Dynamics") {
        let attributeEntries = DynamicsFunctionBlock.attributeHTML(object, cimmenu, classType);
        if ('cim:WindTurbineType3or4Dynamics.EnergySource' in object) {
            attributeEntries['filledEntries']['cim:WindTurbineType3or4Dynamics.EnergySource'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType3or4Dynamics.EnergySource'],
                                                   'cim:EnergySource',
                                                   'cim:WindTurbineType3or4Dynamics.EnergySource'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindTurbineType3or4Dynamics.EnergySource'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType3or4Dynamics.EnergySource'],
                                                   'cim:EnergySource',
                                                   'cim:WindTurbineType3or4Dynamics.EnergySource'
                                                 );
        }
        if ('cim:WindTurbineType3or4Dynamics.RemoteInputSignal' in object) {
            attributeEntries['filledEntries']['cim:WindTurbineType3or4Dynamics.RemoteInputSignal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType3or4Dynamics.RemoteInputSignal'],
                                                   'cim:RemoteInputSignal',
                                                   'cim:WindTurbineType3or4Dynamics.RemoteInputSignal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindTurbineType3or4Dynamics.RemoteInputSignal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType3or4Dynamics.RemoteInputSignal'],
                                                   'cim:RemoteInputSignal',
                                                   'cim:WindTurbineType3or4Dynamics.RemoteInputSignal'
                                                 );
        }
        if ('cim:WindTurbineType3or4Dynamics.WindPlantDynamics' in object) {
            attributeEntries['filledEntries']['cim:WindTurbineType3or4Dynamics.WindPlantDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType3or4Dynamics.WindPlantDynamics'],
                                                   'cim:WindPlantDynamics',
                                                   'cim:WindTurbineType3or4Dynamics.WindPlantDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindTurbineType3or4Dynamics.WindPlantDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType3or4Dynamics.WindPlantDynamics'],
                                                   'cim:WindPlantDynamics',
                                                   'cim:WindTurbineType3or4Dynamics.WindPlantDynamics'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'EnergySource': [CGMESProfile.shortNames.DY, ],
						'RemoteInputSignal': [CGMESProfile.shortNames.DY, ],
						'WindPlantDynamics': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindTurbineType3or4Dynamics.EnergySource",
            "cim:WindTurbineType3or4Dynamics.RemoteInputSignal",
            "cim:WindTurbineType3or4Dynamics.WindPlantDynamics",
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
            if (!WindTurbineType3or4Dynamics.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindTurbineType3or4Dynamics: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindTurbineType3or4Dynamics.attributeHTML(object, cimmenu);
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
        "WindType3or4UserDefined",
        "WindTurbineType3or4IEC",
        "WindGenTurbineType3IEC",
        "WindGenTurbineType3aIEC",
        "WindGenTurbineType3bIEC",
        "WindGenType4IEC",
        "WindTurbineType4aIEC",
        "WindTurbineType4bIEC",
        ];
        return subClasses;
    }
};
export default WindTurbineType3or4Dynamics
