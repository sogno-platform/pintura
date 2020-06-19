import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"

class ProprietaryParameterDynamics extends BaseClass {

    static attributeHTML(object, cimmenu, classType="ProprietaryParameterDynamics") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:ProprietaryParameterDynamics.WindPlantUserDefined' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.WindPlantUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.WindPlantUserDefined'],
                                                   'cim:WindPlantUserDefined',
                                                   'cim:ProprietaryParameterDynamics.WindPlantUserDefined'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.WindPlantUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.WindPlantUserDefined'],
                                                   'cim:WindPlantUserDefined',
                                                   'cim:ProprietaryParameterDynamics.WindPlantUserDefined'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.WindType1or2UserDefined' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.WindType1or2UserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.WindType1or2UserDefined'],
                                                   'cim:WindType1or2UserDefined',
                                                   'cim:ProprietaryParameterDynamics.WindType1or2UserDefined'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.WindType1or2UserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.WindType1or2UserDefined'],
                                                   'cim:WindType1or2UserDefined',
                                                   'cim:ProprietaryParameterDynamics.WindType1or2UserDefined'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.WindType3or4UserDefined' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.WindType3or4UserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.WindType3or4UserDefined'],
                                                   'cim:WindType3or4UserDefined',
                                                   'cim:ProprietaryParameterDynamics.WindType3or4UserDefined'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.WindType3or4UserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.WindType3or4UserDefined'],
                                                   'cim:WindType3or4UserDefined',
                                                   'cim:ProprietaryParameterDynamics.WindType3or4UserDefined'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.SynchronousMachineUserDefined' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.SynchronousMachineUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.SynchronousMachineUserDefined'],
                                                   'cim:SynchronousMachineUserDefined',
                                                   'cim:ProprietaryParameterDynamics.SynchronousMachineUserDefined'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.SynchronousMachineUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.SynchronousMachineUserDefined'],
                                                   'cim:SynchronousMachineUserDefined',
                                                   'cim:ProprietaryParameterDynamics.SynchronousMachineUserDefined'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.AsynchronousMachineUserDefined' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.AsynchronousMachineUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.AsynchronousMachineUserDefined'],
                                                   'cim:AsynchronousMachineUserDefined',
                                                   'cim:ProprietaryParameterDynamics.AsynchronousMachineUserDefined'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.AsynchronousMachineUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.AsynchronousMachineUserDefined'],
                                                   'cim:AsynchronousMachineUserDefined',
                                                   'cim:ProprietaryParameterDynamics.AsynchronousMachineUserDefined'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.TurbineGovernorUserDefined' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.TurbineGovernorUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.TurbineGovernorUserDefined'],
                                                   'cim:TurbineGovernorUserDefined',
                                                   'cim:ProprietaryParameterDynamics.TurbineGovernorUserDefined'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.TurbineGovernorUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.TurbineGovernorUserDefined'],
                                                   'cim:TurbineGovernorUserDefined',
                                                   'cim:ProprietaryParameterDynamics.TurbineGovernorUserDefined'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.TurbineLoadControllerUserDefined' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.TurbineLoadControllerUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.TurbineLoadControllerUserDefined'],
                                                   'cim:TurbineLoadControllerUserDefined',
                                                   'cim:ProprietaryParameterDynamics.TurbineLoadControllerUserDefined'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.TurbineLoadControllerUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.TurbineLoadControllerUserDefined'],
                                                   'cim:TurbineLoadControllerUserDefined',
                                                   'cim:ProprietaryParameterDynamics.TurbineLoadControllerUserDefined'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.MechanicalLoadUserDefined' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.MechanicalLoadUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.MechanicalLoadUserDefined'],
                                                   'cim:MechanicalLoadUserDefined',
                                                   'cim:ProprietaryParameterDynamics.MechanicalLoadUserDefined'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.MechanicalLoadUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.MechanicalLoadUserDefined'],
                                                   'cim:MechanicalLoadUserDefined',
                                                   'cim:ProprietaryParameterDynamics.MechanicalLoadUserDefined'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.ExcitationSystemUserDefined' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.ExcitationSystemUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.ExcitationSystemUserDefined'],
                                                   'cim:ExcitationSystemUserDefined',
                                                   'cim:ProprietaryParameterDynamics.ExcitationSystemUserDefined'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.ExcitationSystemUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.ExcitationSystemUserDefined'],
                                                   'cim:ExcitationSystemUserDefined',
                                                   'cim:ProprietaryParameterDynamics.ExcitationSystemUserDefined'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.OverexcitationLimiterUserDefined' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.OverexcitationLimiterUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.OverexcitationLimiterUserDefined'],
                                                   'cim:OverexcitationLimiterUserDefined',
                                                   'cim:ProprietaryParameterDynamics.OverexcitationLimiterUserDefined'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.OverexcitationLimiterUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.OverexcitationLimiterUserDefined'],
                                                   'cim:OverexcitationLimiterUserDefined',
                                                   'cim:ProprietaryParameterDynamics.OverexcitationLimiterUserDefined'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.UnderexcitationLimiterUserDefined' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.UnderexcitationLimiterUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.UnderexcitationLimiterUserDefined'],
                                                   'cim:UnderexcitationLimiterUserDefined',
                                                   'cim:ProprietaryParameterDynamics.UnderexcitationLimiterUserDefined'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.UnderexcitationLimiterUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.UnderexcitationLimiterUserDefined'],
                                                   'cim:UnderexcitationLimiterUserDefined',
                                                   'cim:ProprietaryParameterDynamics.UnderexcitationLimiterUserDefined'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.PowerSystemStabilizerUserDefined' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.PowerSystemStabilizerUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.PowerSystemStabilizerUserDefined'],
                                                   'cim:PowerSystemStabilizerUserDefined',
                                                   'cim:ProprietaryParameterDynamics.PowerSystemStabilizerUserDefined'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.PowerSystemStabilizerUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.PowerSystemStabilizerUserDefined'],
                                                   'cim:PowerSystemStabilizerUserDefined',
                                                   'cim:ProprietaryParameterDynamics.PowerSystemStabilizerUserDefined'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.DiscontinuousExcitationControlUserDefined' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.DiscontinuousExcitationControlUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.DiscontinuousExcitationControlUserDefined'],
                                                   'cim:DiscontinuousExcitationControlUserDefined',
                                                   'cim:ProprietaryParameterDynamics.DiscontinuousExcitationControlUserDefined'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.DiscontinuousExcitationControlUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.DiscontinuousExcitationControlUserDefined'],
                                                   'cim:DiscontinuousExcitationControlUserDefined',
                                                   'cim:ProprietaryParameterDynamics.DiscontinuousExcitationControlUserDefined'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.PFVArControllerType1UserDefined' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.PFVArControllerType1UserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.PFVArControllerType1UserDefined'],
                                                   'cim:PFVArControllerType1UserDefined',
                                                   'cim:ProprietaryParameterDynamics.PFVArControllerType1UserDefined'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.PFVArControllerType1UserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.PFVArControllerType1UserDefined'],
                                                   'cim:PFVArControllerType1UserDefined',
                                                   'cim:ProprietaryParameterDynamics.PFVArControllerType1UserDefined'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.VoltageAdjusterUserDefined' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.VoltageAdjusterUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.VoltageAdjusterUserDefined'],
                                                   'cim:VoltageAdjusterUserDefined',
                                                   'cim:ProprietaryParameterDynamics.VoltageAdjusterUserDefined'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.VoltageAdjusterUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.VoltageAdjusterUserDefined'],
                                                   'cim:VoltageAdjusterUserDefined',
                                                   'cim:ProprietaryParameterDynamics.VoltageAdjusterUserDefined'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.PFVArControllerType2UserDefined' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.PFVArControllerType2UserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.PFVArControllerType2UserDefined'],
                                                   'cim:PFVArControllerType2UserDefined',
                                                   'cim:ProprietaryParameterDynamics.PFVArControllerType2UserDefined'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.PFVArControllerType2UserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.PFVArControllerType2UserDefined'],
                                                   'cim:PFVArControllerType2UserDefined',
                                                   'cim:ProprietaryParameterDynamics.PFVArControllerType2UserDefined'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.VoltageCompensatorUserDefined' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.VoltageCompensatorUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.VoltageCompensatorUserDefined'],
                                                   'cim:VoltageCompensatorUserDefined',
                                                   'cim:ProprietaryParameterDynamics.VoltageCompensatorUserDefined'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.VoltageCompensatorUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.VoltageCompensatorUserDefined'],
                                                   'cim:VoltageCompensatorUserDefined',
                                                   'cim:ProprietaryParameterDynamics.VoltageCompensatorUserDefined'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.LoadUserDefined' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.LoadUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.LoadUserDefined'],
                                                   'cim:LoadUserDefined',
                                                   'cim:ProprietaryParameterDynamics.LoadUserDefined'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.LoadUserDefined'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.LoadUserDefined'],
                                                   'cim:LoadUserDefined',
                                                   'cim:ProprietaryParameterDynamics.LoadUserDefined'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.parameterNumber' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.parameterNumber'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.parameterNumber'],
                                                   'cim:Integer',
                                                   'cim:ProprietaryParameterDynamics.parameterNumber'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.parameterNumber'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.parameterNumber'],
                                                   'cim:Integer',
                                                   'cim:ProprietaryParameterDynamics.parameterNumber'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.booleanParameterValue' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.booleanParameterValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.booleanParameterValue'],
                                                   'cim:Boolean',
                                                   'cim:ProprietaryParameterDynamics.booleanParameterValue'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.booleanParameterValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.booleanParameterValue'],
                                                   'cim:Boolean',
                                                   'cim:ProprietaryParameterDynamics.booleanParameterValue'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.integerParameterValue' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.integerParameterValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.integerParameterValue'],
                                                   'cim:Integer',
                                                   'cim:ProprietaryParameterDynamics.integerParameterValue'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.integerParameterValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.integerParameterValue'],
                                                   'cim:Integer',
                                                   'cim:ProprietaryParameterDynamics.integerParameterValue'
                                                 );
        }
        if ('cim:ProprietaryParameterDynamics.floatParameterValue' in object) {
            attributeEntries['filledEntries']['cim:ProprietaryParameterDynamics.floatParameterValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.floatParameterValue'],
                                                   'cim:Simple_Float',
                                                   'cim:ProprietaryParameterDynamics.floatParameterValue'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ProprietaryParameterDynamics.floatParameterValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ProprietaryParameterDynamics.floatParameterValue'],
                                                   'cim:Simple_Float',
                                                   'cim:ProprietaryParameterDynamics.floatParameterValue'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ProprietaryParameterDynamics.WindPlantUserDefined",
            "cim:ProprietaryParameterDynamics.WindType1or2UserDefined",
            "cim:ProprietaryParameterDynamics.WindType3or4UserDefined",
            "cim:ProprietaryParameterDynamics.SynchronousMachineUserDefined",
            "cim:ProprietaryParameterDynamics.AsynchronousMachineUserDefined",
            "cim:ProprietaryParameterDynamics.TurbineGovernorUserDefined",
            "cim:ProprietaryParameterDynamics.TurbineLoadControllerUserDefined",
            "cim:ProprietaryParameterDynamics.MechanicalLoadUserDefined",
            "cim:ProprietaryParameterDynamics.ExcitationSystemUserDefined",
            "cim:ProprietaryParameterDynamics.OverexcitationLimiterUserDefined",
            "cim:ProprietaryParameterDynamics.UnderexcitationLimiterUserDefined",
            "cim:ProprietaryParameterDynamics.PowerSystemStabilizerUserDefined",
            "cim:ProprietaryParameterDynamics.DiscontinuousExcitationControlUserDefined",
            "cim:ProprietaryParameterDynamics.PFVArControllerType1UserDefined",
            "cim:ProprietaryParameterDynamics.VoltageAdjusterUserDefined",
            "cim:ProprietaryParameterDynamics.PFVArControllerType2UserDefined",
            "cim:ProprietaryParameterDynamics.VoltageCompensatorUserDefined",
            "cim:ProprietaryParameterDynamics.LoadUserDefined",
            "cim:ProprietaryParameterDynamics.parameterNumber",
            "cim:ProprietaryParameterDynamics.booleanParameterValue",
            "cim:ProprietaryParameterDynamics.integerParameterValue",
            "cim:ProprietaryParameterDynamics.floatParameterValue",
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
            if (!ProprietaryParameterDynamics.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ProprietaryParameterDynamics: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ProprietaryParameterDynamics.attributeHTML(object, cimmenu);
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
        ];
        return subClasses;
    }
};
export default ProprietaryParameterDynamics
