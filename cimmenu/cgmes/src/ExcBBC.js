import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"

class ExcBBC extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcBBC") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcBBC.t1' in object) {
            attributeEntries['filledEntries']['cim:ExcBBC.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.t1'],
                                                   'cim:Seconds',
                                                   'cim:ExcBBC.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcBBC.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.t1'],
                                                   'cim:Seconds',
                                                   'cim:ExcBBC.t1'
                                                 );
        }
        if ('cim:ExcBBC.t2' in object) {
            attributeEntries['filledEntries']['cim:ExcBBC.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.t2'],
                                                   'cim:Seconds',
                                                   'cim:ExcBBC.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcBBC.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.t2'],
                                                   'cim:Seconds',
                                                   'cim:ExcBBC.t2'
                                                 );
        }
        if ('cim:ExcBBC.t3' in object) {
            attributeEntries['filledEntries']['cim:ExcBBC.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.t3'],
                                                   'cim:Seconds',
                                                   'cim:ExcBBC.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcBBC.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.t3'],
                                                   'cim:Seconds',
                                                   'cim:ExcBBC.t3'
                                                 );
        }
        if ('cim:ExcBBC.t4' in object) {
            attributeEntries['filledEntries']['cim:ExcBBC.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.t4'],
                                                   'cim:Seconds',
                                                   'cim:ExcBBC.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcBBC.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.t4'],
                                                   'cim:Seconds',
                                                   'cim:ExcBBC.t4'
                                                 );
        }
        if ('cim:ExcBBC.k' in object) {
            attributeEntries['filledEntries']['cim:ExcBBC.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.k'],
                                                   'cim:PU',
                                                   'cim:ExcBBC.k'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcBBC.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.k'],
                                                   'cim:PU',
                                                   'cim:ExcBBC.k'
                                                 );
        }
        if ('cim:ExcBBC.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcBBC.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcBBC.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcBBC.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcBBC.vrmin'
                                                 );
        }
        if ('cim:ExcBBC.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcBBC.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcBBC.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcBBC.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcBBC.vrmax'
                                                 );
        }
        if ('cim:ExcBBC.efdmin' in object) {
            attributeEntries['filledEntries']['cim:ExcBBC.efdmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.efdmin'],
                                                   'cim:PU',
                                                   'cim:ExcBBC.efdmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcBBC.efdmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.efdmin'],
                                                   'cim:PU',
                                                   'cim:ExcBBC.efdmin'
                                                 );
        }
        if ('cim:ExcBBC.efdmax' in object) {
            attributeEntries['filledEntries']['cim:ExcBBC.efdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.efdmax'],
                                                   'cim:PU',
                                                   'cim:ExcBBC.efdmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcBBC.efdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.efdmax'],
                                                   'cim:PU',
                                                   'cim:ExcBBC.efdmax'
                                                 );
        }
        if ('cim:ExcBBC.xe' in object) {
            attributeEntries['filledEntries']['cim:ExcBBC.xe'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.xe'],
                                                   'cim:PU',
                                                   'cim:ExcBBC.xe'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcBBC.xe'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.xe'],
                                                   'cim:PU',
                                                   'cim:ExcBBC.xe'
                                                 );
        }
        if ('cim:ExcBBC.switch' in object) {
            attributeEntries['filledEntries']['cim:ExcBBC.switch'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.switch'],
                                                   'cim:Boolean',
                                                   'cim:ExcBBC.switch'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcBBC.switch'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcBBC.switch'],
                                                   'cim:Boolean',
                                                   'cim:ExcBBC.switch'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcBBC.t1",
            "cim:ExcBBC.t2",
            "cim:ExcBBC.t3",
            "cim:ExcBBC.t4",
            "cim:ExcBBC.k",
            "cim:ExcBBC.vrmin",
            "cim:ExcBBC.vrmax",
            "cim:ExcBBC.efdmin",
            "cim:ExcBBC.efdmax",
            "cim:ExcBBC.xe",
            "cim:ExcBBC.switch",
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
            if (!ExcBBC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcBBC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcBBC.attributeHTML(object, cimmenu);
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
export default ExcBBC
