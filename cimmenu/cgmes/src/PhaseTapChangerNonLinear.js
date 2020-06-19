import templates from "../../templates/index.js"
import PhaseTapChanger from "./PhaseTapChanger.js"
import common from "../../src/common.js"

class PhaseTapChangerNonLinear extends PhaseTapChanger {

    static attributeHTML(object, cimmenu, classType="PhaseTapChangerNonLinear") {
        let attributeEntries = PhaseTapChanger.attributeHTML(object, cimmenu, classType);
        if ('cim:PhaseTapChangerNonLinear.voltageStepIncrement' in object) {
            attributeEntries['filledEntries']['cim:PhaseTapChangerNonLinear.voltageStepIncrement'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerNonLinear.voltageStepIncrement'],
                                                   'cim:PerCent',
                                                   'cim:PhaseTapChangerNonLinear.voltageStepIncrement'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PhaseTapChangerNonLinear.voltageStepIncrement'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerNonLinear.voltageStepIncrement'],
                                                   'cim:PerCent',
                                                   'cim:PhaseTapChangerNonLinear.voltageStepIncrement'
                                                 );
        }
        if ('cim:PhaseTapChangerNonLinear.xMax' in object) {
            attributeEntries['filledEntries']['cim:PhaseTapChangerNonLinear.xMax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerNonLinear.xMax'],
                                                   'cim:Reactance',
                                                   'cim:PhaseTapChangerNonLinear.xMax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PhaseTapChangerNonLinear.xMax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerNonLinear.xMax'],
                                                   'cim:Reactance',
                                                   'cim:PhaseTapChangerNonLinear.xMax'
                                                 );
        }
        if ('cim:PhaseTapChangerNonLinear.xMin' in object) {
            attributeEntries['filledEntries']['cim:PhaseTapChangerNonLinear.xMin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerNonLinear.xMin'],
                                                   'cim:Reactance',
                                                   'cim:PhaseTapChangerNonLinear.xMin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PhaseTapChangerNonLinear.xMin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerNonLinear.xMin'],
                                                   'cim:Reactance',
                                                   'cim:PhaseTapChangerNonLinear.xMin'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PhaseTapChangerNonLinear.voltageStepIncrement",
            "cim:PhaseTapChangerNonLinear.xMax",
            "cim:PhaseTapChangerNonLinear.xMin",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( PhaseTapChanger.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!PhaseTapChangerNonLinear.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PhaseTapChangerNonLinear: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PhaseTapChangerNonLinear.attributeHTML(object, cimmenu);
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
        "PhaseTapChangerAsymmetrical",
        "PhaseTapChangerSymmetrical",
        ];
        return subClasses;
    }
};
export default PhaseTapChangerNonLinear
