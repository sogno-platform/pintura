import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class AngleRadians extends BaseClass {

    static attributeHTML(object, cimmenu, classType="AngleRadians") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:AngleRadians.value' in object) {
            attributeEntries['filledEntries']['cim:AngleRadians.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AngleRadians.value'],
                                                   'cim:Float',
                                                   'cim:AngleRadians.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AngleRadians.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AngleRadians.value'],
                                                   'cim:Float',
                                                   'cim:AngleRadians.value'
                                                 );
        }
        if ('cim:AngleRadians.unit' in object) {
            attributeEntries['filledEntries']['cim:AngleRadians.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AngleRadians.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:AngleRadians.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AngleRadians.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AngleRadians.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:AngleRadians.unit'
                                                 );
        }
        if ('cim:AngleRadians.multiplier' in object) {
            attributeEntries['filledEntries']['cim:AngleRadians.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AngleRadians.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:AngleRadians.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AngleRadians.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AngleRadians.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:AngleRadians.multiplier'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'value': [CGMESProfile.shortNames.EQ, ],
						'unit': [CGMESProfile.shortNames.EQ, ],
						'multiplier': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:AngleRadians.value",
            "cim:AngleRadians.unit",
            "cim:AngleRadians.multiplier",
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
            if (!AngleRadians.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class AngleRadians: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = AngleRadians.attributeHTML(object, cimmenu);
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
export default AngleRadians
