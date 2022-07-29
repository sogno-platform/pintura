import templates from "../../templates/index.js"
import Control from "./Control.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Command extends Control {

    static attributeHTML(object, cimmenu, classType="Command") {
        let attributeEntries = Control.attributeHTML(object, cimmenu, classType);
        if ('cim:Command.normalValue' in object) {
            attributeEntries['filledEntries']['cim:Command.normalValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Command.normalValue'],
                                                   'cim:Integer',
                                                   'cim:Command.normalValue'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Command.normalValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Command.normalValue'],
                                                   'cim:Integer',
                                                   'cim:Command.normalValue'
                                                 );
        }
        if ('cim:Command.value' in object) {
            attributeEntries['filledEntries']['cim:Command.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Command.value'],
                                                   'cim:Integer',
                                                   'cim:Command.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Command.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Command.value'],
                                                   'cim:Integer',
                                                   'cim:Command.value'
                                                 );
        }
        if ('cim:Command.DiscreteValue' in object) {
            attributeEntries['filledEntries']['cim:Command.DiscreteValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Command.DiscreteValue'],
                                                   'cim:DiscreteValue',
                                                   'cim:Command.DiscreteValue'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Command.DiscreteValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Command.DiscreteValue'],
                                                   'cim:DiscreteValue',
                                                   'cim:Command.DiscreteValue'
                                                 );
        }
        if ('cim:Command.ValueAliasSet' in object) {
            attributeEntries['filledEntries']['cim:Command.ValueAliasSet'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Command.ValueAliasSet'],
                                                   'cim:ValueAliasSet',
                                                   'cim:Command.ValueAliasSet'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Command.ValueAliasSet'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Command.ValueAliasSet'],
                                                   'cim:ValueAliasSet',
                                                   'cim:Command.ValueAliasSet'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'normalValue': [CGMESProfile.shortNames.EQ, ],
						'value': [CGMESProfile.shortNames.EQ, ],
						'DiscreteValue': [CGMESProfile.shortNames.EQ, ],
						'ValueAliasSet': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Command.normalValue",
            "cim:Command.value",
            "cim:Command.DiscreteValue",
            "cim:Command.ValueAliasSet",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( Control.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!Command.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class Command: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Command.attributeHTML(object, cimmenu);
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
export default Command
