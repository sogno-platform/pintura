import templates from "../../templates/index.js"
import ConductingEquipment from "./ConductingEquipment.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class EarthFaultCompensator extends ConductingEquipment {

    static attributeHTML(object, cimmenu, classType="EarthFaultCompensator") {
        let attributeEntries = ConductingEquipment.attributeHTML(object, cimmenu, classType);
        if ('cim:EarthFaultCompensator.r' in object) {
            attributeEntries['filledEntries']['cim:EarthFaultCompensator.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EarthFaultCompensator.r'],
                                                   'cim:Resistance',
                                                   'cim:EarthFaultCompensator.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EarthFaultCompensator.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EarthFaultCompensator.r'],
                                                   'cim:Resistance',
                                                   'cim:EarthFaultCompensator.r'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'r': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:EarthFaultCompensator.r",
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
            if (!EarthFaultCompensator.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class EarthFaultCompensator: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = EarthFaultCompensator.attributeHTML(object, cimmenu);
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
        "GroundingImpedance",
        "PetersenCoil",
        ];
        return subClasses;
    }
};
export default EarthFaultCompensator
