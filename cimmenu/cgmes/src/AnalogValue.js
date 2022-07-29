import templates from "../../templates/index.js"
import MeasurementValue from "./MeasurementValue.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class AnalogValue extends MeasurementValue {

    static attributeHTML(object, cimmenu, classType="AnalogValue") {
        let attributeEntries = MeasurementValue.attributeHTML(object, cimmenu, classType);
        if ('cim:AnalogValue.Analog' in object) {
            attributeEntries['filledEntries']['cim:AnalogValue.Analog'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AnalogValue.Analog'],
                                                   'cim:Analog',
                                                   'cim:AnalogValue.Analog'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AnalogValue.Analog'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AnalogValue.Analog'],
                                                   'cim:Analog',
                                                   'cim:AnalogValue.Analog'
                                                 );
        }
        if ('cim:AnalogValue.value' in object) {
            attributeEntries['filledEntries']['cim:AnalogValue.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AnalogValue.value'],
                                                   'cim:Simple_Float',
                                                   'cim:AnalogValue.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AnalogValue.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AnalogValue.value'],
                                                   'cim:Simple_Float',
                                                   'cim:AnalogValue.value'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'Analog': [CGMESProfile.shortNames.EQ, ],
						'value': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:AnalogValue.Analog",
            "cim:AnalogValue.value",
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
            if (!AnalogValue.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class AnalogValue: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = AnalogValue.attributeHTML(object, cimmenu);
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
export default AnalogValue
