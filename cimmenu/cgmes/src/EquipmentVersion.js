import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"

class EquipmentVersion extends BaseClass {

    static attributeHTML(object, cimmenu, classType="EquipmentVersion") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:EquipmentVersion.baseUML' in object) {
            attributeEntries['filledEntries']['cim:EquipmentVersion.baseUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.baseUML'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.baseUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentVersion.baseUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.baseUML'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.baseUML'
                                                 );
        }
        if ('cim:EquipmentVersion.baseURIcore' in object) {
            attributeEntries['filledEntries']['cim:EquipmentVersion.baseURIcore'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.baseURIcore'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.baseURIcore'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentVersion.baseURIcore'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.baseURIcore'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.baseURIcore'
                                                 );
        }
        if ('cim:EquipmentVersion.baseURIoperation' in object) {
            attributeEntries['filledEntries']['cim:EquipmentVersion.baseURIoperation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.baseURIoperation'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.baseURIoperation'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentVersion.baseURIoperation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.baseURIoperation'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.baseURIoperation'
                                                 );
        }
        if ('cim:EquipmentVersion.baseURIshortCircuit' in object) {
            attributeEntries['filledEntries']['cim:EquipmentVersion.baseURIshortCircuit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.baseURIshortCircuit'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.baseURIshortCircuit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentVersion.baseURIshortCircuit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.baseURIshortCircuit'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.baseURIshortCircuit'
                                                 );
        }
        if ('cim:EquipmentVersion.date' in object) {
            attributeEntries['filledEntries']['cim:EquipmentVersion.date'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.date'],
                                                   'cim:Date',
                                                   'cim:EquipmentVersion.date'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentVersion.date'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.date'],
                                                   'cim:Date',
                                                   'cim:EquipmentVersion.date'
                                                 );
        }
        if ('cim:EquipmentVersion.differenceModelURI' in object) {
            attributeEntries['filledEntries']['cim:EquipmentVersion.differenceModelURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.differenceModelURI'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.differenceModelURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentVersion.differenceModelURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.differenceModelURI'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.differenceModelURI'
                                                 );
        }
        if ('cim:EquipmentVersion.entsoeUML' in object) {
            attributeEntries['filledEntries']['cim:EquipmentVersion.entsoeUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.entsoeUML'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.entsoeUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentVersion.entsoeUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.entsoeUML'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.entsoeUML'
                                                 );
        }
        if ('cim:EquipmentVersion.entsoeURIcore' in object) {
            attributeEntries['filledEntries']['cim:EquipmentVersion.entsoeURIcore'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.entsoeURIcore'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.entsoeURIcore'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentVersion.entsoeURIcore'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.entsoeURIcore'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.entsoeURIcore'
                                                 );
        }
        if ('cim:EquipmentVersion.entsoeURIoperation' in object) {
            attributeEntries['filledEntries']['cim:EquipmentVersion.entsoeURIoperation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.entsoeURIoperation'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.entsoeURIoperation'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentVersion.entsoeURIoperation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.entsoeURIoperation'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.entsoeURIoperation'
                                                 );
        }
        if ('cim:EquipmentVersion.entsoeURIshortCircuit' in object) {
            attributeEntries['filledEntries']['cim:EquipmentVersion.entsoeURIshortCircuit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.entsoeURIshortCircuit'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.entsoeURIshortCircuit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentVersion.entsoeURIshortCircuit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.entsoeURIshortCircuit'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.entsoeURIshortCircuit'
                                                 );
        }
        if ('cim:EquipmentVersion.modelDescriptionURI' in object) {
            attributeEntries['filledEntries']['cim:EquipmentVersion.modelDescriptionURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.modelDescriptionURI'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.modelDescriptionURI'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentVersion.modelDescriptionURI'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.modelDescriptionURI'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.modelDescriptionURI'
                                                 );
        }
        if ('cim:EquipmentVersion.namespaceRDF' in object) {
            attributeEntries['filledEntries']['cim:EquipmentVersion.namespaceRDF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.namespaceRDF'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.namespaceRDF'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentVersion.namespaceRDF'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.namespaceRDF'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.namespaceRDF'
                                                 );
        }
        if ('cim:EquipmentVersion.namespaceUML' in object) {
            attributeEntries['filledEntries']['cim:EquipmentVersion.namespaceUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.namespaceUML'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.namespaceUML'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentVersion.namespaceUML'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.namespaceUML'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.namespaceUML'
                                                 );
        }
        if ('cim:EquipmentVersion.shortName' in object) {
            attributeEntries['filledEntries']['cim:EquipmentVersion.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.shortName'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.shortName'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquipmentVersion.shortName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquipmentVersion.shortName'],
                                                   'cim:String',
                                                   'cim:EquipmentVersion.shortName'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:EquipmentVersion.baseUML",
            "cim:EquipmentVersion.baseURIcore",
            "cim:EquipmentVersion.baseURIoperation",
            "cim:EquipmentVersion.baseURIshortCircuit",
            "cim:EquipmentVersion.date",
            "cim:EquipmentVersion.differenceModelURI",
            "cim:EquipmentVersion.entsoeUML",
            "cim:EquipmentVersion.entsoeURIcore",
            "cim:EquipmentVersion.entsoeURIoperation",
            "cim:EquipmentVersion.entsoeURIshortCircuit",
            "cim:EquipmentVersion.modelDescriptionURI",
            "cim:EquipmentVersion.namespaceRDF",
            "cim:EquipmentVersion.namespaceUML",
            "cim:EquipmentVersion.shortName",
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
            if (!EquipmentVersion.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class EquipmentVersion: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = EquipmentVersion.attributeHTML(object, cimmenu);
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
export default EquipmentVersion
