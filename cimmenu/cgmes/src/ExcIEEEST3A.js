import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcIEEEST3A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcIEEEST3A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcIEEEST3A.vimax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.vimax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.vimax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.vimax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.vimax'
                                                 );
        }
        if ('cim:ExcIEEEST3A.vimin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.vimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.vimin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.vimin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.vimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.vimin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.vimin'
                                                 );
        }
        if ('cim:ExcIEEEST3A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.ka'
                                                 );
        }
        if ('cim:ExcIEEEST3A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST3A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST3A.ta'
                                                 );
        }
        if ('cim:ExcIEEEST3A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST3A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST3A.tb'
                                                 );
        }
        if ('cim:ExcIEEEST3A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST3A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST3A.tc'
                                                 );
        }
        if ('cim:ExcIEEEST3A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.vrmax'
                                                 );
        }
        if ('cim:ExcIEEEST3A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.vrmin'
                                                 );
        }
        if ('cim:ExcIEEEST3A.km' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.km'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.km'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.km'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.km'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.km'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.km'
                                                 );
        }
        if ('cim:ExcIEEEST3A.tm' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.tm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.tm'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST3A.tm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.tm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.tm'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST3A.tm'
                                                 );
        }
        if ('cim:ExcIEEEST3A.vmmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.vmmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.vmmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.vmmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.vmmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.vmmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.vmmax'
                                                 );
        }
        if ('cim:ExcIEEEST3A.vmmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.vmmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.vmmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.vmmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.vmmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.vmmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.vmmin'
                                                 );
        }
        if ('cim:ExcIEEEST3A.kg' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.kg'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.kg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.kg'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.kg'
                                                 );
        }
        if ('cim:ExcIEEEST3A.kp' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.kp'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.kp'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.kp'
                                                 );
        }
        if ('cim:ExcIEEEST3A.thetap' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.thetap'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.thetap'],
                                                   'cim:AngleDegrees',
                                                   'cim:ExcIEEEST3A.thetap'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.thetap'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.thetap'],
                                                   'cim:AngleDegrees',
                                                   'cim:ExcIEEEST3A.thetap'
                                                 );
        }
        if ('cim:ExcIEEEST3A.ki' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.ki'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.ki'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.ki'
                                                 );
        }
        if ('cim:ExcIEEEST3A.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.kc'
                                                 );
        }
        if ('cim:ExcIEEEST3A.xl' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.xl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.xl'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.xl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.xl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.xl'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.xl'
                                                 );
        }
        if ('cim:ExcIEEEST3A.vbmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.vbmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.vbmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.vbmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.vbmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.vbmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.vbmax'
                                                 );
        }
        if ('cim:ExcIEEEST3A.vgmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST3A.vgmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.vgmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.vgmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST3A.vgmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST3A.vgmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST3A.vgmax'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'vimax': [CGMESProfile.shortNames.DY, ],
						'vimin': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'tb': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						'km': [CGMESProfile.shortNames.DY, ],
						'tm': [CGMESProfile.shortNames.DY, ],
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
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcIEEEST3A.vimax",
            "cim:ExcIEEEST3A.vimin",
            "cim:ExcIEEEST3A.ka",
            "cim:ExcIEEEST3A.ta",
            "cim:ExcIEEEST3A.tb",
            "cim:ExcIEEEST3A.tc",
            "cim:ExcIEEEST3A.vrmax",
            "cim:ExcIEEEST3A.vrmin",
            "cim:ExcIEEEST3A.km",
            "cim:ExcIEEEST3A.tm",
            "cim:ExcIEEEST3A.vmmax",
            "cim:ExcIEEEST3A.vmmin",
            "cim:ExcIEEEST3A.kg",
            "cim:ExcIEEEST3A.kp",
            "cim:ExcIEEEST3A.thetap",
            "cim:ExcIEEEST3A.ki",
            "cim:ExcIEEEST3A.kc",
            "cim:ExcIEEEST3A.xl",
            "cim:ExcIEEEST3A.vbmax",
            "cim:ExcIEEEST3A.vgmax",
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
            if (!ExcIEEEST3A.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcIEEEST3A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcIEEEST3A.attributeHTML(object, cimmenu);
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
export default ExcIEEEST3A
