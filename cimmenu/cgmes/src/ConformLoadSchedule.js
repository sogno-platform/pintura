import templates from "../../templates/index.js"
import SeasonDayTypeSchedule from "./SeasonDayTypeSchedule.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ConformLoadSchedule extends SeasonDayTypeSchedule {

    static attributeHTML(object, cimmenu, classType="ConformLoadSchedule") {
        let attributeEntries = SeasonDayTypeSchedule.attributeHTML(object, cimmenu, classType);
        if ('cim:ConformLoadSchedule.ConformLoadGroup' in object) {
            attributeEntries['filledEntries']['cim:ConformLoadSchedule.ConformLoadGroup'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConformLoadSchedule.ConformLoadGroup'],
                                                   'cim:ConformLoadGroup',
                                                   'cim:ConformLoadSchedule.ConformLoadGroup'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ConformLoadSchedule.ConformLoadGroup'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConformLoadSchedule.ConformLoadGroup'],
                                                   'cim:ConformLoadGroup',
                                                   'cim:ConformLoadSchedule.ConformLoadGroup'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'ConformLoadGroup': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ConformLoadSchedule.ConformLoadGroup",
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
            if (!ConformLoadSchedule.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ConformLoadSchedule: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ConformLoadSchedule.attributeHTML(object, cimmenu);
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
export default ConformLoadSchedule
