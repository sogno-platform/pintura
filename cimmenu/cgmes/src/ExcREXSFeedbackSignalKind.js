import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"

const ExcREXSFeedbackSignalKindEnum = {
        fieldVoltage:0,
        fieldCurrent:1,
        outputVoltage:2,
}
const possibleValues = [
        { "value": "--"},
        { "value": "ExcREXSFeedbackSignalKind.fieldVoltage", "label": "fieldVoltage" },
        { "value": "ExcREXSFeedbackSignalKind.fieldCurrent", "label": "fieldCurrent" },
        { "value": "ExcREXSFeedbackSignalKind.outputVoltage", "label": "outputVoltage" },
]

class ExcREXSFeedbackSignalKind extends BaseClass {

    static attributeHTML(object, cimmenu, classType="ExcREXSFeedbackSignalKind") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
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
            if (!ExcREXSFeedbackSignalKind.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcREXSFeedbackSignalKind: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcREXSFeedbackSignalKind.attributeHTML(object, cimmenu);
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
export default ExcREXSFeedbackSignalKind
