import templates from "../../templates/index.js"
import RegulatingCondEq from "./RegulatingCondEq.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class StaticVarCompensator extends RegulatingCondEq {

    static attributeHTML(object, cimmenu, classType="StaticVarCompensator") {
        let attributeEntries = RegulatingCondEq.attributeHTML(object, cimmenu, classType);
        if ('cim:StaticVarCompensator.capacitiveRating' in object) {
            attributeEntries['filledEntries']['cim:StaticVarCompensator.capacitiveRating'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StaticVarCompensator.capacitiveRating'],
                                                   'cim:Reactance',
                                                   'cim:StaticVarCompensator.capacitiveRating'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:StaticVarCompensator.capacitiveRating'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StaticVarCompensator.capacitiveRating'],
                                                   'cim:Reactance',
                                                   'cim:StaticVarCompensator.capacitiveRating'
                                                 );
        }
        if ('cim:StaticVarCompensator.inductiveRating' in object) {
            attributeEntries['filledEntries']['cim:StaticVarCompensator.inductiveRating'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StaticVarCompensator.inductiveRating'],
                                                   'cim:Reactance',
                                                   'cim:StaticVarCompensator.inductiveRating'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:StaticVarCompensator.inductiveRating'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StaticVarCompensator.inductiveRating'],
                                                   'cim:Reactance',
                                                   'cim:StaticVarCompensator.inductiveRating'
                                                 );
        }
        if ('cim:StaticVarCompensator.slope' in object) {
            attributeEntries['filledEntries']['cim:StaticVarCompensator.slope'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StaticVarCompensator.slope'],
                                                   'cim:VoltagePerReactivePower',
                                                   'cim:StaticVarCompensator.slope'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:StaticVarCompensator.slope'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StaticVarCompensator.slope'],
                                                   'cim:VoltagePerReactivePower',
                                                   'cim:StaticVarCompensator.slope'
                                                 );
        }
        if ('cim:StaticVarCompensator.sVCControlMode' in object) {
            attributeEntries['filledEntries']['cim:StaticVarCompensator.sVCControlMode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StaticVarCompensator.sVCControlMode'],
                                                   'cim:SVCControlMode',
                                                   'cim:StaticVarCompensator.sVCControlMode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:StaticVarCompensator.sVCControlMode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StaticVarCompensator.sVCControlMode'],
                                                   'cim:SVCControlMode',
                                                   'cim:StaticVarCompensator.sVCControlMode'
                                                 );
        }
        if ('cim:StaticVarCompensator.voltageSetPoint' in object) {
            attributeEntries['filledEntries']['cim:StaticVarCompensator.voltageSetPoint'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StaticVarCompensator.voltageSetPoint'],
                                                   'cim:Voltage',
                                                   'cim:StaticVarCompensator.voltageSetPoint'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:StaticVarCompensator.voltageSetPoint'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StaticVarCompensator.voltageSetPoint'],
                                                   'cim:Voltage',
                                                   'cim:StaticVarCompensator.voltageSetPoint'
                                                 );
        }
        if ('cim:StaticVarCompensator.q' in object) {
            attributeEntries['filledEntries']['cim:StaticVarCompensator.q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StaticVarCompensator.q'],
                                                   'cim:ReactivePower',
                                                   'cim:StaticVarCompensator.q'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:StaticVarCompensator.q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['StaticVarCompensator.q'],
                                                   'cim:ReactivePower',
                                                   'cim:StaticVarCompensator.q'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, ],
						'capacitiveRating': [CGMESProfile.shortNames.EQ, ],
						'inductiveRating': [CGMESProfile.shortNames.EQ, ],
						'slope': [CGMESProfile.shortNames.EQ, ],
						'sVCControlMode': [CGMESProfile.shortNames.EQ, ],
						'voltageSetPoint': [CGMESProfile.shortNames.EQ, ],
						'q': [CGMESProfile.shortNames.SSH, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:StaticVarCompensator.capacitiveRating",
            "cim:StaticVarCompensator.inductiveRating",
            "cim:StaticVarCompensator.slope",
            "cim:StaticVarCompensator.sVCControlMode",
            "cim:StaticVarCompensator.voltageSetPoint",
            "cim:StaticVarCompensator.q",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( RegulatingCondEq.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!StaticVarCompensator.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class StaticVarCompensator: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = StaticVarCompensator.attributeHTML(object, cimmenu);
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
export default StaticVarCompensator
