import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class ACDCTerminal extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="ACDCTerminal") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:ACDCTerminal.BusNameMarker' in object) {
            attributeEntries['filledEntries']['cim:ACDCTerminal.BusNameMarker'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCTerminal.BusNameMarker'],
                                                   'cim:BusNameMarker',
                                                   'cim:ACDCTerminal.BusNameMarker'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCTerminal.BusNameMarker'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCTerminal.BusNameMarker'],
                                                   'cim:BusNameMarker',
                                                   'cim:ACDCTerminal.BusNameMarker'
                                                 );
        }
        if ('cim:ACDCTerminal.sequenceNumber' in object) {
            attributeEntries['filledEntries']['cim:ACDCTerminal.sequenceNumber'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCTerminal.sequenceNumber'],
                                                   'cim:Integer',
                                                   'cim:ACDCTerminal.sequenceNumber'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCTerminal.sequenceNumber'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCTerminal.sequenceNumber'],
                                                   'cim:Integer',
                                                   'cim:ACDCTerminal.sequenceNumber'
                                                 );
        }
        if ('cim:ACDCTerminal.Measurements' in object) {
            attributeEntries['filledEntries']['cim:ACDCTerminal.Measurements'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCTerminal.Measurements'],
                                                   'cim:Measurement',
                                                   'cim:ACDCTerminal.Measurements'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCTerminal.Measurements'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCTerminal.Measurements'],
                                                   'cim:Measurement',
                                                   'cim:ACDCTerminal.Measurements'
                                                 );
        }
        if ('cim:ACDCTerminal.connected' in object) {
            attributeEntries['filledEntries']['cim:ACDCTerminal.connected'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCTerminal.connected'],
                                                   'cim:Boolean',
                                                   'cim:ACDCTerminal.connected'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ACDCTerminal.connected'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ACDCTerminal.connected'],
                                                   'cim:Boolean',
                                                   'cim:ACDCTerminal.connected'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ACDCTerminal.BusNameMarker",
            "cim:ACDCTerminal.sequenceNumber",
            "cim:ACDCTerminal.Measurements",
            "cim:ACDCTerminal.connected",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( IdentifiedObject.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!ACDCTerminal.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ACDCTerminal: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ACDCTerminal.attributeHTML(object, cimmenu);
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
        "DCBaseTerminal",
        "ACDCConverterDCTerminal",
        "DCTerminal",
        "Terminal",
        ];
        return subClasses;
    }
};
export default ACDCTerminal
