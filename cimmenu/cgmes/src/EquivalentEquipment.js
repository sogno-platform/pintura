import templates from "../../templates/index.js"
import ConductingEquipment from "./ConductingEquipment.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class EquivalentEquipment extends ConductingEquipment {

    static attributeHTML(object, cimmenu, classType="EquivalentEquipment") {
        let attributeEntries = ConductingEquipment.attributeHTML(object, cimmenu, classType);
        if ('cim:EquivalentEquipment.EquivalentNetwork' in object) {
            attributeEntries['filledEntries']['cim:EquivalentEquipment.EquivalentNetwork'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentEquipment.EquivalentNetwork'],
                                                   'cim:EquivalentNetwork',
                                                   'cim:EquivalentEquipment.EquivalentNetwork'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentEquipment.EquivalentNetwork'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentEquipment.EquivalentNetwork'],
                                                   'cim:EquivalentNetwork',
                                                   'cim:EquivalentEquipment.EquivalentNetwork'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, ],
						'EquivalentNetwork': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:EquivalentEquipment.EquivalentNetwork",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( ConductingEquipment.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!EquivalentEquipment.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class EquivalentEquipment: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = EquivalentEquipment.attributeHTML(object, cimmenu);
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
        "EquivalentBranch",
        "EquivalentInjection",
        "EquivalentShunt",
        ];
        return subClasses;
    }
};
export default EquivalentEquipment
