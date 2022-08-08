import templates from "../../templates/index.js"
import EquipmentContainer from "./EquipmentContainer.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class VoltageLevel extends EquipmentContainer {

    static attributeHTML(object, cimmenu, classType="VoltageLevel") {
        let attributeEntries = EquipmentContainer.attributeHTML(object, cimmenu, classType);
        if ('cim:VoltageLevel.BaseVoltage' in object) {
            attributeEntries['filledEntries']['cim:VoltageLevel.BaseVoltage'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltageLevel.BaseVoltage'],
                                                   'cim:BaseVoltage',
                                                   'cim:VoltageLevel.BaseVoltage'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VoltageLevel.BaseVoltage'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltageLevel.BaseVoltage'],
                                                   'cim:BaseVoltage',
                                                   'cim:VoltageLevel.BaseVoltage'
                                                 );
        }
        if ('cim:VoltageLevel.Substation' in object) {
            attributeEntries['filledEntries']['cim:VoltageLevel.Substation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltageLevel.Substation'],
                                                   'cim:Substation',
                                                   'cim:VoltageLevel.Substation'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VoltageLevel.Substation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltageLevel.Substation'],
                                                   'cim:Substation',
                                                   'cim:VoltageLevel.Substation'
                                                 );
        }
        if ('cim:VoltageLevel.highVoltageLimit' in object) {
            attributeEntries['filledEntries']['cim:VoltageLevel.highVoltageLimit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltageLevel.highVoltageLimit'],
                                                   'cim:Voltage',
                                                   'cim:VoltageLevel.highVoltageLimit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VoltageLevel.highVoltageLimit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltageLevel.highVoltageLimit'],
                                                   'cim:Voltage',
                                                   'cim:VoltageLevel.highVoltageLimit'
                                                 );
        }
        if ('cim:VoltageLevel.lowVoltageLimit' in object) {
            attributeEntries['filledEntries']['cim:VoltageLevel.lowVoltageLimit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltageLevel.lowVoltageLimit'],
                                                   'cim:Voltage',
                                                   'cim:VoltageLevel.lowVoltageLimit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VoltageLevel.lowVoltageLimit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltageLevel.lowVoltageLimit'],
                                                   'cim:Voltage',
                                                   'cim:VoltageLevel.lowVoltageLimit'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'BaseVoltage': [CGMESProfile.shortNames.EQ, ],
						'Substation': [CGMESProfile.shortNames.EQ, ],
						'highVoltageLimit': [CGMESProfile.shortNames.EQ, ],
						'lowVoltageLimit': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:VoltageLevel.BaseVoltage",
            "cim:VoltageLevel.Substation",
            "cim:VoltageLevel.highVoltageLimit",
            "cim:VoltageLevel.lowVoltageLimit",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( EquipmentContainer.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!VoltageLevel.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class VoltageLevel: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = VoltageLevel.attributeHTML(object, cimmenu);
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
export default VoltageLevel
