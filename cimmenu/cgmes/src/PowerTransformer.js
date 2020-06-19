import templates from "../../templates/index.js"
import ConductingEquipment from "./ConductingEquipment.js"
import common from "../../src/common.js"

class PowerTransformer extends ConductingEquipment {

    static attributeHTML(object, cimmenu, classType="PowerTransformer") {
        let attributeEntries = ConductingEquipment.attributeHTML(object, cimmenu, classType);
        if ('cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent' in object) {
            attributeEntries['filledEntries']['cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformer.beforeShCircuitHighestOperatingCurrent'],
                                                   'cim:CurrentFlow',
                                                   'cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformer.beforeShCircuitHighestOperatingCurrent'],
                                                   'cim:CurrentFlow',
                                                   'cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent'
                                                 );
        }
        if ('cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage' in object) {
            attributeEntries['filledEntries']['cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformer.beforeShCircuitHighestOperatingVoltage'],
                                                   'cim:Voltage',
                                                   'cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformer.beforeShCircuitHighestOperatingVoltage'],
                                                   'cim:Voltage',
                                                   'cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage'
                                                 );
        }
        if ('cim:PowerTransformer.beforeShortCircuitAnglePf' in object) {
            attributeEntries['filledEntries']['cim:PowerTransformer.beforeShortCircuitAnglePf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformer.beforeShortCircuitAnglePf'],
                                                   'cim:AngleDegrees',
                                                   'cim:PowerTransformer.beforeShortCircuitAnglePf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerTransformer.beforeShortCircuitAnglePf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformer.beforeShortCircuitAnglePf'],
                                                   'cim:AngleDegrees',
                                                   'cim:PowerTransformer.beforeShortCircuitAnglePf'
                                                 );
        }
        if ('cim:PowerTransformer.highSideMinOperatingU' in object) {
            attributeEntries['filledEntries']['cim:PowerTransformer.highSideMinOperatingU'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformer.highSideMinOperatingU'],
                                                   'cim:Voltage',
                                                   'cim:PowerTransformer.highSideMinOperatingU'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerTransformer.highSideMinOperatingU'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformer.highSideMinOperatingU'],
                                                   'cim:Voltage',
                                                   'cim:PowerTransformer.highSideMinOperatingU'
                                                 );
        }
        if ('cim:PowerTransformer.isPartOfGeneratorUnit' in object) {
            attributeEntries['filledEntries']['cim:PowerTransformer.isPartOfGeneratorUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformer.isPartOfGeneratorUnit'],
                                                   'cim:Boolean',
                                                   'cim:PowerTransformer.isPartOfGeneratorUnit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerTransformer.isPartOfGeneratorUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformer.isPartOfGeneratorUnit'],
                                                   'cim:Boolean',
                                                   'cim:PowerTransformer.isPartOfGeneratorUnit'
                                                 );
        }
        if ('cim:PowerTransformer.operationalValuesConsidered' in object) {
            attributeEntries['filledEntries']['cim:PowerTransformer.operationalValuesConsidered'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformer.operationalValuesConsidered'],
                                                   'cim:Boolean',
                                                   'cim:PowerTransformer.operationalValuesConsidered'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerTransformer.operationalValuesConsidered'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformer.operationalValuesConsidered'],
                                                   'cim:Boolean',
                                                   'cim:PowerTransformer.operationalValuesConsidered'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent",
            "cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage",
            "cim:PowerTransformer.beforeShortCircuitAnglePf",
            "cim:PowerTransformer.highSideMinOperatingU",
            "cim:PowerTransformer.isPartOfGeneratorUnit",
            "cim:PowerTransformer.operationalValuesConsidered",
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
            if (!PowerTransformer.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PowerTransformer: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PowerTransformer.attributeHTML(object, cimmenu);
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
export default PowerTransformer
