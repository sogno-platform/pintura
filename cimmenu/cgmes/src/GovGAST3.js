import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovGAST3 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovGAST3") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovGAST3.bp' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.bp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.bp'],
                                                   'cim:PU',
                                                   'cim:GovGAST3.bp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.bp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.bp'],
                                                   'cim:PU',
                                                   'cim:GovGAST3.bp'
                                                 );
        }
        if ('cim:GovGAST3.tg' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.tg'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST3.tg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.tg'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST3.tg'
                                                 );
        }
        if ('cim:GovGAST3.rcmx' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.rcmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.rcmx'],
                                                   'cim:PU',
                                                   'cim:GovGAST3.rcmx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.rcmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.rcmx'],
                                                   'cim:PU',
                                                   'cim:GovGAST3.rcmx'
                                                 );
        }
        if ('cim:GovGAST3.rcmn' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.rcmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.rcmn'],
                                                   'cim:PU',
                                                   'cim:GovGAST3.rcmn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.rcmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.rcmn'],
                                                   'cim:PU',
                                                   'cim:GovGAST3.rcmn'
                                                 );
        }
        if ('cim:GovGAST3.ky' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.ky'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.ky'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST3.ky'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.ky'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.ky'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST3.ky'
                                                 );
        }
        if ('cim:GovGAST3.ty' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.ty'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.ty'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST3.ty'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.ty'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.ty'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST3.ty'
                                                 );
        }
        if ('cim:GovGAST3.tac' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.tac'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.tac'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST3.tac'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.tac'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.tac'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST3.tac'
                                                 );
        }
        if ('cim:GovGAST3.kac' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.kac'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.kac'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST3.kac'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.kac'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.kac'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST3.kac'
                                                 );
        }
        if ('cim:GovGAST3.tc' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.tc'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST3.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.tc'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST3.tc'
                                                 );
        }
        if ('cim:GovGAST3.bca' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.bca'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.bca'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST3.bca'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.bca'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.bca'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST3.bca'
                                                 );
        }
        if ('cim:GovGAST3.kca' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.kca'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.kca'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST3.kca'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.kca'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.kca'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST3.kca'
                                                 );
        }
        if ('cim:GovGAST3.dtc' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.dtc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.dtc'],
                                                   'cim:Temperature',
                                                   'cim:GovGAST3.dtc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.dtc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.dtc'],
                                                   'cim:Temperature',
                                                   'cim:GovGAST3.dtc'
                                                 );
        }
        if ('cim:GovGAST3.ka' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.ka'],
                                                   'cim:PU',
                                                   'cim:GovGAST3.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.ka'],
                                                   'cim:PU',
                                                   'cim:GovGAST3.ka'
                                                 );
        }
        if ('cim:GovGAST3.tsi' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.tsi'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.tsi'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST3.tsi'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.tsi'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.tsi'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST3.tsi'
                                                 );
        }
        if ('cim:GovGAST3.ksi' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.ksi'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.ksi'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST3.ksi'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.ksi'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.ksi'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST3.ksi'
                                                 );
        }
        if ('cim:GovGAST3.ttc' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.ttc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.ttc'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST3.ttc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.ttc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.ttc'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST3.ttc'
                                                 );
        }
        if ('cim:GovGAST3.tfen' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.tfen'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.tfen'],
                                                   'cim:Temperature',
                                                   'cim:GovGAST3.tfen'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.tfen'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.tfen'],
                                                   'cim:Temperature',
                                                   'cim:GovGAST3.tfen'
                                                 );
        }
        if ('cim:GovGAST3.td' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.td'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST3.td'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.td'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST3.td'
                                                 );
        }
        if ('cim:GovGAST3.tt' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.tt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.tt'],
                                                   'cim:Temperature',
                                                   'cim:GovGAST3.tt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.tt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.tt'],
                                                   'cim:Temperature',
                                                   'cim:GovGAST3.tt'
                                                 );
        }
        if ('cim:GovGAST3.mxef' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.mxef'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.mxef'],
                                                   'cim:PU',
                                                   'cim:GovGAST3.mxef'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.mxef'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.mxef'],
                                                   'cim:PU',
                                                   'cim:GovGAST3.mxef'
                                                 );
        }
        if ('cim:GovGAST3.mnef' in object) {
            attributeEntries['filledEntries']['cim:GovGAST3.mnef'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.mnef'],
                                                   'cim:PU',
                                                   'cim:GovGAST3.mnef'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST3.mnef'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST3.mnef'],
                                                   'cim:PU',
                                                   'cim:GovGAST3.mnef'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'bp': [CGMESProfile.shortNames.DY, ],
						'tg': [CGMESProfile.shortNames.DY, ],
						'rcmx': [CGMESProfile.shortNames.DY, ],
						'rcmn': [CGMESProfile.shortNames.DY, ],
						'ky': [CGMESProfile.shortNames.DY, ],
						'ty': [CGMESProfile.shortNames.DY, ],
						'tac': [CGMESProfile.shortNames.DY, ],
						'kac': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						'bca': [CGMESProfile.shortNames.DY, ],
						'kca': [CGMESProfile.shortNames.DY, ],
						'dtc': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						'tsi': [CGMESProfile.shortNames.DY, ],
						'ksi': [CGMESProfile.shortNames.DY, ],
						'ttc': [CGMESProfile.shortNames.DY, ],
						'tfen': [CGMESProfile.shortNames.DY, ],
						'td': [CGMESProfile.shortNames.DY, ],
						'tt': [CGMESProfile.shortNames.DY, ],
						'mxef': [CGMESProfile.shortNames.DY, ],
						'mnef': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovGAST3.bp",
            "cim:GovGAST3.tg",
            "cim:GovGAST3.rcmx",
            "cim:GovGAST3.rcmn",
            "cim:GovGAST3.ky",
            "cim:GovGAST3.ty",
            "cim:GovGAST3.tac",
            "cim:GovGAST3.kac",
            "cim:GovGAST3.tc",
            "cim:GovGAST3.bca",
            "cim:GovGAST3.kca",
            "cim:GovGAST3.dtc",
            "cim:GovGAST3.ka",
            "cim:GovGAST3.tsi",
            "cim:GovGAST3.ksi",
            "cim:GovGAST3.ttc",
            "cim:GovGAST3.tfen",
            "cim:GovGAST3.td",
            "cim:GovGAST3.tt",
            "cim:GovGAST3.mxef",
            "cim:GovGAST3.mnef",
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
            if (!GovGAST3.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovGAST3: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovGAST3.attributeHTML(object, cimmenu);
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
export default GovGAST3
