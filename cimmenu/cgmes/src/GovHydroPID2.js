import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovHydroPID2 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovHydroPID2") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovHydroPID2.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroPID2.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroPID2.mwbase'
                                                 );
        }
        if ('cim:GovHydroPID2.treg' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.treg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.treg'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPID2.treg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.treg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.treg'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPID2.treg'
                                                 );
        }
        if ('cim:GovHydroPID2.rperm' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.rperm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.rperm'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.rperm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.rperm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.rperm'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.rperm'
                                                 );
        }
        if ('cim:GovHydroPID2.kp' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.kp'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.kp'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.kp'
                                                 );
        }
        if ('cim:GovHydroPID2.ki' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.ki'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroPID2.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.ki'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroPID2.ki'
                                                 );
        }
        if ('cim:GovHydroPID2.kd' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.kd'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.kd'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.kd'
                                                 );
        }
        if ('cim:GovHydroPID2.ta' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPID2.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPID2.ta'
                                                 );
        }
        if ('cim:GovHydroPID2.tb' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.tb'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPID2.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.tb'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPID2.tb'
                                                 );
        }
        if ('cim:GovHydroPID2.velmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.velmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.velmax'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroPID2.velmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.velmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.velmax'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroPID2.velmax'
                                                 );
        }
        if ('cim:GovHydroPID2.velmin' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.velmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.velmin'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroPID2.velmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.velmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.velmin'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroPID2.velmin'
                                                 );
        }
        if ('cim:GovHydroPID2.gmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.gmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.gmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.gmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.gmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.gmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.gmax'
                                                 );
        }
        if ('cim:GovHydroPID2.gmin' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.gmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.gmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.gmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.gmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.gmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.gmin'
                                                 );
        }
        if ('cim:GovHydroPID2.tw' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPID2.tw'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroPID2.tw'
                                                 );
        }
        if ('cim:GovHydroPID2.d' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.d'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.d'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.d'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.d'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.d'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.d'
                                                 );
        }
        if ('cim:GovHydroPID2.g0' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.g0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.g0'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.g0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.g0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.g0'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.g0'
                                                 );
        }
        if ('cim:GovHydroPID2.g1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.g1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.g1'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.g1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.g1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.g1'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.g1'
                                                 );
        }
        if ('cim:GovHydroPID2.p1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.p1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.p1'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.p1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.p1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.p1'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.p1'
                                                 );
        }
        if ('cim:GovHydroPID2.g2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.g2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.g2'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.g2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.g2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.g2'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.g2'
                                                 );
        }
        if ('cim:GovHydroPID2.p2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.p2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.p2'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.p2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.p2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.p2'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.p2'
                                                 );
        }
        if ('cim:GovHydroPID2.p3' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.p3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.p3'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.p3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.p3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.p3'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.p3'
                                                 );
        }
        if ('cim:GovHydroPID2.atw' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.atw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.atw'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.atw'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.atw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.atw'],
                                                   'cim:PU',
                                                   'cim:GovHydroPID2.atw'
                                                 );
        }
        if ('cim:GovHydroPID2.feedbackSignal' in object) {
            attributeEntries['filledEntries']['cim:GovHydroPID2.feedbackSignal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.feedbackSignal'],
                                                   'cim:Boolean',
                                                   'cim:GovHydroPID2.feedbackSignal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroPID2.feedbackSignal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroPID2.feedbackSignal'],
                                                   'cim:Boolean',
                                                   'cim:GovHydroPID2.feedbackSignal'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'mwbase': [CGMESProfile.shortNames.DY, ],
						'treg': [CGMESProfile.shortNames.DY, ],
						'rperm': [CGMESProfile.shortNames.DY, ],
						'kp': [CGMESProfile.shortNames.DY, ],
						'ki': [CGMESProfile.shortNames.DY, ],
						'kd': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'tb': [CGMESProfile.shortNames.DY, ],
						'velmax': [CGMESProfile.shortNames.DY, ],
						'velmin': [CGMESProfile.shortNames.DY, ],
						'gmax': [CGMESProfile.shortNames.DY, ],
						'gmin': [CGMESProfile.shortNames.DY, ],
						'tw': [CGMESProfile.shortNames.DY, ],
						'd': [CGMESProfile.shortNames.DY, ],
						'g0': [CGMESProfile.shortNames.DY, ],
						'g1': [CGMESProfile.shortNames.DY, ],
						'p1': [CGMESProfile.shortNames.DY, ],
						'g2': [CGMESProfile.shortNames.DY, ],
						'p2': [CGMESProfile.shortNames.DY, ],
						'p3': [CGMESProfile.shortNames.DY, ],
						'atw': [CGMESProfile.shortNames.DY, ],
						'feedbackSignal': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovHydroPID2.mwbase",
            "cim:GovHydroPID2.treg",
            "cim:GovHydroPID2.rperm",
            "cim:GovHydroPID2.kp",
            "cim:GovHydroPID2.ki",
            "cim:GovHydroPID2.kd",
            "cim:GovHydroPID2.ta",
            "cim:GovHydroPID2.tb",
            "cim:GovHydroPID2.velmax",
            "cim:GovHydroPID2.velmin",
            "cim:GovHydroPID2.gmax",
            "cim:GovHydroPID2.gmin",
            "cim:GovHydroPID2.tw",
            "cim:GovHydroPID2.d",
            "cim:GovHydroPID2.g0",
            "cim:GovHydroPID2.g1",
            "cim:GovHydroPID2.p1",
            "cim:GovHydroPID2.g2",
            "cim:GovHydroPID2.p2",
            "cim:GovHydroPID2.p3",
            "cim:GovHydroPID2.atw",
            "cim:GovHydroPID2.feedbackSignal",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( TurbineGovernorDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!GovHydroPID2.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovHydroPID2: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovHydroPID2.attributeHTML(object, cimmenu);
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
export default GovHydroPID2
