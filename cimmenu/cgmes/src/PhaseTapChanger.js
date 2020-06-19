import templates from "../../templates/index.js"
import TapChanger from "./TapChanger.js"
import common from "../../src/common.js"

class PhaseTapChanger extends TapChanger {

    static attributeHTML(object, cimmenu, classType="PhaseTapChanger") {
        let attributeEntries = TapChanger.attributeHTML(object, cimmenu, classType);
        if ('cim:PhaseTapChanger.TransformerEnd' in object) {
            attributeEntries['filledEntries']['cim:PhaseTapChanger.TransformerEnd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChanger.TransformerEnd'],
                                                   'cim:TransformerEnd',
                                                   'cim:PhaseTapChanger.TransformerEnd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PhaseTapChanger.TransformerEnd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChanger.TransformerEnd'],
                                                   'cim:TransformerEnd',
                                                   'cim:PhaseTapChanger.TransformerEnd'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PhaseTapChanger.TransformerEnd",
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
            if (!PhaseTapChanger.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PhaseTapChanger: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PhaseTapChanger.attributeHTML(object, cimmenu);
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
        "PhaseTapChangerLinear",
        "PhaseTapChangerNonLinear",
        "PhaseTapChangerAsymmetrical",
        "PhaseTapChangerSymmetrical",
        "PhaseTapChangerTabular",
        ];
        return subClasses;
    }
};
export default PhaseTapChanger
