import templates from "../../templates/index.js"
import Conductor from "./Conductor.js"
import common from "../../src/common.js"

class ACLineSegment extends Conductor {

    static attributeHTML(object, cimmenu, classType="ACLineSegment") {
        let attributeEntries = Conductor.attributeHTML(object, cimmenu, classType);
        if ('cim:ACLineSegment.bch' in object) {
            attributeEntries['filledEntries']['cim:ACLineSegment.bch'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACLineSegment.bch'],
                                                   'cim:Susceptance',
                                                   'cim:ACLineSegment.bch'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACLineSegment.bch'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACLineSegment.bch'],
                                                   'cim:Susceptance',
                                                   'cim:ACLineSegment.bch'
                                                 );
        }
        if ('cim:ACLineSegment.gch' in object) {
            attributeEntries['filledEntries']['cim:ACLineSegment.gch'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACLineSegment.gch'],
                                                   'cim:Conductance',
                                                   'cim:ACLineSegment.gch'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACLineSegment.gch'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACLineSegment.gch'],
                                                   'cim:Conductance',
                                                   'cim:ACLineSegment.gch'
                                                 );
        }
        if ('cim:ACLineSegment.r' in object) {
            attributeEntries['filledEntries']['cim:ACLineSegment.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACLineSegment.r'],
                                                   'cim:Resistance',
                                                   'cim:ACLineSegment.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACLineSegment.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACLineSegment.r'],
                                                   'cim:Resistance',
                                                   'cim:ACLineSegment.r'
                                                 );
        }
        if ('cim:ACLineSegment.x' in object) {
            attributeEntries['filledEntries']['cim:ACLineSegment.x'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACLineSegment.x'],
                                                   'cim:Reactance',
                                                   'cim:ACLineSegment.x'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACLineSegment.x'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACLineSegment.x'],
                                                   'cim:Reactance',
                                                   'cim:ACLineSegment.x'
                                                 );
        }
        if ('cim:ACLineSegment.b0ch' in object) {
            attributeEntries['filledEntries']['cim:ACLineSegment.b0ch'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACLineSegment.b0ch'],
                                                   'cim:Susceptance',
                                                   'cim:ACLineSegment.b0ch'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACLineSegment.b0ch'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACLineSegment.b0ch'],
                                                   'cim:Susceptance',
                                                   'cim:ACLineSegment.b0ch'
                                                 );
        }
        if ('cim:ACLineSegment.g0ch' in object) {
            attributeEntries['filledEntries']['cim:ACLineSegment.g0ch'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACLineSegment.g0ch'],
                                                   'cim:Conductance',
                                                   'cim:ACLineSegment.g0ch'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACLineSegment.g0ch'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACLineSegment.g0ch'],
                                                   'cim:Conductance',
                                                   'cim:ACLineSegment.g0ch'
                                                 );
        }
        if ('cim:ACLineSegment.r0' in object) {
            attributeEntries['filledEntries']['cim:ACLineSegment.r0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACLineSegment.r0'],
                                                   'cim:Resistance',
                                                   'cim:ACLineSegment.r0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACLineSegment.r0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACLineSegment.r0'],
                                                   'cim:Resistance',
                                                   'cim:ACLineSegment.r0'
                                                 );
        }
        if ('cim:ACLineSegment.shortCircuitEndTemperature' in object) {
            attributeEntries['filledEntries']['cim:ACLineSegment.shortCircuitEndTemperature'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACLineSegment.shortCircuitEndTemperature'],
                                                   'cim:Temperature',
                                                   'cim:ACLineSegment.shortCircuitEndTemperature'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACLineSegment.shortCircuitEndTemperature'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACLineSegment.shortCircuitEndTemperature'],
                                                   'cim:Temperature',
                                                   'cim:ACLineSegment.shortCircuitEndTemperature'
                                                 );
        }
        if ('cim:ACLineSegment.x0' in object) {
            attributeEntries['filledEntries']['cim:ACLineSegment.x0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACLineSegment.x0'],
                                                   'cim:Reactance',
                                                   'cim:ACLineSegment.x0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACLineSegment.x0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACLineSegment.x0'],
                                                   'cim:Reactance',
                                                   'cim:ACLineSegment.x0'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ACLineSegment.bch",
            "cim:ACLineSegment.gch",
            "cim:ACLineSegment.r",
            "cim:ACLineSegment.x",
            "cim:ACLineSegment.b0ch",
            "cim:ACLineSegment.g0ch",
            "cim:ACLineSegment.r0",
            "cim:ACLineSegment.shortCircuitEndTemperature",
            "cim:ACLineSegment.x0",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( Conductor.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!ACLineSegment.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ACLineSegment: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ACLineSegment.attributeHTML(object, cimmenu);
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
export default ACLineSegment
