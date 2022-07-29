import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ControlAreaGeneratingUnit extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="ControlAreaGeneratingUnit") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:ControlAreaGeneratingUnit.GeneratingUnit' in object) {
            attributeEntries['filledEntries']['cim:ControlAreaGeneratingUnit.GeneratingUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ControlAreaGeneratingUnit.GeneratingUnit'],
                                                   'cim:GeneratingUnit',
                                                   'cim:ControlAreaGeneratingUnit.GeneratingUnit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ControlAreaGeneratingUnit.GeneratingUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ControlAreaGeneratingUnit.GeneratingUnit'],
                                                   'cim:GeneratingUnit',
                                                   'cim:ControlAreaGeneratingUnit.GeneratingUnit'
                                                 );
        }
        if ('cim:ControlAreaGeneratingUnit.ControlArea' in object) {
            attributeEntries['filledEntries']['cim:ControlAreaGeneratingUnit.ControlArea'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ControlAreaGeneratingUnit.ControlArea'],
                                                   'cim:ControlArea',
                                                   'cim:ControlAreaGeneratingUnit.ControlArea'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ControlAreaGeneratingUnit.ControlArea'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ControlAreaGeneratingUnit.ControlArea'],
                                                   'cim:ControlArea',
                                                   'cim:ControlAreaGeneratingUnit.ControlArea'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'GeneratingUnit': [CGMESProfile.shortNames.EQ, ],
						'ControlArea': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ControlAreaGeneratingUnit.GeneratingUnit",
            "cim:ControlAreaGeneratingUnit.ControlArea",
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
            if (!ControlAreaGeneratingUnit.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ControlAreaGeneratingUnit: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ControlAreaGeneratingUnit.attributeHTML(object, cimmenu);
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
export default ControlAreaGeneratingUnit
