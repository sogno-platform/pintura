import templates from "../../templates/index.js"
import SynchronousMachineDetailed from "./SynchronousMachineDetailed.js"
import common from "../../src/common.js"

class SynchronousMachineEquivalentCircuit extends SynchronousMachineDetailed {

    static attributeHTML(object, cimmenu, classType="SynchronousMachineEquivalentCircuit") {
        let attributeEntries = SynchronousMachineDetailed.attributeHTML(object, cimmenu, classType);
        if ('cim:SynchronousMachineEquivalentCircuit.xad' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineEquivalentCircuit.xad'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.xad'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.xad'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineEquivalentCircuit.xad'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.xad'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.xad'
                                                 );
        }
        if ('cim:SynchronousMachineEquivalentCircuit.rfd' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineEquivalentCircuit.rfd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.rfd'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.rfd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineEquivalentCircuit.rfd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.rfd'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.rfd'
                                                 );
        }
        if ('cim:SynchronousMachineEquivalentCircuit.xfd' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineEquivalentCircuit.xfd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.xfd'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.xfd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineEquivalentCircuit.xfd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.xfd'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.xfd'
                                                 );
        }
        if ('cim:SynchronousMachineEquivalentCircuit.r1d' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineEquivalentCircuit.r1d'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.r1d'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.r1d'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineEquivalentCircuit.r1d'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.r1d'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.r1d'
                                                 );
        }
        if ('cim:SynchronousMachineEquivalentCircuit.x1d' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineEquivalentCircuit.x1d'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.x1d'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.x1d'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineEquivalentCircuit.x1d'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.x1d'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.x1d'
                                                 );
        }
        if ('cim:SynchronousMachineEquivalentCircuit.xf1d' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineEquivalentCircuit.xf1d'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.xf1d'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.xf1d'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineEquivalentCircuit.xf1d'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.xf1d'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.xf1d'
                                                 );
        }
        if ('cim:SynchronousMachineEquivalentCircuit.xaq' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineEquivalentCircuit.xaq'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.xaq'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.xaq'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineEquivalentCircuit.xaq'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.xaq'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.xaq'
                                                 );
        }
        if ('cim:SynchronousMachineEquivalentCircuit.r1q' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineEquivalentCircuit.r1q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.r1q'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.r1q'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineEquivalentCircuit.r1q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.r1q'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.r1q'
                                                 );
        }
        if ('cim:SynchronousMachineEquivalentCircuit.x1q' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineEquivalentCircuit.x1q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.x1q'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.x1q'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineEquivalentCircuit.x1q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.x1q'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.x1q'
                                                 );
        }
        if ('cim:SynchronousMachineEquivalentCircuit.r2q' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineEquivalentCircuit.r2q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.r2q'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.r2q'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineEquivalentCircuit.r2q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.r2q'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.r2q'
                                                 );
        }
        if ('cim:SynchronousMachineEquivalentCircuit.x2q' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineEquivalentCircuit.x2q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.x2q'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.x2q'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineEquivalentCircuit.x2q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineEquivalentCircuit.x2q'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineEquivalentCircuit.x2q'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:SynchronousMachineEquivalentCircuit.xad",
            "cim:SynchronousMachineEquivalentCircuit.rfd",
            "cim:SynchronousMachineEquivalentCircuit.xfd",
            "cim:SynchronousMachineEquivalentCircuit.r1d",
            "cim:SynchronousMachineEquivalentCircuit.x1d",
            "cim:SynchronousMachineEquivalentCircuit.xf1d",
            "cim:SynchronousMachineEquivalentCircuit.xaq",
            "cim:SynchronousMachineEquivalentCircuit.r1q",
            "cim:SynchronousMachineEquivalentCircuit.x1q",
            "cim:SynchronousMachineEquivalentCircuit.r2q",
            "cim:SynchronousMachineEquivalentCircuit.x2q",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( SynchronousMachineDetailed.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!SynchronousMachineEquivalentCircuit.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class SynchronousMachineEquivalentCircuit: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SynchronousMachineEquivalentCircuit.attributeHTML(object, cimmenu);
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
export default SynchronousMachineEquivalentCircuit
