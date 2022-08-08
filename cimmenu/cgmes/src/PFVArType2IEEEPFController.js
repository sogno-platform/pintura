import templates from "../../templates/index.js"
import PFVArControllerType2Dynamics from "./PFVArControllerType2Dynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PFVArType2IEEEPFController extends PFVArControllerType2Dynamics {

    static attributeHTML(object, cimmenu, classType="PFVArType2IEEEPFController") {
        let attributeEntries = PFVArControllerType2Dynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:PFVArType2IEEEPFController.pfref' in object) {
            attributeEntries['filledEntries']['cim:PFVArType2IEEEPFController.pfref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEPFController.pfref'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEPFController.pfref'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType2IEEEPFController.pfref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEPFController.pfref'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEPFController.pfref'
                                                 );
        }
        if ('cim:PFVArType2IEEEPFController.vref' in object) {
            attributeEntries['filledEntries']['cim:PFVArType2IEEEPFController.vref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEPFController.vref'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEPFController.vref'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType2IEEEPFController.vref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEPFController.vref'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEPFController.vref'
                                                 );
        }
        if ('cim:PFVArType2IEEEPFController.vclmt' in object) {
            attributeEntries['filledEntries']['cim:PFVArType2IEEEPFController.vclmt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEPFController.vclmt'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEPFController.vclmt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType2IEEEPFController.vclmt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEPFController.vclmt'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEPFController.vclmt'
                                                 );
        }
        if ('cim:PFVArType2IEEEPFController.kp' in object) {
            attributeEntries['filledEntries']['cim:PFVArType2IEEEPFController.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEPFController.kp'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEPFController.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType2IEEEPFController.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEPFController.kp'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEPFController.kp'
                                                 );
        }
        if ('cim:PFVArType2IEEEPFController.ki' in object) {
            attributeEntries['filledEntries']['cim:PFVArType2IEEEPFController.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEPFController.ki'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEPFController.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType2IEEEPFController.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEPFController.ki'],
                                                   'cim:PU',
                                                   'cim:PFVArType2IEEEPFController.ki'
                                                 );
        }
        if ('cim:PFVArType2IEEEPFController.vs' in object) {
            attributeEntries['filledEntries']['cim:PFVArType2IEEEPFController.vs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEPFController.vs'],
                                                   'cim:Simple_Float',
                                                   'cim:PFVArType2IEEEPFController.vs'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType2IEEEPFController.vs'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEPFController.vs'],
                                                   'cim:Simple_Float',
                                                   'cim:PFVArType2IEEEPFController.vs'
                                                 );
        }
        if ('cim:PFVArType2IEEEPFController.exlon' in object) {
            attributeEntries['filledEntries']['cim:PFVArType2IEEEPFController.exlon'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEPFController.exlon'],
                                                   'cim:Boolean',
                                                   'cim:PFVArType2IEEEPFController.exlon'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType2IEEEPFController.exlon'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2IEEEPFController.exlon'],
                                                   'cim:Boolean',
                                                   'cim:PFVArType2IEEEPFController.exlon'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'pfref': [CGMESProfile.shortNames.DY, ],
						'vref': [CGMESProfile.shortNames.DY, ],
						'vclmt': [CGMESProfile.shortNames.DY, ],
						'kp': [CGMESProfile.shortNames.DY, ],
						'ki': [CGMESProfile.shortNames.DY, ],
						'vs': [CGMESProfile.shortNames.DY, ],
						'exlon': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PFVArType2IEEEPFController.pfref",
            "cim:PFVArType2IEEEPFController.vref",
            "cim:PFVArType2IEEEPFController.vclmt",
            "cim:PFVArType2IEEEPFController.kp",
            "cim:PFVArType2IEEEPFController.ki",
            "cim:PFVArType2IEEEPFController.vs",
            "cim:PFVArType2IEEEPFController.exlon",
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
            if (!PFVArType2IEEEPFController.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class PFVArType2IEEEPFController: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PFVArType2IEEEPFController.attributeHTML(object, cimmenu);
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
export default PFVArType2IEEEPFController
