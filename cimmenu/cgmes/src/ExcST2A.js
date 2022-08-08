import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcST2A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcST2A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcST2A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcST2A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcST2A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST2A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcST2A.ka'
                                                 );
        }
        if ('cim:ExcST2A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcST2A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcST2A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST2A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcST2A.ta'
                                                 );
        }
        if ('cim:ExcST2A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcST2A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcST2A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST2A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcST2A.vrmax'
                                                 );
        }
        if ('cim:ExcST2A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcST2A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcST2A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST2A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcST2A.vrmin'
                                                 );
        }
        if ('cim:ExcST2A.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcST2A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcST2A.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST2A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcST2A.ke'
                                                 );
        }
        if ('cim:ExcST2A.te' in object) {
            attributeEntries['filledEntries']['cim:ExcST2A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcST2A.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST2A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcST2A.te'
                                                 );
        }
        if ('cim:ExcST2A.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcST2A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcST2A.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST2A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcST2A.kf'
                                                 );
        }
        if ('cim:ExcST2A.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcST2A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcST2A.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST2A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcST2A.tf'
                                                 );
        }
        if ('cim:ExcST2A.kp' in object) {
            attributeEntries['filledEntries']['cim:ExcST2A.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.kp'],
                                                   'cim:PU',
                                                   'cim:ExcST2A.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST2A.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.kp'],
                                                   'cim:PU',
                                                   'cim:ExcST2A.kp'
                                                 );
        }
        if ('cim:ExcST2A.ki' in object) {
            attributeEntries['filledEntries']['cim:ExcST2A.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.ki'],
                                                   'cim:PU',
                                                   'cim:ExcST2A.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST2A.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.ki'],
                                                   'cim:PU',
                                                   'cim:ExcST2A.ki'
                                                 );
        }
        if ('cim:ExcST2A.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcST2A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcST2A.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST2A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcST2A.kc'
                                                 );
        }
        if ('cim:ExcST2A.efdmax' in object) {
            attributeEntries['filledEntries']['cim:ExcST2A.efdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.efdmax'],
                                                   'cim:PU',
                                                   'cim:ExcST2A.efdmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST2A.efdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.efdmax'],
                                                   'cim:PU',
                                                   'cim:ExcST2A.efdmax'
                                                 );
        }
        if ('cim:ExcST2A.uelin' in object) {
            attributeEntries['filledEntries']['cim:ExcST2A.uelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.uelin'],
                                                   'cim:Boolean',
                                                   'cim:ExcST2A.uelin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST2A.uelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.uelin'],
                                                   'cim:Boolean',
                                                   'cim:ExcST2A.uelin'
                                                 );
        }
        if ('cim:ExcST2A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcST2A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcST2A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST2A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcST2A.tb'
                                                 );
        }
        if ('cim:ExcST2A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcST2A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcST2A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST2A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST2A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcST2A.tc'
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
						'tb': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcST2A.ka",
            "cim:ExcST2A.ta",
            "cim:ExcST2A.vrmax",
            "cim:ExcST2A.vrmin",
            "cim:ExcST2A.ke",
            "cim:ExcST2A.te",
            "cim:ExcST2A.kf",
            "cim:ExcST2A.tf",
            "cim:ExcST2A.kp",
            "cim:ExcST2A.ki",
            "cim:ExcST2A.kc",
            "cim:ExcST2A.efdmax",
            "cim:ExcST2A.uelin",
            "cim:ExcST2A.tb",
            "cim:ExcST2A.tc",
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
            if (!ExcST2A.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcST2A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcST2A.attributeHTML(object, cimmenu);
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
export default ExcST2A
