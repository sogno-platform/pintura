import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class WindContPType3IEC extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="WindContPType3IEC") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:WindContPType3IEC.dpmax' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.dpmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.dpmax'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.dpmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.dpmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.dpmax'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.dpmax'
                                                 );
        }
        if ('cim:WindContPType3IEC.dtrisemaxlvrt' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.dtrisemaxlvrt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.dtrisemaxlvrt'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.dtrisemaxlvrt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.dtrisemaxlvrt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.dtrisemaxlvrt'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.dtrisemaxlvrt'
                                                 );
        }
        if ('cim:WindContPType3IEC.kdtd' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.kdtd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.kdtd'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.kdtd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.kdtd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.kdtd'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.kdtd'
                                                 );
        }
        if ('cim:WindContPType3IEC.kip' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.kip'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.kip'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.kip'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.kip'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.kip'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.kip'
                                                 );
        }
        if ('cim:WindContPType3IEC.kpp' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.kpp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.kpp'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.kpp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.kpp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.kpp'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.kpp'
                                                 );
        }
        if ('cim:WindContPType3IEC.mplvrt' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.mplvrt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.mplvrt'],
                                                   'cim:Boolean',
                                                   'cim:WindContPType3IEC.mplvrt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.mplvrt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.mplvrt'],
                                                   'cim:Boolean',
                                                   'cim:WindContPType3IEC.mplvrt'
                                                 );
        }
        if ('cim:WindContPType3IEC.omegaoffset' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.omegaoffset'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.omegaoffset'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.omegaoffset'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.omegaoffset'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.omegaoffset'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.omegaoffset'
                                                 );
        }
        if ('cim:WindContPType3IEC.pdtdmax' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.pdtdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.pdtdmax'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.pdtdmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.pdtdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.pdtdmax'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.pdtdmax'
                                                 );
        }
        if ('cim:WindContPType3IEC.rramp' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.rramp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.rramp'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.rramp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.rramp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.rramp'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.rramp'
                                                 );
        }
        if ('cim:WindContPType3IEC.tdvs' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.tdvs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.tdvs'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType3IEC.tdvs'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.tdvs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.tdvs'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType3IEC.tdvs'
                                                 );
        }
        if ('cim:WindContPType3IEC.temin' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.temin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.temin'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.temin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.temin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.temin'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.temin'
                                                 );
        }
        if ('cim:WindContPType3IEC.tomegafilt' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.tomegafilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.tomegafilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType3IEC.tomegafilt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.tomegafilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.tomegafilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType3IEC.tomegafilt'
                                                 );
        }
        if ('cim:WindContPType3IEC.tpfilt' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.tpfilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.tpfilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType3IEC.tpfilt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.tpfilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.tpfilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType3IEC.tpfilt'
                                                 );
        }
        if ('cim:WindContPType3IEC.tpord' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.tpord'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.tpord'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.tpord'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.tpord'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.tpord'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.tpord'
                                                 );
        }
        if ('cim:WindContPType3IEC.tufilt' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.tufilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.tufilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType3IEC.tufilt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.tufilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.tufilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType3IEC.tufilt'
                                                 );
        }
        if ('cim:WindContPType3IEC.tuscale' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.tuscale'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.tuscale'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.tuscale'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.tuscale'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.tuscale'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.tuscale'
                                                 );
        }
        if ('cim:WindContPType3IEC.twref' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.twref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.twref'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType3IEC.twref'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.twref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.twref'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType3IEC.twref'
                                                 );
        }
        if ('cim:WindContPType3IEC.udvs' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.udvs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.udvs'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.udvs'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.udvs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.udvs'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.udvs'
                                                 );
        }
        if ('cim:WindContPType3IEC.updip' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.updip'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.updip'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.updip'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.updip'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.updip'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.updip'
                                                 );
        }
        if ('cim:WindContPType3IEC.wdtd' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.wdtd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.wdtd'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.wdtd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.wdtd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.wdtd'],
                                                   'cim:PU',
                                                   'cim:WindContPType3IEC.wdtd'
                                                 );
        }
        if ('cim:WindContPType3IEC.zeta' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.zeta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.zeta'],
                                                   'cim:Simple_Float',
                                                   'cim:WindContPType3IEC.zeta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.zeta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.zeta'],
                                                   'cim:Simple_Float',
                                                   'cim:WindContPType3IEC.zeta'
                                                 );
        }
        if ('cim:WindContPType3IEC.WindDynamicsLookupTable' in object) {
            attributeEntries['filledEntries']['cim:WindContPType3IEC.WindDynamicsLookupTable'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.WindDynamicsLookupTable'],
                                                   'cim:WindDynamicsLookupTable',
                                                   'cim:WindContPType3IEC.WindDynamicsLookupTable'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType3IEC.WindDynamicsLookupTable'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType3IEC.WindDynamicsLookupTable'],
                                                   'cim:WindDynamicsLookupTable',
                                                   'cim:WindContPType3IEC.WindDynamicsLookupTable'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindContPType3IEC.dpmax",
            "cim:WindContPType3IEC.dtrisemaxlvrt",
            "cim:WindContPType3IEC.kdtd",
            "cim:WindContPType3IEC.kip",
            "cim:WindContPType3IEC.kpp",
            "cim:WindContPType3IEC.mplvrt",
            "cim:WindContPType3IEC.omegaoffset",
            "cim:WindContPType3IEC.pdtdmax",
            "cim:WindContPType3IEC.rramp",
            "cim:WindContPType3IEC.tdvs",
            "cim:WindContPType3IEC.temin",
            "cim:WindContPType3IEC.tomegafilt",
            "cim:WindContPType3IEC.tpfilt",
            "cim:WindContPType3IEC.tpord",
            "cim:WindContPType3IEC.tufilt",
            "cim:WindContPType3IEC.tuscale",
            "cim:WindContPType3IEC.twref",
            "cim:WindContPType3IEC.udvs",
            "cim:WindContPType3IEC.updip",
            "cim:WindContPType3IEC.wdtd",
            "cim:WindContPType3IEC.zeta",
            "cim:WindContPType3IEC.WindDynamicsLookupTable",
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
            if (!WindContPType3IEC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindContPType3IEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindContPType3IEC.attributeHTML(object, cimmenu);
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
export default WindContPType3IEC
