import templates from "../../templates/index.js"
import DCConductingEquipment from "./DCConductingEquipment.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class DCGround extends DCConductingEquipment {

    static attributeHTML(object, cimmenu, classType="DCGround") {
        let attributeEntries = DCConductingEquipment.attributeHTML(object, cimmenu, classType);
        if ('cim:DCGround.inductance' in object) {
            attributeEntries['filledEntries']['cim:DCGround.inductance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCGround.inductance'],
                                                   'cim:Inductance',
                                                   'cim:DCGround.inductance'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCGround.inductance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCGround.inductance'],
                                                   'cim:Inductance',
                                                   'cim:DCGround.inductance'
                                                 );
        }
        if ('cim:DCGround.r' in object) {
            attributeEntries['filledEntries']['cim:DCGround.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCGround.r'],
                                                   'cim:Resistance',
                                                   'cim:DCGround.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCGround.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCGround.r'],
                                                   'cim:Resistance',
                                                   'cim:DCGround.r'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'inductance': [CGMESProfile.shortNames.EQ, ],
						'r': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DCGround.inductance",
            "cim:DCGround.r",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( DCConductingEquipment.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!DCGround.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class DCGround: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DCGround.attributeHTML(object, cimmenu);
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
export default DCGround
