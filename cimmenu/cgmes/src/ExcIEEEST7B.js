import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcIEEEST7B extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcIEEEST7B") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcIEEEST7B.kh' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST7B.kh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.kh'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST7B.kh'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST7B.kh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.kh'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST7B.kh'
                                                 );
        }
        if ('cim:ExcIEEEST7B.kia' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST7B.kia'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.kia'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST7B.kia'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST7B.kia'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.kia'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST7B.kia'
                                                 );
        }
        if ('cim:ExcIEEEST7B.kl' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST7B.kl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.kl'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST7B.kl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST7B.kl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.kl'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST7B.kl'
                                                 );
        }
        if ('cim:ExcIEEEST7B.kpa' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST7B.kpa'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.kpa'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST7B.kpa'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST7B.kpa'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.kpa'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST7B.kpa'
                                                 );
        }
        if ('cim:ExcIEEEST7B.oelin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST7B.oelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.oelin'],
                                                   'cim:ExcST7BOELselectorKind',
                                                   'cim:ExcIEEEST7B.oelin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST7B.oelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.oelin'],
                                                   'cim:ExcST7BOELselectorKind',
                                                   'cim:ExcIEEEST7B.oelin'
                                                 );
        }
        if ('cim:ExcIEEEST7B.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST7B.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST7B.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST7B.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST7B.tb'
                                                 );
        }
        if ('cim:ExcIEEEST7B.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST7B.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST7B.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST7B.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST7B.tc'
                                                 );
        }
        if ('cim:ExcIEEEST7B.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST7B.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST7B.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST7B.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST7B.tf'
                                                 );
        }
        if ('cim:ExcIEEEST7B.tg' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST7B.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.tg'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST7B.tg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST7B.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.tg'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST7B.tg'
                                                 );
        }
        if ('cim:ExcIEEEST7B.tia' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST7B.tia'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.tia'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST7B.tia'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST7B.tia'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.tia'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST7B.tia'
                                                 );
        }
        if ('cim:ExcIEEEST7B.uelin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST7B.uelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.uelin'],
                                                   'cim:ExcST7BUELselectorKind',
                                                   'cim:ExcIEEEST7B.uelin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST7B.uelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.uelin'],
                                                   'cim:ExcST7BUELselectorKind',
                                                   'cim:ExcIEEEST7B.uelin'
                                                 );
        }
        if ('cim:ExcIEEEST7B.vmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST7B.vmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.vmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST7B.vmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST7B.vmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.vmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST7B.vmax'
                                                 );
        }
        if ('cim:ExcIEEEST7B.vmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST7B.vmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.vmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST7B.vmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST7B.vmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.vmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST7B.vmin'
                                                 );
        }
        if ('cim:ExcIEEEST7B.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST7B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST7B.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST7B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST7B.vrmax'
                                                 );
        }
        if ('cim:ExcIEEEST7B.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST7B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST7B.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST7B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST7B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST7B.vrmin'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'kh': [CGMESProfile.shortNames.DY, ],
						'kia': [CGMESProfile.shortNames.DY, ],
						'kl': [CGMESProfile.shortNames.DY, ],
						'kpa': [CGMESProfile.shortNames.DY, ],
						'oelin': [CGMESProfile.shortNames.DY, ],
						'tb': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						'tf': [CGMESProfile.shortNames.DY, ],
						'tg': [CGMESProfile.shortNames.DY, ],
						'tia': [CGMESProfile.shortNames.DY, ],
						'uelin': [CGMESProfile.shortNames.DY, ],
						'vmax': [CGMESProfile.shortNames.DY, ],
						'vmin': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcIEEEST7B.kh",
            "cim:ExcIEEEST7B.kia",
            "cim:ExcIEEEST7B.kl",
            "cim:ExcIEEEST7B.kpa",
            "cim:ExcIEEEST7B.oelin",
            "cim:ExcIEEEST7B.tb",
            "cim:ExcIEEEST7B.tc",
            "cim:ExcIEEEST7B.tf",
            "cim:ExcIEEEST7B.tg",
            "cim:ExcIEEEST7B.tia",
            "cim:ExcIEEEST7B.uelin",
            "cim:ExcIEEEST7B.vmax",
            "cim:ExcIEEEST7B.vmin",
            "cim:ExcIEEEST7B.vrmax",
            "cim:ExcIEEEST7B.vrmin",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( ExcitationSystemDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!ExcIEEEST7B.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcIEEEST7B: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcIEEEST7B.attributeHTML(object, cimmenu);
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
export default ExcIEEEST7B
