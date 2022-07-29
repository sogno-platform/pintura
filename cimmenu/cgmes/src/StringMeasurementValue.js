import templates from "../../templates/index.js"
import MeasurementValue from "./MeasurementValue.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class StringMeasurementValue extends MeasurementValue {

    static attributeHTML(object, cimmenu, classType="StringMeasurementValue") {
        let attributeEntries = MeasurementValue.attributeHTML(object, cimmenu, classType);
        if ('cim:StringMeasurementValue.StringMeasurement' in object) {
            attributeEntries['filledEntries']['cim:StringMeasurementValue.StringMeasurement'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StringMeasurementValue.StringMeasurement'],
                                                   'cim:StringMeasurement',
                                                   'cim:StringMeasurementValue.StringMeasurement'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:StringMeasurementValue.StringMeasurement'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StringMeasurementValue.StringMeasurement'],
                                                   'cim:StringMeasurement',
                                                   'cim:StringMeasurementValue.StringMeasurement'
                                                 );
        }
        if ('cim:StringMeasurementValue.value' in object) {
            attributeEntries['filledEntries']['cim:StringMeasurementValue.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StringMeasurementValue.value'],
                                                   'cim:String',
                                                   'cim:StringMeasurementValue.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:StringMeasurementValue.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StringMeasurementValue.value'],
                                                   'cim:String',
                                                   'cim:StringMeasurementValue.value'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'StringMeasurement': [CGMESProfile.shortNames.EQ, ],
						'value': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:StringMeasurementValue.StringMeasurement",
            "cim:StringMeasurementValue.value",
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
            if (!StringMeasurementValue.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class StringMeasurementValue: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = StringMeasurementValue.attributeHTML(object, cimmenu);
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
export default StringMeasurementValue
