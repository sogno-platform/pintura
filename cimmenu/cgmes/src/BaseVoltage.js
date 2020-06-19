import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class BaseVoltage extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="BaseVoltage") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:BaseVoltage.nominalVoltage' in object) {
            attributeEntries['filledEntries']['cim:BaseVoltage.nominalVoltage'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['BaseVoltage.nominalVoltage'],
                                                   'cim:Voltage',
                                                   'cim:BaseVoltage.nominalVoltage'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:BaseVoltage.nominalVoltage'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['BaseVoltage.nominalVoltage'],
                                                   'cim:Voltage',
                                                   'cim:BaseVoltage.nominalVoltage'
                                                 );
        }
        if ('cim:BaseVoltage.VoltageLevel' in object) {
            attributeEntries['filledEntries']['cim:BaseVoltage.VoltageLevel'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['BaseVoltage.VoltageLevel'],
                                                   'cim:VoltageLevel',
                                                   'cim:BaseVoltage.VoltageLevel'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:BaseVoltage.VoltageLevel'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['BaseVoltage.VoltageLevel'],
                                                   'cim:VoltageLevel',
                                                   'cim:BaseVoltage.VoltageLevel'
                                                 );
        }
        if ('cim:BaseVoltage.TopologicalNode' in object) {
            attributeEntries['filledEntries']['cim:BaseVoltage.TopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['BaseVoltage.TopologicalNode'],
                                                   'cim:TopologicalNode',
                                                   'cim:BaseVoltage.TopologicalNode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:BaseVoltage.TopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['BaseVoltage.TopologicalNode'],
                                                   'cim:TopologicalNode',
                                                   'cim:BaseVoltage.TopologicalNode'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:BaseVoltage.nominalVoltage",
            "cim:BaseVoltage.VoltageLevel",
            "cim:BaseVoltage.TopologicalNode",
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
            if (!BaseVoltage.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class BaseVoltage: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = BaseVoltage.attributeHTML(object, cimmenu);
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
export default BaseVoltage
