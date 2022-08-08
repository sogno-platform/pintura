import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcIEEEAC6A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcIEEEAC6A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcIEEEAC6A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.ka'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC6A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC6A.ta'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.tk' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.tk'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.tk'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC6A.tk'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.tk'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.tk'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC6A.tk'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC6A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC6A.tb'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC6A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC6A.tc'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.vamax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.vamax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.vamax'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.vamin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.vamin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.vamin'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.vrmax'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.vrmin'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.te' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC6A.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC6A.te'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.kh' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.kh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.kh'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.kh'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.kh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.kh'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.kh'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.tj' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.tj'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.tj'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC6A.tj'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.tj'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.tj'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC6A.tj'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.th' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.th'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.th'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC6A.th'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.th'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.th'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC6A.th'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.vfelim' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.vfelim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.vfelim'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.vfelim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.vfelim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.vfelim'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.vfelim'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.vhmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.vhmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.vhmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.vhmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.vhmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.vhmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.vhmax'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.kc'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.kd' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.kd'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.kd'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.kd'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.ke'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.ve1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.ve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.ve1'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.seve1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC6A.seve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC6A.seve1'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.ve2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.ve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC6A.ve2'
                                                 );
        }
        if ('cim:ExcIEEEAC6A.seve2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC6A.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC6A.seve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC6A.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC6A.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC6A.seve2'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'tk': [CGMESProfile.shortNames.DY, ],
						'tb': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						'vamax': [CGMESProfile.shortNames.DY, ],
						'vamin': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						'te': [CGMESProfile.shortNames.DY, ],
						'kh': [CGMESProfile.shortNames.DY, ],
						'tj': [CGMESProfile.shortNames.DY, ],
						'th': [CGMESProfile.shortNames.DY, ],
						'vfelim': [CGMESProfile.shortNames.DY, ],
						'vhmax': [CGMESProfile.shortNames.DY, ],
						'kc': [CGMESProfile.shortNames.DY, ],
						'kd': [CGMESProfile.shortNames.DY, ],
						'ke': [CGMESProfile.shortNames.DY, ],
						've1': [CGMESProfile.shortNames.DY, ],
						'seve1': [CGMESProfile.shortNames.DY, ],
						've2': [CGMESProfile.shortNames.DY, ],
						'seve2': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcIEEEAC6A.ka",
            "cim:ExcIEEEAC6A.ta",
            "cim:ExcIEEEAC6A.tk",
            "cim:ExcIEEEAC6A.tb",
            "cim:ExcIEEEAC6A.tc",
            "cim:ExcIEEEAC6A.vamax",
            "cim:ExcIEEEAC6A.vamin",
            "cim:ExcIEEEAC6A.vrmax",
            "cim:ExcIEEEAC6A.vrmin",
            "cim:ExcIEEEAC6A.te",
            "cim:ExcIEEEAC6A.kh",
            "cim:ExcIEEEAC6A.tj",
            "cim:ExcIEEEAC6A.th",
            "cim:ExcIEEEAC6A.vfelim",
            "cim:ExcIEEEAC6A.vhmax",
            "cim:ExcIEEEAC6A.kc",
            "cim:ExcIEEEAC6A.kd",
            "cim:ExcIEEEAC6A.ke",
            "cim:ExcIEEEAC6A.ve1",
            "cim:ExcIEEEAC6A.seve1",
            "cim:ExcIEEEAC6A.ve2",
            "cim:ExcIEEEAC6A.seve2",
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
            if (!ExcIEEEAC6A.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcIEEEAC6A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcIEEEAC6A.attributeHTML(object, cimmenu);
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
export default ExcIEEEAC6A
