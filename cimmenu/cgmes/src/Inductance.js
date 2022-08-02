import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Inductance extends BaseClass {

    static attributeHTML(object, cimmenu, classType="Inductance") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:Inductance.value' in object) {
            attributeEntries['filledEntries']['cim:Inductance.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Inductance.value'],
                                                   'cim:Float',
                                                   'cim:Inductance.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Inductance.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Inductance.value'],
                                                   'cim:Float',
                                                   'cim:Inductance.value'
                                                 );
        }
        if ('cim:Inductance.unit' in object) {
            attributeEntries['filledEntries']['cim:Inductance.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Inductance.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Inductance.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Inductance.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Inductance.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Inductance.unit'
                                                 );
        }
        if ('cim:Inductance.multiplier' in object) {
            attributeEntries['filledEntries']['cim:Inductance.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Inductance.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Inductance.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Inductance.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Inductance.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Inductance.multiplier'
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
            "cim:Inductance.value",
            "cim:Inductance.unit",
            "cim:Inductance.multiplier",
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
            if (!Inductance.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class Inductance: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Inductance.attributeHTML(object, cimmenu);
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
export default Inductance
