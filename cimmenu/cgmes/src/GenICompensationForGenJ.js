import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class GenICompensationForGenJ extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="GenICompensationForGenJ") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:GenICompensationForGenJ.SynchronousMachineDynamics' in object) {
            attributeEntries['filledEntries']['cim:GenICompensationForGenJ.SynchronousMachineDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GenICompensationForGenJ.SynchronousMachineDynamics'],
                                                   'cim:SynchronousMachineDynamics',
                                                   'cim:GenICompensationForGenJ.SynchronousMachineDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GenICompensationForGenJ.SynchronousMachineDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GenICompensationForGenJ.SynchronousMachineDynamics'],
                                                   'cim:SynchronousMachineDynamics',
                                                   'cim:GenICompensationForGenJ.SynchronousMachineDynamics'
                                                 );
        }
        if ('cim:GenICompensationForGenJ.VcompIEEEType2' in object) {
            attributeEntries['filledEntries']['cim:GenICompensationForGenJ.VcompIEEEType2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GenICompensationForGenJ.VcompIEEEType2'],
                                                   'cim:VCompIEEEType2',
                                                   'cim:GenICompensationForGenJ.VcompIEEEType2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GenICompensationForGenJ.VcompIEEEType2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GenICompensationForGenJ.VcompIEEEType2'],
                                                   'cim:VCompIEEEType2',
                                                   'cim:GenICompensationForGenJ.VcompIEEEType2'
                                                 );
        }
        if ('cim:GenICompensationForGenJ.rcij' in object) {
            attributeEntries['filledEntries']['cim:GenICompensationForGenJ.rcij'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GenICompensationForGenJ.rcij'],
                                                   'cim:PU',
                                                   'cim:GenICompensationForGenJ.rcij'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GenICompensationForGenJ.rcij'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GenICompensationForGenJ.rcij'],
                                                   'cim:PU',
                                                   'cim:GenICompensationForGenJ.rcij'
                                                 );
        }
        if ('cim:GenICompensationForGenJ.xcij' in object) {
            attributeEntries['filledEntries']['cim:GenICompensationForGenJ.xcij'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GenICompensationForGenJ.xcij'],
                                                   'cim:PU',
                                                   'cim:GenICompensationForGenJ.xcij'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GenICompensationForGenJ.xcij'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GenICompensationForGenJ.xcij'],
                                                   'cim:PU',
                                                   'cim:GenICompensationForGenJ.xcij'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GenICompensationForGenJ.SynchronousMachineDynamics",
            "cim:GenICompensationForGenJ.VcompIEEEType2",
            "cim:GenICompensationForGenJ.rcij",
            "cim:GenICompensationForGenJ.xcij",
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
            if (!GenICompensationForGenJ.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GenICompensationForGenJ: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GenICompensationForGenJ.attributeHTML(object, cimmenu);
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
export default GenICompensationForGenJ
