import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovSteamSGO extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovSteamSGO") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovSteamSGO.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovSteamSGO.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovSteamSGO.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamSGO.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovSteamSGO.mwbase'
                                                 );
        }
        if ('cim:GovSteamSGO.t1' in object) {
            attributeEntries['filledEntries']['cim:GovSteamSGO.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamSGO.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamSGO.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamSGO.t1'
                                                 );
        }
        if ('cim:GovSteamSGO.t2' in object) {
            attributeEntries['filledEntries']['cim:GovSteamSGO.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamSGO.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamSGO.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamSGO.t2'
                                                 );
        }
        if ('cim:GovSteamSGO.t3' in object) {
            attributeEntries['filledEntries']['cim:GovSteamSGO.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamSGO.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamSGO.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamSGO.t3'
                                                 );
        }
        if ('cim:GovSteamSGO.t4' in object) {
            attributeEntries['filledEntries']['cim:GovSteamSGO.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.t4'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamSGO.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamSGO.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.t4'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamSGO.t4'
                                                 );
        }
        if ('cim:GovSteamSGO.t5' in object) {
            attributeEntries['filledEntries']['cim:GovSteamSGO.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.t5'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamSGO.t5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamSGO.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.t5'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamSGO.t5'
                                                 );
        }
        if ('cim:GovSteamSGO.t6' in object) {
            attributeEntries['filledEntries']['cim:GovSteamSGO.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.t6'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamSGO.t6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamSGO.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.t6'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamSGO.t6'
                                                 );
        }
        if ('cim:GovSteamSGO.k1' in object) {
            attributeEntries['filledEntries']['cim:GovSteamSGO.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.k1'],
                                                   'cim:PU',
                                                   'cim:GovSteamSGO.k1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamSGO.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.k1'],
                                                   'cim:PU',
                                                   'cim:GovSteamSGO.k1'
                                                 );
        }
        if ('cim:GovSteamSGO.k2' in object) {
            attributeEntries['filledEntries']['cim:GovSteamSGO.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.k2'],
                                                   'cim:PU',
                                                   'cim:GovSteamSGO.k2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamSGO.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.k2'],
                                                   'cim:PU',
                                                   'cim:GovSteamSGO.k2'
                                                 );
        }
        if ('cim:GovSteamSGO.k3' in object) {
            attributeEntries['filledEntries']['cim:GovSteamSGO.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.k3'],
                                                   'cim:PU',
                                                   'cim:GovSteamSGO.k3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamSGO.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.k3'],
                                                   'cim:PU',
                                                   'cim:GovSteamSGO.k3'
                                                 );
        }
        if ('cim:GovSteamSGO.pmax' in object) {
            attributeEntries['filledEntries']['cim:GovSteamSGO.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.pmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamSGO.pmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamSGO.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.pmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamSGO.pmax'
                                                 );
        }
        if ('cim:GovSteamSGO.pmin' in object) {
            attributeEntries['filledEntries']['cim:GovSteamSGO.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.pmin'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamSGO.pmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamSGO.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamSGO.pmin'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamSGO.pmin'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'mwbase': [CGMESProfile.shortNames.DY, ],
						't1': [CGMESProfile.shortNames.DY, ],
						't2': [CGMESProfile.shortNames.DY, ],
						't3': [CGMESProfile.shortNames.DY, ],
						't4': [CGMESProfile.shortNames.DY, ],
						't5': [CGMESProfile.shortNames.DY, ],
						't6': [CGMESProfile.shortNames.DY, ],
						'k1': [CGMESProfile.shortNames.DY, ],
						'k2': [CGMESProfile.shortNames.DY, ],
						'k3': [CGMESProfile.shortNames.DY, ],
						'pmax': [CGMESProfile.shortNames.DY, ],
						'pmin': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovSteamSGO.mwbase",
            "cim:GovSteamSGO.t1",
            "cim:GovSteamSGO.t2",
            "cim:GovSteamSGO.t3",
            "cim:GovSteamSGO.t4",
            "cim:GovSteamSGO.t5",
            "cim:GovSteamSGO.t6",
            "cim:GovSteamSGO.k1",
            "cim:GovSteamSGO.k2",
            "cim:GovSteamSGO.k3",
            "cim:GovSteamSGO.pmax",
            "cim:GovSteamSGO.pmin",
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
            if (!GovSteamSGO.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovSteamSGO: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovSteamSGO.attributeHTML(object, cimmenu);
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
export default GovSteamSGO
