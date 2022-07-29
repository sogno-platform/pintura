import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcST3A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcST3A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcST3A.vimax' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.vimax'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.vimax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.vimax'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.vimax'
                                                 );
        }
        if ('cim:ExcST3A.vimin' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.vimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.vimin'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.vimin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.vimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.vimin'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.vimin'
                                                 );
        }
        if ('cim:ExcST3A.kj' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.kj'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.kj'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.kj'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.kj'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.kj'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.kj'
                                                 );
        }
        if ('cim:ExcST3A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcST3A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcST3A.tb'
                                                 );
        }
        if ('cim:ExcST3A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcST3A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcST3A.tc'
                                                 );
        }
        if ('cim:ExcST3A.efdmax' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.efdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.efdmax'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.efdmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.efdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.efdmax'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.efdmax'
                                                 );
        }
        if ('cim:ExcST3A.km' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.km'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.km'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.km'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.km'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.km'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.km'
                                                 );
        }
        if ('cim:ExcST3A.tm' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.tm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.tm'],
                                                   'cim:Seconds',
                                                   'cim:ExcST3A.tm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.tm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.tm'],
                                                   'cim:Seconds',
                                                   'cim:ExcST3A.tm'
                                                 );
        }
        if ('cim:ExcST3A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.vrmax'
                                                 );
        }
        if ('cim:ExcST3A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.vrmin'
                                                 );
        }
        if ('cim:ExcST3A.kg' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.kg'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.kg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.kg'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.kg'
                                                 );
        }
        if ('cim:ExcST3A.kp' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.kp'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.kp'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.kp'
                                                 );
        }
        if ('cim:ExcST3A.thetap' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.thetap'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.thetap'],
                                                   'cim:AngleDegrees',
                                                   'cim:ExcST3A.thetap'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.thetap'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.thetap'],
                                                   'cim:AngleDegrees',
                                                   'cim:ExcST3A.thetap'
                                                 );
        }
        if ('cim:ExcST3A.ki' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.ki'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.ki'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.ki'
                                                 );
        }
        if ('cim:ExcST3A.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.kc'
                                                 );
        }
        if ('cim:ExcST3A.xl' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.xl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.xl'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.xl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.xl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.xl'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.xl'
                                                 );
        }
        if ('cim:ExcST3A.vbmax' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.vbmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.vbmax'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.vbmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.vbmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.vbmax'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.vbmax'
                                                 );
        }
        if ('cim:ExcST3A.vgmax' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.vgmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.vgmax'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.vgmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.vgmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.vgmax'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.vgmax'
                                                 );
        }
        if ('cim:ExcST3A.ks' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.ks'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.ks'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.ks'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.ks'
                                                 );
        }
        if ('cim:ExcST3A.ks1' in object) {
            attributeEntries['filledEntries']['cim:ExcST3A.ks1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.ks1'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.ks1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcST3A.ks1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcST3A.ks1'],
                                                   'cim:PU',
                                                   'cim:ExcST3A.ks1'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'vimax': [CGMESProfile.shortNames.DY, ],
						'vimin': [CGMESProfile.shortNames.DY, ],
						'kj': [CGMESProfile.shortNames.DY, ],
						'tb': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						'efdmax': [CGMESProfile.shortNames.DY, ],
						'km': [CGMESProfile.shortNames.DY, ],
						'tm': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						'kg': [CGMESProfile.shortNames.DY, ],
						'kp': [CGMESProfile.shortNames.DY, ],
						'thetap': [CGMESProfile.shortNames.DY, ],
						'ki': [CGMESProfile.shortNames.DY, ],
						'kc': [CGMESProfile.shortNames.DY, ],
						'xl': [CGMESProfile.shortNames.DY, ],
						'vbmax': [CGMESProfile.shortNames.DY, ],
						'vgmax': [CGMESProfile.shortNames.DY, ],
						'ks': [CGMESProfile.shortNames.DY, ],
						'ks1': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcST3A.vimax",
            "cim:ExcST3A.vimin",
            "cim:ExcST3A.kj",
            "cim:ExcST3A.tb",
            "cim:ExcST3A.tc",
            "cim:ExcST3A.efdmax",
            "cim:ExcST3A.km",
            "cim:ExcST3A.tm",
            "cim:ExcST3A.vrmax",
            "cim:ExcST3A.vrmin",
            "cim:ExcST3A.kg",
            "cim:ExcST3A.kp",
            "cim:ExcST3A.thetap",
            "cim:ExcST3A.ki",
            "cim:ExcST3A.kc",
            "cim:ExcST3A.xl",
            "cim:ExcST3A.vbmax",
            "cim:ExcST3A.vgmax",
            "cim:ExcST3A.ks",
            "cim:ExcST3A.ks1",
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
            if (!ExcST3A.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcST3A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcST3A.attributeHTML(object, cimmenu);
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
export default ExcST3A
