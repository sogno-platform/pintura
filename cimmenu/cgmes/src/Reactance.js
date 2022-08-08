import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Reactance extends BaseClass {

    static attributeHTML(object, cimmenu, classType="Reactance") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:Reactance.value' in object) {
            attributeEntries['filledEntries']['cim:Reactance.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Reactance.value'],
                                                   'cim:Float',
                                                   'cim:Reactance.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Reactance.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Reactance.value'],
                                                   'cim:Float',
                                                   'cim:Reactance.value'
                                                 );
        }
        if ('cim:Reactance.unit' in object) {
            attributeEntries['filledEntries']['cim:Reactance.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Reactance.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Reactance.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Reactance.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Reactance.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Reactance.unit'
                                                 );
        }
        if ('cim:Reactance.multiplier' in object) {
            attributeEntries['filledEntries']['cim:Reactance.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Reactance.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Reactance.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Reactance.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Reactance.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Reactance.multiplier'
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
            "cim:Reactance.value",
            "cim:Reactance.unit",
            "cim:Reactance.multiplier",
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
            if (!Reactance.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class Reactance: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Reactance.attributeHTML(object, cimmenu);
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
export default Reactance
