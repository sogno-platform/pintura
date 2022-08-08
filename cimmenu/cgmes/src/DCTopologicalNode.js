import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class DCTopologicalNode extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="DCTopologicalNode") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:DCTopologicalNode.DCTerminals' in object) {
            attributeEntries['filledEntries']['cim:DCTopologicalNode.DCTerminals'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCTopologicalNode.DCTerminals'],
                                                   'cim:DCBaseTerminal',
                                                   'cim:DCTopologicalNode.DCTerminals'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCTopologicalNode.DCTerminals'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCTopologicalNode.DCTerminals'],
                                                   'cim:DCBaseTerminal',
                                                   'cim:DCTopologicalNode.DCTerminals'
                                                 );
        }
        if ('cim:DCTopologicalNode.DCEquipmentContainer' in object) {
            attributeEntries['filledEntries']['cim:DCTopologicalNode.DCEquipmentContainer'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCTopologicalNode.DCEquipmentContainer'],
                                                   'cim:DCEquipmentContainer',
                                                   'cim:DCTopologicalNode.DCEquipmentContainer'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCTopologicalNode.DCEquipmentContainer'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCTopologicalNode.DCEquipmentContainer'],
                                                   'cim:DCEquipmentContainer',
                                                   'cim:DCTopologicalNode.DCEquipmentContainer'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.SV, CGMESProfile.shortNames.TP, ],
						'DCTerminals': [CGMESProfile.shortNames.TP, ],
						'DCEquipmentContainer': [CGMESProfile.shortNames.TP, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DCTopologicalNode.DCTerminals",
            "cim:DCTopologicalNode.DCEquipmentContainer",
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
            if (!DCTopologicalNode.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class DCTopologicalNode: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DCTopologicalNode.attributeHTML(object, cimmenu);
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
export default DCTopologicalNode
