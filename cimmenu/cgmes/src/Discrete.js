import templates from "../../templates/index.js"
import Measurement from "./Measurement.js"
import common from "../../src/common.js"

class Discrete extends Measurement {

    static attributeHTML(object, cimmenu, classType="Discrete") {
        let attributeEntries = Measurement.attributeHTML(object, cimmenu, classType);
        if ('cim:Discrete.ValueAliasSet' in object) {
            attributeEntries['filledEntries']['cim:Discrete.ValueAliasSet'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Discrete.ValueAliasSet'],
                                                   'cim:ValueAliasSet',
                                                   'cim:Discrete.ValueAliasSet'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Discrete.ValueAliasSet'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Discrete.ValueAliasSet'],
                                                   'cim:ValueAliasSet',
                                                   'cim:Discrete.ValueAliasSet'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Discrete.ValueAliasSet",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( Measurement.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!Discrete.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class Discrete: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Discrete.attributeHTML(object, cimmenu);
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
export default Discrete
