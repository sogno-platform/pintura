import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcAC6A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcAC6A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcAC6A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.ka'
                                                 );
        }
        if ('cim:ExcAC6A.ks' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.ks'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.ks'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.ks'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.ks'
                                                 );
        }
        if ('cim:ExcAC6A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC6A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC6A.ta'
                                                 );
        }
        if ('cim:ExcAC6A.tk' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.tk'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.tk'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC6A.tk'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.tk'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.tk'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC6A.tk'
                                                 );
        }
        if ('cim:ExcAC6A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC6A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC6A.tb'
                                                 );
        }
        if ('cim:ExcAC6A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC6A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC6A.tc'
                                                 );
        }
        if ('cim:ExcAC6A.vamax' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.vamax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.vamax'
                                                 );
        }
        if ('cim:ExcAC6A.vamin' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.vamin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.vamin'
                                                 );
        }
        if ('cim:ExcAC6A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.vrmax'
                                                 );
        }
        if ('cim:ExcAC6A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.vrmin'
                                                 );
        }
        if ('cim:ExcAC6A.te' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC6A.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC6A.te'
                                                 );
        }
        if ('cim:ExcAC6A.kh' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.kh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.kh'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.kh'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.kh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.kh'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.kh'
                                                 );
        }
        if ('cim:ExcAC6A.tj' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.tj'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.tj'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC6A.tj'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.tj'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.tj'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC6A.tj'
                                                 );
        }
        if ('cim:ExcAC6A.th' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.th'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.th'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC6A.th'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.th'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.th'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC6A.th'
                                                 );
        }
        if ('cim:ExcAC6A.vfelim' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.vfelim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.vfelim'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.vfelim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.vfelim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.vfelim'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.vfelim'
                                                 );
        }
        if ('cim:ExcAC6A.vhmax' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.vhmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.vhmax'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.vhmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.vhmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.vhmax'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.vhmax'
                                                 );
        }
        if ('cim:ExcAC6A.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.kc'
                                                 );
        }
        if ('cim:ExcAC6A.kd' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.kd'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.kd'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.kd'
                                                 );
        }
        if ('cim:ExcAC6A.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.ke'
                                                 );
        }
        if ('cim:ExcAC6A.ve1' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.ve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.ve1'
                                                 );
        }
        if ('cim:ExcAC6A.seve1' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC6A.seve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC6A.seve1'
                                                 );
        }
        if ('cim:ExcAC6A.ve2' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.ve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcAC6A.ve2'
                                                 );
        }
        if ('cim:ExcAC6A.seve2' in object) {
            attributeEntries['filledEntries']['cim:ExcAC6A.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC6A.seve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC6A.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC6A.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC6A.seve2'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						'ks': [CGMESProfile.shortNames.DY, ],
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
            "cim:ExcAC6A.ka",
            "cim:ExcAC6A.ks",
            "cim:ExcAC6A.ta",
            "cim:ExcAC6A.tk",
            "cim:ExcAC6A.tb",
            "cim:ExcAC6A.tc",
            "cim:ExcAC6A.vamax",
            "cim:ExcAC6A.vamin",
            "cim:ExcAC6A.vrmax",
            "cim:ExcAC6A.vrmin",
            "cim:ExcAC6A.te",
            "cim:ExcAC6A.kh",
            "cim:ExcAC6A.tj",
            "cim:ExcAC6A.th",
            "cim:ExcAC6A.vfelim",
            "cim:ExcAC6A.vhmax",
            "cim:ExcAC6A.kc",
            "cim:ExcAC6A.kd",
            "cim:ExcAC6A.ke",
            "cim:ExcAC6A.ve1",
            "cim:ExcAC6A.seve1",
            "cim:ExcAC6A.ve2",
            "cim:ExcAC6A.seve2",
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
            if (!ExcAC6A.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcAC6A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcAC6A.attributeHTML(object, cimmenu);
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
export default ExcAC6A
