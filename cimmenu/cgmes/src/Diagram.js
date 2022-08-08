import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Diagram extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="Diagram") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:Diagram.DiagramStyle' in object) {
            attributeEntries['filledEntries']['cim:Diagram.DiagramStyle'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Diagram.DiagramStyle'],
                                                   'cim:DiagramStyle',
                                                   'cim:Diagram.DiagramStyle'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Diagram.DiagramStyle'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Diagram.DiagramStyle'],
                                                   'cim:DiagramStyle',
                                                   'cim:Diagram.DiagramStyle'
                                                 );
        }
        if ('cim:Diagram.orientation' in object) {
            attributeEntries['filledEntries']['cim:Diagram.orientation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Diagram.orientation'],
                                                   'cim:OrientationKind',
                                                   'cim:Diagram.orientation'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Diagram.orientation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Diagram.orientation'],
                                                   'cim:OrientationKind',
                                                   'cim:Diagram.orientation'
                                                 );
        }
        if ('cim:Diagram.x1InitialView' in object) {
            attributeEntries['filledEntries']['cim:Diagram.x1InitialView'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Diagram.x1InitialView'],
                                                   'cim:Simple_Float',
                                                   'cim:Diagram.x1InitialView'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Diagram.x1InitialView'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Diagram.x1InitialView'],
                                                   'cim:Simple_Float',
                                                   'cim:Diagram.x1InitialView'
                                                 );
        }
        if ('cim:Diagram.x2InitialView' in object) {
            attributeEntries['filledEntries']['cim:Diagram.x2InitialView'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Diagram.x2InitialView'],
                                                   'cim:Simple_Float',
                                                   'cim:Diagram.x2InitialView'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Diagram.x2InitialView'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Diagram.x2InitialView'],
                                                   'cim:Simple_Float',
                                                   'cim:Diagram.x2InitialView'
                                                 );
        }
        if ('cim:Diagram.y1InitialView' in object) {
            attributeEntries['filledEntries']['cim:Diagram.y1InitialView'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Diagram.y1InitialView'],
                                                   'cim:Simple_Float',
                                                   'cim:Diagram.y1InitialView'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Diagram.y1InitialView'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Diagram.y1InitialView'],
                                                   'cim:Simple_Float',
                                                   'cim:Diagram.y1InitialView'
                                                 );
        }
        if ('cim:Diagram.y2InitialView' in object) {
            attributeEntries['filledEntries']['cim:Diagram.y2InitialView'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Diagram.y2InitialView'],
                                                   'cim:Simple_Float',
                                                   'cim:Diagram.y2InitialView'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Diagram.y2InitialView'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Diagram.y2InitialView'],
                                                   'cim:Simple_Float',
                                                   'cim:Diagram.y2InitialView'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DL, ],
						'DiagramStyle': [CGMESProfile.shortNames.DL, ],
						'orientation': [CGMESProfile.shortNames.DL, ],
						'x1InitialView': [CGMESProfile.shortNames.DL, ],
						'x2InitialView': [CGMESProfile.shortNames.DL, ],
						'y1InitialView': [CGMESProfile.shortNames.DL, ],
						'y2InitialView': [CGMESProfile.shortNames.DL, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Diagram.DiagramStyle",
            "cim:Diagram.orientation",
            "cim:Diagram.x1InitialView",
            "cim:Diagram.x2InitialView",
            "cim:Diagram.y1InitialView",
            "cim:Diagram.y2InitialView",
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
            if (!Diagram.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class Diagram: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Diagram.attributeHTML(object, cimmenu);
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
export default Diagram
