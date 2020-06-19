import templates from "../../templates/index.js"
import DCEquipmentContainer from "./DCEquipmentContainer.js"
import common from "../../src/common.js"

class DCConverterUnit extends DCEquipmentContainer {

    static attributeHTML(object, cimmenu, classType="DCConverterUnit") {
        let attributeEntries = DCEquipmentContainer.attributeHTML(object, cimmenu, classType);
        if ('cim:DCConverterUnit.operationMode' in object) {
            attributeEntries['filledEntries']['cim:DCConverterUnit.operationMode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCConverterUnit.operationMode'],
                                                   'cim:DCConverterOperatingModeKind',
                                                   'cim:DCConverterUnit.operationMode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCConverterUnit.operationMode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCConverterUnit.operationMode'],
                                                   'cim:DCConverterOperatingModeKind',
                                                   'cim:DCConverterUnit.operationMode'
                                                 );
        }
        if ('cim:DCConverterUnit.Substation' in object) {
            attributeEntries['filledEntries']['cim:DCConverterUnit.Substation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCConverterUnit.Substation'],
                                                   'cim:Substation',
                                                   'cim:DCConverterUnit.Substation'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCConverterUnit.Substation'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCConverterUnit.Substation'],
                                                   'cim:Substation',
                                                   'cim:DCConverterUnit.Substation'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DCConverterUnit.operationMode",
            "cim:DCConverterUnit.Substation",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( DCEquipmentContainer.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!DCConverterUnit.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class DCConverterUnit: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DCConverterUnit.attributeHTML(object, cimmenu);
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
export default DCConverterUnit
