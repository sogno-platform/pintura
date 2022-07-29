import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class DCNode extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="DCNode") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:DCNode.DCEquipmentContainer' in object) {
            attributeEntries['filledEntries']['cim:DCNode.DCEquipmentContainer'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCNode.DCEquipmentContainer'],
                                                   'cim:DCEquipmentContainer',
                                                   'cim:DCNode.DCEquipmentContainer'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCNode.DCEquipmentContainer'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCNode.DCEquipmentContainer'],
                                                   'cim:DCEquipmentContainer',
                                                   'cim:DCNode.DCEquipmentContainer'
                                                 );
        }
        if ('cim:DCNode.DCTopologicalNode' in object) {
            attributeEntries['filledEntries']['cim:DCNode.DCTopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCNode.DCTopologicalNode'],
                                                   'cim:DCTopologicalNode',
                                                   'cim:DCNode.DCTopologicalNode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCNode.DCTopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCNode.DCTopologicalNode'],
                                                   'cim:DCTopologicalNode',
                                                   'cim:DCNode.DCTopologicalNode'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.TP, ],
						'DCEquipmentContainer': [CGMESProfile.shortNames.EQ, ],
						'DCTopologicalNode': [CGMESProfile.shortNames.TP, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DCNode.DCEquipmentContainer",
            "cim:DCNode.DCTopologicalNode",
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
            if (!DCNode.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class DCNode: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DCNode.attributeHTML(object, cimmenu);
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
export default DCNode
