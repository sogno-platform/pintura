import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"

class Resistance extends BaseClass {

    static attributeHTML(object, cimmenu, classType="Resistance") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:Resistance.value' in object) {
            attributeEntries['filledEntries']['cim:Resistance.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Resistance.value'],
                                                   'cim:Float',
                                                   'cim:Resistance.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Resistance.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Resistance.value'],
                                                   'cim:Float',
                                                   'cim:Resistance.value'
                                                 );
        }
        if ('cim:Resistance.unit' in object) {
            attributeEntries['filledEntries']['cim:Resistance.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Resistance.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Resistance.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Resistance.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Resistance.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Resistance.unit'
                                                 );
        }
        if ('cim:Resistance.multiplier' in object) {
            attributeEntries['filledEntries']['cim:Resistance.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Resistance.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Resistance.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Resistance.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Resistance.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Resistance.multiplier'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Resistance.value",
            "cim:Resistance.unit",
            "cim:Resistance.multiplier",
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
            if (!Resistance.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class Resistance: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Resistance.attributeHTML(object, cimmenu);
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
export default Resistance
