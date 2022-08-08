import templates from "../../templates/index.js"
import BasicIntervalSchedule from "./BasicIntervalSchedule.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class RegularIntervalSchedule extends BasicIntervalSchedule {

    static attributeHTML(object, cimmenu, classType="RegularIntervalSchedule") {
        let attributeEntries = BasicIntervalSchedule.attributeHTML(object, cimmenu, classType);
        if ('cim:RegularIntervalSchedule.timeStep' in object) {
            attributeEntries['filledEntries']['cim:RegularIntervalSchedule.timeStep'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegularIntervalSchedule.timeStep'],
                                                   'cim:Seconds',
                                                   'cim:RegularIntervalSchedule.timeStep'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RegularIntervalSchedule.timeStep'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegularIntervalSchedule.timeStep'],
                                                   'cim:Seconds',
                                                   'cim:RegularIntervalSchedule.timeStep'
                                                 );
        }
        if ('cim:RegularIntervalSchedule.endTime' in object) {
            attributeEntries['filledEntries']['cim:RegularIntervalSchedule.endTime'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegularIntervalSchedule.endTime'],
                                                   'cim:DateTime',
                                                   'cim:RegularIntervalSchedule.endTime'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RegularIntervalSchedule.endTime'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegularIntervalSchedule.endTime'],
                                                   'cim:DateTime',
                                                   'cim:RegularIntervalSchedule.endTime'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'timeStep': [CGMESProfile.shortNames.EQ, ],
						'endTime': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:RegularIntervalSchedule.timeStep",
            "cim:RegularIntervalSchedule.endTime",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( BasicIntervalSchedule.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!RegularIntervalSchedule.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class RegularIntervalSchedule: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = RegularIntervalSchedule.attributeHTML(object, cimmenu);
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
export default RegularIntervalSchedule
