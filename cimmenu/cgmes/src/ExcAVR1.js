import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"

class ExcAVR1 extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcAVR1") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcAVR1.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR1.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.ka'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR1.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR1.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.ka'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR1.ka'
                                                 );
        }
        if ('cim:ExcAVR1.vrmn' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR1.vrmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.vrmn'],
                                                   'cim:PU',
                                                   'cim:ExcAVR1.vrmn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR1.vrmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.vrmn'],
                                                   'cim:PU',
                                                   'cim:ExcAVR1.vrmn'
                                                 );
        }
        if ('cim:ExcAVR1.vrmx' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR1.vrmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.vrmx'],
                                                   'cim:PU',
                                                   'cim:ExcAVR1.vrmx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR1.vrmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.vrmx'],
                                                   'cim:PU',
                                                   'cim:ExcAVR1.vrmx'
                                                 );
        }
        if ('cim:ExcAVR1.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR1.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR1.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR1.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR1.ta'
                                                 );
        }
        if ('cim:ExcAVR1.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR1.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR1.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR1.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR1.tb'
                                                 );
        }
        if ('cim:ExcAVR1.te' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR1.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR1.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR1.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR1.te'
                                                 );
        }
        if ('cim:ExcAVR1.e1' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR1.e1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.e1'],
                                                   'cim:PU',
                                                   'cim:ExcAVR1.e1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR1.e1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.e1'],
                                                   'cim:PU',
                                                   'cim:ExcAVR1.e1'
                                                 );
        }
        if ('cim:ExcAVR1.se1' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR1.se1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.se1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR1.se1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR1.se1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.se1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR1.se1'
                                                 );
        }
        if ('cim:ExcAVR1.e2' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR1.e2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.e2'],
                                                   'cim:PU',
                                                   'cim:ExcAVR1.e2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR1.e2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.e2'],
                                                   'cim:PU',
                                                   'cim:ExcAVR1.e2'
                                                 );
        }
        if ('cim:ExcAVR1.se2' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR1.se2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.se2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR1.se2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR1.se2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.se2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR1.se2'
                                                 );
        }
        if ('cim:ExcAVR1.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR1.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.kf'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR1.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR1.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.kf'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR1.kf'
                                                 );
        }
        if ('cim:ExcAVR1.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR1.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR1.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR1.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR1.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR1.tf'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcAVR1.ka",
            "cim:ExcAVR1.vrmn",
            "cim:ExcAVR1.vrmx",
            "cim:ExcAVR1.ta",
            "cim:ExcAVR1.tb",
            "cim:ExcAVR1.te",
            "cim:ExcAVR1.e1",
            "cim:ExcAVR1.se1",
            "cim:ExcAVR1.e2",
            "cim:ExcAVR1.se2",
            "cim:ExcAVR1.kf",
            "cim:ExcAVR1.tf",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( ExcitationSystemDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!ExcAVR1.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcAVR1: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcAVR1.attributeHTML(object, cimmenu);
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
export default ExcAVR1
