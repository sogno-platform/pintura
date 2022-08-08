import templates from "../../templates/index.js"
import EarthFaultCompensator from "./EarthFaultCompensator.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GroundingImpedance extends EarthFaultCompensator {

    static attributeHTML(object, cimmenu, classType="GroundingImpedance") {
        let attributeEntries = EarthFaultCompensator.attributeHTML(object, cimmenu, classType);
        if ('cim:GroundingImpedance.x' in object) {
            attributeEntries['filledEntries']['cim:GroundingImpedance.x'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GroundingImpedance.x'],
                                                   'cim:Reactance',
                                                   'cim:GroundingImpedance.x'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GroundingImpedance.x'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GroundingImpedance.x'],
                                                   'cim:Reactance',
                                                   'cim:GroundingImpedance.x'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'x': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GroundingImpedance.x",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( EarthFaultCompensator.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!GroundingImpedance.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class GroundingImpedance: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GroundingImpedance.attributeHTML(object, cimmenu);
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
export default GroundingImpedance
