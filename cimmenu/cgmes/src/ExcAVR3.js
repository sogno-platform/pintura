import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"

class ExcAVR3 extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcAVR3") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcAVR3.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR3.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.ka'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR3.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR3.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.ka'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR3.ka'
                                                 );
        }
        if ('cim:ExcAVR3.vrmn' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR3.vrmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.vrmn'],
                                                   'cim:PU',
                                                   'cim:ExcAVR3.vrmn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR3.vrmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.vrmn'],
                                                   'cim:PU',
                                                   'cim:ExcAVR3.vrmn'
                                                 );
        }
        if ('cim:ExcAVR3.vrmx' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR3.vrmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.vrmx'],
                                                   'cim:PU',
                                                   'cim:ExcAVR3.vrmx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR3.vrmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.vrmx'],
                                                   'cim:PU',
                                                   'cim:ExcAVR3.vrmx'
                                                 );
        }
        if ('cim:ExcAVR3.t1' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR3.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.t1'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR3.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR3.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.t1'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR3.t1'
                                                 );
        }
        if ('cim:ExcAVR3.t2' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR3.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.t2'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR3.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR3.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.t2'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR3.t2'
                                                 );
        }
        if ('cim:ExcAVR3.t3' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR3.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.t3'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR3.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR3.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.t3'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR3.t3'
                                                 );
        }
        if ('cim:ExcAVR3.t4' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR3.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.t4'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR3.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR3.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.t4'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR3.t4'
                                                 );
        }
        if ('cim:ExcAVR3.te' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR3.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR3.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR3.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR3.te'
                                                 );
        }
        if ('cim:ExcAVR3.e1' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR3.e1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.e1'],
                                                   'cim:PU',
                                                   'cim:ExcAVR3.e1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR3.e1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.e1'],
                                                   'cim:PU',
                                                   'cim:ExcAVR3.e1'
                                                 );
        }
        if ('cim:ExcAVR3.se1' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR3.se1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.se1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR3.se1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR3.se1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.se1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR3.se1'
                                                 );
        }
        if ('cim:ExcAVR3.e2' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR3.e2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.e2'],
                                                   'cim:PU',
                                                   'cim:ExcAVR3.e2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR3.e2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.e2'],
                                                   'cim:PU',
                                                   'cim:ExcAVR3.e2'
                                                 );
        }
        if ('cim:ExcAVR3.se2' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR3.se2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.se2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR3.se2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR3.se2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR3.se2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR3.se2'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcAVR3.ka",
            "cim:ExcAVR3.vrmn",
            "cim:ExcAVR3.vrmx",
            "cim:ExcAVR3.t1",
            "cim:ExcAVR3.t2",
            "cim:ExcAVR3.t3",
            "cim:ExcAVR3.t4",
            "cim:ExcAVR3.te",
            "cim:ExcAVR3.e1",
            "cim:ExcAVR3.se1",
            "cim:ExcAVR3.e2",
            "cim:ExcAVR3.se2",
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
            if (!ExcAVR3.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcAVR3: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcAVR3.attributeHTML(object, cimmenu);
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
export default ExcAVR3
