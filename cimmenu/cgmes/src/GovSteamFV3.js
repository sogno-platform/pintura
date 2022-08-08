import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovSteamFV3 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovSteamFV3") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovSteamFV3.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV3.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovSteamFV3.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV3.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovSteamFV3.mwbase'
                                                 );
        }
        if ('cim:GovSteamFV3.k' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV3.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.k'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV3.k'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV3.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.k'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV3.k'
                                                 );
        }
        if ('cim:GovSteamFV3.t1' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV3.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV3.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV3.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV3.t1'
                                                 );
        }
        if ('cim:GovSteamFV3.t2' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV3.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV3.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV3.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV3.t2'
                                                 );
        }
        if ('cim:GovSteamFV3.t3' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV3.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV3.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV3.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV3.t3'
                                                 );
        }
        if ('cim:GovSteamFV3.uo' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV3.uo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.uo'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamFV3.uo'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV3.uo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.uo'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamFV3.uo'
                                                 );
        }
        if ('cim:GovSteamFV3.uc' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV3.uc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.uc'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamFV3.uc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV3.uc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.uc'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamFV3.uc'
                                                 );
        }
        if ('cim:GovSteamFV3.pmax' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV3.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.pmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV3.pmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV3.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.pmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV3.pmax'
                                                 );
        }
        if ('cim:GovSteamFV3.pmin' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV3.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.pmin'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV3.pmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV3.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.pmin'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV3.pmin'
                                                 );
        }
        if ('cim:GovSteamFV3.t4' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV3.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.t4'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV3.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV3.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.t4'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV3.t4'
                                                 );
        }
        if ('cim:GovSteamFV3.k1' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV3.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.k1'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV3.k1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV3.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.k1'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV3.k1'
                                                 );
        }
        if ('cim:GovSteamFV3.t5' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV3.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.t5'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV3.t5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV3.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.t5'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV3.t5'
                                                 );
        }
        if ('cim:GovSteamFV3.k2' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV3.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.k2'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV3.k2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV3.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.k2'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV3.k2'
                                                 );
        }
        if ('cim:GovSteamFV3.t6' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV3.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.t6'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV3.t6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV3.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.t6'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV3.t6'
                                                 );
        }
        if ('cim:GovSteamFV3.k3' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV3.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.k3'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV3.k3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV3.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.k3'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV3.k3'
                                                 );
        }
        if ('cim:GovSteamFV3.ta' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV3.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV3.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV3.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV3.ta'
                                                 );
        }
        if ('cim:GovSteamFV3.tb' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV3.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.tb'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV3.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV3.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.tb'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV3.tb'
                                                 );
        }
        if ('cim:GovSteamFV3.tc' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV3.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.tc'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV3.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV3.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.tc'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamFV3.tc'
                                                 );
        }
        if ('cim:GovSteamFV3.prmax' in object) {
            attributeEntries['filledEntries']['cim:GovSteamFV3.prmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.prmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV3.prmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamFV3.prmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamFV3.prmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamFV3.prmax'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'mwbase': [CGMESProfile.shortNames.DY, ],
						'k': [CGMESProfile.shortNames.DY, ],
						't1': [CGMESProfile.shortNames.DY, ],
						't2': [CGMESProfile.shortNames.DY, ],
						't3': [CGMESProfile.shortNames.DY, ],
						'uo': [CGMESProfile.shortNames.DY, ],
						'uc': [CGMESProfile.shortNames.DY, ],
						'pmax': [CGMESProfile.shortNames.DY, ],
						'pmin': [CGMESProfile.shortNames.DY, ],
						't4': [CGMESProfile.shortNames.DY, ],
						'k1': [CGMESProfile.shortNames.DY, ],
						't5': [CGMESProfile.shortNames.DY, ],
						'k2': [CGMESProfile.shortNames.DY, ],
						't6': [CGMESProfile.shortNames.DY, ],
						'k3': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'tb': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						'prmax': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovSteamFV3.mwbase",
            "cim:GovSteamFV3.k",
            "cim:GovSteamFV3.t1",
            "cim:GovSteamFV3.t2",
            "cim:GovSteamFV3.t3",
            "cim:GovSteamFV3.uo",
            "cim:GovSteamFV3.uc",
            "cim:GovSteamFV3.pmax",
            "cim:GovSteamFV3.pmin",
            "cim:GovSteamFV3.t4",
            "cim:GovSteamFV3.k1",
            "cim:GovSteamFV3.t5",
            "cim:GovSteamFV3.k2",
            "cim:GovSteamFV3.t6",
            "cim:GovSteamFV3.k3",
            "cim:GovSteamFV3.ta",
            "cim:GovSteamFV3.tb",
            "cim:GovSteamFV3.tc",
            "cim:GovSteamFV3.prmax",
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
            if (!GovSteamFV3.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class GovSteamFV3: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovSteamFV3.attributeHTML(object, cimmenu);
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
export default GovSteamFV3
