import templates from "../../templates/index.js"
import SeasonDayTypeSchedule from "./SeasonDayTypeSchedule.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class TapSchedule extends SeasonDayTypeSchedule {

    static attributeHTML(object, cimmenu, classType="TapSchedule") {
        let attributeEntries = SeasonDayTypeSchedule.attributeHTML(object, cimmenu, classType);
        if ('cim:TapSchedule.TapChanger' in object) {
            attributeEntries['filledEntries']['cim:TapSchedule.TapChanger'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapSchedule.TapChanger'],
                                                   'cim:TapChanger',
                                                   'cim:TapSchedule.TapChanger'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TapSchedule.TapChanger'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapSchedule.TapChanger'],
                                                   'cim:TapChanger',
                                                   'cim:TapSchedule.TapChanger'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'TapChanger': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:TapSchedule.TapChanger",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( SeasonDayTypeSchedule.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!TapSchedule.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class TapSchedule: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = TapSchedule.attributeHTML(object, cimmenu);
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
export default TapSchedule
