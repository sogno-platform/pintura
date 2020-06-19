import templates from "../../templates/index.js"
import SeasonDayTypeSchedule from "./SeasonDayTypeSchedule.js"
import common from "../../src/common.js"

class SwitchSchedule extends SeasonDayTypeSchedule {

    static attributeHTML(object, cimmenu, classType="SwitchSchedule") {
        let attributeEntries = SeasonDayTypeSchedule.attributeHTML(object, cimmenu, classType);
        if ('cim:SwitchSchedule.Switch' in object) {
            attributeEntries['filledEntries']['cim:SwitchSchedule.Switch'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SwitchSchedule.Switch'],
                                                   'cim:Switch',
                                                   'cim:SwitchSchedule.Switch'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SwitchSchedule.Switch'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SwitchSchedule.Switch'],
                                                   'cim:Switch',
                                                   'cim:SwitchSchedule.Switch'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:SwitchSchedule.Switch",
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
            if (!SwitchSchedule.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class SwitchSchedule: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SwitchSchedule.attributeHTML(object, cimmenu);
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
export default SwitchSchedule
