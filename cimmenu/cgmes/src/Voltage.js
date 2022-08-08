import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Voltage extends BaseClass {

    static attributeHTML(object, cimmenu, classType="Voltage") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:Voltage.value' in object) {
            attributeEntries['filledEntries']['cim:Voltage.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Voltage.value'],
                                                   'cim:Float',
                                                   'cim:Voltage.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Voltage.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Voltage.value'],
                                                   'cim:Float',
                                                   'cim:Voltage.value'
                                                 );
        }
        if ('cim:Voltage.unit' in object) {
            attributeEntries['filledEntries']['cim:Voltage.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Voltage.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Voltage.unit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Voltage.unit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Voltage.unit'],
                                                   'cim:UnitSymbol',
                                                   'cim:Voltage.unit'
                                                 );
        }
        if ('cim:Voltage.multiplier' in object) {
            attributeEntries['filledEntries']['cim:Voltage.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Voltage.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Voltage.multiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Voltage.multiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Voltage.multiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Voltage.multiplier'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.SV, CGMESProfile.shortNames.EQ_BD, ],
						'value': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.SV, CGMESProfile.shortNames.EQ_BD, ],
						'unit': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.SV, CGMESProfile.shortNames.EQ_BD, ],
						'multiplier': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.SV, CGMESProfile.shortNames.EQ_BD, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Voltage.value",
            "cim:Voltage.unit",
            "cim:Voltage.multiplier",
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
            if (!Voltage.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class Voltage: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Voltage.attributeHTML(object, cimmenu);
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
export default Voltage
