import templates from "../../templates/index.js"
import ConductingEquipment from "./ConductingEquipment.js"
import common from "../../src/common.js"

class ACDCConverter extends ConductingEquipment {

    static attributeHTML(object, cimmenu, classType="ACDCConverter") {
        let attributeEntries = ConductingEquipment.attributeHTML(object, cimmenu, classType);
        if ('cim:ACDCConverter.baseS' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverter.baseS'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.baseS'],
                                                   'cim:ApparentPower',
                                                   'cim:ACDCConverter.baseS'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverter.baseS'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.baseS'],
                                                   'cim:ApparentPower',
                                                   'cim:ACDCConverter.baseS'
                                                 );
        }
        if ('cim:ACDCConverter.idleLoss' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverter.idleLoss'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.idleLoss'],
                                                   'cim:ActivePower',
                                                   'cim:ACDCConverter.idleLoss'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverter.idleLoss'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.idleLoss'],
                                                   'cim:ActivePower',
                                                   'cim:ACDCConverter.idleLoss'
                                                 );
        }
        if ('cim:ACDCConverter.maxUdc' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverter.maxUdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.maxUdc'],
                                                   'cim:Voltage',
                                                   'cim:ACDCConverter.maxUdc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverter.maxUdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.maxUdc'],
                                                   'cim:Voltage',
                                                   'cim:ACDCConverter.maxUdc'
                                                 );
        }
        if ('cim:ACDCConverter.minUdc' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverter.minUdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.minUdc'],
                                                   'cim:Voltage',
                                                   'cim:ACDCConverter.minUdc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverter.minUdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.minUdc'],
                                                   'cim:Voltage',
                                                   'cim:ACDCConverter.minUdc'
                                                 );
        }
        if ('cim:ACDCConverter.numberOfValves' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverter.numberOfValves'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.numberOfValves'],
                                                   'cim:Integer',
                                                   'cim:ACDCConverter.numberOfValves'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverter.numberOfValves'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.numberOfValves'],
                                                   'cim:Integer',
                                                   'cim:ACDCConverter.numberOfValves'
                                                 );
        }
        if ('cim:ACDCConverter.ratedUdc' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverter.ratedUdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.ratedUdc'],
                                                   'cim:Voltage',
                                                   'cim:ACDCConverter.ratedUdc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverter.ratedUdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.ratedUdc'],
                                                   'cim:Voltage',
                                                   'cim:ACDCConverter.ratedUdc'
                                                 );
        }
        if ('cim:ACDCConverter.resistiveLoss' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverter.resistiveLoss'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.resistiveLoss'],
                                                   'cim:Resistance',
                                                   'cim:ACDCConverter.resistiveLoss'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverter.resistiveLoss'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.resistiveLoss'],
                                                   'cim:Resistance',
                                                   'cim:ACDCConverter.resistiveLoss'
                                                 );
        }
        if ('cim:ACDCConverter.switchingLoss' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverter.switchingLoss'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.switchingLoss'],
                                                   'cim:ActivePowerPerCurrentFlow',
                                                   'cim:ACDCConverter.switchingLoss'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverter.switchingLoss'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.switchingLoss'],
                                                   'cim:ActivePowerPerCurrentFlow',
                                                   'cim:ACDCConverter.switchingLoss'
                                                 );
        }
        if ('cim:ACDCConverter.valveU0' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverter.valveU0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.valveU0'],
                                                   'cim:Voltage',
                                                   'cim:ACDCConverter.valveU0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverter.valveU0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.valveU0'],
                                                   'cim:Voltage',
                                                   'cim:ACDCConverter.valveU0'
                                                 );
        }
        if ('cim:ACDCConverter.PccTerminal' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverter.PccTerminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.PccTerminal'],
                                                   'cim:Terminal',
                                                   'cim:ACDCConverter.PccTerminal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverter.PccTerminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.PccTerminal'],
                                                   'cim:Terminal',
                                                   'cim:ACDCConverter.PccTerminal'
                                                 );
        }
        if ('cim:ACDCConverter.p' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverter.p'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.p'],
                                                   'cim:ActivePower',
                                                   'cim:ACDCConverter.p'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverter.p'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.p'],
                                                   'cim:ActivePower',
                                                   'cim:ACDCConverter.p'
                                                 );
        }
        if ('cim:ACDCConverter.q' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverter.q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.q'],
                                                   'cim:ReactivePower',
                                                   'cim:ACDCConverter.q'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverter.q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.q'],
                                                   'cim:ReactivePower',
                                                   'cim:ACDCConverter.q'
                                                 );
        }
        if ('cim:ACDCConverter.targetPpcc' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverter.targetPpcc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.targetPpcc'],
                                                   'cim:ActivePower',
                                                   'cim:ACDCConverter.targetPpcc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverter.targetPpcc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.targetPpcc'],
                                                   'cim:ActivePower',
                                                   'cim:ACDCConverter.targetPpcc'
                                                 );
        }
        if ('cim:ACDCConverter.targetUdc' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverter.targetUdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.targetUdc'],
                                                   'cim:Voltage',
                                                   'cim:ACDCConverter.targetUdc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverter.targetUdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.targetUdc'],
                                                   'cim:Voltage',
                                                   'cim:ACDCConverter.targetUdc'
                                                 );
        }
        if ('cim:ACDCConverter.idc' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverter.idc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.idc'],
                                                   'cim:CurrentFlow',
                                                   'cim:ACDCConverter.idc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverter.idc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.idc'],
                                                   'cim:CurrentFlow',
                                                   'cim:ACDCConverter.idc'
                                                 );
        }
        if ('cim:ACDCConverter.poleLossP' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverter.poleLossP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.poleLossP'],
                                                   'cim:ActivePower',
                                                   'cim:ACDCConverter.poleLossP'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverter.poleLossP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.poleLossP'],
                                                   'cim:ActivePower',
                                                   'cim:ACDCConverter.poleLossP'
                                                 );
        }
        if ('cim:ACDCConverter.uc' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverter.uc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.uc'],
                                                   'cim:Voltage',
                                                   'cim:ACDCConverter.uc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverter.uc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.uc'],
                                                   'cim:Voltage',
                                                   'cim:ACDCConverter.uc'
                                                 );
        }
        if ('cim:ACDCConverter.udc' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverter.udc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.udc'],
                                                   'cim:Voltage',
                                                   'cim:ACDCConverter.udc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverter.udc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverter.udc'],
                                                   'cim:Voltage',
                                                   'cim:ACDCConverter.udc'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ACDCConverter.baseS",
            "cim:ACDCConverter.idleLoss",
            "cim:ACDCConverter.maxUdc",
            "cim:ACDCConverter.minUdc",
            "cim:ACDCConverter.numberOfValves",
            "cim:ACDCConverter.ratedUdc",
            "cim:ACDCConverter.resistiveLoss",
            "cim:ACDCConverter.switchingLoss",
            "cim:ACDCConverter.valveU0",
            "cim:ACDCConverter.PccTerminal",
            "cim:ACDCConverter.p",
            "cim:ACDCConverter.q",
            "cim:ACDCConverter.targetPpcc",
            "cim:ACDCConverter.targetUdc",
            "cim:ACDCConverter.idc",
            "cim:ACDCConverter.poleLossP",
            "cim:ACDCConverter.uc",
            "cim:ACDCConverter.udc",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( ConductingEquipment.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!ACDCConverter.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ACDCConverter: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ACDCConverter.attributeHTML(object, cimmenu);
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
        "CsConverter",
        "VsConverter",
        ];
        return subClasses;
    }
};
export default ACDCConverter
