import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcIEEEDC3A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcIEEEDC3A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcIEEEDC3A.trh' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC3A.trh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.trh'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC3A.trh'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC3A.trh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.trh'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC3A.trh'
                                                 );
        }
        if ('cim:ExcIEEEDC3A.kv' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC3A.kv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.kv'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC3A.kv'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC3A.kv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.kv'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC3A.kv'
                                                 );
        }
        if ('cim:ExcIEEEDC3A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC3A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC3A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC3A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC3A.vrmax'
                                                 );
        }
        if ('cim:ExcIEEEDC3A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC3A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC3A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC3A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC3A.vrmin'
                                                 );
        }
        if ('cim:ExcIEEEDC3A.te' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC3A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC3A.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC3A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC3A.te'
                                                 );
        }
        if ('cim:ExcIEEEDC3A.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC3A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC3A.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC3A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC3A.ke'
                                                 );
        }
        if ('cim:ExcIEEEDC3A.efd1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC3A.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.efd1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC3A.efd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC3A.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.efd1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC3A.efd1'
                                                 );
        }
        if ('cim:ExcIEEEDC3A.seefd1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC3A.seefd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.seefd1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEDC3A.seefd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC3A.seefd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.seefd1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEDC3A.seefd1'
                                                 );
        }
        if ('cim:ExcIEEEDC3A.efd2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC3A.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.efd2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC3A.efd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC3A.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.efd2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC3A.efd2'
                                                 );
        }
        if ('cim:ExcIEEEDC3A.seefd2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC3A.seefd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.seefd2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEDC3A.seefd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC3A.seefd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.seefd2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEDC3A.seefd2'
                                                 );
        }
        if ('cim:ExcIEEEDC3A.exclim' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC3A.exclim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.exclim'],
                                                   'cim:Boolean',
                                                   'cim:ExcIEEEDC3A.exclim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC3A.exclim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC3A.exclim'],
                                                   'cim:Boolean',
                                                   'cim:ExcIEEEDC3A.exclim'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'trh': [CGMESProfile.shortNames.DY, ],
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
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcIEEEDC3A.trh",
            "cim:ExcIEEEDC3A.kv",
            "cim:ExcIEEEDC3A.vrmax",
            "cim:ExcIEEEDC3A.vrmin",
            "cim:ExcIEEEDC3A.te",
            "cim:ExcIEEEDC3A.ke",
            "cim:ExcIEEEDC3A.efd1",
            "cim:ExcIEEEDC3A.seefd1",
            "cim:ExcIEEEDC3A.efd2",
            "cim:ExcIEEEDC3A.seefd2",
            "cim:ExcIEEEDC3A.exclim",
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
            if (!ExcIEEEDC3A.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcIEEEDC3A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcIEEEDC3A.attributeHTML(object, cimmenu);
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
export default ExcIEEEDC3A
