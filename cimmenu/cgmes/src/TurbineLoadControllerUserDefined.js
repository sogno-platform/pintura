import templates from "../../templates/index.js"
import TurbineLoadControllerDynamics from "./TurbineLoadControllerDynamics.js"
import common from "../../src/common.js"

class TurbineLoadControllerUserDefined extends TurbineLoadControllerDynamics {

    static attributeHTML(object, cimmenu, classType="TurbineLoadControllerUserDefined") {
        let attributeEntries = TurbineLoadControllerDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:TurbineLoadControllerUserDefined.proprietary' in object) {
            attributeEntries['filledEntries']['cim:TurbineLoadControllerUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbineLoadControllerUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:TurbineLoadControllerUserDefined.proprietary'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TurbineLoadControllerUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbineLoadControllerUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:TurbineLoadControllerUserDefined.proprietary'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:TurbineLoadControllerUserDefined.proprietary",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( TurbineLoadControllerDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!TurbineLoadControllerUserDefined.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class TurbineLoadControllerUserDefined: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = TurbineLoadControllerUserDefined.attributeHTML(object, cimmenu);
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
export default TurbineLoadControllerUserDefined
