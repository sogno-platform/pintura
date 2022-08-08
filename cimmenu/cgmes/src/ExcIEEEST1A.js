import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcIEEEST1A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcIEEEST1A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcIEEEST1A.ilr' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST1A.ilr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.ilr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.ilr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST1A.ilr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.ilr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.ilr'
                                                 );
        }
        if ('cim:ExcIEEEST1A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST1A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST1A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.ka'
                                                 );
        }
        if ('cim:ExcIEEEST1A.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST1A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST1A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.kc'
                                                 );
        }
        if ('cim:ExcIEEEST1A.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST1A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST1A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.kf'
                                                 );
        }
        if ('cim:ExcIEEEST1A.klr' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST1A.klr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.klr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.klr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST1A.klr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.klr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.klr'
                                                 );
        }
        if ('cim:ExcIEEEST1A.pssin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST1A.pssin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.pssin'],
                                                   'cim:Boolean',
                                                   'cim:ExcIEEEST1A.pssin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST1A.pssin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.pssin'],
                                                   'cim:Boolean',
                                                   'cim:ExcIEEEST1A.pssin'
                                                 );
        }
        if ('cim:ExcIEEEST1A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST1A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST1A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST1A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST1A.ta'
                                                 );
        }
        if ('cim:ExcIEEEST1A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST1A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST1A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST1A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST1A.tb'
                                                 );
        }
        if ('cim:ExcIEEEST1A.tb1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST1A.tb1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.tb1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST1A.tb1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST1A.tb1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.tb1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST1A.tb1'
                                                 );
        }
        if ('cim:ExcIEEEST1A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST1A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST1A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST1A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST1A.tc'
                                                 );
        }
        if ('cim:ExcIEEEST1A.tc1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST1A.tc1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.tc1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST1A.tc1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST1A.tc1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.tc1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST1A.tc1'
                                                 );
        }
        if ('cim:ExcIEEEST1A.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST1A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST1A.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST1A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST1A.tf'
                                                 );
        }
        if ('cim:ExcIEEEST1A.uelin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST1A.uelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.uelin'],
                                                   'cim:ExcIEEEST1AUELselectorKind',
                                                   'cim:ExcIEEEST1A.uelin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST1A.uelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.uelin'],
                                                   'cim:ExcIEEEST1AUELselectorKind',
                                                   'cim:ExcIEEEST1A.uelin'
                                                 );
        }
        if ('cim:ExcIEEEST1A.vamax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST1A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.vamax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST1A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.vamax'
                                                 );
        }
        if ('cim:ExcIEEEST1A.vamin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST1A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.vamin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST1A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.vamin'
                                                 );
        }
        if ('cim:ExcIEEEST1A.vimax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST1A.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.vimax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.vimax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST1A.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.vimax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.vimax'
                                                 );
        }
        if ('cim:ExcIEEEST1A.vimin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST1A.vimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.vimin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.vimin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST1A.vimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.vimin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.vimin'
                                                 );
        }
        if ('cim:ExcIEEEST1A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST1A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST1A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.vrmax'
                                                 );
        }
        if ('cim:ExcIEEEST1A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST1A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST1A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST1A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST1A.vrmin'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ilr': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						'kc': [CGMESProfile.shortNames.DY, ],
						'kf': [CGMESProfile.shortNames.DY, ],
						'klr': [CGMESProfile.shortNames.DY, ],
						'pssin': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'tb': [CGMESProfile.shortNames.DY, ],
						'tb1': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						'tc1': [CGMESProfile.shortNames.DY, ],
						'tf': [CGMESProfile.shortNames.DY, ],
						'uelin': [CGMESProfile.shortNames.DY, ],
						'vamax': [CGMESProfile.shortNames.DY, ],
						'vamin': [CGMESProfile.shortNames.DY, ],
						'vimax': [CGMESProfile.shortNames.DY, ],
						'vimin': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcIEEEST1A.ilr",
            "cim:ExcIEEEST1A.ka",
            "cim:ExcIEEEST1A.kc",
            "cim:ExcIEEEST1A.kf",
            "cim:ExcIEEEST1A.klr",
            "cim:ExcIEEEST1A.pssin",
            "cim:ExcIEEEST1A.ta",
            "cim:ExcIEEEST1A.tb",
            "cim:ExcIEEEST1A.tb1",
            "cim:ExcIEEEST1A.tc",
            "cim:ExcIEEEST1A.tc1",
            "cim:ExcIEEEST1A.tf",
            "cim:ExcIEEEST1A.uelin",
            "cim:ExcIEEEST1A.vamax",
            "cim:ExcIEEEST1A.vamin",
            "cim:ExcIEEEST1A.vimax",
            "cim:ExcIEEEST1A.vimin",
            "cim:ExcIEEEST1A.vrmax",
            "cim:ExcIEEEST1A.vrmin",
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
            if (!ExcIEEEST1A.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcIEEEST1A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcIEEEST1A.attributeHTML(object, cimmenu);
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
export default ExcIEEEST1A
