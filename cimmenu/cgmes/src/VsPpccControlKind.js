import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"

const VsPpccControlKindEnum = {
        pPcc:0,
        udc:1,
        pPccAndUdcDroop:2,
        pPccAndUdcDroopWithCompensation:3,
        pPccAndUdcDroopPilot:4,
}
const possibleValues = [
        { "value": "--"},
        { "value": "VsPpccControlKind.pPcc", "label": "pPcc" },
        { "value": "VsPpccControlKind.udc", "label": "udc" },
        { "value": "VsPpccControlKind.pPccAndUdcDroop", "label": "pPccAndUdcDroop" },
        { "value": "VsPpccControlKind.pPccAndUdcDroopWithCompensation", "label": "pPccAndUdcDroopWithCompensation" },
        { "value": "VsPpccControlKind.pPccAndUdcDroopPilot", "label": "pPccAndUdcDroopPilot" },
]

class VsPpccControlKind extends BaseClass {

    static attributeHTML(object, cimmenu, classType="VsPpccControlKind") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.SSH, ],
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
            if (!VsPpccControlKind.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class VsPpccControlKind: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = VsPpccControlKind.attributeHTML(object, cimmenu);
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
export default VsPpccControlKind
