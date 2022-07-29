import templates from "../../templates/index.js"
import DynamicsFunctionBlock from "./DynamicsFunctionBlock.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class VoltageAdjusterDynamics extends DynamicsFunctionBlock {

    static attributeHTML(object, cimmenu, classType="VoltageAdjusterDynamics") {
        let attributeEntries = DynamicsFunctionBlock.attributeHTML(object, cimmenu, classType);
        if ('cim:VoltageAdjusterDynamics.PFVArControllerType1Dynamics' in object) {
            attributeEntries['filledEntries']['cim:VoltageAdjusterDynamics.PFVArControllerType1Dynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltageAdjusterDynamics.PFVArControllerType1Dynamics'],
                                                   'cim:PFVArControllerType1Dynamics',
                                                   'cim:VoltageAdjusterDynamics.PFVArControllerType1Dynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VoltageAdjusterDynamics.PFVArControllerType1Dynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltageAdjusterDynamics.PFVArControllerType1Dynamics'],
                                                   'cim:PFVArControllerType1Dynamics',
                                                   'cim:VoltageAdjusterDynamics.PFVArControllerType1Dynamics'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'PFVArControllerType1Dynamics': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:VoltageAdjusterDynamics.PFVArControllerType1Dynamics",
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
            if (!VoltageAdjusterDynamics.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class VoltageAdjusterDynamics: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = VoltageAdjusterDynamics.attributeHTML(object, cimmenu);
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
        "VoltageAdjusterUserDefined",
        "VAdjIEEE",
        ];
        return subClasses;
    }
};
export default VoltageAdjusterDynamics
