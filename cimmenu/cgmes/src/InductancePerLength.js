import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class InductancePerLength extends BaseClass {

    static attributeHTML(object, cimmenu, classType="InductancePerLength") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:InductancePerLength.value' in object) {
            attributeEntries['filledEntries']['cim:InductancePerLength.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['InductancePerLength.value'],
                                                   'cim:Float',
                                                   'cim:InductancePerLength.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:InductancePerLength.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['InductancePerLength.value'],
                                                   'cim:Float',
                                                   'cim:InductancePerLength.value'
                                                 );
        }
        if ('cim:InductancePerLength.unit' in object) {
            attributeEntries['filledEntries']['cim:InductancePerLength.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['InductancePerLength.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:InductancePerLength.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:InductancePerLength.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['InductancePerLength.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:InductancePerLength.unit'
                                                 );
        }
        if ('cim:InductancePerLength.multiplier' in object) {
            attributeEntries['filledEntries']['cim:InductancePerLength.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['InductancePerLength.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:InductancePerLength.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:InductancePerLength.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['InductancePerLength.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:InductancePerLength.multiplier'
                                                 );
        }
        if ('cim:InductancePerLength.denominatorUnit' in object) {
            attributeEntries['filledEntries']['cim:InductancePerLength.denominatorUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['InductancePerLength.denominatorUnit'],
                                                   'cim:UnitSymbol',
                                                   'cim:InductancePerLength.denominatorUnit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:InductancePerLength.denominatorUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['InductancePerLength.denominatorUnit'],
                                                   'cim:UnitSymbol',
                                                   'cim:InductancePerLength.denominatorUnit'
                                                 );
        }
        if ('cim:InductancePerLength.denominatorMultiplier' in object) {
            attributeEntries['filledEntries']['cim:InductancePerLength.denominatorMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['InductancePerLength.denominatorMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:InductancePerLength.denominatorMultiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:InductancePerLength.denominatorMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['InductancePerLength.denominatorMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:InductancePerLength.denominatorMultiplier'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'value': [CGMESProfile.shortNames.EQ, ],
						'unit': [CGMESProfile.shortNames.EQ, ],
						'multiplier': [CGMESProfile.shortNames.EQ, ],
						'denominatorUnit': [CGMESProfile.shortNames.EQ, ],
						'denominatorMultiplier': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:InductancePerLength.value",
            "cim:InductancePerLength.unit",
            "cim:InductancePerLength.multiplier",
            "cim:InductancePerLength.denominatorUnit",
            "cim:InductancePerLength.denominatorMultiplier",
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
            if (!InductancePerLength.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class InductancePerLength: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = InductancePerLength.attributeHTML(object, cimmenu);
        let filledEntries = separateEntries['filledEntries'];
        let emptyEntries = separateEntries['emptyEntries'];
        let attributeEntries = { ...filledEntries, ...emptyEntries };
        return templates.handlebars_cim_class_render({ 'attributes': attributeEntries});
    }
    static renderAsAttribute(matchingComponents) {
        let template = templates.handlebars_cim_update_complex_type;
        return template(matchingComponents);
    }
    static subClassList() {
        let subClasses = [
        ];
        return subClasses;
    }
};
export default InductancePerLength
