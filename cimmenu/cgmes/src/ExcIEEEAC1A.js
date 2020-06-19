import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"

class ExcIEEEAC1A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcIEEEAC1A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcIEEEAC1A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC1A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC1A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC1A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC1A.tb'
                                                 );
        }
        if ('cim:ExcIEEEAC1A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC1A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC1A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC1A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC1A.tc'
                                                 );
        }
        if ('cim:ExcIEEEAC1A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC1A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC1A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.ka'
                                                 );
        }
        if ('cim:ExcIEEEAC1A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC1A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC1A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC1A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC1A.ta'
                                                 );
        }
        if ('cim:ExcIEEEAC1A.vamax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC1A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.vamax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC1A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.vamax'
                                                 );
        }
        if ('cim:ExcIEEEAC1A.vamin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC1A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.vamin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC1A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.vamin'
                                                 );
        }
        if ('cim:ExcIEEEAC1A.te' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC1A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC1A.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC1A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC1A.te'
                                                 );
        }
        if ('cim:ExcIEEEAC1A.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC1A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC1A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.kf'
                                                 );
        }
        if ('cim:ExcIEEEAC1A.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC1A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC1A.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC1A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC1A.tf'
                                                 );
        }
        if ('cim:ExcIEEEAC1A.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC1A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC1A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.kc'
                                                 );
        }
        if ('cim:ExcIEEEAC1A.kd' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC1A.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.kd'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC1A.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.kd'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.kd'
                                                 );
        }
        if ('cim:ExcIEEEAC1A.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC1A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC1A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.ke'
                                                 );
        }
        if ('cim:ExcIEEEAC1A.ve1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC1A.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.ve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC1A.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.ve1'
                                                 );
        }
        if ('cim:ExcIEEEAC1A.seve1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC1A.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC1A.seve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC1A.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC1A.seve1'
                                                 );
        }
        if ('cim:ExcIEEEAC1A.ve2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC1A.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.ve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC1A.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.ve2'
                                                 );
        }
        if ('cim:ExcIEEEAC1A.seve2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC1A.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC1A.seve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC1A.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC1A.seve2'
                                                 );
        }
        if ('cim:ExcIEEEAC1A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC1A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC1A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.vrmax'
                                                 );
        }
        if ('cim:ExcIEEEAC1A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC1A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC1A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC1A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC1A.vrmin'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcIEEEAC1A.tb",
            "cim:ExcIEEEAC1A.tc",
            "cim:ExcIEEEAC1A.ka",
            "cim:ExcIEEEAC1A.ta",
            "cim:ExcIEEEAC1A.vamax",
            "cim:ExcIEEEAC1A.vamin",
            "cim:ExcIEEEAC1A.te",
            "cim:ExcIEEEAC1A.kf",
            "cim:ExcIEEEAC1A.tf",
            "cim:ExcIEEEAC1A.kc",
            "cim:ExcIEEEAC1A.kd",
            "cim:ExcIEEEAC1A.ke",
            "cim:ExcIEEEAC1A.ve1",
            "cim:ExcIEEEAC1A.seve1",
            "cim:ExcIEEEAC1A.ve2",
            "cim:ExcIEEEAC1A.seve2",
            "cim:ExcIEEEAC1A.vrmax",
            "cim:ExcIEEEAC1A.vrmin",
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
            if (!ExcIEEEAC1A.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcIEEEAC1A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcIEEEAC1A.attributeHTML(object, cimmenu);
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
export default ExcIEEEAC1A
