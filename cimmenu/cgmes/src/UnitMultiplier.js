import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"

const UnitMultiplierEnum = {
        p:0,
        n:1,
        micro:2,
        m:3,
        c:4,
        d:5,
        k:6,
        M:7,
        G:8,
        T:9,
        none:10,
}
const possibleValues = [
        { "value": "--"},
        { "value": "UnitMultiplier.p", "label": "p" },
        { "value": "UnitMultiplier.n", "label": "n" },
        { "value": "UnitMultiplier.micro", "label": "micro" },
        { "value": "UnitMultiplier.m", "label": "m" },
        { "value": "UnitMultiplier.c", "label": "c" },
        { "value": "UnitMultiplier.d", "label": "d" },
        { "value": "UnitMultiplier.k", "label": "k" },
        { "value": "UnitMultiplier.M", "label": "M" },
        { "value": "UnitMultiplier.G", "label": "G" },
        { "value": "UnitMultiplier.T", "label": "T" },
        { "value": "UnitMultiplier.none", "label": "none" },
]

class UnitMultiplier extends BaseClass {

    static attributeHTML(object, cimmenu, classType="UnitMultiplier") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DL, CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.SV, CGMESProfile.shortNames.DY, CGMESProfile.shortNames.EQ_BD, ],
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
            if (!UnitMultiplier.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class UnitMultiplier: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = UnitMultiplier.attributeHTML(object, cimmenu);
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
export default UnitMultiplier
