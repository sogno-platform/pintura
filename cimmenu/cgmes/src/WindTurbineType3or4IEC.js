import templates from "../../templates/index.js"
import WindTurbineType3or4Dynamics from "./WindTurbineType3or4Dynamics.js"
import common from "../../src/common.js"

class WindTurbineType3or4IEC extends WindTurbineType3or4Dynamics {

    static attributeHTML(object, cimmenu, classType="WindTurbineType3or4IEC") {
        let attributeEntries = WindTurbineType3or4Dynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:WindTurbineType3or4IEC.WindContCurrLimIEC' in object) {
            attributeEntries['filledEntries']['cim:WindTurbineType3or4IEC.WindContCurrLimIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType3or4IEC.WindContCurrLimIEC'],
                                                   'cim:WindContCurrLimIEC',
                                                   'cim:WindTurbineType3or4IEC.WindContCurrLimIEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindTurbineType3or4IEC.WindContCurrLimIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType3or4IEC.WindContCurrLimIEC'],
                                                   'cim:WindContCurrLimIEC',
                                                   'cim:WindTurbineType3or4IEC.WindContCurrLimIEC'
                                                 );
        }
        if ('cim:WindTurbineType3or4IEC.WIndContQIEC' in object) {
            attributeEntries['filledEntries']['cim:WindTurbineType3or4IEC.WIndContQIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType3or4IEC.WIndContQIEC'],
                                                   'cim:WindContQIEC',
                                                   'cim:WindTurbineType3or4IEC.WIndContQIEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindTurbineType3or4IEC.WIndContQIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType3or4IEC.WIndContQIEC'],
                                                   'cim:WindContQIEC',
                                                   'cim:WindTurbineType3or4IEC.WIndContQIEC'
                                                 );
        }
        if ('cim:WindTurbineType3or4IEC.WindProtectionIEC' in object) {
            attributeEntries['filledEntries']['cim:WindTurbineType3or4IEC.WindProtectionIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType3or4IEC.WindProtectionIEC'],
                                                   'cim:WindProtectionIEC',
                                                   'cim:WindTurbineType3or4IEC.WindProtectionIEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindTurbineType3or4IEC.WindProtectionIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType3or4IEC.WindProtectionIEC'],
                                                   'cim:WindProtectionIEC',
                                                   'cim:WindTurbineType3or4IEC.WindProtectionIEC'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindTurbineType3or4IEC.WindContCurrLimIEC",
            "cim:WindTurbineType3or4IEC.WIndContQIEC",
            "cim:WindTurbineType3or4IEC.WindProtectionIEC",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( WindTurbineType3or4Dynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!WindTurbineType3or4IEC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindTurbineType3or4IEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindTurbineType3or4IEC.attributeHTML(object, cimmenu);
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
        "WindGenTurbineType3IEC",
        "WindGenTurbineType3aIEC",
        "WindGenTurbineType3bIEC",
        "WindGenType4IEC",
        "WindTurbineType4aIEC",
        "WindTurbineType4bIEC",
        ];
        return subClasses;
    }
};
export default WindTurbineType3or4IEC
