import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"

class ExcSCRX extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcSCRX") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcSCRX.tatb' in object) {
            attributeEntries['filledEntries']['cim:ExcSCRX.tatb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSCRX.tatb'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcSCRX.tatb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSCRX.tatb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSCRX.tatb'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcSCRX.tatb'
                                                 );
        }
        if ('cim:ExcSCRX.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcSCRX.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSCRX.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcSCRX.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSCRX.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSCRX.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcSCRX.tb'
                                                 );
        }
        if ('cim:ExcSCRX.k' in object) {
            attributeEntries['filledEntries']['cim:ExcSCRX.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSCRX.k'],
                                                   'cim:PU',
                                                   'cim:ExcSCRX.k'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSCRX.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSCRX.k'],
                                                   'cim:PU',
                                                   'cim:ExcSCRX.k'
                                                 );
        }
        if ('cim:ExcSCRX.te' in object) {
            attributeEntries['filledEntries']['cim:ExcSCRX.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSCRX.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcSCRX.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSCRX.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSCRX.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcSCRX.te'
                                                 );
        }
        if ('cim:ExcSCRX.emin' in object) {
            attributeEntries['filledEntries']['cim:ExcSCRX.emin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSCRX.emin'],
                                                   'cim:PU',
                                                   'cim:ExcSCRX.emin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSCRX.emin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSCRX.emin'],
                                                   'cim:PU',
                                                   'cim:ExcSCRX.emin'
                                                 );
        }
        if ('cim:ExcSCRX.emax' in object) {
            attributeEntries['filledEntries']['cim:ExcSCRX.emax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSCRX.emax'],
                                                   'cim:PU',
                                                   'cim:ExcSCRX.emax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSCRX.emax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSCRX.emax'],
                                                   'cim:PU',
                                                   'cim:ExcSCRX.emax'
                                                 );
        }
        if ('cim:ExcSCRX.cswitch' in object) {
            attributeEntries['filledEntries']['cim:ExcSCRX.cswitch'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSCRX.cswitch'],
                                                   'cim:Boolean',
                                                   'cim:ExcSCRX.cswitch'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSCRX.cswitch'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSCRX.cswitch'],
                                                   'cim:Boolean',
                                                   'cim:ExcSCRX.cswitch'
                                                 );
        }
        if ('cim:ExcSCRX.rcrfd' in object) {
            attributeEntries['filledEntries']['cim:ExcSCRX.rcrfd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSCRX.rcrfd'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcSCRX.rcrfd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSCRX.rcrfd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSCRX.rcrfd'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcSCRX.rcrfd'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcSCRX.tatb",
            "cim:ExcSCRX.tb",
            "cim:ExcSCRX.k",
            "cim:ExcSCRX.te",
            "cim:ExcSCRX.emin",
            "cim:ExcSCRX.emax",
            "cim:ExcSCRX.cswitch",
            "cim:ExcSCRX.rcrfd",
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
            if (!ExcSCRX.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcSCRX: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcSCRX.attributeHTML(object, cimmenu);
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
export default ExcSCRX
