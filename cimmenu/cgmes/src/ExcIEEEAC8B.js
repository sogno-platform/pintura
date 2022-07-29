import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcIEEEAC8B extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcIEEEAC8B") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcIEEEAC8B.kpr' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC8B.kpr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.kpr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.kpr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC8B.kpr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.kpr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.kpr'
                                                 );
        }
        if ('cim:ExcIEEEAC8B.kir' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC8B.kir'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.kir'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.kir'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC8B.kir'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.kir'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.kir'
                                                 );
        }
        if ('cim:ExcIEEEAC8B.kdr' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC8B.kdr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.kdr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.kdr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC8B.kdr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.kdr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.kdr'
                                                 );
        }
        if ('cim:ExcIEEEAC8B.tdr' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC8B.tdr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.tdr'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC8B.tdr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC8B.tdr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.tdr'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC8B.tdr'
                                                 );
        }
        if ('cim:ExcIEEEAC8B.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC8B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC8B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.vrmax'
                                                 );
        }
        if ('cim:ExcIEEEAC8B.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC8B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC8B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.vrmin'
                                                 );
        }
        if ('cim:ExcIEEEAC8B.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC8B.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC8B.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.ka'
                                                 );
        }
        if ('cim:ExcIEEEAC8B.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC8B.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC8B.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC8B.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC8B.ta'
                                                 );
        }
        if ('cim:ExcIEEEAC8B.te' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC8B.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC8B.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC8B.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC8B.te'
                                                 );
        }
        if ('cim:ExcIEEEAC8B.vfemax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC8B.vfemax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.vfemax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.vfemax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC8B.vfemax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.vfemax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.vfemax'
                                                 );
        }
        if ('cim:ExcIEEEAC8B.vemin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC8B.vemin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.vemin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.vemin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC8B.vemin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.vemin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.vemin'
                                                 );
        }
        if ('cim:ExcIEEEAC8B.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC8B.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC8B.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.ke'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.ke'
                                                 );
        }
        if ('cim:ExcIEEEAC8B.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC8B.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC8B.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.kc'
                                                 );
        }
        if ('cim:ExcIEEEAC8B.kd' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC8B.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.kd'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC8B.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.kd'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.kd'
                                                 );
        }
        if ('cim:ExcIEEEAC8B.ve1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC8B.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.ve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC8B.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.ve1'
                                                 );
        }
        if ('cim:ExcIEEEAC8B.seve1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC8B.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC8B.seve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC8B.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC8B.seve1'
                                                 );
        }
        if ('cim:ExcIEEEAC8B.ve2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC8B.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.ve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC8B.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC8B.ve2'
                                                 );
        }
        if ('cim:ExcIEEEAC8B.seve2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC8B.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC8B.seve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC8B.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC8B.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcIEEEAC8B.seve2'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'kpr': [CGMESProfile.shortNames.DY, ],
						'kir': [CGMESProfile.shortNames.DY, ],
						'kdr': [CGMESProfile.shortNames.DY, ],
						'tdr': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'te': [CGMESProfile.shortNames.DY, ],
						'vfemax': [CGMESProfile.shortNames.DY, ],
						'vemin': [CGMESProfile.shortNames.DY, ],
						'ke': [CGMESProfile.shortNames.DY, ],
						'kc': [CGMESProfile.shortNames.DY, ],
						'kd': [CGMESProfile.shortNames.DY, ],
						've1': [CGMESProfile.shortNames.DY, ],
						'seve1': [CGMESProfile.shortNames.DY, ],
						've2': [CGMESProfile.shortNames.DY, ],
						'seve2': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcIEEEAC8B.kpr",
            "cim:ExcIEEEAC8B.kir",
            "cim:ExcIEEEAC8B.kdr",
            "cim:ExcIEEEAC8B.tdr",
            "cim:ExcIEEEAC8B.vrmax",
            "cim:ExcIEEEAC8B.vrmin",
            "cim:ExcIEEEAC8B.ka",
            "cim:ExcIEEEAC8B.ta",
            "cim:ExcIEEEAC8B.te",
            "cim:ExcIEEEAC8B.vfemax",
            "cim:ExcIEEEAC8B.vemin",
            "cim:ExcIEEEAC8B.ke",
            "cim:ExcIEEEAC8B.kc",
            "cim:ExcIEEEAC8B.kd",
            "cim:ExcIEEEAC8B.ve1",
            "cim:ExcIEEEAC8B.seve1",
            "cim:ExcIEEEAC8B.ve2",
            "cim:ExcIEEEAC8B.seve2",
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
            if (!ExcIEEEAC8B.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcIEEEAC8B: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcIEEEAC8B.attributeHTML(object, cimmenu);
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
export default ExcIEEEAC8B
