import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PerCent extends BaseClass {

    static attributeHTML(object, cimmenu, classType="PerCent") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:PerCent.value' in object) {
            attributeEntries['filledEntries']['cim:PerCent.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PerCent.value'],
                                                   'cim:Float',
                                                   'cim:PerCent.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PerCent.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PerCent.value'],
                                                   'cim:Float',
                                                   'cim:PerCent.value'
                                                 );
        }
        if ('cim:PerCent.unit' in object) {
            attributeEntries['filledEntries']['cim:PerCent.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PerCent.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:PerCent.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PerCent.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PerCent.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:PerCent.unit'
                                                 );
        }
        if ('cim:PerCent.multiplier' in object) {
            attributeEntries['filledEntries']['cim:PerCent.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PerCent.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:PerCent.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PerCent.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PerCent.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:PerCent.multiplier'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, ],
						'value': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, ],
						'unit': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, ],
						'multiplier': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PerCent.value",
            "cim:PerCent.unit",
            "cim:PerCent.multiplier",
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
            if (!PerCent.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class PerCent: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PerCent.attributeHTML(object, cimmenu);
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
export default PerCent
