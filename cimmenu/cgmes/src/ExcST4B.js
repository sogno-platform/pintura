import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcST4B extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcST4B") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcST4B.kpr' in object) {
            attributeEntries['filledEntries']['cim:ExcST4B.kpr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.kpr'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.kpr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST4B.kpr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.kpr'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.kpr'
                                                 );
        }
        if ('cim:ExcST4B.kir' in object) {
            attributeEntries['filledEntries']['cim:ExcST4B.kir'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.kir'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.kir'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST4B.kir'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.kir'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.kir'
                                                 );
        }
        if ('cim:ExcST4B.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcST4B.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcST4B.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST4B.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcST4B.ta'
                                                 );
        }
        if ('cim:ExcST4B.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcST4B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST4B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.vrmax'
                                                 );
        }
        if ('cim:ExcST4B.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcST4B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST4B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.vrmin'
                                                 );
        }
        if ('cim:ExcST4B.kpm' in object) {
            attributeEntries['filledEntries']['cim:ExcST4B.kpm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.kpm'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.kpm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST4B.kpm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.kpm'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.kpm'
                                                 );
        }
        if ('cim:ExcST4B.kim' in object) {
            attributeEntries['filledEntries']['cim:ExcST4B.kim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.kim'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.kim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST4B.kim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.kim'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.kim'
                                                 );
        }
        if ('cim:ExcST4B.vmmax' in object) {
            attributeEntries['filledEntries']['cim:ExcST4B.vmmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.vmmax'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.vmmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST4B.vmmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.vmmax'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.vmmax'
                                                 );
        }
        if ('cim:ExcST4B.vmmin' in object) {
            attributeEntries['filledEntries']['cim:ExcST4B.vmmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.vmmin'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.vmmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST4B.vmmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.vmmin'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.vmmin'
                                                 );
        }
        if ('cim:ExcST4B.kg' in object) {
            attributeEntries['filledEntries']['cim:ExcST4B.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.kg'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.kg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST4B.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.kg'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.kg'
                                                 );
        }
        if ('cim:ExcST4B.kp' in object) {
            attributeEntries['filledEntries']['cim:ExcST4B.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.kp'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST4B.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.kp'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.kp'
                                                 );
        }
        if ('cim:ExcST4B.thetap' in object) {
            attributeEntries['filledEntries']['cim:ExcST4B.thetap'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.thetap'],
                                                   'cim:AngleDegrees',
                                                   'cim:ExcST4B.thetap'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST4B.thetap'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.thetap'],
                                                   'cim:AngleDegrees',
                                                   'cim:ExcST4B.thetap'
                                                 );
        }
        if ('cim:ExcST4B.ki' in object) {
            attributeEntries['filledEntries']['cim:ExcST4B.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.ki'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST4B.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.ki'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.ki'
                                                 );
        }
        if ('cim:ExcST4B.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcST4B.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.kc'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST4B.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.kc'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.kc'
                                                 );
        }
        if ('cim:ExcST4B.xl' in object) {
            attributeEntries['filledEntries']['cim:ExcST4B.xl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.xl'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.xl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST4B.xl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.xl'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.xl'
                                                 );
        }
        if ('cim:ExcST4B.vbmax' in object) {
            attributeEntries['filledEntries']['cim:ExcST4B.vbmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.vbmax'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.vbmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST4B.vbmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.vbmax'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.vbmax'
                                                 );
        }
        if ('cim:ExcST4B.vgmax' in object) {
            attributeEntries['filledEntries']['cim:ExcST4B.vgmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.vgmax'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.vgmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST4B.vgmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.vgmax'],
                                                   'cim:PU',
                                                   'cim:ExcST4B.vgmax'
                                                 );
        }
        if ('cim:ExcST4B.uel' in object) {
            attributeEntries['filledEntries']['cim:ExcST4B.uel'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.uel'],
                                                   'cim:Boolean',
                                                   'cim:ExcST4B.uel'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST4B.uel'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.uel'],
                                                   'cim:Boolean',
                                                   'cim:ExcST4B.uel'
                                                 );
        }
        if ('cim:ExcST4B.lvgate' in object) {
            attributeEntries['filledEntries']['cim:ExcST4B.lvgate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.lvgate'],
                                                   'cim:Boolean',
                                                   'cim:ExcST4B.lvgate'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST4B.lvgate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST4B.lvgate'],
                                                   'cim:Boolean',
                                                   'cim:ExcST4B.lvgate'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'kpr': [CGMESProfile.shortNames.DY, ],
						'kir': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						'kpm': [CGMESProfile.shortNames.DY, ],
						'kim': [CGMESProfile.shortNames.DY, ],
						'vmmax': [CGMESProfile.shortNames.DY, ],
						'vmmin': [CGMESProfile.shortNames.DY, ],
						'kg': [CGMESProfile.shortNames.DY, ],
						'kp': [CGMESProfile.shortNames.DY, ],
						'thetap': [CGMESProfile.shortNames.DY, ],
						'ki': [CGMESProfile.shortNames.DY, ],
						'kc': [CGMESProfile.shortNames.DY, ],
						'xl': [CGMESProfile.shortNames.DY, ],
						'vbmax': [CGMESProfile.shortNames.DY, ],
						'vgmax': [CGMESProfile.shortNames.DY, ],
						'uel': [CGMESProfile.shortNames.DY, ],
						'lvgate': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcST4B.kpr",
            "cim:ExcST4B.kir",
            "cim:ExcST4B.ta",
            "cim:ExcST4B.vrmax",
            "cim:ExcST4B.vrmin",
            "cim:ExcST4B.kpm",
            "cim:ExcST4B.kim",
            "cim:ExcST4B.vmmax",
            "cim:ExcST4B.vmmin",
            "cim:ExcST4B.kg",
            "cim:ExcST4B.kp",
            "cim:ExcST4B.thetap",
            "cim:ExcST4B.ki",
            "cim:ExcST4B.kc",
            "cim:ExcST4B.xl",
            "cim:ExcST4B.vbmax",
            "cim:ExcST4B.vgmax",
            "cim:ExcST4B.uel",
            "cim:ExcST4B.lvgate",
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
            if (!ExcST4B.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcST4B: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcST4B.attributeHTML(object, cimmenu);
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
export default ExcST4B
