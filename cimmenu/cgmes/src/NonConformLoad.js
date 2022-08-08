import templates from "../../templates/index.js"
import EnergyConsumer from "./EnergyConsumer.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class NonConformLoad extends EnergyConsumer {

    static attributeHTML(object, cimmenu, classType="NonConformLoad") {
        let attributeEntries = EnergyConsumer.attributeHTML(object, cimmenu, classType);
        if ('cim:NonConformLoad.LoadGroup' in object) {
            attributeEntries['filledEntries']['cim:NonConformLoad.LoadGroup'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['NonConformLoad.LoadGroup'],
                                                   'cim:NonConformLoadGroup',
                                                   'cim:NonConformLoad.LoadGroup'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:NonConformLoad.LoadGroup'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['NonConformLoad.LoadGroup'],
                                                   'cim:NonConformLoadGroup',
                                                   'cim:NonConformLoad.LoadGroup'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, ],
						'LoadGroup': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:NonConformLoad.LoadGroup",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( EnergyConsumer.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!NonConformLoad.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class NonConformLoad: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = NonConformLoad.attributeHTML(object, cimmenu);
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
export default NonConformLoad
