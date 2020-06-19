import templates from "../../templates/index.js"
import RotatingMachine from "./RotatingMachine.js"
import common from "../../src/common.js"

class SynchronousMachine extends RotatingMachine {

    static attributeHTML(object, cimmenu, classType="SynchronousMachine") {
        let attributeEntries = RotatingMachine.attributeHTML(object, cimmenu, classType);
        if ('cim:SynchronousMachine.InitialReactiveCapabilityCurve' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.InitialReactiveCapabilityCurve'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.InitialReactiveCapabilityCurve'],
                                                   'cim:ReactiveCapabilityCurve',
                                                   'cim:SynchronousMachine.InitialReactiveCapabilityCurve'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.InitialReactiveCapabilityCurve'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.InitialReactiveCapabilityCurve'],
                                                   'cim:ReactiveCapabilityCurve',
                                                   'cim:SynchronousMachine.InitialReactiveCapabilityCurve'
                                                 );
        }
        if ('cim:SynchronousMachine.maxQ' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.maxQ'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.maxQ'],
                                                   'cim:ReactivePower',
                                                   'cim:SynchronousMachine.maxQ'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.maxQ'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.maxQ'],
                                                   'cim:ReactivePower',
                                                   'cim:SynchronousMachine.maxQ'
                                                 );
        }
        if ('cim:SynchronousMachine.minQ' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.minQ'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.minQ'],
                                                   'cim:ReactivePower',
                                                   'cim:SynchronousMachine.minQ'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.minQ'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.minQ'],
                                                   'cim:ReactivePower',
                                                   'cim:SynchronousMachine.minQ'
                                                 );
        }
        if ('cim:SynchronousMachine.qPercent' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.qPercent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.qPercent'],
                                                   'cim:PerCent',
                                                   'cim:SynchronousMachine.qPercent'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.qPercent'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.qPercent'],
                                                   'cim:PerCent',
                                                   'cim:SynchronousMachine.qPercent'
                                                 );
        }
        if ('cim:SynchronousMachine.type' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.type'],
                                                   'cim:SynchronousMachineKind',
                                                   'cim:SynchronousMachine.type'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.type'],
                                                   'cim:SynchronousMachineKind',
                                                   'cim:SynchronousMachine.type'
                                                 );
        }
        if ('cim:SynchronousMachine.earthing' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.earthing'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.earthing'],
                                                   'cim:Boolean',
                                                   'cim:SynchronousMachine.earthing'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.earthing'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.earthing'],
                                                   'cim:Boolean',
                                                   'cim:SynchronousMachine.earthing'
                                                 );
        }
        if ('cim:SynchronousMachine.earthingStarPointR' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.earthingStarPointR'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.earthingStarPointR'],
                                                   'cim:Resistance',
                                                   'cim:SynchronousMachine.earthingStarPointR'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.earthingStarPointR'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.earthingStarPointR'],
                                                   'cim:Resistance',
                                                   'cim:SynchronousMachine.earthingStarPointR'
                                                 );
        }
        if ('cim:SynchronousMachine.earthingStarPointX' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.earthingStarPointX'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.earthingStarPointX'],
                                                   'cim:Reactance',
                                                   'cim:SynchronousMachine.earthingStarPointX'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.earthingStarPointX'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.earthingStarPointX'],
                                                   'cim:Reactance',
                                                   'cim:SynchronousMachine.earthingStarPointX'
                                                 );
        }
        if ('cim:SynchronousMachine.ikk' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.ikk'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.ikk'],
                                                   'cim:CurrentFlow',
                                                   'cim:SynchronousMachine.ikk'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.ikk'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.ikk'],
                                                   'cim:CurrentFlow',
                                                   'cim:SynchronousMachine.ikk'
                                                 );
        }
        if ('cim:SynchronousMachine.mu' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.mu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.mu'],
                                                   'cim:Simple_Float',
                                                   'cim:SynchronousMachine.mu'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.mu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.mu'],
                                                   'cim:Simple_Float',
                                                   'cim:SynchronousMachine.mu'
                                                 );
        }
        if ('cim:SynchronousMachine.r0' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.r0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.r0'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachine.r0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.r0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.r0'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachine.r0'
                                                 );
        }
        if ('cim:SynchronousMachine.r2' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.r2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.r2'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachine.r2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.r2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.r2'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachine.r2'
                                                 );
        }
        if ('cim:SynchronousMachine.satDirectSubtransX' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.satDirectSubtransX'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.satDirectSubtransX'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachine.satDirectSubtransX'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.satDirectSubtransX'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.satDirectSubtransX'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachine.satDirectSubtransX'
                                                 );
        }
        if ('cim:SynchronousMachine.satDirectSyncX' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.satDirectSyncX'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.satDirectSyncX'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachine.satDirectSyncX'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.satDirectSyncX'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.satDirectSyncX'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachine.satDirectSyncX'
                                                 );
        }
        if ('cim:SynchronousMachine.satDirectTransX' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.satDirectTransX'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.satDirectTransX'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachine.satDirectTransX'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.satDirectTransX'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.satDirectTransX'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachine.satDirectTransX'
                                                 );
        }
        if ('cim:SynchronousMachine.shortCircuitRotorType' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.shortCircuitRotorType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.shortCircuitRotorType'],
                                                   'cim:ShortCircuitRotorKind',
                                                   'cim:SynchronousMachine.shortCircuitRotorType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.shortCircuitRotorType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.shortCircuitRotorType'],
                                                   'cim:ShortCircuitRotorKind',
                                                   'cim:SynchronousMachine.shortCircuitRotorType'
                                                 );
        }
        if ('cim:SynchronousMachine.voltageRegulationRange' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.voltageRegulationRange'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.voltageRegulationRange'],
                                                   'cim:PerCent',
                                                   'cim:SynchronousMachine.voltageRegulationRange'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.voltageRegulationRange'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.voltageRegulationRange'],
                                                   'cim:PerCent',
                                                   'cim:SynchronousMachine.voltageRegulationRange'
                                                 );
        }
        if ('cim:SynchronousMachine.r' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.r'],
                                                   'cim:Resistance',
                                                   'cim:SynchronousMachine.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.r'],
                                                   'cim:Resistance',
                                                   'cim:SynchronousMachine.r'
                                                 );
        }
        if ('cim:SynchronousMachine.x0' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.x0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.x0'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachine.x0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.x0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.x0'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachine.x0'
                                                 );
        }
        if ('cim:SynchronousMachine.x2' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.x2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.x2'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachine.x2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.x2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.x2'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachine.x2'
                                                 );
        }
        if ('cim:SynchronousMachine.operatingMode' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.operatingMode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.operatingMode'],
                                                   'cim:SynchronousMachineOperatingMode',
                                                   'cim:SynchronousMachine.operatingMode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.operatingMode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.operatingMode'],
                                                   'cim:SynchronousMachineOperatingMode',
                                                   'cim:SynchronousMachine.operatingMode'
                                                 );
        }
        if ('cim:SynchronousMachine.referencePriority' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachine.referencePriority'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.referencePriority'],
                                                   'cim:Integer',
                                                   'cim:SynchronousMachine.referencePriority'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachine.referencePriority'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachine.referencePriority'],
                                                   'cim:Integer',
                                                   'cim:SynchronousMachine.referencePriority'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:SynchronousMachine.InitialReactiveCapabilityCurve",
            "cim:SynchronousMachine.maxQ",
            "cim:SynchronousMachine.minQ",
            "cim:SynchronousMachine.qPercent",
            "cim:SynchronousMachine.type",
            "cim:SynchronousMachine.earthing",
            "cim:SynchronousMachine.earthingStarPointR",
            "cim:SynchronousMachine.earthingStarPointX",
            "cim:SynchronousMachine.ikk",
            "cim:SynchronousMachine.mu",
            "cim:SynchronousMachine.r0",
            "cim:SynchronousMachine.r2",
            "cim:SynchronousMachine.satDirectSubtransX",
            "cim:SynchronousMachine.satDirectSyncX",
            "cim:SynchronousMachine.satDirectTransX",
            "cim:SynchronousMachine.shortCircuitRotorType",
            "cim:SynchronousMachine.voltageRegulationRange",
            "cim:SynchronousMachine.r",
            "cim:SynchronousMachine.x0",
            "cim:SynchronousMachine.x2",
            "cim:SynchronousMachine.operatingMode",
            "cim:SynchronousMachine.referencePriority",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( RotatingMachine.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!SynchronousMachine.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class SynchronousMachine: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SynchronousMachine.attributeHTML(object, cimmenu);
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
export default SynchronousMachine
