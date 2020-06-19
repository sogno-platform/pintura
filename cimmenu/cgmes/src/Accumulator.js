import templates from "../../templates/index.js"
import Measurement from "./Measurement.js"
import common from "../../src/common.js"

class Accumulator extends Measurement {

    static attributeHTML(object, cimmenu, classType="Accumulator") {
        let attributeEntries = Measurement.attributeHTML(object, cimmenu, classType);
        if ('cim:Accumulator.AccumulatorValues' in object) {
            attributeEntries['filledEntries']['cim:Accumulator.AccumulatorValues'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Accumulator.AccumulatorValues'],
                                                   'cim:AccumulatorValue',
                                                   'cim:Accumulator.AccumulatorValues'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Accumulator.AccumulatorValues'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Accumulator.AccumulatorValues'],
                                                   'cim:AccumulatorValue',
                                                   'cim:Accumulator.AccumulatorValues'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Accumulator.AccumulatorValues",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( Measurement.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!Accumulator.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class Accumulator: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Accumulator.attributeHTML(object, cimmenu);
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
export default Accumulator
