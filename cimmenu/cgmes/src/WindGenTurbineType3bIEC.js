import templates from "../../templates/index.js"
import WindGenTurbineType3IEC from "./WindGenTurbineType3IEC.js"
import common from "../../src/common.js"

class WindGenTurbineType3bIEC extends WindGenTurbineType3IEC {

    static attributeHTML(object, cimmenu, classType="WindGenTurbineType3bIEC") {
        let attributeEntries = WindGenTurbineType3IEC.attributeHTML(object, cimmenu, classType);
        if ('cim:WindGenTurbineType3bIEC.fducw' in object) {
            attributeEntries['filledEntries']['cim:WindGenTurbineType3bIEC.fducw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3bIEC.fducw'],
                                                   'cim:Simple_Float',
                                                   'cim:WindGenTurbineType3bIEC.fducw'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenTurbineType3bIEC.fducw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3bIEC.fducw'],
                                                   'cim:Simple_Float',
                                                   'cim:WindGenTurbineType3bIEC.fducw'
                                                 );
        }
        if ('cim:WindGenTurbineType3bIEC.tg' in object) {
            attributeEntries['filledEntries']['cim:WindGenTurbineType3bIEC.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3bIEC.tg'],
                                                   'cim:Seconds',
                                                   'cim:WindGenTurbineType3bIEC.tg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenTurbineType3bIEC.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3bIEC.tg'],
                                                   'cim:Seconds',
                                                   'cim:WindGenTurbineType3bIEC.tg'
                                                 );
        }
        if ('cim:WindGenTurbineType3bIEC.two' in object) {
            attributeEntries['filledEntries']['cim:WindGenTurbineType3bIEC.two'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3bIEC.two'],
                                                   'cim:Seconds',
                                                   'cim:WindGenTurbineType3bIEC.two'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenTurbineType3bIEC.two'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3bIEC.two'],
                                                   'cim:Seconds',
                                                   'cim:WindGenTurbineType3bIEC.two'
                                                 );
        }
        if ('cim:WindGenTurbineType3bIEC.mwtcwp' in object) {
            attributeEntries['filledEntries']['cim:WindGenTurbineType3bIEC.mwtcwp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3bIEC.mwtcwp'],
                                                   'cim:Boolean',
                                                   'cim:WindGenTurbineType3bIEC.mwtcwp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenTurbineType3bIEC.mwtcwp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3bIEC.mwtcwp'],
                                                   'cim:Boolean',
                                                   'cim:WindGenTurbineType3bIEC.mwtcwp'
                                                 );
        }
        if ('cim:WindGenTurbineType3bIEC.xs' in object) {
            attributeEntries['filledEntries']['cim:WindGenTurbineType3bIEC.xs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3bIEC.xs'],
                                                   'cim:PU',
                                                   'cim:WindGenTurbineType3bIEC.xs'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenTurbineType3bIEC.xs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenTurbineType3bIEC.xs'],
                                                   'cim:PU',
                                                   'cim:WindGenTurbineType3bIEC.xs'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindGenTurbineType3bIEC.fducw",
            "cim:WindGenTurbineType3bIEC.tg",
            "cim:WindGenTurbineType3bIEC.two",
            "cim:WindGenTurbineType3bIEC.mwtcwp",
            "cim:WindGenTurbineType3bIEC.xs",
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
            if (!WindGenTurbineType3bIEC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindGenTurbineType3bIEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindGenTurbineType3bIEC.attributeHTML(object, cimmenu);
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
export default WindGenTurbineType3bIEC
