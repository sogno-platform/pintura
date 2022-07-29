import templates from "../../templates/index.js"
import ConductingEquipment from "./ConductingEquipment.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Conductor extends ConductingEquipment {

    static attributeHTML(object, cimmenu, classType="Conductor") {
        let attributeEntries = ConductingEquipment.attributeHTML(object, cimmenu, classType);
        if ('cim:Conductor.length' in object) {
            attributeEntries['filledEntries']['cim:Conductor.length'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Conductor.length'],
                                                   'cim:Length',
                                                   'cim:Conductor.length'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Conductor.length'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Conductor.length'],
                                                   'cim:Length',
                                                   'cim:Conductor.length'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'length': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Conductor.length",
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
            if (!Conductor.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class Conductor: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Conductor.attributeHTML(object, cimmenu);
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
        "ACLineSegment",
        ];
        return subClasses;
    }
};
export default Conductor
