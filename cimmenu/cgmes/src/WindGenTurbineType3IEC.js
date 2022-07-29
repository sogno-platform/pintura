import templates from "../../templates/index.js"
import WindTurbineType3or4IEC from "./WindTurbineType3or4IEC.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class WindGenTurbineType3IEC extends WindTurbineType3or4IEC {

    static attributeHTML(object, cimmenu, classType="WindGenTurbineType3IEC") {
        let attributeEntries = WindTurbineType3or4IEC.attributeHTML(object, cimmenu, classType);
        if ('cim:WindGenTurbineType3IEC.WindAeroLinearIEC' in object) {
            attributeEntries['filledEntries']['cim:WindGenTurbineType3IEC.WindAeroLinearIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3IEC.WindAeroLinearIEC'],
                                                   'cim:WindAeroLinearIEC',
                                                   'cim:WindGenTurbineType3IEC.WindAeroLinearIEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenTurbineType3IEC.WindAeroLinearIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3IEC.WindAeroLinearIEC'],
                                                   'cim:WindAeroLinearIEC',
                                                   'cim:WindGenTurbineType3IEC.WindAeroLinearIEC'
                                                 );
        }
        if ('cim:WindGenTurbineType3IEC.WindContPitchAngleIEC' in object) {
            attributeEntries['filledEntries']['cim:WindGenTurbineType3IEC.WindContPitchAngleIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3IEC.WindContPitchAngleIEC'],
                                                   'cim:WindContPitchAngleIEC',
                                                   'cim:WindGenTurbineType3IEC.WindContPitchAngleIEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenTurbineType3IEC.WindContPitchAngleIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3IEC.WindContPitchAngleIEC'],
                                                   'cim:WindContPitchAngleIEC',
                                                   'cim:WindGenTurbineType3IEC.WindContPitchAngleIEC'
                                                 );
        }
        if ('cim:WindGenTurbineType3IEC.WindContPType3IEC' in object) {
            attributeEntries['filledEntries']['cim:WindGenTurbineType3IEC.WindContPType3IEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3IEC.WindContPType3IEC'],
                                                   'cim:WindContPType3IEC',
                                                   'cim:WindGenTurbineType3IEC.WindContPType3IEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenTurbineType3IEC.WindContPType3IEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3IEC.WindContPType3IEC'],
                                                   'cim:WindContPType3IEC',
                                                   'cim:WindGenTurbineType3IEC.WindContPType3IEC'
                                                 );
        }
        if ('cim:WindGenTurbineType3IEC.dipmax' in object) {
            attributeEntries['filledEntries']['cim:WindGenTurbineType3IEC.dipmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3IEC.dipmax'],
                                                   'cim:PU',
                                                   'cim:WindGenTurbineType3IEC.dipmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenTurbineType3IEC.dipmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3IEC.dipmax'],
                                                   'cim:PU',
                                                   'cim:WindGenTurbineType3IEC.dipmax'
                                                 );
        }
        if ('cim:WindGenTurbineType3IEC.diqmax' in object) {
            attributeEntries['filledEntries']['cim:WindGenTurbineType3IEC.diqmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3IEC.diqmax'],
                                                   'cim:PU',
                                                   'cim:WindGenTurbineType3IEC.diqmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenTurbineType3IEC.diqmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3IEC.diqmax'],
                                                   'cim:PU',
                                                   'cim:WindGenTurbineType3IEC.diqmax'
                                                 );
        }
        if ('cim:WindGenTurbineType3IEC.WindMechIEC' in object) {
            attributeEntries['filledEntries']['cim:WindGenTurbineType3IEC.WindMechIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3IEC.WindMechIEC'],
                                                   'cim:WindMechIEC',
                                                   'cim:WindGenTurbineType3IEC.WindMechIEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenTurbineType3IEC.WindMechIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3IEC.WindMechIEC'],
                                                   'cim:WindMechIEC',
                                                   'cim:WindGenTurbineType3IEC.WindMechIEC'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'WindAeroLinearIEC': [CGMESProfile.shortNames.DY, ],
						'WindContPitchAngleIEC': [CGMESProfile.shortNames.DY, ],
						'WindContPType3IEC': [CGMESProfile.shortNames.DY, ],
						'dipmax': [CGMESProfile.shortNames.DY, ],
						'diqmax': [CGMESProfile.shortNames.DY, ],
						'WindMechIEC': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindGenTurbineType3IEC.WindAeroLinearIEC",
            "cim:WindGenTurbineType3IEC.WindContPitchAngleIEC",
            "cim:WindGenTurbineType3IEC.WindContPType3IEC",
            "cim:WindGenTurbineType3IEC.dipmax",
            "cim:WindGenTurbineType3IEC.diqmax",
            "cim:WindGenTurbineType3IEC.WindMechIEC",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( WindTurbineType3or4IEC.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!WindGenTurbineType3IEC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindGenTurbineType3IEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindGenTurbineType3IEC.attributeHTML(object, cimmenu);
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
        "WindGenTurbineType3aIEC",
        "WindGenTurbineType3bIEC",
        ];
        return subClasses;
    }
};
export default WindGenTurbineType3IEC
