import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"

class GovHydro1 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovHydro1") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovHydro1.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovHydro1.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydro1.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro1.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydro1.mwbase'
                                                 );
        }
        if ('cim:GovHydro1.rperm' in object) {
            attributeEntries['filledEntries']['cim:GovHydro1.rperm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.rperm'],
                                                   'cim:PU',
                                                   'cim:GovHydro1.rperm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro1.rperm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.rperm'],
                                                   'cim:PU',
                                                   'cim:GovHydro1.rperm'
                                                 );
        }
        if ('cim:GovHydro1.rtemp' in object) {
            attributeEntries['filledEntries']['cim:GovHydro1.rtemp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.rtemp'],
                                                   'cim:PU',
                                                   'cim:GovHydro1.rtemp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro1.rtemp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.rtemp'],
                                                   'cim:PU',
                                                   'cim:GovHydro1.rtemp'
                                                 );
        }
        if ('cim:GovHydro1.tr' in object) {
            attributeEntries['filledEntries']['cim:GovHydro1.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.tr'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro1.tr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro1.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.tr'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro1.tr'
                                                 );
        }
        if ('cim:GovHydro1.tf' in object) {
            attributeEntries['filledEntries']['cim:GovHydro1.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.tf'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro1.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro1.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.tf'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro1.tf'
                                                 );
        }
        if ('cim:GovHydro1.tg' in object) {
            attributeEntries['filledEntries']['cim:GovHydro1.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.tg'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro1.tg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro1.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.tg'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro1.tg'
                                                 );
        }
        if ('cim:GovHydro1.velm' in object) {
            attributeEntries['filledEntries']['cim:GovHydro1.velm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.velm'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydro1.velm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro1.velm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.velm'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydro1.velm'
                                                 );
        }
        if ('cim:GovHydro1.gmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydro1.gmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.gmax'],
                                                   'cim:PU',
                                                   'cim:GovHydro1.gmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro1.gmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.gmax'],
                                                   'cim:PU',
                                                   'cim:GovHydro1.gmax'
                                                 );
        }
        if ('cim:GovHydro1.gmin' in object) {
            attributeEntries['filledEntries']['cim:GovHydro1.gmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.gmin'],
                                                   'cim:PU',
                                                   'cim:GovHydro1.gmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro1.gmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.gmin'],
                                                   'cim:PU',
                                                   'cim:GovHydro1.gmin'
                                                 );
        }
        if ('cim:GovHydro1.tw' in object) {
            attributeEntries['filledEntries']['cim:GovHydro1.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro1.tw'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro1.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro1.tw'
                                                 );
        }
        if ('cim:GovHydro1.at' in object) {
            attributeEntries['filledEntries']['cim:GovHydro1.at'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.at'],
                                                   'cim:PU',
                                                   'cim:GovHydro1.at'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro1.at'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.at'],
                                                   'cim:PU',
                                                   'cim:GovHydro1.at'
                                                 );
        }
        if ('cim:GovHydro1.dturb' in object) {
            attributeEntries['filledEntries']['cim:GovHydro1.dturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.dturb'],
                                                   'cim:PU',
                                                   'cim:GovHydro1.dturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro1.dturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.dturb'],
                                                   'cim:PU',
                                                   'cim:GovHydro1.dturb'
                                                 );
        }
        if ('cim:GovHydro1.qnl' in object) {
            attributeEntries['filledEntries']['cim:GovHydro1.qnl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.qnl'],
                                                   'cim:PU',
                                                   'cim:GovHydro1.qnl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro1.qnl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.qnl'],
                                                   'cim:PU',
                                                   'cim:GovHydro1.qnl'
                                                 );
        }
        if ('cim:GovHydro1.hdam' in object) {
            attributeEntries['filledEntries']['cim:GovHydro1.hdam'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.hdam'],
                                                   'cim:PU',
                                                   'cim:GovHydro1.hdam'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro1.hdam'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro1.hdam'],
                                                   'cim:PU',
                                                   'cim:GovHydro1.hdam'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovHydro1.mwbase",
            "cim:GovHydro1.rperm",
            "cim:GovHydro1.rtemp",
            "cim:GovHydro1.tr",
            "cim:GovHydro1.tf",
            "cim:GovHydro1.tg",
            "cim:GovHydro1.velm",
            "cim:GovHydro1.gmax",
            "cim:GovHydro1.gmin",
            "cim:GovHydro1.tw",
            "cim:GovHydro1.at",
            "cim:GovHydro1.dturb",
            "cim:GovHydro1.qnl",
            "cim:GovHydro1.hdam",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( TurbineGovernorDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!GovHydro1.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovHydro1: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovHydro1.attributeHTML(object, cimmenu);
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
export default GovHydro1
