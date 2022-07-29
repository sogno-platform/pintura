import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PerLengthDCLineParameter extends BaseClass {

    static attributeHTML(object, cimmenu, classType="PerLengthDCLineParameter") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:PerLengthDCLineParameter.capacitance' in object) {
            attributeEntries['filledEntries']['cim:PerLengthDCLineParameter.capacitance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PerLengthDCLineParameter.capacitance'],
                                                   'cim:CapacitancePerLength',
                                                   'cim:PerLengthDCLineParameter.capacitance'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PerLengthDCLineParameter.capacitance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PerLengthDCLineParameter.capacitance'],
                                                   'cim:CapacitancePerLength',
                                                   'cim:PerLengthDCLineParameter.capacitance'
                                                 );
        }
        if ('cim:PerLengthDCLineParameter.inductance' in object) {
            attributeEntries['filledEntries']['cim:PerLengthDCLineParameter.inductance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PerLengthDCLineParameter.inductance'],
                                                   'cim:InductancePerLength',
                                                   'cim:PerLengthDCLineParameter.inductance'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PerLengthDCLineParameter.inductance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PerLengthDCLineParameter.inductance'],
                                                   'cim:InductancePerLength',
                                                   'cim:PerLengthDCLineParameter.inductance'
                                                 );
        }
        if ('cim:PerLengthDCLineParameter.resistance' in object) {
            attributeEntries['filledEntries']['cim:PerLengthDCLineParameter.resistance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PerLengthDCLineParameter.resistance'],
                                                   'cim:ResistancePerLength',
                                                   'cim:PerLengthDCLineParameter.resistance'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PerLengthDCLineParameter.resistance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PerLengthDCLineParameter.resistance'],
                                                   'cim:ResistancePerLength',
                                                   'cim:PerLengthDCLineParameter.resistance'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'capacitance': [CGMESProfile.shortNames.EQ, ],
						'inductance': [CGMESProfile.shortNames.EQ, ],
						'resistance': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PerLengthDCLineParameter.capacitance",
            "cim:PerLengthDCLineParameter.inductance",
            "cim:PerLengthDCLineParameter.resistance",
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
            if (!PerLengthDCLineParameter.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PerLengthDCLineParameter: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PerLengthDCLineParameter.attributeHTML(object, cimmenu);
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
export default PerLengthDCLineParameter
