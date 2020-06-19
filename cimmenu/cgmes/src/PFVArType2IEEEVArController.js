import templates from "../../templates/index.js"
import PFVArControllerType2Dynamics from "./PFVArControllerType2Dynamics.js"
import common from "../../src/common.js"

class PFVArType2IEEEVArController extends PFVArControllerType2Dynamics {

    static attributeHTML(object, cimmenu, classType="PFVArType2IEEEVArController") {
        let attributeEntries = PFVArControllerType2Dynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:PFVArType2IEEEVArController.qref' in object) {
            attributeEntries['filledEntries']['cim:PFVArType2IEEEVArController.qref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEVArController.qref'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEVArController.qref'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType2IEEEVArController.qref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEVArController.qref'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEVArController.qref'
                                                 );
        }
        if ('cim:PFVArType2IEEEVArController.vref' in object) {
            attributeEntries['filledEntries']['cim:PFVArType2IEEEVArController.vref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEVArController.vref'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEVArController.vref'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType2IEEEVArController.vref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEVArController.vref'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEVArController.vref'
                                                 );
        }
        if ('cim:PFVArType2IEEEVArController.vclmt' in object) {
            attributeEntries['filledEntries']['cim:PFVArType2IEEEVArController.vclmt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEVArController.vclmt'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEVArController.vclmt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType2IEEEVArController.vclmt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEVArController.vclmt'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEVArController.vclmt'
                                                 );
        }
        if ('cim:PFVArType2IEEEVArController.kp' in object) {
            attributeEntries['filledEntries']['cim:PFVArType2IEEEVArController.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEVArController.kp'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEVArController.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType2IEEEVArController.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEVArController.kp'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEVArController.kp'
                                                 );
        }
        if ('cim:PFVArType2IEEEVArController.ki' in object) {
            attributeEntries['filledEntries']['cim:PFVArType2IEEEVArController.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEVArController.ki'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEVArController.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType2IEEEVArController.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEVArController.ki'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEVArController.ki'
                                                 );
        }
        if ('cim:PFVArType2IEEEVArController.vs' in object) {
            attributeEntries['filledEntries']['cim:PFVArType2IEEEVArController.vs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEVArController.vs'],
                                                   'cim:Simple_Float',
                                                   'cim:PFVArType2IEEEVArController.vs'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType2IEEEVArController.vs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEVArController.vs'],
                                                   'cim:Simple_Float',
                                                   'cim:PFVArType2IEEEVArController.vs'
                                                 );
        }
        if ('cim:PFVArType2IEEEVArController.exlon' in object) {
            attributeEntries['filledEntries']['cim:PFVArType2IEEEVArController.exlon'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEVArController.exlon'],
                                                   'cim:Boolean',
                                                   'cim:PFVArType2IEEEVArController.exlon'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType2IEEEVArController.exlon'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEVArController.exlon'],
                                                   'cim:Boolean',
                                                   'cim:PFVArType2IEEEVArController.exlon'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PFVArType2IEEEVArController.qref",
            "cim:PFVArType2IEEEVArController.vref",
            "cim:PFVArType2IEEEVArController.vclmt",
            "cim:PFVArType2IEEEVArController.kp",
            "cim:PFVArType2IEEEVArController.ki",
            "cim:PFVArType2IEEEVArController.vs",
            "cim:PFVArType2IEEEVArController.exlon",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( PFVArControllerType2Dynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!PFVArType2IEEEVArController.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PFVArType2IEEEVArController: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PFVArType2IEEEVArController.attributeHTML(object, cimmenu);
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
export default PFVArType2IEEEVArController
