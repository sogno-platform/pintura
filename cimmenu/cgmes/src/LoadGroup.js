import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class LoadGroup extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="LoadGroup") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:LoadGroup.SubLoadArea' in object) {
            attributeEntries['filledEntries']['cim:LoadGroup.SubLoadArea'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGroup.SubLoadArea'],
                                                   'cim:SubLoadArea',
                                                   'cim:LoadGroup.SubLoadArea'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LoadGroup.SubLoadArea'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LoadGroup.SubLoadArea'],
                                                   'cim:SubLoadArea',
                                                   'cim:LoadGroup.SubLoadArea'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:LoadGroup.SubLoadArea",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( IdentifiedObject.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!LoadGroup.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class LoadGroup: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = LoadGroup.attributeHTML(object, cimmenu);
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
        "ConformLoadGroup",
        "NonConformLoadGroup",
        ];
        return subClasses;
    }
};
export default LoadGroup
