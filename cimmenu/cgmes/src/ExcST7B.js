import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcST7B extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcST7B") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcST7B.kh' in object) {
            attributeEntries['filledEntries']['cim:ExcST7B.kh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.kh'],
                                                   'cim:PU',
                                                   'cim:ExcST7B.kh'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST7B.kh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.kh'],
                                                   'cim:PU',
                                                   'cim:ExcST7B.kh'
                                                 );
        }
        if ('cim:ExcST7B.kia' in object) {
            attributeEntries['filledEntries']['cim:ExcST7B.kia'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.kia'],
                                                   'cim:PU',
                                                   'cim:ExcST7B.kia'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST7B.kia'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.kia'],
                                                   'cim:PU',
                                                   'cim:ExcST7B.kia'
                                                 );
        }
        if ('cim:ExcST7B.kl' in object) {
            attributeEntries['filledEntries']['cim:ExcST7B.kl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.kl'],
                                                   'cim:PU',
                                                   'cim:ExcST7B.kl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST7B.kl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.kl'],
                                                   'cim:PU',
                                                   'cim:ExcST7B.kl'
                                                 );
        }
        if ('cim:ExcST7B.kpa' in object) {
            attributeEntries['filledEntries']['cim:ExcST7B.kpa'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.kpa'],
                                                   'cim:PU',
                                                   'cim:ExcST7B.kpa'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST7B.kpa'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.kpa'],
                                                   'cim:PU',
                                                   'cim:ExcST7B.kpa'
                                                 );
        }
        if ('cim:ExcST7B.oelin' in object) {
            attributeEntries['filledEntries']['cim:ExcST7B.oelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.oelin'],
                                                   'cim:ExcST7BOELselectorKind',
                                                   'cim:ExcST7B.oelin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST7B.oelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.oelin'],
                                                   'cim:ExcST7BOELselectorKind',
                                                   'cim:ExcST7B.oelin'
                                                 );
        }
        if ('cim:ExcST7B.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcST7B.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcST7B.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST7B.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcST7B.tb'
                                                 );
        }
        if ('cim:ExcST7B.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcST7B.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcST7B.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST7B.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcST7B.tc'
                                                 );
        }
        if ('cim:ExcST7B.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcST7B.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcST7B.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST7B.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcST7B.tf'
                                                 );
        }
        if ('cim:ExcST7B.tg' in object) {
            attributeEntries['filledEntries']['cim:ExcST7B.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.tg'],
                                                   'cim:Seconds',
                                                   'cim:ExcST7B.tg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST7B.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.tg'],
                                                   'cim:Seconds',
                                                   'cim:ExcST7B.tg'
                                                 );
        }
        if ('cim:ExcST7B.tia' in object) {
            attributeEntries['filledEntries']['cim:ExcST7B.tia'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.tia'],
                                                   'cim:Seconds',
                                                   'cim:ExcST7B.tia'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST7B.tia'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.tia'],
                                                   'cim:Seconds',
                                                   'cim:ExcST7B.tia'
                                                 );
        }
        if ('cim:ExcST7B.ts' in object) {
            attributeEntries['filledEntries']['cim:ExcST7B.ts'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.ts'],
                                                   'cim:Seconds',
                                                   'cim:ExcST7B.ts'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST7B.ts'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.ts'],
                                                   'cim:Seconds',
                                                   'cim:ExcST7B.ts'
                                                 );
        }
        if ('cim:ExcST7B.uelin' in object) {
            attributeEntries['filledEntries']['cim:ExcST7B.uelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.uelin'],
                                                   'cim:ExcST7BUELselectorKind',
                                                   'cim:ExcST7B.uelin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST7B.uelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.uelin'],
                                                   'cim:ExcST7BUELselectorKind',
                                                   'cim:ExcST7B.uelin'
                                                 );
        }
        if ('cim:ExcST7B.vmax' in object) {
            attributeEntries['filledEntries']['cim:ExcST7B.vmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.vmax'],
                                                   'cim:PU',
                                                   'cim:ExcST7B.vmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST7B.vmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.vmax'],
                                                   'cim:PU',
                                                   'cim:ExcST7B.vmax'
                                                 );
        }
        if ('cim:ExcST7B.vmin' in object) {
            attributeEntries['filledEntries']['cim:ExcST7B.vmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.vmin'],
                                                   'cim:PU',
                                                   'cim:ExcST7B.vmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST7B.vmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.vmin'],
                                                   'cim:PU',
                                                   'cim:ExcST7B.vmin'
                                                 );
        }
        if ('cim:ExcST7B.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcST7B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcST7B.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST7B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcST7B.vrmax'
                                                 );
        }
        if ('cim:ExcST7B.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcST7B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcST7B.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST7B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST7B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcST7B.vrmin'
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
						'ts': [CGMESProfile.shortNames.DY, ],
						'uelin': [CGMESProfile.shortNames.DY, ],
						'vmax': [CGMESProfile.shortNames.DY, ],
						'vmin': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcST7B.kh",
            "cim:ExcST7B.kia",
            "cim:ExcST7B.kl",
            "cim:ExcST7B.kpa",
            "cim:ExcST7B.oelin",
            "cim:ExcST7B.tb",
            "cim:ExcST7B.tc",
            "cim:ExcST7B.tf",
            "cim:ExcST7B.tg",
            "cim:ExcST7B.tia",
            "cim:ExcST7B.ts",
            "cim:ExcST7B.uelin",
            "cim:ExcST7B.vmax",
            "cim:ExcST7B.vmin",
            "cim:ExcST7B.vrmax",
            "cim:ExcST7B.vrmin",
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
            if (!ExcST7B.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcST7B: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcST7B.attributeHTML(object, cimmenu);
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
export default ExcST7B
