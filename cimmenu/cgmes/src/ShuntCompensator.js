import templates from "../../templates/index.js"
import RegulatingCondEq from "./RegulatingCondEq.js"
import common from "../../src/common.js"

class ShuntCompensator extends RegulatingCondEq {

    static attributeHTML(object, cimmenu, classType="ShuntCompensator") {
        let attributeEntries = RegulatingCondEq.attributeHTML(object, cimmenu, classType);
        if ('cim:ShuntCompensator.aVRDelay' in object) {
            attributeEntries['filledEntries']['cim:ShuntCompensator.aVRDelay'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ShuntCompensator.aVRDelay'],
                                                   'cim:Seconds',
                                                   'cim:ShuntCompensator.aVRDelay'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ShuntCompensator.aVRDelay'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ShuntCompensator.aVRDelay'],
                                                   'cim:Seconds',
                                                   'cim:ShuntCompensator.aVRDelay'
                                                 );
        }
        if ('cim:ShuntCompensator.grounded' in object) {
            attributeEntries['filledEntries']['cim:ShuntCompensator.grounded'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ShuntCompensator.grounded'],
                                                   'cim:Boolean',
                                                   'cim:ShuntCompensator.grounded'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ShuntCompensator.grounded'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ShuntCompensator.grounded'],
                                                   'cim:Boolean',
                                                   'cim:ShuntCompensator.grounded'
                                                 );
        }
        if ('cim:ShuntCompensator.maximumSections' in object) {
            attributeEntries['filledEntries']['cim:ShuntCompensator.maximumSections'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ShuntCompensator.maximumSections'],
                                                   'cim:Integer',
                                                   'cim:ShuntCompensator.maximumSections'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ShuntCompensator.maximumSections'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ShuntCompensator.maximumSections'],
                                                   'cim:Integer',
                                                   'cim:ShuntCompensator.maximumSections'
                                                 );
        }
        if ('cim:ShuntCompensator.nomU' in object) {
            attributeEntries['filledEntries']['cim:ShuntCompensator.nomU'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ShuntCompensator.nomU'],
                                                   'cim:Voltage',
                                                   'cim:ShuntCompensator.nomU'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ShuntCompensator.nomU'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ShuntCompensator.nomU'],
                                                   'cim:Voltage',
                                                   'cim:ShuntCompensator.nomU'
                                                 );
        }
        if ('cim:ShuntCompensator.normalSections' in object) {
            attributeEntries['filledEntries']['cim:ShuntCompensator.normalSections'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ShuntCompensator.normalSections'],
                                                   'cim:Integer',
                                                   'cim:ShuntCompensator.normalSections'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ShuntCompensator.normalSections'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ShuntCompensator.normalSections'],
                                                   'cim:Integer',
                                                   'cim:ShuntCompensator.normalSections'
                                                 );
        }
        if ('cim:ShuntCompensator.switchOnCount' in object) {
            attributeEntries['filledEntries']['cim:ShuntCompensator.switchOnCount'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ShuntCompensator.switchOnCount'],
                                                   'cim:Integer',
                                                   'cim:ShuntCompensator.switchOnCount'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ShuntCompensator.switchOnCount'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ShuntCompensator.switchOnCount'],
                                                   'cim:Integer',
                                                   'cim:ShuntCompensator.switchOnCount'
                                                 );
        }
        if ('cim:ShuntCompensator.switchOnDate' in object) {
            attributeEntries['filledEntries']['cim:ShuntCompensator.switchOnDate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ShuntCompensator.switchOnDate'],
                                                   'cim:DateTime',
                                                   'cim:ShuntCompensator.switchOnDate'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ShuntCompensator.switchOnDate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ShuntCompensator.switchOnDate'],
                                                   'cim:DateTime',
                                                   'cim:ShuntCompensator.switchOnDate'
                                                 );
        }
        if ('cim:ShuntCompensator.voltageSensitivity' in object) {
            attributeEntries['filledEntries']['cim:ShuntCompensator.voltageSensitivity'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ShuntCompensator.voltageSensitivity'],
                                                   'cim:VoltagePerReactivePower',
                                                   'cim:ShuntCompensator.voltageSensitivity'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ShuntCompensator.voltageSensitivity'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ShuntCompensator.voltageSensitivity'],
                                                   'cim:VoltagePerReactivePower',
                                                   'cim:ShuntCompensator.voltageSensitivity'
                                                 );
        }
        if ('cim:ShuntCompensator.sections' in object) {
            attributeEntries['filledEntries']['cim:ShuntCompensator.sections'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ShuntCompensator.sections'],
                                                   'cim:Simple_Float',
                                                   'cim:ShuntCompensator.sections'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ShuntCompensator.sections'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ShuntCompensator.sections'],
                                                   'cim:Simple_Float',
                                                   'cim:ShuntCompensator.sections'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ShuntCompensator.aVRDelay",
            "cim:ShuntCompensator.grounded",
            "cim:ShuntCompensator.maximumSections",
            "cim:ShuntCompensator.nomU",
            "cim:ShuntCompensator.normalSections",
            "cim:ShuntCompensator.switchOnCount",
            "cim:ShuntCompensator.switchOnDate",
            "cim:ShuntCompensator.voltageSensitivity",
            "cim:ShuntCompensator.sections",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( RegulatingCondEq.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!ShuntCompensator.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ShuntCompensator: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ShuntCompensator.attributeHTML(object, cimmenu);
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
        "LinearShuntCompensator",
        "NonlinearShuntCompensator",
        ];
        return subClasses;
    }
};
export default ShuntCompensator
