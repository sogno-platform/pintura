import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovSteamCC extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovSteamCC") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovSteamCC.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovSteamCC.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovSteamCC.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamCC.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovSteamCC.mwbase'
                                                 );
        }
        if ('cim:GovSteamCC.pmaxhp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamCC.pmaxhp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.pmaxhp'],
                                                   'cim:PU',
                                                   'cim:GovSteamCC.pmaxhp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamCC.pmaxhp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.pmaxhp'],
                                                   'cim:PU',
                                                   'cim:GovSteamCC.pmaxhp'
                                                 );
        }
        if ('cim:GovSteamCC.rhp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamCC.rhp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.rhp'],
                                                   'cim:PU',
                                                   'cim:GovSteamCC.rhp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamCC.rhp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.rhp'],
                                                   'cim:PU',
                                                   'cim:GovSteamCC.rhp'
                                                 );
        }
        if ('cim:GovSteamCC.t1hp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamCC.t1hp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.t1hp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamCC.t1hp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamCC.t1hp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.t1hp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamCC.t1hp'
                                                 );
        }
        if ('cim:GovSteamCC.t3hp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamCC.t3hp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.t3hp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamCC.t3hp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamCC.t3hp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.t3hp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamCC.t3hp'
                                                 );
        }
        if ('cim:GovSteamCC.t4hp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamCC.t4hp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.t4hp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamCC.t4hp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamCC.t4hp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.t4hp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamCC.t4hp'
                                                 );
        }
        if ('cim:GovSteamCC.t5hp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamCC.t5hp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.t5hp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamCC.t5hp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamCC.t5hp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.t5hp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamCC.t5hp'
                                                 );
        }
        if ('cim:GovSteamCC.fhp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamCC.fhp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.fhp'],
                                                   'cim:PU',
                                                   'cim:GovSteamCC.fhp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamCC.fhp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.fhp'],
                                                   'cim:PU',
                                                   'cim:GovSteamCC.fhp'
                                                 );
        }
        if ('cim:GovSteamCC.dhp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamCC.dhp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.dhp'],
                                                   'cim:PU',
                                                   'cim:GovSteamCC.dhp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamCC.dhp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.dhp'],
                                                   'cim:PU',
                                                   'cim:GovSteamCC.dhp'
                                                 );
        }
        if ('cim:GovSteamCC.pmaxlp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamCC.pmaxlp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.pmaxlp'],
                                                   'cim:PU',
                                                   'cim:GovSteamCC.pmaxlp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamCC.pmaxlp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.pmaxlp'],
                                                   'cim:PU',
                                                   'cim:GovSteamCC.pmaxlp'
                                                 );
        }
        if ('cim:GovSteamCC.rlp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamCC.rlp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.rlp'],
                                                   'cim:PU',
                                                   'cim:GovSteamCC.rlp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamCC.rlp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.rlp'],
                                                   'cim:PU',
                                                   'cim:GovSteamCC.rlp'
                                                 );
        }
        if ('cim:GovSteamCC.t1lp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamCC.t1lp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.t1lp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamCC.t1lp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamCC.t1lp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.t1lp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamCC.t1lp'
                                                 );
        }
        if ('cim:GovSteamCC.t3lp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamCC.t3lp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.t3lp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamCC.t3lp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamCC.t3lp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.t3lp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamCC.t3lp'
                                                 );
        }
        if ('cim:GovSteamCC.t4lp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamCC.t4lp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.t4lp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamCC.t4lp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamCC.t4lp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.t4lp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamCC.t4lp'
                                                 );
        }
        if ('cim:GovSteamCC.t5lp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamCC.t5lp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.t5lp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamCC.t5lp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamCC.t5lp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.t5lp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamCC.t5lp'
                                                 );
        }
        if ('cim:GovSteamCC.flp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamCC.flp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.flp'],
                                                   'cim:PU',
                                                   'cim:GovSteamCC.flp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamCC.flp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.flp'],
                                                   'cim:PU',
                                                   'cim:GovSteamCC.flp'
                                                 );
        }
        if ('cim:GovSteamCC.dlp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamCC.dlp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.dlp'],
                                                   'cim:PU',
                                                   'cim:GovSteamCC.dlp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamCC.dlp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamCC.dlp'],
                                                   'cim:PU',
                                                   'cim:GovSteamCC.dlp'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'mwbase': [CGMESProfile.shortNames.DY, ],
						'pmaxhp': [CGMESProfile.shortNames.DY, ],
						'rhp': [CGMESProfile.shortNames.DY, ],
						't1hp': [CGMESProfile.shortNames.DY, ],
						't3hp': [CGMESProfile.shortNames.DY, ],
						't4hp': [CGMESProfile.shortNames.DY, ],
						't5hp': [CGMESProfile.shortNames.DY, ],
						'fhp': [CGMESProfile.shortNames.DY, ],
						'dhp': [CGMESProfile.shortNames.DY, ],
						'pmaxlp': [CGMESProfile.shortNames.DY, ],
						'rlp': [CGMESProfile.shortNames.DY, ],
						't1lp': [CGMESProfile.shortNames.DY, ],
						't3lp': [CGMESProfile.shortNames.DY, ],
						't4lp': [CGMESProfile.shortNames.DY, ],
						't5lp': [CGMESProfile.shortNames.DY, ],
						'flp': [CGMESProfile.shortNames.DY, ],
						'dlp': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovSteamCC.mwbase",
            "cim:GovSteamCC.pmaxhp",
            "cim:GovSteamCC.rhp",
            "cim:GovSteamCC.t1hp",
            "cim:GovSteamCC.t3hp",
            "cim:GovSteamCC.t4hp",
            "cim:GovSteamCC.t5hp",
            "cim:GovSteamCC.fhp",
            "cim:GovSteamCC.dhp",
            "cim:GovSteamCC.pmaxlp",
            "cim:GovSteamCC.rlp",
            "cim:GovSteamCC.t1lp",
            "cim:GovSteamCC.t3lp",
            "cim:GovSteamCC.t4lp",
            "cim:GovSteamCC.t5lp",
            "cim:GovSteamCC.flp",
            "cim:GovSteamCC.dlp",
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
            if (!GovSteamCC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovSteamCC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovSteamCC.attributeHTML(object, cimmenu);
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
export default GovSteamCC
