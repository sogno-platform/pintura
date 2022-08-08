import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class TurbineGovernorUserDefined extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="TurbineGovernorUserDefined") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:TurbineGovernorUserDefined.proprietary' in object) {
            attributeEntries['filledEntries']['cim:TurbineGovernorUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbineGovernorUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:TurbineGovernorUserDefined.proprietary'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TurbineGovernorUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbineGovernorUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:TurbineGovernorUserDefined.proprietary'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'proprietary': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:TurbineGovernorUserDefined.proprietary",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( TurbineGovernorDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!TurbineGovernorUserDefined.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class TurbineGovernorUserDefined: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = TurbineGovernorUserDefined.attributeHTML(object, cimmenu);
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
export default TurbineGovernorUserDefined
