import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class Measurement extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="Measurement") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:Measurement.measurementType' in object) {
            attributeEntries['filledEntries']['cim:Measurement.measurementType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Measurement.measurementType'],
                                                   'cim:String',
                                                   'cim:Measurement.measurementType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Measurement.measurementType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Measurement.measurementType'],
                                                   'cim:String',
                                                   'cim:Measurement.measurementType'
                                                 );
        }
        if ('cim:Measurement.phases' in object) {
            attributeEntries['filledEntries']['cim:Measurement.phases'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Measurement.phases'],
                                                   'cim:PhaseCode',
                                                   'cim:Measurement.phases'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Measurement.phases'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Measurement.phases'],
                                                   'cim:PhaseCode',
                                                   'cim:Measurement.phases'
                                                 );
        }
        if ('cim:Measurement.unitSymbol' in object) {
            attributeEntries['filledEntries']['cim:Measurement.unitSymbol'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Measurement.unitSymbol'],
                                                   'cim:UnitSymbol',
                                                   'cim:Measurement.unitSymbol'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Measurement.unitSymbol'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Measurement.unitSymbol'],
                                                   'cim:UnitSymbol',
                                                   'cim:Measurement.unitSymbol'
                                                 );
        }
        if ('cim:Measurement.unitMultiplier' in object) {
            attributeEntries['filledEntries']['cim:Measurement.unitMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Measurement.unitMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Measurement.unitMultiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Measurement.unitMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Measurement.unitMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Measurement.unitMultiplier'
                                                 );
        }
        if ('cim:Measurement.Terminal' in object) {
            attributeEntries['filledEntries']['cim:Measurement.Terminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Measurement.Terminal'],
                                                   'cim:ACDCTerminal',
                                                   'cim:Measurement.Terminal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Measurement.Terminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Measurement.Terminal'],
                                                   'cim:ACDCTerminal',
                                                   'cim:Measurement.Terminal'
                                                 );
        }
        if ('cim:Measurement.PowerSystemResource' in object) {
            attributeEntries['filledEntries']['cim:Measurement.PowerSystemResource'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Measurement.PowerSystemResource'],
                                                   'cim:PowerSystemResource',
                                                   'cim:Measurement.PowerSystemResource'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Measurement.PowerSystemResource'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Measurement.PowerSystemResource'],
                                                   'cim:PowerSystemResource',
                                                   'cim:Measurement.PowerSystemResource'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Measurement.measurementType",
            "cim:Measurement.phases",
            "cim:Measurement.unitSymbol",
            "cim:Measurement.unitMultiplier",
            "cim:Measurement.Terminal",
            "cim:Measurement.PowerSystemResource",
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
            if (!Measurement.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class Measurement: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Measurement.attributeHTML(object, cimmenu);
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
        "Accumulator",
        "Analog",
        "Discrete",
        "StringMeasurement",
        ];
        return subClasses;
    }
};
export default Measurement
