import templates from "../../templates/index.js"
import VoltageCompensatorDynamics from "./VoltageCompensatorDynamics.js"
import common from "../../src/common.js"

class VCompIEEEType1 extends VoltageCompensatorDynamics {

    static attributeHTML(object, cimmenu, classType="VCompIEEEType1") {
        let attributeEntries = VoltageCompensatorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:VCompIEEEType1.rc' in object) {
            attributeEntries['filledEntries']['cim:VCompIEEEType1.rc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VCompIEEEType1.rc'],
                                                   'cim:PU',
                                                   'cim:VCompIEEEType1.rc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VCompIEEEType1.rc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VCompIEEEType1.rc'],
                                                   'cim:PU',
                                                   'cim:VCompIEEEType1.rc'
                                                 );
        }
        if ('cim:VCompIEEEType1.xc' in object) {
            attributeEntries['filledEntries']['cim:VCompIEEEType1.xc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VCompIEEEType1.xc'],
                                                   'cim:PU',
                                                   'cim:VCompIEEEType1.xc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VCompIEEEType1.xc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VCompIEEEType1.xc'],
                                                   'cim:PU',
                                                   'cim:VCompIEEEType1.xc'
                                                 );
        }
        if ('cim:VCompIEEEType1.tr' in object) {
            attributeEntries['filledEntries']['cim:VCompIEEEType1.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VCompIEEEType1.tr'],
                                                   'cim:Seconds',
                                                   'cim:VCompIEEEType1.tr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VCompIEEEType1.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VCompIEEEType1.tr'],
                                                   'cim:Seconds',
                                                   'cim:VCompIEEEType1.tr'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:VCompIEEEType1.rc",
            "cim:VCompIEEEType1.xc",
            "cim:VCompIEEEType1.tr",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( VoltageCompensatorDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!VCompIEEEType1.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class VCompIEEEType1: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = VCompIEEEType1.attributeHTML(object, cimmenu);
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
export default VCompIEEEType1
