import templates from "../../templates/index.js"
import LoadGroup from "./LoadGroup.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class NonConformLoadGroup extends LoadGroup {

    static attributeHTML(object, cimmenu, classType="NonConformLoadGroup") {
        let attributeEntries = LoadGroup.attributeHTML(object, cimmenu, classType);
        if ('cim:NonConformLoadGroup.NonConformLoadSchedules' in object) {
            attributeEntries['filledEntries']['cim:NonConformLoadGroup.NonConformLoadSchedules'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['NonConformLoadGroup.NonConformLoadSchedules'],
                                                   'cim:NonConformLoadSchedule',
                                                   'cim:NonConformLoadGroup.NonConformLoadSchedules'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:NonConformLoadGroup.NonConformLoadSchedules'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['NonConformLoadGroup.NonConformLoadSchedules'],
                                                   'cim:NonConformLoadSchedule',
                                                   'cim:NonConformLoadGroup.NonConformLoadSchedules'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'NonConformLoadSchedules': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:NonConformLoadGroup.NonConformLoadSchedules",
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
            if (!NonConformLoadGroup.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class NonConformLoadGroup: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = NonConformLoadGroup.attributeHTML(object, cimmenu);
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
export default NonConformLoadGroup
