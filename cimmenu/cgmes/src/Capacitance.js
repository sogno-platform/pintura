import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"

class Capacitance extends BaseClass {

    static attributeHTML(object, cimmenu, classType="Capacitance") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:Capacitance.value' in object) {
            attributeEntries['filledEntries']['cim:Capacitance.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Capacitance.value'],
                                                   'cim:Float',
                                                   'cim:Capacitance.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Capacitance.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Capacitance.value'],
                                                   'cim:Float',
                                                   'cim:Capacitance.value'
                                                 );
        }
        if ('cim:Capacitance.unit' in object) {
            attributeEntries['filledEntries']['cim:Capacitance.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Capacitance.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Capacitance.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Capacitance.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Capacitance.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Capacitance.unit'
                                                 );
        }
        if ('cim:Capacitance.multiplier' in object) {
            attributeEntries['filledEntries']['cim:Capacitance.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Capacitance.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Capacitance.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Capacitance.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Capacitance.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Capacitance.multiplier'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Capacitance.value",
            "cim:Capacitance.unit",
            "cim:Capacitance.multiplier",
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
            if (!Capacitance.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class Capacitance: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Capacitance.attributeHTML(object, cimmenu);
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
export default Capacitance
