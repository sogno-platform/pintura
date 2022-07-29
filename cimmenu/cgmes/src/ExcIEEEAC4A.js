import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcIEEEAC4A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcIEEEAC4A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcIEEEAC4A.vimax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC4A.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC4A.vimax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC4A.vimax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC4A.vimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC4A.vimax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC4A.vimax'
                                                 );
        }
        if ('cim:ExcIEEEAC4A.vimin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC4A.vimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC4A.vimin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC4A.vimin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC4A.vimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC4A.vimin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC4A.vimin'
                                                 );
        }
        if ('cim:ExcIEEEAC4A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC4A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC4A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC4A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC4A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC4A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC4A.tc'
                                                 );
        }
        if ('cim:ExcIEEEAC4A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC4A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC4A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC4A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC4A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC4A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC4A.tb'
                                                 );
        }
        if ('cim:ExcIEEEAC4A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC4A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC4A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC4A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC4A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC4A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC4A.ka'
                                                 );
        }
        if ('cim:ExcIEEEAC4A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC4A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC4A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC4A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC4A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC4A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEAC4A.ta'
                                                 );
        }
        if ('cim:ExcIEEEAC4A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC4A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC4A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC4A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC4A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC4A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC4A.vrmax'
                                                 );
        }
        if ('cim:ExcIEEEAC4A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC4A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC4A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC4A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC4A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC4A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC4A.vrmin'
                                                 );
        }
        if ('cim:ExcIEEEAC4A.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEAC4A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC4A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC4A.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEAC4A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEAC4A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEAC4A.kc'
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
            "cim:ExcIEEEAC4A.vimax",
            "cim:ExcIEEEAC4A.vimin",
            "cim:ExcIEEEAC4A.tc",
            "cim:ExcIEEEAC4A.tb",
            "cim:ExcIEEEAC4A.ka",
            "cim:ExcIEEEAC4A.ta",
            "cim:ExcIEEEAC4A.vrmax",
            "cim:ExcIEEEAC4A.vrmin",
            "cim:ExcIEEEAC4A.kc",
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
            if (!ExcIEEEAC4A.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcIEEEAC4A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcIEEEAC4A.attributeHTML(object, cimmenu);
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
export default ExcIEEEAC4A
