import templates from "../../templates/index.js"
import RegularIntervalSchedule from "./RegularIntervalSchedule.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class SeasonDayTypeSchedule extends RegularIntervalSchedule {

    static attributeHTML(object, cimmenu, classType="SeasonDayTypeSchedule") {
        let attributeEntries = RegularIntervalSchedule.attributeHTML(object, cimmenu, classType);
        if ('cim:SeasonDayTypeSchedule.DayType' in object) {
            attributeEntries['filledEntries']['cim:SeasonDayTypeSchedule.DayType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SeasonDayTypeSchedule.DayType'],
                                                   'cim:DayType',
                                                   'cim:SeasonDayTypeSchedule.DayType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SeasonDayTypeSchedule.DayType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SeasonDayTypeSchedule.DayType'],
                                                   'cim:DayType',
                                                   'cim:SeasonDayTypeSchedule.DayType'
                                                 );
        }
        if ('cim:SeasonDayTypeSchedule.Season' in object) {
            attributeEntries['filledEntries']['cim:SeasonDayTypeSchedule.Season'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SeasonDayTypeSchedule.Season'],
                                                   'cim:Season',
                                                   'cim:SeasonDayTypeSchedule.Season'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SeasonDayTypeSchedule.Season'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SeasonDayTypeSchedule.Season'],
                                                   'cim:Season',
                                                   'cim:SeasonDayTypeSchedule.Season'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'DayType': [CGMESProfile.shortNames.EQ, ],
						'Season': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:SeasonDayTypeSchedule.DayType",
            "cim:SeasonDayTypeSchedule.Season",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( RegularIntervalSchedule.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!SeasonDayTypeSchedule.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class SeasonDayTypeSchedule: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SeasonDayTypeSchedule.attributeHTML(object, cimmenu);
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
        "ConformLoadSchedule",
        "NonConformLoadSchedule",
        "RegulationSchedule",
        "SwitchSchedule",
        "TapSchedule",
        ];
        return subClasses;
    }
};
export default SeasonDayTypeSchedule
