import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class CapacitancePerLength extends BaseClass {

    static attributeHTML(object, cimmenu, classType="CapacitancePerLength") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:CapacitancePerLength.value' in object) {
            attributeEntries['filledEntries']['cim:CapacitancePerLength.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CapacitancePerLength.value'],
                                                   'cim:Float',
                                                   'cim:CapacitancePerLength.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CapacitancePerLength.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CapacitancePerLength.value'],
                                                   'cim:Float',
                                                   'cim:CapacitancePerLength.value'
                                                 );
        }
        if ('cim:CapacitancePerLength.unit' in object) {
            attributeEntries['filledEntries']['cim:CapacitancePerLength.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CapacitancePerLength.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:CapacitancePerLength.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CapacitancePerLength.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CapacitancePerLength.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:CapacitancePerLength.unit'
                                                 );
        }
        if ('cim:CapacitancePerLength.multiplier' in object) {
            attributeEntries['filledEntries']['cim:CapacitancePerLength.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CapacitancePerLength.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:CapacitancePerLength.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CapacitancePerLength.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CapacitancePerLength.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:CapacitancePerLength.multiplier'
                                                 );
        }
        if ('cim:CapacitancePerLength.denominatorUnit' in object) {
            attributeEntries['filledEntries']['cim:CapacitancePerLength.denominatorUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CapacitancePerLength.denominatorUnit'],
                                                   'cim:UnitSymbol',
                                                   'cim:CapacitancePerLength.denominatorUnit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CapacitancePerLength.denominatorUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CapacitancePerLength.denominatorUnit'],
                                                   'cim:UnitSymbol',
                                                   'cim:CapacitancePerLength.denominatorUnit'
                                                 );
        }
        if ('cim:CapacitancePerLength.denominatorMultiplier' in object) {
            attributeEntries['filledEntries']['cim:CapacitancePerLength.denominatorMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CapacitancePerLength.denominatorMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:CapacitancePerLength.denominatorMultiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CapacitancePerLength.denominatorMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CapacitancePerLength.denominatorMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:CapacitancePerLength.denominatorMultiplier'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'value': [CGMESProfile.shortNames.EQ, ],
						'unit': [CGMESProfile.shortNames.EQ, ],
						'multiplier': [CGMESProfile.shortNames.EQ, ],
						'denominatorUnit': [CGMESProfile.shortNames.EQ, ],
						'denominatorMultiplier': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:CapacitancePerLength.value",
            "cim:CapacitancePerLength.unit",
            "cim:CapacitancePerLength.multiplier",
            "cim:CapacitancePerLength.denominatorUnit",
            "cim:CapacitancePerLength.denominatorMultiplier",
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
            if (!CapacitancePerLength.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class CapacitancePerLength: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = CapacitancePerLength.attributeHTML(object, cimmenu);
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
export default CapacitancePerLength
