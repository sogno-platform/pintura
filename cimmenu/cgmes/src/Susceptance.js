import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Susceptance extends BaseClass {

    static attributeHTML(object, cimmenu, classType="Susceptance") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:Susceptance.value' in object) {
            attributeEntries['filledEntries']['cim:Susceptance.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Susceptance.value'],
                                                   'cim:Float',
                                                   'cim:Susceptance.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Susceptance.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Susceptance.value'],
                                                   'cim:Float',
                                                   'cim:Susceptance.value'
                                                 );
        }
        if ('cim:Susceptance.unit' in object) {
            attributeEntries['filledEntries']['cim:Susceptance.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Susceptance.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Susceptance.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Susceptance.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Susceptance.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Susceptance.unit'
                                                 );
        }
        if ('cim:Susceptance.multiplier' in object) {
            attributeEntries['filledEntries']['cim:Susceptance.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Susceptance.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Susceptance.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Susceptance.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Susceptance.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Susceptance.multiplier'
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
            "cim:Susceptance.value",
            "cim:Susceptance.unit",
            "cim:Susceptance.multiplier",
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
            if (!Susceptance.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class Susceptance: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Susceptance.attributeHTML(object, cimmenu);
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
export default Susceptance
