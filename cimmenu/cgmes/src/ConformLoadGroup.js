import templates from "../../templates/index.js"
import LoadGroup from "./LoadGroup.js"
import common from "../../src/common.js"

class ConformLoadGroup extends LoadGroup {

    static attributeHTML(object, cimmenu, classType="ConformLoadGroup") {
        let attributeEntries = LoadGroup.attributeHTML(object, cimmenu, classType);
        if ('cim:ConformLoadGroup.ConformLoadSchedules' in object) {
            attributeEntries['filledEntries']['cim:ConformLoadGroup.ConformLoadSchedules'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConformLoadGroup.ConformLoadSchedules'],
                                                   'cim:ConformLoadSchedule',
                                                   'cim:ConformLoadGroup.ConformLoadSchedules'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ConformLoadGroup.ConformLoadSchedules'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConformLoadGroup.ConformLoadSchedules'],
                                                   'cim:ConformLoadSchedule',
                                                   'cim:ConformLoadGroup.ConformLoadSchedules'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ConformLoadGroup.ConformLoadSchedules",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( LoadGroup.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!ConformLoadGroup.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ConformLoadGroup: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ConformLoadGroup.attributeHTML(object, cimmenu);
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
export default ConformLoadGroup
