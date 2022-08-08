import templates from "../../templates/index.js"
import GeneratingUnit from "./GeneratingUnit.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class HydroGeneratingUnit extends GeneratingUnit {

    static attributeHTML(object, cimmenu, classType="HydroGeneratingUnit") {
        let attributeEntries = GeneratingUnit.attributeHTML(object, cimmenu, classType);
        if ('cim:HydroGeneratingUnit.energyConversionCapability' in object) {
            attributeEntries['filledEntries']['cim:HydroGeneratingUnit.energyConversionCapability'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['HydroGeneratingUnit.energyConversionCapability'],
                                                   'cim:HydroEnergyConversionKind',
                                                   'cim:HydroGeneratingUnit.energyConversionCapability'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:HydroGeneratingUnit.energyConversionCapability'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['HydroGeneratingUnit.energyConversionCapability'],
                                                   'cim:HydroEnergyConversionKind',
                                                   'cim:HydroGeneratingUnit.energyConversionCapability'
                                                 );
        }
        if ('cim:HydroGeneratingUnit.HydroPowerPlant' in object) {
            attributeEntries['filledEntries']['cim:HydroGeneratingUnit.HydroPowerPlant'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['HydroGeneratingUnit.HydroPowerPlant'],
                                                   'cim:HydroPowerPlant',
                                                   'cim:HydroGeneratingUnit.HydroPowerPlant'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:HydroGeneratingUnit.HydroPowerPlant'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['HydroGeneratingUnit.HydroPowerPlant'],
                                                   'cim:HydroPowerPlant',
                                                   'cim:HydroGeneratingUnit.HydroPowerPlant'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, ],
						'energyConversionCapability': [CGMESProfile.shortNames.EQ, ],
						'HydroPowerPlant': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:HydroGeneratingUnit.energyConversionCapability",
            "cim:HydroGeneratingUnit.HydroPowerPlant",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( GeneratingUnit.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!HydroGeneratingUnit.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class HydroGeneratingUnit: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = HydroGeneratingUnit.attributeHTML(object, cimmenu);
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
export default HydroGeneratingUnit
