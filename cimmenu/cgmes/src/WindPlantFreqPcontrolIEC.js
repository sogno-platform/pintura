import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class WindPlantFreqPcontrolIEC extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="WindPlantFreqPcontrolIEC") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:WindPlantFreqPcontrolIEC.dprefmax' in object) {
            attributeEntries['filledEntries']['cim:WindPlantFreqPcontrolIEC.dprefmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.dprefmax'],
                                                   'cim:PU',
                                                   'cim:WindPlantFreqPcontrolIEC.dprefmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantFreqPcontrolIEC.dprefmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.dprefmax'],
                                                   'cim:PU',
                                                   'cim:WindPlantFreqPcontrolIEC.dprefmax'
                                                 );
        }
        if ('cim:WindPlantFreqPcontrolIEC.dprefmin' in object) {
            attributeEntries['filledEntries']['cim:WindPlantFreqPcontrolIEC.dprefmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.dprefmin'],
                                                   'cim:PU',
                                                   'cim:WindPlantFreqPcontrolIEC.dprefmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantFreqPcontrolIEC.dprefmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.dprefmin'],
                                                   'cim:PU',
                                                   'cim:WindPlantFreqPcontrolIEC.dprefmin'
                                                 );
        }
        if ('cim:WindPlantFreqPcontrolIEC.kiwpp' in object) {
            attributeEntries['filledEntries']['cim:WindPlantFreqPcontrolIEC.kiwpp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.kiwpp'],
                                                   'cim:Simple_Float',
                                                   'cim:WindPlantFreqPcontrolIEC.kiwpp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantFreqPcontrolIEC.kiwpp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.kiwpp'],
                                                   'cim:Simple_Float',
                                                   'cim:WindPlantFreqPcontrolIEC.kiwpp'
                                                 );
        }
        if ('cim:WindPlantFreqPcontrolIEC.kpwpp' in object) {
            attributeEntries['filledEntries']['cim:WindPlantFreqPcontrolIEC.kpwpp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.kpwpp'],
                                                   'cim:Simple_Float',
                                                   'cim:WindPlantFreqPcontrolIEC.kpwpp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantFreqPcontrolIEC.kpwpp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.kpwpp'],
                                                   'cim:Simple_Float',
                                                   'cim:WindPlantFreqPcontrolIEC.kpwpp'
                                                 );
        }
        if ('cim:WindPlantFreqPcontrolIEC.prefmax' in object) {
            attributeEntries['filledEntries']['cim:WindPlantFreqPcontrolIEC.prefmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.prefmax'],
                                                   'cim:PU',
                                                   'cim:WindPlantFreqPcontrolIEC.prefmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantFreqPcontrolIEC.prefmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.prefmax'],
                                                   'cim:PU',
                                                   'cim:WindPlantFreqPcontrolIEC.prefmax'
                                                 );
        }
        if ('cim:WindPlantFreqPcontrolIEC.prefmin' in object) {
            attributeEntries['filledEntries']['cim:WindPlantFreqPcontrolIEC.prefmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.prefmin'],
                                                   'cim:PU',
                                                   'cim:WindPlantFreqPcontrolIEC.prefmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantFreqPcontrolIEC.prefmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.prefmin'],
                                                   'cim:PU',
                                                   'cim:WindPlantFreqPcontrolIEC.prefmin'
                                                 );
        }
        if ('cim:WindPlantFreqPcontrolIEC.tpft' in object) {
            attributeEntries['filledEntries']['cim:WindPlantFreqPcontrolIEC.tpft'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.tpft'],
                                                   'cim:Seconds',
                                                   'cim:WindPlantFreqPcontrolIEC.tpft'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantFreqPcontrolIEC.tpft'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.tpft'],
                                                   'cim:Seconds',
                                                   'cim:WindPlantFreqPcontrolIEC.tpft'
                                                 );
        }
        if ('cim:WindPlantFreqPcontrolIEC.tpfv' in object) {
            attributeEntries['filledEntries']['cim:WindPlantFreqPcontrolIEC.tpfv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.tpfv'],
                                                   'cim:Seconds',
                                                   'cim:WindPlantFreqPcontrolIEC.tpfv'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantFreqPcontrolIEC.tpfv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.tpfv'],
                                                   'cim:Seconds',
                                                   'cim:WindPlantFreqPcontrolIEC.tpfv'
                                                 );
        }
        if ('cim:WindPlantFreqPcontrolIEC.twpffilt' in object) {
            attributeEntries['filledEntries']['cim:WindPlantFreqPcontrolIEC.twpffilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.twpffilt'],
                                                   'cim:Seconds',
                                                   'cim:WindPlantFreqPcontrolIEC.twpffilt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantFreqPcontrolIEC.twpffilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.twpffilt'],
                                                   'cim:Seconds',
                                                   'cim:WindPlantFreqPcontrolIEC.twpffilt'
                                                 );
        }
        if ('cim:WindPlantFreqPcontrolIEC.twppfilt' in object) {
            attributeEntries['filledEntries']['cim:WindPlantFreqPcontrolIEC.twppfilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.twppfilt'],
                                                   'cim:Seconds',
                                                   'cim:WindPlantFreqPcontrolIEC.twppfilt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPlantFreqPcontrolIEC.twppfilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPlantFreqPcontrolIEC.twppfilt'],
                                                   'cim:Seconds',
                                                   'cim:WindPlantFreqPcontrolIEC.twppfilt'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindPlantFreqPcontrolIEC.dprefmax",
            "cim:WindPlantFreqPcontrolIEC.dprefmin",
            "cim:WindPlantFreqPcontrolIEC.kiwpp",
            "cim:WindPlantFreqPcontrolIEC.kpwpp",
            "cim:WindPlantFreqPcontrolIEC.prefmax",
            "cim:WindPlantFreqPcontrolIEC.prefmin",
            "cim:WindPlantFreqPcontrolIEC.tpft",
            "cim:WindPlantFreqPcontrolIEC.tpfv",
            "cim:WindPlantFreqPcontrolIEC.twpffilt",
            "cim:WindPlantFreqPcontrolIEC.twppfilt",
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
            if (!WindPlantFreqPcontrolIEC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindPlantFreqPcontrolIEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindPlantFreqPcontrolIEC.attributeHTML(object, cimmenu);
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
export default WindPlantFreqPcontrolIEC
