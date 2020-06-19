import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"

class ExcIEEEAC2A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcIEEEAC2A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcIEEEAC2A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC2A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC2A.tb'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC2A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC2A.tc'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.ka'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC2A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC2A.ta'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.vamax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.vamax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.vamax'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.vamin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.vamin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.vamin'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.kb' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.kb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.kb'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.kb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.kb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.kb'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.kb'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.vrmax'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.vrmin'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.te' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC2A.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC2A.te'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.vfemax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.vfemax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.vfemax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.vfemax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.vfemax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.vfemax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.vfemax'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.kh' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.kh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.kh'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.kh'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.kh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.kh'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.kh'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.kf'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC2A.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC2A.tf'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.kc'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.kd' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.kd'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.kd'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.kd'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.ke'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.ve1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.ve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.ve1'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.seve1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC2A.seve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC2A.seve1'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.ve2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.ve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC2A.ve2'
                                                 );
        }
        if ('cim:ExcIEEEAC2A.seve2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC2A.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC2A.seve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC2A.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC2A.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC2A.seve2'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcIEEEAC2A.tb",
            "cim:ExcIEEEAC2A.tc",
            "cim:ExcIEEEAC2A.ka",
            "cim:ExcIEEEAC2A.ta",
            "cim:ExcIEEEAC2A.vamax",
            "cim:ExcIEEEAC2A.vamin",
            "cim:ExcIEEEAC2A.kb",
            "cim:ExcIEEEAC2A.vrmax",
            "cim:ExcIEEEAC2A.vrmin",
            "cim:ExcIEEEAC2A.te",
            "cim:ExcIEEEAC2A.vfemax",
            "cim:ExcIEEEAC2A.kh",
            "cim:ExcIEEEAC2A.kf",
            "cim:ExcIEEEAC2A.tf",
            "cim:ExcIEEEAC2A.kc",
            "cim:ExcIEEEAC2A.kd",
            "cim:ExcIEEEAC2A.ke",
            "cim:ExcIEEEAC2A.ve1",
            "cim:ExcIEEEAC2A.seve1",
            "cim:ExcIEEEAC2A.ve2",
            "cim:ExcIEEEAC2A.seve2",
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
            if (!ExcIEEEAC2A.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcIEEEAC2A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcIEEEAC2A.attributeHTML(object, cimmenu);
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
export default ExcIEEEAC2A
