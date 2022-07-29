import templates from "../../templates/index.js"
import Connector from "./Connector.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class BusbarSection extends Connector {

    static attributeHTML(object, cimmenu, classType="BusbarSection") {
        let attributeEntries = Connector.attributeHTML(object, cimmenu, classType);
        if ('cim:BusbarSection.ipMax' in object) {
            attributeEntries['filledEntries']['cim:BusbarSection.ipMax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['BusbarSection.ipMax'],
                                                   'cim:CurrentFlow',
                                                   'cim:BusbarSection.ipMax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:BusbarSection.ipMax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['BusbarSection.ipMax'],
                                                   'cim:CurrentFlow',
                                                   'cim:BusbarSection.ipMax'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'ipMax': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:BusbarSection.ipMax",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( Connector.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!BusbarSection.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class BusbarSection: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = BusbarSection.attributeHTML(object, cimmenu);
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
export default BusbarSection
