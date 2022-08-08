import templates from "../../templates/index.js"
import PFVArControllerType2Dynamics from "./PFVArControllerType2Dynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PFVArControllerType2UserDefined extends PFVArControllerType2Dynamics {

    static attributeHTML(object, cimmenu, classType="PFVArControllerType2UserDefined") {
        let attributeEntries = PFVArControllerType2Dynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:PFVArControllerType2UserDefined.proprietary' in object) {
            attributeEntries['filledEntries']['cim:PFVArControllerType2UserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArControllerType2UserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:PFVArControllerType2UserDefined.proprietary'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArControllerType2UserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArControllerType2UserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:PFVArControllerType2UserDefined.proprietary'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'proprietary': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PFVArControllerType2UserDefined.proprietary",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( PFVArControllerType2Dynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!PFVArControllerType2UserDefined.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class PFVArControllerType2UserDefined: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PFVArControllerType2UserDefined.attributeHTML(object, cimmenu);
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
export default PFVArControllerType2UserDefined
