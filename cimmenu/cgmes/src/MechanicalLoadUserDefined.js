import templates from "../../templates/index.js"
import MechanicalLoadDynamics from "./MechanicalLoadDynamics.js"
import common from "../../src/common.js"

class MechanicalLoadUserDefined extends MechanicalLoadDynamics {

    static attributeHTML(object, cimmenu, classType="MechanicalLoadUserDefined") {
        let attributeEntries = MechanicalLoadDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:MechanicalLoadUserDefined.proprietary' in object) {
            attributeEntries['filledEntries']['cim:MechanicalLoadUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MechanicalLoadUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:MechanicalLoadUserDefined.proprietary'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MechanicalLoadUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MechanicalLoadUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:MechanicalLoadUserDefined.proprietary'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:MechanicalLoadUserDefined.proprietary",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( MechanicalLoadDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!MechanicalLoadUserDefined.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class MechanicalLoadUserDefined: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = MechanicalLoadUserDefined.attributeHTML(object, cimmenu);
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
export default MechanicalLoadUserDefined
