import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"

class ResistancePerLength extends BaseClass {

    static attributeHTML(object, cimmenu, classType="ResistancePerLength") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:ResistancePerLength.value' in object) {
            attributeEntries['filledEntries']['cim:ResistancePerLength.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ResistancePerLength.value'],
                                                   'cim:Float',
                                                   'cim:ResistancePerLength.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ResistancePerLength.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ResistancePerLength.value'],
                                                   'cim:Float',
                                                   'cim:ResistancePerLength.value'
                                                 );
        }
        if ('cim:ResistancePerLength.unit' in object) {
            attributeEntries['filledEntries']['cim:ResistancePerLength.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ResistancePerLength.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:ResistancePerLength.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ResistancePerLength.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ResistancePerLength.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:ResistancePerLength.unit'
                                                 );
        }
        if ('cim:ResistancePerLength.multiplier' in object) {
            attributeEntries['filledEntries']['cim:ResistancePerLength.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ResistancePerLength.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:ResistancePerLength.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ResistancePerLength.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ResistancePerLength.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:ResistancePerLength.multiplier'
                                                 );
        }
        if ('cim:ResistancePerLength.denominatorUnit' in object) {
            attributeEntries['filledEntries']['cim:ResistancePerLength.denominatorUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ResistancePerLength.denominatorUnit'],
                                                   'cim:UnitSymbol',
                                                   'cim:ResistancePerLength.denominatorUnit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ResistancePerLength.denominatorUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ResistancePerLength.denominatorUnit'],
                                                   'cim:UnitSymbol',
                                                   'cim:ResistancePerLength.denominatorUnit'
                                                 );
        }
        if ('cim:ResistancePerLength.denominatorMultiplier' in object) {
            attributeEntries['filledEntries']['cim:ResistancePerLength.denominatorMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ResistancePerLength.denominatorMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:ResistancePerLength.denominatorMultiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ResistancePerLength.denominatorMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ResistancePerLength.denominatorMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:ResistancePerLength.denominatorMultiplier'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ResistancePerLength.value",
            "cim:ResistancePerLength.unit",
            "cim:ResistancePerLength.multiplier",
            "cim:ResistancePerLength.denominatorUnit",
            "cim:ResistancePerLength.denominatorMultiplier",
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
            if (!ResistancePerLength.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ResistancePerLength: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ResistancePerLength.attributeHTML(object, cimmenu);
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
export default ResistancePerLength
