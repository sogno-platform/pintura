import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class DCTopologicalIsland extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="DCTopologicalIsland") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:DCTopologicalIsland.DCTopologicalNodes' in object) {
            attributeEntries['filledEntries']['cim:DCTopologicalIsland.DCTopologicalNodes'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCTopologicalIsland.DCTopologicalNodes'],
                                                   'cim:DCTopologicalNode',
                                                   'cim:DCTopologicalIsland.DCTopologicalNodes'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCTopologicalIsland.DCTopologicalNodes'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCTopologicalIsland.DCTopologicalNodes'],
                                                   'cim:DCTopologicalNode',
                                                   'cim:DCTopologicalIsland.DCTopologicalNodes'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.SV, ],
						'DCTopologicalNodes': [CGMESProfile.shortNames.SV, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DCTopologicalIsland.DCTopologicalNodes",
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
            if (!DCTopologicalIsland.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class DCTopologicalIsland: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DCTopologicalIsland.attributeHTML(object, cimmenu);
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
export default DCTopologicalIsland
