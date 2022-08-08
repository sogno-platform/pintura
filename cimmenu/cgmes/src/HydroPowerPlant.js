import templates from "../../templates/index.js"
import PowerSystemResource from "./PowerSystemResource.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class HydroPowerPlant extends PowerSystemResource {

    static attributeHTML(object, cimmenu, classType="HydroPowerPlant") {
        let attributeEntries = PowerSystemResource.attributeHTML(object, cimmenu, classType);
        if ('cim:HydroPowerPlant.hydroPlantStorageType' in object) {
            attributeEntries['filledEntries']['cim:HydroPowerPlant.hydroPlantStorageType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['HydroPowerPlant.hydroPlantStorageType'],
                                                   'cim:HydroPlantStorageKind',
                                                   'cim:HydroPowerPlant.hydroPlantStorageType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:HydroPowerPlant.hydroPlantStorageType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['HydroPowerPlant.hydroPlantStorageType'],
                                                   'cim:HydroPlantStorageKind',
                                                   'cim:HydroPowerPlant.hydroPlantStorageType'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'hydroPlantStorageType': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:HydroPowerPlant.hydroPlantStorageType",
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
            if (!HydroPowerPlant.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class HydroPowerPlant: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = HydroPowerPlant.attributeHTML(object, cimmenu);
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
export default HydroPowerPlant
