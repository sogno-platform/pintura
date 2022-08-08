import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class BasicIntervalSchedule extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="BasicIntervalSchedule") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:BasicIntervalSchedule.startTime' in object) {
            attributeEntries['filledEntries']['cim:BasicIntervalSchedule.startTime'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['BasicIntervalSchedule.startTime'],
                                                   'cim:DateTime',
                                                   'cim:BasicIntervalSchedule.startTime'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:BasicIntervalSchedule.startTime'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['BasicIntervalSchedule.startTime'],
                                                   'cim:DateTime',
                                                   'cim:BasicIntervalSchedule.startTime'
                                                 );
        }
        if ('cim:BasicIntervalSchedule.value1Unit' in object) {
            attributeEntries['filledEntries']['cim:BasicIntervalSchedule.value1Unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['BasicIntervalSchedule.value1Unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:BasicIntervalSchedule.value1Unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:BasicIntervalSchedule.value1Unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['BasicIntervalSchedule.value1Unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:BasicIntervalSchedule.value1Unit'
                                                 );
        }
        if ('cim:BasicIntervalSchedule.value2Unit' in object) {
            attributeEntries['filledEntries']['cim:BasicIntervalSchedule.value2Unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['BasicIntervalSchedule.value2Unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:BasicIntervalSchedule.value2Unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:BasicIntervalSchedule.value2Unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['BasicIntervalSchedule.value2Unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:BasicIntervalSchedule.value2Unit'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'startTime': [CGMESProfile.shortNames.EQ, ],
						'value1Unit': [CGMESProfile.shortNames.EQ, ],
						'value2Unit': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:BasicIntervalSchedule.startTime",
            "cim:BasicIntervalSchedule.value1Unit",
            "cim:BasicIntervalSchedule.value2Unit",
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
            if (!BasicIntervalSchedule.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class BasicIntervalSchedule: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = BasicIntervalSchedule.attributeHTML(object, cimmenu);
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
        "RegularIntervalSchedule",
        "SeasonDayTypeSchedule",
        "ConformLoadSchedule",
        "NonConformLoadSchedule",
        "RegulationSchedule",
        "SwitchSchedule",
        "TapSchedule",
        ];
        return subClasses;
    }
};
export default BasicIntervalSchedule
