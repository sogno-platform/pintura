import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"

class ExcAC1A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcAC1A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcAC1A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC1A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC1A.tb'
                                                 );
        }
        if ('cim:ExcAC1A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC1A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC1A.tc'
                                                 );
        }
        if ('cim:ExcAC1A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.ka'
                                                 );
        }
        if ('cim:ExcAC1A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC1A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC1A.ta'
                                                 );
        }
        if ('cim:ExcAC1A.vamax' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.vamax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.vamax'
                                                 );
        }
        if ('cim:ExcAC1A.vamin' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.vamin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.vamin'
                                                 );
        }
        if ('cim:ExcAC1A.te' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC1A.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC1A.te'
                                                 );
        }
        if ('cim:ExcAC1A.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.kf'
                                                 );
        }
        if ('cim:ExcAC1A.kf1' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.kf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.kf1'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.kf1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.kf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.kf1'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.kf1'
                                                 );
        }
        if ('cim:ExcAC1A.kf2' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.kf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.kf2'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.kf2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.kf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.kf2'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.kf2'
                                                 );
        }
        if ('cim:ExcAC1A.ks' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.ks'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.ks'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.ks'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.ks'
                                                 );
        }
        if ('cim:ExcAC1A.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC1A.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC1A.tf'
                                                 );
        }
        if ('cim:ExcAC1A.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.kc'
                                                 );
        }
        if ('cim:ExcAC1A.kd' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.kd'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.kd'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.kd'
                                                 );
        }
        if ('cim:ExcAC1A.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.ke'
                                                 );
        }
        if ('cim:ExcAC1A.ve1' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.ve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.ve1'
                                                 );
        }
        if ('cim:ExcAC1A.seve1' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC1A.seve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC1A.seve1'
                                                 );
        }
        if ('cim:ExcAC1A.ve2' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.ve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.ve2'
                                                 );
        }
        if ('cim:ExcAC1A.seve2' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC1A.seve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC1A.seve2'
                                                 );
        }
        if ('cim:ExcAC1A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.vrmax'
                                                 );
        }
        if ('cim:ExcAC1A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcAC1A.vrmin'
                                                 );
        }
        if ('cim:ExcAC1A.hvlvgates' in object) {
            attributeEntries['filledEntries']['cim:ExcAC1A.hvlvgates'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.hvlvgates'],
                                                   'cim:Boolean',
                                                   'cim:ExcAC1A.hvlvgates'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC1A.hvlvgates'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC1A.hvlvgates'],
                                                   'cim:Boolean',
                                                   'cim:ExcAC1A.hvlvgates'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcAC1A.tb",
            "cim:ExcAC1A.tc",
            "cim:ExcAC1A.ka",
            "cim:ExcAC1A.ta",
            "cim:ExcAC1A.vamax",
            "cim:ExcAC1A.vamin",
            "cim:ExcAC1A.te",
            "cim:ExcAC1A.kf",
            "cim:ExcAC1A.kf1",
            "cim:ExcAC1A.kf2",
            "cim:ExcAC1A.ks",
            "cim:ExcAC1A.tf",
            "cim:ExcAC1A.kc",
            "cim:ExcAC1A.kd",
            "cim:ExcAC1A.ke",
            "cim:ExcAC1A.ve1",
            "cim:ExcAC1A.seve1",
            "cim:ExcAC1A.ve2",
            "cim:ExcAC1A.seve2",
            "cim:ExcAC1A.vrmax",
            "cim:ExcAC1A.vrmin",
            "cim:ExcAC1A.hvlvgates",
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
            if (!ExcAC1A.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcAC1A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcAC1A.attributeHTML(object, cimmenu);
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
export default ExcAC1A
