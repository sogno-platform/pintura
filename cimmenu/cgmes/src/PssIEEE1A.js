import templates from "../../templates/index.js"
import PowerSystemStabilizerDynamics from "./PowerSystemStabilizerDynamics.js"
import common from "../../src/common.js"

class PssIEEE1A extends PowerSystemStabilizerDynamics {

    static attributeHTML(object, cimmenu, classType="PssIEEE1A") {
        let attributeEntries = PowerSystemStabilizerDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:PssIEEE1A.inputSignalType' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE1A.inputSignalType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.inputSignalType'],
                                                   'cim:InputSignalKind',
                                                   'cim:PssIEEE1A.inputSignalType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE1A.inputSignalType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.inputSignalType'],
                                                   'cim:InputSignalKind',
                                                   'cim:PssIEEE1A.inputSignalType'
                                                 );
        }
        if ('cim:PssIEEE1A.a1' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE1A.a1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.a1'],
                                                   'cim:PU',
                                                   'cim:PssIEEE1A.a1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE1A.a1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.a1'],
                                                   'cim:PU',
                                                   'cim:PssIEEE1A.a1'
                                                 );
        }
        if ('cim:PssIEEE1A.a2' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE1A.a2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.a2'],
                                                   'cim:PU',
                                                   'cim:PssIEEE1A.a2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE1A.a2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.a2'],
                                                   'cim:PU',
                                                   'cim:PssIEEE1A.a2'
                                                 );
        }
        if ('cim:PssIEEE1A.t1' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE1A.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.t1'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE1A.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE1A.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.t1'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE1A.t1'
                                                 );
        }
        if ('cim:PssIEEE1A.t2' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE1A.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.t2'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE1A.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE1A.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.t2'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE1A.t2'
                                                 );
        }
        if ('cim:PssIEEE1A.t3' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE1A.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.t3'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE1A.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE1A.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.t3'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE1A.t3'
                                                 );
        }
        if ('cim:PssIEEE1A.t4' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE1A.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.t4'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE1A.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE1A.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.t4'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE1A.t4'
                                                 );
        }
        if ('cim:PssIEEE1A.t5' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE1A.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.t5'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE1A.t5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE1A.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.t5'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE1A.t5'
                                                 );
        }
        if ('cim:PssIEEE1A.t6' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE1A.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.t6'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE1A.t6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE1A.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.t6'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE1A.t6'
                                                 );
        }
        if ('cim:PssIEEE1A.ks' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE1A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.ks'],
                                                   'cim:PU',
                                                   'cim:PssIEEE1A.ks'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE1A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.ks'],
                                                   'cim:PU',
                                                   'cim:PssIEEE1A.ks'
                                                 );
        }
        if ('cim:PssIEEE1A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE1A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.vrmax'],
                                                   'cim:PU',
                                                   'cim:PssIEEE1A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE1A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.vrmax'],
                                                   'cim:PU',
                                                   'cim:PssIEEE1A.vrmax'
                                                 );
        }
        if ('cim:PssIEEE1A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE1A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.vrmin'],
                                                   'cim:PU',
                                                   'cim:PssIEEE1A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE1A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE1A.vrmin'],
                                                   'cim:PU',
                                                   'cim:PssIEEE1A.vrmin'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PssIEEE1A.inputSignalType",
            "cim:PssIEEE1A.a1",
            "cim:PssIEEE1A.a2",
            "cim:PssIEEE1A.t1",
            "cim:PssIEEE1A.t2",
            "cim:PssIEEE1A.t3",
            "cim:PssIEEE1A.t4",
            "cim:PssIEEE1A.t5",
            "cim:PssIEEE1A.t6",
            "cim:PssIEEE1A.ks",
            "cim:PssIEEE1A.vrmax",
            "cim:PssIEEE1A.vrmin",
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
            if (!PssIEEE1A.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PssIEEE1A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PssIEEE1A.attributeHTML(object, cimmenu);
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
export default PssIEEE1A
