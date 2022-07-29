import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class TapChangerTablePoint extends BaseClass {

    static attributeHTML(object, cimmenu, classType="TapChangerTablePoint") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:TapChangerTablePoint.b' in object) {
            attributeEntries['filledEntries']['cim:TapChangerTablePoint.b'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChangerTablePoint.b'],
                                                   'cim:PerCent',
                                                   'cim:TapChangerTablePoint.b'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TapChangerTablePoint.b'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChangerTablePoint.b'],
                                                   'cim:PerCent',
                                                   'cim:TapChangerTablePoint.b'
                                                 );
        }
        if ('cim:TapChangerTablePoint.g' in object) {
            attributeEntries['filledEntries']['cim:TapChangerTablePoint.g'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChangerTablePoint.g'],
                                                   'cim:PerCent',
                                                   'cim:TapChangerTablePoint.g'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TapChangerTablePoint.g'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChangerTablePoint.g'],
                                                   'cim:PerCent',
                                                   'cim:TapChangerTablePoint.g'
                                                 );
        }
        if ('cim:TapChangerTablePoint.r' in object) {
            attributeEntries['filledEntries']['cim:TapChangerTablePoint.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChangerTablePoint.r'],
                                                   'cim:PerCent',
                                                   'cim:TapChangerTablePoint.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TapChangerTablePoint.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChangerTablePoint.r'],
                                                   'cim:PerCent',
                                                   'cim:TapChangerTablePoint.r'
                                                 );
        }
        if ('cim:TapChangerTablePoint.ratio' in object) {
            attributeEntries['filledEntries']['cim:TapChangerTablePoint.ratio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChangerTablePoint.ratio'],
                                                   'cim:Simple_Float',
                                                   'cim:TapChangerTablePoint.ratio'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TapChangerTablePoint.ratio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChangerTablePoint.ratio'],
                                                   'cim:Simple_Float',
                                                   'cim:TapChangerTablePoint.ratio'
                                                 );
        }
        if ('cim:TapChangerTablePoint.step' in object) {
            attributeEntries['filledEntries']['cim:TapChangerTablePoint.step'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChangerTablePoint.step'],
                                                   'cim:Integer',
                                                   'cim:TapChangerTablePoint.step'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TapChangerTablePoint.step'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChangerTablePoint.step'],
                                                   'cim:Integer',
                                                   'cim:TapChangerTablePoint.step'
                                                 );
        }
        if ('cim:TapChangerTablePoint.x' in object) {
            attributeEntries['filledEntries']['cim:TapChangerTablePoint.x'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChangerTablePoint.x'],
                                                   'cim:PerCent',
                                                   'cim:TapChangerTablePoint.x'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TapChangerTablePoint.x'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChangerTablePoint.x'],
                                                   'cim:PerCent',
                                                   'cim:TapChangerTablePoint.x'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'b': [CGMESProfile.shortNames.EQ, ],
						'g': [CGMESProfile.shortNames.EQ, ],
						'r': [CGMESProfile.shortNames.EQ, ],
						'ratio': [CGMESProfile.shortNames.EQ, ],
						'step': [CGMESProfile.shortNames.EQ, ],
						'x': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:TapChangerTablePoint.b",
            "cim:TapChangerTablePoint.g",
            "cim:TapChangerTablePoint.r",
            "cim:TapChangerTablePoint.ratio",
            "cim:TapChangerTablePoint.step",
            "cim:TapChangerTablePoint.x",
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
            if (!TapChangerTablePoint.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class TapChangerTablePoint: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = TapChangerTablePoint.attributeHTML(object, cimmenu);
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
        "PhaseTapChangerTablePoint",
        "RatioTapChangerTablePoint",
        ];
        return subClasses;
    }
};
export default TapChangerTablePoint
