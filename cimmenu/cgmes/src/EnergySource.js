import templates from "../../templates/index.js"
import ConductingEquipment from "./ConductingEquipment.js"
import common from "../../src/common.js"

class EnergySource extends ConductingEquipment {

    static attributeHTML(object, cimmenu, classType="EnergySource") {
        let attributeEntries = ConductingEquipment.attributeHTML(object, cimmenu, classType);
        if ('cim:EnergySource.EnergySchedulingType' in object) {
            attributeEntries['filledEntries']['cim:EnergySource.EnergySchedulingType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.EnergySchedulingType'],
                                                   'cim:EnergySchedulingType',
                                                   'cim:EnergySource.EnergySchedulingType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergySource.EnergySchedulingType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.EnergySchedulingType'],
                                                   'cim:EnergySchedulingType',
                                                   'cim:EnergySource.EnergySchedulingType'
                                                 );
        }
        if ('cim:EnergySource.nominalVoltage' in object) {
            attributeEntries['filledEntries']['cim:EnergySource.nominalVoltage'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.nominalVoltage'],
                                                   'cim:Voltage',
                                                   'cim:EnergySource.nominalVoltage'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergySource.nominalVoltage'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.nominalVoltage'],
                                                   'cim:Voltage',
                                                   'cim:EnergySource.nominalVoltage'
                                                 );
        }
        if ('cim:EnergySource.r' in object) {
            attributeEntries['filledEntries']['cim:EnergySource.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.r'],
                                                   'cim:Resistance',
                                                   'cim:EnergySource.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergySource.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.r'],
                                                   'cim:Resistance',
                                                   'cim:EnergySource.r'
                                                 );
        }
        if ('cim:EnergySource.r0' in object) {
            attributeEntries['filledEntries']['cim:EnergySource.r0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.r0'],
                                                   'cim:Resistance',
                                                   'cim:EnergySource.r0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergySource.r0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.r0'],
                                                   'cim:Resistance',
                                                   'cim:EnergySource.r0'
                                                 );
        }
        if ('cim:EnergySource.rn' in object) {
            attributeEntries['filledEntries']['cim:EnergySource.rn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.rn'],
                                                   'cim:Resistance',
                                                   'cim:EnergySource.rn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergySource.rn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.rn'],
                                                   'cim:Resistance',
                                                   'cim:EnergySource.rn'
                                                 );
        }
        if ('cim:EnergySource.voltageAngle' in object) {
            attributeEntries['filledEntries']['cim:EnergySource.voltageAngle'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.voltageAngle'],
                                                   'cim:AngleRadians',
                                                   'cim:EnergySource.voltageAngle'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergySource.voltageAngle'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.voltageAngle'],
                                                   'cim:AngleRadians',
                                                   'cim:EnergySource.voltageAngle'
                                                 );
        }
        if ('cim:EnergySource.voltageMagnitude' in object) {
            attributeEntries['filledEntries']['cim:EnergySource.voltageMagnitude'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.voltageMagnitude'],
                                                   'cim:Voltage',
                                                   'cim:EnergySource.voltageMagnitude'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergySource.voltageMagnitude'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.voltageMagnitude'],
                                                   'cim:Voltage',
                                                   'cim:EnergySource.voltageMagnitude'
                                                 );
        }
        if ('cim:EnergySource.x' in object) {
            attributeEntries['filledEntries']['cim:EnergySource.x'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.x'],
                                                   'cim:Reactance',
                                                   'cim:EnergySource.x'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergySource.x'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.x'],
                                                   'cim:Reactance',
                                                   'cim:EnergySource.x'
                                                 );
        }
        if ('cim:EnergySource.x0' in object) {
            attributeEntries['filledEntries']['cim:EnergySource.x0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.x0'],
                                                   'cim:Reactance',
                                                   'cim:EnergySource.x0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergySource.x0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.x0'],
                                                   'cim:Reactance',
                                                   'cim:EnergySource.x0'
                                                 );
        }
        if ('cim:EnergySource.xn' in object) {
            attributeEntries['filledEntries']['cim:EnergySource.xn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.xn'],
                                                   'cim:Reactance',
                                                   'cim:EnergySource.xn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergySource.xn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.xn'],
                                                   'cim:Reactance',
                                                   'cim:EnergySource.xn'
                                                 );
        }
        if ('cim:EnergySource.activePower' in object) {
            attributeEntries['filledEntries']['cim:EnergySource.activePower'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.activePower'],
                                                   'cim:ActivePower',
                                                   'cim:EnergySource.activePower'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergySource.activePower'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.activePower'],
                                                   'cim:ActivePower',
                                                   'cim:EnergySource.activePower'
                                                 );
        }
        if ('cim:EnergySource.reactivePower' in object) {
            attributeEntries['filledEntries']['cim:EnergySource.reactivePower'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.reactivePower'],
                                                   'cim:ReactivePower',
                                                   'cim:EnergySource.reactivePower'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergySource.reactivePower'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergySource.reactivePower'],
                                                   'cim:ReactivePower',
                                                   'cim:EnergySource.reactivePower'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:EnergySource.EnergySchedulingType",
            "cim:EnergySource.nominalVoltage",
            "cim:EnergySource.r",
            "cim:EnergySource.r0",
            "cim:EnergySource.rn",
            "cim:EnergySource.voltageAngle",
            "cim:EnergySource.voltageMagnitude",
            "cim:EnergySource.x",
            "cim:EnergySource.x0",
            "cim:EnergySource.xn",
            "cim:EnergySource.activePower",
            "cim:EnergySource.reactivePower",
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
            if (!EnergySource.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class EnergySource: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = EnergySource.attributeHTML(object, cimmenu);
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
export default EnergySource
