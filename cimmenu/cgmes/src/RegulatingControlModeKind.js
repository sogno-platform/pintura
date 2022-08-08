import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"

const RegulatingControlModeKindEnum = {
        voltage:0,
        activePower:1,
        reactivePower:2,
        currentFlow:3,
        admittance:4,
        timeScheduled:5,
        temperature:6,
        powerFactor:7,
}
const possibleValues = [
        { "value": "--"},
        { "value": "RegulatingControlModeKind.voltage", "label": "voltage" },
        { "value": "RegulatingControlModeKind.activePower", "label": "activePower" },
        { "value": "RegulatingControlModeKind.reactivePower", "label": "reactivePower" },
        { "value": "RegulatingControlModeKind.currentFlow", "label": "currentFlow" },
        { "value": "RegulatingControlModeKind.admittance", "label": "admittance" },
        { "value": "RegulatingControlModeKind.timeScheduled", "label": "timeScheduled" },
        { "value": "RegulatingControlModeKind.temperature", "label": "temperature" },
        { "value": "RegulatingControlModeKind.powerFactor", "label": "powerFactor" },
]

class RegulatingControlModeKind extends BaseClass {

    static attributeHTML(object, cimmenu, classType="RegulatingControlModeKind") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
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
            if (!RegulatingControlModeKind.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class RegulatingControlModeKind: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = RegulatingControlModeKind.attributeHTML(object, cimmenu);
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
export default RegulatingControlModeKind
