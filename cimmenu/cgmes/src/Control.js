import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Control extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="Control") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:Control.controlType' in object) {
            attributeEntries['filledEntries']['cim:Control.controlType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Control.controlType'],
                                                   'cim:String',
                                                   'cim:Control.controlType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Control.controlType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Control.controlType'],
                                                   'cim:String',
                                                   'cim:Control.controlType'
                                                 );
        }
        if ('cim:Control.operationInProgress' in object) {
            attributeEntries['filledEntries']['cim:Control.operationInProgress'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Control.operationInProgress'],
                                                   'cim:Boolean',
                                                   'cim:Control.operationInProgress'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Control.operationInProgress'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Control.operationInProgress'],
                                                   'cim:Boolean',
                                                   'cim:Control.operationInProgress'
                                                 );
        }
        if ('cim:Control.timeStamp' in object) {
            attributeEntries['filledEntries']['cim:Control.timeStamp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Control.timeStamp'],
                                                   'cim:DateTime',
                                                   'cim:Control.timeStamp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Control.timeStamp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Control.timeStamp'],
                                                   'cim:DateTime',
                                                   'cim:Control.timeStamp'
                                                 );
        }
        if ('cim:Control.unitMultiplier' in object) {
            attributeEntries['filledEntries']['cim:Control.unitMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Control.unitMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Control.unitMultiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Control.unitMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Control.unitMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:Control.unitMultiplier'
                                                 );
        }
        if ('cim:Control.unitSymbol' in object) {
            attributeEntries['filledEntries']['cim:Control.unitSymbol'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Control.unitSymbol'],
                                                   'cim:UnitSymbol',
                                                   'cim:Control.unitSymbol'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Control.unitSymbol'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Control.unitSymbol'],
                                                   'cim:UnitSymbol',
                                                   'cim:Control.unitSymbol'
                                                 );
        }
        if ('cim:Control.PowerSystemResource' in object) {
            attributeEntries['filledEntries']['cim:Control.PowerSystemResource'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Control.PowerSystemResource'],
                                                   'cim:PowerSystemResource',
                                                   'cim:Control.PowerSystemResource'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Control.PowerSystemResource'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Control.PowerSystemResource'],
                                                   'cim:PowerSystemResource',
                                                   'cim:Control.PowerSystemResource'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'controlType': [CGMESProfile.shortNames.EQ, ],
						'operationInProgress': [CGMESProfile.shortNames.EQ, ],
						'timeStamp': [CGMESProfile.shortNames.EQ, ],
						'unitMultiplier': [CGMESProfile.shortNames.EQ, ],
						'unitSymbol': [CGMESProfile.shortNames.EQ, ],
						'PowerSystemResource': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Control.controlType",
            "cim:Control.operationInProgress",
            "cim:Control.timeStamp",
            "cim:Control.unitMultiplier",
            "cim:Control.unitSymbol",
            "cim:Control.PowerSystemResource",
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
            if (!Control.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class Control: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Control.attributeHTML(object, cimmenu);
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
        "AccumulatorReset",
        "AnalogControl",
        "RaiseLowerCommand",
        "SetPoint",
        "Command",
        ];
        return subClasses;
    }
};
export default Control
