import templates from "../../templates/index.js"
import WindPlantDynamics from "./WindPlantDynamics.js"
import common from "../../src/common.js"

class WindPlantUserDefined extends WindPlantDynamics {

    static attributeHTML(object, cimmenu, classType="WindPlantUserDefined") {
        let attributeEntries = WindPlantDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:WindPlantUserDefined.proprietary' in object) {
            attributeEntries['filledEntries']['cim:WindPlantUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:WindPlantUserDefined.proprietary'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:WindPlantUserDefined.proprietary'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindPlantUserDefined.proprietary",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( WindPlantDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!WindPlantUserDefined.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindPlantUserDefined: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindPlantUserDefined.attributeHTML(object, cimmenu);
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
export default WindPlantUserDefined
