import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
const SynchronousMachineKindEnum = {
        generator:0,
        condenser:1,
        generatorOrCondenser:2,
        motor:3,
        generatorOrMotor:4,
        motorOrCondenser:5,
        generatorOrCondenserOrMotor:6,
}
const possibleValues = [
        { "value": "--"},
        { "value": "SynchronousMachineKind.generator", "label": "generator" },
        { "value": "SynchronousMachineKind.condenser", "label": "condenser" },
        { "value": "SynchronousMachineKind.generatorOrCondenser", "label": "generatorOrCondenser" },
        { "value": "SynchronousMachineKind.motor", "label": "motor" },
        { "value": "SynchronousMachineKind.generatorOrMotor", "label": "generatorOrMotor" },
        { "value": "SynchronousMachineKind.motorOrCondenser", "label": "motorOrCondenser" },
        { "value": "SynchronousMachineKind.generatorOrCondenserOrMotor", "label": "generatorOrCondenserOrMotor" },
]

class SynchronousMachineKind extends BaseClass {

    static attributeHTML(object, cimmenu, classType="SynchronousMachineKind") {
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
            if (!SynchronousMachineKind.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class SynchronousMachineKind: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SynchronousMachineKind.attributeHTML(object, cimmenu);
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
export default SynchronousMachineKind
