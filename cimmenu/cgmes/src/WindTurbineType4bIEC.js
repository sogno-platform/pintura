import templates from "../../templates/index.js"
import WindGenType4IEC from "./WindGenType4IEC.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class WindTurbineType4bIEC extends WindGenType4IEC {

    static attributeHTML(object, cimmenu, classType="WindTurbineType4bIEC") {
        let attributeEntries = WindGenType4IEC.attributeHTML(object, cimmenu, classType);
        if ('cim:WindTurbineType4bIEC.WindContPType4bIEC' in object) {
            attributeEntries['filledEntries']['cim:WindTurbineType4bIEC.WindContPType4bIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType4bIEC.WindContPType4bIEC'],
                                                   'cim:WindContPType4bIEC',
                                                   'cim:WindTurbineType4bIEC.WindContPType4bIEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindTurbineType4bIEC.WindContPType4bIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType4bIEC.WindContPType4bIEC'],
                                                   'cim:WindContPType4bIEC',
                                                   'cim:WindTurbineType4bIEC.WindContPType4bIEC'
                                                 );
        }
        if ('cim:WindTurbineType4bIEC.WindMechIEC' in object) {
            attributeEntries['filledEntries']['cim:WindTurbineType4bIEC.WindMechIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType4bIEC.WindMechIEC'],
                                                   'cim:WindMechIEC',
                                                   'cim:WindTurbineType4bIEC.WindMechIEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindTurbineType4bIEC.WindMechIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType4bIEC.WindMechIEC'],
                                                   'cim:WindMechIEC',
                                                   'cim:WindTurbineType4bIEC.WindMechIEC'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'WindContPType4bIEC': [CGMESProfile.shortNames.DY, ],
						'WindMechIEC': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindTurbineType4bIEC.WindContPType4bIEC",
            "cim:WindTurbineType4bIEC.WindMechIEC",
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
            if (!WindTurbineType4bIEC.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class WindTurbineType4bIEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindTurbineType4bIEC.attributeHTML(object, cimmenu);
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
export default WindTurbineType4bIEC
