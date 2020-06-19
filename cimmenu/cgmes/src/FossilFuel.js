import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class FossilFuel extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="FossilFuel") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:FossilFuel.fossilFuelType' in object) {
            attributeEntries['filledEntries']['cim:FossilFuel.fossilFuelType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['FossilFuel.fossilFuelType'],
                                                   'cim:FuelType',
                                                   'cim:FossilFuel.fossilFuelType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:FossilFuel.fossilFuelType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['FossilFuel.fossilFuelType'],
                                                   'cim:FuelType',
                                                   'cim:FossilFuel.fossilFuelType'
                                                 );
        }
        if ('cim:FossilFuel.ThermalGeneratingUnit' in object) {
            attributeEntries['filledEntries']['cim:FossilFuel.ThermalGeneratingUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['FossilFuel.ThermalGeneratingUnit'],
                                                   'cim:ThermalGeneratingUnit',
                                                   'cim:FossilFuel.ThermalGeneratingUnit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:FossilFuel.ThermalGeneratingUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['FossilFuel.ThermalGeneratingUnit'],
                                                   'cim:ThermalGeneratingUnit',
                                                   'cim:FossilFuel.ThermalGeneratingUnit'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:FossilFuel.fossilFuelType",
            "cim:FossilFuel.ThermalGeneratingUnit",
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
            if (!FossilFuel.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class FossilFuel: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = FossilFuel.attributeHTML(object, cimmenu);
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
export default FossilFuel
