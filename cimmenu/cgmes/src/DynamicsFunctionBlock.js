import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class DynamicsFunctionBlock extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="DynamicsFunctionBlock") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:DynamicsFunctionBlock.enabled' in object) {
            attributeEntries['filledEntries']['cim:DynamicsFunctionBlock.enabled'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsFunctionBlock.enabled'],
                                                   'cim:Boolean',
                                                   'cim:DynamicsFunctionBlock.enabled'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DynamicsFunctionBlock.enabled'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DynamicsFunctionBlock.enabled'],
                                                   'cim:Boolean',
                                                   'cim:DynamicsFunctionBlock.enabled'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'enabled': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DynamicsFunctionBlock.enabled",
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
            if (!DynamicsFunctionBlock.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class DynamicsFunctionBlock: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DynamicsFunctionBlock.attributeHTML(object, cimmenu);
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
        ];
        return subClasses;
    }
};
export default DynamicsFunctionBlock
