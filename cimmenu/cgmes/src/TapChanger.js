import templates from "../../templates/index.js"
import PowerSystemResource from "./PowerSystemResource.js"
import common from "../../src/common.js"

class TapChanger extends PowerSystemResource {

    static attributeHTML(object, cimmenu, classType="TapChanger") {
        let attributeEntries = PowerSystemResource.attributeHTML(object, cimmenu, classType);
        if ('cim:TapChanger.highStep' in object) {
            attributeEntries['filledEntries']['cim:TapChanger.highStep'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChanger.highStep'],
                                                   'cim:Integer',
                                                   'cim:TapChanger.highStep'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TapChanger.highStep'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChanger.highStep'],
                                                   'cim:Integer',
                                                   'cim:TapChanger.highStep'
                                                 );
        }
        if ('cim:TapChanger.lowStep' in object) {
            attributeEntries['filledEntries']['cim:TapChanger.lowStep'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChanger.lowStep'],
                                                   'cim:Integer',
                                                   'cim:TapChanger.lowStep'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TapChanger.lowStep'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChanger.lowStep'],
                                                   'cim:Integer',
                                                   'cim:TapChanger.lowStep'
                                                 );
        }
        if ('cim:TapChanger.ltcFlag' in object) {
            attributeEntries['filledEntries']['cim:TapChanger.ltcFlag'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChanger.ltcFlag'],
                                                   'cim:Boolean',
                                                   'cim:TapChanger.ltcFlag'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TapChanger.ltcFlag'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChanger.ltcFlag'],
                                                   'cim:Boolean',
                                                   'cim:TapChanger.ltcFlag'
                                                 );
        }
        if ('cim:TapChanger.neutralStep' in object) {
            attributeEntries['filledEntries']['cim:TapChanger.neutralStep'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChanger.neutralStep'],
                                                   'cim:Integer',
                                                   'cim:TapChanger.neutralStep'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TapChanger.neutralStep'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChanger.neutralStep'],
                                                   'cim:Integer',
                                                   'cim:TapChanger.neutralStep'
                                                 );
        }
        if ('cim:TapChanger.neutralU' in object) {
            attributeEntries['filledEntries']['cim:TapChanger.neutralU'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChanger.neutralU'],
                                                   'cim:Voltage',
                                                   'cim:TapChanger.neutralU'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TapChanger.neutralU'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChanger.neutralU'],
                                                   'cim:Voltage',
                                                   'cim:TapChanger.neutralU'
                                                 );
        }
        if ('cim:TapChanger.normalStep' in object) {
            attributeEntries['filledEntries']['cim:TapChanger.normalStep'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChanger.normalStep'],
                                                   'cim:Integer',
                                                   'cim:TapChanger.normalStep'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TapChanger.normalStep'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChanger.normalStep'],
                                                   'cim:Integer',
                                                   'cim:TapChanger.normalStep'
                                                 );
        }
        if ('cim:TapChanger.TapChangerControl' in object) {
            attributeEntries['filledEntries']['cim:TapChanger.TapChangerControl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChanger.TapChangerControl'],
                                                   'cim:TapChangerControl',
                                                   'cim:TapChanger.TapChangerControl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TapChanger.TapChangerControl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChanger.TapChangerControl'],
                                                   'cim:TapChangerControl',
                                                   'cim:TapChanger.TapChangerControl'
                                                 );
        }
        if ('cim:TapChanger.controlEnabled' in object) {
            attributeEntries['filledEntries']['cim:TapChanger.controlEnabled'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChanger.controlEnabled'],
                                                   'cim:Boolean',
                                                   'cim:TapChanger.controlEnabled'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TapChanger.controlEnabled'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChanger.controlEnabled'],
                                                   'cim:Boolean',
                                                   'cim:TapChanger.controlEnabled'
                                                 );
        }
        if ('cim:TapChanger.step' in object) {
            attributeEntries['filledEntries']['cim:TapChanger.step'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChanger.step'],
                                                   'cim:Simple_Float',
                                                   'cim:TapChanger.step'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TapChanger.step'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TapChanger.step'],
                                                   'cim:Simple_Float',
                                                   'cim:TapChanger.step'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:TapChanger.highStep",
            "cim:TapChanger.lowStep",
            "cim:TapChanger.ltcFlag",
            "cim:TapChanger.neutralStep",
            "cim:TapChanger.neutralU",
            "cim:TapChanger.normalStep",
            "cim:TapChanger.TapChangerControl",
            "cim:TapChanger.controlEnabled",
            "cim:TapChanger.step",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( PowerSystemResource.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!TapChanger.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class TapChanger: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = TapChanger.attributeHTML(object, cimmenu);
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
        "PhaseTapChanger",
        "PhaseTapChangerLinear",
        "PhaseTapChangerNonLinear",
        "PhaseTapChangerAsymmetrical",
        "PhaseTapChangerSymmetrical",
        "PhaseTapChangerAsymmetrical",
        "PhaseTapChangerSymmetrical",
        "PhaseTapChangerTabular",
        "RatioTapChanger",
        ];
        return subClasses;
    }
};
export default TapChanger
