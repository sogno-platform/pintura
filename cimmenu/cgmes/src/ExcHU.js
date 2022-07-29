import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcHU extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcHU") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcHU.tr' in object) {
            attributeEntries['filledEntries']['cim:ExcHU.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.tr'],
                                                   'cim:Seconds',
                                                   'cim:ExcHU.tr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcHU.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.tr'],
                                                   'cim:Seconds',
                                                   'cim:ExcHU.tr'
                                                 );
        }
        if ('cim:ExcHU.te' in object) {
            attributeEntries['filledEntries']['cim:ExcHU.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcHU.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcHU.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcHU.te'
                                                 );
        }
        if ('cim:ExcHU.imin' in object) {
            attributeEntries['filledEntries']['cim:ExcHU.imin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.imin'],
                                                   'cim:PU',
                                                   'cim:ExcHU.imin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcHU.imin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.imin'],
                                                   'cim:PU',
                                                   'cim:ExcHU.imin'
                                                 );
        }
        if ('cim:ExcHU.imax' in object) {
            attributeEntries['filledEntries']['cim:ExcHU.imax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.imax'],
                                                   'cim:PU',
                                                   'cim:ExcHU.imax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcHU.imax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.imax'],
                                                   'cim:PU',
                                                   'cim:ExcHU.imax'
                                                 );
        }
        if ('cim:ExcHU.ae' in object) {
            attributeEntries['filledEntries']['cim:ExcHU.ae'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.ae'],
                                                   'cim:PU',
                                                   'cim:ExcHU.ae'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcHU.ae'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.ae'],
                                                   'cim:PU',
                                                   'cim:ExcHU.ae'
                                                 );
        }
        if ('cim:ExcHU.emin' in object) {
            attributeEntries['filledEntries']['cim:ExcHU.emin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.emin'],
                                                   'cim:PU',
                                                   'cim:ExcHU.emin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcHU.emin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.emin'],
                                                   'cim:PU',
                                                   'cim:ExcHU.emin'
                                                 );
        }
        if ('cim:ExcHU.emax' in object) {
            attributeEntries['filledEntries']['cim:ExcHU.emax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.emax'],
                                                   'cim:PU',
                                                   'cim:ExcHU.emax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcHU.emax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.emax'],
                                                   'cim:PU',
                                                   'cim:ExcHU.emax'
                                                 );
        }
        if ('cim:ExcHU.ki' in object) {
            attributeEntries['filledEntries']['cim:ExcHU.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.ki'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcHU.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcHU.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.ki'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcHU.ki'
                                                 );
        }
        if ('cim:ExcHU.ai' in object) {
            attributeEntries['filledEntries']['cim:ExcHU.ai'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.ai'],
                                                   'cim:PU',
                                                   'cim:ExcHU.ai'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcHU.ai'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.ai'],
                                                   'cim:PU',
                                                   'cim:ExcHU.ai'
                                                 );
        }
        if ('cim:ExcHU.ti' in object) {
            attributeEntries['filledEntries']['cim:ExcHU.ti'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.ti'],
                                                   'cim:Seconds',
                                                   'cim:ExcHU.ti'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcHU.ti'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.ti'],
                                                   'cim:Seconds',
                                                   'cim:ExcHU.ti'
                                                 );
        }
        if ('cim:ExcHU.atr' in object) {
            attributeEntries['filledEntries']['cim:ExcHU.atr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.atr'],
                                                   'cim:PU',
                                                   'cim:ExcHU.atr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcHU.atr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.atr'],
                                                   'cim:PU',
                                                   'cim:ExcHU.atr'
                                                 );
        }
        if ('cim:ExcHU.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcHU.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.ke'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcHU.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcHU.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcHU.ke'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcHU.ke'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'tr': [CGMESProfile.shortNames.DY, ],
						'te': [CGMESProfile.shortNames.DY, ],
						'imin': [CGMESProfile.shortNames.DY, ],
						'imax': [CGMESProfile.shortNames.DY, ],
						'ae': [CGMESProfile.shortNames.DY, ],
						'emin': [CGMESProfile.shortNames.DY, ],
						'emax': [CGMESProfile.shortNames.DY, ],
						'ki': [CGMESProfile.shortNames.DY, ],
						'ai': [CGMESProfile.shortNames.DY, ],
						'ti': [CGMESProfile.shortNames.DY, ],
						'atr': [CGMESProfile.shortNames.DY, ],
						'ke': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcHU.tr",
            "cim:ExcHU.te",
            "cim:ExcHU.imin",
            "cim:ExcHU.imax",
            "cim:ExcHU.ae",
            "cim:ExcHU.emin",
            "cim:ExcHU.emax",
            "cim:ExcHU.ki",
            "cim:ExcHU.ai",
            "cim:ExcHU.ti",
            "cim:ExcHU.atr",
            "cim:ExcHU.ke",
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
            if (!ExcHU.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcHU: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcHU.attributeHTML(object, cimmenu);
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
export default ExcHU
