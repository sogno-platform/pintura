import templates from "../../templates/index.js"
import WindTurbineType1or2Dynamics from "./WindTurbineType1or2Dynamics.js"
import common from "../../src/common.js"

class WindTurbineType1or2IEC extends WindTurbineType1or2Dynamics {

    static attributeHTML(object, cimmenu, classType="WindTurbineType1or2IEC") {
        let attributeEntries = WindTurbineType1or2Dynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:WindTurbineType1or2IEC.WindMechIEC' in object) {
            attributeEntries['filledEntries']['cim:WindTurbineType1or2IEC.WindMechIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType1or2IEC.WindMechIEC'],
                                                   'cim:WindMechIEC',
                                                   'cim:WindTurbineType1or2IEC.WindMechIEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindTurbineType1or2IEC.WindMechIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType1or2IEC.WindMechIEC'],
                                                   'cim:WindMechIEC',
                                                   'cim:WindTurbineType1or2IEC.WindMechIEC'
                                                 );
        }
        if ('cim:WindTurbineType1or2IEC.WindProtectionIEC' in object) {
            attributeEntries['filledEntries']['cim:WindTurbineType1or2IEC.WindProtectionIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType1or2IEC.WindProtectionIEC'],
                                                   'cim:WindProtectionIEC',
                                                   'cim:WindTurbineType1or2IEC.WindProtectionIEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindTurbineType1or2IEC.WindProtectionIEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindTurbineType1or2IEC.WindProtectionIEC'],
                                                   'cim:WindProtectionIEC',
                                                   'cim:WindTurbineType1or2IEC.WindProtectionIEC'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindTurbineType1or2IEC.WindMechIEC",
            "cim:WindTurbineType1or2IEC.WindProtectionIEC",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( WindTurbineType1or2Dynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!WindTurbineType1or2IEC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindTurbineType1or2IEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindTurbineType1or2IEC.attributeHTML(object, cimmenu);
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
        "WindGenTurbineType1IEC",
        "WindGenTurbineType2IEC",
        ];
        return subClasses;
    }
};
export default WindTurbineType1or2IEC
