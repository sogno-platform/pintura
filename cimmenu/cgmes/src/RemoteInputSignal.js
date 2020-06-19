import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class RemoteInputSignal extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="RemoteInputSignal") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:RemoteInputSignal.Terminal' in object) {
            attributeEntries['filledEntries']['cim:RemoteInputSignal.Terminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RemoteInputSignal.Terminal'],
                                                   'cim:Terminal',
                                                   'cim:RemoteInputSignal.Terminal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RemoteInputSignal.Terminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RemoteInputSignal.Terminal'],
                                                   'cim:Terminal',
                                                   'cim:RemoteInputSignal.Terminal'
                                                 );
        }
        if ('cim:RemoteInputSignal.remoteSignalType' in object) {
            attributeEntries['filledEntries']['cim:RemoteInputSignal.remoteSignalType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RemoteInputSignal.remoteSignalType'],
                                                   'cim:RemoteSignalKind',
                                                   'cim:RemoteInputSignal.remoteSignalType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RemoteInputSignal.remoteSignalType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RemoteInputSignal.remoteSignalType'],
                                                   'cim:RemoteSignalKind',
                                                   'cim:RemoteInputSignal.remoteSignalType'
                                                 );
        }
        if ('cim:RemoteInputSignal.PFVArControllerType1Dynamics' in object) {
            attributeEntries['filledEntries']['cim:RemoteInputSignal.PFVArControllerType1Dynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RemoteInputSignal.PFVArControllerType1Dynamics'],
                                                   'cim:PFVArControllerType1Dynamics',
                                                   'cim:RemoteInputSignal.PFVArControllerType1Dynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RemoteInputSignal.PFVArControllerType1Dynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RemoteInputSignal.PFVArControllerType1Dynamics'],
                                                   'cim:PFVArControllerType1Dynamics',
                                                   'cim:RemoteInputSignal.PFVArControllerType1Dynamics'
                                                 );
        }
        if ('cim:RemoteInputSignal.UnderexcitationLimiterDynamics' in object) {
            attributeEntries['filledEntries']['cim:RemoteInputSignal.UnderexcitationLimiterDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RemoteInputSignal.UnderexcitationLimiterDynamics'],
                                                   'cim:UnderexcitationLimiterDynamics',
                                                   'cim:RemoteInputSignal.UnderexcitationLimiterDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RemoteInputSignal.UnderexcitationLimiterDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RemoteInputSignal.UnderexcitationLimiterDynamics'],
                                                   'cim:UnderexcitationLimiterDynamics',
                                                   'cim:RemoteInputSignal.UnderexcitationLimiterDynamics'
                                                 );
        }
        if ('cim:RemoteInputSignal.VoltageCompensatorDynamics' in object) {
            attributeEntries['filledEntries']['cim:RemoteInputSignal.VoltageCompensatorDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RemoteInputSignal.VoltageCompensatorDynamics'],
                                                   'cim:VoltageCompensatorDynamics',
                                                   'cim:RemoteInputSignal.VoltageCompensatorDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RemoteInputSignal.VoltageCompensatorDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RemoteInputSignal.VoltageCompensatorDynamics'],
                                                   'cim:VoltageCompensatorDynamics',
                                                   'cim:RemoteInputSignal.VoltageCompensatorDynamics'
                                                 );
        }
        if ('cim:RemoteInputSignal.PowerSystemStabilizerDynamics' in object) {
            attributeEntries['filledEntries']['cim:RemoteInputSignal.PowerSystemStabilizerDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RemoteInputSignal.PowerSystemStabilizerDynamics'],
                                                   'cim:PowerSystemStabilizerDynamics',
                                                   'cim:RemoteInputSignal.PowerSystemStabilizerDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RemoteInputSignal.PowerSystemStabilizerDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RemoteInputSignal.PowerSystemStabilizerDynamics'],
                                                   'cim:PowerSystemStabilizerDynamics',
                                                   'cim:RemoteInputSignal.PowerSystemStabilizerDynamics'
                                                 );
        }
        if ('cim:RemoteInputSignal.DiscontinuousExcitationControlDynamics' in object) {
            attributeEntries['filledEntries']['cim:RemoteInputSignal.DiscontinuousExcitationControlDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RemoteInputSignal.DiscontinuousExcitationControlDynamics'],
                                                   'cim:DiscontinuousExcitationControlDynamics',
                                                   'cim:RemoteInputSignal.DiscontinuousExcitationControlDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RemoteInputSignal.DiscontinuousExcitationControlDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RemoteInputSignal.DiscontinuousExcitationControlDynamics'],
                                                   'cim:DiscontinuousExcitationControlDynamics',
                                                   'cim:RemoteInputSignal.DiscontinuousExcitationControlDynamics'
                                                 );
        }
        if ('cim:RemoteInputSignal.WindPlantDynamics' in object) {
            attributeEntries['filledEntries']['cim:RemoteInputSignal.WindPlantDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RemoteInputSignal.WindPlantDynamics'],
                                                   'cim:WindPlantDynamics',
                                                   'cim:RemoteInputSignal.WindPlantDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RemoteInputSignal.WindPlantDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RemoteInputSignal.WindPlantDynamics'],
                                                   'cim:WindPlantDynamics',
                                                   'cim:RemoteInputSignal.WindPlantDynamics'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:RemoteInputSignal.Terminal",
            "cim:RemoteInputSignal.remoteSignalType",
            "cim:RemoteInputSignal.PFVArControllerType1Dynamics",
            "cim:RemoteInputSignal.UnderexcitationLimiterDynamics",
            "cim:RemoteInputSignal.VoltageCompensatorDynamics",
            "cim:RemoteInputSignal.PowerSystemStabilizerDynamics",
            "cim:RemoteInputSignal.DiscontinuousExcitationControlDynamics",
            "cim:RemoteInputSignal.WindPlantDynamics",
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
            if (!RemoteInputSignal.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class RemoteInputSignal: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = RemoteInputSignal.attributeHTML(object, cimmenu);
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
export default RemoteInputSignal
