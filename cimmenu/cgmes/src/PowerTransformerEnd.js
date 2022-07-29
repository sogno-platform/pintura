import templates from "../../templates/index.js"
import TransformerEnd from "./TransformerEnd.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PowerTransformerEnd extends TransformerEnd {

    static attributeHTML(object, cimmenu, classType="PowerTransformerEnd") {
        let attributeEntries = TransformerEnd.attributeHTML(object, cimmenu, classType);
        if ('cim:PowerTransformerEnd.PowerTransformer' in object) {
            attributeEntries['filledEntries']['cim:PowerTransformerEnd.PowerTransformer'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.PowerTransformer'],
                                                   'cim:PowerTransformer',
                                                   'cim:PowerTransformerEnd.PowerTransformer'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerTransformerEnd.PowerTransformer'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.PowerTransformer'],
                                                   'cim:PowerTransformer',
                                                   'cim:PowerTransformerEnd.PowerTransformer'
                                                 );
        }
        if ('cim:PowerTransformerEnd.b' in object) {
            attributeEntries['filledEntries']['cim:PowerTransformerEnd.b'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.b'],
                                                   'cim:Susceptance',
                                                   'cim:PowerTransformerEnd.b'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerTransformerEnd.b'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.b'],
                                                   'cim:Susceptance',
                                                   'cim:PowerTransformerEnd.b'
                                                 );
        }
        if ('cim:PowerTransformerEnd.connectionKind' in object) {
            attributeEntries['filledEntries']['cim:PowerTransformerEnd.connectionKind'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.connectionKind'],
                                                   'cim:WindingConnection',
                                                   'cim:PowerTransformerEnd.connectionKind'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerTransformerEnd.connectionKind'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.connectionKind'],
                                                   'cim:WindingConnection',
                                                   'cim:PowerTransformerEnd.connectionKind'
                                                 );
        }
        if ('cim:PowerTransformerEnd.ratedS' in object) {
            attributeEntries['filledEntries']['cim:PowerTransformerEnd.ratedS'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.ratedS'],
                                                   'cim:ApparentPower',
                                                   'cim:PowerTransformerEnd.ratedS'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerTransformerEnd.ratedS'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.ratedS'],
                                                   'cim:ApparentPower',
                                                   'cim:PowerTransformerEnd.ratedS'
                                                 );
        }
        if ('cim:PowerTransformerEnd.g' in object) {
            attributeEntries['filledEntries']['cim:PowerTransformerEnd.g'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.g'],
                                                   'cim:Conductance',
                                                   'cim:PowerTransformerEnd.g'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerTransformerEnd.g'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.g'],
                                                   'cim:Conductance',
                                                   'cim:PowerTransformerEnd.g'
                                                 );
        }
        if ('cim:PowerTransformerEnd.ratedU' in object) {
            attributeEntries['filledEntries']['cim:PowerTransformerEnd.ratedU'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.ratedU'],
                                                   'cim:Voltage',
                                                   'cim:PowerTransformerEnd.ratedU'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerTransformerEnd.ratedU'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.ratedU'],
                                                   'cim:Voltage',
                                                   'cim:PowerTransformerEnd.ratedU'
                                                 );
        }
        if ('cim:PowerTransformerEnd.r' in object) {
            attributeEntries['filledEntries']['cim:PowerTransformerEnd.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.r'],
                                                   'cim:Resistance',
                                                   'cim:PowerTransformerEnd.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerTransformerEnd.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.r'],
                                                   'cim:Resistance',
                                                   'cim:PowerTransformerEnd.r'
                                                 );
        }
        if ('cim:PowerTransformerEnd.x' in object) {
            attributeEntries['filledEntries']['cim:PowerTransformerEnd.x'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.x'],
                                                   'cim:Reactance',
                                                   'cim:PowerTransformerEnd.x'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerTransformerEnd.x'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.x'],
                                                   'cim:Reactance',
                                                   'cim:PowerTransformerEnd.x'
                                                 );
        }
        if ('cim:PowerTransformerEnd.b0' in object) {
            attributeEntries['filledEntries']['cim:PowerTransformerEnd.b0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.b0'],
                                                   'cim:Susceptance',
                                                   'cim:PowerTransformerEnd.b0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerTransformerEnd.b0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.b0'],
                                                   'cim:Susceptance',
                                                   'cim:PowerTransformerEnd.b0'
                                                 );
        }
        if ('cim:PowerTransformerEnd.phaseAngleClock' in object) {
            attributeEntries['filledEntries']['cim:PowerTransformerEnd.phaseAngleClock'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.phaseAngleClock'],
                                                   'cim:Integer',
                                                   'cim:PowerTransformerEnd.phaseAngleClock'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerTransformerEnd.phaseAngleClock'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.phaseAngleClock'],
                                                   'cim:Integer',
                                                   'cim:PowerTransformerEnd.phaseAngleClock'
                                                 );
        }
        if ('cim:PowerTransformerEnd.g0' in object) {
            attributeEntries['filledEntries']['cim:PowerTransformerEnd.g0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.g0'],
                                                   'cim:Conductance',
                                                   'cim:PowerTransformerEnd.g0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerTransformerEnd.g0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.g0'],
                                                   'cim:Conductance',
                                                   'cim:PowerTransformerEnd.g0'
                                                 );
        }
        if ('cim:PowerTransformerEnd.r0' in object) {
            attributeEntries['filledEntries']['cim:PowerTransformerEnd.r0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.r0'],
                                                   'cim:Resistance',
                                                   'cim:PowerTransformerEnd.r0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerTransformerEnd.r0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.r0'],
                                                   'cim:Resistance',
                                                   'cim:PowerTransformerEnd.r0'
                                                 );
        }
        if ('cim:PowerTransformerEnd.x0' in object) {
            attributeEntries['filledEntries']['cim:PowerTransformerEnd.x0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.x0'],
                                                   'cim:Reactance',
                                                   'cim:PowerTransformerEnd.x0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PowerTransformerEnd.x0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PowerTransformerEnd.x0'],
                                                   'cim:Reactance',
                                                   'cim:PowerTransformerEnd.x0'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'PowerTransformer': [CGMESProfile.shortNames.EQ, ],
						'b': [CGMESProfile.shortNames.EQ, ],
						'connectionKind': [CGMESProfile.shortNames.EQ, ],
						'ratedS': [CGMESProfile.shortNames.EQ, ],
						'g': [CGMESProfile.shortNames.EQ, ],
						'ratedU': [CGMESProfile.shortNames.EQ, ],
						'r': [CGMESProfile.shortNames.EQ, ],
						'x': [CGMESProfile.shortNames.EQ, ],
						'b0': [CGMESProfile.shortNames.EQ, ],
						'phaseAngleClock': [CGMESProfile.shortNames.EQ, ],
						'g0': [CGMESProfile.shortNames.EQ, ],
						'r0': [CGMESProfile.shortNames.EQ, ],
						'x0': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PowerTransformerEnd.PowerTransformer",
            "cim:PowerTransformerEnd.b",
            "cim:PowerTransformerEnd.connectionKind",
            "cim:PowerTransformerEnd.ratedS",
            "cim:PowerTransformerEnd.g",
            "cim:PowerTransformerEnd.ratedU",
            "cim:PowerTransformerEnd.r",
            "cim:PowerTransformerEnd.x",
            "cim:PowerTransformerEnd.b0",
            "cim:PowerTransformerEnd.phaseAngleClock",
            "cim:PowerTransformerEnd.g0",
            "cim:PowerTransformerEnd.r0",
            "cim:PowerTransformerEnd.x0",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( TransformerEnd.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!PowerTransformerEnd.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PowerTransformerEnd: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PowerTransformerEnd.attributeHTML(object, cimmenu);
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
export default PowerTransformerEnd
