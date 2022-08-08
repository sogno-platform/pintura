import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class VisibilityLayer extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="VisibilityLayer") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:VisibilityLayer.VisibleObjects' in object) {
            attributeEntries['filledEntries']['cim:VisibilityLayer.VisibleObjects'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VisibilityLayer.VisibleObjects'],
                                                   'cim:DiagramObject',
                                                   'cim:VisibilityLayer.VisibleObjects'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VisibilityLayer.VisibleObjects'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VisibilityLayer.VisibleObjects'],
                                                   'cim:DiagramObject',
                                                   'cim:VisibilityLayer.VisibleObjects'
                                                 );
        }
        if ('cim:VisibilityLayer.drawingOrder' in object) {
            attributeEntries['filledEntries']['cim:VisibilityLayer.drawingOrder'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VisibilityLayer.drawingOrder'],
                                                   'cim:Integer',
                                                   'cim:VisibilityLayer.drawingOrder'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VisibilityLayer.drawingOrder'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VisibilityLayer.drawingOrder'],
                                                   'cim:Integer',
                                                   'cim:VisibilityLayer.drawingOrder'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DL, ],
						'VisibleObjects': [CGMESProfile.shortNames.DL, ],
						'drawingOrder': [CGMESProfile.shortNames.DL, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:VisibilityLayer.VisibleObjects",
            "cim:VisibilityLayer.drawingOrder",
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
            if (!VisibilityLayer.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class VisibilityLayer: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = VisibilityLayer.attributeHTML(object, cimmenu);
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
export default VisibilityLayer
