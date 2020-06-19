import templates from "../../templates/index.js"
import DiscontinuousExcitationControlDynamics from "./DiscontinuousExcitationControlDynamics.js"
import common from "../../src/common.js"

class DiscontinuousExcitationControlUserDefined extends DiscontinuousExcitationControlDynamics {

    static attributeHTML(object, cimmenu, classType="DiscontinuousExcitationControlUserDefined") {
        let attributeEntries = DiscontinuousExcitationControlDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:DiscontinuousExcitationControlUserDefined.proprietary' in object) {
            attributeEntries['filledEntries']['cim:DiscontinuousExcitationControlUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscontinuousExcitationControlUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:DiscontinuousExcitationControlUserDefined.proprietary'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscontinuousExcitationControlUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscontinuousExcitationControlUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:DiscontinuousExcitationControlUserDefined.proprietary'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DiscontinuousExcitationControlUserDefined.proprietary",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( DiscontinuousExcitationControlDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!DiscontinuousExcitationControlUserDefined.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class DiscontinuousExcitationControlUserDefined: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DiscontinuousExcitationControlUserDefined.attributeHTML(object, cimmenu);
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
export default DiscontinuousExcitationControlUserDefined
