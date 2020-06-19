import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
const InputSignalKindEnum = {
        rotorSpeed:0,
        rotorAngularFrequencyDeviation:1,
        busFrequency:2,
        busFrequencyDeviation:3,
        generatorElectricalPower:4,
        generatorAcceleratingPower:5,
        busVoltage:6,
        busVoltageDerivative:7,
        branchCurrent:8,
        fieldCurrent:9,
}
const possibleValues = [
        { "value": "--"},
        { "value": "InputSignalKind.rotorSpeed", "label": "rotorSpeed" },
        { "value": "InputSignalKind.rotorAngularFrequencyDeviation", "label": "rotorAngularFrequencyDeviation" },
        { "value": "InputSignalKind.busFrequency", "label": "busFrequency" },
        { "value": "InputSignalKind.busFrequencyDeviation", "label": "busFrequencyDeviation" },
        { "value": "InputSignalKind.generatorElectricalPower", "label": "generatorElectricalPower" },
        { "value": "InputSignalKind.generatorAcceleratingPower", "label": "generatorAcceleratingPower" },
        { "value": "InputSignalKind.busVoltage", "label": "busVoltage" },
        { "value": "InputSignalKind.busVoltageDerivative", "label": "busVoltageDerivative" },
        { "value": "InputSignalKind.branchCurrent", "label": "branchCurrent" },
        { "value": "InputSignalKind.fieldCurrent", "label": "fieldCurrent" },
]

class InputSignalKind extends BaseClass {

    static attributeHTML(object, cimmenu, classType="InputSignalKind") {
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
            if (!InputSignalKind.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class InputSignalKind: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = InputSignalKind.attributeHTML(object, cimmenu);
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
export default InputSignalKind
