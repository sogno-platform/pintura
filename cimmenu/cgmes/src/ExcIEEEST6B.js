import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"

class ExcIEEEST6B extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcIEEEST6B") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcIEEEST6B.ilr' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST6B.ilr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.ilr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.ilr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST6B.ilr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.ilr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.ilr'
                                                 );
        }
        if ('cim:ExcIEEEST6B.kci' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST6B.kci'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.kci'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.kci'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST6B.kci'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.kci'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.kci'
                                                 );
        }
        if ('cim:ExcIEEEST6B.kff' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST6B.kff'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.kff'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.kff'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST6B.kff'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.kff'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.kff'
                                                 );
        }
        if ('cim:ExcIEEEST6B.kg' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST6B.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.kg'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.kg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST6B.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.kg'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.kg'
                                                 );
        }
        if ('cim:ExcIEEEST6B.kia' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST6B.kia'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.kia'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.kia'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST6B.kia'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.kia'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.kia'
                                                 );
        }
        if ('cim:ExcIEEEST6B.klr' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST6B.klr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.klr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.klr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST6B.klr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.klr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.klr'
                                                 );
        }
        if ('cim:ExcIEEEST6B.km' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST6B.km'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.km'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.km'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST6B.km'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.km'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.km'
                                                 );
        }
        if ('cim:ExcIEEEST6B.kpa' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST6B.kpa'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.kpa'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.kpa'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST6B.kpa'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.kpa'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.kpa'
                                                 );
        }
        if ('cim:ExcIEEEST6B.oelin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST6B.oelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.oelin'],
                                                   'cim:ExcST6BOELselectorKind',
                                                   'cim:ExcIEEEST6B.oelin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST6B.oelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.oelin'],
                                                   'cim:ExcST6BOELselectorKind',
                                                   'cim:ExcIEEEST6B.oelin'
                                                 );
        }
        if ('cim:ExcIEEEST6B.tg' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST6B.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.tg'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST6B.tg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST6B.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.tg'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST6B.tg'
                                                 );
        }
        if ('cim:ExcIEEEST6B.vamax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST6B.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.vamax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST6B.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.vamax'
                                                 );
        }
        if ('cim:ExcIEEEST6B.vamin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST6B.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.vamin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST6B.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.vamin'
                                                 );
        }
        if ('cim:ExcIEEEST6B.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST6B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST6B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.vrmax'
                                                 );
        }
        if ('cim:ExcIEEEST6B.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST6B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST6B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST6B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST6B.vrmin'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcIEEEST6B.ilr",
            "cim:ExcIEEEST6B.kci",
            "cim:ExcIEEEST6B.kff",
            "cim:ExcIEEEST6B.kg",
            "cim:ExcIEEEST6B.kia",
            "cim:ExcIEEEST6B.klr",
            "cim:ExcIEEEST6B.km",
            "cim:ExcIEEEST6B.kpa",
            "cim:ExcIEEEST6B.oelin",
            "cim:ExcIEEEST6B.tg",
            "cim:ExcIEEEST6B.vamax",
            "cim:ExcIEEEST6B.vamin",
            "cim:ExcIEEEST6B.vrmax",
            "cim:ExcIEEEST6B.vrmin",
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
            if (!ExcIEEEST6B.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcIEEEST6B: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcIEEEST6B.attributeHTML(object, cimmenu);
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
export default ExcIEEEST6B
