import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class WindContPType4aIEC extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="WindContPType4aIEC") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:WindContPType4aIEC.dpmax' in object) {
            attributeEntries['filledEntries']['cim:WindContPType4aIEC.dpmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType4aIEC.dpmax'],
                                                   'cim:PU',
                                                   'cim:WindContPType4aIEC.dpmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType4aIEC.dpmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType4aIEC.dpmax'],
                                                   'cim:PU',
                                                   'cim:WindContPType4aIEC.dpmax'
                                                 );
        }
        if ('cim:WindContPType4aIEC.tpord' in object) {
            attributeEntries['filledEntries']['cim:WindContPType4aIEC.tpord'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType4aIEC.tpord'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType4aIEC.tpord'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType4aIEC.tpord'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType4aIEC.tpord'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType4aIEC.tpord'
                                                 );
        }
        if ('cim:WindContPType4aIEC.tufilt' in object) {
            attributeEntries['filledEntries']['cim:WindContPType4aIEC.tufilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType4aIEC.tufilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType4aIEC.tufilt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType4aIEC.tufilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType4aIEC.tufilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType4aIEC.tufilt'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'dpmax': [CGMESProfile.shortNames.DY, ],
						'tpord': [CGMESProfile.shortNames.DY, ],
						'tufilt': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindContPType4aIEC.dpmax",
            "cim:WindContPType4aIEC.tpord",
            "cim:WindContPType4aIEC.tufilt",
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
            if (!WindContPType4aIEC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindContPType4aIEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindContPType4aIEC.attributeHTML(object, cimmenu);
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
export default WindContPType4aIEC
