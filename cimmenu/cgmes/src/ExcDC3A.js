import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcDC3A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcDC3A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcDC3A.trh' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A.trh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.trh'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC3A.trh'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A.trh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.trh'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC3A.trh'
                                                 );
        }
        if ('cim:ExcDC3A.ks' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.ks'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.ks'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.ks'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.ks'
                                                 );
        }
        if ('cim:ExcDC3A.kr' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A.kr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.kr'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.kr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A.kr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.kr'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.kr'
                                                 );
        }
        if ('cim:ExcDC3A.kv' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A.kv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.kv'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.kv'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A.kv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.kv'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.kv'
                                                 );
        }
        if ('cim:ExcDC3A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.vrmax'
                                                 );
        }
        if ('cim:ExcDC3A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.vrmin'
                                                 );
        }
        if ('cim:ExcDC3A.te' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC3A.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC3A.te'
                                                 );
        }
        if ('cim:ExcDC3A.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.ke'
                                                 );
        }
        if ('cim:ExcDC3A.efd1' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.efd1'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.efd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.efd1'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.efd1'
                                                 );
        }
        if ('cim:ExcDC3A.seefd1' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A.seefd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.seefd1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcDC3A.seefd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A.seefd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.seefd1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcDC3A.seefd1'
                                                 );
        }
        if ('cim:ExcDC3A.efd2' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.efd2'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.efd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.efd2'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.efd2'
                                                 );
        }
        if ('cim:ExcDC3A.seefd2' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A.seefd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.seefd2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcDC3A.seefd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A.seefd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.seefd2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcDC3A.seefd2'
                                                 );
        }
        if ('cim:ExcDC3A.exclim' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A.exclim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.exclim'],
                                                   'cim:Boolean',
                                                   'cim:ExcDC3A.exclim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A.exclim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.exclim'],
                                                   'cim:Boolean',
                                                   'cim:ExcDC3A.exclim'
                                                 );
        }
        if ('cim:ExcDC3A.edfmax' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A.edfmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.edfmax'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.edfmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A.edfmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.edfmax'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.edfmax'
                                                 );
        }
        if ('cim:ExcDC3A.efdmin' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A.efdmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.efdmin'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.efdmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A.efdmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.efdmin'],
                                                   'cim:PU',
                                                   'cim:ExcDC3A.efdmin'
                                                 );
        }
        if ('cim:ExcDC3A.efdlim' in object) {
            attributeEntries['filledEntries']['cim:ExcDC3A.efdlim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.efdlim'],
                                                   'cim:Boolean',
                                                   'cim:ExcDC3A.efdlim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC3A.efdlim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC3A.efdlim'],
                                                   'cim:Boolean',
                                                   'cim:ExcDC3A.efdlim'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'trh': [CGMESProfile.shortNames.DY, ],
						'ks': [CGMESProfile.shortNames.DY, ],
						'kr': [CGMESProfile.shortNames.DY, ],
						'kv': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						'te': [CGMESProfile.shortNames.DY, ],
						'ke': [CGMESProfile.shortNames.DY, ],
						'efd1': [CGMESProfile.shortNames.DY, ],
						'seefd1': [CGMESProfile.shortNames.DY, ],
						'efd2': [CGMESProfile.shortNames.DY, ],
						'seefd2': [CGMESProfile.shortNames.DY, ],
						'exclim': [CGMESProfile.shortNames.DY, ],
						'edfmax': [CGMESProfile.shortNames.DY, ],
						'efdmin': [CGMESProfile.shortNames.DY, ],
						'efdlim': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcDC3A.trh",
            "cim:ExcDC3A.ks",
            "cim:ExcDC3A.kr",
            "cim:ExcDC3A.kv",
            "cim:ExcDC3A.vrmax",
            "cim:ExcDC3A.vrmin",
            "cim:ExcDC3A.te",
            "cim:ExcDC3A.ke",
            "cim:ExcDC3A.efd1",
            "cim:ExcDC3A.seefd1",
            "cim:ExcDC3A.efd2",
            "cim:ExcDC3A.seefd2",
            "cim:ExcDC3A.exclim",
            "cim:ExcDC3A.edfmax",
            "cim:ExcDC3A.efdmin",
            "cim:ExcDC3A.efdlim",
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
            if (!ExcDC3A.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcDC3A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcDC3A.attributeHTML(object, cimmenu);
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
export default ExcDC3A
