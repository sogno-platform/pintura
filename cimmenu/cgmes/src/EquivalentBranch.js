import templates from "../../templates/index.js"
import EquivalentEquipment from "./EquivalentEquipment.js"
import common from "../../src/common.js"

class EquivalentBranch extends EquivalentEquipment {

    static attributeHTML(object, cimmenu, classType="EquivalentBranch") {
        let attributeEntries = EquivalentEquipment.attributeHTML(object, cimmenu, classType);
        if ('cim:EquivalentBranch.r' in object) {
            attributeEntries['filledEntries']['cim:EquivalentBranch.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.r'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentBranch.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentBranch.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.r'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentBranch.r'
                                                 );
        }
        if ('cim:EquivalentBranch.r21' in object) {
            attributeEntries['filledEntries']['cim:EquivalentBranch.r21'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.r21'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentBranch.r21'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentBranch.r21'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.r21'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentBranch.r21'
                                                 );
        }
        if ('cim:EquivalentBranch.x' in object) {
            attributeEntries['filledEntries']['cim:EquivalentBranch.x'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.x'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentBranch.x'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentBranch.x'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.x'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentBranch.x'
                                                 );
        }
        if ('cim:EquivalentBranch.x21' in object) {
            attributeEntries['filledEntries']['cim:EquivalentBranch.x21'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.x21'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentBranch.x21'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentBranch.x21'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.x21'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentBranch.x21'
                                                 );
        }
        if ('cim:EquivalentBranch.negativeR12' in object) {
            attributeEntries['filledEntries']['cim:EquivalentBranch.negativeR12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.negativeR12'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentBranch.negativeR12'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentBranch.negativeR12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.negativeR12'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentBranch.negativeR12'
                                                 );
        }
        if ('cim:EquivalentBranch.negativeR21' in object) {
            attributeEntries['filledEntries']['cim:EquivalentBranch.negativeR21'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.negativeR21'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentBranch.negativeR21'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentBranch.negativeR21'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.negativeR21'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentBranch.negativeR21'
                                                 );
        }
        if ('cim:EquivalentBranch.negativeX12' in object) {
            attributeEntries['filledEntries']['cim:EquivalentBranch.negativeX12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.negativeX12'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentBranch.negativeX12'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentBranch.negativeX12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.negativeX12'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentBranch.negativeX12'
                                                 );
        }
        if ('cim:EquivalentBranch.negativeX21' in object) {
            attributeEntries['filledEntries']['cim:EquivalentBranch.negativeX21'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.negativeX21'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentBranch.negativeX21'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentBranch.negativeX21'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.negativeX21'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentBranch.negativeX21'
                                                 );
        }
        if ('cim:EquivalentBranch.positiveR12' in object) {
            attributeEntries['filledEntries']['cim:EquivalentBranch.positiveR12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.positiveR12'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentBranch.positiveR12'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentBranch.positiveR12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.positiveR12'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentBranch.positiveR12'
                                                 );
        }
        if ('cim:EquivalentBranch.positiveR21' in object) {
            attributeEntries['filledEntries']['cim:EquivalentBranch.positiveR21'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.positiveR21'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentBranch.positiveR21'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentBranch.positiveR21'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.positiveR21'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentBranch.positiveR21'
                                                 );
        }
        if ('cim:EquivalentBranch.positiveX12' in object) {
            attributeEntries['filledEntries']['cim:EquivalentBranch.positiveX12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.positiveX12'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentBranch.positiveX12'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentBranch.positiveX12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.positiveX12'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentBranch.positiveX12'
                                                 );
        }
        if ('cim:EquivalentBranch.positiveX21' in object) {
            attributeEntries['filledEntries']['cim:EquivalentBranch.positiveX21'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.positiveX21'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentBranch.positiveX21'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentBranch.positiveX21'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.positiveX21'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentBranch.positiveX21'
                                                 );
        }
        if ('cim:EquivalentBranch.zeroR12' in object) {
            attributeEntries['filledEntries']['cim:EquivalentBranch.zeroR12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.zeroR12'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentBranch.zeroR12'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentBranch.zeroR12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.zeroR12'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentBranch.zeroR12'
                                                 );
        }
        if ('cim:EquivalentBranch.zeroR21' in object) {
            attributeEntries['filledEntries']['cim:EquivalentBranch.zeroR21'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.zeroR21'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentBranch.zeroR21'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentBranch.zeroR21'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.zeroR21'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentBranch.zeroR21'
                                                 );
        }
        if ('cim:EquivalentBranch.zeroX12' in object) {
            attributeEntries['filledEntries']['cim:EquivalentBranch.zeroX12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.zeroX12'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentBranch.zeroX12'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentBranch.zeroX12'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.zeroX12'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentBranch.zeroX12'
                                                 );
        }
        if ('cim:EquivalentBranch.zeroX21' in object) {
            attributeEntries['filledEntries']['cim:EquivalentBranch.zeroX21'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.zeroX21'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentBranch.zeroX21'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentBranch.zeroX21'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentBranch.zeroX21'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentBranch.zeroX21'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:EquivalentBranch.r",
            "cim:EquivalentBranch.r21",
            "cim:EquivalentBranch.x",
            "cim:EquivalentBranch.x21",
            "cim:EquivalentBranch.negativeR12",
            "cim:EquivalentBranch.negativeR21",
            "cim:EquivalentBranch.negativeX12",
            "cim:EquivalentBranch.negativeX21",
            "cim:EquivalentBranch.positiveR12",
            "cim:EquivalentBranch.positiveR21",
            "cim:EquivalentBranch.positiveX12",
            "cim:EquivalentBranch.positiveX21",
            "cim:EquivalentBranch.zeroR12",
            "cim:EquivalentBranch.zeroR21",
            "cim:EquivalentBranch.zeroX12",
            "cim:EquivalentBranch.zeroX21",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( EquivalentEquipment.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!EquivalentBranch.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class EquivalentBranch: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = EquivalentBranch.attributeHTML(object, cimmenu);
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
export default EquivalentBranch
