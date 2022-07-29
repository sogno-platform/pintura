import templates from "../../templates/index.js"
import DynamicsFunctionBlock from "./DynamicsFunctionBlock.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class WindPlantDynamics extends DynamicsFunctionBlock {

    static attributeHTML(object, cimmenu, classType="WindPlantDynamics") {
        let attributeEntries = DynamicsFunctionBlock.attributeHTML(object, cimmenu, classType);
        if ('cim:WindPlantDynamics.RemoteInputSignal' in object) {
            attributeEntries['filledEntries']['cim:WindPlantDynamics.RemoteInputSignal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantDynamics.RemoteInputSignal'],
                                                   'cim:RemoteInputSignal',
                                                   'cim:WindPlantDynamics.RemoteInputSignal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantDynamics.RemoteInputSignal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantDynamics.RemoteInputSignal'],
                                                   'cim:RemoteInputSignal',
                                                   'cim:WindPlantDynamics.RemoteInputSignal'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'RemoteInputSignal': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindPlantDynamics.RemoteInputSignal",
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
            if (!WindPlantDynamics.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindPlantDynamics: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindPlantDynamics.attributeHTML(object, cimmenu);
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
        "WindPlantUserDefined",
        "WindPlantIEC",
        ];
        return subClasses;
    }
};
export default WindPlantDynamics
