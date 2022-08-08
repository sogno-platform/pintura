import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcAC4A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcAC4A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcAC4A.vimax' in object) {
            attributeEntries['filledEntries']['cim:ExcAC4A.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC4A.vimax'],
                                                   'cim:PU',
                                                   'cim:ExcAC4A.vimax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC4A.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC4A.vimax'],
                                                   'cim:PU',
                                                   'cim:ExcAC4A.vimax'
                                                 );
        }
        if ('cim:ExcAC4A.vimin' in object) {
            attributeEntries['filledEntries']['cim:ExcAC4A.vimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC4A.vimin'],
                                                   'cim:PU',
                                                   'cim:ExcAC4A.vimin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC4A.vimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC4A.vimin'],
                                                   'cim:PU',
                                                   'cim:ExcAC4A.vimin'
                                                 );
        }
        if ('cim:ExcAC4A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcAC4A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC4A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC4A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC4A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC4A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC4A.tc'
                                                 );
        }
        if ('cim:ExcAC4A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcAC4A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC4A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC4A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC4A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC4A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC4A.tb'
                                                 );
        }
        if ('cim:ExcAC4A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcAC4A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC4A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcAC4A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC4A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC4A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcAC4A.ka'
                                                 );
        }
        if ('cim:ExcAC4A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcAC4A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC4A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC4A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC4A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC4A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC4A.ta'
                                                 );
        }
        if ('cim:ExcAC4A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcAC4A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC4A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcAC4A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC4A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC4A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcAC4A.vrmax'
                                                 );
        }
        if ('cim:ExcAC4A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcAC4A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC4A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcAC4A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC4A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC4A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcAC4A.vrmin'
                                                 );
        }
        if ('cim:ExcAC4A.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcAC4A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC4A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcAC4A.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC4A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC4A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcAC4A.kc'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'vimax': [CGMESProfile.shortNames.DY, ],
						'vimin': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						'tb': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						'kc': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcAC4A.vimax",
            "cim:ExcAC4A.vimin",
            "cim:ExcAC4A.tc",
            "cim:ExcAC4A.tb",
            "cim:ExcAC4A.ka",
            "cim:ExcAC4A.ta",
            "cim:ExcAC4A.vrmax",
            "cim:ExcAC4A.vrmin",
            "cim:ExcAC4A.kc",
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
            if (!ExcAC4A.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcAC4A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcAC4A.attributeHTML(object, cimmenu);
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
export default ExcAC4A
