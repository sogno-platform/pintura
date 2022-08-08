import templates from "../../templates/index.js"
import Quality61850 from "./Quality61850.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class MeasurementValueQuality extends Quality61850 {

    static attributeHTML(object, cimmenu, classType="MeasurementValueQuality") {
        let attributeEntries = Quality61850.attributeHTML(object, cimmenu, classType);
        if ('cim:MeasurementValueQuality.MeasurementValue' in object) {
            attributeEntries['filledEntries']['cim:MeasurementValueQuality.MeasurementValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MeasurementValueQuality.MeasurementValue'],
                                                   'cim:MeasurementValue',
                                                   'cim:MeasurementValueQuality.MeasurementValue'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MeasurementValueQuality.MeasurementValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MeasurementValueQuality.MeasurementValue'],
                                                   'cim:MeasurementValue',
                                                   'cim:MeasurementValueQuality.MeasurementValue'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'MeasurementValue': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:MeasurementValueQuality.MeasurementValue",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( Quality61850.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!MeasurementValueQuality.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class MeasurementValueQuality: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = MeasurementValueQuality.attributeHTML(object, cimmenu);
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
export default MeasurementValueQuality
