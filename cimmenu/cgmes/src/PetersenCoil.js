import templates from "../../templates/index.js"
import EarthFaultCompensator from "./EarthFaultCompensator.js"
import common from "../../src/common.js"

class PetersenCoil extends EarthFaultCompensator {

    static attributeHTML(object, cimmenu, classType="PetersenCoil") {
        let attributeEntries = EarthFaultCompensator.attributeHTML(object, cimmenu, classType);
        if ('cim:PetersenCoil.mode' in object) {
            attributeEntries['filledEntries']['cim:PetersenCoil.mode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PetersenCoil.mode'],
                                                   'cim:PetersenCoilModeKind',
                                                   'cim:PetersenCoil.mode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PetersenCoil.mode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PetersenCoil.mode'],
                                                   'cim:PetersenCoilModeKind',
                                                   'cim:PetersenCoil.mode'
                                                 );
        }
        if ('cim:PetersenCoil.nominalU' in object) {
            attributeEntries['filledEntries']['cim:PetersenCoil.nominalU'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PetersenCoil.nominalU'],
                                                   'cim:Voltage',
                                                   'cim:PetersenCoil.nominalU'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PetersenCoil.nominalU'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PetersenCoil.nominalU'],
                                                   'cim:Voltage',
                                                   'cim:PetersenCoil.nominalU'
                                                 );
        }
        if ('cim:PetersenCoil.offsetCurrent' in object) {
            attributeEntries['filledEntries']['cim:PetersenCoil.offsetCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PetersenCoil.offsetCurrent'],
                                                   'cim:CurrentFlow',
                                                   'cim:PetersenCoil.offsetCurrent'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PetersenCoil.offsetCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PetersenCoil.offsetCurrent'],
                                                   'cim:CurrentFlow',
                                                   'cim:PetersenCoil.offsetCurrent'
                                                 );
        }
        if ('cim:PetersenCoil.positionCurrent' in object) {
            attributeEntries['filledEntries']['cim:PetersenCoil.positionCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PetersenCoil.positionCurrent'],
                                                   'cim:CurrentFlow',
                                                   'cim:PetersenCoil.positionCurrent'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PetersenCoil.positionCurrent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PetersenCoil.positionCurrent'],
                                                   'cim:CurrentFlow',
                                                   'cim:PetersenCoil.positionCurrent'
                                                 );
        }
        if ('cim:PetersenCoil.xGroundMax' in object) {
            attributeEntries['filledEntries']['cim:PetersenCoil.xGroundMax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PetersenCoil.xGroundMax'],
                                                   'cim:Reactance',
                                                   'cim:PetersenCoil.xGroundMax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PetersenCoil.xGroundMax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PetersenCoil.xGroundMax'],
                                                   'cim:Reactance',
                                                   'cim:PetersenCoil.xGroundMax'
                                                 );
        }
        if ('cim:PetersenCoil.xGroundMin' in object) {
            attributeEntries['filledEntries']['cim:PetersenCoil.xGroundMin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PetersenCoil.xGroundMin'],
                                                   'cim:Reactance',
                                                   'cim:PetersenCoil.xGroundMin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PetersenCoil.xGroundMin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PetersenCoil.xGroundMin'],
                                                   'cim:Reactance',
                                                   'cim:PetersenCoil.xGroundMin'
                                                 );
        }
        if ('cim:PetersenCoil.xGroundNominal' in object) {
            attributeEntries['filledEntries']['cim:PetersenCoil.xGroundNominal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PetersenCoil.xGroundNominal'],
                                                   'cim:Reactance',
                                                   'cim:PetersenCoil.xGroundNominal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PetersenCoil.xGroundNominal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PetersenCoil.xGroundNominal'],
                                                   'cim:Reactance',
                                                   'cim:PetersenCoil.xGroundNominal'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PetersenCoil.mode",
            "cim:PetersenCoil.nominalU",
            "cim:PetersenCoil.offsetCurrent",
            "cim:PetersenCoil.positionCurrent",
            "cim:PetersenCoil.xGroundMax",
            "cim:PetersenCoil.xGroundMin",
            "cim:PetersenCoil.xGroundNominal",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( EarthFaultCompensator.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!PetersenCoil.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PetersenCoil: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PetersenCoil.attributeHTML(object, cimmenu);
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
export default PetersenCoil
