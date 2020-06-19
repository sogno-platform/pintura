import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"

class ExcELIN1 extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcELIN1") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcELIN1.tfi' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN1.tfi'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.tfi'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN1.tfi'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN1.tfi'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.tfi'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN1.tfi'
                                                 );
        }
        if ('cim:ExcELIN1.tnu' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN1.tnu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.tnu'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN1.tnu'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN1.tnu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.tnu'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN1.tnu'
                                                 );
        }
        if ('cim:ExcELIN1.vpu' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN1.vpu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.vpu'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.vpu'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN1.vpu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.vpu'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.vpu'
                                                 );
        }
        if ('cim:ExcELIN1.vpi' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN1.vpi'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.vpi'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.vpi'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN1.vpi'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.vpi'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.vpi'
                                                 );
        }
        if ('cim:ExcELIN1.vpnf' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN1.vpnf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.vpnf'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.vpnf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN1.vpnf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.vpnf'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.vpnf'
                                                 );
        }
        if ('cim:ExcELIN1.dpnf' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN1.dpnf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.dpnf'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.dpnf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN1.dpnf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.dpnf'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.dpnf'
                                                 );
        }
        if ('cim:ExcELIN1.tsw' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN1.tsw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.tsw'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN1.tsw'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN1.tsw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.tsw'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN1.tsw'
                                                 );
        }
        if ('cim:ExcELIN1.efmin' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN1.efmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.efmin'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.efmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN1.efmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.efmin'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.efmin'
                                                 );
        }
        if ('cim:ExcELIN1.efmax' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN1.efmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.efmax'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.efmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN1.efmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.efmax'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.efmax'
                                                 );
        }
        if ('cim:ExcELIN1.xe' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN1.xe'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.xe'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.xe'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN1.xe'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.xe'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.xe'
                                                 );
        }
        if ('cim:ExcELIN1.ks1' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN1.ks1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.ks1'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.ks1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN1.ks1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.ks1'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.ks1'
                                                 );
        }
        if ('cim:ExcELIN1.ks2' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN1.ks2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.ks2'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.ks2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN1.ks2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.ks2'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.ks2'
                                                 );
        }
        if ('cim:ExcELIN1.ts1' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN1.ts1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.ts1'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN1.ts1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN1.ts1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.ts1'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN1.ts1'
                                                 );
        }
        if ('cim:ExcELIN1.ts2' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN1.ts2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.ts2'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN1.ts2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN1.ts2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.ts2'],
                                                   'cim:Seconds',
                                                   'cim:ExcELIN1.ts2'
                                                 );
        }
        if ('cim:ExcELIN1.smax' in object) {
            attributeEntries['filledEntries']['cim:ExcELIN1.smax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.smax'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.smax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcELIN1.smax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcELIN1.smax'],
                                                   'cim:PU',
                                                   'cim:ExcELIN1.smax'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcELIN1.tfi",
            "cim:ExcELIN1.tnu",
            "cim:ExcELIN1.vpu",
            "cim:ExcELIN1.vpi",
            "cim:ExcELIN1.vpnf",
            "cim:ExcELIN1.dpnf",
            "cim:ExcELIN1.tsw",
            "cim:ExcELIN1.efmin",
            "cim:ExcELIN1.efmax",
            "cim:ExcELIN1.xe",
            "cim:ExcELIN1.ks1",
            "cim:ExcELIN1.ks2",
            "cim:ExcELIN1.ts1",
            "cim:ExcELIN1.ts2",
            "cim:ExcELIN1.smax",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( ExcitationSystemDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!ExcELIN1.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcELIN1: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcELIN1.attributeHTML(object, cimmenu);
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
export default ExcELIN1
