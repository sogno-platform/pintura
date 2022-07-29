import templates from "../../templates/index.js"
import TapChanger from "./TapChanger.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class RatioTapChanger extends TapChanger {

    static attributeHTML(object, cimmenu, classType="RatioTapChanger") {
        let attributeEntries = TapChanger.attributeHTML(object, cimmenu, classType);
        if ('cim:RatioTapChanger.tculControlMode' in object) {
            attributeEntries['filledEntries']['cim:RatioTapChanger.tculControlMode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RatioTapChanger.tculControlMode'],
                                                   'cim:TransformerControlMode',
                                                   'cim:RatioTapChanger.tculControlMode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RatioTapChanger.tculControlMode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RatioTapChanger.tculControlMode'],
                                                   'cim:TransformerControlMode',
                                                   'cim:RatioTapChanger.tculControlMode'
                                                 );
        }
        if ('cim:RatioTapChanger.stepVoltageIncrement' in object) {
            attributeEntries['filledEntries']['cim:RatioTapChanger.stepVoltageIncrement'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RatioTapChanger.stepVoltageIncrement'],
                                                   'cim:PerCent',
                                                   'cim:RatioTapChanger.stepVoltageIncrement'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RatioTapChanger.stepVoltageIncrement'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RatioTapChanger.stepVoltageIncrement'],
                                                   'cim:PerCent',
                                                   'cim:RatioTapChanger.stepVoltageIncrement'
                                                 );
        }
        if ('cim:RatioTapChanger.RatioTapChangerTable' in object) {
            attributeEntries['filledEntries']['cim:RatioTapChanger.RatioTapChangerTable'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RatioTapChanger.RatioTapChangerTable'],
                                                   'cim:RatioTapChangerTable',
                                                   'cim:RatioTapChanger.RatioTapChangerTable'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RatioTapChanger.RatioTapChangerTable'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RatioTapChanger.RatioTapChangerTable'],
                                                   'cim:RatioTapChangerTable',
                                                   'cim:RatioTapChanger.RatioTapChangerTable'
                                                 );
        }
        if ('cim:RatioTapChanger.TransformerEnd' in object) {
            attributeEntries['filledEntries']['cim:RatioTapChanger.TransformerEnd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RatioTapChanger.TransformerEnd'],
                                                   'cim:TransformerEnd',
                                                   'cim:RatioTapChanger.TransformerEnd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RatioTapChanger.TransformerEnd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RatioTapChanger.TransformerEnd'],
                                                   'cim:TransformerEnd',
                                                   'cim:RatioTapChanger.TransformerEnd'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, ],
						'tculControlMode': [CGMESProfile.shortNames.EQ, ],
						'stepVoltageIncrement': [CGMESProfile.shortNames.EQ, ],
						'RatioTapChangerTable': [CGMESProfile.shortNames.EQ, ],
						'TransformerEnd': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:RatioTapChanger.tculControlMode",
            "cim:RatioTapChanger.stepVoltageIncrement",
            "cim:RatioTapChanger.RatioTapChangerTable",
            "cim:RatioTapChanger.TransformerEnd",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( TapChanger.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!RatioTapChanger.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class RatioTapChanger: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = RatioTapChanger.attributeHTML(object, cimmenu);
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
export default RatioTapChanger
