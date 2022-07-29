import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"

const PhaseCodeEnum = {
        ABCN:0,
        ABC:1,
        ABN:2,
        ACN:3,
        BCN:4,
        AB:5,
        AC:6,
        BC:7,
        AN:8,
        BN:9,
        CN:10,
        A:11,
        B:12,
        C:13,
        N:14,
        s1N:15,
        s2N:16,
        s12N:17,
        s1:18,
        s2:19,
        s12:20,
}
const possibleValues = [
        { "value": "--"},
        { "value": "PhaseCode.ABCN", "label": "ABCN" },
        { "value": "PhaseCode.ABC", "label": "ABC" },
        { "value": "PhaseCode.ABN", "label": "ABN" },
        { "value": "PhaseCode.ACN", "label": "ACN" },
        { "value": "PhaseCode.BCN", "label": "BCN" },
        { "value": "PhaseCode.AB", "label": "AB" },
        { "value": "PhaseCode.AC", "label": "AC" },
        { "value": "PhaseCode.BC", "label": "BC" },
        { "value": "PhaseCode.AN", "label": "AN" },
        { "value": "PhaseCode.BN", "label": "BN" },
        { "value": "PhaseCode.CN", "label": "CN" },
        { "value": "PhaseCode.A", "label": "A" },
        { "value": "PhaseCode.B", "label": "B" },
        { "value": "PhaseCode.C", "label": "C" },
        { "value": "PhaseCode.N", "label": "N" },
        { "value": "PhaseCode.s1N", "label": "s1N" },
        { "value": "PhaseCode.s2N", "label": "s2N" },
        { "value": "PhaseCode.s12N", "label": "s12N" },
        { "value": "PhaseCode.s1", "label": "s1" },
        { "value": "PhaseCode.s2", "label": "s2" },
        { "value": "PhaseCode.s12", "label": "s12" },
]

class PhaseCode extends BaseClass {

    static attributeHTML(object, cimmenu, classType="PhaseCode") {
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
            if (!PhaseCode.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PhaseCode: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PhaseCode.attributeHTML(object, cimmenu);
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
export default PhaseCode
