import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"

class Length extends BaseClass {

    static attributeHTML(object, cimmenu, classType="Length") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:Length.value' in object) {
            attributeEntries['filledEntries']['cim:Length.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Length.value'],
                                                   'cim:Float',
                                                   'cim:Length.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Length.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Length.value'],
                                                   'cim:Float',
                                                   'cim:Length.value'
                                                 );
        }
        if ('cim:Length.unit' in object) {
            attributeEntries['filledEntries']['cim:Length.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Length.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Length.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Length.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Length.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Length.unit'
                                                 );
        }
        if ('cim:Length.multiplier' in object) {
            attributeEntries['filledEntries']['cim:Length.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Length.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Length.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Length.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Length.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Length.multiplier'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Length.value",
            "cim:Length.unit",
            "cim:Length.multiplier",
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
            if (!Length.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class Length: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Length.attributeHTML(object, cimmenu);
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
export default Length
