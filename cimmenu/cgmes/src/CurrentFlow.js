import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"

class CurrentFlow extends BaseClass {

    static attributeHTML(object, cimmenu, classType="CurrentFlow") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:CurrentFlow.value' in object) {
            attributeEntries['filledEntries']['cim:CurrentFlow.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CurrentFlow.value'],
                                                   'cim:Float',
                                                   'cim:CurrentFlow.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CurrentFlow.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CurrentFlow.value'],
                                                   'cim:Float',
                                                   'cim:CurrentFlow.value'
                                                 );
        }
        if ('cim:CurrentFlow.unit' in object) {
            attributeEntries['filledEntries']['cim:CurrentFlow.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CurrentFlow.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:CurrentFlow.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CurrentFlow.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CurrentFlow.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:CurrentFlow.unit'
                                                 );
        }
        if ('cim:CurrentFlow.multiplier' in object) {
            attributeEntries['filledEntries']['cim:CurrentFlow.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CurrentFlow.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:CurrentFlow.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CurrentFlow.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CurrentFlow.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:CurrentFlow.multiplier'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:CurrentFlow.value",
            "cim:CurrentFlow.unit",
            "cim:CurrentFlow.multiplier",
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
            if (!CurrentFlow.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class CurrentFlow: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = CurrentFlow.attributeHTML(object, cimmenu);
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
export default CurrentFlow
