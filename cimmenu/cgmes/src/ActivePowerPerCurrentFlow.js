import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ActivePowerPerCurrentFlow extends BaseClass {

    static attributeHTML(object, cimmenu, classType="ActivePowerPerCurrentFlow") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:ActivePowerPerCurrentFlow.denominatorMultiplier' in object) {
            attributeEntries['filledEntries']['cim:ActivePowerPerCurrentFlow.denominatorMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerCurrentFlow.denominatorMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:ActivePowerPerCurrentFlow.denominatorMultiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ActivePowerPerCurrentFlow.denominatorMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerCurrentFlow.denominatorMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:ActivePowerPerCurrentFlow.denominatorMultiplier'
                                                 );
        }
        if ('cim:ActivePowerPerCurrentFlow.denominatorUnit' in object) {
            attributeEntries['filledEntries']['cim:ActivePowerPerCurrentFlow.denominatorUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerCurrentFlow.denominatorUnit'],
                                                   'cim:UnitSymbol',
                                                   'cim:ActivePowerPerCurrentFlow.denominatorUnit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ActivePowerPerCurrentFlow.denominatorUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerCurrentFlow.denominatorUnit'],
                                                   'cim:UnitSymbol',
                                                   'cim:ActivePowerPerCurrentFlow.denominatorUnit'
                                                 );
        }
        if ('cim:ActivePowerPerCurrentFlow.multiplier' in object) {
            attributeEntries['filledEntries']['cim:ActivePowerPerCurrentFlow.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerCurrentFlow.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:ActivePowerPerCurrentFlow.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ActivePowerPerCurrentFlow.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerCurrentFlow.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:ActivePowerPerCurrentFlow.multiplier'
                                                 );
        }
        if ('cim:ActivePowerPerCurrentFlow.unit' in object) {
            attributeEntries['filledEntries']['cim:ActivePowerPerCurrentFlow.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerCurrentFlow.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:ActivePowerPerCurrentFlow.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ActivePowerPerCurrentFlow.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerCurrentFlow.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:ActivePowerPerCurrentFlow.unit'
                                                 );
        }
        if ('cim:ActivePowerPerCurrentFlow.value' in object) {
            attributeEntries['filledEntries']['cim:ActivePowerPerCurrentFlow.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerCurrentFlow.value'],
                                                   'cim:Float',
                                                   'cim:ActivePowerPerCurrentFlow.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ActivePowerPerCurrentFlow.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePowerPerCurrentFlow.value'],
                                                   'cim:Float',
                                                   'cim:ActivePowerPerCurrentFlow.value'
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
            "cim:ActivePowerPerCurrentFlow.denominatorMultiplier",
            "cim:ActivePowerPerCurrentFlow.denominatorUnit",
            "cim:ActivePowerPerCurrentFlow.multiplier",
            "cim:ActivePowerPerCurrentFlow.unit",
            "cim:ActivePowerPerCurrentFlow.value",
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
            if (!ActivePowerPerCurrentFlow.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ActivePowerPerCurrentFlow: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ActivePowerPerCurrentFlow.attributeHTML(object, cimmenu);
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
export default ActivePowerPerCurrentFlow
