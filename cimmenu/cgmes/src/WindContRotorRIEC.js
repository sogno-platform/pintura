import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class WindContRotorRIEC extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="WindContRotorRIEC") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:WindContRotorRIEC.kirr' in object) {
            attributeEntries['filledEntries']['cim:WindContRotorRIEC.kirr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContRotorRIEC.kirr'],
                                                   'cim:PU',
                                                   'cim:WindContRotorRIEC.kirr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContRotorRIEC.kirr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContRotorRIEC.kirr'],
                                                   'cim:PU',
                                                   'cim:WindContRotorRIEC.kirr'
                                                 );
        }
        if ('cim:WindContRotorRIEC.komegafilt' in object) {
            attributeEntries['filledEntries']['cim:WindContRotorRIEC.komegafilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContRotorRIEC.komegafilt'],
                                                   'cim:Simple_Float',
                                                   'cim:WindContRotorRIEC.komegafilt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContRotorRIEC.komegafilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContRotorRIEC.komegafilt'],
                                                   'cim:Simple_Float',
                                                   'cim:WindContRotorRIEC.komegafilt'
                                                 );
        }
        if ('cim:WindContRotorRIEC.kpfilt' in object) {
            attributeEntries['filledEntries']['cim:WindContRotorRIEC.kpfilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContRotorRIEC.kpfilt'],
                                                   'cim:Simple_Float',
                                                   'cim:WindContRotorRIEC.kpfilt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContRotorRIEC.kpfilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContRotorRIEC.kpfilt'],
                                                   'cim:Simple_Float',
                                                   'cim:WindContRotorRIEC.kpfilt'
                                                 );
        }
        if ('cim:WindContRotorRIEC.kprr' in object) {
            attributeEntries['filledEntries']['cim:WindContRotorRIEC.kprr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContRotorRIEC.kprr'],
                                                   'cim:PU',
                                                   'cim:WindContRotorRIEC.kprr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContRotorRIEC.kprr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContRotorRIEC.kprr'],
                                                   'cim:PU',
                                                   'cim:WindContRotorRIEC.kprr'
                                                 );
        }
        if ('cim:WindContRotorRIEC.rmax' in object) {
            attributeEntries['filledEntries']['cim:WindContRotorRIEC.rmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContRotorRIEC.rmax'],
                                                   'cim:PU',
                                                   'cim:WindContRotorRIEC.rmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContRotorRIEC.rmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContRotorRIEC.rmax'],
                                                   'cim:PU',
                                                   'cim:WindContRotorRIEC.rmax'
                                                 );
        }
        if ('cim:WindContRotorRIEC.rmin' in object) {
            attributeEntries['filledEntries']['cim:WindContRotorRIEC.rmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContRotorRIEC.rmin'],
                                                   'cim:PU',
                                                   'cim:WindContRotorRIEC.rmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContRotorRIEC.rmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContRotorRIEC.rmin'],
                                                   'cim:PU',
                                                   'cim:WindContRotorRIEC.rmin'
                                                 );
        }
        if ('cim:WindContRotorRIEC.tomegafilt' in object) {
            attributeEntries['filledEntries']['cim:WindContRotorRIEC.tomegafilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContRotorRIEC.tomegafilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContRotorRIEC.tomegafilt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContRotorRIEC.tomegafilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContRotorRIEC.tomegafilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContRotorRIEC.tomegafilt'
                                                 );
        }
        if ('cim:WindContRotorRIEC.tpfilt' in object) {
            attributeEntries['filledEntries']['cim:WindContRotorRIEC.tpfilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContRotorRIEC.tpfilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContRotorRIEC.tpfilt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContRotorRIEC.tpfilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContRotorRIEC.tpfilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContRotorRIEC.tpfilt'
                                                 );
        }
        if ('cim:WindContRotorRIEC.WindGenTurbineType2IEC' in object) {
            attributeEntries['filledEntries']['cim:WindContRotorRIEC.WindGenTurbineType2IEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContRotorRIEC.WindGenTurbineType2IEC'],
                                                   'cim:WindGenTurbineType2IEC',
                                                   'cim:WindContRotorRIEC.WindGenTurbineType2IEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContRotorRIEC.WindGenTurbineType2IEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContRotorRIEC.WindGenTurbineType2IEC'],
                                                   'cim:WindGenTurbineType2IEC',
                                                   'cim:WindContRotorRIEC.WindGenTurbineType2IEC'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindContRotorRIEC.kirr",
            "cim:WindContRotorRIEC.komegafilt",
            "cim:WindContRotorRIEC.kpfilt",
            "cim:WindContRotorRIEC.kprr",
            "cim:WindContRotorRIEC.rmax",
            "cim:WindContRotorRIEC.rmin",
            "cim:WindContRotorRIEC.tomegafilt",
            "cim:WindContRotorRIEC.tpfilt",
            "cim:WindContRotorRIEC.WindGenTurbineType2IEC",
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
            if (!WindContRotorRIEC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindContRotorRIEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindContRotorRIEC.attributeHTML(object, cimmenu);
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
export default WindContRotorRIEC
