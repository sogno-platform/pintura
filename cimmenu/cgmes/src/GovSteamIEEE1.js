import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovSteamIEEE1 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovSteamIEEE1") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovSteamIEEE1.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovSteamIEEE1.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovSteamIEEE1.mwbase'
                                                 );
        }
        if ('cim:GovSteamIEEE1.k' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.k'],
                                                   'cim:PU',
                                                   'cim:GovSteamIEEE1.k'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.k'],
                                                   'cim:PU',
                                                   'cim:GovSteamIEEE1.k'
                                                 );
        }
        if ('cim:GovSteamIEEE1.t1' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamIEEE1.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamIEEE1.t1'
                                                 );
        }
        if ('cim:GovSteamIEEE1.t2' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamIEEE1.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamIEEE1.t2'
                                                 );
        }
        if ('cim:GovSteamIEEE1.t3' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamIEEE1.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamIEEE1.t3'
                                                 );
        }
        if ('cim:GovSteamIEEE1.uo' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.uo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.uo'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.uo'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.uo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.uo'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.uo'
                                                 );
        }
        if ('cim:GovSteamIEEE1.uc' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.uc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.uc'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.uc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.uc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.uc'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.uc'
                                                 );
        }
        if ('cim:GovSteamIEEE1.pmax' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.pmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamIEEE1.pmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.pmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamIEEE1.pmax'
                                                 );
        }
        if ('cim:GovSteamIEEE1.pmin' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.pmin'],
                                                   'cim:PU',
                                                   'cim:GovSteamIEEE1.pmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.pmin'],
                                                   'cim:PU',
                                                   'cim:GovSteamIEEE1.pmin'
                                                 );
        }
        if ('cim:GovSteamIEEE1.t4' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.t4'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamIEEE1.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.t4'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamIEEE1.t4'
                                                 );
        }
        if ('cim:GovSteamIEEE1.k1' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.k1'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.k1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.k1'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.k1'
                                                 );
        }
        if ('cim:GovSteamIEEE1.k2' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.k2'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.k2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.k2'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.k2'
                                                 );
        }
        if ('cim:GovSteamIEEE1.t5' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.t5'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamIEEE1.t5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.t5'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamIEEE1.t5'
                                                 );
        }
        if ('cim:GovSteamIEEE1.k3' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.k3'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.k3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.k3'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.k3'
                                                 );
        }
        if ('cim:GovSteamIEEE1.k4' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.k4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.k4'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.k4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.k4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.k4'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.k4'
                                                 );
        }
        if ('cim:GovSteamIEEE1.t6' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.t6'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamIEEE1.t6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.t6'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamIEEE1.t6'
                                                 );
        }
        if ('cim:GovSteamIEEE1.k5' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.k5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.k5'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.k5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.k5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.k5'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.k5'
                                                 );
        }
        if ('cim:GovSteamIEEE1.k6' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.k6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.k6'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.k6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.k6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.k6'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.k6'
                                                 );
        }
        if ('cim:GovSteamIEEE1.t7' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.t7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.t7'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamIEEE1.t7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.t7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.t7'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamIEEE1.t7'
                                                 );
        }
        if ('cim:GovSteamIEEE1.k7' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.k7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.k7'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.k7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.k7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.k7'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.k7'
                                                 );
        }
        if ('cim:GovSteamIEEE1.k8' in object) {
            attributeEntries['filledEntries']['cim:GovSteamIEEE1.k8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.k8'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.k8'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamIEEE1.k8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamIEEE1.k8'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamIEEE1.k8'
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
						'k2': [CGMESProfile.shortNames.DY, ],
						't5': [CGMESProfile.shortNames.DY, ],
						'k3': [CGMESProfile.shortNames.DY, ],
						'k4': [CGMESProfile.shortNames.DY, ],
						't6': [CGMESProfile.shortNames.DY, ],
						'k5': [CGMESProfile.shortNames.DY, ],
						'k6': [CGMESProfile.shortNames.DY, ],
						't7': [CGMESProfile.shortNames.DY, ],
						'k7': [CGMESProfile.shortNames.DY, ],
						'k8': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovSteamIEEE1.mwbase",
            "cim:GovSteamIEEE1.k",
            "cim:GovSteamIEEE1.t1",
            "cim:GovSteamIEEE1.t2",
            "cim:GovSteamIEEE1.t3",
            "cim:GovSteamIEEE1.uo",
            "cim:GovSteamIEEE1.uc",
            "cim:GovSteamIEEE1.pmax",
            "cim:GovSteamIEEE1.pmin",
            "cim:GovSteamIEEE1.t4",
            "cim:GovSteamIEEE1.k1",
            "cim:GovSteamIEEE1.k2",
            "cim:GovSteamIEEE1.t5",
            "cim:GovSteamIEEE1.k3",
            "cim:GovSteamIEEE1.k4",
            "cim:GovSteamIEEE1.t6",
            "cim:GovSteamIEEE1.k5",
            "cim:GovSteamIEEE1.k6",
            "cim:GovSteamIEEE1.t7",
            "cim:GovSteamIEEE1.k7",
            "cim:GovSteamIEEE1.k8",
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
            if (!GovSteamIEEE1.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovSteamIEEE1: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovSteamIEEE1.attributeHTML(object, cimmenu);
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
export default GovSteamIEEE1
