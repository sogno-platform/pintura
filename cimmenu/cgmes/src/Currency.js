import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
const CurrencyEnum = {
        USD:0,
        EUR:1,
        AUD:2,
        CAD:3,
        CHF:4,
        CNY:5,
        DKK:6,
        GBP:7,
        JPY:8,
        NOK:9,
        RUR:10,
        SEK:11,
        INR:12,
        other:13,
}
const possibleValues = [
        { "value": "--"},
        { "value": "Currency.USD", "label": "USD" },
        { "value": "Currency.EUR", "label": "EUR" },
        { "value": "Currency.AUD", "label": "AUD" },
        { "value": "Currency.CAD", "label": "CAD" },
        { "value": "Currency.CHF", "label": "CHF" },
        { "value": "Currency.CNY", "label": "CNY" },
        { "value": "Currency.DKK", "label": "DKK" },
        { "value": "Currency.GBP", "label": "GBP" },
        { "value": "Currency.JPY", "label": "JPY" },
        { "value": "Currency.NOK", "label": "NOK" },
        { "value": "Currency.RUR", "label": "RUR" },
        { "value": "Currency.SEK", "label": "SEK" },
        { "value": "Currency.INR", "label": "INR" },
        { "value": "Currency.other", "label": "other" },
]

class Currency extends BaseClass {

    static attributeHTML(object, cimmenu, classType="Currency") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( BaseClass.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!Currency.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class Currency: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Currency.attributeHTML(object, cimmenu);
        let filledEntries = separateEntries['filledEntries'];
        let emptyEntries = separateEntries['emptyEntries'];
        let attributeEntries = { ...filledEntries, ...emptyEntries };
        return templates.handlebars_cim_class_render({ 'attributes': attributeEntries});
    }
    static renderAsAttribute(matchingComponents) {
        let template = templates.handlebars_cim_instance_type;
        matchingComponents.aggregates = possibleValues;
        for (let index in matchingComponents.aggregates) {
            if (matchingComponents.value) {
                let value = matchingComponents.value['rdf:resource']
                let candidate = matchingComponents.aggregates[index].value;
                if(candidate !== undefined && common.getRidOfHash(value) == candidate) {
                    matchingComponents.aggregates[index].selected = 'selected';
                }
                else {
                    delete matchingComponents.aggregates[index].selected;
                }
            }
        }
        return template(matchingComponents);
    }
    static subClassList() {
        let subClasses = [
        ];
        return subClasses;
    }
};
export default Currency
