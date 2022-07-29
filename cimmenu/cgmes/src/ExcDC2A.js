import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcDC2A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcDC2A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcDC2A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcDC2A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcDC2A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC2A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcDC2A.ka'
                                                 );
        }
        if ('cim:ExcDC2A.ks' in object) {
            attributeEntries['filledEntries']['cim:ExcDC2A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.ks'],
                                                   'cim:PU',
                                                   'cim:ExcDC2A.ks'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC2A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.ks'],
                                                   'cim:PU',
                                                   'cim:ExcDC2A.ks'
                                                 );
        }
        if ('cim:ExcDC2A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcDC2A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC2A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC2A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC2A.ta'
                                                 );
        }
        if ('cim:ExcDC2A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcDC2A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC2A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC2A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC2A.tb'
                                                 );
        }
        if ('cim:ExcDC2A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcDC2A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC2A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC2A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC2A.tc'
                                                 );
        }
        if ('cim:ExcDC2A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcDC2A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcDC2A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC2A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcDC2A.vrmax'
                                                 );
        }
        if ('cim:ExcDC2A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcDC2A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcDC2A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC2A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcDC2A.vrmin'
                                                 );
        }
        if ('cim:ExcDC2A.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcDC2A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcDC2A.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC2A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcDC2A.ke'
                                                 );
        }
        if ('cim:ExcDC2A.te' in object) {
            attributeEntries['filledEntries']['cim:ExcDC2A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC2A.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC2A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC2A.te'
                                                 );
        }
        if ('cim:ExcDC2A.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcDC2A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcDC2A.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC2A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcDC2A.kf'
                                                 );
        }
        if ('cim:ExcDC2A.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcDC2A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC2A.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC2A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC2A.tf'
                                                 );
        }
        if ('cim:ExcDC2A.tf1' in object) {
            attributeEntries['filledEntries']['cim:ExcDC2A.tf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.tf1'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC2A.tf1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC2A.tf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.tf1'],
                                                   'cim:Seconds',
                                                   'cim:ExcDC2A.tf1'
                                                 );
        }
        if ('cim:ExcDC2A.efd1' in object) {
            attributeEntries['filledEntries']['cim:ExcDC2A.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.efd1'],
                                                   'cim:PU',
                                                   'cim:ExcDC2A.efd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC2A.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.efd1'],
                                                   'cim:PU',
                                                   'cim:ExcDC2A.efd1'
                                                 );
        }
        if ('cim:ExcDC2A.seefd1' in object) {
            attributeEntries['filledEntries']['cim:ExcDC2A.seefd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.seefd1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcDC2A.seefd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC2A.seefd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.seefd1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcDC2A.seefd1'
                                                 );
        }
        if ('cim:ExcDC2A.efd2' in object) {
            attributeEntries['filledEntries']['cim:ExcDC2A.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.efd2'],
                                                   'cim:PU',
                                                   'cim:ExcDC2A.efd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC2A.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.efd2'],
                                                   'cim:PU',
                                                   'cim:ExcDC2A.efd2'
                                                 );
        }
        if ('cim:ExcDC2A.seefd2' in object) {
            attributeEntries['filledEntries']['cim:ExcDC2A.seefd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.seefd2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcDC2A.seefd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC2A.seefd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.seefd2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcDC2A.seefd2'
                                                 );
        }
        if ('cim:ExcDC2A.exclim' in object) {
            attributeEntries['filledEntries']['cim:ExcDC2A.exclim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.exclim'],
                                                   'cim:Boolean',
                                                   'cim:ExcDC2A.exclim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC2A.exclim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.exclim'],
                                                   'cim:Boolean',
                                                   'cim:ExcDC2A.exclim'
                                                 );
        }
        if ('cim:ExcDC2A.vtlim' in object) {
            attributeEntries['filledEntries']['cim:ExcDC2A.vtlim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.vtlim'],
                                                   'cim:Boolean',
                                                   'cim:ExcDC2A.vtlim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcDC2A.vtlim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcDC2A.vtlim'],
                                                   'cim:Boolean',
                                                   'cim:ExcDC2A.vtlim'
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
						'tf1': [CGMESProfile.shortNames.DY, ],
						'efd1': [CGMESProfile.shortNames.DY, ],
						'seefd1': [CGMESProfile.shortNames.DY, ],
						'efd2': [CGMESProfile.shortNames.DY, ],
						'seefd2': [CGMESProfile.shortNames.DY, ],
						'exclim': [CGMESProfile.shortNames.DY, ],
						'vtlim': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcDC2A.ka",
            "cim:ExcDC2A.ks",
            "cim:ExcDC2A.ta",
            "cim:ExcDC2A.tb",
            "cim:ExcDC2A.tc",
            "cim:ExcDC2A.vrmax",
            "cim:ExcDC2A.vrmin",
            "cim:ExcDC2A.ke",
            "cim:ExcDC2A.te",
            "cim:ExcDC2A.kf",
            "cim:ExcDC2A.tf",
            "cim:ExcDC2A.tf1",
            "cim:ExcDC2A.efd1",
            "cim:ExcDC2A.seefd1",
            "cim:ExcDC2A.efd2",
            "cim:ExcDC2A.seefd2",
            "cim:ExcDC2A.exclim",
            "cim:ExcDC2A.vtlim",
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
            if (!ExcDC2A.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcDC2A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcDC2A.attributeHTML(object, cimmenu);
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
export default ExcDC2A
