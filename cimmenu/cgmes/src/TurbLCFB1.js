import templates from "../../templates/index.js"
import TurbineLoadControllerDynamics from "./TurbineLoadControllerDynamics.js"
import common from "../../src/common.js"

class TurbLCFB1 extends TurbineLoadControllerDynamics {

    static attributeHTML(object, cimmenu, classType="TurbLCFB1") {
        let attributeEntries = TurbineLoadControllerDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:TurbLCFB1.mwbase' in object) {
            attributeEntries['filledEntries']['cim:TurbLCFB1.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:TurbLCFB1.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TurbLCFB1.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:TurbLCFB1.mwbase'
                                                 );
        }
        if ('cim:TurbLCFB1.speedReferenceGovernor' in object) {
            attributeEntries['filledEntries']['cim:TurbLCFB1.speedReferenceGovernor'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.speedReferenceGovernor'],
                                                   'cim:Boolean',
                                                   'cim:TurbLCFB1.speedReferenceGovernor'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TurbLCFB1.speedReferenceGovernor'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.speedReferenceGovernor'],
                                                   'cim:Boolean',
                                                   'cim:TurbLCFB1.speedReferenceGovernor'
                                                 );
        }
        if ('cim:TurbLCFB1.db' in object) {
            attributeEntries['filledEntries']['cim:TurbLCFB1.db'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.db'],
                                                   'cim:PU',
                                                   'cim:TurbLCFB1.db'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TurbLCFB1.db'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.db'],
                                                   'cim:PU',
                                                   'cim:TurbLCFB1.db'
                                                 );
        }
        if ('cim:TurbLCFB1.emax' in object) {
            attributeEntries['filledEntries']['cim:TurbLCFB1.emax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.emax'],
                                                   'cim:PU',
                                                   'cim:TurbLCFB1.emax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TurbLCFB1.emax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.emax'],
                                                   'cim:PU',
                                                   'cim:TurbLCFB1.emax'
                                                 );
        }
        if ('cim:TurbLCFB1.fb' in object) {
            attributeEntries['filledEntries']['cim:TurbLCFB1.fb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.fb'],
                                                   'cim:PU',
                                                   'cim:TurbLCFB1.fb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TurbLCFB1.fb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.fb'],
                                                   'cim:PU',
                                                   'cim:TurbLCFB1.fb'
                                                 );
        }
        if ('cim:TurbLCFB1.kp' in object) {
            attributeEntries['filledEntries']['cim:TurbLCFB1.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.kp'],
                                                   'cim:PU',
                                                   'cim:TurbLCFB1.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TurbLCFB1.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.kp'],
                                                   'cim:PU',
                                                   'cim:TurbLCFB1.kp'
                                                 );
        }
        if ('cim:TurbLCFB1.ki' in object) {
            attributeEntries['filledEntries']['cim:TurbLCFB1.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.ki'],
                                                   'cim:PU',
                                                   'cim:TurbLCFB1.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TurbLCFB1.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.ki'],
                                                   'cim:PU',
                                                   'cim:TurbLCFB1.ki'
                                                 );
        }
        if ('cim:TurbLCFB1.fbf' in object) {
            attributeEntries['filledEntries']['cim:TurbLCFB1.fbf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.fbf'],
                                                   'cim:Boolean',
                                                   'cim:TurbLCFB1.fbf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TurbLCFB1.fbf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.fbf'],
                                                   'cim:Boolean',
                                                   'cim:TurbLCFB1.fbf'
                                                 );
        }
        if ('cim:TurbLCFB1.pbf' in object) {
            attributeEntries['filledEntries']['cim:TurbLCFB1.pbf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.pbf'],
                                                   'cim:Boolean',
                                                   'cim:TurbLCFB1.pbf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TurbLCFB1.pbf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.pbf'],
                                                   'cim:Boolean',
                                                   'cim:TurbLCFB1.pbf'
                                                 );
        }
        if ('cim:TurbLCFB1.tpelec' in object) {
            attributeEntries['filledEntries']['cim:TurbLCFB1.tpelec'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.tpelec'],
                                                   'cim:Seconds',
                                                   'cim:TurbLCFB1.tpelec'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TurbLCFB1.tpelec'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.tpelec'],
                                                   'cim:Seconds',
                                                   'cim:TurbLCFB1.tpelec'
                                                 );
        }
        if ('cim:TurbLCFB1.irmax' in object) {
            attributeEntries['filledEntries']['cim:TurbLCFB1.irmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.irmax'],
                                                   'cim:PU',
                                                   'cim:TurbLCFB1.irmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TurbLCFB1.irmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.irmax'],
                                                   'cim:PU',
                                                   'cim:TurbLCFB1.irmax'
                                                 );
        }
        if ('cim:TurbLCFB1.pmwset' in object) {
            attributeEntries['filledEntries']['cim:TurbLCFB1.pmwset'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.pmwset'],
                                                   'cim:ActivePower',
                                                   'cim:TurbLCFB1.pmwset'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TurbLCFB1.pmwset'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbLCFB1.pmwset'],
                                                   'cim:ActivePower',
                                                   'cim:TurbLCFB1.pmwset'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:TurbLCFB1.mwbase",
            "cim:TurbLCFB1.speedReferenceGovernor",
            "cim:TurbLCFB1.db",
            "cim:TurbLCFB1.emax",
            "cim:TurbLCFB1.fb",
            "cim:TurbLCFB1.kp",
            "cim:TurbLCFB1.ki",
            "cim:TurbLCFB1.fbf",
            "cim:TurbLCFB1.pbf",
            "cim:TurbLCFB1.tpelec",
            "cim:TurbLCFB1.irmax",
            "cim:TurbLCFB1.pmwset",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( TurbineLoadControllerDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!TurbLCFB1.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class TurbLCFB1: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = TurbLCFB1.attributeHTML(object, cimmenu);
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
export default TurbLCFB1
