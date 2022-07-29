import templates from "../../templates/index.js"
import EquipmentContainer from "./EquipmentContainer.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class DCEquipmentContainer extends EquipmentContainer {

    static attributeHTML(object, cimmenu, classType="DCEquipmentContainer") {
        let attributeEntries = EquipmentContainer.attributeHTML(object, cimmenu, classType);
        if ('cim:DCEquipmentContainer.DCTopologicalNode' in object) {
            attributeEntries['filledEntries']['cim:DCEquipmentContainer.DCTopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCEquipmentContainer.DCTopologicalNode'],
                                                   'cim:DCTopologicalNode',
                                                   'cim:DCEquipmentContainer.DCTopologicalNode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCEquipmentContainer.DCTopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCEquipmentContainer.DCTopologicalNode'],
                                                   'cim:DCTopologicalNode',
                                                   'cim:DCEquipmentContainer.DCTopologicalNode'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.TP, ],
						'DCTopologicalNode': [CGMESProfile.shortNames.TP, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DCEquipmentContainer.DCTopologicalNode",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( EquipmentContainer.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!DCEquipmentContainer.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class DCEquipmentContainer: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DCEquipmentContainer.attributeHTML(object, cimmenu);
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
        "DCConverterUnit",
        "DCLine",
        ];
        return subClasses;
    }
};
export default DCEquipmentContainer
