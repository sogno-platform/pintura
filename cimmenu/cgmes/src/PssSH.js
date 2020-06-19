import templates from "../../templates/index.js"
import PowerSystemStabilizerDynamics from "./PowerSystemStabilizerDynamics.js"
import common from "../../src/common.js"

class PssSH extends PowerSystemStabilizerDynamics {

    static attributeHTML(object, cimmenu, classType="PssSH") {
        let attributeEntries = PowerSystemStabilizerDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:PssSH.k' in object) {
            attributeEntries['filledEntries']['cim:PssSH.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.k'],
                                                   'cim:PU',
                                                   'cim:PssSH.k'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSH.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.k'],
                                                   'cim:PU',
                                                   'cim:PssSH.k'
                                                 );
        }
        if ('cim:PssSH.k0' in object) {
            attributeEntries['filledEntries']['cim:PssSH.k0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.k0'],
                                                   'cim:PU',
                                                   'cim:PssSH.k0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSH.k0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.k0'],
                                                   'cim:PU',
                                                   'cim:PssSH.k0'
                                                 );
        }
        if ('cim:PssSH.k1' in object) {
            attributeEntries['filledEntries']['cim:PssSH.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.k1'],
                                                   'cim:PU',
                                                   'cim:PssSH.k1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSH.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.k1'],
                                                   'cim:PU',
                                                   'cim:PssSH.k1'
                                                 );
        }
        if ('cim:PssSH.k2' in object) {
            attributeEntries['filledEntries']['cim:PssSH.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.k2'],
                                                   'cim:PU',
                                                   'cim:PssSH.k2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSH.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.k2'],
                                                   'cim:PU',
                                                   'cim:PssSH.k2'
                                                 );
        }
        if ('cim:PssSH.k3' in object) {
            attributeEntries['filledEntries']['cim:PssSH.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.k3'],
                                                   'cim:PU',
                                                   'cim:PssSH.k3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSH.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.k3'],
                                                   'cim:PU',
                                                   'cim:PssSH.k3'
                                                 );
        }
        if ('cim:PssSH.k4' in object) {
            attributeEntries['filledEntries']['cim:PssSH.k4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.k4'],
                                                   'cim:PU',
                                                   'cim:PssSH.k4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSH.k4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.k4'],
                                                   'cim:PU',
                                                   'cim:PssSH.k4'
                                                 );
        }
        if ('cim:PssSH.td' in object) {
            attributeEntries['filledEntries']['cim:PssSH.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.td'],
                                                   'cim:Seconds',
                                                   'cim:PssSH.td'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSH.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.td'],
                                                   'cim:Seconds',
                                                   'cim:PssSH.td'
                                                 );
        }
        if ('cim:PssSH.t1' in object) {
            attributeEntries['filledEntries']['cim:PssSH.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.t1'],
                                                   'cim:Seconds',
                                                   'cim:PssSH.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSH.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.t1'],
                                                   'cim:Seconds',
                                                   'cim:PssSH.t1'
                                                 );
        }
        if ('cim:PssSH.t2' in object) {
            attributeEntries['filledEntries']['cim:PssSH.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.t2'],
                                                   'cim:Seconds',
                                                   'cim:PssSH.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSH.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.t2'],
                                                   'cim:Seconds',
                                                   'cim:PssSH.t2'
                                                 );
        }
        if ('cim:PssSH.t3' in object) {
            attributeEntries['filledEntries']['cim:PssSH.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.t3'],
                                                   'cim:Seconds',
                                                   'cim:PssSH.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSH.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.t3'],
                                                   'cim:Seconds',
                                                   'cim:PssSH.t3'
                                                 );
        }
        if ('cim:PssSH.t4' in object) {
            attributeEntries['filledEntries']['cim:PssSH.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.t4'],
                                                   'cim:Seconds',
                                                   'cim:PssSH.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSH.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.t4'],
                                                   'cim:Seconds',
                                                   'cim:PssSH.t4'
                                                 );
        }
        if ('cim:PssSH.vsmax' in object) {
            attributeEntries['filledEntries']['cim:PssSH.vsmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.vsmax'],
                                                   'cim:PU',
                                                   'cim:PssSH.vsmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSH.vsmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.vsmax'],
                                                   'cim:PU',
                                                   'cim:PssSH.vsmax'
                                                 );
        }
        if ('cim:PssSH.vsmin' in object) {
            attributeEntries['filledEntries']['cim:PssSH.vsmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.vsmin'],
                                                   'cim:PU',
                                                   'cim:PssSH.vsmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSH.vsmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSH.vsmin'],
                                                   'cim:PU',
                                                   'cim:PssSH.vsmin'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PssSH.k",
            "cim:PssSH.k0",
            "cim:PssSH.k1",
            "cim:PssSH.k2",
            "cim:PssSH.k3",
            "cim:PssSH.k4",
            "cim:PssSH.td",
            "cim:PssSH.t1",
            "cim:PssSH.t2",
            "cim:PssSH.t3",
            "cim:PssSH.t4",
            "cim:PssSH.vsmax",
            "cim:PssSH.vsmin",
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
            if (!PssSH.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PssSH: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PssSH.attributeHTML(object, cimmenu);
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
export default PssSH
