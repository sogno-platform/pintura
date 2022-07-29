import templates from "../../templates/index.js"
import PFVArControllerType2Dynamics from "./PFVArControllerType2Dynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PFVArType2Common1 extends PFVArControllerType2Dynamics {

    static attributeHTML(object, cimmenu, classType="PFVArType2Common1") {
        let attributeEntries = PFVArControllerType2Dynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:PFVArType2Common1.j' in object) {
            attributeEntries['filledEntries']['cim:PFVArType2Common1.j'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2Common1.j'],
                                                   'cim:Boolean',
                                                   'cim:PFVArType2Common1.j'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType2Common1.j'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2Common1.j'],
                                                   'cim:Boolean',
                                                   'cim:PFVArType2Common1.j'
                                                 );
        }
        if ('cim:PFVArType2Common1.kp' in object) {
            attributeEntries['filledEntries']['cim:PFVArType2Common1.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2Common1.kp'],
                                                   'cim:PU',
                                                   'cim:PFVArType2Common1.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType2Common1.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2Common1.kp'],
                                                   'cim:PU',
                                                   'cim:PFVArType2Common1.kp'
                                                 );
        }
        if ('cim:PFVArType2Common1.ki' in object) {
            attributeEntries['filledEntries']['cim:PFVArType2Common1.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2Common1.ki'],
                                                   'cim:PU',
                                                   'cim:PFVArType2Common1.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType2Common1.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2Common1.ki'],
                                                   'cim:PU',
                                                   'cim:PFVArType2Common1.ki'
                                                 );
        }
        if ('cim:PFVArType2Common1.max' in object) {
            attributeEntries['filledEntries']['cim:PFVArType2Common1.max'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2Common1.max'],
                                                   'cim:PU',
                                                   'cim:PFVArType2Common1.max'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType2Common1.max'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2Common1.max'],
                                                   'cim:PU',
                                                   'cim:PFVArType2Common1.max'
                                                 );
        }
        if ('cim:PFVArType2Common1.ref' in object) {
            attributeEntries['filledEntries']['cim:PFVArType2Common1.ref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2Common1.ref'],
                                                   'cim:PU',
                                                   'cim:PFVArType2Common1.ref'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PFVArType2Common1.ref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PFVArType2Common1.ref'],
                                                   'cim:PU',
                                                   'cim:PFVArType2Common1.ref'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'j': [CGMESProfile.shortNames.DY, ],
						'kp': [CGMESProfile.shortNames.DY, ],
						'ki': [CGMESProfile.shortNames.DY, ],
						'max': [CGMESProfile.shortNames.DY, ],
						'ref': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PFVArType2Common1.j",
            "cim:PFVArType2Common1.kp",
            "cim:PFVArType2Common1.ki",
            "cim:PFVArType2Common1.max",
            "cim:PFVArType2Common1.ref",
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
            if (!PFVArType2Common1.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PFVArType2Common1: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PFVArType2Common1.attributeHTML(object, cimmenu);
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
export default PFVArType2Common1
