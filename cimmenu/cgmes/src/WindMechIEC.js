import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class WindMechIEC extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="WindMechIEC") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:WindMechIEC.cdrt' in object) {
            attributeEntries['filledEntries']['cim:WindMechIEC.cdrt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindMechIEC.cdrt'],
                                                   'cim:PU',
                                                   'cim:WindMechIEC.cdrt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindMechIEC.cdrt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindMechIEC.cdrt'],
                                                   'cim:PU',
                                                   'cim:WindMechIEC.cdrt'
                                                 );
        }
        if ('cim:WindMechIEC.hgen' in object) {
            attributeEntries['filledEntries']['cim:WindMechIEC.hgen'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindMechIEC.hgen'],
                                                   'cim:Seconds',
                                                   'cim:WindMechIEC.hgen'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindMechIEC.hgen'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindMechIEC.hgen'],
                                                   'cim:Seconds',
                                                   'cim:WindMechIEC.hgen'
                                                 );
        }
        if ('cim:WindMechIEC.hwtr' in object) {
            attributeEntries['filledEntries']['cim:WindMechIEC.hwtr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindMechIEC.hwtr'],
                                                   'cim:Seconds',
                                                   'cim:WindMechIEC.hwtr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindMechIEC.hwtr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindMechIEC.hwtr'],
                                                   'cim:Seconds',
                                                   'cim:WindMechIEC.hwtr'
                                                 );
        }
        if ('cim:WindMechIEC.kdrt' in object) {
            attributeEntries['filledEntries']['cim:WindMechIEC.kdrt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindMechIEC.kdrt'],
                                                   'cim:PU',
                                                   'cim:WindMechIEC.kdrt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindMechIEC.kdrt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindMechIEC.kdrt'],
                                                   'cim:PU',
                                                   'cim:WindMechIEC.kdrt'
                                                 );
        }
        if ('cim:WindMechIEC.WindTurbineType1or2IEC' in object) {
            attributeEntries['filledEntries']['cim:WindMechIEC.WindTurbineType1or2IEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindMechIEC.WindTurbineType1or2IEC'],
                                                   'cim:WindTurbineType1or2IEC',
                                                   'cim:WindMechIEC.WindTurbineType1or2IEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindMechIEC.WindTurbineType1or2IEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindMechIEC.WindTurbineType1or2IEC'],
                                                   'cim:WindTurbineType1or2IEC',
                                                   'cim:WindMechIEC.WindTurbineType1or2IEC'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindMechIEC.cdrt",
            "cim:WindMechIEC.hgen",
            "cim:WindMechIEC.hwtr",
            "cim:WindMechIEC.kdrt",
            "cim:WindMechIEC.WindTurbineType1or2IEC",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( IdentifiedObject.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!WindMechIEC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindMechIEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindMechIEC.attributeHTML(object, cimmenu);
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
export default WindMechIEC
