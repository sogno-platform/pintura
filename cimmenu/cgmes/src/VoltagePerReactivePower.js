import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class VoltagePerReactivePower extends BaseClass {

    static attributeHTML(object, cimmenu, classType="VoltagePerReactivePower") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:VoltagePerReactivePower.value' in object) {
            attributeEntries['filledEntries']['cim:VoltagePerReactivePower.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltagePerReactivePower.value'],
                                                   'cim:Float',
                                                   'cim:VoltagePerReactivePower.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VoltagePerReactivePower.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltagePerReactivePower.value'],
                                                   'cim:Float',
                                                   'cim:VoltagePerReactivePower.value'
                                                 );
        }
        if ('cim:VoltagePerReactivePower.unit' in object) {
            attributeEntries['filledEntries']['cim:VoltagePerReactivePower.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltagePerReactivePower.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:VoltagePerReactivePower.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VoltagePerReactivePower.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltagePerReactivePower.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:VoltagePerReactivePower.unit'
                                                 );
        }
        if ('cim:VoltagePerReactivePower.denominatorMultiplier' in object) {
            attributeEntries['filledEntries']['cim:VoltagePerReactivePower.denominatorMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltagePerReactivePower.denominatorMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:VoltagePerReactivePower.denominatorMultiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VoltagePerReactivePower.denominatorMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltagePerReactivePower.denominatorMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:VoltagePerReactivePower.denominatorMultiplier'
                                                 );
        }
        if ('cim:VoltagePerReactivePower.multiplier' in object) {
            attributeEntries['filledEntries']['cim:VoltagePerReactivePower.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltagePerReactivePower.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:VoltagePerReactivePower.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VoltagePerReactivePower.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltagePerReactivePower.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:VoltagePerReactivePower.multiplier'
                                                 );
        }
        if ('cim:VoltagePerReactivePower.denominatorUnit' in object) {
            attributeEntries['filledEntries']['cim:VoltagePerReactivePower.denominatorUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltagePerReactivePower.denominatorUnit'],
                                                   'cim:UnitSymbol',
                                                   'cim:VoltagePerReactivePower.denominatorUnit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VoltagePerReactivePower.denominatorUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltagePerReactivePower.denominatorUnit'],
                                                   'cim:UnitSymbol',
                                                   'cim:VoltagePerReactivePower.denominatorUnit'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'value': [CGMESProfile.shortNames.EQ, ],
						'unit': [CGMESProfile.shortNames.EQ, ],
						'denominatorMultiplier': [CGMESProfile.shortNames.EQ, ],
						'multiplier': [CGMESProfile.shortNames.EQ, ],
						'denominatorUnit': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:VoltagePerReactivePower.value",
            "cim:VoltagePerReactivePower.unit",
            "cim:VoltagePerReactivePower.denominatorMultiplier",
            "cim:VoltagePerReactivePower.multiplier",
            "cim:VoltagePerReactivePower.denominatorUnit",
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
            if (!VoltagePerReactivePower.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class VoltagePerReactivePower: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = VoltagePerReactivePower.attributeHTML(object, cimmenu);
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
export default VoltagePerReactivePower
