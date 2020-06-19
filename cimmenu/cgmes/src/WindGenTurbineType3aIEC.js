import templates from "../../templates/index.js"
import WindGenTurbineType3IEC from "./WindGenTurbineType3IEC.js"
import common from "../../src/common.js"

class WindGenTurbineType3aIEC extends WindGenTurbineType3IEC {

    static attributeHTML(object, cimmenu, classType="WindGenTurbineType3aIEC") {
        let attributeEntries = WindGenTurbineType3IEC.attributeHTML(object, cimmenu, classType);
        if ('cim:WindGenTurbineType3aIEC.kpc' in object) {
            attributeEntries['filledEntries']['cim:WindGenTurbineType3aIEC.kpc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3aIEC.kpc'],
                                                   'cim:Simple_Float',
                                                   'cim:WindGenTurbineType3aIEC.kpc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenTurbineType3aIEC.kpc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3aIEC.kpc'],
                                                   'cim:Simple_Float',
                                                   'cim:WindGenTurbineType3aIEC.kpc'
                                                 );
        }
        if ('cim:WindGenTurbineType3aIEC.xs' in object) {
            attributeEntries['filledEntries']['cim:WindGenTurbineType3aIEC.xs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3aIEC.xs'],
                                                   'cim:PU',
                                                   'cim:WindGenTurbineType3aIEC.xs'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenTurbineType3aIEC.xs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3aIEC.xs'],
                                                   'cim:PU',
                                                   'cim:WindGenTurbineType3aIEC.xs'
                                                 );
        }
        if ('cim:WindGenTurbineType3aIEC.tic' in object) {
            attributeEntries['filledEntries']['cim:WindGenTurbineType3aIEC.tic'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3aIEC.tic'],
                                                   'cim:Seconds',
                                                   'cim:WindGenTurbineType3aIEC.tic'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenTurbineType3aIEC.tic'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3aIEC.tic'],
                                                   'cim:Seconds',
                                                   'cim:WindGenTurbineType3aIEC.tic'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindGenTurbineType3aIEC.kpc",
            "cim:WindGenTurbineType3aIEC.xs",
            "cim:WindGenTurbineType3aIEC.tic",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( WindGenTurbineType3IEC.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!WindGenTurbineType3aIEC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindGenTurbineType3aIEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindGenTurbineType3aIEC.attributeHTML(object, cimmenu);
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
export default WindGenTurbineType3aIEC
