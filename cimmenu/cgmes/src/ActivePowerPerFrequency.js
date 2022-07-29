import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ActivePowerPerFrequency extends BaseClass {

    static attributeHTML(object, cimmenu, classType="ActivePowerPerFrequency") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:ActivePowerPerFrequency.denominatorMultiplier' in object) {
            attributeEntries['filledEntries']['cim:ActivePowerPerFrequency.denominatorMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerFrequency.denominatorMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:ActivePowerPerFrequency.denominatorMultiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ActivePowerPerFrequency.denominatorMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerFrequency.denominatorMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:ActivePowerPerFrequency.denominatorMultiplier'
                                                 );
        }
        if ('cim:ActivePowerPerFrequency.denominatorUnit' in object) {
            attributeEntries['filledEntries']['cim:ActivePowerPerFrequency.denominatorUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerFrequency.denominatorUnit'],
                                                   'cim:UnitSymbol',
                                                   'cim:ActivePowerPerFrequency.denominatorUnit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ActivePowerPerFrequency.denominatorUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerFrequency.denominatorUnit'],
                                                   'cim:UnitSymbol',
                                                   'cim:ActivePowerPerFrequency.denominatorUnit'
                                                 );
        }
        if ('cim:ActivePowerPerFrequency.multiplier' in object) {
            attributeEntries['filledEntries']['cim:ActivePowerPerFrequency.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerFrequency.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:ActivePowerPerFrequency.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ActivePowerPerFrequency.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerFrequency.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:ActivePowerPerFrequency.multiplier'
                                                 );
        }
        if ('cim:ActivePowerPerFrequency.unit' in object) {
            attributeEntries['filledEntries']['cim:ActivePowerPerFrequency.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerFrequency.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:ActivePowerPerFrequency.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ActivePowerPerFrequency.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerFrequency.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:ActivePowerPerFrequency.unit'
                                                 );
        }
        if ('cim:ActivePowerPerFrequency.value' in object) {
            attributeEntries['filledEntries']['cim:ActivePowerPerFrequency.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerFrequency.value'],
                                                   'cim:Float',
                                                   'cim:ActivePowerPerFrequency.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ActivePowerPerFrequency.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerFrequency.value'],
                                                   'cim:Float',
                                                   'cim:ActivePowerPerFrequency.value'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'denominatorMultiplier': [CGMESProfile.shortNames.EQ, ],
						'denominatorUnit': [CGMESProfile.shortNames.EQ, ],
						'multiplier': [CGMESProfile.shortNames.EQ, ],
						'unit': [CGMESProfile.shortNames.EQ, ],
						'value': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ActivePowerPerFrequency.denominatorMultiplier",
            "cim:ActivePowerPerFrequency.denominatorUnit",
            "cim:ActivePowerPerFrequency.multiplier",
            "cim:ActivePowerPerFrequency.unit",
            "cim:ActivePowerPerFrequency.value",
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
            if (!ActivePowerPerFrequency.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ActivePowerPerFrequency: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ActivePowerPerFrequency.attributeHTML(object, cimmenu);
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
export default ActivePowerPerFrequency
