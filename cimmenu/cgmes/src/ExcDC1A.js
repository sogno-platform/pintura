import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcDC1A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcDC1A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcDC1A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcDC1A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC1A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.ka'
                                                 );
        }
        if ('cim:ExcDC1A.ks' in object) {
            attributeEntries['filledEntries']['cim:ExcDC1A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.ks'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.ks'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC1A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.ks'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.ks'
                                                 );
        }
        if ('cim:ExcDC1A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcDC1A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC1A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC1A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC1A.ta'
                                                 );
        }
        if ('cim:ExcDC1A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcDC1A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC1A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC1A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC1A.tb'
                                                 );
        }
        if ('cim:ExcDC1A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcDC1A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC1A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC1A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC1A.tc'
                                                 );
        }
        if ('cim:ExcDC1A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcDC1A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC1A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.vrmax'
                                                 );
        }
        if ('cim:ExcDC1A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcDC1A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC1A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.vrmin'
                                                 );
        }
        if ('cim:ExcDC1A.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcDC1A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC1A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.ke'
                                                 );
        }
        if ('cim:ExcDC1A.te' in object) {
            attributeEntries['filledEntries']['cim:ExcDC1A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC1A.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC1A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC1A.te'
                                                 );
        }
        if ('cim:ExcDC1A.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcDC1A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC1A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.kf'
                                                 );
        }
        if ('cim:ExcDC1A.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcDC1A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC1A.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC1A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC1A.tf'
                                                 );
        }
        if ('cim:ExcDC1A.efd1' in object) {
            attributeEntries['filledEntries']['cim:ExcDC1A.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.efd1'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.efd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC1A.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.efd1'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.efd1'
                                                 );
        }
        if ('cim:ExcDC1A.seefd1' in object) {
            attributeEntries['filledEntries']['cim:ExcDC1A.seefd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.seefd1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcDC1A.seefd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC1A.seefd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.seefd1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcDC1A.seefd1'
                                                 );
        }
        if ('cim:ExcDC1A.efd2' in object) {
            attributeEntries['filledEntries']['cim:ExcDC1A.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.efd2'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.efd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC1A.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.efd2'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.efd2'
                                                 );
        }
        if ('cim:ExcDC1A.seefd2' in object) {
            attributeEntries['filledEntries']['cim:ExcDC1A.seefd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.seefd2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcDC1A.seefd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC1A.seefd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.seefd2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcDC1A.seefd2'
                                                 );
        }
        if ('cim:ExcDC1A.exclim' in object) {
            attributeEntries['filledEntries']['cim:ExcDC1A.exclim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.exclim'],
                                                   'cim:Boolean',
                                                   'cim:ExcDC1A.exclim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC1A.exclim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.exclim'],
                                                   'cim:Boolean',
                                                   'cim:ExcDC1A.exclim'
                                                 );
        }
        if ('cim:ExcDC1A.efdmin' in object) {
            attributeEntries['filledEntries']['cim:ExcDC1A.efdmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.efdmin'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.efdmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC1A.efdmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.efdmin'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.efdmin'
                                                 );
        }
        if ('cim:ExcDC1A.edfmax' in object) {
            attributeEntries['filledEntries']['cim:ExcDC1A.edfmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.edfmax'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.edfmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC1A.edfmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC1A.edfmax'],
                                                   'cim:PU',
                                                   'cim:ExcDC1A.edfmax'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						'ks': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'tb': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
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
						'exclim': [CGMESProfile.shortNames.DY, ],
						'efdmin': [CGMESProfile.shortNames.DY, ],
						'edfmax': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcDC1A.ka",
            "cim:ExcDC1A.ks",
            "cim:ExcDC1A.ta",
            "cim:ExcDC1A.tb",
            "cim:ExcDC1A.tc",
            "cim:ExcDC1A.vrmax",
            "cim:ExcDC1A.vrmin",
            "cim:ExcDC1A.ke",
            "cim:ExcDC1A.te",
            "cim:ExcDC1A.kf",
            "cim:ExcDC1A.tf",
            "cim:ExcDC1A.efd1",
            "cim:ExcDC1A.seefd1",
            "cim:ExcDC1A.efd2",
            "cim:ExcDC1A.seefd2",
            "cim:ExcDC1A.exclim",
            "cim:ExcDC1A.efdmin",
            "cim:ExcDC1A.edfmax",
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
            if (!ExcDC1A.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcDC1A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcDC1A.attributeHTML(object, cimmenu);
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
export default ExcDC1A
