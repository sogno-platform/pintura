import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ActivePower extends BaseClass {

    static attributeHTML(object, cimmenu, classType="ActivePower") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:ActivePower.value' in object) {
            attributeEntries['filledEntries']['cim:ActivePower.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePower.value'],
                                                   'cim:Float',
                                                   'cim:ActivePower.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ActivePower.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePower.value'],
                                                   'cim:Float',
                                                   'cim:ActivePower.value'
                                                 );
        }
        if ('cim:ActivePower.unit' in object) {
            attributeEntries['filledEntries']['cim:ActivePower.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePower.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:ActivePower.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ActivePower.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePower.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:ActivePower.unit'
                                                 );
        }
        if ('cim:ActivePower.multiplier' in object) {
            attributeEntries['filledEntries']['cim:ActivePower.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePower.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:ActivePower.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ActivePower.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ActivePower.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:ActivePower.multiplier'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.SV, CGMESProfile.shortNames.DY, ],
						'value': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.SV, CGMESProfile.shortNames.DY, ],
						'unit': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.SV, CGMESProfile.shortNames.DY, ],
						'multiplier': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.SV, CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ActivePower.value",
            "cim:ActivePower.unit",
            "cim:ActivePower.multiplier",
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
            if (!ActivePower.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ActivePower: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ActivePower.attributeHTML(object, cimmenu);
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
export default ActivePower
