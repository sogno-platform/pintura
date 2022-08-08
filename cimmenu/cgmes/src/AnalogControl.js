import templates from "../../templates/index.js"
import Control from "./Control.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class AnalogControl extends Control {

    static attributeHTML(object, cimmenu, classType="AnalogControl") {
        let attributeEntries = Control.attributeHTML(object, cimmenu, classType);
        if ('cim:AnalogControl.maxValue' in object) {
            attributeEntries['filledEntries']['cim:AnalogControl.maxValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AnalogControl.maxValue'],
                                                   'cim:Simple_Float',
                                                   'cim:AnalogControl.maxValue'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AnalogControl.maxValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AnalogControl.maxValue'],
                                                   'cim:Simple_Float',
                                                   'cim:AnalogControl.maxValue'
                                                 );
        }
        if ('cim:AnalogControl.minValue' in object) {
            attributeEntries['filledEntries']['cim:AnalogControl.minValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AnalogControl.minValue'],
                                                   'cim:Simple_Float',
                                                   'cim:AnalogControl.minValue'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AnalogControl.minValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AnalogControl.minValue'],
                                                   'cim:Simple_Float',
                                                   'cim:AnalogControl.minValue'
                                                 );
        }
        if ('cim:AnalogControl.AnalogValue' in object) {
            attributeEntries['filledEntries']['cim:AnalogControl.AnalogValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AnalogControl.AnalogValue'],
                                                   'cim:AnalogValue',
                                                   'cim:AnalogControl.AnalogValue'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AnalogControl.AnalogValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AnalogControl.AnalogValue'],
                                                   'cim:AnalogValue',
                                                   'cim:AnalogControl.AnalogValue'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'maxValue': [CGMESProfile.shortNames.EQ, ],
						'minValue': [CGMESProfile.shortNames.EQ, ],
						'AnalogValue': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:AnalogControl.maxValue",
            "cim:AnalogControl.minValue",
            "cim:AnalogControl.AnalogValue",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( Control.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!AnalogControl.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class AnalogControl: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = AnalogControl.attributeHTML(object, cimmenu);
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
        "RaiseLowerCommand",
        "SetPoint",
        ];
        return subClasses;
    }
};
export default AnalogControl
