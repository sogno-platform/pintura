import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class PowerSystemResource extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="PowerSystemResource") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:PowerSystemResource.Measurements' in object) {
            attributeEntries['filledEntries']['cim:PowerSystemResource.Measurements'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerSystemResource.Measurements'],
                                                   'cim:Measurement',
                                                   'cim:PowerSystemResource.Measurements'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerSystemResource.Measurements'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerSystemResource.Measurements'],
                                                   'cim:Measurement',
                                                   'cim:PowerSystemResource.Measurements'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PowerSystemResource.Measurements",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( IdentifiedObject.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!PowerSystemResource.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PowerSystemResource: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PowerSystemResource.attributeHTML(object, cimmenu);
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
        "HydroPowerPlant",
        "ConnectivityNodeContainer",
        "EquipmentContainer",
        "DCEquipmentContainer",
        "DCConverterUnit",
        "DCLine",
        "DCConverterUnit",
        "DCLine",
        "Substation",
        "VoltageLevel",
        "Line",
        "Bay",
        "DCEquipmentContainer",
        "DCConverterUnit",
        "DCLine",
        "DCConverterUnit",
        "DCLine",
        "Substation",
        "VoltageLevel",
        "Line",
        "Bay",
        "EquivalentNetwork",
        "Equipment",
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
        "DCBreaker",
        "DCDisconnector",
        "GeneratingUnit",
        "HydroGeneratingUnit",
        "NuclearGeneratingUnit",
        "SolarGeneratingUnit",
        "ThermalGeneratingUnit",
        "WindGeneratingUnit",
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
        "ACDCConverter",
        "CsConverter",
        "VsConverter",
        "CsConverter",
        "VsConverter",
        "CsConverter",
        "VsConverter",
        "EnergySource",
        "Conductor",
        "ACLineSegment",
        "ACLineSegment",
        "ACLineSegment",
        "Connector",
        "BusbarSection",
        "Junction",
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
        "ExternalNetworkInjection",
        "RotatingMachine",
        "AsynchronousMachine",
        "SynchronousMachine",
        "AsynchronousMachine",
        "SynchronousMachine",
        "AsynchronousMachine",
        "SynchronousMachine",
        "ShuntCompensator",
        "LinearShuntCompensator",
        "NonlinearShuntCompensator",
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
        "Disconnector",
        "ProtectedSwitch",
        "Breaker",
        "LoadBreakSwitch",
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
        "EquivalentBranch",
        "EquivalentInjection",
        "EquivalentShunt",
        "EarthFaultCompensator",
        "GroundingImpedance",
        "PetersenCoil",
        "GroundingImpedance",
        "PetersenCoil",
        "GroundingImpedance",
        "PetersenCoil",
        "Ground",
        "RegulatingControl",
        "TapChangerControl",
        "TapChanger",
        "PhaseTapChanger",
        "PhaseTapChangerLinear",
        "PhaseTapChangerNonLinear",
        "PhaseTapChangerAsymmetrical",
        "PhaseTapChangerSymmetrical",
        "PhaseTapChangerTabular",
        "RatioTapChanger",
        "ControlArea",
        ];
        return subClasses;
    }
};
export default PowerSystemResource
