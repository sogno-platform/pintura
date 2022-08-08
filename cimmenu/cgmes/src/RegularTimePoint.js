import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class RegularTimePoint extends BaseClass {

    static attributeHTML(object, cimmenu, classType="RegularTimePoint") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:RegularTimePoint.IntervalSchedule' in object) {
            attributeEntries['filledEntries']['cim:RegularTimePoint.IntervalSchedule'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegularTimePoint.IntervalSchedule'],
                                                   'cim:RegularIntervalSchedule',
                                                   'cim:RegularTimePoint.IntervalSchedule'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RegularTimePoint.IntervalSchedule'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegularTimePoint.IntervalSchedule'],
                                                   'cim:RegularIntervalSchedule',
                                                   'cim:RegularTimePoint.IntervalSchedule'
                                                 );
        }
        if ('cim:RegularTimePoint.sequenceNumber' in object) {
            attributeEntries['filledEntries']['cim:RegularTimePoint.sequenceNumber'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegularTimePoint.sequenceNumber'],
                                                   'cim:Integer',
                                                   'cim:RegularTimePoint.sequenceNumber'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RegularTimePoint.sequenceNumber'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegularTimePoint.sequenceNumber'],
                                                   'cim:Integer',
                                                   'cim:RegularTimePoint.sequenceNumber'
                                                 );
        }
        if ('cim:RegularTimePoint.value1' in object) {
            attributeEntries['filledEntries']['cim:RegularTimePoint.value1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegularTimePoint.value1'],
                                                   'cim:Simple_Float',
                                                   'cim:RegularTimePoint.value1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RegularTimePoint.value1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegularTimePoint.value1'],
                                                   'cim:Simple_Float',
                                                   'cim:RegularTimePoint.value1'
                                                 );
        }
        if ('cim:RegularTimePoint.value2' in object) {
            attributeEntries['filledEntries']['cim:RegularTimePoint.value2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegularTimePoint.value2'],
                                                   'cim:Simple_Float',
                                                   'cim:RegularTimePoint.value2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RegularTimePoint.value2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegularTimePoint.value2'],
                                                   'cim:Simple_Float',
                                                   'cim:RegularTimePoint.value2'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'IntervalSchedule': [CGMESProfile.shortNames.EQ, ],
						'sequenceNumber': [CGMESProfile.shortNames.EQ, ],
						'value1': [CGMESProfile.shortNames.EQ, ],
						'value2': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:RegularTimePoint.IntervalSchedule",
            "cim:RegularTimePoint.sequenceNumber",
            "cim:RegularTimePoint.value1",
            "cim:RegularTimePoint.value2",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( BaseClass.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!RegularTimePoint.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class RegularTimePoint: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = RegularTimePoint.attributeHTML(object, cimmenu);
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
export default RegularTimePoint
