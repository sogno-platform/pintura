import templates from "../../templates/index.js"
import DiscontinuousExcitationControlDynamics from "./DiscontinuousExcitationControlDynamics.js"
import common from "../../src/common.js"

class DiscExcContIEEEDEC1A extends DiscontinuousExcitationControlDynamics {

    static attributeHTML(object, cimmenu, classType="DiscExcContIEEEDEC1A") {
        let attributeEntries = DiscontinuousExcitationControlDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:DiscExcContIEEEDEC1A.vtlmt' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC1A.vtlmt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.vtlmt'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.vtlmt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC1A.vtlmt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.vtlmt'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.vtlmt'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC1A.vomax' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC1A.vomax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.vomax'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.vomax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC1A.vomax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.vomax'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.vomax'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC1A.vomin' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC1A.vomin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.vomin'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.vomin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC1A.vomin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.vomin'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.vomin'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC1A.ketl' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC1A.ketl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.ketl'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.ketl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC1A.ketl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.ketl'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.ketl'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC1A.vtc' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC1A.vtc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.vtc'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.vtc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC1A.vtc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.vtc'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.vtc'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC1A.val' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC1A.val'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.val'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.val'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC1A.val'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.val'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.val'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC1A.esc' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC1A.esc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.esc'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.esc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC1A.esc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.esc'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.esc'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC1A.kan' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC1A.kan'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.kan'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.kan'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC1A.kan'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.kan'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.kan'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC1A.tan' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC1A.tan'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.tan'],
                                                   'cim:Seconds',
                                                   'cim:DiscExcContIEEEDEC1A.tan'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC1A.tan'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.tan'],
                                                   'cim:Seconds',
                                                   'cim:DiscExcContIEEEDEC1A.tan'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC1A.tw5' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC1A.tw5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.tw5'],
                                                   'cim:Seconds',
                                                   'cim:DiscExcContIEEEDEC1A.tw5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC1A.tw5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.tw5'],
                                                   'cim:Seconds',
                                                   'cim:DiscExcContIEEEDEC1A.tw5'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC1A.vsmax' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC1A.vsmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.vsmax'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.vsmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC1A.vsmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.vsmax'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.vsmax'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC1A.vsmin' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC1A.vsmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.vsmin'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.vsmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC1A.vsmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.vsmin'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.vsmin'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC1A.td' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC1A.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.td'],
                                                   'cim:Seconds',
                                                   'cim:DiscExcContIEEEDEC1A.td'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC1A.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.td'],
                                                   'cim:Seconds',
                                                   'cim:DiscExcContIEEEDEC1A.td'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC1A.tl1' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC1A.tl1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.tl1'],
                                                   'cim:Seconds',
                                                   'cim:DiscExcContIEEEDEC1A.tl1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC1A.tl1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.tl1'],
                                                   'cim:Seconds',
                                                   'cim:DiscExcContIEEEDEC1A.tl1'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC1A.tl2' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC1A.tl2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.tl2'],
                                                   'cim:Seconds',
                                                   'cim:DiscExcContIEEEDEC1A.tl2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC1A.tl2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.tl2'],
                                                   'cim:Seconds',
                                                   'cim:DiscExcContIEEEDEC1A.tl2'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC1A.vtm' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC1A.vtm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.vtm'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.vtm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC1A.vtm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.vtm'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.vtm'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC1A.vtn' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC1A.vtn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.vtn'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.vtn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC1A.vtn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.vtn'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.vtn'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC1A.vanmax' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC1A.vanmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.vanmax'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.vanmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC1A.vanmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC1A.vanmax'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC1A.vanmax'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DiscExcContIEEEDEC1A.vtlmt",
            "cim:DiscExcContIEEEDEC1A.vomax",
            "cim:DiscExcContIEEEDEC1A.vomin",
            "cim:DiscExcContIEEEDEC1A.ketl",
            "cim:DiscExcContIEEEDEC1A.vtc",
            "cim:DiscExcContIEEEDEC1A.val",
            "cim:DiscExcContIEEEDEC1A.esc",
            "cim:DiscExcContIEEEDEC1A.kan",
            "cim:DiscExcContIEEEDEC1A.tan",
            "cim:DiscExcContIEEEDEC1A.tw5",
            "cim:DiscExcContIEEEDEC1A.vsmax",
            "cim:DiscExcContIEEEDEC1A.vsmin",
            "cim:DiscExcContIEEEDEC1A.td",
            "cim:DiscExcContIEEEDEC1A.tl1",
            "cim:DiscExcContIEEEDEC1A.tl2",
            "cim:DiscExcContIEEEDEC1A.vtm",
            "cim:DiscExcContIEEEDEC1A.vtn",
            "cim:DiscExcContIEEEDEC1A.vanmax",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( DiscontinuousExcitationControlDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!DiscExcContIEEEDEC1A.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class DiscExcContIEEEDEC1A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DiscExcContIEEEDEC1A.attributeHTML(object, cimmenu);
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
export default DiscExcContIEEEDEC1A
