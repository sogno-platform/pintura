import templates from "../../templates/index.js"
import LimitSet from "./LimitSet.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class AccumulatorLimitSet extends LimitSet {

    static attributeHTML(object, cimmenu, classType="AccumulatorLimitSet") {
        let attributeEntries = LimitSet.attributeHTML(object, cimmenu, classType);
        if ('cim:AccumulatorLimitSet.Measurements' in object) {
            attributeEntries['filledEntries']['cim:AccumulatorLimitSet.Measurements'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AccumulatorLimitSet.Measurements'],
                                                   'cim:Accumulator',
                                                   'cim:AccumulatorLimitSet.Measurements'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AccumulatorLimitSet.Measurements'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AccumulatorLimitSet.Measurements'],
                                                   'cim:Accumulator',
                                                   'cim:AccumulatorLimitSet.Measurements'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'Measurements': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:AccumulatorLimitSet.Measurements",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( LimitSet.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!AccumulatorLimitSet.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class AccumulatorLimitSet: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = AccumulatorLimitSet.attributeHTML(object, cimmenu);
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
export default AccumulatorLimitSet
