import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcST6B extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcST6B") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcST6B.ilr' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.ilr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.ilr'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.ilr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.ilr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.ilr'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.ilr'
                                                 );
        }
        if ('cim:ExcST6B.k1' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.k1'],
                                                   'cim:Boolean',
                                                   'cim:ExcST6B.k1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.k1'],
                                                   'cim:Boolean',
                                                   'cim:ExcST6B.k1'
                                                 );
        }
        if ('cim:ExcST6B.kcl' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.kcl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.kcl'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.kcl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.kcl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.kcl'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.kcl'
                                                 );
        }
        if ('cim:ExcST6B.kff' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.kff'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.kff'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.kff'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.kff'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.kff'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.kff'
                                                 );
        }
        if ('cim:ExcST6B.kg' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.kg'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.kg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.kg'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.kg'
                                                 );
        }
        if ('cim:ExcST6B.kia' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.kia'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.kia'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.kia'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.kia'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.kia'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.kia'
                                                 );
        }
        if ('cim:ExcST6B.klr' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.klr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.klr'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.klr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.klr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.klr'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.klr'
                                                 );
        }
        if ('cim:ExcST6B.km' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.km'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.km'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.km'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.km'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.km'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.km'
                                                 );
        }
        if ('cim:ExcST6B.kpa' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.kpa'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.kpa'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.kpa'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.kpa'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.kpa'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.kpa'
                                                 );
        }
        if ('cim:ExcST6B.kvd' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.kvd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.kvd'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.kvd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.kvd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.kvd'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.kvd'
                                                 );
        }
        if ('cim:ExcST6B.oelin' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.oelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.oelin'],
                                                   'cim:ExcST6BOELselectorKind',
                                                   'cim:ExcST6B.oelin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.oelin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.oelin'],
                                                   'cim:ExcST6BOELselectorKind',
                                                   'cim:ExcST6B.oelin'
                                                 );
        }
        if ('cim:ExcST6B.tg' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.tg'],
                                                   'cim:Seconds',
                                                   'cim:ExcST6B.tg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.tg'],
                                                   'cim:Seconds',
                                                   'cim:ExcST6B.tg'
                                                 );
        }
        if ('cim:ExcST6B.ts' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.ts'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.ts'],
                                                   'cim:Seconds',
                                                   'cim:ExcST6B.ts'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.ts'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.ts'],
                                                   'cim:Seconds',
                                                   'cim:ExcST6B.ts'
                                                 );
        }
        if ('cim:ExcST6B.tvd' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.tvd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.tvd'],
                                                   'cim:Seconds',
                                                   'cim:ExcST6B.tvd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.tvd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.tvd'],
                                                   'cim:Seconds',
                                                   'cim:ExcST6B.tvd'
                                                 );
        }
        if ('cim:ExcST6B.vamax' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.vamax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.vamax'
                                                 );
        }
        if ('cim:ExcST6B.vamin' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.vamin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.vamin'
                                                 );
        }
        if ('cim:ExcST6B.vilim' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.vilim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.vilim'],
                                                   'cim:Boolean',
                                                   'cim:ExcST6B.vilim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.vilim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.vilim'],
                                                   'cim:Boolean',
                                                   'cim:ExcST6B.vilim'
                                                 );
        }
        if ('cim:ExcST6B.vimax' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.vimax'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.vimax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.vimax'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.vimax'
                                                 );
        }
        if ('cim:ExcST6B.vimin' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.vimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.vimin'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.vimin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.vimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.vimin'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.vimin'
                                                 );
        }
        if ('cim:ExcST6B.vmult' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.vmult'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.vmult'],
                                                   'cim:Boolean',
                                                   'cim:ExcST6B.vmult'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.vmult'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.vmult'],
                                                   'cim:Boolean',
                                                   'cim:ExcST6B.vmult'
                                                 );
        }
        if ('cim:ExcST6B.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.vrmax'
                                                 );
        }
        if ('cim:ExcST6B.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.vrmin'
                                                 );
        }
        if ('cim:ExcST6B.xc' in object) {
            attributeEntries['filledEntries']['cim:ExcST6B.xc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.xc'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.xc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST6B.xc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST6B.xc'],
                                                   'cim:PU',
                                                   'cim:ExcST6B.xc'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ilr': [CGMESProfile.shortNames.DY, ],
						'k1': [CGMESProfile.shortNames.DY, ],
						'kcl': [CGMESProfile.shortNames.DY, ],
						'kff': [CGMESProfile.shortNames.DY, ],
						'kg': [CGMESProfile.shortNames.DY, ],
						'kia': [CGMESProfile.shortNames.DY, ],
						'klr': [CGMESProfile.shortNames.DY, ],
						'km': [CGMESProfile.shortNames.DY, ],
						'kpa': [CGMESProfile.shortNames.DY, ],
						'kvd': [CGMESProfile.shortNames.DY, ],
						'oelin': [CGMESProfile.shortNames.DY, ],
						'tg': [CGMESProfile.shortNames.DY, ],
						'ts': [CGMESProfile.shortNames.DY, ],
						'tvd': [CGMESProfile.shortNames.DY, ],
						'vamax': [CGMESProfile.shortNames.DY, ],
						'vamin': [CGMESProfile.shortNames.DY, ],
						'vilim': [CGMESProfile.shortNames.DY, ],
						'vimax': [CGMESProfile.shortNames.DY, ],
						'vimin': [CGMESProfile.shortNames.DY, ],
						'vmult': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						'xc': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcST6B.ilr",
            "cim:ExcST6B.k1",
            "cim:ExcST6B.kcl",
            "cim:ExcST6B.kff",
            "cim:ExcST6B.kg",
            "cim:ExcST6B.kia",
            "cim:ExcST6B.klr",
            "cim:ExcST6B.km",
            "cim:ExcST6B.kpa",
            "cim:ExcST6B.kvd",
            "cim:ExcST6B.oelin",
            "cim:ExcST6B.tg",
            "cim:ExcST6B.ts",
            "cim:ExcST6B.tvd",
            "cim:ExcST6B.vamax",
            "cim:ExcST6B.vamin",
            "cim:ExcST6B.vilim",
            "cim:ExcST6B.vimax",
            "cim:ExcST6B.vimin",
            "cim:ExcST6B.vmult",
            "cim:ExcST6B.vrmax",
            "cim:ExcST6B.vrmin",
            "cim:ExcST6B.xc",
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
            if (!ExcST6B.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcST6B: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcST6B.attributeHTML(object, cimmenu);
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
export default ExcST6B
