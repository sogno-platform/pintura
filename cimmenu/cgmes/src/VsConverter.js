import templates from "../../templates/index.js"
import ACDCConverter from "./ACDCConverter.js"
import common from "../../src/common.js"

class VsConverter extends ACDCConverter {

    static attributeHTML(object, cimmenu, classType="VsConverter") {
        let attributeEntries = ACDCConverter.attributeHTML(object, cimmenu, classType);
        if ('cim:VsConverter.CapabilityCurve' in object) {
            attributeEntries['filledEntries']['cim:VsConverter.CapabilityCurve'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.CapabilityCurve'],
                                                   'cim:VsCapabilityCurve',
                                                   'cim:VsConverter.CapabilityCurve'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VsConverter.CapabilityCurve'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.CapabilityCurve'],
                                                   'cim:VsCapabilityCurve',
                                                   'cim:VsConverter.CapabilityCurve'
                                                 );
        }
        if ('cim:VsConverter.maxModulationIndex' in object) {
            attributeEntries['filledEntries']['cim:VsConverter.maxModulationIndex'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.maxModulationIndex'],
                                                   'cim:Simple_Float',
                                                   'cim:VsConverter.maxModulationIndex'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VsConverter.maxModulationIndex'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.maxModulationIndex'],
                                                   'cim:Simple_Float',
                                                   'cim:VsConverter.maxModulationIndex'
                                                 );
        }
        if ('cim:VsConverter.maxValveCurrent' in object) {
            attributeEntries['filledEntries']['cim:VsConverter.maxValveCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.maxValveCurrent'],
                                                   'cim:CurrentFlow',
                                                   'cim:VsConverter.maxValveCurrent'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VsConverter.maxValveCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.maxValveCurrent'],
                                                   'cim:CurrentFlow',
                                                   'cim:VsConverter.maxValveCurrent'
                                                 );
        }
        if ('cim:VsConverter.droop' in object) {
            attributeEntries['filledEntries']['cim:VsConverter.droop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.droop'],
                                                   'cim:PU',
                                                   'cim:VsConverter.droop'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VsConverter.droop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.droop'],
                                                   'cim:PU',
                                                   'cim:VsConverter.droop'
                                                 );
        }
        if ('cim:VsConverter.droopCompensation' in object) {
            attributeEntries['filledEntries']['cim:VsConverter.droopCompensation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.droopCompensation'],
                                                   'cim:Resistance',
                                                   'cim:VsConverter.droopCompensation'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VsConverter.droopCompensation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.droopCompensation'],
                                                   'cim:Resistance',
                                                   'cim:VsConverter.droopCompensation'
                                                 );
        }
        if ('cim:VsConverter.pPccControl' in object) {
            attributeEntries['filledEntries']['cim:VsConverter.pPccControl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.pPccControl'],
                                                   'cim:VsPpccControlKind',
                                                   'cim:VsConverter.pPccControl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VsConverter.pPccControl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.pPccControl'],
                                                   'cim:VsPpccControlKind',
                                                   'cim:VsConverter.pPccControl'
                                                 );
        }
        if ('cim:VsConverter.qPccControl' in object) {
            attributeEntries['filledEntries']['cim:VsConverter.qPccControl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.qPccControl'],
                                                   'cim:VsQpccControlKind',
                                                   'cim:VsConverter.qPccControl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VsConverter.qPccControl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.qPccControl'],
                                                   'cim:VsQpccControlKind',
                                                   'cim:VsConverter.qPccControl'
                                                 );
        }
        if ('cim:VsConverter.qShare' in object) {
            attributeEntries['filledEntries']['cim:VsConverter.qShare'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.qShare'],
                                                   'cim:PerCent',
                                                   'cim:VsConverter.qShare'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VsConverter.qShare'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.qShare'],
                                                   'cim:PerCent',
                                                   'cim:VsConverter.qShare'
                                                 );
        }
        if ('cim:VsConverter.targetQpcc' in object) {
            attributeEntries['filledEntries']['cim:VsConverter.targetQpcc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.targetQpcc'],
                                                   'cim:ReactivePower',
                                                   'cim:VsConverter.targetQpcc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VsConverter.targetQpcc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.targetQpcc'],
                                                   'cim:ReactivePower',
                                                   'cim:VsConverter.targetQpcc'
                                                 );
        }
        if ('cim:VsConverter.targetUpcc' in object) {
            attributeEntries['filledEntries']['cim:VsConverter.targetUpcc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.targetUpcc'],
                                                   'cim:Voltage',
                                                   'cim:VsConverter.targetUpcc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VsConverter.targetUpcc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.targetUpcc'],
                                                   'cim:Voltage',
                                                   'cim:VsConverter.targetUpcc'
                                                 );
        }
        if ('cim:VsConverter.delta' in object) {
            attributeEntries['filledEntries']['cim:VsConverter.delta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.delta'],
                                                   'cim:AngleDegrees',
                                                   'cim:VsConverter.delta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VsConverter.delta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.delta'],
                                                   'cim:AngleDegrees',
                                                   'cim:VsConverter.delta'
                                                 );
        }
        if ('cim:VsConverter.uf' in object) {
            attributeEntries['filledEntries']['cim:VsConverter.uf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.uf'],
                                                   'cim:Voltage',
                                                   'cim:VsConverter.uf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VsConverter.uf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VsConverter.uf'],
                                                   'cim:Voltage',
                                                   'cim:VsConverter.uf'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:VsConverter.CapabilityCurve",
            "cim:VsConverter.maxModulationIndex",
            "cim:VsConverter.maxValveCurrent",
            "cim:VsConverter.droop",
            "cim:VsConverter.droopCompensation",
            "cim:VsConverter.pPccControl",
            "cim:VsConverter.qPccControl",
            "cim:VsConverter.qShare",
            "cim:VsConverter.targetQpcc",
            "cim:VsConverter.targetUpcc",
            "cim:VsConverter.delta",
            "cim:VsConverter.uf",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( ACDCConverter.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!VsConverter.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class VsConverter: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = VsConverter.attributeHTML(object, cimmenu);
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
export default VsConverter
