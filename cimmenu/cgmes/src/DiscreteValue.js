import templates from "../../templates/index.js"
import MeasurementValue from "./MeasurementValue.js"
import common from "../../src/common.js"

class DiscreteValue extends MeasurementValue {

    static attributeHTML(object, cimmenu, classType="DiscreteValue") {
        let attributeEntries = MeasurementValue.attributeHTML(object, cimmenu, classType);
        if ('cim:DiscreteValue.Discrete' in object) {
            attributeEntries['filledEntries']['cim:DiscreteValue.Discrete'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscreteValue.Discrete'],
                                                   'cim:Discrete',
                                                   'cim:DiscreteValue.Discrete'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscreteValue.Discrete'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscreteValue.Discrete'],
                                                   'cim:Discrete',
                                                   'cim:DiscreteValue.Discrete'
                                                 );
        }
        if ('cim:DiscreteValue.value' in object) {
            attributeEntries['filledEntries']['cim:DiscreteValue.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscreteValue.value'],
                                                   'cim:Integer',
                                                   'cim:DiscreteValue.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscreteValue.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscreteValue.value'],
                                                   'cim:Integer',
                                                   'cim:DiscreteValue.value'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DiscreteValue.Discrete",
            "cim:DiscreteValue.value",
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
            if (!DiscreteValue.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class DiscreteValue: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DiscreteValue.attributeHTML(object, cimmenu);
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
export default DiscreteValue
