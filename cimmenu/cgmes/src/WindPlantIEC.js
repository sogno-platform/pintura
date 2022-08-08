import templates from "../../templates/index.js"
import WindPlantDynamics from "./WindPlantDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class WindPlantIEC extends WindPlantDynamics {

    static attributeHTML(object, cimmenu, classType="WindPlantIEC") {
        let attributeEntries = WindPlantDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:WindPlantIEC.WindPlantFreqPcontrolIEC' in object) {
            attributeEntries['filledEntries']['cim:WindPlantIEC.WindPlantFreqPcontrolIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantIEC.WindPlantFreqPcontrolIEC'],
                                                   'cim:WindPlantFreqPcontrolIEC',
                                                   'cim:WindPlantIEC.WindPlantFreqPcontrolIEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantIEC.WindPlantFreqPcontrolIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantIEC.WindPlantFreqPcontrolIEC'],
                                                   'cim:WindPlantFreqPcontrolIEC',
                                                   'cim:WindPlantIEC.WindPlantFreqPcontrolIEC'
                                                 );
        }
        if ('cim:WindPlantIEC.WindPlantReactiveControlIEC' in object) {
            attributeEntries['filledEntries']['cim:WindPlantIEC.WindPlantReactiveControlIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantIEC.WindPlantReactiveControlIEC'],
                                                   'cim:WindPlantReactiveControlIEC',
                                                   'cim:WindPlantIEC.WindPlantReactiveControlIEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantIEC.WindPlantReactiveControlIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantIEC.WindPlantReactiveControlIEC'],
                                                   'cim:WindPlantReactiveControlIEC',
                                                   'cim:WindPlantIEC.WindPlantReactiveControlIEC'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'WindPlantFreqPcontrolIEC': [CGMESProfile.shortNames.DY, ],
						'WindPlantReactiveControlIEC': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindPlantIEC.WindPlantFreqPcontrolIEC",
            "cim:WindPlantIEC.WindPlantReactiveControlIEC",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( WindPlantDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!WindPlantIEC.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class WindPlantIEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindPlantIEC.attributeHTML(object, cimmenu);
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
export default WindPlantIEC
