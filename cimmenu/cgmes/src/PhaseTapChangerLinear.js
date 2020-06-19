import templates from "../../templates/index.js"
import PhaseTapChanger from "./PhaseTapChanger.js"
import common from "../../src/common.js"

class PhaseTapChangerLinear extends PhaseTapChanger {

    static attributeHTML(object, cimmenu, classType="PhaseTapChangerLinear") {
        let attributeEntries = PhaseTapChanger.attributeHTML(object, cimmenu, classType);
        if ('cim:PhaseTapChangerLinear.stepPhaseShiftIncrement' in object) {
            attributeEntries['filledEntries']['cim:PhaseTapChangerLinear.stepPhaseShiftIncrement'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerLinear.stepPhaseShiftIncrement'],
                                                   'cim:AngleDegrees',
                                                   'cim:PhaseTapChangerLinear.stepPhaseShiftIncrement'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PhaseTapChangerLinear.stepPhaseShiftIncrement'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerLinear.stepPhaseShiftIncrement'],
                                                   'cim:AngleDegrees',
                                                   'cim:PhaseTapChangerLinear.stepPhaseShiftIncrement'
                                                 );
        }
        if ('cim:PhaseTapChangerLinear.xMax' in object) {
            attributeEntries['filledEntries']['cim:PhaseTapChangerLinear.xMax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerLinear.xMax'],
                                                   'cim:Reactance',
                                                   'cim:PhaseTapChangerLinear.xMax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PhaseTapChangerLinear.xMax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerLinear.xMax'],
                                                   'cim:Reactance',
                                                   'cim:PhaseTapChangerLinear.xMax'
                                                 );
        }
        if ('cim:PhaseTapChangerLinear.xMin' in object) {
            attributeEntries['filledEntries']['cim:PhaseTapChangerLinear.xMin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerLinear.xMin'],
                                                   'cim:Reactance',
                                                   'cim:PhaseTapChangerLinear.xMin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PhaseTapChangerLinear.xMin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerLinear.xMin'],
                                                   'cim:Reactance',
                                                   'cim:PhaseTapChangerLinear.xMin'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PhaseTapChangerLinear.stepPhaseShiftIncrement",
            "cim:PhaseTapChangerLinear.xMax",
            "cim:PhaseTapChangerLinear.xMin",
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
            if (!PhaseTapChangerLinear.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PhaseTapChangerLinear: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PhaseTapChangerLinear.attributeHTML(object, cimmenu);
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
export default PhaseTapChangerLinear
