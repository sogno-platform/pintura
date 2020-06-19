import templates from "../../templates/index.js"
import PowerSystemStabilizerDynamics from "./PowerSystemStabilizerDynamics.js"
import common from "../../src/common.js"

class Pss1 extends PowerSystemStabilizerDynamics {

    static attributeHTML(object, cimmenu, classType="Pss1") {
        let attributeEntries = PowerSystemStabilizerDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:Pss1.kw' in object) {
            attributeEntries['filledEntries']['cim:Pss1.kw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.kw'],
                                                   'cim:Simple_Float',
                                                   'cim:Pss1.kw'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1.kw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.kw'],
                                                   'cim:Simple_Float',
                                                   'cim:Pss1.kw'
                                                 );
        }
        if ('cim:Pss1.kf' in object) {
            attributeEntries['filledEntries']['cim:Pss1.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.kf'],
                                                   'cim:Simple_Float',
                                                   'cim:Pss1.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.kf'],
                                                   'cim:Simple_Float',
                                                   'cim:Pss1.kf'
                                                 );
        }
        if ('cim:Pss1.kpe' in object) {
            attributeEntries['filledEntries']['cim:Pss1.kpe'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.kpe'],
                                                   'cim:Simple_Float',
                                                   'cim:Pss1.kpe'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1.kpe'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.kpe'],
                                                   'cim:Simple_Float',
                                                   'cim:Pss1.kpe'
                                                 );
        }
        if ('cim:Pss1.pmin' in object) {
            attributeEntries['filledEntries']['cim:Pss1.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.pmin'],
                                                   'cim:PU',
                                                   'cim:Pss1.pmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.pmin'],
                                                   'cim:PU',
                                                   'cim:Pss1.pmin'
                                                 );
        }
        if ('cim:Pss1.ks' in object) {
            attributeEntries['filledEntries']['cim:Pss1.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.ks'],
                                                   'cim:Simple_Float',
                                                   'cim:Pss1.ks'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.ks'],
                                                   'cim:Simple_Float',
                                                   'cim:Pss1.ks'
                                                 );
        }
        if ('cim:Pss1.vsmn' in object) {
            attributeEntries['filledEntries']['cim:Pss1.vsmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.vsmn'],
                                                   'cim:PU',
                                                   'cim:Pss1.vsmn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1.vsmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.vsmn'],
                                                   'cim:PU',
                                                   'cim:Pss1.vsmn'
                                                 );
        }
        if ('cim:Pss1.vsmx' in object) {
            attributeEntries['filledEntries']['cim:Pss1.vsmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.vsmx'],
                                                   'cim:PU',
                                                   'cim:Pss1.vsmx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1.vsmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.vsmx'],
                                                   'cim:PU',
                                                   'cim:Pss1.vsmx'
                                                 );
        }
        if ('cim:Pss1.tpe' in object) {
            attributeEntries['filledEntries']['cim:Pss1.tpe'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.tpe'],
                                                   'cim:Seconds',
                                                   'cim:Pss1.tpe'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1.tpe'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.tpe'],
                                                   'cim:Seconds',
                                                   'cim:Pss1.tpe'
                                                 );
        }
        if ('cim:Pss1.t5' in object) {
            attributeEntries['filledEntries']['cim:Pss1.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.t5'],
                                                   'cim:Seconds',
                                                   'cim:Pss1.t5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.t5'],
                                                   'cim:Seconds',
                                                   'cim:Pss1.t5'
                                                 );
        }
        if ('cim:Pss1.t6' in object) {
            attributeEntries['filledEntries']['cim:Pss1.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.t6'],
                                                   'cim:Seconds',
                                                   'cim:Pss1.t6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.t6'],
                                                   'cim:Seconds',
                                                   'cim:Pss1.t6'
                                                 );
        }
        if ('cim:Pss1.t7' in object) {
            attributeEntries['filledEntries']['cim:Pss1.t7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.t7'],
                                                   'cim:Seconds',
                                                   'cim:Pss1.t7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1.t7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.t7'],
                                                   'cim:Seconds',
                                                   'cim:Pss1.t7'
                                                 );
        }
        if ('cim:Pss1.t8' in object) {
            attributeEntries['filledEntries']['cim:Pss1.t8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.t8'],
                                                   'cim:Seconds',
                                                   'cim:Pss1.t8'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1.t8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.t8'],
                                                   'cim:Seconds',
                                                   'cim:Pss1.t8'
                                                 );
        }
        if ('cim:Pss1.t9' in object) {
            attributeEntries['filledEntries']['cim:Pss1.t9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.t9'],
                                                   'cim:Seconds',
                                                   'cim:Pss1.t9'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1.t9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.t9'],
                                                   'cim:Seconds',
                                                   'cim:Pss1.t9'
                                                 );
        }
        if ('cim:Pss1.t10' in object) {
            attributeEntries['filledEntries']['cim:Pss1.t10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.t10'],
                                                   'cim:Seconds',
                                                   'cim:Pss1.t10'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1.t10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.t10'],
                                                   'cim:Seconds',
                                                   'cim:Pss1.t10'
                                                 );
        }
        if ('cim:Pss1.vadat' in object) {
            attributeEntries['filledEntries']['cim:Pss1.vadat'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.vadat'],
                                                   'cim:Boolean',
                                                   'cim:Pss1.vadat'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1.vadat'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1.vadat'],
                                                   'cim:Boolean',
                                                   'cim:Pss1.vadat'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Pss1.kw",
            "cim:Pss1.kf",
            "cim:Pss1.kpe",
            "cim:Pss1.pmin",
            "cim:Pss1.ks",
            "cim:Pss1.vsmn",
            "cim:Pss1.vsmx",
            "cim:Pss1.tpe",
            "cim:Pss1.t5",
            "cim:Pss1.t6",
            "cim:Pss1.t7",
            "cim:Pss1.t8",
            "cim:Pss1.t9",
            "cim:Pss1.t10",
            "cim:Pss1.vadat",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( PowerSystemStabilizerDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!Pss1.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class Pss1: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Pss1.attributeHTML(object, cimmenu);
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
export default Pss1
