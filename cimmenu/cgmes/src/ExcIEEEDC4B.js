import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcIEEEDC4B extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcIEEEDC4B") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcIEEEDC4B.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC4B.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC4B.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.ka'
                                                 );
        }
        if ('cim:ExcIEEEDC4B.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC4B.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC4B.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC4B.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC4B.ta'
                                                 );
        }
        if ('cim:ExcIEEEDC4B.kp' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC4B.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.kp'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC4B.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.kp'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.kp'
                                                 );
        }
        if ('cim:ExcIEEEDC4B.ki' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC4B.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.ki'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC4B.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.ki'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.ki'
                                                 );
        }
        if ('cim:ExcIEEEDC4B.kd' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC4B.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.kd'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC4B.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.kd'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.kd'
                                                 );
        }
        if ('cim:ExcIEEEDC4B.td' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC4B.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.td'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC4B.td'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC4B.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.td'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC4B.td'
                                                 );
        }
        if ('cim:ExcIEEEDC4B.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC4B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC4B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.vrmax'
                                                 );
        }
        if ('cim:ExcIEEEDC4B.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC4B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC4B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.vrmin'
                                                 );
        }
        if ('cim:ExcIEEEDC4B.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC4B.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC4B.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.ke'
                                                 );
        }
        if ('cim:ExcIEEEDC4B.te' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC4B.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC4B.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC4B.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC4B.te'
                                                 );
        }
        if ('cim:ExcIEEEDC4B.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC4B.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.kf'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC4B.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.kf'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.kf'
                                                 );
        }
        if ('cim:ExcIEEEDC4B.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC4B.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC4B.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC4B.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC4B.tf'
                                                 );
        }
        if ('cim:ExcIEEEDC4B.efd1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC4B.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.efd1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.efd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC4B.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.efd1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.efd1'
                                                 );
        }
        if ('cim:ExcIEEEDC4B.seefd1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC4B.seefd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.seefd1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEDC4B.seefd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC4B.seefd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.seefd1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEDC4B.seefd1'
                                                 );
        }
        if ('cim:ExcIEEEDC4B.efd2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC4B.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.efd2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.efd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC4B.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.efd2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.efd2'
                                                 );
        }
        if ('cim:ExcIEEEDC4B.seefd2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC4B.seefd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.seefd2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEDC4B.seefd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC4B.seefd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.seefd2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEDC4B.seefd2'
                                                 );
        }
        if ('cim:ExcIEEEDC4B.vemin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC4B.vemin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.vemin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.vemin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC4B.vemin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.vemin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC4B.vemin'
                                                 );
        }
        if ('cim:ExcIEEEDC4B.oelin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC4B.oelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.oelin'],
                                                   'cim:Boolean',
                                                   'cim:ExcIEEEDC4B.oelin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC4B.oelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.oelin'],
                                                   'cim:Boolean',
                                                   'cim:ExcIEEEDC4B.oelin'
                                                 );
        }
        if ('cim:ExcIEEEDC4B.uelin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC4B.uelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.uelin'],
                                                   'cim:Boolean',
                                                   'cim:ExcIEEEDC4B.uelin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC4B.uelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC4B.uelin'],
                                                   'cim:Boolean',
                                                   'cim:ExcIEEEDC4B.uelin'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'kp': [CGMESProfile.shortNames.DY, ],
						'ki': [CGMESProfile.shortNames.DY, ],
						'kd': [CGMESProfile.shortNames.DY, ],
						'td': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						'ke': [CGMESProfile.shortNames.DY, ],
						'te': [CGMESProfile.shortNames.DY, ],
						'kf': [CGMESProfile.shortNames.DY, ],
						'tf': [CGMESProfile.shortNames.DY, ],
						'efd1': [CGMESProfile.shortNames.DY, ],
						'seefd1': [CGMESProfile.shortNames.DY, ],
						'efd2': [CGMESProfile.shortNames.DY, ],
						'seefd2': [CGMESProfile.shortNames.DY, ],
						'vemin': [CGMESProfile.shortNames.DY, ],
						'oelin': [CGMESProfile.shortNames.DY, ],
						'uelin': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcIEEEDC4B.ka",
            "cim:ExcIEEEDC4B.ta",
            "cim:ExcIEEEDC4B.kp",
            "cim:ExcIEEEDC4B.ki",
            "cim:ExcIEEEDC4B.kd",
            "cim:ExcIEEEDC4B.td",
            "cim:ExcIEEEDC4B.vrmax",
            "cim:ExcIEEEDC4B.vrmin",
            "cim:ExcIEEEDC4B.ke",
            "cim:ExcIEEEDC4B.te",
            "cim:ExcIEEEDC4B.kf",
            "cim:ExcIEEEDC4B.tf",
            "cim:ExcIEEEDC4B.efd1",
            "cim:ExcIEEEDC4B.seefd1",
            "cim:ExcIEEEDC4B.efd2",
            "cim:ExcIEEEDC4B.seefd2",
            "cim:ExcIEEEDC4B.vemin",
            "cim:ExcIEEEDC4B.oelin",
            "cim:ExcIEEEDC4B.uelin",
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
            if (!ExcIEEEDC4B.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcIEEEDC4B: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcIEEEDC4B.attributeHTML(object, cimmenu);
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
export default ExcIEEEDC4B
