import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"

const RemoteSignalKindEnum = {
        remoteBusVoltageFrequency:0,
        remoteBusVoltageFrequencyDeviation:1,
        remoteBusFrequency:2,
        remoteBusFrequencyDeviation:3,
        remoteBusVoltageAmplitude:4,
        remoteBusVoltage:5,
        remoteBranchCurrentAmplitude:6,
        remoteBusVoltageAmplitudeDerivative:7,
        remotePuBusVoltageDerivative:8,
}
const possibleValues = [
        { "value": "--"},
        { "value": "RemoteSignalKind.remoteBusVoltageFrequency", "label": "remoteBusVoltageFrequency" },
        { "value": "RemoteSignalKind.remoteBusVoltageFrequencyDeviation", "label": "remoteBusVoltageFrequencyDeviation" },
        { "value": "RemoteSignalKind.remoteBusFrequency", "label": "remoteBusFrequency" },
        { "value": "RemoteSignalKind.remoteBusFrequencyDeviation", "label": "remoteBusFrequencyDeviation" },
        { "value": "RemoteSignalKind.remoteBusVoltageAmplitude", "label": "remoteBusVoltageAmplitude" },
        { "value": "RemoteSignalKind.remoteBusVoltage", "label": "remoteBusVoltage" },
        { "value": "RemoteSignalKind.remoteBranchCurrentAmplitude", "label": "remoteBranchCurrentAmplitude" },
        { "value": "RemoteSignalKind.remoteBusVoltageAmplitudeDerivative", "label": "remoteBusVoltageAmplitudeDerivative" },
        { "value": "RemoteSignalKind.remotePuBusVoltageDerivative", "label": "remotePuBusVoltageDerivative" },
]

class RemoteSignalKind extends BaseClass {

    static attributeHTML(object, cimmenu, classType="RemoteSignalKind") {
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
            if (!RemoteSignalKind.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class RemoteSignalKind: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = RemoteSignalKind.attributeHTML(object, cimmenu);
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
export default RemoteSignalKind
