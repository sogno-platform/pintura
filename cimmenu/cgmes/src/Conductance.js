import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Conductance extends BaseClass {

    static attributeHTML(object, cimmenu, classType="Conductance") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:Conductance.value' in object) {
            attributeEntries['filledEntries']['cim:Conductance.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Conductance.value'],
                                                   'cim:Float',
                                                   'cim:Conductance.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Conductance.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Conductance.value'],
                                                   'cim:Float',
                                                   'cim:Conductance.value'
                                                 );
        }
        if ('cim:Conductance.unit' in object) {
            attributeEntries['filledEntries']['cim:Conductance.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Conductance.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Conductance.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Conductance.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Conductance.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Conductance.unit'
                                                 );
        }
        if ('cim:Conductance.multiplier' in object) {
            attributeEntries['filledEntries']['cim:Conductance.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Conductance.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Conductance.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Conductance.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Conductance.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Conductance.multiplier'
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
            "cim:Conductance.value",
            "cim:Conductance.unit",
            "cim:Conductance.multiplier",
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
            if (!Conductance.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class Conductance: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Conductance.attributeHTML(object, cimmenu);
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
export default Conductance
