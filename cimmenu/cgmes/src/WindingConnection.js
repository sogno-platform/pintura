import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
const WindingConnectionEnum = {
        D:0,
        Y:1,
        Z:2,
        Yn:3,
        Zn:4,
        A:5,
        I:6,
}
const possibleValues = [
        { "value": "--"},
        { "value": "WindingConnection.D", "label": "D" },
        { "value": "WindingConnection.Y", "label": "Y" },
        { "value": "WindingConnection.Z", "label": "Z" },
        { "value": "WindingConnection.Yn", "label": "Yn" },
        { "value": "WindingConnection.Zn", "label": "Zn" },
        { "value": "WindingConnection.A", "label": "A" },
        { "value": "WindingConnection.I", "label": "I" },
]

class WindingConnection extends BaseClass {

    static attributeHTML(object, cimmenu, classType="WindingConnection") {
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
            if (!WindingConnection.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindingConnection: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindingConnection.attributeHTML(object, cimmenu);
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
export default WindingConnection
