import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class DiagramObject extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="DiagramObject") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:DiagramObject.Diagram' in object) {
            attributeEntries['filledEntries']['cim:DiagramObject.Diagram'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObject.Diagram'],
                                                   'cim:Diagram',
                                                   'cim:DiagramObject.Diagram'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramObject.Diagram'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObject.Diagram'],
                                                   'cim:Diagram',
                                                   'cim:DiagramObject.Diagram'
                                                 );
        }
        if ('cim:DiagramObject.drawingOrder' in object) {
            attributeEntries['filledEntries']['cim:DiagramObject.drawingOrder'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObject.drawingOrder'],
                                                   'cim:Integer',
                                                   'cim:DiagramObject.drawingOrder'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramObject.drawingOrder'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObject.drawingOrder'],
                                                   'cim:Integer',
                                                   'cim:DiagramObject.drawingOrder'
                                                 );
        }
        if ('cim:DiagramObject.isPolygon' in object) {
            attributeEntries['filledEntries']['cim:DiagramObject.isPolygon'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObject.isPolygon'],
                                                   'cim:Boolean',
                                                   'cim:DiagramObject.isPolygon'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramObject.isPolygon'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObject.isPolygon'],
                                                   'cim:Boolean',
                                                   'cim:DiagramObject.isPolygon'
                                                 );
        }
        if ('cim:DiagramObject.offsetX' in object) {
            attributeEntries['filledEntries']['cim:DiagramObject.offsetX'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObject.offsetX'],
                                                   'cim:Simple_Float',
                                                   'cim:DiagramObject.offsetX'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramObject.offsetX'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObject.offsetX'],
                                                   'cim:Simple_Float',
                                                   'cim:DiagramObject.offsetX'
                                                 );
        }
        if ('cim:DiagramObject.offsetY' in object) {
            attributeEntries['filledEntries']['cim:DiagramObject.offsetY'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObject.offsetY'],
                                                   'cim:Simple_Float',
                                                   'cim:DiagramObject.offsetY'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramObject.offsetY'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObject.offsetY'],
                                                   'cim:Simple_Float',
                                                   'cim:DiagramObject.offsetY'
                                                 );
        }
        if ('cim:DiagramObject.rotation' in object) {
            attributeEntries['filledEntries']['cim:DiagramObject.rotation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObject.rotation'],
                                                   'cim:AngleDegrees',
                                                   'cim:DiagramObject.rotation'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramObject.rotation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObject.rotation'],
                                                   'cim:AngleDegrees',
                                                   'cim:DiagramObject.rotation'
                                                 );
        }
        if ('cim:DiagramObject.IdentifiedObject' in object) {
            attributeEntries['filledEntries']['cim:DiagramObject.IdentifiedObject'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObject.IdentifiedObject'],
                                                   'cim:IdentifiedObject',
                                                   'cim:DiagramObject.IdentifiedObject'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramObject.IdentifiedObject'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObject.IdentifiedObject'],
                                                   'cim:IdentifiedObject',
                                                   'cim:DiagramObject.IdentifiedObject'
                                                 );
        }
        if ('cim:DiagramObject.VisibilityLayers' in object) {
            attributeEntries['filledEntries']['cim:DiagramObject.VisibilityLayers'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObject.VisibilityLayers'],
                                                   'cim:VisibilityLayer',
                                                   'cim:DiagramObject.VisibilityLayers'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramObject.VisibilityLayers'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObject.VisibilityLayers'],
                                                   'cim:VisibilityLayer',
                                                   'cim:DiagramObject.VisibilityLayers'
                                                 );
        }
        if ('cim:DiagramObject.DiagramObjectStyle' in object) {
            attributeEntries['filledEntries']['cim:DiagramObject.DiagramObjectStyle'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObject.DiagramObjectStyle'],
                                                   'cim:DiagramObjectStyle',
                                                   'cim:DiagramObject.DiagramObjectStyle'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiagramObject.DiagramObjectStyle'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiagramObject.DiagramObjectStyle'],
                                                   'cim:DiagramObjectStyle',
                                                   'cim:DiagramObject.DiagramObjectStyle'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DiagramObject.Diagram",
            "cim:DiagramObject.drawingOrder",
            "cim:DiagramObject.isPolygon",
            "cim:DiagramObject.offsetX",
            "cim:DiagramObject.offsetY",
            "cim:DiagramObject.rotation",
            "cim:DiagramObject.IdentifiedObject",
            "cim:DiagramObject.VisibilityLayers",
            "cim:DiagramObject.DiagramObjectStyle",
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
            if (!DiagramObject.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class DiagramObject: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DiagramObject.attributeHTML(object, cimmenu);
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
        "TextDiagramObject",
        ];
        return subClasses;
    }
};
export default DiagramObject
