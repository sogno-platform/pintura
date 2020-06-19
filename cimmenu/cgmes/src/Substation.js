import templates from "../../templates/index.js"
import EquipmentContainer from "./EquipmentContainer.js"
import common from "../../src/common.js"

class Substation extends EquipmentContainer {

    static attributeHTML(object, cimmenu, classType="Substation") {
        let attributeEntries = EquipmentContainer.attributeHTML(object, cimmenu, classType);
        if ('cim:Substation.Region' in object) {
            attributeEntries['filledEntries']['cim:Substation.Region'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Substation.Region'],
                                                   'cim:SubGeographicalRegion',
                                                   'cim:Substation.Region'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Substation.Region'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Substation.Region'],
                                                   'cim:SubGeographicalRegion',
                                                   'cim:Substation.Region'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Substation.Region",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( EquipmentContainer.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!Substation.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class Substation: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Substation.attributeHTML(object, cimmenu);
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
export default Substation
