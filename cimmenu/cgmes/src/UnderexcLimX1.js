import templates from "../../templates/index.js"
import UnderexcitationLimiterDynamics from "./UnderexcitationLimiterDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class UnderexcLimX1 extends UnderexcitationLimiterDynamics {

    static attributeHTML(object, cimmenu, classType="UnderexcLimX1") {
        let attributeEntries = UnderexcitationLimiterDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:UnderexcLimX1.kf2' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimX1.kf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX1.kf2'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimX1.kf2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimX1.kf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX1.kf2'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimX1.kf2'
                                                 );
        }
        if ('cim:UnderexcLimX1.tf2' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimX1.tf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX1.tf2'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimX1.tf2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimX1.tf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX1.tf2'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimX1.tf2'
                                                 );
        }
        if ('cim:UnderexcLimX1.km' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimX1.km'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX1.km'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimX1.km'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimX1.km'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX1.km'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimX1.km'
                                                 );
        }
        if ('cim:UnderexcLimX1.tm' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimX1.tm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX1.tm'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimX1.tm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimX1.tm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX1.tm'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimX1.tm'
                                                 );
        }
        if ('cim:UnderexcLimX1.melmax' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimX1.melmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX1.melmax'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimX1.melmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimX1.melmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX1.melmax'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimX1.melmax'
                                                 );
        }
        if ('cim:UnderexcLimX1.k' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimX1.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX1.k'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimX1.k'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimX1.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX1.k'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimX1.k'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'kf2': [CGMESProfile.shortNames.DY, ],
						'tf2': [CGMESProfile.shortNames.DY, ],
						'km': [CGMESProfile.shortNames.DY, ],
						'tm': [CGMESProfile.shortNames.DY, ],
						'melmax': [CGMESProfile.shortNames.DY, ],
						'k': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:UnderexcLimX1.kf2",
            "cim:UnderexcLimX1.tf2",
            "cim:UnderexcLimX1.km",
            "cim:UnderexcLimX1.tm",
            "cim:UnderexcLimX1.melmax",
            "cim:UnderexcLimX1.k",
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
            if (!UnderexcLimX1.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class UnderexcLimX1: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = UnderexcLimX1.attributeHTML(object, cimmenu);
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
export default UnderexcLimX1
