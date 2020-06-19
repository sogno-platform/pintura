import templates from "../../templates/index.js"
import EnergyConsumer from "./EnergyConsumer.js"
import common from "../../src/common.js"

class ConformLoad extends EnergyConsumer {

    static attributeHTML(object, cimmenu, classType="ConformLoad") {
        let attributeEntries = EnergyConsumer.attributeHTML(object, cimmenu, classType);
        if ('cim:ConformLoad.LoadGroup' in object) {
            attributeEntries['filledEntries']['cim:ConformLoad.LoadGroup'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConformLoad.LoadGroup'],
                                                   'cim:ConformLoadGroup',
                                                   'cim:ConformLoad.LoadGroup'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ConformLoad.LoadGroup'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConformLoad.LoadGroup'],
                                                   'cim:ConformLoadGroup',
                                                   'cim:ConformLoad.LoadGroup'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ConformLoad.LoadGroup",
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
            if (!ConformLoad.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ConformLoad: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ConformLoad.attributeHTML(object, cimmenu);
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
export default ConformLoad
