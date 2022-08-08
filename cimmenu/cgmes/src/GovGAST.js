import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovGAST extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovGAST") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovGAST.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovGAST.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovGAST.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovGAST.mwbase'
                                                 );
        }
        if ('cim:GovGAST.r' in object) {
            attributeEntries['filledEntries']['cim:GovGAST.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.r'],
                                                   'cim:PU',
                                                   'cim:GovGAST.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.r'],
                                                   'cim:PU',
                                                   'cim:GovGAST.r'
                                                 );
        }
        if ('cim:GovGAST.t1' in object) {
            attributeEntries['filledEntries']['cim:GovGAST.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST.t1'
                                                 );
        }
        if ('cim:GovGAST.t2' in object) {
            attributeEntries['filledEntries']['cim:GovGAST.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST.t2'
                                                 );
        }
        if ('cim:GovGAST.t3' in object) {
            attributeEntries['filledEntries']['cim:GovGAST.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST.t3'
                                                 );
        }
        if ('cim:GovGAST.at' in object) {
            attributeEntries['filledEntries']['cim:GovGAST.at'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.at'],
                                                   'cim:PU',
                                                   'cim:GovGAST.at'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST.at'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.at'],
                                                   'cim:PU',
                                                   'cim:GovGAST.at'
                                                 );
        }
        if ('cim:GovGAST.kt' in object) {
            attributeEntries['filledEntries']['cim:GovGAST.kt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.kt'],
                                                   'cim:PU',
                                                   'cim:GovGAST.kt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST.kt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.kt'],
                                                   'cim:PU',
                                                   'cim:GovGAST.kt'
                                                 );
        }
        if ('cim:GovGAST.vmax' in object) {
            attributeEntries['filledEntries']['cim:GovGAST.vmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.vmax'],
                                                   'cim:PU',
                                                   'cim:GovGAST.vmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST.vmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.vmax'],
                                                   'cim:PU',
                                                   'cim:GovGAST.vmax'
                                                 );
        }
        if ('cim:GovGAST.vmin' in object) {
            attributeEntries['filledEntries']['cim:GovGAST.vmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.vmin'],
                                                   'cim:PU',
                                                   'cim:GovGAST.vmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST.vmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.vmin'],
                                                   'cim:PU',
                                                   'cim:GovGAST.vmin'
                                                 );
        }
        if ('cim:GovGAST.dturb' in object) {
            attributeEntries['filledEntries']['cim:GovGAST.dturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.dturb'],
                                                   'cim:PU',
                                                   'cim:GovGAST.dturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST.dturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST.dturb'],
                                                   'cim:PU',
                                                   'cim:GovGAST.dturb'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'mwbase': [CGMESProfile.shortNames.DY, ],
						'r': [CGMESProfile.shortNames.DY, ],
						't1': [CGMESProfile.shortNames.DY, ],
						't2': [CGMESProfile.shortNames.DY, ],
						't3': [CGMESProfile.shortNames.DY, ],
						'at': [CGMESProfile.shortNames.DY, ],
						'kt': [CGMESProfile.shortNames.DY, ],
						'vmax': [CGMESProfile.shortNames.DY, ],
						'vmin': [CGMESProfile.shortNames.DY, ],
						'dturb': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovGAST.mwbase",
            "cim:GovGAST.r",
            "cim:GovGAST.t1",
            "cim:GovGAST.t2",
            "cim:GovGAST.t3",
            "cim:GovGAST.at",
            "cim:GovGAST.kt",
            "cim:GovGAST.vmax",
            "cim:GovGAST.vmin",
            "cim:GovGAST.dturb",
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
            if (!GovGAST.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class GovGAST: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovGAST.attributeHTML(object, cimmenu);
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
export default GovGAST
