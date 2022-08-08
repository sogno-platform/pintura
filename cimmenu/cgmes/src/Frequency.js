import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Frequency extends BaseClass {

    static attributeHTML(object, cimmenu, classType="Frequency") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:Frequency.value' in object) {
            attributeEntries['filledEntries']['cim:Frequency.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Frequency.value'],
                                                   'cim:Float',
                                                   'cim:Frequency.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Frequency.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Frequency.value'],
                                                   'cim:Float',
                                                   'cim:Frequency.value'
                                                 );
        }
        if ('cim:Frequency.unit' in object) {
            attributeEntries['filledEntries']['cim:Frequency.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Frequency.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Frequency.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Frequency.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Frequency.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Frequency.unit'
                                                 );
        }
        if ('cim:Frequency.multiplier' in object) {
            attributeEntries['filledEntries']['cim:Frequency.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Frequency.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Frequency.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Frequency.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Frequency.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Frequency.multiplier'
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
            "cim:Frequency.value",
            "cim:Frequency.unit",
            "cim:Frequency.multiplier",
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
            if (!Frequency.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class Frequency: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Frequency.attributeHTML(object, cimmenu);
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
export default Frequency
