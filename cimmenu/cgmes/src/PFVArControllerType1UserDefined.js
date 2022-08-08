import templates from "../../templates/index.js"
import PFVArControllerType1Dynamics from "./PFVArControllerType1Dynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PFVArControllerType1UserDefined extends PFVArControllerType1Dynamics {

    static attributeHTML(object, cimmenu, classType="PFVArControllerType1UserDefined") {
        let attributeEntries = PFVArControllerType1Dynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:PFVArControllerType1UserDefined.proprietary' in object) {
            attributeEntries['filledEntries']['cim:PFVArControllerType1UserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArControllerType1UserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:PFVArControllerType1UserDefined.proprietary'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArControllerType1UserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArControllerType1UserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:PFVArControllerType1UserDefined.proprietary'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'proprietary': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PFVArControllerType1UserDefined.proprietary",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( PFVArControllerType1Dynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!PFVArControllerType1UserDefined.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class PFVArControllerType1UserDefined: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PFVArControllerType1UserDefined.attributeHTML(object, cimmenu);
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
export default PFVArControllerType1UserDefined
