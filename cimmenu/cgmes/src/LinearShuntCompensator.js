import templates from "../../templates/index.js"
import ShuntCompensator from "./ShuntCompensator.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class LinearShuntCompensator extends ShuntCompensator {

    static attributeHTML(object, cimmenu, classType="LinearShuntCompensator") {
        let attributeEntries = ShuntCompensator.attributeHTML(object, cimmenu, classType);
        if ('cim:LinearShuntCompensator.bPerSection' in object) {
            attributeEntries['filledEntries']['cim:LinearShuntCompensator.bPerSection'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LinearShuntCompensator.bPerSection'],
                                                   'cim:Susceptance',
                                                   'cim:LinearShuntCompensator.bPerSection'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LinearShuntCompensator.bPerSection'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LinearShuntCompensator.bPerSection'],
                                                   'cim:Susceptance',
                                                   'cim:LinearShuntCompensator.bPerSection'
                                                 );
        }
        if ('cim:LinearShuntCompensator.gPerSection' in object) {
            attributeEntries['filledEntries']['cim:LinearShuntCompensator.gPerSection'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LinearShuntCompensator.gPerSection'],
                                                   'cim:Conductance',
                                                   'cim:LinearShuntCompensator.gPerSection'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LinearShuntCompensator.gPerSection'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LinearShuntCompensator.gPerSection'],
                                                   'cim:Conductance',
                                                   'cim:LinearShuntCompensator.gPerSection'
                                                 );
        }
        if ('cim:LinearShuntCompensator.b0PerSection' in object) {
            attributeEntries['filledEntries']['cim:LinearShuntCompensator.b0PerSection'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LinearShuntCompensator.b0PerSection'],
                                                   'cim:Susceptance',
                                                   'cim:LinearShuntCompensator.b0PerSection'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LinearShuntCompensator.b0PerSection'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LinearShuntCompensator.b0PerSection'],
                                                   'cim:Susceptance',
                                                   'cim:LinearShuntCompensator.b0PerSection'
                                                 );
        }
        if ('cim:LinearShuntCompensator.g0PerSection' in object) {
            attributeEntries['filledEntries']['cim:LinearShuntCompensator.g0PerSection'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LinearShuntCompensator.g0PerSection'],
                                                   'cim:Conductance',
                                                   'cim:LinearShuntCompensator.g0PerSection'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LinearShuntCompensator.g0PerSection'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LinearShuntCompensator.g0PerSection'],
                                                   'cim:Conductance',
                                                   'cim:LinearShuntCompensator.g0PerSection'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, ],
						'bPerSection': [CGMESProfile.shortNames.EQ, ],
						'gPerSection': [CGMESProfile.shortNames.EQ, ],
						'b0PerSection': [CGMESProfile.shortNames.EQ, ],
						'g0PerSection': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:LinearShuntCompensator.bPerSection",
            "cim:LinearShuntCompensator.gPerSection",
            "cim:LinearShuntCompensator.b0PerSection",
            "cim:LinearShuntCompensator.g0PerSection",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( ShuntCompensator.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!LinearShuntCompensator.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class LinearShuntCompensator: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = LinearShuntCompensator.attributeHTML(object, cimmenu);
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
export default LinearShuntCompensator
