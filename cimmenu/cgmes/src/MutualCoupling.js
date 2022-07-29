import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class MutualCoupling extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="MutualCoupling") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:MutualCoupling.First_Terminal' in object) {
            attributeEntries['filledEntries']['cim:MutualCoupling.First_Terminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.First_Terminal'],
                                                   'cim:Terminal',
                                                   'cim:MutualCoupling.First_Terminal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MutualCoupling.First_Terminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.First_Terminal'],
                                                   'cim:Terminal',
                                                   'cim:MutualCoupling.First_Terminal'
                                                 );
        }
        if ('cim:MutualCoupling.Second_Terminal' in object) {
            attributeEntries['filledEntries']['cim:MutualCoupling.Second_Terminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.Second_Terminal'],
                                                   'cim:Terminal',
                                                   'cim:MutualCoupling.Second_Terminal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MutualCoupling.Second_Terminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.Second_Terminal'],
                                                   'cim:Terminal',
                                                   'cim:MutualCoupling.Second_Terminal'
                                                 );
        }
        if ('cim:MutualCoupling.b0ch' in object) {
            attributeEntries['filledEntries']['cim:MutualCoupling.b0ch'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.b0ch'],
                                                   'cim:Susceptance',
                                                   'cim:MutualCoupling.b0ch'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MutualCoupling.b0ch'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.b0ch'],
                                                   'cim:Susceptance',
                                                   'cim:MutualCoupling.b0ch'
                                                 );
        }
        if ('cim:MutualCoupling.distance11' in object) {
            attributeEntries['filledEntries']['cim:MutualCoupling.distance11'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.distance11'],
                                                   'cim:Length',
                                                   'cim:MutualCoupling.distance11'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MutualCoupling.distance11'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.distance11'],
                                                   'cim:Length',
                                                   'cim:MutualCoupling.distance11'
                                                 );
        }
        if ('cim:MutualCoupling.distance12' in object) {
            attributeEntries['filledEntries']['cim:MutualCoupling.distance12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.distance12'],
                                                   'cim:Length',
                                                   'cim:MutualCoupling.distance12'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MutualCoupling.distance12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.distance12'],
                                                   'cim:Length',
                                                   'cim:MutualCoupling.distance12'
                                                 );
        }
        if ('cim:MutualCoupling.distance21' in object) {
            attributeEntries['filledEntries']['cim:MutualCoupling.distance21'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.distance21'],
                                                   'cim:Length',
                                                   'cim:MutualCoupling.distance21'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MutualCoupling.distance21'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.distance21'],
                                                   'cim:Length',
                                                   'cim:MutualCoupling.distance21'
                                                 );
        }
        if ('cim:MutualCoupling.distance22' in object) {
            attributeEntries['filledEntries']['cim:MutualCoupling.distance22'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.distance22'],
                                                   'cim:Length',
                                                   'cim:MutualCoupling.distance22'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MutualCoupling.distance22'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.distance22'],
                                                   'cim:Length',
                                                   'cim:MutualCoupling.distance22'
                                                 );
        }
        if ('cim:MutualCoupling.g0ch' in object) {
            attributeEntries['filledEntries']['cim:MutualCoupling.g0ch'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.g0ch'],
                                                   'cim:Conductance',
                                                   'cim:MutualCoupling.g0ch'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MutualCoupling.g0ch'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.g0ch'],
                                                   'cim:Conductance',
                                                   'cim:MutualCoupling.g0ch'
                                                 );
        }
        if ('cim:MutualCoupling.r0' in object) {
            attributeEntries['filledEntries']['cim:MutualCoupling.r0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.r0'],
                                                   'cim:Resistance',
                                                   'cim:MutualCoupling.r0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MutualCoupling.r0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.r0'],
                                                   'cim:Resistance',
                                                   'cim:MutualCoupling.r0'
                                                 );
        }
        if ('cim:MutualCoupling.x0' in object) {
            attributeEntries['filledEntries']['cim:MutualCoupling.x0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.x0'],
                                                   'cim:Reactance',
                                                   'cim:MutualCoupling.x0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:MutualCoupling.x0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['MutualCoupling.x0'],
                                                   'cim:Reactance',
                                                   'cim:MutualCoupling.x0'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'First_Terminal': [CGMESProfile.shortNames.EQ, ],
						'Second_Terminal': [CGMESProfile.shortNames.EQ, ],
						'b0ch': [CGMESProfile.shortNames.EQ, ],
						'distance11': [CGMESProfile.shortNames.EQ, ],
						'distance12': [CGMESProfile.shortNames.EQ, ],
						'distance21': [CGMESProfile.shortNames.EQ, ],
						'distance22': [CGMESProfile.shortNames.EQ, ],
						'g0ch': [CGMESProfile.shortNames.EQ, ],
						'r0': [CGMESProfile.shortNames.EQ, ],
						'x0': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:MutualCoupling.First_Terminal",
            "cim:MutualCoupling.Second_Terminal",
            "cim:MutualCoupling.b0ch",
            "cim:MutualCoupling.distance11",
            "cim:MutualCoupling.distance12",
            "cim:MutualCoupling.distance21",
            "cim:MutualCoupling.distance22",
            "cim:MutualCoupling.g0ch",
            "cim:MutualCoupling.r0",
            "cim:MutualCoupling.x0",
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
            if (!MutualCoupling.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class MutualCoupling: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = MutualCoupling.attributeHTML(object, cimmenu);
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
export default MutualCoupling
