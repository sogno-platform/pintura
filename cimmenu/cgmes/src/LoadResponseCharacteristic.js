import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class LoadResponseCharacteristic extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="LoadResponseCharacteristic") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:LoadResponseCharacteristic.exponentModel' in object) {
            attributeEntries['filledEntries']['cim:LoadResponseCharacteristic.exponentModel'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.exponentModel'],
                                                   'cim:Boolean',
                                                   'cim:LoadResponseCharacteristic.exponentModel'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadResponseCharacteristic.exponentModel'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.exponentModel'],
                                                   'cim:Boolean',
                                                   'cim:LoadResponseCharacteristic.exponentModel'
                                                 );
        }
        if ('cim:LoadResponseCharacteristic.pConstantCurrent' in object) {
            attributeEntries['filledEntries']['cim:LoadResponseCharacteristic.pConstantCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.pConstantCurrent'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.pConstantCurrent'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadResponseCharacteristic.pConstantCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.pConstantCurrent'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.pConstantCurrent'
                                                 );
        }
        if ('cim:LoadResponseCharacteristic.pConstantImpedance' in object) {
            attributeEntries['filledEntries']['cim:LoadResponseCharacteristic.pConstantImpedance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.pConstantImpedance'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.pConstantImpedance'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadResponseCharacteristic.pConstantImpedance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.pConstantImpedance'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.pConstantImpedance'
                                                 );
        }
        if ('cim:LoadResponseCharacteristic.pConstantPower' in object) {
            attributeEntries['filledEntries']['cim:LoadResponseCharacteristic.pConstantPower'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.pConstantPower'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.pConstantPower'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadResponseCharacteristic.pConstantPower'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.pConstantPower'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.pConstantPower'
                                                 );
        }
        if ('cim:LoadResponseCharacteristic.pFrequencyExponent' in object) {
            attributeEntries['filledEntries']['cim:LoadResponseCharacteristic.pFrequencyExponent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.pFrequencyExponent'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.pFrequencyExponent'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadResponseCharacteristic.pFrequencyExponent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.pFrequencyExponent'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.pFrequencyExponent'
                                                 );
        }
        if ('cim:LoadResponseCharacteristic.pVoltageExponent' in object) {
            attributeEntries['filledEntries']['cim:LoadResponseCharacteristic.pVoltageExponent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.pVoltageExponent'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.pVoltageExponent'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadResponseCharacteristic.pVoltageExponent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.pVoltageExponent'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.pVoltageExponent'
                                                 );
        }
        if ('cim:LoadResponseCharacteristic.qConstantCurrent' in object) {
            attributeEntries['filledEntries']['cim:LoadResponseCharacteristic.qConstantCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.qConstantCurrent'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.qConstantCurrent'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadResponseCharacteristic.qConstantCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.qConstantCurrent'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.qConstantCurrent'
                                                 );
        }
        if ('cim:LoadResponseCharacteristic.qConstantImpedance' in object) {
            attributeEntries['filledEntries']['cim:LoadResponseCharacteristic.qConstantImpedance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.qConstantImpedance'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.qConstantImpedance'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadResponseCharacteristic.qConstantImpedance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.qConstantImpedance'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.qConstantImpedance'
                                                 );
        }
        if ('cim:LoadResponseCharacteristic.qConstantPower' in object) {
            attributeEntries['filledEntries']['cim:LoadResponseCharacteristic.qConstantPower'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.qConstantPower'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.qConstantPower'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadResponseCharacteristic.qConstantPower'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.qConstantPower'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.qConstantPower'
                                                 );
        }
        if ('cim:LoadResponseCharacteristic.qFrequencyExponent' in object) {
            attributeEntries['filledEntries']['cim:LoadResponseCharacteristic.qFrequencyExponent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.qFrequencyExponent'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.qFrequencyExponent'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadResponseCharacteristic.qFrequencyExponent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.qFrequencyExponent'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.qFrequencyExponent'
                                                 );
        }
        if ('cim:LoadResponseCharacteristic.qVoltageExponent' in object) {
            attributeEntries['filledEntries']['cim:LoadResponseCharacteristic.qVoltageExponent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.qVoltageExponent'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.qVoltageExponent'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadResponseCharacteristic.qVoltageExponent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadResponseCharacteristic.qVoltageExponent'],
                                                   'cim:Simple_Float',
                                                   'cim:LoadResponseCharacteristic.qVoltageExponent'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:LoadResponseCharacteristic.exponentModel",
            "cim:LoadResponseCharacteristic.pConstantCurrent",
            "cim:LoadResponseCharacteristic.pConstantImpedance",
            "cim:LoadResponseCharacteristic.pConstantPower",
            "cim:LoadResponseCharacteristic.pFrequencyExponent",
            "cim:LoadResponseCharacteristic.pVoltageExponent",
            "cim:LoadResponseCharacteristic.qConstantCurrent",
            "cim:LoadResponseCharacteristic.qConstantImpedance",
            "cim:LoadResponseCharacteristic.qConstantPower",
            "cim:LoadResponseCharacteristic.qFrequencyExponent",
            "cim:LoadResponseCharacteristic.qVoltageExponent",
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
            if (!LoadResponseCharacteristic.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class LoadResponseCharacteristic: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = LoadResponseCharacteristic.attributeHTML(object, cimmenu);
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
export default LoadResponseCharacteristic
