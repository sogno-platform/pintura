import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"

class ReactivePower extends BaseClass {

    static attributeHTML(object, cimmenu, classType="ReactivePower") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:ReactivePower.value' in object) {
            attributeEntries['filledEntries']['cim:ReactivePower.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ReactivePower.value'],
                                                   'cim:Float',
                                                   'cim:ReactivePower.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ReactivePower.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ReactivePower.value'],
                                                   'cim:Float',
                                                   'cim:ReactivePower.value'
                                                 );
        }
        if ('cim:ReactivePower.unit' in object) {
            attributeEntries['filledEntries']['cim:ReactivePower.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ReactivePower.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:ReactivePower.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ReactivePower.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ReactivePower.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:ReactivePower.unit'
                                                 );
        }
        if ('cim:ReactivePower.multiplier' in object) {
            attributeEntries['filledEntries']['cim:ReactivePower.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ReactivePower.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:ReactivePower.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ReactivePower.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ReactivePower.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:ReactivePower.multiplier'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ReactivePower.value",
            "cim:ReactivePower.unit",
            "cim:ReactivePower.multiplier",
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
            if (!ReactivePower.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ReactivePower: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ReactivePower.attributeHTML(object, cimmenu);
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
export default ReactivePower
