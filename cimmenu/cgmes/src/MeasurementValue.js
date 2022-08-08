import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class MeasurementValue extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="MeasurementValue") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:MeasurementValue.timeStamp' in object) {
            attributeEntries['filledEntries']['cim:MeasurementValue.timeStamp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MeasurementValue.timeStamp'],
                                                   'cim:DateTime',
                                                   'cim:MeasurementValue.timeStamp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MeasurementValue.timeStamp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MeasurementValue.timeStamp'],
                                                   'cim:DateTime',
                                                   'cim:MeasurementValue.timeStamp'
                                                 );
        }
        if ('cim:MeasurementValue.sensorAccuracy' in object) {
            attributeEntries['filledEntries']['cim:MeasurementValue.sensorAccuracy'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MeasurementValue.sensorAccuracy'],
                                                   'cim:PerCent',
                                                   'cim:MeasurementValue.sensorAccuracy'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MeasurementValue.sensorAccuracy'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MeasurementValue.sensorAccuracy'],
                                                   'cim:PerCent',
                                                   'cim:MeasurementValue.sensorAccuracy'
                                                 );
        }
        if ('cim:MeasurementValue.MeasurementValueSource' in object) {
            attributeEntries['filledEntries']['cim:MeasurementValue.MeasurementValueSource'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MeasurementValue.MeasurementValueSource'],
                                                   'cim:MeasurementValueSource',
                                                   'cim:MeasurementValue.MeasurementValueSource'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MeasurementValue.MeasurementValueSource'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MeasurementValue.MeasurementValueSource'],
                                                   'cim:MeasurementValueSource',
                                                   'cim:MeasurementValue.MeasurementValueSource'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'timeStamp': [CGMESProfile.shortNames.EQ, ],
						'sensorAccuracy': [CGMESProfile.shortNames.EQ, ],
						'MeasurementValueSource': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:MeasurementValue.timeStamp",
            "cim:MeasurementValue.sensorAccuracy",
            "cim:MeasurementValue.MeasurementValueSource",
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
            if (!MeasurementValue.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class MeasurementValue: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = MeasurementValue.attributeHTML(object, cimmenu);
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
        "AccumulatorValue",
        "AnalogValue",
        "DiscreteValue",
        "StringMeasurementValue",
        ];
        return subClasses;
    }
};
export default MeasurementValue
