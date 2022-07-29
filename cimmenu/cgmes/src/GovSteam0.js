import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovSteam0 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovSteam0") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovSteam0.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovSteam0.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam0.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovSteam0.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam0.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam0.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovSteam0.mwbase'
                                                 );
        }
        if ('cim:GovSteam0.r' in object) {
            attributeEntries['filledEntries']['cim:GovSteam0.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam0.r'],
                                                   'cim:PU',
                                                   'cim:GovSteam0.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam0.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam0.r'],
                                                   'cim:PU',
                                                   'cim:GovSteam0.r'
                                                 );
        }
        if ('cim:GovSteam0.t1' in object) {
            attributeEntries['filledEntries']['cim:GovSteam0.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam0.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam0.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam0.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam0.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam0.t1'
                                                 );
        }
        if ('cim:GovSteam0.vmax' in object) {
            attributeEntries['filledEntries']['cim:GovSteam0.vmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam0.vmax'],
                                                   'cim:PU',
                                                   'cim:GovSteam0.vmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam0.vmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam0.vmax'],
                                                   'cim:PU',
                                                   'cim:GovSteam0.vmax'
                                                 );
        }
        if ('cim:GovSteam0.vmin' in object) {
            attributeEntries['filledEntries']['cim:GovSteam0.vmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam0.vmin'],
                                                   'cim:PU',
                                                   'cim:GovSteam0.vmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam0.vmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam0.vmin'],
                                                   'cim:PU',
                                                   'cim:GovSteam0.vmin'
                                                 );
        }
        if ('cim:GovSteam0.t2' in object) {
            attributeEntries['filledEntries']['cim:GovSteam0.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam0.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam0.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam0.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam0.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam0.t2'
                                                 );
        }
        if ('cim:GovSteam0.t3' in object) {
            attributeEntries['filledEntries']['cim:GovSteam0.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam0.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam0.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam0.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam0.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam0.t3'
                                                 );
        }
        if ('cim:GovSteam0.dt' in object) {
            attributeEntries['filledEntries']['cim:GovSteam0.dt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam0.dt'],
                                                   'cim:PU',
                                                   'cim:GovSteam0.dt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam0.dt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam0.dt'],
                                                   'cim:PU',
                                                   'cim:GovSteam0.dt'
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
						't2': [CGMESProfile.shortNames.DY, ],
						't3': [CGMESProfile.shortNames.DY, ],
						'dt': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovSteam0.mwbase",
            "cim:GovSteam0.r",
            "cim:GovSteam0.t1",
            "cim:GovSteam0.vmax",
            "cim:GovSteam0.vmin",
            "cim:GovSteam0.t2",
            "cim:GovSteam0.t3",
            "cim:GovSteam0.dt",
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
            if (!GovSteam0.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovSteam0: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovSteam0.attributeHTML(object, cimmenu);
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
export default GovSteam0
