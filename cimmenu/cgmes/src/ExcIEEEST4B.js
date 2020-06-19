import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"

class ExcIEEEST4B extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcIEEEST4B") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcIEEEST4B.kpr' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST4B.kpr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.kpr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.kpr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST4B.kpr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.kpr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.kpr'
                                                 );
        }
        if ('cim:ExcIEEEST4B.kir' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST4B.kir'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.kir'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.kir'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST4B.kir'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.kir'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.kir'
                                                 );
        }
        if ('cim:ExcIEEEST4B.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST4B.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST4B.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST4B.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST4B.ta'
                                                 );
        }
        if ('cim:ExcIEEEST4B.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST4B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST4B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.vrmax'
                                                 );
        }
        if ('cim:ExcIEEEST4B.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST4B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST4B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.vrmin'
                                                 );
        }
        if ('cim:ExcIEEEST4B.kpm' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST4B.kpm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.kpm'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.kpm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST4B.kpm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.kpm'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.kpm'
                                                 );
        }
        if ('cim:ExcIEEEST4B.kim' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST4B.kim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.kim'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.kim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST4B.kim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.kim'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.kim'
                                                 );
        }
        if ('cim:ExcIEEEST4B.vmmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST4B.vmmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.vmmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.vmmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST4B.vmmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.vmmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.vmmax'
                                                 );
        }
        if ('cim:ExcIEEEST4B.vmmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST4B.vmmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.vmmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.vmmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST4B.vmmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.vmmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.vmmin'
                                                 );
        }
        if ('cim:ExcIEEEST4B.kg' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST4B.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.kg'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.kg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST4B.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.kg'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.kg'
                                                 );
        }
        if ('cim:ExcIEEEST4B.kp' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST4B.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.kp'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST4B.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.kp'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.kp'
                                                 );
        }
        if ('cim:ExcIEEEST4B.thetap' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST4B.thetap'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.thetap'],
                                                   'cim:AngleDegrees',
                                                   'cim:ExcIEEEST4B.thetap'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST4B.thetap'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.thetap'],
                                                   'cim:AngleDegrees',
                                                   'cim:ExcIEEEST4B.thetap'
                                                 );
        }
        if ('cim:ExcIEEEST4B.ki' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST4B.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.ki'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST4B.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.ki'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.ki'
                                                 );
        }
        if ('cim:ExcIEEEST4B.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST4B.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST4B.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.kc'
                                                 );
        }
        if ('cim:ExcIEEEST4B.xl' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST4B.xl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.xl'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.xl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST4B.xl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.xl'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.xl'
                                                 );
        }
        if ('cim:ExcIEEEST4B.vbmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST4B.vbmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.vbmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.vbmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST4B.vbmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST4B.vbmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST4B.vbmax'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcIEEEST4B.kpr",
            "cim:ExcIEEEST4B.kir",
            "cim:ExcIEEEST4B.ta",
            "cim:ExcIEEEST4B.vrmax",
            "cim:ExcIEEEST4B.vrmin",
            "cim:ExcIEEEST4B.kpm",
            "cim:ExcIEEEST4B.kim",
            "cim:ExcIEEEST4B.vmmax",
            "cim:ExcIEEEST4B.vmmin",
            "cim:ExcIEEEST4B.kg",
            "cim:ExcIEEEST4B.kp",
            "cim:ExcIEEEST4B.thetap",
            "cim:ExcIEEEST4B.ki",
            "cim:ExcIEEEST4B.kc",
            "cim:ExcIEEEST4B.xl",
            "cim:ExcIEEEST4B.vbmax",
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
            if (!ExcIEEEST4B.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcIEEEST4B: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcIEEEST4B.attributeHTML(object, cimmenu);
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
export default ExcIEEEST4B
