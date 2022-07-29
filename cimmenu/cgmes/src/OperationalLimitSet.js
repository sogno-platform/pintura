import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class OperationalLimitSet extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="OperationalLimitSet") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:OperationalLimitSet.Terminal' in object) {
            attributeEntries['filledEntries']['cim:OperationalLimitSet.Terminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OperationalLimitSet.Terminal'],
                                                   'cim:ACDCTerminal',
                                                   'cim:OperationalLimitSet.Terminal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OperationalLimitSet.Terminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OperationalLimitSet.Terminal'],
                                                   'cim:ACDCTerminal',
                                                   'cim:OperationalLimitSet.Terminal'
                                                 );
        }
        if ('cim:OperationalLimitSet.Equipment' in object) {
            attributeEntries['filledEntries']['cim:OperationalLimitSet.Equipment'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OperationalLimitSet.Equipment'],
                                                   'cim:Equipment',
                                                   'cim:OperationalLimitSet.Equipment'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OperationalLimitSet.Equipment'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OperationalLimitSet.Equipment'],
                                                   'cim:Equipment',
                                                   'cim:OperationalLimitSet.Equipment'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'Terminal': [CGMESProfile.shortNames.EQ, ],
						'Equipment': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:OperationalLimitSet.Terminal",
            "cim:OperationalLimitSet.Equipment",
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
            if (!OperationalLimitSet.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class OperationalLimitSet: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = OperationalLimitSet.attributeHTML(object, cimmenu);
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
export default OperationalLimitSet
