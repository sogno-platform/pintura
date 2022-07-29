import templates from "../../templates/index.js"
import PFVArControllerType1Dynamics from "./PFVArControllerType1Dynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PFVArType1IEEEPFController extends PFVArControllerType1Dynamics {

    static attributeHTML(object, cimmenu, classType="PFVArType1IEEEPFController") {
        let attributeEntries = PFVArControllerType1Dynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:PFVArType1IEEEPFController.ovex' in object) {
            attributeEntries['filledEntries']['cim:PFVArType1IEEEPFController.ovex'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEPFController.ovex'],
                                                   'cim:Boolean',
                                                   'cim:PFVArType1IEEEPFController.ovex'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType1IEEEPFController.ovex'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEPFController.ovex'],
                                                   'cim:Boolean',
                                                   'cim:PFVArType1IEEEPFController.ovex'
                                                 );
        }
        if ('cim:PFVArType1IEEEPFController.tpfc' in object) {
            attributeEntries['filledEntries']['cim:PFVArType1IEEEPFController.tpfc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEPFController.tpfc'],
                                                   'cim:Seconds',
                                                   'cim:PFVArType1IEEEPFController.tpfc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType1IEEEPFController.tpfc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEPFController.tpfc'],
                                                   'cim:Seconds',
                                                   'cim:PFVArType1IEEEPFController.tpfc'
                                                 );
        }
        if ('cim:PFVArType1IEEEPFController.vitmin' in object) {
            attributeEntries['filledEntries']['cim:PFVArType1IEEEPFController.vitmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEPFController.vitmin'],
                                                   'cim:PU',
                                                   'cim:PFVArType1IEEEPFController.vitmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType1IEEEPFController.vitmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEPFController.vitmin'],
                                                   'cim:PU',
                                                   'cim:PFVArType1IEEEPFController.vitmin'
                                                 );
        }
        if ('cim:PFVArType1IEEEPFController.vpf' in object) {
            attributeEntries['filledEntries']['cim:PFVArType1IEEEPFController.vpf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEPFController.vpf'],
                                                   'cim:PU',
                                                   'cim:PFVArType1IEEEPFController.vpf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType1IEEEPFController.vpf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEPFController.vpf'],
                                                   'cim:PU',
                                                   'cim:PFVArType1IEEEPFController.vpf'
                                                 );
        }
        if ('cim:PFVArType1IEEEPFController.vpfcbw' in object) {
            attributeEntries['filledEntries']['cim:PFVArType1IEEEPFController.vpfcbw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEPFController.vpfcbw'],
                                                   'cim:Simple_Float',
                                                   'cim:PFVArType1IEEEPFController.vpfcbw'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType1IEEEPFController.vpfcbw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEPFController.vpfcbw'],
                                                   'cim:Simple_Float',
                                                   'cim:PFVArType1IEEEPFController.vpfcbw'
                                                 );
        }
        if ('cim:PFVArType1IEEEPFController.vpfref' in object) {
            attributeEntries['filledEntries']['cim:PFVArType1IEEEPFController.vpfref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEPFController.vpfref'],
                                                   'cim:PU',
                                                   'cim:PFVArType1IEEEPFController.vpfref'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType1IEEEPFController.vpfref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEPFController.vpfref'],
                                                   'cim:PU',
                                                   'cim:PFVArType1IEEEPFController.vpfref'
                                                 );
        }
        if ('cim:PFVArType1IEEEPFController.vvtmax' in object) {
            attributeEntries['filledEntries']['cim:PFVArType1IEEEPFController.vvtmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEPFController.vvtmax'],
                                                   'cim:PU',
                                                   'cim:PFVArType1IEEEPFController.vvtmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType1IEEEPFController.vvtmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEPFController.vvtmax'],
                                                   'cim:PU',
                                                   'cim:PFVArType1IEEEPFController.vvtmax'
                                                 );
        }
        if ('cim:PFVArType1IEEEPFController.vvtmin' in object) {
            attributeEntries['filledEntries']['cim:PFVArType1IEEEPFController.vvtmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEPFController.vvtmin'],
                                                   'cim:PU',
                                                   'cim:PFVArType1IEEEPFController.vvtmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType1IEEEPFController.vvtmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEPFController.vvtmin'],
                                                   'cim:PU',
                                                   'cim:PFVArType1IEEEPFController.vvtmin'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ovex': [CGMESProfile.shortNames.DY, ],
						'tpfc': [CGMESProfile.shortNames.DY, ],
						'vitmin': [CGMESProfile.shortNames.DY, ],
						'vpf': [CGMESProfile.shortNames.DY, ],
						'vpfcbw': [CGMESProfile.shortNames.DY, ],
						'vpfref': [CGMESProfile.shortNames.DY, ],
						'vvtmax': [CGMESProfile.shortNames.DY, ],
						'vvtmin': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PFVArType1IEEEPFController.ovex",
            "cim:PFVArType1IEEEPFController.tpfc",
            "cim:PFVArType1IEEEPFController.vitmin",
            "cim:PFVArType1IEEEPFController.vpf",
            "cim:PFVArType1IEEEPFController.vpfcbw",
            "cim:PFVArType1IEEEPFController.vpfref",
            "cim:PFVArType1IEEEPFController.vvtmax",
            "cim:PFVArType1IEEEPFController.vvtmin",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( PFVArControllerType1Dynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!PFVArType1IEEEPFController.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PFVArType1IEEEPFController: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PFVArType1IEEEPFController.attributeHTML(object, cimmenu);
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
export default PFVArType1IEEEPFController
