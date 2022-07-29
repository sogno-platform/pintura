import templates from "../../templates/index.js"
import Control from "./Control.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class AccumulatorReset extends Control {

    static attributeHTML(object, cimmenu, classType="AccumulatorReset") {
        let attributeEntries = Control.attributeHTML(object, cimmenu, classType);
        if ('cim:AccumulatorReset.AccumulatorValue' in object) {
            attributeEntries['filledEntries']['cim:AccumulatorReset.AccumulatorValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AccumulatorReset.AccumulatorValue'],
                                                   'cim:AccumulatorValue',
                                                   'cim:AccumulatorReset.AccumulatorValue'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AccumulatorReset.AccumulatorValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AccumulatorReset.AccumulatorValue'],
                                                   'cim:AccumulatorValue',
                                                   'cim:AccumulatorReset.AccumulatorValue'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'AccumulatorValue': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:AccumulatorReset.AccumulatorValue",
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
            if (!AccumulatorReset.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class AccumulatorReset: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = AccumulatorReset.attributeHTML(object, cimmenu);
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
export default AccumulatorReset
