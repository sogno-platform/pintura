import templates from "../../templates/index.js"
import DCBaseTerminal from "./DCBaseTerminal.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ACDCConverterDCTerminal extends DCBaseTerminal {

    static attributeHTML(object, cimmenu, classType="ACDCConverterDCTerminal") {
        let attributeEntries = DCBaseTerminal.attributeHTML(object, cimmenu, classType);
        if ('cim:ACDCConverterDCTerminal.DCConductingEquipment' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverterDCTerminal.DCConductingEquipment'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverterDCTerminal.DCConductingEquipment'],
                                                   'cim:ACDCConverter',
                                                   'cim:ACDCConverterDCTerminal.DCConductingEquipment'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverterDCTerminal.DCConductingEquipment'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverterDCTerminal.DCConductingEquipment'],
                                                   'cim:ACDCConverter',
                                                   'cim:ACDCConverterDCTerminal.DCConductingEquipment'
                                                 );
        }
        if ('cim:ACDCConverterDCTerminal.polarity' in object) {
            attributeEntries['filledEntries']['cim:ACDCConverterDCTerminal.polarity'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverterDCTerminal.polarity'],
                                                   'cim:DCPolarityKind',
                                                   'cim:ACDCConverterDCTerminal.polarity'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCConverterDCTerminal.polarity'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCConverterDCTerminal.polarity'],
                                                   'cim:DCPolarityKind',
                                                   'cim:ACDCConverterDCTerminal.polarity'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.TP, ],
						'DCConductingEquipment': [CGMESProfile.shortNames.EQ, ],
						'polarity': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ACDCConverterDCTerminal.DCConductingEquipment",
            "cim:ACDCConverterDCTerminal.polarity",
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
            if (!ACDCConverterDCTerminal.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ACDCConverterDCTerminal: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ACDCConverterDCTerminal.attributeHTML(object, cimmenu);
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
export default ACDCConverterDCTerminal
