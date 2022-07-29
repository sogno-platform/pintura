import templates from "../../templates/index.js"
import LoadDynamics from "./LoadDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class LoadUserDefined extends LoadDynamics {

    static attributeHTML(object, cimmenu, classType="LoadUserDefined") {
        let attributeEntries = LoadDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:LoadUserDefined.proprietary' in object) {
            attributeEntries['filledEntries']['cim:LoadUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:LoadUserDefined.proprietary'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadUserDefined.proprietary'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadUserDefined.proprietary'],
                                                   'cim:Boolean',
                                                   'cim:LoadUserDefined.proprietary'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'proprietary': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:LoadUserDefined.proprietary",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( LoadDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!LoadUserDefined.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class LoadUserDefined: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = LoadUserDefined.attributeHTML(object, cimmenu);
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
export default LoadUserDefined
