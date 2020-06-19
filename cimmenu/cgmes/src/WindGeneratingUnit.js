import templates from "../../templates/index.js"
import GeneratingUnit from "./GeneratingUnit.js"
import common from "../../src/common.js"

class WindGeneratingUnit extends GeneratingUnit {

    static attributeHTML(object, cimmenu, classType="WindGeneratingUnit") {
        let attributeEntries = GeneratingUnit.attributeHTML(object, cimmenu, classType);
        if ('cim:WindGeneratingUnit.windGenUnitType' in object) {
            attributeEntries['filledEntries']['cim:WindGeneratingUnit.windGenUnitType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGeneratingUnit.windGenUnitType'],
                                                   'cim:WindGenUnitKind',
                                                   'cim:WindGeneratingUnit.windGenUnitType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindGeneratingUnit.windGenUnitType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindGeneratingUnit.windGenUnitType'],
                                                   'cim:WindGenUnitKind',
                                                   'cim:WindGeneratingUnit.windGenUnitType'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindGeneratingUnit.windGenUnitType",
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
            if (!WindGeneratingUnit.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindGeneratingUnit: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindGeneratingUnit.attributeHTML(object, cimmenu);
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
export default WindGeneratingUnit
