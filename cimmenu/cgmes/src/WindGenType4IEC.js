import templates from "../../templates/index.js"
import WindTurbineType3or4IEC from "./WindTurbineType3or4IEC.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class WindGenType4IEC extends WindTurbineType3or4IEC {

    static attributeHTML(object, cimmenu, classType="WindGenType4IEC") {
        let attributeEntries = WindTurbineType3or4IEC.attributeHTML(object, cimmenu, classType);
        if ('cim:WindGenType4IEC.dipmax' in object) {
            attributeEntries['filledEntries']['cim:WindGenType4IEC.dipmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenType4IEC.dipmax'],
                                                   'cim:PU',
                                                   'cim:WindGenType4IEC.dipmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenType4IEC.dipmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenType4IEC.dipmax'],
                                                   'cim:PU',
                                                   'cim:WindGenType4IEC.dipmax'
                                                 );
        }
        if ('cim:WindGenType4IEC.diqmin' in object) {
            attributeEntries['filledEntries']['cim:WindGenType4IEC.diqmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenType4IEC.diqmin'],
                                                   'cim:PU',
                                                   'cim:WindGenType4IEC.diqmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenType4IEC.diqmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenType4IEC.diqmin'],
                                                   'cim:PU',
                                                   'cim:WindGenType4IEC.diqmin'
                                                 );
        }
        if ('cim:WindGenType4IEC.diqmax' in object) {
            attributeEntries['filledEntries']['cim:WindGenType4IEC.diqmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenType4IEC.diqmax'],
                                                   'cim:PU',
                                                   'cim:WindGenType4IEC.diqmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenType4IEC.diqmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenType4IEC.diqmax'],
                                                   'cim:PU',
                                                   'cim:WindGenType4IEC.diqmax'
                                                 );
        }
        if ('cim:WindGenType4IEC.tg' in object) {
            attributeEntries['filledEntries']['cim:WindGenType4IEC.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenType4IEC.tg'],
                                                   'cim:Seconds',
                                                   'cim:WindGenType4IEC.tg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGenType4IEC.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGenType4IEC.tg'],
                                                   'cim:Seconds',
                                                   'cim:WindGenType4IEC.tg'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'dipmax': [CGMESProfile.shortNames.DY, ],
						'diqmin': [CGMESProfile.shortNames.DY, ],
						'diqmax': [CGMESProfile.shortNames.DY, ],
						'tg': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindGenType4IEC.dipmax",
            "cim:WindGenType4IEC.diqmin",
            "cim:WindGenType4IEC.diqmax",
            "cim:WindGenType4IEC.tg",
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
            if (!WindGenType4IEC.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class WindGenType4IEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindGenType4IEC.attributeHTML(object, cimmenu);
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
        "WindTurbineType4aIEC",
        "WindTurbineType4bIEC",
        ];
        return subClasses;
    }
};
export default WindGenType4IEC
