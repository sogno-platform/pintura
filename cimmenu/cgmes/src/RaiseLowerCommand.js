import templates from "../../templates/index.js"
import AnalogControl from "./AnalogControl.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class RaiseLowerCommand extends AnalogControl {

    static attributeHTML(object, cimmenu, classType="RaiseLowerCommand") {
        let attributeEntries = AnalogControl.attributeHTML(object, cimmenu, classType);
        if ('cim:RaiseLowerCommand.ValueAliasSet' in object) {
            attributeEntries['filledEntries']['cim:RaiseLowerCommand.ValueAliasSet'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RaiseLowerCommand.ValueAliasSet'],
                                                   'cim:ValueAliasSet',
                                                   'cim:RaiseLowerCommand.ValueAliasSet'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RaiseLowerCommand.ValueAliasSet'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RaiseLowerCommand.ValueAliasSet'],
                                                   'cim:ValueAliasSet',
                                                   'cim:RaiseLowerCommand.ValueAliasSet'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'ValueAliasSet': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:RaiseLowerCommand.ValueAliasSet",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( AnalogControl.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!RaiseLowerCommand.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class RaiseLowerCommand: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = RaiseLowerCommand.attributeHTML(object, cimmenu);
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
export default RaiseLowerCommand
