import templates from "../../templates/index.js"
import DCEquipmentContainer from "./DCEquipmentContainer.js"
import common from "../../src/common.js"

class DCLine extends DCEquipmentContainer {

    static attributeHTML(object, cimmenu, classType="DCLine") {
        let attributeEntries = DCEquipmentContainer.attributeHTML(object, cimmenu, classType);
        if ('cim:DCLine.Region' in object) {
            attributeEntries['filledEntries']['cim:DCLine.Region'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCLine.Region'],
                                                   'cim:SubGeographicalRegion',
                                                   'cim:DCLine.Region'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCLine.Region'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCLine.Region'],
                                                   'cim:SubGeographicalRegion',
                                                   'cim:DCLine.Region'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DCLine.Region",
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
            if (!DCLine.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class DCLine: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DCLine.attributeHTML(object, cimmenu);
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
export default DCLine
