import templates from "../../templates/index.js"
import VoltageAdjusterDynamics from "./VoltageAdjusterDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class VoltageAdjusterUserDefined extends VoltageAdjusterDynamics {

    static attributeHTML(object, cimmenu, classType="VoltageAdjusterUserDefined") {
        let attributeEntries = VoltageAdjusterDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:VoltageAdjusterUserDefined.proprietary' in object) {
            attributeEntries['filledEntries']['cim:VoltageAdjusterUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltageAdjusterUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:VoltageAdjusterUserDefined.proprietary'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VoltageAdjusterUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltageAdjusterUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:VoltageAdjusterUserDefined.proprietary'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'proprietary': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:VoltageAdjusterUserDefined.proprietary",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( VoltageAdjusterDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!VoltageAdjusterUserDefined.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class VoltageAdjusterUserDefined: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = VoltageAdjusterUserDefined.attributeHTML(object, cimmenu);
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
export default VoltageAdjusterUserDefined
