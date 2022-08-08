import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ApparentPower extends BaseClass {

    static attributeHTML(object, cimmenu, classType="ApparentPower") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:ApparentPower.value' in object) {
            attributeEntries['filledEntries']['cim:ApparentPower.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ApparentPower.value'],
                                                   'cim:Float',
                                                   'cim:ApparentPower.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ApparentPower.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ApparentPower.value'],
                                                   'cim:Float',
                                                   'cim:ApparentPower.value'
                                                 );
        }
        if ('cim:ApparentPower.unit' in object) {
            attributeEntries['filledEntries']['cim:ApparentPower.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ApparentPower.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:ApparentPower.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ApparentPower.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ApparentPower.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:ApparentPower.unit'
                                                 );
        }
        if ('cim:ApparentPower.multiplier' in object) {
            attributeEntries['filledEntries']['cim:ApparentPower.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ApparentPower.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:ApparentPower.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ApparentPower.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ApparentPower.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:ApparentPower.multiplier'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.DY, ],
						'value': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.DY, ],
						'unit': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.DY, ],
						'multiplier': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ApparentPower.value",
            "cim:ApparentPower.unit",
            "cim:ApparentPower.multiplier",
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
            if (!ApparentPower.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ApparentPower: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ApparentPower.attributeHTML(object, cimmenu);
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
export default ApparentPower
