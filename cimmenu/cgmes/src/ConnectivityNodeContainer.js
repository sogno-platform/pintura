import templates from "../../templates/index.js"
import PowerSystemResource from "./PowerSystemResource.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ConnectivityNodeContainer extends PowerSystemResource {

    static attributeHTML(object, cimmenu, classType="ConnectivityNodeContainer") {
        let attributeEntries = PowerSystemResource.attributeHTML(object, cimmenu, classType);
        if ('cim:ConnectivityNodeContainer.TopologicalNode' in object) {
            attributeEntries['filledEntries']['cim:ConnectivityNodeContainer.TopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNodeContainer.TopologicalNode'],
                                                   'cim:TopologicalNode',
                                                   'cim:ConnectivityNodeContainer.TopologicalNode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ConnectivityNodeContainer.TopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConnectivityNodeContainer.TopologicalNode'],
                                                   'cim:TopologicalNode',
                                                   'cim:ConnectivityNodeContainer.TopologicalNode'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.TP, CGMESProfile.shortNames.TP_BD, CGMESProfile.shortNames.EQ_BD, ],
						'TopologicalNode': [CGMESProfile.shortNames.TP, CGMESProfile.shortNames.TP_BD, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ConnectivityNodeContainer.TopologicalNode",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( PowerSystemResource.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!ConnectivityNodeContainer.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ConnectivityNodeContainer: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ConnectivityNodeContainer.attributeHTML(object, cimmenu);
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
        "EquipmentContainer",
        "DCEquipmentContainer",
        "DCConverterUnit",
        "DCLine",
        "Substation",
        "VoltageLevel",
        "Line",
        "Bay",
        "EquivalentNetwork",
        ];
        return subClasses;
    }
};
export default ConnectivityNodeContainer
