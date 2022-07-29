import templates from "../../templates/index.js"
import Equipment from "./Equipment.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class HydroPump extends Equipment {

    static attributeHTML(object, cimmenu, classType="HydroPump") {
        let attributeEntries = Equipment.attributeHTML(object, cimmenu, classType);
        if ('cim:HydroPump.HydroPowerPlant' in object) {
            attributeEntries['filledEntries']['cim:HydroPump.HydroPowerPlant'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['HydroPump.HydroPowerPlant'],
                                                   'cim:HydroPowerPlant',
                                                   'cim:HydroPump.HydroPowerPlant'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:HydroPump.HydroPowerPlant'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['HydroPump.HydroPowerPlant'],
                                                   'cim:HydroPowerPlant',
                                                   'cim:HydroPump.HydroPowerPlant'
                                                 );
        }
        if ('cim:HydroPump.RotatingMachine' in object) {
            attributeEntries['filledEntries']['cim:HydroPump.RotatingMachine'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['HydroPump.RotatingMachine'],
                                                   'cim:RotatingMachine',
                                                   'cim:HydroPump.RotatingMachine'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:HydroPump.RotatingMachine'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['HydroPump.RotatingMachine'],
                                                   'cim:RotatingMachine',
                                                   'cim:HydroPump.RotatingMachine'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'HydroPowerPlant': [CGMESProfile.shortNames.EQ, ],
						'RotatingMachine': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:HydroPump.HydroPowerPlant",
            "cim:HydroPump.RotatingMachine",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( Equipment.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!HydroPump.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class HydroPump: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = HydroPump.attributeHTML(object, cimmenu);
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
export default HydroPump
