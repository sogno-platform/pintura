import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PU extends BaseClass {

    static attributeHTML(object, cimmenu, classType="PU") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:PU.value' in object) {
            attributeEntries['filledEntries']['cim:PU.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PU.value'],
                                                   'cim:Float',
                                                   'cim:PU.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PU.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PU.value'],
                                                   'cim:Float',
                                                   'cim:PU.value'
                                                 );
        }
        if ('cim:PU.unit' in object) {
            attributeEntries['filledEntries']['cim:PU.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PU.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:PU.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PU.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PU.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:PU.unit'
                                                 );
        }
        if ('cim:PU.multiplier' in object) {
            attributeEntries['filledEntries']['cim:PU.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PU.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:PU.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PU.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PU.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:PU.multiplier'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.DY, ],
						'value': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.DY, ],
						'unit': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.DY, ],
						'multiplier': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PU.value",
            "cim:PU.unit",
            "cim:PU.multiplier",
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
            if (!PU.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PU: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PU.attributeHTML(object, cimmenu);
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
export default PU
