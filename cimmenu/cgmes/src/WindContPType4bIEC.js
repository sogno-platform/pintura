import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class WindContPType4bIEC extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="WindContPType4bIEC") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:WindContPType4bIEC.dpmax' in object) {
            attributeEntries['filledEntries']['cim:WindContPType4bIEC.dpmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType4bIEC.dpmax'],
                                                   'cim:PU',
                                                   'cim:WindContPType4bIEC.dpmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType4bIEC.dpmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType4bIEC.dpmax'],
                                                   'cim:PU',
                                                   'cim:WindContPType4bIEC.dpmax'
                                                 );
        }
        if ('cim:WindContPType4bIEC.tpaero' in object) {
            attributeEntries['filledEntries']['cim:WindContPType4bIEC.tpaero'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType4bIEC.tpaero'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType4bIEC.tpaero'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType4bIEC.tpaero'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType4bIEC.tpaero'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType4bIEC.tpaero'
                                                 );
        }
        if ('cim:WindContPType4bIEC.tpord' in object) {
            attributeEntries['filledEntries']['cim:WindContPType4bIEC.tpord'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType4bIEC.tpord'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType4bIEC.tpord'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType4bIEC.tpord'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType4bIEC.tpord'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType4bIEC.tpord'
                                                 );
        }
        if ('cim:WindContPType4bIEC.tufilt' in object) {
            attributeEntries['filledEntries']['cim:WindContPType4bIEC.tufilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType4bIEC.tufilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType4bIEC.tufilt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindContPType4bIEC.tufilt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindContPType4bIEC.tufilt'],
                                                   'cim:Seconds',
                                                   'cim:WindContPType4bIEC.tufilt'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindContPType4bIEC.dpmax",
            "cim:WindContPType4bIEC.tpaero",
            "cim:WindContPType4bIEC.tpord",
            "cim:WindContPType4bIEC.tufilt",
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
            if (!WindContPType4bIEC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindContPType4bIEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindContPType4bIEC.attributeHTML(object, cimmenu);
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
export default WindContPType4bIEC
