import templates from "../../templates/index.js"
import VoltageCompensatorDynamics from "./VoltageCompensatorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class VoltageCompensatorUserDefined extends VoltageCompensatorDynamics {

    static attributeHTML(object, cimmenu, classType="VoltageCompensatorUserDefined") {
        let attributeEntries = VoltageCompensatorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:VoltageCompensatorUserDefined.proprietary' in object) {
            attributeEntries['filledEntries']['cim:VoltageCompensatorUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltageCompensatorUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:VoltageCompensatorUserDefined.proprietary'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VoltageCompensatorUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VoltageCompensatorUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:VoltageCompensatorUserDefined.proprietary'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'proprietary': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:VoltageCompensatorUserDefined.proprietary",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( VoltageCompensatorDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!VoltageCompensatorUserDefined.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class VoltageCompensatorUserDefined: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = VoltageCompensatorUserDefined.attributeHTML(object, cimmenu);
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
export default VoltageCompensatorUserDefined
