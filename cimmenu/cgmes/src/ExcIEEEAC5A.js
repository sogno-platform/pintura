import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"

class ExcIEEEAC5A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcIEEEAC5A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcIEEEAC5A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC5A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC5A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC5A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC5A.ka'
                                                 );
        }
        if ('cim:ExcIEEEAC5A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC5A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC5A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC5A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC5A.ta'
                                                 );
        }
        if ('cim:ExcIEEEAC5A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC5A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC5A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC5A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC5A.vrmax'
                                                 );
        }
        if ('cim:ExcIEEEAC5A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC5A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC5A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC5A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC5A.vrmin'
                                                 );
        }
        if ('cim:ExcIEEEAC5A.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC5A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC5A.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC5A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC5A.ke'
                                                 );
        }
        if ('cim:ExcIEEEAC5A.te' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC5A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC5A.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC5A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC5A.te'
                                                 );
        }
        if ('cim:ExcIEEEAC5A.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC5A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC5A.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC5A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC5A.kf'
                                                 );
        }
        if ('cim:ExcIEEEAC5A.tf1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC5A.tf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.tf1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC5A.tf1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC5A.tf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.tf1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC5A.tf1'
                                                 );
        }
        if ('cim:ExcIEEEAC5A.tf2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC5A.tf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.tf2'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC5A.tf2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC5A.tf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.tf2'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC5A.tf2'
                                                 );
        }
        if ('cim:ExcIEEEAC5A.tf3' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC5A.tf3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.tf3'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC5A.tf3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC5A.tf3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.tf3'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC5A.tf3'
                                                 );
        }
        if ('cim:ExcIEEEAC5A.efd1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC5A.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.efd1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC5A.efd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC5A.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.efd1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC5A.efd1'
                                                 );
        }
        if ('cim:ExcIEEEAC5A.seefd1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC5A.seefd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.seefd1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC5A.seefd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC5A.seefd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.seefd1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC5A.seefd1'
                                                 );
        }
        if ('cim:ExcIEEEAC5A.efd2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC5A.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.efd2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC5A.efd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC5A.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.efd2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC5A.efd2'
                                                 );
        }
        if ('cim:ExcIEEEAC5A.seefd2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC5A.seefd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.seefd2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC5A.seefd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC5A.seefd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC5A.seefd2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC5A.seefd2'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcIEEEAC5A.ka",
            "cim:ExcIEEEAC5A.ta",
            "cim:ExcIEEEAC5A.vrmax",
            "cim:ExcIEEEAC5A.vrmin",
            "cim:ExcIEEEAC5A.ke",
            "cim:ExcIEEEAC5A.te",
            "cim:ExcIEEEAC5A.kf",
            "cim:ExcIEEEAC5A.tf1",
            "cim:ExcIEEEAC5A.tf2",
            "cim:ExcIEEEAC5A.tf3",
            "cim:ExcIEEEAC5A.efd1",
            "cim:ExcIEEEAC5A.seefd1",
            "cim:ExcIEEEAC5A.efd2",
            "cim:ExcIEEEAC5A.seefd2",
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
            if (!ExcIEEEAC5A.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcIEEEAC5A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcIEEEAC5A.attributeHTML(object, cimmenu);
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
export default ExcIEEEAC5A
