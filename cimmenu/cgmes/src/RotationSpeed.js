import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"

class RotationSpeed extends BaseClass {

    static attributeHTML(object, cimmenu, classType="RotationSpeed") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:RotationSpeed.value' in object) {
            attributeEntries['filledEntries']['cim:RotationSpeed.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotationSpeed.value'],
                                                   'cim:Float',
                                                   'cim:RotationSpeed.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RotationSpeed.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotationSpeed.value'],
                                                   'cim:Float',
                                                   'cim:RotationSpeed.value'
                                                 );
        }
        if ('cim:RotationSpeed.unit' in object) {
            attributeEntries['filledEntries']['cim:RotationSpeed.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotationSpeed.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:RotationSpeed.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RotationSpeed.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotationSpeed.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:RotationSpeed.unit'
                                                 );
        }
        if ('cim:RotationSpeed.multiplier' in object) {
            attributeEntries['filledEntries']['cim:RotationSpeed.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotationSpeed.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:RotationSpeed.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RotationSpeed.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotationSpeed.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:RotationSpeed.multiplier'
                                                 );
        }
        if ('cim:RotationSpeed.denominatorUnit' in object) {
            attributeEntries['filledEntries']['cim:RotationSpeed.denominatorUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotationSpeed.denominatorUnit'],
                                                   'cim:UnitSymbol',
                                                   'cim:RotationSpeed.denominatorUnit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RotationSpeed.denominatorUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotationSpeed.denominatorUnit'],
                                                   'cim:UnitSymbol',
                                                   'cim:RotationSpeed.denominatorUnit'
                                                 );
        }
        if ('cim:RotationSpeed.denominatorMultiplier' in object) {
            attributeEntries['filledEntries']['cim:RotationSpeed.denominatorMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotationSpeed.denominatorMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:RotationSpeed.denominatorMultiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RotationSpeed.denominatorMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotationSpeed.denominatorMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:RotationSpeed.denominatorMultiplier'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:RotationSpeed.value",
            "cim:RotationSpeed.unit",
            "cim:RotationSpeed.multiplier",
            "cim:RotationSpeed.denominatorUnit",
            "cim:RotationSpeed.denominatorMultiplier",
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
            if (!RotationSpeed.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class RotationSpeed: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = RotationSpeed.attributeHTML(object, cimmenu);
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
export default RotationSpeed
