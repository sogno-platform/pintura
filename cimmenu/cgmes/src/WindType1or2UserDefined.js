import templates from "../../templates/index.js"
import WindTurbineType1or2Dynamics from "./WindTurbineType1or2Dynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class WindType1or2UserDefined extends WindTurbineType1or2Dynamics {

    static attributeHTML(object, cimmenu, classType="WindType1or2UserDefined") {
        let attributeEntries = WindTurbineType1or2Dynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:WindType1or2UserDefined.proprietary' in object) {
            attributeEntries['filledEntries']['cim:WindType1or2UserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindType1or2UserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:WindType1or2UserDefined.proprietary'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindType1or2UserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindType1or2UserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:WindType1or2UserDefined.proprietary'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'proprietary': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindType1or2UserDefined.proprietary",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( WindTurbineType1or2Dynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!WindType1or2UserDefined.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class WindType1or2UserDefined: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindType1or2UserDefined.attributeHTML(object, cimmenu);
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
export default WindType1or2UserDefined
