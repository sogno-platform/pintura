import templates from "../../templates/index.js"
import EnergyArea from "./EnergyArea.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class SubLoadArea extends EnergyArea {

    static attributeHTML(object, cimmenu, classType="SubLoadArea") {
        let attributeEntries = EnergyArea.attributeHTML(object, cimmenu, classType);
        if ('cim:SubLoadArea.LoadArea' in object) {
            attributeEntries['filledEntries']['cim:SubLoadArea.LoadArea'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SubLoadArea.LoadArea'],
                                                   'cim:LoadArea',
                                                   'cim:SubLoadArea.LoadArea'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SubLoadArea.LoadArea'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SubLoadArea.LoadArea'],
                                                   'cim:LoadArea',
                                                   'cim:SubLoadArea.LoadArea'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'LoadArea': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:SubLoadArea.LoadArea",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( EnergyArea.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!SubLoadArea.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class SubLoadArea: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SubLoadArea.attributeHTML(object, cimmenu);
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
export default SubLoadArea
