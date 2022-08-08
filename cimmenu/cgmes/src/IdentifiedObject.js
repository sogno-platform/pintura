import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class IdentifiedObject extends BaseClass {

    static attributeHTML(object, cimmenu, classType="IdentifiedObject") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:IdentifiedObject.mRID' in object) {
            attributeEntries['filledEntries']['cim:IdentifiedObject.mRID'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['IdentifiedObject.mRID'],
                                                   'cim:String',
                                                   'cim:IdentifiedObject.mRID'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:IdentifiedObject.mRID'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['IdentifiedObject.mRID'],
                                                   'cim:String',
                                                   'cim:IdentifiedObject.mRID'
                                                 );
        }
        if ('cim:IdentifiedObject.name' in object) {
            attributeEntries['filledEntries']['cim:IdentifiedObject.name'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['IdentifiedObject.name'],
                                                   'cim:String',
                                                   'cim:IdentifiedObject.name'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:IdentifiedObject.name'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['IdentifiedObject.name'],
                                                   'cim:String',
                                                   'cim:IdentifiedObject.name'
                                                 );
        }
        if ('cim:IdentifiedObject.description' in object) {
            attributeEntries['filledEntries']['cim:IdentifiedObject.description'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['IdentifiedObject.description'],
                                                   'cim:String',
                                                   'cim:IdentifiedObject.description'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:IdentifiedObject.description'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['IdentifiedObject.description'],
                                                   'cim:String',
                                                   'cim:IdentifiedObject.description'
                                                 );
        }
        if ('cim:IdentifiedObject.energyIdentCodeEic' in object) {
            attributeEntries['filledEntries']['cim:IdentifiedObject.energyIdentCodeEic'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['IdentifiedObject.energyIdentCodeEic'],
                                                   'cim:String',
                                                   'cim:IdentifiedObject.energyIdentCodeEic'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:IdentifiedObject.energyIdentCodeEic'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['IdentifiedObject.energyIdentCodeEic'],
                                                   'cim:String',
                                                   'cim:IdentifiedObject.energyIdentCodeEic'
                                                 );
        }
        if ('cim:IdentifiedObject.shortName' in object) {
            attributeEntries['filledEntries']['cim:IdentifiedObject.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['IdentifiedObject.shortName'],
                                                   'cim:String',
                                                   'cim:IdentifiedObject.shortName'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:IdentifiedObject.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['IdentifiedObject.shortName'],
                                                   'cim:String',
                                                   'cim:IdentifiedObject.shortName'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DL, CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.SV, CGMESProfile.shortNames.GL, CGMESProfile.shortNames.DY, CGMESProfile.shortNames.TP, CGMESProfile.shortNames.TP_BD, CGMESProfile.shortNames.EQ_BD, ],
						'mRID': [CGMESProfile.shortNames.DL, CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.SV, CGMESProfile.shortNames.GL, CGMESProfile.shortNames.DY, CGMESProfile.shortNames.TP, CGMESProfile.shortNames.TP_BD, CGMESProfile.shortNames.EQ_BD, ],
						'name': [CGMESProfile.shortNames.DL, CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.SV, CGMESProfile.shortNames.GL, CGMESProfile.shortNames.DY, CGMESProfile.shortNames.TP, CGMESProfile.shortNames.TP_BD, CGMESProfile.shortNames.EQ_BD, ],
						'description': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.DY, CGMESProfile.shortNames.TP, CGMESProfile.shortNames.TP_BD, CGMESProfile.shortNames.EQ_BD, ],
						'energyIdentCodeEic': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.TP, CGMESProfile.shortNames.TP_BD, CGMESProfile.shortNames.EQ_BD, ],
						'shortName': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.TP, CGMESProfile.shortNames.TP_BD, CGMESProfile.shortNames.EQ_BD, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:IdentifiedObject.mRID",
            "cim:IdentifiedObject.name",
            "cim:IdentifiedObject.description",
            "cim:IdentifiedObject.energyIdentCodeEic",
            "cim:IdentifiedObject.shortName",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( BaseClass.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!IdentifiedObject.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class IdentifiedObject: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = IdentifiedObject.attributeHTML(object, cimmenu);
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
        "DiagramStyle",
        "Diagram",
        "DiagramObject",
        "TextDiagramObject",
        "DiagramObjectStyle",
        "VisibilityLayer",
        "DCNode",
        "BusNameMarker",
        "EnergySchedulingType",
        "FossilFuel",
        "ACDCTerminal",
        "DCBaseTerminal",
        "ACDCConverterDCTerminal",
        "DCTerminal",
        "Terminal",
        "BaseVoltage",
        "BasicIntervalSchedule",
        "RegularIntervalSchedule",
        "SeasonDayTypeSchedule",
        "ConformLoadSchedule",
        "NonConformLoadSchedule",
        "RegulationSchedule",
        "SwitchSchedule",
        "TapSchedule",
        "Curve",
        "VsCapabilityCurve",
        "ReactiveCapabilityCurve",
        "GrossToNetActivePowerCurve",
        "GeographicalRegion",
        "PowerSystemResource",
        "HydroPowerPlant",
        "ConnectivityNodeContainer",
        "EquipmentContainer",
        "DCEquipmentContainer",
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
        "EnergySource",
        "Conductor",
        "ACLineSegment",
        "Connector",
        "BusbarSection",
        "Junction",
        "EnergyConsumer",
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
        "SeriesCompensator",
        "Switch",
        "Disconnector",
        "ProtectedSwitch",
        "Breaker",
        "LoadBreakSwitch",
        "GroundDisconnector",
        "EquivalentEquipment",
        "EquivalentBranch",
        "EquivalentInjection",
        "EquivalentShunt",
        "EarthFaultCompensator",
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
        "ReportingGroup",
        "SubGeographicalRegion",
        "OperationalLimit",
        "CurrentLimit",
        "VoltageLimit",
        "ActivePowerLimit",
        "ApparentPowerLimit",
        "OperationalLimitSet",
        "OperationalLimitType",
        "PhaseTapChangerTable",
        "RatioTapChangerTable",
        "TransformerEnd",
        "PowerTransformerEnd",
        "LoadGroup",
        "ConformLoadGroup",
        "NonConformLoadGroup",
        "LoadResponseCharacteristic",
        "ControlAreaGeneratingUnit",
        "Control",
        "AccumulatorReset",
        "AnalogControl",
        "RaiseLowerCommand",
        "SetPoint",
        "Command",
        "Limit",
        "AccumulatorLimit",
        "AnalogLimit",
        "LimitSet",
        "AccumulatorLimitSet",
        "AnalogLimitSet",
        "Measurement",
        "Accumulator",
        "Analog",
        "Discrete",
        "StringMeasurement",
        "MeasurementValue",
        "AccumulatorValue",
        "AnalogValue",
        "DiscreteValue",
        "StringMeasurementValue",
        "MeasurementValueSource",
        "ValueAliasSet",
        "ValueToAlias",
        "ConnectivityNode",
        "MutualCoupling",
        "DayType",
        "EnergyArea",
        "LoadArea",
        "SubLoadArea",
        "Season",
        "DCTopologicalIsland",
        "DCTopologicalNode",
        "TopologicalNode",
        "TopologicalIsland",
        "CoordinateSystem",
        "Location",
        "RemoteInputSignal",
        "DynamicsFunctionBlock",
        "RotatingMachineDynamics",
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
        "TurbineGovernorDynamics",
        "TurbineGovernorUserDefined",
        "GovHydroIEEE0",
        "GovHydroIEEE2",
        "GovSteamIEEE1",
        "GovCT1",
        "GovCT2",
        "GovGAST",
        "GovGAST1",
        "GovGAST2",
        "GovGAST3",
        "GovGAST4",
        "GovGASTWD",
        "GovHydro1",
        "GovHydro2",
        "GovHydro3",
        "GovHydro4",
        "GovHydroDD",
        "GovHydroFrancis",
        "GovHydroPelton",
        "GovHydroPID",
        "GovHydroPID2",
        "GovHydroR",
        "GovHydroWEH",
        "GovHydroWPID",
        "GovSteam0",
        "GovSteam1",
        "GovSteam2",
        "GovSteamCC",
        "GovSteamEU",
        "GovSteamFV2",
        "GovSteamFV3",
        "GovSteamFV4",
        "GovSteamSGO",
        "TurbineLoadControllerDynamics",
        "TurbineLoadControllerUserDefined",
        "TurbLCFB1",
        "MechanicalLoadDynamics",
        "MechanicalLoadUserDefined",
        "MechLoad1",
        "ExcitationSystemDynamics",
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
        "OverexcitationLimiterDynamics",
        "OverexcitationLimiterUserDefined",
        "OverexcLimIEEE",
        "OverexcLim2",
        "OverexcLimX1",
        "OverexcLimX2",
        "UnderexcitationLimiterDynamics",
        "UnderexcitationLimiterUserDefined",
        "UnderexcLimIEEE1",
        "UnderexcLimIEEE2",
        "UnderexcLim2Simplified",
        "UnderexcLimX1",
        "UnderexcLimX2",
        "PowerSystemStabilizerDynamics",
        "PowerSystemStabilizerUserDefined",
        "PssIEEE1A",
        "PssIEEE2B",
        "PssIEEE3B",
        "PssIEEE4B",
        "Pss1",
        "Pss1A",
        "Pss2B",
        "Pss2ST",
        "Pss5",
        "PssELIN2",
        "PssPTIST1",
        "PssPTIST3",
        "PssSB4",
        "PssSH",
        "PssSK",
        "PssWECC",
        "DiscontinuousExcitationControlDynamics",
        "DiscontinuousExcitationControlUserDefined",
        "DiscExcContIEEEDEC1A",
        "DiscExcContIEEEDEC2A",
        "DiscExcContIEEEDEC3A",
        "PFVArControllerType1Dynamics",
        "PFVArControllerType1UserDefined",
        "PFVArType1IEEEPFController",
        "PFVArType1IEEEVArController",
        "VoltageAdjusterDynamics",
        "VoltageAdjusterUserDefined",
        "VAdjIEEE",
        "PFVArControllerType2Dynamics",
        "PFVArControllerType2UserDefined",
        "PFVArType2IEEEPFController",
        "PFVArType2IEEEVArController",
        "PFVArType2Common1",
        "VoltageCompensatorDynamics",
        "VoltageCompensatorUserDefined",
        "VCompIEEEType1",
        "VCompIEEEType2",
        "WindPlantDynamics",
        "WindPlantUserDefined",
        "WindPlantIEC",
        "WindTurbineType1or2Dynamics",
        "WindType1or2UserDefined",
        "WindTurbineType1or2IEC",
        "WindGenTurbineType1IEC",
        "WindGenTurbineType2IEC",
        "WindTurbineType3or4Dynamics",
        "WindType3or4UserDefined",
        "WindTurbineType3or4IEC",
        "WindGenTurbineType3IEC",
        "WindGenTurbineType3aIEC",
        "WindGenTurbineType3bIEC",
        "WindGenType4IEC",
        "WindTurbineType4aIEC",
        "WindTurbineType4bIEC",
        "GenICompensationForGenJ",
        "WindAeroConstIEC",
        "WindAeroLinearIEC",
        "WindContCurrLimIEC",
        "WindContPitchAngleIEC",
        "WindContPType3IEC",
        "WindContPType4aIEC",
        "WindContPType4bIEC",
        "WindContQIEC",
        "WindContRotorRIEC",
        "WindDynamicsLookupTable",
        "WindMechIEC",
        "WindPitchContEmulIEC",
        "WindPlantFreqPcontrolIEC",
        "WindPlantReactiveControlIEC",
        "WindProtectionIEC",
        "LoadDynamics",
        "LoadUserDefined",
        "LoadComposite",
        "LoadGenericNonLinear",
        "LoadAggregate",
        "LoadStatic",
        "LoadMotor",
        ];
        return subClasses;
    }
};
export default IdentifiedObject
