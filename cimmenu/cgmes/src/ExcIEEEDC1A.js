import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcIEEEDC1A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcIEEEDC1A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcIEEEDC1A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC1A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC1A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC1A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC1A.ka'
                                                 );
        }
        if ('cim:ExcIEEEDC1A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC1A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC1A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC1A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC1A.ta'
                                                 );
        }
        if ('cim:ExcIEEEDC1A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC1A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC1A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC1A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC1A.tb'
                                                 );
        }
        if ('cim:ExcIEEEDC1A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC1A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC1A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC1A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC1A.tc'
                                                 );
        }
        if ('cim:ExcIEEEDC1A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC1A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC1A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC1A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC1A.vrmax'
                                                 );
        }
        if ('cim:ExcIEEEDC1A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC1A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC1A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC1A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC1A.vrmin'
                                                 );
        }
        if ('cim:ExcIEEEDC1A.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC1A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC1A.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC1A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC1A.ke'
                                                 );
        }
        if ('cim:ExcIEEEDC1A.te' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC1A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC1A.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC1A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC1A.te'
                                                 );
        }
        if ('cim:ExcIEEEDC1A.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC1A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC1A.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC1A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC1A.kf'
                                                 );
        }
        if ('cim:ExcIEEEDC1A.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC1A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC1A.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC1A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEDC1A.tf'
                                                 );
        }
        if ('cim:ExcIEEEDC1A.efd1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC1A.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.efd1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC1A.efd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC1A.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.efd1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC1A.efd1'
                                                 );
        }
        if ('cim:ExcIEEEDC1A.seefd1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC1A.seefd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.seefd1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEDC1A.seefd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC1A.seefd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.seefd1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEDC1A.seefd1'
                                                 );
        }
        if ('cim:ExcIEEEDC1A.efd2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC1A.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.efd2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC1A.efd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC1A.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.efd2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEDC1A.efd2'
                                                 );
        }
        if ('cim:ExcIEEEDC1A.seefd2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC1A.seefd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.seefd2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEDC1A.seefd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC1A.seefd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.seefd2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEDC1A.seefd2'
                                                 );
        }
        if ('cim:ExcIEEEDC1A.uelin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC1A.uelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.uelin'],
                                                   'cim:Boolean',
                                                   'cim:ExcIEEEDC1A.uelin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC1A.uelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.uelin'],
                                                   'cim:Boolean',
                                                   'cim:ExcIEEEDC1A.uelin'
                                                 );
        }
        if ('cim:ExcIEEEDC1A.exclim' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEDC1A.exclim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.exclim'],
                                                   'cim:Boolean',
                                                   'cim:ExcIEEEDC1A.exclim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEDC1A.exclim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEDC1A.exclim'],
                                                   'cim:Boolean',
                                                   'cim:ExcIEEEDC1A.exclim'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
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
						'uelin': [CGMESProfile.shortNames.DY, ],
						'exclim': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcIEEEDC1A.ka",
            "cim:ExcIEEEDC1A.ta",
            "cim:ExcIEEEDC1A.tb",
            "cim:ExcIEEEDC1A.tc",
            "cim:ExcIEEEDC1A.vrmax",
            "cim:ExcIEEEDC1A.vrmin",
            "cim:ExcIEEEDC1A.ke",
            "cim:ExcIEEEDC1A.te",
            "cim:ExcIEEEDC1A.kf",
            "cim:ExcIEEEDC1A.tf",
            "cim:ExcIEEEDC1A.efd1",
            "cim:ExcIEEEDC1A.seefd1",
            "cim:ExcIEEEDC1A.efd2",
            "cim:ExcIEEEDC1A.seefd2",
            "cim:ExcIEEEDC1A.uelin",
            "cim:ExcIEEEDC1A.exclim",
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
            if (!ExcIEEEDC1A.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcIEEEDC1A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcIEEEDC1A.attributeHTML(object, cimmenu);
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
export default ExcIEEEDC1A
