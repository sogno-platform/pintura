import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovHydroWPID extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovHydroWPID") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovHydroWPID.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroWPID.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroWPID.mwbase'
                                                 );
        }
        if ('cim:GovHydroWPID.treg' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.treg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.treg'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWPID.treg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.treg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.treg'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWPID.treg'
                                                 );
        }
        if ('cim:GovHydroWPID.reg' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.reg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.reg'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.reg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.reg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.reg'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.reg'
                                                 );
        }
        if ('cim:GovHydroWPID.kp' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.kp'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.kp'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.kp'
                                                 );
        }
        if ('cim:GovHydroWPID.ki' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.ki'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.ki'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.ki'
                                                 );
        }
        if ('cim:GovHydroWPID.kd' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.kd'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.kd'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.kd'
                                                 );
        }
        if ('cim:GovHydroWPID.ta' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWPID.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWPID.ta'
                                                 );
        }
        if ('cim:GovHydroWPID.tb' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.tb'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWPID.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.tb'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWPID.tb'
                                                 );
        }
        if ('cim:GovHydroWPID.velmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.velmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.velmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.velmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.velmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.velmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.velmax'
                                                 );
        }
        if ('cim:GovHydroWPID.velmin' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.velmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.velmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.velmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.velmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.velmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.velmin'
                                                 );
        }
        if ('cim:GovHydroWPID.gatmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.gatmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.gatmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.gatmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.gatmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.gatmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.gatmax'
                                                 );
        }
        if ('cim:GovHydroWPID.gatmin' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.gatmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.gatmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.gatmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.gatmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.gatmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.gatmin'
                                                 );
        }
        if ('cim:GovHydroWPID.tw' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWPID.tw'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWPID.tw'
                                                 );
        }
        if ('cim:GovHydroWPID.pmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.pmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.pmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.pmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.pmax'
                                                 );
        }
        if ('cim:GovHydroWPID.pmin' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.pmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.pmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.pmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.pmin'
                                                 );
        }
        if ('cim:GovHydroWPID.d' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.d'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.d'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.d'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.d'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.d'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.d'
                                                 );
        }
        if ('cim:GovHydroWPID.gv3' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.gv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.gv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.gv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.gv3'
                                                 );
        }
        if ('cim:GovHydroWPID.gv1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.gv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.gv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.gv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.gv1'
                                                 );
        }
        if ('cim:GovHydroWPID.pgv1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.pgv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.pgv1'
                                                 );
        }
        if ('cim:GovHydroWPID.gv2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.gv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.gv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.gv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.gv2'
                                                 );
        }
        if ('cim:GovHydroWPID.pgv2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.pgv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.pgv2'
                                                 );
        }
        if ('cim:GovHydroWPID.pgv3' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWPID.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.pgv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWPID.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWPID.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroWPID.pgv3'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'mwbase': [CGMESProfile.shortNames.DY, ],
						'treg': [CGMESProfile.shortNames.DY, ],
						'reg': [CGMESProfile.shortNames.DY, ],
						'kp': [CGMESProfile.shortNames.DY, ],
						'ki': [CGMESProfile.shortNames.DY, ],
						'kd': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'tb': [CGMESProfile.shortNames.DY, ],
						'velmax': [CGMESProfile.shortNames.DY, ],
						'velmin': [CGMESProfile.shortNames.DY, ],
						'gatmax': [CGMESProfile.shortNames.DY, ],
						'gatmin': [CGMESProfile.shortNames.DY, ],
						'tw': [CGMESProfile.shortNames.DY, ],
						'pmax': [CGMESProfile.shortNames.DY, ],
						'pmin': [CGMESProfile.shortNames.DY, ],
						'd': [CGMESProfile.shortNames.DY, ],
						'gv3': [CGMESProfile.shortNames.DY, ],
						'gv1': [CGMESProfile.shortNames.DY, ],
						'pgv1': [CGMESProfile.shortNames.DY, ],
						'gv2': [CGMESProfile.shortNames.DY, ],
						'pgv2': [CGMESProfile.shortNames.DY, ],
						'pgv3': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovHydroWPID.mwbase",
            "cim:GovHydroWPID.treg",
            "cim:GovHydroWPID.reg",
            "cim:GovHydroWPID.kp",
            "cim:GovHydroWPID.ki",
            "cim:GovHydroWPID.kd",
            "cim:GovHydroWPID.ta",
            "cim:GovHydroWPID.tb",
            "cim:GovHydroWPID.velmax",
            "cim:GovHydroWPID.velmin",
            "cim:GovHydroWPID.gatmax",
            "cim:GovHydroWPID.gatmin",
            "cim:GovHydroWPID.tw",
            "cim:GovHydroWPID.pmax",
            "cim:GovHydroWPID.pmin",
            "cim:GovHydroWPID.d",
            "cim:GovHydroWPID.gv3",
            "cim:GovHydroWPID.gv1",
            "cim:GovHydroWPID.pgv1",
            "cim:GovHydroWPID.gv2",
            "cim:GovHydroWPID.pgv2",
            "cim:GovHydroWPID.pgv3",
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
            if (!GovHydroWPID.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovHydroWPID: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovHydroWPID.attributeHTML(object, cimmenu);
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
export default GovHydroWPID
