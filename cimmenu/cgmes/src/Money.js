import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Money extends BaseClass {

    static attributeHTML(object, cimmenu, classType="Money") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:Money.unit' in object) {
            attributeEntries['filledEntries']['cim:Money.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Money.unit'],
                                                   'cim:Currency',
                                                   'cim:Money.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Money.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Money.unit'],
                                                   'cim:Currency',
                                                   'cim:Money.unit'
                                                 );
        }
        if ('cim:Money.multiplier' in object) {
            attributeEntries['filledEntries']['cim:Money.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Money.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Money.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Money.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Money.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Money.multiplier'
                                                 );
        }
        if ('cim:Money.value' in object) {
            attributeEntries['filledEntries']['cim:Money.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Money.value'],
                                                   'cim:Decimal',
                                                   'cim:Money.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Money.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Money.value'],
                                                   'cim:Decimal',
                                                   'cim:Money.value'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'unit': [CGMESProfile.shortNames.EQ, ],
						'multiplier': [CGMESProfile.shortNames.EQ, ],
						'value': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Money.unit",
            "cim:Money.multiplier",
            "cim:Money.value",
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
            if (!Money.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class Money: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Money.attributeHTML(object, cimmenu);
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
export default Money
