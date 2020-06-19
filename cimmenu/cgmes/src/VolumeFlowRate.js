import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"

class VolumeFlowRate extends BaseClass {

    static attributeHTML(object, cimmenu, classType="VolumeFlowRate") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:VolumeFlowRate.denominatorMultiplier' in object) {
            attributeEntries['filledEntries']['cim:VolumeFlowRate.denominatorMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VolumeFlowRate.denominatorMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:VolumeFlowRate.denominatorMultiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VolumeFlowRate.denominatorMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VolumeFlowRate.denominatorMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:VolumeFlowRate.denominatorMultiplier'
                                                 );
        }
        if ('cim:VolumeFlowRate.denominatorUnit' in object) {
            attributeEntries['filledEntries']['cim:VolumeFlowRate.denominatorUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VolumeFlowRate.denominatorUnit'],
                                                   'cim:UnitSymbol',
                                                   'cim:VolumeFlowRate.denominatorUnit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VolumeFlowRate.denominatorUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VolumeFlowRate.denominatorUnit'],
                                                   'cim:UnitSymbol',
                                                   'cim:VolumeFlowRate.denominatorUnit'
                                                 );
        }
        if ('cim:VolumeFlowRate.multiplier' in object) {
            attributeEntries['filledEntries']['cim:VolumeFlowRate.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VolumeFlowRate.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:VolumeFlowRate.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VolumeFlowRate.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VolumeFlowRate.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:VolumeFlowRate.multiplier'
                                                 );
        }
        if ('cim:VolumeFlowRate.unit' in object) {
            attributeEntries['filledEntries']['cim:VolumeFlowRate.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VolumeFlowRate.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:VolumeFlowRate.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VolumeFlowRate.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VolumeFlowRate.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:VolumeFlowRate.unit'
                                                 );
        }
        if ('cim:VolumeFlowRate.value' in object) {
            attributeEntries['filledEntries']['cim:VolumeFlowRate.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VolumeFlowRate.value'],
                                                   'cim:Float',
                                                   'cim:VolumeFlowRate.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VolumeFlowRate.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VolumeFlowRate.value'],
                                                   'cim:Float',
                                                   'cim:VolumeFlowRate.value'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:VolumeFlowRate.denominatorMultiplier",
            "cim:VolumeFlowRate.denominatorUnit",
            "cim:VolumeFlowRate.multiplier",
            "cim:VolumeFlowRate.unit",
            "cim:VolumeFlowRate.value",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( BaseClass.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!VolumeFlowRate.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class VolumeFlowRate: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = VolumeFlowRate.attributeHTML(object, cimmenu);
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
export default VolumeFlowRate
