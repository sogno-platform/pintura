import templates from "../../templates/index.js"
import UnderexcitationLimiterDynamics from "./UnderexcitationLimiterDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class UnderexcLimIEEE1 extends UnderexcitationLimiterDynamics {

    static attributeHTML(object, cimmenu, classType="UnderexcLimIEEE1") {
        let attributeEntries = UnderexcitationLimiterDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:UnderexcLimIEEE1.kur' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE1.kur'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.kur'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.kur'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE1.kur'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.kur'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.kur'
                                                 );
        }
        if ('cim:UnderexcLimIEEE1.kuc' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE1.kuc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.kuc'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.kuc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE1.kuc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.kuc'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.kuc'
                                                 );
        }
        if ('cim:UnderexcLimIEEE1.kuf' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE1.kuf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.kuf'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.kuf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE1.kuf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.kuf'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.kuf'
                                                 );
        }
        if ('cim:UnderexcLimIEEE1.vurmax' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE1.vurmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.vurmax'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.vurmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE1.vurmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.vurmax'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.vurmax'
                                                 );
        }
        if ('cim:UnderexcLimIEEE1.vucmax' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE1.vucmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.vucmax'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.vucmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE1.vucmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.vucmax'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.vucmax'
                                                 );
        }
        if ('cim:UnderexcLimIEEE1.kui' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE1.kui'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.kui'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.kui'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE1.kui'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.kui'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.kui'
                                                 );
        }
        if ('cim:UnderexcLimIEEE1.kul' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE1.kul'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.kul'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.kul'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE1.kul'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.kul'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.kul'
                                                 );
        }
        if ('cim:UnderexcLimIEEE1.vuimax' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE1.vuimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.vuimax'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.vuimax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE1.vuimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.vuimax'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.vuimax'
                                                 );
        }
        if ('cim:UnderexcLimIEEE1.vuimin' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE1.vuimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.vuimin'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.vuimin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE1.vuimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.vuimin'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.vuimin'
                                                 );
        }
        if ('cim:UnderexcLimIEEE1.tu1' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE1.tu1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.tu1'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE1.tu1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE1.tu1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.tu1'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE1.tu1'
                                                 );
        }
        if ('cim:UnderexcLimIEEE1.tu2' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE1.tu2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.tu2'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE1.tu2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE1.tu2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.tu2'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE1.tu2'
                                                 );
        }
        if ('cim:UnderexcLimIEEE1.tu3' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE1.tu3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.tu3'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE1.tu3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE1.tu3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.tu3'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE1.tu3'
                                                 );
        }
        if ('cim:UnderexcLimIEEE1.tu4' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE1.tu4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.tu4'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE1.tu4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE1.tu4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.tu4'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE1.tu4'
                                                 );
        }
        if ('cim:UnderexcLimIEEE1.vulmax' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE1.vulmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.vulmax'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.vulmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE1.vulmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.vulmax'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.vulmax'
                                                 );
        }
        if ('cim:UnderexcLimIEEE1.vulmin' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE1.vulmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.vulmin'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.vulmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE1.vulmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE1.vulmin'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE1.vulmin'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'kur': [CGMESProfile.shortNames.DY, ],
						'kuc': [CGMESProfile.shortNames.DY, ],
						'kuf': [CGMESProfile.shortNames.DY, ],
						'vurmax': [CGMESProfile.shortNames.DY, ],
						'vucmax': [CGMESProfile.shortNames.DY, ],
						'kui': [CGMESProfile.shortNames.DY, ],
						'kul': [CGMESProfile.shortNames.DY, ],
						'vuimax': [CGMESProfile.shortNames.DY, ],
						'vuimin': [CGMESProfile.shortNames.DY, ],
						'tu1': [CGMESProfile.shortNames.DY, ],
						'tu2': [CGMESProfile.shortNames.DY, ],
						'tu3': [CGMESProfile.shortNames.DY, ],
						'tu4': [CGMESProfile.shortNames.DY, ],
						'vulmax': [CGMESProfile.shortNames.DY, ],
						'vulmin': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:UnderexcLimIEEE1.kur",
            "cim:UnderexcLimIEEE1.kuc",
            "cim:UnderexcLimIEEE1.kuf",
            "cim:UnderexcLimIEEE1.vurmax",
            "cim:UnderexcLimIEEE1.vucmax",
            "cim:UnderexcLimIEEE1.kui",
            "cim:UnderexcLimIEEE1.kul",
            "cim:UnderexcLimIEEE1.vuimax",
            "cim:UnderexcLimIEEE1.vuimin",
            "cim:UnderexcLimIEEE1.tu1",
            "cim:UnderexcLimIEEE1.tu2",
            "cim:UnderexcLimIEEE1.tu3",
            "cim:UnderexcLimIEEE1.tu4",
            "cim:UnderexcLimIEEE1.vulmax",
            "cim:UnderexcLimIEEE1.vulmin",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( UnderexcitationLimiterDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!UnderexcLimIEEE1.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class UnderexcLimIEEE1: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = UnderexcLimIEEE1.attributeHTML(object, cimmenu);
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
export default UnderexcLimIEEE1
