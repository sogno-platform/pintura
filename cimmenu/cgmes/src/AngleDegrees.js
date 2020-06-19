import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"

class AngleDegrees extends BaseClass {

    static attributeHTML(object, cimmenu, classType="AngleDegrees") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:AngleDegrees.value' in object) {
            attributeEntries['filledEntries']['cim:AngleDegrees.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AngleDegrees.value'],
                                                   'cim:Float',
                                                   'cim:AngleDegrees.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AngleDegrees.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AngleDegrees.value'],
                                                   'cim:Float',
                                                   'cim:AngleDegrees.value'
                                                 );
        }
        if ('cim:AngleDegrees.unit' in object) {
            attributeEntries['filledEntries']['cim:AngleDegrees.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AngleDegrees.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:AngleDegrees.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AngleDegrees.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AngleDegrees.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:AngleDegrees.unit'
                                                 );
        }
        if ('cim:AngleDegrees.multiplier' in object) {
            attributeEntries['filledEntries']['cim:AngleDegrees.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AngleDegrees.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:AngleDegrees.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AngleDegrees.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AngleDegrees.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:AngleDegrees.multiplier'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:AngleDegrees.value",
            "cim:AngleDegrees.unit",
            "cim:AngleDegrees.multiplier",
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
            if (!AngleDegrees.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class AngleDegrees: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = AngleDegrees.attributeHTML(object, cimmenu);
        let filledEntries = separateEntries['filledEntries'];
        let emptyEntries = separateEntries['emptyEntries'];
        let attributeEntries = { ...filledEntries, ...emptyEntries };
        return templates.handlebars_cim_class_render({ 'attributes': attributeEntries});
    }
    static renderAsAttribute(data) {
        return templates.handlebars_cim_render_float(data)
    }
    static subClassList() {
        let subClasses = [
        ];
        return subClasses;
    }
};
export default AngleDegrees
