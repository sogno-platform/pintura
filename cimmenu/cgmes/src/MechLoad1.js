import templates from "../../templates/index.js"
import MechanicalLoadDynamics from "./MechanicalLoadDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class MechLoad1 extends MechanicalLoadDynamics {

    static attributeHTML(object, cimmenu, classType="MechLoad1") {
        let attributeEntries = MechanicalLoadDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:MechLoad1.a' in object) {
            attributeEntries['filledEntries']['cim:MechLoad1.a'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MechLoad1.a'],
                                                   'cim:Simple_Float',
                                                   'cim:MechLoad1.a'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MechLoad1.a'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MechLoad1.a'],
                                                   'cim:Simple_Float',
                                                   'cim:MechLoad1.a'
                                                 );
        }
        if ('cim:MechLoad1.b' in object) {
            attributeEntries['filledEntries']['cim:MechLoad1.b'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MechLoad1.b'],
                                                   'cim:Simple_Float',
                                                   'cim:MechLoad1.b'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MechLoad1.b'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MechLoad1.b'],
                                                   'cim:Simple_Float',
                                                   'cim:MechLoad1.b'
                                                 );
        }
        if ('cim:MechLoad1.d' in object) {
            attributeEntries['filledEntries']['cim:MechLoad1.d'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MechLoad1.d'],
                                                   'cim:Simple_Float',
                                                   'cim:MechLoad1.d'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MechLoad1.d'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MechLoad1.d'],
                                                   'cim:Simple_Float',
                                                   'cim:MechLoad1.d'
                                                 );
        }
        if ('cim:MechLoad1.e' in object) {
            attributeEntries['filledEntries']['cim:MechLoad1.e'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MechLoad1.e'],
                                                   'cim:Simple_Float',
                                                   'cim:MechLoad1.e'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MechLoad1.e'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MechLoad1.e'],
                                                   'cim:Simple_Float',
                                                   'cim:MechLoad1.e'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'a': [CGMESProfile.shortNames.DY, ],
						'b': [CGMESProfile.shortNames.DY, ],
						'd': [CGMESProfile.shortNames.DY, ],
						'e': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:MechLoad1.a",
            "cim:MechLoad1.b",
            "cim:MechLoad1.d",
            "cim:MechLoad1.e",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( MechanicalLoadDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!MechLoad1.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class MechLoad1: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = MechLoad1.attributeHTML(object, cimmenu);
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
export default MechLoad1
