import templates from "../../templates/index.js"
import DCConductingEquipment from "./DCConductingEquipment.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class DCLineSegment extends DCConductingEquipment {

    static attributeHTML(object, cimmenu, classType="DCLineSegment") {
        let attributeEntries = DCConductingEquipment.attributeHTML(object, cimmenu, classType);
        if ('cim:DCLineSegment.capacitance' in object) {
            attributeEntries['filledEntries']['cim:DCLineSegment.capacitance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCLineSegment.capacitance'],
                                                   'cim:Capacitance',
                                                   'cim:DCLineSegment.capacitance'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCLineSegment.capacitance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCLineSegment.capacitance'],
                                                   'cim:Capacitance',
                                                   'cim:DCLineSegment.capacitance'
                                                 );
        }
        if ('cim:DCLineSegment.inductance' in object) {
            attributeEntries['filledEntries']['cim:DCLineSegment.inductance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCLineSegment.inductance'],
                                                   'cim:Inductance',
                                                   'cim:DCLineSegment.inductance'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCLineSegment.inductance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCLineSegment.inductance'],
                                                   'cim:Inductance',
                                                   'cim:DCLineSegment.inductance'
                                                 );
        }
        if ('cim:DCLineSegment.resistance' in object) {
            attributeEntries['filledEntries']['cim:DCLineSegment.resistance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCLineSegment.resistance'],
                                                   'cim:Resistance',
                                                   'cim:DCLineSegment.resistance'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCLineSegment.resistance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCLineSegment.resistance'],
                                                   'cim:Resistance',
                                                   'cim:DCLineSegment.resistance'
                                                 );
        }
        if ('cim:DCLineSegment.length' in object) {
            attributeEntries['filledEntries']['cim:DCLineSegment.length'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCLineSegment.length'],
                                                   'cim:Length',
                                                   'cim:DCLineSegment.length'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCLineSegment.length'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCLineSegment.length'],
                                                   'cim:Length',
                                                   'cim:DCLineSegment.length'
                                                 );
        }
        if ('cim:DCLineSegment.PerLengthParameter' in object) {
            attributeEntries['filledEntries']['cim:DCLineSegment.PerLengthParameter'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCLineSegment.PerLengthParameter'],
                                                   'cim:PerLengthDCLineParameter',
                                                   'cim:DCLineSegment.PerLengthParameter'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCLineSegment.PerLengthParameter'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCLineSegment.PerLengthParameter'],
                                                   'cim:PerLengthDCLineParameter',
                                                   'cim:DCLineSegment.PerLengthParameter'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'capacitance': [CGMESProfile.shortNames.EQ, ],
						'inductance': [CGMESProfile.shortNames.EQ, ],
						'resistance': [CGMESProfile.shortNames.EQ, ],
						'length': [CGMESProfile.shortNames.EQ, ],
						'PerLengthParameter': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DCLineSegment.capacitance",
            "cim:DCLineSegment.inductance",
            "cim:DCLineSegment.resistance",
            "cim:DCLineSegment.length",
            "cim:DCLineSegment.PerLengthParameter",
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
            if (!DCLineSegment.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class DCLineSegment: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DCLineSegment.attributeHTML(object, cimmenu);
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
export default DCLineSegment
