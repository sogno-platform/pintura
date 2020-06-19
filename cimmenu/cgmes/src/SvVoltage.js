import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"

class SvVoltage extends BaseClass {

    static attributeHTML(object, cimmenu, classType="SvVoltage") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:SvVoltage.angle' in object) {
            attributeEntries['filledEntries']['cim:SvVoltage.angle'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvVoltage.angle'],
                                                   'cim:AngleDegrees',
                                                   'cim:SvVoltage.angle'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SvVoltage.angle'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvVoltage.angle'],
                                                   'cim:AngleDegrees',
                                                   'cim:SvVoltage.angle'
                                                 );
        }
        if ('cim:SvVoltage.v' in object) {
            attributeEntries['filledEntries']['cim:SvVoltage.v'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvVoltage.v'],
                                                   'cim:Voltage',
                                                   'cim:SvVoltage.v'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SvVoltage.v'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvVoltage.v'],
                                                   'cim:Voltage',
                                                   'cim:SvVoltage.v'
                                                 );
        }
        if ('cim:SvVoltage.TopologicalNode' in object) {
            attributeEntries['filledEntries']['cim:SvVoltage.TopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvVoltage.TopologicalNode'],
                                                   'cim:TopologicalNode',
                                                   'cim:SvVoltage.TopologicalNode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SvVoltage.TopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvVoltage.TopologicalNode'],
                                                   'cim:TopologicalNode',
                                                   'cim:SvVoltage.TopologicalNode'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:SvVoltage.angle",
            "cim:SvVoltage.v",
            "cim:SvVoltage.TopologicalNode",
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
            if (!SvVoltage.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class SvVoltage: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SvVoltage.attributeHTML(object, cimmenu);
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
export default SvVoltage
