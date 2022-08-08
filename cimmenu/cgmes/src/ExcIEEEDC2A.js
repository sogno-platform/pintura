import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcIEEEDC2A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcIEEEDC2A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcIEEEDC2A.efd1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC2A.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.efd1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC2A.efd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC2A.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.efd1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC2A.efd1'
                                                 );
        }
        if ('cim:ExcIEEEDC2A.efd2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC2A.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.efd2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC2A.efd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC2A.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.efd2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC2A.efd2'
                                                 );
        }
        if ('cim:ExcIEEEDC2A.exclim' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC2A.exclim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.exclim'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC2A.exclim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC2A.exclim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.exclim'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC2A.exclim'
                                                 );
        }
        if ('cim:ExcIEEEDC2A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC2A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC2A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC2A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC2A.ka'
                                                 );
        }
        if ('cim:ExcIEEEDC2A.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC2A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC2A.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC2A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC2A.ke'
                                                 );
        }
        if ('cim:ExcIEEEDC2A.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC2A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC2A.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC2A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC2A.kf'
                                                 );
        }
        if ('cim:ExcIEEEDC2A.seefd1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC2A.seefd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.seefd1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEDC2A.seefd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC2A.seefd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.seefd1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEDC2A.seefd1'
                                                 );
        }
        if ('cim:ExcIEEEDC2A.seefd2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC2A.seefd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.seefd2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEDC2A.seefd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC2A.seefd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.seefd2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEDC2A.seefd2'
                                                 );
        }
        if ('cim:ExcIEEEDC2A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC2A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC2A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC2A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC2A.ta'
                                                 );
        }
        if ('cim:ExcIEEEDC2A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC2A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC2A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC2A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC2A.tb'
                                                 );
        }
        if ('cim:ExcIEEEDC2A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC2A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC2A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC2A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC2A.tc'
                                                 );
        }
        if ('cim:ExcIEEEDC2A.te' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC2A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC2A.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC2A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC2A.te'
                                                 );
        }
        if ('cim:ExcIEEEDC2A.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC2A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC2A.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC2A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC2A.tf'
                                                 );
        }
        if ('cim:ExcIEEEDC2A.uelin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC2A.uelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.uelin'],
                                                   'cim:Boolean',
                                                   'cim:ExcIEEEDC2A.uelin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC2A.uelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.uelin'],
                                                   'cim:Boolean',
                                                   'cim:ExcIEEEDC2A.uelin'
                                                 );
        }
        if ('cim:ExcIEEEDC2A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC2A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC2A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC2A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC2A.vrmax'
                                                 );
        }
        if ('cim:ExcIEEEDC2A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC2A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC2A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC2A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC2A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC2A.vrmin'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'efd1': [CGMESProfile.shortNames.DY, ],
						'efd2': [CGMESProfile.shortNames.DY, ],
						'exclim': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						'ke': [CGMESProfile.shortNames.DY, ],
						'kf': [CGMESProfile.shortNames.DY, ],
						'seefd1': [CGMESProfile.shortNames.DY, ],
						'seefd2': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'tb': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						'te': [CGMESProfile.shortNames.DY, ],
						'tf': [CGMESProfile.shortNames.DY, ],
						'uelin': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcIEEEDC2A.efd1",
            "cim:ExcIEEEDC2A.efd2",
            "cim:ExcIEEEDC2A.exclim",
            "cim:ExcIEEEDC2A.ka",
            "cim:ExcIEEEDC2A.ke",
            "cim:ExcIEEEDC2A.kf",
            "cim:ExcIEEEDC2A.seefd1",
            "cim:ExcIEEEDC2A.seefd2",
            "cim:ExcIEEEDC2A.ta",
            "cim:ExcIEEEDC2A.tb",
            "cim:ExcIEEEDC2A.tc",
            "cim:ExcIEEEDC2A.te",
            "cim:ExcIEEEDC2A.tf",
            "cim:ExcIEEEDC2A.uelin",
            "cim:ExcIEEEDC2A.vrmax",
            "cim:ExcIEEEDC2A.vrmin",
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
            if (!ExcIEEEDC2A.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcIEEEDC2A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcIEEEDC2A.attributeHTML(object, cimmenu);
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
export default ExcIEEEDC2A
