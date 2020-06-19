import templates from "../../templates/index.js"
import ConductingEquipment from "./ConductingEquipment.js"
import common from "../../src/common.js"

class SeriesCompensator extends ConductingEquipment {

    static attributeHTML(object, cimmenu, classType="SeriesCompensator") {
        let attributeEntries = ConductingEquipment.attributeHTML(object, cimmenu, classType);
        if ('cim:SeriesCompensator.r' in object) {
            attributeEntries['filledEntries']['cim:SeriesCompensator.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SeriesCompensator.r'],
                                                   'cim:Resistance',
                                                   'cim:SeriesCompensator.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SeriesCompensator.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SeriesCompensator.r'],
                                                   'cim:Resistance',
                                                   'cim:SeriesCompensator.r'
                                                 );
        }
        if ('cim:SeriesCompensator.x' in object) {
            attributeEntries['filledEntries']['cim:SeriesCompensator.x'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SeriesCompensator.x'],
                                                   'cim:Reactance',
                                                   'cim:SeriesCompensator.x'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SeriesCompensator.x'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SeriesCompensator.x'],
                                                   'cim:Reactance',
                                                   'cim:SeriesCompensator.x'
                                                 );
        }
        if ('cim:SeriesCompensator.varistorPresent' in object) {
            attributeEntries['filledEntries']['cim:SeriesCompensator.varistorPresent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SeriesCompensator.varistorPresent'],
                                                   'cim:Boolean',
                                                   'cim:SeriesCompensator.varistorPresent'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SeriesCompensator.varistorPresent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SeriesCompensator.varistorPresent'],
                                                   'cim:Boolean',
                                                   'cim:SeriesCompensator.varistorPresent'
                                                 );
        }
        if ('cim:SeriesCompensator.varistorRatedCurrent' in object) {
            attributeEntries['filledEntries']['cim:SeriesCompensator.varistorRatedCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SeriesCompensator.varistorRatedCurrent'],
                                                   'cim:CurrentFlow',
                                                   'cim:SeriesCompensator.varistorRatedCurrent'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SeriesCompensator.varistorRatedCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SeriesCompensator.varistorRatedCurrent'],
                                                   'cim:CurrentFlow',
                                                   'cim:SeriesCompensator.varistorRatedCurrent'
                                                 );
        }
        if ('cim:SeriesCompensator.varistorVoltageThreshold' in object) {
            attributeEntries['filledEntries']['cim:SeriesCompensator.varistorVoltageThreshold'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SeriesCompensator.varistorVoltageThreshold'],
                                                   'cim:Voltage',
                                                   'cim:SeriesCompensator.varistorVoltageThreshold'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SeriesCompensator.varistorVoltageThreshold'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SeriesCompensator.varistorVoltageThreshold'],
                                                   'cim:Voltage',
                                                   'cim:SeriesCompensator.varistorVoltageThreshold'
                                                 );
        }
        if ('cim:SeriesCompensator.r0' in object) {
            attributeEntries['filledEntries']['cim:SeriesCompensator.r0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SeriesCompensator.r0'],
                                                   'cim:Resistance',
                                                   'cim:SeriesCompensator.r0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SeriesCompensator.r0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SeriesCompensator.r0'],
                                                   'cim:Resistance',
                                                   'cim:SeriesCompensator.r0'
                                                 );
        }
        if ('cim:SeriesCompensator.x0' in object) {
            attributeEntries['filledEntries']['cim:SeriesCompensator.x0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SeriesCompensator.x0'],
                                                   'cim:Reactance',
                                                   'cim:SeriesCompensator.x0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SeriesCompensator.x0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SeriesCompensator.x0'],
                                                   'cim:Reactance',
                                                   'cim:SeriesCompensator.x0'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:SeriesCompensator.r",
            "cim:SeriesCompensator.x",
            "cim:SeriesCompensator.varistorPresent",
            "cim:SeriesCompensator.varistorRatedCurrent",
            "cim:SeriesCompensator.varistorVoltageThreshold",
            "cim:SeriesCompensator.r0",
            "cim:SeriesCompensator.x0",
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
            if (!SeriesCompensator.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class SeriesCompensator: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SeriesCompensator.attributeHTML(object, cimmenu);
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
export default SeriesCompensator
