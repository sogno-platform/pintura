import templates from "../../templates/index.js"
import PowerSystemStabilizerDynamics from "./PowerSystemStabilizerDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PowerSystemStabilizerUserDefined extends PowerSystemStabilizerDynamics {

    static attributeHTML(object, cimmenu, classType="PowerSystemStabilizerUserDefined") {
        let attributeEntries = PowerSystemStabilizerDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:PowerSystemStabilizerUserDefined.proprietary' in object) {
            attributeEntries['filledEntries']['cim:PowerSystemStabilizerUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerSystemStabilizerUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:PowerSystemStabilizerUserDefined.proprietary'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerSystemStabilizerUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerSystemStabilizerUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:PowerSystemStabilizerUserDefined.proprietary'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'proprietary': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PowerSystemStabilizerUserDefined.proprietary",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( PowerSystemStabilizerDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!PowerSystemStabilizerUserDefined.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PowerSystemStabilizerUserDefined: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PowerSystemStabilizerUserDefined.attributeHTML(object, cimmenu);
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
export default PowerSystemStabilizerUserDefined
