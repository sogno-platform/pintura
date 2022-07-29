import templates from "../../templates/index.js"
import AnalogControl from "./AnalogControl.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class SetPoint extends AnalogControl {

    static attributeHTML(object, cimmenu, classType="SetPoint") {
        let attributeEntries = AnalogControl.attributeHTML(object, cimmenu, classType);
        if ('cim:SetPoint.normalValue' in object) {
            attributeEntries['filledEntries']['cim:SetPoint.normalValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SetPoint.normalValue'],
                                                   'cim:Simple_Float',
                                                   'cim:SetPoint.normalValue'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SetPoint.normalValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SetPoint.normalValue'],
                                                   'cim:Simple_Float',
                                                   'cim:SetPoint.normalValue'
                                                 );
        }
        if ('cim:SetPoint.value' in object) {
            attributeEntries['filledEntries']['cim:SetPoint.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SetPoint.value'],
                                                   'cim:Simple_Float',
                                                   'cim:SetPoint.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SetPoint.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SetPoint.value'],
                                                   'cim:Simple_Float',
                                                   'cim:SetPoint.value'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'normalValue': [CGMESProfile.shortNames.EQ, ],
						'value': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:SetPoint.normalValue",
            "cim:SetPoint.value",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( AnalogControl.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!SetPoint.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class SetPoint: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SetPoint.attributeHTML(object, cimmenu);
        let filledEntries = separateEntries['filledEntries'];
        let emptyEntries = separateEntries['emptyEntries'];
        let attributeEntries = { ...filledEntries, ...emptyEntries };
        return templates.handlebars_cim_class_render({ 'attributes': attributeEntries});
    }
    static renderAsAttribute(matchingComponents) {
        let template = templates.handlebars_cim_update_complex_type;
        return template(matchingComponents);
    }
    static subClassList() {
        let subClasses = [
        ];
        return subClasses;
    }
};
export default SetPoint
