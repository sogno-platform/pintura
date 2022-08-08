import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcDC3A1 extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcDC3A1") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcDC3A1.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A1.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.ka'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A1.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A1.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.ka'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A1.ka'
                                                 );
        }
        if ('cim:ExcDC3A1.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A1.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC3A1.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A1.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC3A1.ta'
                                                 );
        }
        if ('cim:ExcDC3A1.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A1.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A1.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A1.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A1.vrmax'
                                                 );
        }
        if ('cim:ExcDC3A1.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A1.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A1.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A1.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A1.vrmin'
                                                 );
        }
        if ('cim:ExcDC3A1.te' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A1.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC3A1.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A1.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC3A1.te'
                                                 );
        }
        if ('cim:ExcDC3A1.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A1.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.kf'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A1.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A1.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.kf'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A1.kf'
                                                 );
        }
        if ('cim:ExcDC3A1.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A1.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC3A1.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A1.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC3A1.tf'
                                                 );
        }
        if ('cim:ExcDC3A1.kp' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A1.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.kp'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A1.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A1.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.kp'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A1.kp'
                                                 );
        }
        if ('cim:ExcDC3A1.ki' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A1.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.ki'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A1.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A1.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.ki'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A1.ki'
                                                 );
        }
        if ('cim:ExcDC3A1.vbmax' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A1.vbmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.vbmax'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A1.vbmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A1.vbmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.vbmax'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A1.vbmax'
                                                 );
        }
        if ('cim:ExcDC3A1.exclim' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A1.exclim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.exclim'],
                                                   'cim:Boolean',
                                                   'cim:ExcDC3A1.exclim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A1.exclim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.exclim'],
                                                   'cim:Boolean',
                                                   'cim:ExcDC3A1.exclim'
                                                 );
        }
        if ('cim:ExcDC3A1.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A1.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.ke'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A1.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A1.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.ke'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A1.ke'
                                                 );
        }
        if ('cim:ExcDC3A1.vb1max' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A1.vb1max'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.vb1max'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A1.vb1max'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A1.vb1max'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.vb1max'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A1.vb1max'
                                                 );
        }
        if ('cim:ExcDC3A1.vblim' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A1.vblim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.vblim'],
                                                   'cim:Boolean',
                                                   'cim:ExcDC3A1.vblim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A1.vblim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A1.vblim'],
                                                   'cim:Boolean',
                                                   'cim:ExcDC3A1.vblim'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						'te': [CGMESProfile.shortNames.DY, ],
						'kf': [CGMESProfile.shortNames.DY, ],
						'tf': [CGMESProfile.shortNames.DY, ],
						'kp': [CGMESProfile.shortNames.DY, ],
						'ki': [CGMESProfile.shortNames.DY, ],
						'vbmax': [CGMESProfile.shortNames.DY, ],
						'exclim': [CGMESProfile.shortNames.DY, ],
						'ke': [CGMESProfile.shortNames.DY, ],
						'vb1max': [CGMESProfile.shortNames.DY, ],
						'vblim': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcDC3A1.ka",
            "cim:ExcDC3A1.ta",
            "cim:ExcDC3A1.vrmax",
            "cim:ExcDC3A1.vrmin",
            "cim:ExcDC3A1.te",
            "cim:ExcDC3A1.kf",
            "cim:ExcDC3A1.tf",
            "cim:ExcDC3A1.kp",
            "cim:ExcDC3A1.ki",
            "cim:ExcDC3A1.vbmax",
            "cim:ExcDC3A1.exclim",
            "cim:ExcDC3A1.ke",
            "cim:ExcDC3A1.vb1max",
            "cim:ExcDC3A1.vblim",
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
            if (!ExcDC3A1.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcDC3A1: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcDC3A1.attributeHTML(object, cimmenu);
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
export default ExcDC3A1
