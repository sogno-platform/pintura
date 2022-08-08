import templates from "../../templates/index.js"
import OverexcitationLimiterDynamics from "./OverexcitationLimiterDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class OverexcLimIEEE extends OverexcitationLimiterDynamics {

    static attributeHTML(object, cimmenu, classType="OverexcLimIEEE") {
        let attributeEntries = OverexcitationLimiterDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:OverexcLimIEEE.itfpu' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimIEEE.itfpu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimIEEE.itfpu'],
                                                   'cim:PU',
                                                   'cim:OverexcLimIEEE.itfpu'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimIEEE.itfpu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimIEEE.itfpu'],
                                                   'cim:PU',
                                                   'cim:OverexcLimIEEE.itfpu'
                                                 );
        }
        if ('cim:OverexcLimIEEE.ifdmax' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimIEEE.ifdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimIEEE.ifdmax'],
                                                   'cim:PU',
                                                   'cim:OverexcLimIEEE.ifdmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimIEEE.ifdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimIEEE.ifdmax'],
                                                   'cim:PU',
                                                   'cim:OverexcLimIEEE.ifdmax'
                                                 );
        }
        if ('cim:OverexcLimIEEE.ifdlim' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimIEEE.ifdlim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimIEEE.ifdlim'],
                                                   'cim:PU',
                                                   'cim:OverexcLimIEEE.ifdlim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimIEEE.ifdlim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimIEEE.ifdlim'],
                                                   'cim:PU',
                                                   'cim:OverexcLimIEEE.ifdlim'
                                                 );
        }
        if ('cim:OverexcLimIEEE.hyst' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimIEEE.hyst'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimIEEE.hyst'],
                                                   'cim:PU',
                                                   'cim:OverexcLimIEEE.hyst'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimIEEE.hyst'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimIEEE.hyst'],
                                                   'cim:PU',
                                                   'cim:OverexcLimIEEE.hyst'
                                                 );
        }
        if ('cim:OverexcLimIEEE.kcd' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimIEEE.kcd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimIEEE.kcd'],
                                                   'cim:PU',
                                                   'cim:OverexcLimIEEE.kcd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimIEEE.kcd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimIEEE.kcd'],
                                                   'cim:PU',
                                                   'cim:OverexcLimIEEE.kcd'
                                                 );
        }
        if ('cim:OverexcLimIEEE.kramp' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimIEEE.kramp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimIEEE.kramp'],
                                                   'cim:Simple_Float',
                                                   'cim:OverexcLimIEEE.kramp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimIEEE.kramp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimIEEE.kramp'],
                                                   'cim:Simple_Float',
                                                   'cim:OverexcLimIEEE.kramp'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'itfpu': [CGMESProfile.shortNames.DY, ],
						'ifdmax': [CGMESProfile.shortNames.DY, ],
						'ifdlim': [CGMESProfile.shortNames.DY, ],
						'hyst': [CGMESProfile.shortNames.DY, ],
						'kcd': [CGMESProfile.shortNames.DY, ],
						'kramp': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:OverexcLimIEEE.itfpu",
            "cim:OverexcLimIEEE.ifdmax",
            "cim:OverexcLimIEEE.ifdlim",
            "cim:OverexcLimIEEE.hyst",
            "cim:OverexcLimIEEE.kcd",
            "cim:OverexcLimIEEE.kramp",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( OverexcitationLimiterDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!OverexcLimIEEE.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class OverexcLimIEEE: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = OverexcLimIEEE.attributeHTML(object, cimmenu);
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
export default OverexcLimIEEE
