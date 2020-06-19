import templates from "../../templates/index.js"
import Equipment from "./Equipment.js"
import common from "../../src/common.js"

class GeneratingUnit extends Equipment {

    static attributeHTML(object, cimmenu, classType="GeneratingUnit") {
        let attributeEntries = Equipment.attributeHTML(object, cimmenu, classType);
        if ('cim:GeneratingUnit.genControlSource' in object) {
            attributeEntries['filledEntries']['cim:GeneratingUnit.genControlSource'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.genControlSource'],
                                                   'cim:GeneratorControlSource',
                                                   'cim:GeneratingUnit.genControlSource'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeneratingUnit.genControlSource'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.genControlSource'],
                                                   'cim:GeneratorControlSource',
                                                   'cim:GeneratingUnit.genControlSource'
                                                 );
        }
        if ('cim:GeneratingUnit.governorSCD' in object) {
            attributeEntries['filledEntries']['cim:GeneratingUnit.governorSCD'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.governorSCD'],
                                                   'cim:PerCent',
                                                   'cim:GeneratingUnit.governorSCD'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeneratingUnit.governorSCD'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.governorSCD'],
                                                   'cim:PerCent',
                                                   'cim:GeneratingUnit.governorSCD'
                                                 );
        }
        if ('cim:GeneratingUnit.initialP' in object) {
            attributeEntries['filledEntries']['cim:GeneratingUnit.initialP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.initialP'],
                                                   'cim:ActivePower',
                                                   'cim:GeneratingUnit.initialP'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeneratingUnit.initialP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.initialP'],
                                                   'cim:ActivePower',
                                                   'cim:GeneratingUnit.initialP'
                                                 );
        }
        if ('cim:GeneratingUnit.longPF' in object) {
            attributeEntries['filledEntries']['cim:GeneratingUnit.longPF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.longPF'],
                                                   'cim:Simple_Float',
                                                   'cim:GeneratingUnit.longPF'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeneratingUnit.longPF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.longPF'],
                                                   'cim:Simple_Float',
                                                   'cim:GeneratingUnit.longPF'
                                                 );
        }
        if ('cim:GeneratingUnit.maximumAllowableSpinningReserve' in object) {
            attributeEntries['filledEntries']['cim:GeneratingUnit.maximumAllowableSpinningReserve'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.maximumAllowableSpinningReserve'],
                                                   'cim:ActivePower',
                                                   'cim:GeneratingUnit.maximumAllowableSpinningReserve'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeneratingUnit.maximumAllowableSpinningReserve'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.maximumAllowableSpinningReserve'],
                                                   'cim:ActivePower',
                                                   'cim:GeneratingUnit.maximumAllowableSpinningReserve'
                                                 );
        }
        if ('cim:GeneratingUnit.maxOperatingP' in object) {
            attributeEntries['filledEntries']['cim:GeneratingUnit.maxOperatingP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.maxOperatingP'],
                                                   'cim:ActivePower',
                                                   'cim:GeneratingUnit.maxOperatingP'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeneratingUnit.maxOperatingP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.maxOperatingP'],
                                                   'cim:ActivePower',
                                                   'cim:GeneratingUnit.maxOperatingP'
                                                 );
        }
        if ('cim:GeneratingUnit.minOperatingP' in object) {
            attributeEntries['filledEntries']['cim:GeneratingUnit.minOperatingP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.minOperatingP'],
                                                   'cim:ActivePower',
                                                   'cim:GeneratingUnit.minOperatingP'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeneratingUnit.minOperatingP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.minOperatingP'],
                                                   'cim:ActivePower',
                                                   'cim:GeneratingUnit.minOperatingP'
                                                 );
        }
        if ('cim:GeneratingUnit.nominalP' in object) {
            attributeEntries['filledEntries']['cim:GeneratingUnit.nominalP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.nominalP'],
                                                   'cim:ActivePower',
                                                   'cim:GeneratingUnit.nominalP'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeneratingUnit.nominalP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.nominalP'],
                                                   'cim:ActivePower',
                                                   'cim:GeneratingUnit.nominalP'
                                                 );
        }
        if ('cim:GeneratingUnit.ratedGrossMaxP' in object) {
            attributeEntries['filledEntries']['cim:GeneratingUnit.ratedGrossMaxP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.ratedGrossMaxP'],
                                                   'cim:ActivePower',
                                                   'cim:GeneratingUnit.ratedGrossMaxP'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeneratingUnit.ratedGrossMaxP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.ratedGrossMaxP'],
                                                   'cim:ActivePower',
                                                   'cim:GeneratingUnit.ratedGrossMaxP'
                                                 );
        }
        if ('cim:GeneratingUnit.ratedGrossMinP' in object) {
            attributeEntries['filledEntries']['cim:GeneratingUnit.ratedGrossMinP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.ratedGrossMinP'],
                                                   'cim:ActivePower',
                                                   'cim:GeneratingUnit.ratedGrossMinP'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeneratingUnit.ratedGrossMinP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.ratedGrossMinP'],
                                                   'cim:ActivePower',
                                                   'cim:GeneratingUnit.ratedGrossMinP'
                                                 );
        }
        if ('cim:GeneratingUnit.ratedNetMaxP' in object) {
            attributeEntries['filledEntries']['cim:GeneratingUnit.ratedNetMaxP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.ratedNetMaxP'],
                                                   'cim:ActivePower',
                                                   'cim:GeneratingUnit.ratedNetMaxP'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeneratingUnit.ratedNetMaxP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.ratedNetMaxP'],
                                                   'cim:ActivePower',
                                                   'cim:GeneratingUnit.ratedNetMaxP'
                                                 );
        }
        if ('cim:GeneratingUnit.shortPF' in object) {
            attributeEntries['filledEntries']['cim:GeneratingUnit.shortPF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.shortPF'],
                                                   'cim:Simple_Float',
                                                   'cim:GeneratingUnit.shortPF'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeneratingUnit.shortPF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.shortPF'],
                                                   'cim:Simple_Float',
                                                   'cim:GeneratingUnit.shortPF'
                                                 );
        }
        if ('cim:GeneratingUnit.startupCost' in object) {
            attributeEntries['filledEntries']['cim:GeneratingUnit.startupCost'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.startupCost'],
                                                   'cim:Money',
                                                   'cim:GeneratingUnit.startupCost'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeneratingUnit.startupCost'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.startupCost'],
                                                   'cim:Money',
                                                   'cim:GeneratingUnit.startupCost'
                                                 );
        }
        if ('cim:GeneratingUnit.variableCost' in object) {
            attributeEntries['filledEntries']['cim:GeneratingUnit.variableCost'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.variableCost'],
                                                   'cim:Money',
                                                   'cim:GeneratingUnit.variableCost'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeneratingUnit.variableCost'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.variableCost'],
                                                   'cim:Money',
                                                   'cim:GeneratingUnit.variableCost'
                                                 );
        }
        if ('cim:GeneratingUnit.totalEfficiency' in object) {
            attributeEntries['filledEntries']['cim:GeneratingUnit.totalEfficiency'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.totalEfficiency'],
                                                   'cim:PerCent',
                                                   'cim:GeneratingUnit.totalEfficiency'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeneratingUnit.totalEfficiency'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.totalEfficiency'],
                                                   'cim:PerCent',
                                                   'cim:GeneratingUnit.totalEfficiency'
                                                 );
        }
        if ('cim:GeneratingUnit.RotatingMachine' in object) {
            attributeEntries['filledEntries']['cim:GeneratingUnit.RotatingMachine'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.RotatingMachine'],
                                                   'cim:RotatingMachine',
                                                   'cim:GeneratingUnit.RotatingMachine'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeneratingUnit.RotatingMachine'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.RotatingMachine'],
                                                   'cim:RotatingMachine',
                                                   'cim:GeneratingUnit.RotatingMachine'
                                                 );
        }
        if ('cim:GeneratingUnit.normalPF' in object) {
            attributeEntries['filledEntries']['cim:GeneratingUnit.normalPF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.normalPF'],
                                                   'cim:Simple_Float',
                                                   'cim:GeneratingUnit.normalPF'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GeneratingUnit.normalPF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GeneratingUnit.normalPF'],
                                                   'cim:Simple_Float',
                                                   'cim:GeneratingUnit.normalPF'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GeneratingUnit.genControlSource",
            "cim:GeneratingUnit.governorSCD",
            "cim:GeneratingUnit.initialP",
            "cim:GeneratingUnit.longPF",
            "cim:GeneratingUnit.maximumAllowableSpinningReserve",
            "cim:GeneratingUnit.maxOperatingP",
            "cim:GeneratingUnit.minOperatingP",
            "cim:GeneratingUnit.nominalP",
            "cim:GeneratingUnit.ratedGrossMaxP",
            "cim:GeneratingUnit.ratedGrossMinP",
            "cim:GeneratingUnit.ratedNetMaxP",
            "cim:GeneratingUnit.shortPF",
            "cim:GeneratingUnit.startupCost",
            "cim:GeneratingUnit.variableCost",
            "cim:GeneratingUnit.totalEfficiency",
            "cim:GeneratingUnit.RotatingMachine",
            "cim:GeneratingUnit.normalPF",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( Equipment.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!GeneratingUnit.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GeneratingUnit: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GeneratingUnit.attributeHTML(object, cimmenu);
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
        "HydroGeneratingUnit",
        "NuclearGeneratingUnit",
        "SolarGeneratingUnit",
        "ThermalGeneratingUnit",
        "WindGeneratingUnit",
        ];
        return subClasses;
    }
};
export default GeneratingUnit
