import templates from "../../templates/index.js"
import ACDCTerminal from "./ACDCTerminal.js"
import common from "../../src/common.js"

class DCBaseTerminal extends ACDCTerminal {

    static attributeHTML(object, cimmenu, classType="DCBaseTerminal") {
        let attributeEntries = ACDCTerminal.attributeHTML(object, cimmenu, classType);
        if ('cim:DCBaseTerminal.DCNode' in object) {
            attributeEntries['filledEntries']['cim:DCBaseTerminal.DCNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCBaseTerminal.DCNode'],
                                                   'cim:DCNode',
                                                   'cim:DCBaseTerminal.DCNode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCBaseTerminal.DCNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCBaseTerminal.DCNode'],
                                                   'cim:DCNode',
                                                   'cim:DCBaseTerminal.DCNode'
                                                 );
        }
        if ('cim:DCBaseTerminal.DCTopologicalNode' in object) {
            attributeEntries['filledEntries']['cim:DCBaseTerminal.DCTopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCBaseTerminal.DCTopologicalNode'],
                                                   'cim:DCTopologicalNode',
                                                   'cim:DCBaseTerminal.DCTopologicalNode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DCBaseTerminal.DCTopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DCBaseTerminal.DCTopologicalNode'],
                                                   'cim:DCTopologicalNode',
                                                   'cim:DCBaseTerminal.DCTopologicalNode'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DCBaseTerminal.DCNode",
            "cim:DCBaseTerminal.DCTopologicalNode",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( ACDCTerminal.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!DCBaseTerminal.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class DCBaseTerminal: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DCBaseTerminal.attributeHTML(object, cimmenu);
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
        "ACDCConverterDCTerminal",
        "DCTerminal",
        ];
        return subClasses;
    }
};
export default DCBaseTerminal
