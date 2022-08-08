import templates from "../../templates/index.js"
import WindTurbineType1or2IEC from "./WindTurbineType1or2IEC.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class WindGenTurbineType2IEC extends WindTurbineType1or2IEC {

    static attributeHTML(object, cimmenu, classType="WindGenTurbineType2IEC") {
        let attributeEntries = WindTurbineType1or2IEC.attributeHTML(object, cimmenu, classType);
        if ('cim:WindGenTurbineType2IEC.WindContRotorRIEC' in object) {
            attributeEntries['filledEntries']['cim:WindGenTurbineType2IEC.WindContRotorRIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType2IEC.WindContRotorRIEC'],
                                                   'cim:WindContRotorRIEC',
                                                   'cim:WindGenTurbineType2IEC.WindContRotorRIEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenTurbineType2IEC.WindContRotorRIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType2IEC.WindContRotorRIEC'],
                                                   'cim:WindContRotorRIEC',
                                                   'cim:WindGenTurbineType2IEC.WindContRotorRIEC'
                                                 );
        }
        if ('cim:WindGenTurbineType2IEC.WindPitchContEmulIEC' in object) {
            attributeEntries['filledEntries']['cim:WindGenTurbineType2IEC.WindPitchContEmulIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType2IEC.WindPitchContEmulIEC'],
                                                   'cim:WindPitchContEmulIEC',
                                                   'cim:WindGenTurbineType2IEC.WindPitchContEmulIEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenTurbineType2IEC.WindPitchContEmulIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType2IEC.WindPitchContEmulIEC'],
                                                   'cim:WindPitchContEmulIEC',
                                                   'cim:WindGenTurbineType2IEC.WindPitchContEmulIEC'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'WindContRotorRIEC': [CGMESProfile.shortNames.DY, ],
						'WindPitchContEmulIEC': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindGenTurbineType2IEC.WindContRotorRIEC",
            "cim:WindGenTurbineType2IEC.WindPitchContEmulIEC",
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
            if (!WindGenTurbineType2IEC.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class WindGenTurbineType2IEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindGenTurbineType2IEC.attributeHTML(object, cimmenu);
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
export default WindGenTurbineType2IEC
