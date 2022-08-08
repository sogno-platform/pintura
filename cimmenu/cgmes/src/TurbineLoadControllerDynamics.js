import templates from "../../templates/index.js"
import DynamicsFunctionBlock from "./DynamicsFunctionBlock.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class TurbineLoadControllerDynamics extends DynamicsFunctionBlock {

    static attributeHTML(object, cimmenu, classType="TurbineLoadControllerDynamics") {
        let attributeEntries = DynamicsFunctionBlock.attributeHTML(object, cimmenu, classType);
        if ('cim:TurbineLoadControllerDynamics.TurbineGovernorDynamics' in object) {
            attributeEntries['filledEntries']['cim:TurbineLoadControllerDynamics.TurbineGovernorDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbineLoadControllerDynamics.TurbineGovernorDynamics'],
                                                   'cim:TurbineGovernorDynamics',
                                                   'cim:TurbineLoadControllerDynamics.TurbineGovernorDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TurbineLoadControllerDynamics.TurbineGovernorDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbineLoadControllerDynamics.TurbineGovernorDynamics'],
                                                   'cim:TurbineGovernorDynamics',
                                                   'cim:TurbineLoadControllerDynamics.TurbineGovernorDynamics'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'TurbineGovernorDynamics': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:TurbineLoadControllerDynamics.TurbineGovernorDynamics",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( DynamicsFunctionBlock.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!TurbineLoadControllerDynamics.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class TurbineLoadControllerDynamics: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = TurbineLoadControllerDynamics.attributeHTML(object, cimmenu);
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
        "TurbineLoadControllerUserDefined",
        "TurbLCFB1",
        ];
        return subClasses;
    }
};
export default TurbineLoadControllerDynamics
