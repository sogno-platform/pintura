import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"

class ExcCZ extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcCZ") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcCZ.kp' in object) {
            attributeEntries['filledEntries']['cim:ExcCZ.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.kp'],
                                                   'cim:PU',
                                                   'cim:ExcCZ.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcCZ.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.kp'],
                                                   'cim:PU',
                                                   'cim:ExcCZ.kp'
                                                 );
        }
        if ('cim:ExcCZ.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcCZ.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcCZ.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcCZ.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcCZ.tc'
                                                 );
        }
        if ('cim:ExcCZ.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcCZ.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcCZ.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcCZ.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcCZ.vrmax'
                                                 );
        }
        if ('cim:ExcCZ.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcCZ.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcCZ.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcCZ.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcCZ.vrmin'
                                                 );
        }
        if ('cim:ExcCZ.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcCZ.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.ka'],
                                                   'cim:PU',
                                                   'cim:ExcCZ.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcCZ.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.ka'],
                                                   'cim:PU',
                                                   'cim:ExcCZ.ka'
                                                 );
        }
        if ('cim:ExcCZ.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcCZ.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcCZ.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcCZ.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcCZ.ta'
                                                 );
        }
        if ('cim:ExcCZ.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcCZ.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.ke'],
                                                   'cim:PU',
                                                   'cim:ExcCZ.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcCZ.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.ke'],
                                                   'cim:PU',
                                                   'cim:ExcCZ.ke'
                                                 );
        }
        if ('cim:ExcCZ.te' in object) {
            attributeEntries['filledEntries']['cim:ExcCZ.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcCZ.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcCZ.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcCZ.te'
                                                 );
        }
        if ('cim:ExcCZ.efdmax' in object) {
            attributeEntries['filledEntries']['cim:ExcCZ.efdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.efdmax'],
                                                   'cim:PU',
                                                   'cim:ExcCZ.efdmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcCZ.efdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.efdmax'],
                                                   'cim:PU',
                                                   'cim:ExcCZ.efdmax'
                                                 );
        }
        if ('cim:ExcCZ.efdmin' in object) {
            attributeEntries['filledEntries']['cim:ExcCZ.efdmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.efdmin'],
                                                   'cim:PU',
                                                   'cim:ExcCZ.efdmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcCZ.efdmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcCZ.efdmin'],
                                                   'cim:PU',
                                                   'cim:ExcCZ.efdmin'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcCZ.kp",
            "cim:ExcCZ.tc",
            "cim:ExcCZ.vrmax",
            "cim:ExcCZ.vrmin",
            "cim:ExcCZ.ka",
            "cim:ExcCZ.ta",
            "cim:ExcCZ.ke",
            "cim:ExcCZ.te",
            "cim:ExcCZ.efdmax",
            "cim:ExcCZ.efdmin",
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
            if (!ExcCZ.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcCZ: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcCZ.attributeHTML(object, cimmenu);
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
export default ExcCZ
