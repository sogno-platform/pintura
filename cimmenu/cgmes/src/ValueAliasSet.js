import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class ValueAliasSet extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="ValueAliasSet") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:ValueAliasSet.Discretes' in object) {
            attributeEntries['filledEntries']['cim:ValueAliasSet.Discretes'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ValueAliasSet.Discretes'],
                                                   'cim:Discrete',
                                                   'cim:ValueAliasSet.Discretes'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ValueAliasSet.Discretes'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ValueAliasSet.Discretes'],
                                                   'cim:Discrete',
                                                   'cim:ValueAliasSet.Discretes'
                                                 );
        }
        if ('cim:ValueAliasSet.Values' in object) {
            attributeEntries['filledEntries']['cim:ValueAliasSet.Values'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ValueAliasSet.Values'],
                                                   'cim:ValueToAlias',
                                                   'cim:ValueAliasSet.Values'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ValueAliasSet.Values'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ValueAliasSet.Values'],
                                                   'cim:ValueToAlias',
                                                   'cim:ValueAliasSet.Values'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ValueAliasSet.Discretes",
            "cim:ValueAliasSet.Values",
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
            if (!ValueAliasSet.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ValueAliasSet: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ValueAliasSet.attributeHTML(object, cimmenu);
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
export default ValueAliasSet
