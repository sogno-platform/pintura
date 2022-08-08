import templates from "../../templates/index.js"
import DCBaseTerminal from "./DCBaseTerminal.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class DCTerminal extends DCBaseTerminal {

    static attributeHTML(object, cimmenu, classType="DCTerminal") {
        let attributeEntries = DCBaseTerminal.attributeHTML(object, cimmenu, classType);
        if ('cim:DCTerminal.DCConductingEquipment' in object) {
            attributeEntries['filledEntries']['cim:DCTerminal.DCConductingEquipment'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCTerminal.DCConductingEquipment'],
                                                   'cim:DCConductingEquipment',
                                                   'cim:DCTerminal.DCConductingEquipment'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCTerminal.DCConductingEquipment'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCTerminal.DCConductingEquipment'],
                                                   'cim:DCConductingEquipment',
                                                   'cim:DCTerminal.DCConductingEquipment'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.TP, ],
						'DCConductingEquipment': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DCTerminal.DCConductingEquipment",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( DCBaseTerminal.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!DCTerminal.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class DCTerminal: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DCTerminal.attributeHTML(object, cimmenu);
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
export default DCTerminal
