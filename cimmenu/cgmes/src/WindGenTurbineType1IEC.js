import templates from "../../templates/index.js"
import WindTurbineType1or2IEC from "./WindTurbineType1or2IEC.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class WindGenTurbineType1IEC extends WindTurbineType1or2IEC {

    static attributeHTML(object, cimmenu, classType="WindGenTurbineType1IEC") {
        let attributeEntries = WindTurbineType1or2IEC.attributeHTML(object, cimmenu, classType);
        if ('cim:WindGenTurbineType1IEC.WindAeroConstIEC' in object) {
            attributeEntries['filledEntries']['cim:WindGenTurbineType1IEC.WindAeroConstIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType1IEC.WindAeroConstIEC'],
                                                   'cim:WindAeroConstIEC',
                                                   'cim:WindGenTurbineType1IEC.WindAeroConstIEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenTurbineType1IEC.WindAeroConstIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType1IEC.WindAeroConstIEC'],
                                                   'cim:WindAeroConstIEC',
                                                   'cim:WindGenTurbineType1IEC.WindAeroConstIEC'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'WindAeroConstIEC': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindGenTurbineType1IEC.WindAeroConstIEC",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( WindTurbineType1or2IEC.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!WindGenTurbineType1IEC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindGenTurbineType1IEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindGenTurbineType1IEC.attributeHTML(object, cimmenu);
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
export default WindGenTurbineType1IEC
