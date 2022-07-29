import templates from "../../templates/index.js"
import DCConductingEquipment from "./DCConductingEquipment.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class DCShunt extends DCConductingEquipment {

    static attributeHTML(object, cimmenu, classType="DCShunt") {
        let attributeEntries = DCConductingEquipment.attributeHTML(object, cimmenu, classType);
        if ('cim:DCShunt.capacitance' in object) {
            attributeEntries['filledEntries']['cim:DCShunt.capacitance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCShunt.capacitance'],
                                                   'cim:Capacitance',
                                                   'cim:DCShunt.capacitance'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCShunt.capacitance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCShunt.capacitance'],
                                                   'cim:Capacitance',
                                                   'cim:DCShunt.capacitance'
                                                 );
        }
        if ('cim:DCShunt.resistance' in object) {
            attributeEntries['filledEntries']['cim:DCShunt.resistance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCShunt.resistance'],
                                                   'cim:Resistance',
                                                   'cim:DCShunt.resistance'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCShunt.resistance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCShunt.resistance'],
                                                   'cim:Resistance',
                                                   'cim:DCShunt.resistance'
                                                 );
        }
        if ('cim:DCShunt.ratedUdc' in object) {
            attributeEntries['filledEntries']['cim:DCShunt.ratedUdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCShunt.ratedUdc'],
                                                   'cim:Voltage',
                                                   'cim:DCShunt.ratedUdc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCShunt.ratedUdc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCShunt.ratedUdc'],
                                                   'cim:Voltage',
                                                   'cim:DCShunt.ratedUdc'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'capacitance': [CGMESProfile.shortNames.EQ, ],
						'resistance': [CGMESProfile.shortNames.EQ, ],
						'ratedUdc': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DCShunt.capacitance",
            "cim:DCShunt.resistance",
            "cim:DCShunt.ratedUdc",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( DCConductingEquipment.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!DCShunt.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class DCShunt: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DCShunt.attributeHTML(object, cimmenu);
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
export default DCShunt
