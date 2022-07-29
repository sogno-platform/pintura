import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovSteam2 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovSteam2") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovSteam2.k' in object) {
            attributeEntries['filledEntries']['cim:GovSteam2.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam2.k'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam2.k'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam2.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam2.k'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam2.k'
                                                 );
        }
        if ('cim:GovSteam2.dbf' in object) {
            attributeEntries['filledEntries']['cim:GovSteam2.dbf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam2.dbf'],
                                                   'cim:PU',
                                                   'cim:GovSteam2.dbf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam2.dbf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam2.dbf'],
                                                   'cim:PU',
                                                   'cim:GovSteam2.dbf'
                                                 );
        }
        if ('cim:GovSteam2.t1' in object) {
            attributeEntries['filledEntries']['cim:GovSteam2.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam2.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam2.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam2.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam2.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam2.t1'
                                                 );
        }
        if ('cim:GovSteam2.t2' in object) {
            attributeEntries['filledEntries']['cim:GovSteam2.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam2.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam2.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam2.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam2.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam2.t2'
                                                 );
        }
        if ('cim:GovSteam2.pmax' in object) {
            attributeEntries['filledEntries']['cim:GovSteam2.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam2.pmax'],
                                                   'cim:PU',
                                                   'cim:GovSteam2.pmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam2.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam2.pmax'],
                                                   'cim:PU',
                                                   'cim:GovSteam2.pmax'
                                                 );
        }
        if ('cim:GovSteam2.pmin' in object) {
            attributeEntries['filledEntries']['cim:GovSteam2.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam2.pmin'],
                                                   'cim:PU',
                                                   'cim:GovSteam2.pmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam2.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam2.pmin'],
                                                   'cim:PU',
                                                   'cim:GovSteam2.pmin'
                                                 );
        }
        if ('cim:GovSteam2.mxef' in object) {
            attributeEntries['filledEntries']['cim:GovSteam2.mxef'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam2.mxef'],
                                                   'cim:PU',
                                                   'cim:GovSteam2.mxef'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam2.mxef'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam2.mxef'],
                                                   'cim:PU',
                                                   'cim:GovSteam2.mxef'
                                                 );
        }
        if ('cim:GovSteam2.mnef' in object) {
            attributeEntries['filledEntries']['cim:GovSteam2.mnef'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam2.mnef'],
                                                   'cim:PU',
                                                   'cim:GovSteam2.mnef'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam2.mnef'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam2.mnef'],
                                                   'cim:PU',
                                                   'cim:GovSteam2.mnef'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'k': [CGMESProfile.shortNames.DY, ],
						'dbf': [CGMESProfile.shortNames.DY, ],
						't1': [CGMESProfile.shortNames.DY, ],
						't2': [CGMESProfile.shortNames.DY, ],
						'pmax': [CGMESProfile.shortNames.DY, ],
						'pmin': [CGMESProfile.shortNames.DY, ],
						'mxef': [CGMESProfile.shortNames.DY, ],
						'mnef': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovSteam2.k",
            "cim:GovSteam2.dbf",
            "cim:GovSteam2.t1",
            "cim:GovSteam2.t2",
            "cim:GovSteam2.pmax",
            "cim:GovSteam2.pmin",
            "cim:GovSteam2.mxef",
            "cim:GovSteam2.mnef",
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
            if (!GovSteam2.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovSteam2: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovSteam2.attributeHTML(object, cimmenu);
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
export default GovSteam2
