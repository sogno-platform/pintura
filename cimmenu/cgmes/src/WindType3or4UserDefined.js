import templates from "../../templates/index.js"
import WindTurbineType3or4Dynamics from "./WindTurbineType3or4Dynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class WindType3or4UserDefined extends WindTurbineType3or4Dynamics {

    static attributeHTML(object, cimmenu, classType="WindType3or4UserDefined") {
        let attributeEntries = WindTurbineType3or4Dynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:WindType3or4UserDefined.proprietary' in object) {
            attributeEntries['filledEntries']['cim:WindType3or4UserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindType3or4UserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:WindType3or4UserDefined.proprietary'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindType3or4UserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindType3or4UserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:WindType3or4UserDefined.proprietary'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'proprietary': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindType3or4UserDefined.proprietary",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( WindTurbineType3or4Dynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!WindType3or4UserDefined.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindType3or4UserDefined: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindType3or4UserDefined.attributeHTML(object, cimmenu);
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
export default WindType3or4UserDefined
