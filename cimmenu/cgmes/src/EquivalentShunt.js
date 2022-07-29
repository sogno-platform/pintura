import templates from "../../templates/index.js"
import EquivalentEquipment from "./EquivalentEquipment.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class EquivalentShunt extends EquivalentEquipment {

    static attributeHTML(object, cimmenu, classType="EquivalentShunt") {
        let attributeEntries = EquivalentEquipment.attributeHTML(object, cimmenu, classType);
        if ('cim:EquivalentShunt.b' in object) {
            attributeEntries['filledEntries']['cim:EquivalentShunt.b'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentShunt.b'],
                                                   'cim:Susceptance',
                                                   'cim:EquivalentShunt.b'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentShunt.b'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentShunt.b'],
                                                   'cim:Susceptance',
                                                   'cim:EquivalentShunt.b'
                                                 );
        }
        if ('cim:EquivalentShunt.g' in object) {
            attributeEntries['filledEntries']['cim:EquivalentShunt.g'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentShunt.g'],
                                                   'cim:Conductance',
                                                   'cim:EquivalentShunt.g'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentShunt.g'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentShunt.g'],
                                                   'cim:Conductance',
                                                   'cim:EquivalentShunt.g'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'b': [CGMESProfile.shortNames.EQ, ],
						'g': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:EquivalentShunt.b",
            "cim:EquivalentShunt.g",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( EquivalentEquipment.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!EquivalentShunt.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class EquivalentShunt: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = EquivalentShunt.attributeHTML(object, cimmenu);
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
export default EquivalentShunt
