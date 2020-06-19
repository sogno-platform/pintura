import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"

class NonlinearShuntCompensatorPoint extends BaseClass {

    static attributeHTML(object, cimmenu, classType="NonlinearShuntCompensatorPoint") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:NonlinearShuntCompensatorPoint.NonlinearShuntCompensator' in object) {
            attributeEntries['filledEntries']['cim:NonlinearShuntCompensatorPoint.NonlinearShuntCompensator'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['NonlinearShuntCompensatorPoint.NonlinearShuntCompensator'],
                                                   'cim:NonlinearShuntCompensator',
                                                   'cim:NonlinearShuntCompensatorPoint.NonlinearShuntCompensator'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:NonlinearShuntCompensatorPoint.NonlinearShuntCompensator'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['NonlinearShuntCompensatorPoint.NonlinearShuntCompensator'],
                                                   'cim:NonlinearShuntCompensator',
                                                   'cim:NonlinearShuntCompensatorPoint.NonlinearShuntCompensator'
                                                 );
        }
        if ('cim:NonlinearShuntCompensatorPoint.b' in object) {
            attributeEntries['filledEntries']['cim:NonlinearShuntCompensatorPoint.b'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['NonlinearShuntCompensatorPoint.b'],
                                                   'cim:Susceptance',
                                                   'cim:NonlinearShuntCompensatorPoint.b'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:NonlinearShuntCompensatorPoint.b'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['NonlinearShuntCompensatorPoint.b'],
                                                   'cim:Susceptance',
                                                   'cim:NonlinearShuntCompensatorPoint.b'
                                                 );
        }
        if ('cim:NonlinearShuntCompensatorPoint.g' in object) {
            attributeEntries['filledEntries']['cim:NonlinearShuntCompensatorPoint.g'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['NonlinearShuntCompensatorPoint.g'],
                                                   'cim:Conductance',
                                                   'cim:NonlinearShuntCompensatorPoint.g'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:NonlinearShuntCompensatorPoint.g'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['NonlinearShuntCompensatorPoint.g'],
                                                   'cim:Conductance',
                                                   'cim:NonlinearShuntCompensatorPoint.g'
                                                 );
        }
        if ('cim:NonlinearShuntCompensatorPoint.sectionNumber' in object) {
            attributeEntries['filledEntries']['cim:NonlinearShuntCompensatorPoint.sectionNumber'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['NonlinearShuntCompensatorPoint.sectionNumber'],
                                                   'cim:Integer',
                                                   'cim:NonlinearShuntCompensatorPoint.sectionNumber'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:NonlinearShuntCompensatorPoint.sectionNumber'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['NonlinearShuntCompensatorPoint.sectionNumber'],
                                                   'cim:Integer',
                                                   'cim:NonlinearShuntCompensatorPoint.sectionNumber'
                                                 );
        }
        if ('cim:NonlinearShuntCompensatorPoint.b0' in object) {
            attributeEntries['filledEntries']['cim:NonlinearShuntCompensatorPoint.b0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['NonlinearShuntCompensatorPoint.b0'],
                                                   'cim:Susceptance',
                                                   'cim:NonlinearShuntCompensatorPoint.b0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:NonlinearShuntCompensatorPoint.b0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['NonlinearShuntCompensatorPoint.b0'],
                                                   'cim:Susceptance',
                                                   'cim:NonlinearShuntCompensatorPoint.b0'
                                                 );
        }
        if ('cim:NonlinearShuntCompensatorPoint.g0' in object) {
            attributeEntries['filledEntries']['cim:NonlinearShuntCompensatorPoint.g0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['NonlinearShuntCompensatorPoint.g0'],
                                                   'cim:Conductance',
                                                   'cim:NonlinearShuntCompensatorPoint.g0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:NonlinearShuntCompensatorPoint.g0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['NonlinearShuntCompensatorPoint.g0'],
                                                   'cim:Conductance',
                                                   'cim:NonlinearShuntCompensatorPoint.g0'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:NonlinearShuntCompensatorPoint.NonlinearShuntCompensator",
            "cim:NonlinearShuntCompensatorPoint.b",
            "cim:NonlinearShuntCompensatorPoint.g",
            "cim:NonlinearShuntCompensatorPoint.sectionNumber",
            "cim:NonlinearShuntCompensatorPoint.b0",
            "cim:NonlinearShuntCompensatorPoint.g0",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( BaseClass.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!NonlinearShuntCompensatorPoint.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class NonlinearShuntCompensatorPoint: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = NonlinearShuntCompensatorPoint.attributeHTML(object, cimmenu);
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
export default NonlinearShuntCompensatorPoint
