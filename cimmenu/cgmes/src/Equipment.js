import templates from "../../templates/index.js"
import PowerSystemResource from "./PowerSystemResource.js"
import common from "../../src/common.js"

class Equipment extends PowerSystemResource {

    static attributeHTML(object, cimmenu, classType="Equipment") {
        let attributeEntries = PowerSystemResource.attributeHTML(object, cimmenu, classType);
        if ('cim:Equipment.aggregate' in object) {
            attributeEntries['filledEntries']['cim:Equipment.aggregate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Equipment.aggregate'],
                                                   'cim:Boolean',
                                                   'cim:Equipment.aggregate'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Equipment.aggregate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Equipment.aggregate'],
                                                   'cim:Boolean',
                                                   'cim:Equipment.aggregate'
                                                 );
        }
        if ('cim:Equipment.EquipmentContainer' in object) {
            attributeEntries['filledEntries']['cim:Equipment.EquipmentContainer'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Equipment.EquipmentContainer'],
                                                   'cim:EquipmentContainer',
                                                   'cim:Equipment.EquipmentContainer'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Equipment.EquipmentContainer'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Equipment.EquipmentContainer'],
                                                   'cim:EquipmentContainer',
                                                   'cim:Equipment.EquipmentContainer'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Equipment.aggregate",
            "cim:Equipment.EquipmentContainer",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( PowerSystemResource.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!Equipment.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class Equipment: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Equipment.attributeHTML(object, cimmenu);
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
        "DCConductingEquipment",
        "DCBusbar",
        "DCChopper",
        "DCGround",
        "DCLineSegment",
        "DCSeriesDevice",
        "DCShunt",
        "DCSwitch",
        "DCBreaker",
        "DCDisconnector",
        "DCBreaker",
        "DCDisconnector",
        "GeneratingUnit",
        "HydroGeneratingUnit",
        "NuclearGeneratingUnit",
        "SolarGeneratingUnit",
        "ThermalGeneratingUnit",
        "WindGeneratingUnit",
        "HydroPump",
        "ConductingEquipment",
        "ACDCConverter",
        "CsConverter",
        "VsConverter",
        "CsConverter",
        "VsConverter",
        "EnergySource",
        "Conductor",
        "ACLineSegment",
        "ACLineSegment",
        "Connector",
        "BusbarSection",
        "Junction",
        "BusbarSection",
        "Junction",
        "EnergyConsumer",
        "ConformLoad",
        "NonConformLoad",
        "StationSupply",
        "ConformLoad",
        "NonConformLoad",
        "StationSupply",
        "PowerTransformer",
        "RegulatingCondEq",
        "ExternalNetworkInjection",
        "RotatingMachine",
        "AsynchronousMachine",
        "SynchronousMachine",
        "ShuntCompensator",
        "LinearShuntCompensator",
        "NonlinearShuntCompensator",
        "StaticVarCompensator",
        "ExternalNetworkInjection",
        "RotatingMachine",
        "AsynchronousMachine",
        "SynchronousMachine",
        "AsynchronousMachine",
        "SynchronousMachine",
        "ShuntCompensator",
        "LinearShuntCompensator",
        "NonlinearShuntCompensator",
        "LinearShuntCompensator",
        "NonlinearShuntCompensator",
        "StaticVarCompensator",
        "SeriesCompensator",
        "Switch",
        "Disconnector",
        "ProtectedSwitch",
        "Breaker",
        "LoadBreakSwitch",
        "GroundDisconnector",
        "Disconnector",
        "ProtectedSwitch",
        "Breaker",
        "LoadBreakSwitch",
        "Breaker",
        "LoadBreakSwitch",
        "GroundDisconnector",
        "EquivalentEquipment",
        "EquivalentBranch",
        "EquivalentInjection",
        "EquivalentShunt",
        "EquivalentBranch",
        "EquivalentInjection",
        "EquivalentShunt",
        "EarthFaultCompensator",
        "GroundingImpedance",
        "PetersenCoil",
        "GroundingImpedance",
        "PetersenCoil",
        "Ground",
        ];
        return subClasses;
    }
};
export default Equipment
