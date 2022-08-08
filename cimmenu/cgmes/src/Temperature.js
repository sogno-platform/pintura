import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Temperature extends BaseClass {

    static attributeHTML(object, cimmenu, classType="Temperature") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:Temperature.multiplier' in object) {
            attributeEntries['filledEntries']['cim:Temperature.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Temperature.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Temperature.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Temperature.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Temperature.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Temperature.multiplier'
                                                 );
        }
        if ('cim:Temperature.unit' in object) {
            attributeEntries['filledEntries']['cim:Temperature.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Temperature.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Temperature.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Temperature.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Temperature.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Temperature.unit'
                                                 );
        }
        if ('cim:Temperature.value' in object) {
            attributeEntries['filledEntries']['cim:Temperature.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Temperature.value'],
                                                   'cim:Float',
                                                   'cim:Temperature.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Temperature.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Temperature.value'],
                                                   'cim:Float',
                                                   'cim:Temperature.value'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.DY, ],
						'multiplier': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.DY, ],
						'unit': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.DY, ],
						'value': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Temperature.multiplier",
            "cim:Temperature.unit",
            "cim:Temperature.value",
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
            if (!Temperature.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class Temperature: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Temperature.attributeHTML(object, cimmenu);
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
export default Temperature
