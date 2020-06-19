import templates from "../../templates/index.js"
import SeasonDayTypeSchedule from "./SeasonDayTypeSchedule.js"
import common from "../../src/common.js"

class NonConformLoadSchedule extends SeasonDayTypeSchedule {

    static attributeHTML(object, cimmenu, classType="NonConformLoadSchedule") {
        let attributeEntries = SeasonDayTypeSchedule.attributeHTML(object, cimmenu, classType);
        if ('cim:NonConformLoadSchedule.NonConformLoadGroup' in object) {
            attributeEntries['filledEntries']['cim:NonConformLoadSchedule.NonConformLoadGroup'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['NonConformLoadSchedule.NonConformLoadGroup'],
                                                   'cim:NonConformLoadGroup',
                                                   'cim:NonConformLoadSchedule.NonConformLoadGroup'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:NonConformLoadSchedule.NonConformLoadGroup'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['NonConformLoadSchedule.NonConformLoadGroup'],
                                                   'cim:NonConformLoadGroup',
                                                   'cim:NonConformLoadSchedule.NonConformLoadGroup'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:NonConformLoadSchedule.NonConformLoadGroup",
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
            if (!NonConformLoadSchedule.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class NonConformLoadSchedule: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = NonConformLoadSchedule.attributeHTML(object, cimmenu);
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
export default NonConformLoadSchedule
