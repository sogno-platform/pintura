import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"

const FrancisGovernorControlKindEnum = {
        mechanicHydrolicTachoAccelerator:0,
        mechanicHydraulicTransientFeedback:1,
        electromechanicalElectrohydraulic:2,
}
const possibleValues = [
        { "value": "--"},
        { "value": "FrancisGovernorControlKind.mechanicHydrolicTachoAccelerator", "label": "mechanicHydrolicTachoAccelerator" },
        { "value": "FrancisGovernorControlKind.mechanicHydraulicTransientFeedback", "label": "mechanicHydraulicTransientFeedback" },
        { "value": "FrancisGovernorControlKind.electromechanicalElectrohydraulic", "label": "electromechanicalElectrohydraulic" },
]

class FrancisGovernorControlKind extends BaseClass {

    static attributeHTML(object, cimmenu, classType="FrancisGovernorControlKind") {
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
            if (!FrancisGovernorControlKind.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class FrancisGovernorControlKind: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = FrancisGovernorControlKind.attributeHTML(object, cimmenu);
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
export default FrancisGovernorControlKind
