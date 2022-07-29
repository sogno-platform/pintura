import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovSteamFV2 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovSteamFV2") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovSteamFV2.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV2.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovSteamFV2.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV2.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovSteamFV2.mwbase'
                                                 );
        }
        if ('cim:GovSteamFV2.r' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV2.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.r'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV2.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV2.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.r'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV2.r'
                                                 );
        }
        if ('cim:GovSteamFV2.t1' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV2.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV2.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV2.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV2.t1'
                                                 );
        }
        if ('cim:GovSteamFV2.vmax' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV2.vmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.vmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV2.vmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV2.vmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.vmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV2.vmax'
                                                 );
        }
        if ('cim:GovSteamFV2.vmin' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV2.vmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.vmin'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV2.vmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV2.vmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.vmin'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV2.vmin'
                                                 );
        }
        if ('cim:GovSteamFV2.k' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV2.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.k'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV2.k'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV2.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.k'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV2.k'
                                                 );
        }
        if ('cim:GovSteamFV2.t3' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV2.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV2.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV2.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV2.t3'
                                                 );
        }
        if ('cim:GovSteamFV2.dt' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV2.dt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.dt'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV2.dt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV2.dt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.dt'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV2.dt'
                                                 );
        }
        if ('cim:GovSteamFV2.tt' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV2.tt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.tt'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV2.tt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV2.tt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.tt'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV2.tt'
                                                 );
        }
        if ('cim:GovSteamFV2.ta' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV2.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV2.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV2.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV2.ta'
                                                 );
        }
        if ('cim:GovSteamFV2.tb' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV2.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.tb'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV2.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV2.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.tb'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV2.tb'
                                                 );
        }
        if ('cim:GovSteamFV2.tc' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV2.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.tc'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV2.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV2.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.tc'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV2.tc'
                                                 );
        }
        if ('cim:GovSteamFV2.ti' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV2.ti'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.ti'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV2.ti'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV2.ti'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV2.ti'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV2.ti'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'mwbase': [CGMESProfile.shortNames.DY, ],
						'r': [CGMESProfile.shortNames.DY, ],
						't1': [CGMESProfile.shortNames.DY, ],
						'vmax': [CGMESProfile.shortNames.DY, ],
						'vmin': [CGMESProfile.shortNames.DY, ],
						'k': [CGMESProfile.shortNames.DY, ],
						't3': [CGMESProfile.shortNames.DY, ],
						'dt': [CGMESProfile.shortNames.DY, ],
						'tt': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'tb': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						'ti': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovSteamFV2.mwbase",
            "cim:GovSteamFV2.r",
            "cim:GovSteamFV2.t1",
            "cim:GovSteamFV2.vmax",
            "cim:GovSteamFV2.vmin",
            "cim:GovSteamFV2.k",
            "cim:GovSteamFV2.t3",
            "cim:GovSteamFV2.dt",
            "cim:GovSteamFV2.tt",
            "cim:GovSteamFV2.ta",
            "cim:GovSteamFV2.tb",
            "cim:GovSteamFV2.tc",
            "cim:GovSteamFV2.ti",
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
            if (!GovSteamFV2.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovSteamFV2: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovSteamFV2.attributeHTML(object, cimmenu);
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
export default GovSteamFV2
