import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"

class Seconds extends BaseClass {

    static attributeHTML(object, cimmenu, classType="Seconds") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:Seconds.value' in object) {
            attributeEntries['filledEntries']['cim:Seconds.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Seconds.value'],
                                                   'cim:Float',
                                                   'cim:Seconds.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Seconds.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Seconds.value'],
                                                   'cim:Float',
                                                   'cim:Seconds.value'
                                                 );
        }
        if ('cim:Seconds.unit' in object) {
            attributeEntries['filledEntries']['cim:Seconds.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Seconds.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Seconds.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Seconds.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Seconds.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Seconds.unit'
                                                 );
        }
        if ('cim:Seconds.multiplier' in object) {
            attributeEntries['filledEntries']['cim:Seconds.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Seconds.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Seconds.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Seconds.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Seconds.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Seconds.multiplier'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Seconds.value",
            "cim:Seconds.unit",
            "cim:Seconds.multiplier",
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
            if (!Seconds.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class Seconds: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Seconds.attributeHTML(object, cimmenu);
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
export default Seconds
