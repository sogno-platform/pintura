import templates from "../../templates/index.js"
import EquivalentEquipment from "./EquivalentEquipment.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class EquivalentInjection extends EquivalentEquipment {

    static attributeHTML(object, cimmenu, classType="EquivalentInjection") {
        let attributeEntries = EquivalentEquipment.attributeHTML(object, cimmenu, classType);
        if ('cim:EquivalentInjection.ReactiveCapabilityCurve' in object) {
            attributeEntries['filledEntries']['cim:EquivalentInjection.ReactiveCapabilityCurve'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.ReactiveCapabilityCurve'],
                                                   'cim:ReactiveCapabilityCurve',
                                                   'cim:EquivalentInjection.ReactiveCapabilityCurve'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentInjection.ReactiveCapabilityCurve'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.ReactiveCapabilityCurve'],
                                                   'cim:ReactiveCapabilityCurve',
                                                   'cim:EquivalentInjection.ReactiveCapabilityCurve'
                                                 );
        }
        if ('cim:EquivalentInjection.maxP' in object) {
            attributeEntries['filledEntries']['cim:EquivalentInjection.maxP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.maxP'],
                                                   'cim:ActivePower',
                                                   'cim:EquivalentInjection.maxP'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentInjection.maxP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.maxP'],
                                                   'cim:ActivePower',
                                                   'cim:EquivalentInjection.maxP'
                                                 );
        }
        if ('cim:EquivalentInjection.maxQ' in object) {
            attributeEntries['filledEntries']['cim:EquivalentInjection.maxQ'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.maxQ'],
                                                   'cim:ReactivePower',
                                                   'cim:EquivalentInjection.maxQ'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentInjection.maxQ'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.maxQ'],
                                                   'cim:ReactivePower',
                                                   'cim:EquivalentInjection.maxQ'
                                                 );
        }
        if ('cim:EquivalentInjection.minP' in object) {
            attributeEntries['filledEntries']['cim:EquivalentInjection.minP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.minP'],
                                                   'cim:ActivePower',
                                                   'cim:EquivalentInjection.minP'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentInjection.minP'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.minP'],
                                                   'cim:ActivePower',
                                                   'cim:EquivalentInjection.minP'
                                                 );
        }
        if ('cim:EquivalentInjection.minQ' in object) {
            attributeEntries['filledEntries']['cim:EquivalentInjection.minQ'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.minQ'],
                                                   'cim:ReactivePower',
                                                   'cim:EquivalentInjection.minQ'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentInjection.minQ'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.minQ'],
                                                   'cim:ReactivePower',
                                                   'cim:EquivalentInjection.minQ'
                                                 );
        }
        if ('cim:EquivalentInjection.regulationCapability' in object) {
            attributeEntries['filledEntries']['cim:EquivalentInjection.regulationCapability'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.regulationCapability'],
                                                   'cim:Boolean',
                                                   'cim:EquivalentInjection.regulationCapability'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentInjection.regulationCapability'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.regulationCapability'],
                                                   'cim:Boolean',
                                                   'cim:EquivalentInjection.regulationCapability'
                                                 );
        }
        if ('cim:EquivalentInjection.r' in object) {
            attributeEntries['filledEntries']['cim:EquivalentInjection.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.r'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentInjection.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentInjection.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.r'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentInjection.r'
                                                 );
        }
        if ('cim:EquivalentInjection.r0' in object) {
            attributeEntries['filledEntries']['cim:EquivalentInjection.r0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.r0'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentInjection.r0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentInjection.r0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.r0'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentInjection.r0'
                                                 );
        }
        if ('cim:EquivalentInjection.r2' in object) {
            attributeEntries['filledEntries']['cim:EquivalentInjection.r2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.r2'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentInjection.r2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentInjection.r2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.r2'],
                                                   'cim:Resistance',
                                                   'cim:EquivalentInjection.r2'
                                                 );
        }
        if ('cim:EquivalentInjection.x' in object) {
            attributeEntries['filledEntries']['cim:EquivalentInjection.x'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.x'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentInjection.x'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentInjection.x'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.x'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentInjection.x'
                                                 );
        }
        if ('cim:EquivalentInjection.x0' in object) {
            attributeEntries['filledEntries']['cim:EquivalentInjection.x0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.x0'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentInjection.x0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentInjection.x0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.x0'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentInjection.x0'
                                                 );
        }
        if ('cim:EquivalentInjection.x2' in object) {
            attributeEntries['filledEntries']['cim:EquivalentInjection.x2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.x2'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentInjection.x2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentInjection.x2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.x2'],
                                                   'cim:Reactance',
                                                   'cim:EquivalentInjection.x2'
                                                 );
        }
        if ('cim:EquivalentInjection.regulationStatus' in object) {
            attributeEntries['filledEntries']['cim:EquivalentInjection.regulationStatus'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.regulationStatus'],
                                                   'cim:Boolean',
                                                   'cim:EquivalentInjection.regulationStatus'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentInjection.regulationStatus'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.regulationStatus'],
                                                   'cim:Boolean',
                                                   'cim:EquivalentInjection.regulationStatus'
                                                 );
        }
        if ('cim:EquivalentInjection.regulationTarget' in object) {
            attributeEntries['filledEntries']['cim:EquivalentInjection.regulationTarget'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.regulationTarget'],
                                                   'cim:Voltage',
                                                   'cim:EquivalentInjection.regulationTarget'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentInjection.regulationTarget'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.regulationTarget'],
                                                   'cim:Voltage',
                                                   'cim:EquivalentInjection.regulationTarget'
                                                 );
        }
        if ('cim:EquivalentInjection.p' in object) {
            attributeEntries['filledEntries']['cim:EquivalentInjection.p'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.p'],
                                                   'cim:ActivePower',
                                                   'cim:EquivalentInjection.p'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentInjection.p'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.p'],
                                                   'cim:ActivePower',
                                                   'cim:EquivalentInjection.p'
                                                 );
        }
        if ('cim:EquivalentInjection.q' in object) {
            attributeEntries['filledEntries']['cim:EquivalentInjection.q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.q'],
                                                   'cim:ReactivePower',
                                                   'cim:EquivalentInjection.q'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EquivalentInjection.q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EquivalentInjection.q'],
                                                   'cim:ReactivePower',
                                                   'cim:EquivalentInjection.q'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, ],
						'ReactiveCapabilityCurve': [CGMESProfile.shortNames.EQ, ],
						'maxP': [CGMESProfile.shortNames.EQ, ],
						'maxQ': [CGMESProfile.shortNames.EQ, ],
						'minP': [CGMESProfile.shortNames.EQ, ],
						'minQ': [CGMESProfile.shortNames.EQ, ],
						'regulationCapability': [CGMESProfile.shortNames.EQ, ],
						'r': [CGMESProfile.shortNames.EQ, ],
						'r0': [CGMESProfile.shortNames.EQ, ],
						'r2': [CGMESProfile.shortNames.EQ, ],
						'x': [CGMESProfile.shortNames.EQ, ],
						'x0': [CGMESProfile.shortNames.EQ, ],
						'x2': [CGMESProfile.shortNames.EQ, ],
						'regulationStatus': [CGMESProfile.shortNames.SSH, ],
						'regulationTarget': [CGMESProfile.shortNames.SSH, ],
						'p': [CGMESProfile.shortNames.SSH, ],
						'q': [CGMESProfile.shortNames.SSH, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:EquivalentInjection.ReactiveCapabilityCurve",
            "cim:EquivalentInjection.maxP",
            "cim:EquivalentInjection.maxQ",
            "cim:EquivalentInjection.minP",
            "cim:EquivalentInjection.minQ",
            "cim:EquivalentInjection.regulationCapability",
            "cim:EquivalentInjection.r",
            "cim:EquivalentInjection.r0",
            "cim:EquivalentInjection.r2",
            "cim:EquivalentInjection.x",
            "cim:EquivalentInjection.x0",
            "cim:EquivalentInjection.x2",
            "cim:EquivalentInjection.regulationStatus",
            "cim:EquivalentInjection.regulationTarget",
            "cim:EquivalentInjection.p",
            "cim:EquivalentInjection.q",
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
            if (!EquivalentInjection.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class EquivalentInjection: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = EquivalentInjection.attributeHTML(object, cimmenu);
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
export default EquivalentInjection
