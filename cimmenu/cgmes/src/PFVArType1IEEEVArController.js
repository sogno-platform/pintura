import templates from "../../templates/index.js"
import PFVArControllerType1Dynamics from "./PFVArControllerType1Dynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PFVArType1IEEEVArController extends PFVArControllerType1Dynamics {

    static attributeHTML(object, cimmenu, classType="PFVArType1IEEEVArController") {
        let attributeEntries = PFVArControllerType1Dynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:PFVArType1IEEEVArController.tvarc' in object) {
            attributeEntries['filledEntries']['cim:PFVArType1IEEEVArController.tvarc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEVArController.tvarc'],
                                                   'cim:Seconds',
                                                   'cim:PFVArType1IEEEVArController.tvarc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType1IEEEVArController.tvarc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEVArController.tvarc'],
                                                   'cim:Seconds',
                                                   'cim:PFVArType1IEEEVArController.tvarc'
                                                 );
        }
        if ('cim:PFVArType1IEEEVArController.vvar' in object) {
            attributeEntries['filledEntries']['cim:PFVArType1IEEEVArController.vvar'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEVArController.vvar'],
                                                   'cim:PU',
                                                   'cim:PFVArType1IEEEVArController.vvar'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType1IEEEVArController.vvar'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEVArController.vvar'],
                                                   'cim:PU',
                                                   'cim:PFVArType1IEEEVArController.vvar'
                                                 );
        }
        if ('cim:PFVArType1IEEEVArController.vvarcbw' in object) {
            attributeEntries['filledEntries']['cim:PFVArType1IEEEVArController.vvarcbw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEVArController.vvarcbw'],
                                                   'cim:Simple_Float',
                                                   'cim:PFVArType1IEEEVArController.vvarcbw'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType1IEEEVArController.vvarcbw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEVArController.vvarcbw'],
                                                   'cim:Simple_Float',
                                                   'cim:PFVArType1IEEEVArController.vvarcbw'
                                                 );
        }
        if ('cim:PFVArType1IEEEVArController.vvarref' in object) {
            attributeEntries['filledEntries']['cim:PFVArType1IEEEVArController.vvarref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEVArController.vvarref'],
                                                   'cim:PU',
                                                   'cim:PFVArType1IEEEVArController.vvarref'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType1IEEEVArController.vvarref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEVArController.vvarref'],
                                                   'cim:PU',
                                                   'cim:PFVArType1IEEEVArController.vvarref'
                                                 );
        }
        if ('cim:PFVArType1IEEEVArController.vvtmax' in object) {
            attributeEntries['filledEntries']['cim:PFVArType1IEEEVArController.vvtmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEVArController.vvtmax'],
                                                   'cim:PU',
                                                   'cim:PFVArType1IEEEVArController.vvtmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType1IEEEVArController.vvtmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEVArController.vvtmax'],
                                                   'cim:PU',
                                                   'cim:PFVArType1IEEEVArController.vvtmax'
                                                 );
        }
        if ('cim:PFVArType1IEEEVArController.vvtmin' in object) {
            attributeEntries['filledEntries']['cim:PFVArType1IEEEVArController.vvtmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEVArController.vvtmin'],
                                                   'cim:PU',
                                                   'cim:PFVArType1IEEEVArController.vvtmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType1IEEEVArController.vvtmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType1IEEEVArController.vvtmin'],
                                                   'cim:PU',
                                                   'cim:PFVArType1IEEEVArController.vvtmin'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'tvarc': [CGMESProfile.shortNames.DY, ],
						'vvar': [CGMESProfile.shortNames.DY, ],
						'vvarcbw': [CGMESProfile.shortNames.DY, ],
						'vvarref': [CGMESProfile.shortNames.DY, ],
						'vvtmax': [CGMESProfile.shortNames.DY, ],
						'vvtmin': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PFVArType1IEEEVArController.tvarc",
            "cim:PFVArType1IEEEVArController.vvar",
            "cim:PFVArType1IEEEVArController.vvarcbw",
            "cim:PFVArType1IEEEVArController.vvarref",
            "cim:PFVArType1IEEEVArController.vvtmax",
            "cim:PFVArType1IEEEVArController.vvtmin",
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
            if (!PFVArType1IEEEVArController.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class PFVArType1IEEEVArController: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PFVArType1IEEEVArController.attributeHTML(object, cimmenu);
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
export default PFVArType1IEEEVArController
