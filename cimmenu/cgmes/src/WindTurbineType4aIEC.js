import templates from "../../templates/index.js"
import WindGenType4IEC from "./WindGenType4IEC.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class WindTurbineType4aIEC extends WindGenType4IEC {

    static attributeHTML(object, cimmenu, classType="WindTurbineType4aIEC") {
        let attributeEntries = WindGenType4IEC.attributeHTML(object, cimmenu, classType);
        if ('cim:WindTurbineType4aIEC.WindContPType4aIEC' in object) {
            attributeEntries['filledEntries']['cim:WindTurbineType4aIEC.WindContPType4aIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType4aIEC.WindContPType4aIEC'],
                                                   'cim:WindContPType4aIEC',
                                                   'cim:WindTurbineType4aIEC.WindContPType4aIEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindTurbineType4aIEC.WindContPType4aIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType4aIEC.WindContPType4aIEC'],
                                                   'cim:WindContPType4aIEC',
                                                   'cim:WindTurbineType4aIEC.WindContPType4aIEC'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'WindContPType4aIEC': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindTurbineType4aIEC.WindContPType4aIEC",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( WindGenType4IEC.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!WindTurbineType4aIEC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindTurbineType4aIEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindTurbineType4aIEC.attributeHTML(object, cimmenu);
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
export default WindTurbineType4aIEC
