import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class WindAeroLinearIEC extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="WindAeroLinearIEC") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:WindAeroLinearIEC.dpomega' in object) {
            attributeEntries['filledEntries']['cim:WindAeroLinearIEC.dpomega'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindAeroLinearIEC.dpomega'],
                                                   'cim:PU',
                                                   'cim:WindAeroLinearIEC.dpomega'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindAeroLinearIEC.dpomega'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindAeroLinearIEC.dpomega'],
                                                   'cim:PU',
                                                   'cim:WindAeroLinearIEC.dpomega'
                                                 );
        }
        if ('cim:WindAeroLinearIEC.dptheta' in object) {
            attributeEntries['filledEntries']['cim:WindAeroLinearIEC.dptheta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindAeroLinearIEC.dptheta'],
                                                   'cim:PU',
                                                   'cim:WindAeroLinearIEC.dptheta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindAeroLinearIEC.dptheta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindAeroLinearIEC.dptheta'],
                                                   'cim:PU',
                                                   'cim:WindAeroLinearIEC.dptheta'
                                                 );
        }
        if ('cim:WindAeroLinearIEC.omegazero' in object) {
            attributeEntries['filledEntries']['cim:WindAeroLinearIEC.omegazero'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindAeroLinearIEC.omegazero'],
                                                   'cim:PU',
                                                   'cim:WindAeroLinearIEC.omegazero'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindAeroLinearIEC.omegazero'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindAeroLinearIEC.omegazero'],
                                                   'cim:PU',
                                                   'cim:WindAeroLinearIEC.omegazero'
                                                 );
        }
        if ('cim:WindAeroLinearIEC.pavail' in object) {
            attributeEntries['filledEntries']['cim:WindAeroLinearIEC.pavail'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindAeroLinearIEC.pavail'],
                                                   'cim:PU',
                                                   'cim:WindAeroLinearIEC.pavail'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindAeroLinearIEC.pavail'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindAeroLinearIEC.pavail'],
                                                   'cim:PU',
                                                   'cim:WindAeroLinearIEC.pavail'
                                                 );
        }
        if ('cim:WindAeroLinearIEC.thetazero' in object) {
            attributeEntries['filledEntries']['cim:WindAeroLinearIEC.thetazero'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindAeroLinearIEC.thetazero'],
                                                   'cim:AngleDegrees',
                                                   'cim:WindAeroLinearIEC.thetazero'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindAeroLinearIEC.thetazero'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindAeroLinearIEC.thetazero'],
                                                   'cim:AngleDegrees',
                                                   'cim:WindAeroLinearIEC.thetazero'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindAeroLinearIEC.dpomega",
            "cim:WindAeroLinearIEC.dptheta",
            "cim:WindAeroLinearIEC.omegazero",
            "cim:WindAeroLinearIEC.pavail",
            "cim:WindAeroLinearIEC.thetazero",
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
            if (!WindAeroLinearIEC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindAeroLinearIEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindAeroLinearIEC.attributeHTML(object, cimmenu);
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
export default WindAeroLinearIEC
