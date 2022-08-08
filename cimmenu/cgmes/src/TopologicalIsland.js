import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class TopologicalIsland extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="TopologicalIsland") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:TopologicalIsland.AngleRefTopologicalNode' in object) {
            attributeEntries['filledEntries']['cim:TopologicalIsland.AngleRefTopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalIsland.AngleRefTopologicalNode'],
                                                   'cim:TopologicalNode',
                                                   'cim:TopologicalIsland.AngleRefTopologicalNode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologicalIsland.AngleRefTopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalIsland.AngleRefTopologicalNode'],
                                                   'cim:TopologicalNode',
                                                   'cim:TopologicalIsland.AngleRefTopologicalNode'
                                                 );
        }
        if ('cim:TopologicalIsland.TopologicalNodes' in object) {
            attributeEntries['filledEntries']['cim:TopologicalIsland.TopologicalNodes'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalIsland.TopologicalNodes'],
                                                   'cim:TopologicalNode',
                                                   'cim:TopologicalIsland.TopologicalNodes'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TopologicalIsland.TopologicalNodes'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TopologicalIsland.TopologicalNodes'],
                                                   'cim:TopologicalNode',
                                                   'cim:TopologicalIsland.TopologicalNodes'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.SV, ],
						'AngleRefTopologicalNode': [CGMESProfile.shortNames.SV, ],
						'TopologicalNodes': [CGMESProfile.shortNames.SV, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:TopologicalIsland.AngleRefTopologicalNode",
            "cim:TopologicalIsland.TopologicalNodes",
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
            if (!TopologicalIsland.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class TopologicalIsland: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = TopologicalIsland.attributeHTML(object, cimmenu);
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
export default TopologicalIsland
