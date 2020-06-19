import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class ConnectivityNode extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="ConnectivityNode") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:ConnectivityNode.ConnectivityNodeContainer' in object) {
            attributeEntries['filledEntries']['cim:ConnectivityNode.ConnectivityNodeContainer'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNode.ConnectivityNodeContainer'],
                                                   'cim:ConnectivityNodeContainer',
                                                   'cim:ConnectivityNode.ConnectivityNodeContainer'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ConnectivityNode.ConnectivityNodeContainer'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNode.ConnectivityNodeContainer'],
                                                   'cim:ConnectivityNodeContainer',
                                                   'cim:ConnectivityNode.ConnectivityNodeContainer'
                                                 );
        }
        if ('cim:ConnectivityNode.TopologicalNode' in object) {
            attributeEntries['filledEntries']['cim:ConnectivityNode.TopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNode.TopologicalNode'],
                                                   'cim:TopologicalNode',
                                                   'cim:ConnectivityNode.TopologicalNode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ConnectivityNode.TopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNode.TopologicalNode'],
                                                   'cim:TopologicalNode',
                                                   'cim:ConnectivityNode.TopologicalNode'
                                                 );
        }
        if ('cim:ConnectivityNode.boundaryPoint' in object) {
            attributeEntries['filledEntries']['cim:ConnectivityNode.boundaryPoint'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNode.boundaryPoint'],
                                                   'cim:Boolean',
                                                   'cim:ConnectivityNode.boundaryPoint'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ConnectivityNode.boundaryPoint'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNode.boundaryPoint'],
                                                   'cim:Boolean',
                                                   'cim:ConnectivityNode.boundaryPoint'
                                                 );
        }
        if ('cim:ConnectivityNode.fromEndIsoCode' in object) {
            attributeEntries['filledEntries']['cim:ConnectivityNode.fromEndIsoCode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNode.fromEndIsoCode'],
                                                   'cim:String',
                                                   'cim:ConnectivityNode.fromEndIsoCode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ConnectivityNode.fromEndIsoCode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNode.fromEndIsoCode'],
                                                   'cim:String',
                                                   'cim:ConnectivityNode.fromEndIsoCode'
                                                 );
        }
        if ('cim:ConnectivityNode.fromEndName' in object) {
            attributeEntries['filledEntries']['cim:ConnectivityNode.fromEndName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNode.fromEndName'],
                                                   'cim:String',
                                                   'cim:ConnectivityNode.fromEndName'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ConnectivityNode.fromEndName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNode.fromEndName'],
                                                   'cim:String',
                                                   'cim:ConnectivityNode.fromEndName'
                                                 );
        }
        if ('cim:ConnectivityNode.fromEndNameTso' in object) {
            attributeEntries['filledEntries']['cim:ConnectivityNode.fromEndNameTso'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNode.fromEndNameTso'],
                                                   'cim:String',
                                                   'cim:ConnectivityNode.fromEndNameTso'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ConnectivityNode.fromEndNameTso'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNode.fromEndNameTso'],
                                                   'cim:String',
                                                   'cim:ConnectivityNode.fromEndNameTso'
                                                 );
        }
        if ('cim:ConnectivityNode.toEndIsoCode' in object) {
            attributeEntries['filledEntries']['cim:ConnectivityNode.toEndIsoCode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNode.toEndIsoCode'],
                                                   'cim:String',
                                                   'cim:ConnectivityNode.toEndIsoCode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ConnectivityNode.toEndIsoCode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNode.toEndIsoCode'],
                                                   'cim:String',
                                                   'cim:ConnectivityNode.toEndIsoCode'
                                                 );
        }
        if ('cim:ConnectivityNode.toEndName' in object) {
            attributeEntries['filledEntries']['cim:ConnectivityNode.toEndName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNode.toEndName'],
                                                   'cim:String',
                                                   'cim:ConnectivityNode.toEndName'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ConnectivityNode.toEndName'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNode.toEndName'],
                                                   'cim:String',
                                                   'cim:ConnectivityNode.toEndName'
                                                 );
        }
        if ('cim:ConnectivityNode.toEndNameTso' in object) {
            attributeEntries['filledEntries']['cim:ConnectivityNode.toEndNameTso'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNode.toEndNameTso'],
                                                   'cim:String',
                                                   'cim:ConnectivityNode.toEndNameTso'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ConnectivityNode.toEndNameTso'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNode.toEndNameTso'],
                                                   'cim:String',
                                                   'cim:ConnectivityNode.toEndNameTso'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ConnectivityNode.ConnectivityNodeContainer",
            "cim:ConnectivityNode.TopologicalNode",
            "cim:ConnectivityNode.boundaryPoint",
            "cim:ConnectivityNode.fromEndIsoCode",
            "cim:ConnectivityNode.fromEndName",
            "cim:ConnectivityNode.fromEndNameTso",
            "cim:ConnectivityNode.toEndIsoCode",
            "cim:ConnectivityNode.toEndName",
            "cim:ConnectivityNode.toEndNameTso",
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
            if (!ConnectivityNode.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ConnectivityNode: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ConnectivityNode.attributeHTML(object, cimmenu);
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
export default ConnectivityNode
