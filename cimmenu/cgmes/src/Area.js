import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Area extends BaseClass {

    static attributeHTML(object, cimmenu, classType="Area") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:Area.value' in object) {
            attributeEntries['filledEntries']['cim:Area.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Area.value'],
                                                   'cim:Float',
                                                   'cim:Area.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Area.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Area.value'],
                                                   'cim:Float',
                                                   'cim:Area.value'
                                                 );
        }
        if ('cim:Area.unit' in object) {
            attributeEntries['filledEntries']['cim:Area.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Area.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Area.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Area.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Area.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Area.unit'
                                                 );
        }
        if ('cim:Area.multiplier' in object) {
            attributeEntries['filledEntries']['cim:Area.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Area.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Area.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Area.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Area.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Area.multiplier'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'value': [CGMESProfile.shortNames.DY, ],
						'unit': [CGMESProfile.shortNames.DY, ],
						'multiplier': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Area.value",
            "cim:Area.unit",
            "cim:Area.multiplier",
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
            if (!Area.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class Area: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Area.attributeHTML(object, cimmenu);
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
export default Area
