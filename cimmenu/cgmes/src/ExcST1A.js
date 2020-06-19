import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"

class ExcST1A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcST1A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcST1A.vimax' in object) {
            attributeEntries['filledEntries']['cim:ExcST1A.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.vimax'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.vimax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST1A.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.vimax'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.vimax'
                                                 );
        }
        if ('cim:ExcST1A.vimin' in object) {
            attributeEntries['filledEntries']['cim:ExcST1A.vimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.vimin'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.vimin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST1A.vimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.vimin'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.vimin'
                                                 );
        }
        if ('cim:ExcST1A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcST1A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcST1A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST1A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcST1A.tc'
                                                 );
        }
        if ('cim:ExcST1A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcST1A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcST1A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST1A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcST1A.tb'
                                                 );
        }
        if ('cim:ExcST1A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcST1A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST1A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.ka'
                                                 );
        }
        if ('cim:ExcST1A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcST1A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcST1A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST1A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcST1A.ta'
                                                 );
        }
        if ('cim:ExcST1A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcST1A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST1A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.vrmax'
                                                 );
        }
        if ('cim:ExcST1A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcST1A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST1A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.vrmin'
                                                 );
        }
        if ('cim:ExcST1A.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcST1A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST1A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.kc'
                                                 );
        }
        if ('cim:ExcST1A.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcST1A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST1A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.kf'
                                                 );
        }
        if ('cim:ExcST1A.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcST1A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcST1A.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST1A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcST1A.tf'
                                                 );
        }
        if ('cim:ExcST1A.tc1' in object) {
            attributeEntries['filledEntries']['cim:ExcST1A.tc1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.tc1'],
                                                   'cim:Seconds',
                                                   'cim:ExcST1A.tc1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST1A.tc1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.tc1'],
                                                   'cim:Seconds',
                                                   'cim:ExcST1A.tc1'
                                                 );
        }
        if ('cim:ExcST1A.tb1' in object) {
            attributeEntries['filledEntries']['cim:ExcST1A.tb1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.tb1'],
                                                   'cim:Seconds',
                                                   'cim:ExcST1A.tb1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST1A.tb1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.tb1'],
                                                   'cim:Seconds',
                                                   'cim:ExcST1A.tb1'
                                                 );
        }
        if ('cim:ExcST1A.vamax' in object) {
            attributeEntries['filledEntries']['cim:ExcST1A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.vamax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST1A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.vamax'
                                                 );
        }
        if ('cim:ExcST1A.vamin' in object) {
            attributeEntries['filledEntries']['cim:ExcST1A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.vamin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST1A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.vamin'
                                                 );
        }
        if ('cim:ExcST1A.ilr' in object) {
            attributeEntries['filledEntries']['cim:ExcST1A.ilr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.ilr'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.ilr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST1A.ilr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.ilr'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.ilr'
                                                 );
        }
        if ('cim:ExcST1A.klr' in object) {
            attributeEntries['filledEntries']['cim:ExcST1A.klr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.klr'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.klr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST1A.klr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.klr'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.klr'
                                                 );
        }
        if ('cim:ExcST1A.xe' in object) {
            attributeEntries['filledEntries']['cim:ExcST1A.xe'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.xe'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.xe'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST1A.xe'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST1A.xe'],
                                                   'cim:PU',
                                                   'cim:ExcST1A.xe'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcST1A.vimax",
            "cim:ExcST1A.vimin",
            "cim:ExcST1A.tc",
            "cim:ExcST1A.tb",
            "cim:ExcST1A.ka",
            "cim:ExcST1A.ta",
            "cim:ExcST1A.vrmax",
            "cim:ExcST1A.vrmin",
            "cim:ExcST1A.kc",
            "cim:ExcST1A.kf",
            "cim:ExcST1A.tf",
            "cim:ExcST1A.tc1",
            "cim:ExcST1A.tb1",
            "cim:ExcST1A.vamax",
            "cim:ExcST1A.vamin",
            "cim:ExcST1A.ilr",
            "cim:ExcST1A.klr",
            "cim:ExcST1A.xe",
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
            if (!ExcST1A.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcST1A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcST1A.attributeHTML(object, cimmenu);
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
export default ExcST1A
