import templates from "../../templates/index.js"
import MeasurementValue from "./MeasurementValue.js"
import common from "../../src/common.js"

class AccumulatorValue extends MeasurementValue {

    static attributeHTML(object, cimmenu, classType="AccumulatorValue") {
        let attributeEntries = MeasurementValue.attributeHTML(object, cimmenu, classType);
        if ('cim:AccumulatorValue.Accumulator' in object) {
            attributeEntries['filledEntries']['cim:AccumulatorValue.Accumulator'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AccumulatorValue.Accumulator'],
                                                   'cim:Accumulator',
                                                   'cim:AccumulatorValue.Accumulator'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AccumulatorValue.Accumulator'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AccumulatorValue.Accumulator'],
                                                   'cim:Accumulator',
                                                   'cim:AccumulatorValue.Accumulator'
                                                 );
        }
        if ('cim:AccumulatorValue.value' in object) {
            attributeEntries['filledEntries']['cim:AccumulatorValue.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AccumulatorValue.value'],
                                                   'cim:Integer',
                                                   'cim:AccumulatorValue.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AccumulatorValue.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AccumulatorValue.value'],
                                                   'cim:Integer',
                                                   'cim:AccumulatorValue.value'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:AccumulatorValue.Accumulator",
            "cim:AccumulatorValue.value",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( MeasurementValue.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!AccumulatorValue.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class AccumulatorValue: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = AccumulatorValue.attributeHTML(object, cimmenu);
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
export default AccumulatorValue
