import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"

class ExcANS extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcANS") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcANS.k3' in object) {
            attributeEntries['filledEntries']['cim:ExcANS.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.k3'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcANS.k3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcANS.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.k3'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcANS.k3'
                                                 );
        }
        if ('cim:ExcANS.k2' in object) {
            attributeEntries['filledEntries']['cim:ExcANS.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.k2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcANS.k2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcANS.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.k2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcANS.k2'
                                                 );
        }
        if ('cim:ExcANS.kce' in object) {
            attributeEntries['filledEntries']['cim:ExcANS.kce'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.kce'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcANS.kce'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcANS.kce'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.kce'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcANS.kce'
                                                 );
        }
        if ('cim:ExcANS.t3' in object) {
            attributeEntries['filledEntries']['cim:ExcANS.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.t3'],
                                                   'cim:Seconds',
                                                   'cim:ExcANS.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcANS.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.t3'],
                                                   'cim:Seconds',
                                                   'cim:ExcANS.t3'
                                                 );
        }
        if ('cim:ExcANS.t2' in object) {
            attributeEntries['filledEntries']['cim:ExcANS.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.t2'],
                                                   'cim:Seconds',
                                                   'cim:ExcANS.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcANS.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.t2'],
                                                   'cim:Seconds',
                                                   'cim:ExcANS.t2'
                                                 );
        }
        if ('cim:ExcANS.t1' in object) {
            attributeEntries['filledEntries']['cim:ExcANS.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.t1'],
                                                   'cim:Seconds',
                                                   'cim:ExcANS.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcANS.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.t1'],
                                                   'cim:Seconds',
                                                   'cim:ExcANS.t1'
                                                 );
        }
        if ('cim:ExcANS.blint' in object) {
            attributeEntries['filledEntries']['cim:ExcANS.blint'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.blint'],
                                                   'cim:Integer',
                                                   'cim:ExcANS.blint'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcANS.blint'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.blint'],
                                                   'cim:Integer',
                                                   'cim:ExcANS.blint'
                                                 );
        }
        if ('cim:ExcANS.kvfif' in object) {
            attributeEntries['filledEntries']['cim:ExcANS.kvfif'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.kvfif'],
                                                   'cim:Integer',
                                                   'cim:ExcANS.kvfif'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcANS.kvfif'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.kvfif'],
                                                   'cim:Integer',
                                                   'cim:ExcANS.kvfif'
                                                 );
        }
        if ('cim:ExcANS.ifmn' in object) {
            attributeEntries['filledEntries']['cim:ExcANS.ifmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.ifmn'],
                                                   'cim:PU',
                                                   'cim:ExcANS.ifmn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcANS.ifmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.ifmn'],
                                                   'cim:PU',
                                                   'cim:ExcANS.ifmn'
                                                 );
        }
        if ('cim:ExcANS.ifmx' in object) {
            attributeEntries['filledEntries']['cim:ExcANS.ifmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.ifmx'],
                                                   'cim:PU',
                                                   'cim:ExcANS.ifmx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcANS.ifmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.ifmx'],
                                                   'cim:PU',
                                                   'cim:ExcANS.ifmx'
                                                 );
        }
        if ('cim:ExcANS.vrmn' in object) {
            attributeEntries['filledEntries']['cim:ExcANS.vrmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.vrmn'],
                                                   'cim:PU',
                                                   'cim:ExcANS.vrmn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcANS.vrmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.vrmn'],
                                                   'cim:PU',
                                                   'cim:ExcANS.vrmn'
                                                 );
        }
        if ('cim:ExcANS.vrmx' in object) {
            attributeEntries['filledEntries']['cim:ExcANS.vrmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.vrmx'],
                                                   'cim:PU',
                                                   'cim:ExcANS.vrmx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcANS.vrmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.vrmx'],
                                                   'cim:PU',
                                                   'cim:ExcANS.vrmx'
                                                 );
        }
        if ('cim:ExcANS.krvecc' in object) {
            attributeEntries['filledEntries']['cim:ExcANS.krvecc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.krvecc'],
                                                   'cim:Integer',
                                                   'cim:ExcANS.krvecc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcANS.krvecc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.krvecc'],
                                                   'cim:Integer',
                                                   'cim:ExcANS.krvecc'
                                                 );
        }
        if ('cim:ExcANS.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcANS.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcANS.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcANS.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcANS.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcANS.tb'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcANS.k3",
            "cim:ExcANS.k2",
            "cim:ExcANS.kce",
            "cim:ExcANS.t3",
            "cim:ExcANS.t2",
            "cim:ExcANS.t1",
            "cim:ExcANS.blint",
            "cim:ExcANS.kvfif",
            "cim:ExcANS.ifmn",
            "cim:ExcANS.ifmx",
            "cim:ExcANS.vrmn",
            "cim:ExcANS.vrmx",
            "cim:ExcANS.krvecc",
            "cim:ExcANS.tb",
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
            if (!ExcANS.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcANS: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcANS.attributeHTML(object, cimmenu);
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
export default ExcANS
