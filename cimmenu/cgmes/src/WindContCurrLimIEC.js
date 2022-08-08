import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class WindContCurrLimIEC extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="WindContCurrLimIEC") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:WindContCurrLimIEC.imax' in object) {
            attributeEntries['filledEntries']['cim:WindContCurrLimIEC.imax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContCurrLimIEC.imax'],
                                                   'cim:PU',
                                                   'cim:WindContCurrLimIEC.imax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContCurrLimIEC.imax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContCurrLimIEC.imax'],
                                                   'cim:PU',
                                                   'cim:WindContCurrLimIEC.imax'
                                                 );
        }
        if ('cim:WindContCurrLimIEC.imaxdip' in object) {
            attributeEntries['filledEntries']['cim:WindContCurrLimIEC.imaxdip'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContCurrLimIEC.imaxdip'],
                                                   'cim:PU',
                                                   'cim:WindContCurrLimIEC.imaxdip'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContCurrLimIEC.imaxdip'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContCurrLimIEC.imaxdip'],
                                                   'cim:PU',
                                                   'cim:WindContCurrLimIEC.imaxdip'
                                                 );
        }
        if ('cim:WindContCurrLimIEC.mdfslim' in object) {
            attributeEntries['filledEntries']['cim:WindContCurrLimIEC.mdfslim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContCurrLimIEC.mdfslim'],
                                                   'cim:Boolean',
                                                   'cim:WindContCurrLimIEC.mdfslim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContCurrLimIEC.mdfslim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContCurrLimIEC.mdfslim'],
                                                   'cim:Boolean',
                                                   'cim:WindContCurrLimIEC.mdfslim'
                                                 );
        }
        if ('cim:WindContCurrLimIEC.mqpri' in object) {
            attributeEntries['filledEntries']['cim:WindContCurrLimIEC.mqpri'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContCurrLimIEC.mqpri'],
                                                   'cim:Boolean',
                                                   'cim:WindContCurrLimIEC.mqpri'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContCurrLimIEC.mqpri'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContCurrLimIEC.mqpri'],
                                                   'cim:Boolean',
                                                   'cim:WindContCurrLimIEC.mqpri'
                                                 );
        }
        if ('cim:WindContCurrLimIEC.tufilt' in object) {
            attributeEntries['filledEntries']['cim:WindContCurrLimIEC.tufilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContCurrLimIEC.tufilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContCurrLimIEC.tufilt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContCurrLimIEC.tufilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContCurrLimIEC.tufilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContCurrLimIEC.tufilt'
                                                 );
        }
        if ('cim:WindContCurrLimIEC.WindDynamicsLookupTable' in object) {
            attributeEntries['filledEntries']['cim:WindContCurrLimIEC.WindDynamicsLookupTable'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContCurrLimIEC.WindDynamicsLookupTable'],
                                                   'cim:WindDynamicsLookupTable',
                                                   'cim:WindContCurrLimIEC.WindDynamicsLookupTable'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContCurrLimIEC.WindDynamicsLookupTable'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContCurrLimIEC.WindDynamicsLookupTable'],
                                                   'cim:WindDynamicsLookupTable',
                                                   'cim:WindContCurrLimIEC.WindDynamicsLookupTable'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'imax': [CGMESProfile.shortNames.DY, ],
						'imaxdip': [CGMESProfile.shortNames.DY, ],
						'mdfslim': [CGMESProfile.shortNames.DY, ],
						'mqpri': [CGMESProfile.shortNames.DY, ],
						'tufilt': [CGMESProfile.shortNames.DY, ],
						'WindDynamicsLookupTable': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindContCurrLimIEC.imax",
            "cim:WindContCurrLimIEC.imaxdip",
            "cim:WindContCurrLimIEC.mdfslim",
            "cim:WindContCurrLimIEC.mqpri",
            "cim:WindContCurrLimIEC.tufilt",
            "cim:WindContCurrLimIEC.WindDynamicsLookupTable",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( IdentifiedObject.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!WindContCurrLimIEC.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class WindContCurrLimIEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindContCurrLimIEC.attributeHTML(object, cimmenu);
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
export default WindContCurrLimIEC
