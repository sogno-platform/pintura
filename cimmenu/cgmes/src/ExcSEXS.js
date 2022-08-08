import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcSEXS extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcSEXS") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcSEXS.tatb' in object) {
            attributeEntries['filledEntries']['cim:ExcSEXS.tatb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.tatb'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcSEXS.tatb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSEXS.tatb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.tatb'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcSEXS.tatb'
                                                 );
        }
        if ('cim:ExcSEXS.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcSEXS.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcSEXS.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSEXS.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcSEXS.tb'
                                                 );
        }
        if ('cim:ExcSEXS.k' in object) {
            attributeEntries['filledEntries']['cim:ExcSEXS.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.k'],
                                                   'cim:PU',
                                                   'cim:ExcSEXS.k'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSEXS.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.k'],
                                                   'cim:PU',
                                                   'cim:ExcSEXS.k'
                                                 );
        }
        if ('cim:ExcSEXS.te' in object) {
            attributeEntries['filledEntries']['cim:ExcSEXS.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcSEXS.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSEXS.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcSEXS.te'
                                                 );
        }
        if ('cim:ExcSEXS.emin' in object) {
            attributeEntries['filledEntries']['cim:ExcSEXS.emin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.emin'],
                                                   'cim:PU',
                                                   'cim:ExcSEXS.emin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSEXS.emin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.emin'],
                                                   'cim:PU',
                                                   'cim:ExcSEXS.emin'
                                                 );
        }
        if ('cim:ExcSEXS.emax' in object) {
            attributeEntries['filledEntries']['cim:ExcSEXS.emax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.emax'],
                                                   'cim:PU',
                                                   'cim:ExcSEXS.emax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSEXS.emax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.emax'],
                                                   'cim:PU',
                                                   'cim:ExcSEXS.emax'
                                                 );
        }
        if ('cim:ExcSEXS.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcSEXS.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.kc'],
                                                   'cim:PU',
                                                   'cim:ExcSEXS.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSEXS.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.kc'],
                                                   'cim:PU',
                                                   'cim:ExcSEXS.kc'
                                                 );
        }
        if ('cim:ExcSEXS.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcSEXS.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcSEXS.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSEXS.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcSEXS.tc'
                                                 );
        }
        if ('cim:ExcSEXS.efdmin' in object) {
            attributeEntries['filledEntries']['cim:ExcSEXS.efdmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.efdmin'],
                                                   'cim:PU',
                                                   'cim:ExcSEXS.efdmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSEXS.efdmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.efdmin'],
                                                   'cim:PU',
                                                   'cim:ExcSEXS.efdmin'
                                                 );
        }
        if ('cim:ExcSEXS.efdmax' in object) {
            attributeEntries['filledEntries']['cim:ExcSEXS.efdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.efdmax'],
                                                   'cim:PU',
                                                   'cim:ExcSEXS.efdmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSEXS.efdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSEXS.efdmax'],
                                                   'cim:PU',
                                                   'cim:ExcSEXS.efdmax'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'tatb': [CGMESProfile.shortNames.DY, ],
						'tb': [CGMESProfile.shortNames.DY, ],
						'k': [CGMESProfile.shortNames.DY, ],
						'te': [CGMESProfile.shortNames.DY, ],
						'emin': [CGMESProfile.shortNames.DY, ],
						'emax': [CGMESProfile.shortNames.DY, ],
						'kc': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						'efdmin': [CGMESProfile.shortNames.DY, ],
						'efdmax': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcSEXS.tatb",
            "cim:ExcSEXS.tb",
            "cim:ExcSEXS.k",
            "cim:ExcSEXS.te",
            "cim:ExcSEXS.emin",
            "cim:ExcSEXS.emax",
            "cim:ExcSEXS.kc",
            "cim:ExcSEXS.tc",
            "cim:ExcSEXS.efdmin",
            "cim:ExcSEXS.efdmax",
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
            if (!ExcSEXS.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcSEXS: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcSEXS.attributeHTML(object, cimmenu);
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
export default ExcSEXS
