import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class WindProtectionIEC extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="WindProtectionIEC") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:WindProtectionIEC.fover' in object) {
            attributeEntries['filledEntries']['cim:WindProtectionIEC.fover'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindProtectionIEC.fover'],
                                                   'cim:PU',
                                                   'cim:WindProtectionIEC.fover'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindProtectionIEC.fover'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindProtectionIEC.fover'],
                                                   'cim:PU',
                                                   'cim:WindProtectionIEC.fover'
                                                 );
        }
        if ('cim:WindProtectionIEC.funder' in object) {
            attributeEntries['filledEntries']['cim:WindProtectionIEC.funder'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindProtectionIEC.funder'],
                                                   'cim:PU',
                                                   'cim:WindProtectionIEC.funder'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindProtectionIEC.funder'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindProtectionIEC.funder'],
                                                   'cim:PU',
                                                   'cim:WindProtectionIEC.funder'
                                                 );
        }
        if ('cim:WindProtectionIEC.tfover' in object) {
            attributeEntries['filledEntries']['cim:WindProtectionIEC.tfover'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindProtectionIEC.tfover'],
                                                   'cim:Seconds',
                                                   'cim:WindProtectionIEC.tfover'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindProtectionIEC.tfover'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindProtectionIEC.tfover'],
                                                   'cim:Seconds',
                                                   'cim:WindProtectionIEC.tfover'
                                                 );
        }
        if ('cim:WindProtectionIEC.tfunder' in object) {
            attributeEntries['filledEntries']['cim:WindProtectionIEC.tfunder'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindProtectionIEC.tfunder'],
                                                   'cim:Seconds',
                                                   'cim:WindProtectionIEC.tfunder'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindProtectionIEC.tfunder'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindProtectionIEC.tfunder'],
                                                   'cim:Seconds',
                                                   'cim:WindProtectionIEC.tfunder'
                                                 );
        }
        if ('cim:WindProtectionIEC.tuover' in object) {
            attributeEntries['filledEntries']['cim:WindProtectionIEC.tuover'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindProtectionIEC.tuover'],
                                                   'cim:Seconds',
                                                   'cim:WindProtectionIEC.tuover'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindProtectionIEC.tuover'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindProtectionIEC.tuover'],
                                                   'cim:Seconds',
                                                   'cim:WindProtectionIEC.tuover'
                                                 );
        }
        if ('cim:WindProtectionIEC.tuunder' in object) {
            attributeEntries['filledEntries']['cim:WindProtectionIEC.tuunder'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindProtectionIEC.tuunder'],
                                                   'cim:Seconds',
                                                   'cim:WindProtectionIEC.tuunder'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindProtectionIEC.tuunder'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindProtectionIEC.tuunder'],
                                                   'cim:Seconds',
                                                   'cim:WindProtectionIEC.tuunder'
                                                 );
        }
        if ('cim:WindProtectionIEC.uover' in object) {
            attributeEntries['filledEntries']['cim:WindProtectionIEC.uover'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindProtectionIEC.uover'],
                                                   'cim:PU',
                                                   'cim:WindProtectionIEC.uover'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindProtectionIEC.uover'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindProtectionIEC.uover'],
                                                   'cim:PU',
                                                   'cim:WindProtectionIEC.uover'
                                                 );
        }
        if ('cim:WindProtectionIEC.uunder' in object) {
            attributeEntries['filledEntries']['cim:WindProtectionIEC.uunder'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindProtectionIEC.uunder'],
                                                   'cim:PU',
                                                   'cim:WindProtectionIEC.uunder'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindProtectionIEC.uunder'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindProtectionIEC.uunder'],
                                                   'cim:PU',
                                                   'cim:WindProtectionIEC.uunder'
                                                 );
        }
        if ('cim:WindProtectionIEC.WindTurbineType1or2IEC' in object) {
            attributeEntries['filledEntries']['cim:WindProtectionIEC.WindTurbineType1or2IEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindProtectionIEC.WindTurbineType1or2IEC'],
                                                   'cim:WindTurbineType1or2IEC',
                                                   'cim:WindProtectionIEC.WindTurbineType1or2IEC'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindProtectionIEC.WindTurbineType1or2IEC'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindProtectionIEC.WindTurbineType1or2IEC'],
                                                   'cim:WindTurbineType1or2IEC',
                                                   'cim:WindProtectionIEC.WindTurbineType1or2IEC'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'fover': [CGMESProfile.shortNames.DY, ],
						'funder': [CGMESProfile.shortNames.DY, ],
						'tfover': [CGMESProfile.shortNames.DY, ],
						'tfunder': [CGMESProfile.shortNames.DY, ],
						'tuover': [CGMESProfile.shortNames.DY, ],
						'tuunder': [CGMESProfile.shortNames.DY, ],
						'uover': [CGMESProfile.shortNames.DY, ],
						'uunder': [CGMESProfile.shortNames.DY, ],
						'WindTurbineType1or2IEC': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindProtectionIEC.fover",
            "cim:WindProtectionIEC.funder",
            "cim:WindProtectionIEC.tfover",
            "cim:WindProtectionIEC.tfunder",
            "cim:WindProtectionIEC.tuover",
            "cim:WindProtectionIEC.tuunder",
            "cim:WindProtectionIEC.uover",
            "cim:WindProtectionIEC.uunder",
            "cim:WindProtectionIEC.WindTurbineType1or2IEC",
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
            if (!WindProtectionIEC.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class WindProtectionIEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindProtectionIEC.attributeHTML(object, cimmenu);
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
export default WindProtectionIEC
