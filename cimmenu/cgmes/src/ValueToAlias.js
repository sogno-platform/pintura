import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ValueToAlias extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="ValueToAlias") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:ValueToAlias.ValueAliasSet' in object) {
            attributeEntries['filledEntries']['cim:ValueToAlias.ValueAliasSet'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ValueToAlias.ValueAliasSet'],
                                                   'cim:ValueAliasSet',
                                                   'cim:ValueToAlias.ValueAliasSet'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ValueToAlias.ValueAliasSet'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ValueToAlias.ValueAliasSet'],
                                                   'cim:ValueAliasSet',
                                                   'cim:ValueToAlias.ValueAliasSet'
                                                 );
        }
        if ('cim:ValueToAlias.value' in object) {
            attributeEntries['filledEntries']['cim:ValueToAlias.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ValueToAlias.value'],
                                                   'cim:Integer',
                                                   'cim:ValueToAlias.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ValueToAlias.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ValueToAlias.value'],
                                                   'cim:Integer',
                                                   'cim:ValueToAlias.value'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'ValueAliasSet': [CGMESProfile.shortNames.EQ, ],
						'value': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ValueToAlias.ValueAliasSet",
            "cim:ValueToAlias.value",
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
            if (!ValueToAlias.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ValueToAlias: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ValueToAlias.attributeHTML(object, cimmenu);
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
export default ValueToAlias
