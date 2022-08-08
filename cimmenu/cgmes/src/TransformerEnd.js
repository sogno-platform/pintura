import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class TransformerEnd extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="TransformerEnd") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:TransformerEnd.BaseVoltage' in object) {
            attributeEntries['filledEntries']['cim:TransformerEnd.BaseVoltage'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TransformerEnd.BaseVoltage'],
                                                   'cim:BaseVoltage',
                                                   'cim:TransformerEnd.BaseVoltage'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TransformerEnd.BaseVoltage'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TransformerEnd.BaseVoltage'],
                                                   'cim:BaseVoltage',
                                                   'cim:TransformerEnd.BaseVoltage'
                                                 );
        }
        if ('cim:TransformerEnd.Terminal' in object) {
            attributeEntries['filledEntries']['cim:TransformerEnd.Terminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TransformerEnd.Terminal'],
                                                   'cim:Terminal',
                                                   'cim:TransformerEnd.Terminal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TransformerEnd.Terminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TransformerEnd.Terminal'],
                                                   'cim:Terminal',
                                                   'cim:TransformerEnd.Terminal'
                                                 );
        }
        if ('cim:TransformerEnd.RatioTapChanger' in object) {
            attributeEntries['filledEntries']['cim:TransformerEnd.RatioTapChanger'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TransformerEnd.RatioTapChanger'],
                                                   'cim:RatioTapChanger',
                                                   'cim:TransformerEnd.RatioTapChanger'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TransformerEnd.RatioTapChanger'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TransformerEnd.RatioTapChanger'],
                                                   'cim:RatioTapChanger',
                                                   'cim:TransformerEnd.RatioTapChanger'
                                                 );
        }
        if ('cim:TransformerEnd.endNumber' in object) {
            attributeEntries['filledEntries']['cim:TransformerEnd.endNumber'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TransformerEnd.endNumber'],
                                                   'cim:Integer',
                                                   'cim:TransformerEnd.endNumber'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TransformerEnd.endNumber'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TransformerEnd.endNumber'],
                                                   'cim:Integer',
                                                   'cim:TransformerEnd.endNumber'
                                                 );
        }
        if ('cim:TransformerEnd.rground' in object) {
            attributeEntries['filledEntries']['cim:TransformerEnd.rground'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TransformerEnd.rground'],
                                                   'cim:Resistance',
                                                   'cim:TransformerEnd.rground'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TransformerEnd.rground'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TransformerEnd.rground'],
                                                   'cim:Resistance',
                                                   'cim:TransformerEnd.rground'
                                                 );
        }
        if ('cim:TransformerEnd.grounded' in object) {
            attributeEntries['filledEntries']['cim:TransformerEnd.grounded'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TransformerEnd.grounded'],
                                                   'cim:Boolean',
                                                   'cim:TransformerEnd.grounded'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TransformerEnd.grounded'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TransformerEnd.grounded'],
                                                   'cim:Boolean',
                                                   'cim:TransformerEnd.grounded'
                                                 );
        }
        if ('cim:TransformerEnd.xground' in object) {
            attributeEntries['filledEntries']['cim:TransformerEnd.xground'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TransformerEnd.xground'],
                                                   'cim:Reactance',
                                                   'cim:TransformerEnd.xground'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TransformerEnd.xground'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TransformerEnd.xground'],
                                                   'cim:Reactance',
                                                   'cim:TransformerEnd.xground'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'BaseVoltage': [CGMESProfile.shortNames.EQ, ],
						'Terminal': [CGMESProfile.shortNames.EQ, ],
						'RatioTapChanger': [CGMESProfile.shortNames.EQ, ],
						'endNumber': [CGMESProfile.shortNames.EQ, ],
						'rground': [CGMESProfile.shortNames.EQ, ],
						'grounded': [CGMESProfile.shortNames.EQ, ],
						'xground': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:TransformerEnd.BaseVoltage",
            "cim:TransformerEnd.Terminal",
            "cim:TransformerEnd.RatioTapChanger",
            "cim:TransformerEnd.endNumber",
            "cim:TransformerEnd.rground",
            "cim:TransformerEnd.grounded",
            "cim:TransformerEnd.xground",
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
            if (!TransformerEnd.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class TransformerEnd: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = TransformerEnd.attributeHTML(object, cimmenu);
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
        "PowerTransformerEnd",
        ];
        return subClasses;
    }
};
export default TransformerEnd
