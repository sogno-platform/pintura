import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"

const ExcST7BUELselectorKindEnum = {
        noUELinput:0,
        addVref:1,
        inputHVgate:2,
        outputHVgate:3,
}
const possibleValues = [
        { "value": "--"},
        { "value": "ExcST7BUELselectorKind.noUELinput", "label": "noUELinput" },
        { "value": "ExcST7BUELselectorKind.addVref", "label": "addVref" },
        { "value": "ExcST7BUELselectorKind.inputHVgate", "label": "inputHVgate" },
        { "value": "ExcST7BUELselectorKind.outputHVgate", "label": "outputHVgate" },
]

class ExcST7BUELselectorKind extends BaseClass {

    static attributeHTML(object, cimmenu, classType="ExcST7BUELselectorKind") {
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
            if (!ExcST7BUELselectorKind.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcST7BUELselectorKind: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcST7BUELselectorKind.attributeHTML(object, cimmenu);
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
export default ExcST7BUELselectorKind
