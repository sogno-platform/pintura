import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcIEEEST2A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcIEEEST2A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcIEEEST2A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST2A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST2A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST2A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST2A.ka'
                                                 );
        }
        if ('cim:ExcIEEEST2A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST2A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST2A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST2A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST2A.ta'
                                                 );
        }
        if ('cim:ExcIEEEST2A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST2A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST2A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST2A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST2A.vrmax'
                                                 );
        }
        if ('cim:ExcIEEEST2A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST2A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST2A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST2A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST2A.vrmin'
                                                 );
        }
        if ('cim:ExcIEEEST2A.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST2A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST2A.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST2A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST2A.ke'
                                                 );
        }
        if ('cim:ExcIEEEST2A.te' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST2A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST2A.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST2A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST2A.te'
                                                 );
        }
        if ('cim:ExcIEEEST2A.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST2A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST2A.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST2A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST2A.kf'
                                                 );
        }
        if ('cim:ExcIEEEST2A.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST2A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST2A.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST2A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST2A.tf'
                                                 );
        }
        if ('cim:ExcIEEEST2A.kp' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST2A.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.kp'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST2A.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST2A.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.kp'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST2A.kp'
                                                 );
        }
        if ('cim:ExcIEEEST2A.ki' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST2A.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.ki'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST2A.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST2A.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.ki'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST2A.ki'
                                                 );
        }
        if ('cim:ExcIEEEST2A.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST2A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST2A.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST2A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST2A.kc'
                                                 );
        }
        if ('cim:ExcIEEEST2A.efdmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST2A.efdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.efdmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST2A.efdmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST2A.efdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.efdmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST2A.efdmax'
                                                 );
        }
        if ('cim:ExcIEEEST2A.uelin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST2A.uelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.uelin'],
                                                   'cim:Boolean',
                                                   'cim:ExcIEEEST2A.uelin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST2A.uelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST2A.uelin'],
                                                   'cim:Boolean',
                                                   'cim:ExcIEEEST2A.uelin'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						'ke': [CGMESProfile.shortNames.DY, ],
						'te': [CGMESProfile.shortNames.DY, ],
						'kf': [CGMESProfile.shortNames.DY, ],
						'tf': [CGMESProfile.shortNames.DY, ],
						'kp': [CGMESProfile.shortNames.DY, ],
						'ki': [CGMESProfile.shortNames.DY, ],
						'kc': [CGMESProfile.shortNames.DY, ],
						'efdmax': [CGMESProfile.shortNames.DY, ],
						'uelin': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcIEEEST2A.ka",
            "cim:ExcIEEEST2A.ta",
            "cim:ExcIEEEST2A.vrmax",
            "cim:ExcIEEEST2A.vrmin",
            "cim:ExcIEEEST2A.ke",
            "cim:ExcIEEEST2A.te",
            "cim:ExcIEEEST2A.kf",
            "cim:ExcIEEEST2A.tf",
            "cim:ExcIEEEST2A.kp",
            "cim:ExcIEEEST2A.ki",
            "cim:ExcIEEEST2A.kc",
            "cim:ExcIEEEST2A.efdmax",
            "cim:ExcIEEEST2A.uelin",
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
            if (!ExcIEEEST2A.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcIEEEST2A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcIEEEST2A.attributeHTML(object, cimmenu);
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
export default ExcIEEEST2A
