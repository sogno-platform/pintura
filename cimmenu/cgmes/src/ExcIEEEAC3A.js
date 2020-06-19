import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"

class ExcIEEEAC3A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcIEEEAC3A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcIEEEAC3A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC3A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC3A.tb'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC3A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC3A.tc'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.ka'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC3A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC3A.ta'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.vamax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.vamax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.vamax'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.vamin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.vamin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.vamin'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.te' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC3A.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC3A.te'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.vemin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.vemin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.vemin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.vemin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.vemin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.vemin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.vemin'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.kr' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.kr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.kr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.kr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.kr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.kr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.kr'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.kf'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC3A.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC3A.tf'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.kn' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.kn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.kn'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.kn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.kn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.kn'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.kn'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.efdn' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.efdn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.efdn'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.efdn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.efdn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.efdn'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.efdn'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.kc'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.kd' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.kd'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.kd'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.kd'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.ke'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.vfemax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.vfemax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.vfemax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.vfemax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.vfemax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.vfemax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.vfemax'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.ve1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.ve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.ve1'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.seve1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC3A.seve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC3A.seve1'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.ve2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.ve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC3A.ve2'
                                                 );
        }
        if ('cim:ExcIEEEAC3A.seve2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC3A.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC3A.seve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC3A.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC3A.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC3A.seve2'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcIEEEAC3A.tb",
            "cim:ExcIEEEAC3A.tc",
            "cim:ExcIEEEAC3A.ka",
            "cim:ExcIEEEAC3A.ta",
            "cim:ExcIEEEAC3A.vamax",
            "cim:ExcIEEEAC3A.vamin",
            "cim:ExcIEEEAC3A.te",
            "cim:ExcIEEEAC3A.vemin",
            "cim:ExcIEEEAC3A.kr",
            "cim:ExcIEEEAC3A.kf",
            "cim:ExcIEEEAC3A.tf",
            "cim:ExcIEEEAC3A.kn",
            "cim:ExcIEEEAC3A.efdn",
            "cim:ExcIEEEAC3A.kc",
            "cim:ExcIEEEAC3A.kd",
            "cim:ExcIEEEAC3A.ke",
            "cim:ExcIEEEAC3A.vfemax",
            "cim:ExcIEEEAC3A.ve1",
            "cim:ExcIEEEAC3A.seve1",
            "cim:ExcIEEEAC3A.ve2",
            "cim:ExcIEEEAC3A.seve2",
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
            if (!ExcIEEEAC3A.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcIEEEAC3A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcIEEEAC3A.attributeHTML(object, cimmenu);
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
export default ExcIEEEAC3A
