import templates from "../../templates/index.js"
import PowerSystemStabilizerDynamics from "./PowerSystemStabilizerDynamics.js"
import common from "../../src/common.js"

class PssWECC extends PowerSystemStabilizerDynamics {

    static attributeHTML(object, cimmenu, classType="PssWECC") {
        let attributeEntries = PowerSystemStabilizerDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:PssWECC.inputSignal1Type' in object) {
            attributeEntries['filledEntries']['cim:PssWECC.inputSignal1Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.inputSignal1Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:PssWECC.inputSignal1Type'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssWECC.inputSignal1Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.inputSignal1Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:PssWECC.inputSignal1Type'
                                                 );
        }
        if ('cim:PssWECC.inputSignal2Type' in object) {
            attributeEntries['filledEntries']['cim:PssWECC.inputSignal2Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.inputSignal2Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:PssWECC.inputSignal2Type'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssWECC.inputSignal2Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.inputSignal2Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:PssWECC.inputSignal2Type'
                                                 );
        }
        if ('cim:PssWECC.k1' in object) {
            attributeEntries['filledEntries']['cim:PssWECC.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.k1'],
                                                   'cim:PU',
                                                   'cim:PssWECC.k1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssWECC.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.k1'],
                                                   'cim:PU',
                                                   'cim:PssWECC.k1'
                                                 );
        }
        if ('cim:PssWECC.t1' in object) {
            attributeEntries['filledEntries']['cim:PssWECC.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t1'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssWECC.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t1'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t1'
                                                 );
        }
        if ('cim:PssWECC.k2' in object) {
            attributeEntries['filledEntries']['cim:PssWECC.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.k2'],
                                                   'cim:PU',
                                                   'cim:PssWECC.k2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssWECC.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.k2'],
                                                   'cim:PU',
                                                   'cim:PssWECC.k2'
                                                 );
        }
        if ('cim:PssWECC.t2' in object) {
            attributeEntries['filledEntries']['cim:PssWECC.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t2'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssWECC.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t2'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t2'
                                                 );
        }
        if ('cim:PssWECC.t3' in object) {
            attributeEntries['filledEntries']['cim:PssWECC.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t3'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssWECC.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t3'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t3'
                                                 );
        }
        if ('cim:PssWECC.t4' in object) {
            attributeEntries['filledEntries']['cim:PssWECC.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t4'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssWECC.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t4'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t4'
                                                 );
        }
        if ('cim:PssWECC.t5' in object) {
            attributeEntries['filledEntries']['cim:PssWECC.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t5'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssWECC.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t5'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t5'
                                                 );
        }
        if ('cim:PssWECC.t6' in object) {
            attributeEntries['filledEntries']['cim:PssWECC.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t6'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssWECC.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t6'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t6'
                                                 );
        }
        if ('cim:PssWECC.t7' in object) {
            attributeEntries['filledEntries']['cim:PssWECC.t7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t7'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssWECC.t7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t7'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t7'
                                                 );
        }
        if ('cim:PssWECC.t8' in object) {
            attributeEntries['filledEntries']['cim:PssWECC.t8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t8'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t8'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssWECC.t8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t8'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t8'
                                                 );
        }
        if ('cim:PssWECC.t10' in object) {
            attributeEntries['filledEntries']['cim:PssWECC.t10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t10'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t10'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssWECC.t10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t10'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t10'
                                                 );
        }
        if ('cim:PssWECC.t9' in object) {
            attributeEntries['filledEntries']['cim:PssWECC.t9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t9'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t9'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssWECC.t9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.t9'],
                                                   'cim:Seconds',
                                                   'cim:PssWECC.t9'
                                                 );
        }
        if ('cim:PssWECC.vsmax' in object) {
            attributeEntries['filledEntries']['cim:PssWECC.vsmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.vsmax'],
                                                   'cim:PU',
                                                   'cim:PssWECC.vsmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssWECC.vsmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.vsmax'],
                                                   'cim:PU',
                                                   'cim:PssWECC.vsmax'
                                                 );
        }
        if ('cim:PssWECC.vsmin' in object) {
            attributeEntries['filledEntries']['cim:PssWECC.vsmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.vsmin'],
                                                   'cim:PU',
                                                   'cim:PssWECC.vsmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssWECC.vsmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.vsmin'],
                                                   'cim:PU',
                                                   'cim:PssWECC.vsmin'
                                                 );
        }
        if ('cim:PssWECC.vcu' in object) {
            attributeEntries['filledEntries']['cim:PssWECC.vcu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.vcu'],
                                                   'cim:PU',
                                                   'cim:PssWECC.vcu'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssWECC.vcu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.vcu'],
                                                   'cim:PU',
                                                   'cim:PssWECC.vcu'
                                                 );
        }
        if ('cim:PssWECC.vcl' in object) {
            attributeEntries['filledEntries']['cim:PssWECC.vcl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.vcl'],
                                                   'cim:PU',
                                                   'cim:PssWECC.vcl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssWECC.vcl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssWECC.vcl'],
                                                   'cim:PU',
                                                   'cim:PssWECC.vcl'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PssWECC.inputSignal1Type",
            "cim:PssWECC.inputSignal2Type",
            "cim:PssWECC.k1",
            "cim:PssWECC.t1",
            "cim:PssWECC.k2",
            "cim:PssWECC.t2",
            "cim:PssWECC.t3",
            "cim:PssWECC.t4",
            "cim:PssWECC.t5",
            "cim:PssWECC.t6",
            "cim:PssWECC.t7",
            "cim:PssWECC.t8",
            "cim:PssWECC.t10",
            "cim:PssWECC.t9",
            "cim:PssWECC.vsmax",
            "cim:PssWECC.vsmin",
            "cim:PssWECC.vcu",
            "cim:PssWECC.vcl",
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
            if (!PssWECC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PssWECC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PssWECC.attributeHTML(object, cimmenu);
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
export default PssWECC
