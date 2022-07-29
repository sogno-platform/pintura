import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"

const UnitSymbolEnum = {
        VA:0,
        W:1,
        VAr:2,
        VAh:3,
        Wh:4,
        VArh:5,
        V:6,
        ohm:7,
        A:8,
        F:9,
        H:10,
        degC:11,
        s:12,
        min:13,
        h:14,
        deg:15,
        rad:16,
        J:17,
        N:18,
        S:19,
        none:20,
        Hz:21,
        g:22,
        Pa:23,
        m:24,
        m2:25,
        m3:26,
}
const possibleValues = [
        { "value": "--"},
        { "value": "UnitSymbol.VA", "label": "VA" },
        { "value": "UnitSymbol.W", "label": "W" },
        { "value": "UnitSymbol.VAr", "label": "VAr" },
        { "value": "UnitSymbol.VAh", "label": "VAh" },
        { "value": "UnitSymbol.Wh", "label": "Wh" },
        { "value": "UnitSymbol.VArh", "label": "VArh" },
        { "value": "UnitSymbol.V", "label": "V" },
        { "value": "UnitSymbol.ohm", "label": "ohm" },
        { "value": "UnitSymbol.A", "label": "A" },
        { "value": "UnitSymbol.F", "label": "F" },
        { "value": "UnitSymbol.H", "label": "H" },
        { "value": "UnitSymbol.degC", "label": "degC" },
        { "value": "UnitSymbol.s", "label": "s" },
        { "value": "UnitSymbol.min", "label": "min" },
        { "value": "UnitSymbol.h", "label": "h" },
        { "value": "UnitSymbol.deg", "label": "deg" },
        { "value": "UnitSymbol.rad", "label": "rad" },
        { "value": "UnitSymbol.J", "label": "J" },
        { "value": "UnitSymbol.N", "label": "N" },
        { "value": "UnitSymbol.S", "label": "S" },
        { "value": "UnitSymbol.none", "label": "none" },
        { "value": "UnitSymbol.Hz", "label": "Hz" },
        { "value": "UnitSymbol.g", "label": "g" },
        { "value": "UnitSymbol.Pa", "label": "Pa" },
        { "value": "UnitSymbol.m", "label": "m" },
        { "value": "UnitSymbol.m2", "label": "m2" },
        { "value": "UnitSymbol.m3", "label": "m3" },
]

class UnitSymbol extends BaseClass {

    static attributeHTML(object, cimmenu, classType="UnitSymbol") {
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
            if (!UnitSymbol.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class UnitSymbol: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = UnitSymbol.attributeHTML(object, cimmenu);
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
export default UnitSymbol
