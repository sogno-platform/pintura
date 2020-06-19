import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class WindContQIEC extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="WindContQIEC") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:WindContQIEC.iqh1' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.iqh1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.iqh1'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.iqh1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.iqh1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.iqh1'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.iqh1'
                                                 );
        }
        if ('cim:WindContQIEC.iqmax' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.iqmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.iqmax'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.iqmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.iqmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.iqmax'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.iqmax'
                                                 );
        }
        if ('cim:WindContQIEC.iqmin' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.iqmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.iqmin'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.iqmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.iqmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.iqmin'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.iqmin'
                                                 );
        }
        if ('cim:WindContQIEC.iqpost' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.iqpost'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.iqpost'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.iqpost'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.iqpost'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.iqpost'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.iqpost'
                                                 );
        }
        if ('cim:WindContQIEC.kiq' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.kiq'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.kiq'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.kiq'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.kiq'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.kiq'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.kiq'
                                                 );
        }
        if ('cim:WindContQIEC.kiu' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.kiu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.kiu'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.kiu'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.kiu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.kiu'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.kiu'
                                                 );
        }
        if ('cim:WindContQIEC.kpq' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.kpq'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.kpq'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.kpq'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.kpq'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.kpq'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.kpq'
                                                 );
        }
        if ('cim:WindContQIEC.kpu' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.kpu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.kpu'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.kpu'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.kpu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.kpu'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.kpu'
                                                 );
        }
        if ('cim:WindContQIEC.kqv' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.kqv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.kqv'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.kqv'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.kqv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.kqv'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.kqv'
                                                 );
        }
        if ('cim:WindContQIEC.qmax' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.qmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.qmax'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.qmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.qmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.qmax'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.qmax'
                                                 );
        }
        if ('cim:WindContQIEC.qmin' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.qmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.qmin'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.qmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.qmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.qmin'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.qmin'
                                                 );
        }
        if ('cim:WindContQIEC.rdroop' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.rdroop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.rdroop'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.rdroop'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.rdroop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.rdroop'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.rdroop'
                                                 );
        }
        if ('cim:WindContQIEC.tiq' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.tiq'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.tiq'],
                                                   'cim:Seconds',
                                                   'cim:WindContQIEC.tiq'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.tiq'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.tiq'],
                                                   'cim:Seconds',
                                                   'cim:WindContQIEC.tiq'
                                                 );
        }
        if ('cim:WindContQIEC.tpfilt' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.tpfilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.tpfilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContQIEC.tpfilt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.tpfilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.tpfilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContQIEC.tpfilt'
                                                 );
        }
        if ('cim:WindContQIEC.tpost' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.tpost'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.tpost'],
                                                   'cim:Seconds',
                                                   'cim:WindContQIEC.tpost'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.tpost'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.tpost'],
                                                   'cim:Seconds',
                                                   'cim:WindContQIEC.tpost'
                                                 );
        }
        if ('cim:WindContQIEC.tqord' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.tqord'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.tqord'],
                                                   'cim:Seconds',
                                                   'cim:WindContQIEC.tqord'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.tqord'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.tqord'],
                                                   'cim:Seconds',
                                                   'cim:WindContQIEC.tqord'
                                                 );
        }
        if ('cim:WindContQIEC.tufilt' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.tufilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.tufilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContQIEC.tufilt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.tufilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.tufilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContQIEC.tufilt'
                                                 );
        }
        if ('cim:WindContQIEC.udb1' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.udb1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.udb1'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.udb1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.udb1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.udb1'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.udb1'
                                                 );
        }
        if ('cim:WindContQIEC.udb2' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.udb2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.udb2'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.udb2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.udb2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.udb2'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.udb2'
                                                 );
        }
        if ('cim:WindContQIEC.umax' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.umax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.umax'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.umax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.umax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.umax'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.umax'
                                                 );
        }
        if ('cim:WindContQIEC.umin' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.umin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.umin'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.umin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.umin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.umin'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.umin'
                                                 );
        }
        if ('cim:WindContQIEC.uqdip' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.uqdip'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.uqdip'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.uqdip'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.uqdip'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.uqdip'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.uqdip'
                                                 );
        }
        if ('cim:WindContQIEC.uref0' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.uref0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.uref0'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.uref0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.uref0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.uref0'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.uref0'
                                                 );
        }
        if ('cim:WindContQIEC.windLVRTQcontrolModesType' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.windLVRTQcontrolModesType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.windLVRTQcontrolModesType'],
                                                   'cim:WindLVRTQcontrolModesKind',
                                                   'cim:WindContQIEC.windLVRTQcontrolModesType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.windLVRTQcontrolModesType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.windLVRTQcontrolModesType'],
                                                   'cim:WindLVRTQcontrolModesKind',
                                                   'cim:WindContQIEC.windLVRTQcontrolModesType'
                                                 );
        }
        if ('cim:WindContQIEC.windQcontrolModesType' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.windQcontrolModesType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.windQcontrolModesType'],
                                                   'cim:WindQcontrolModesKind',
                                                   'cim:WindContQIEC.windQcontrolModesType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.windQcontrolModesType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.windQcontrolModesType'],
                                                   'cim:WindQcontrolModesKind',
                                                   'cim:WindContQIEC.windQcontrolModesType'
                                                 );
        }
        if ('cim:WindContQIEC.xdroop' in object) {
            attributeEntries['filledEntries']['cim:WindContQIEC.xdroop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.xdroop'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.xdroop'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContQIEC.xdroop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContQIEC.xdroop'],
                                                   'cim:PU',
                                                   'cim:WindContQIEC.xdroop'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindContQIEC.iqh1",
            "cim:WindContQIEC.iqmax",
            "cim:WindContQIEC.iqmin",
            "cim:WindContQIEC.iqpost",
            "cim:WindContQIEC.kiq",
            "cim:WindContQIEC.kiu",
            "cim:WindContQIEC.kpq",
            "cim:WindContQIEC.kpu",
            "cim:WindContQIEC.kqv",
            "cim:WindContQIEC.qmax",
            "cim:WindContQIEC.qmin",
            "cim:WindContQIEC.rdroop",
            "cim:WindContQIEC.tiq",
            "cim:WindContQIEC.tpfilt",
            "cim:WindContQIEC.tpost",
            "cim:WindContQIEC.tqord",
            "cim:WindContQIEC.tufilt",
            "cim:WindContQIEC.udb1",
            "cim:WindContQIEC.udb2",
            "cim:WindContQIEC.umax",
            "cim:WindContQIEC.umin",
            "cim:WindContQIEC.uqdip",
            "cim:WindContQIEC.uref0",
            "cim:WindContQIEC.windLVRTQcontrolModesType",
            "cim:WindContQIEC.windQcontrolModesType",
            "cim:WindContQIEC.xdroop",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( IdentifiedObject.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!WindContQIEC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindContQIEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindContQIEC.attributeHTML(object, cimmenu);
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
export default WindContQIEC
