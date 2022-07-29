import templates from "../../templates/index.js"
import SynchronousMachineDetailed from "./SynchronousMachineDetailed.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class SynchronousMachineTimeConstantReactance extends SynchronousMachineDetailed {

    static attributeHTML(object, cimmenu, classType="SynchronousMachineTimeConstantReactance") {
        let attributeEntries = SynchronousMachineDetailed.attributeHTML(object, cimmenu, classType);
        if ('cim:SynchronousMachineTimeConstantReactance.rotorType' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineTimeConstantReactance.rotorType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.rotorType'],
                                                   'cim:RotorKind',
                                                   'cim:SynchronousMachineTimeConstantReactance.rotorType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineTimeConstantReactance.rotorType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.rotorType'],
                                                   'cim:RotorKind',
                                                   'cim:SynchronousMachineTimeConstantReactance.rotorType'
                                                 );
        }
        if ('cim:SynchronousMachineTimeConstantReactance.modelType' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineTimeConstantReactance.modelType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.modelType'],
                                                   'cim:SynchronousMachineModelKind',
                                                   'cim:SynchronousMachineTimeConstantReactance.modelType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineTimeConstantReactance.modelType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.modelType'],
                                                   'cim:SynchronousMachineModelKind',
                                                   'cim:SynchronousMachineTimeConstantReactance.modelType'
                                                 );
        }
        if ('cim:SynchronousMachineTimeConstantReactance.ks' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineTimeConstantReactance.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.ks'],
                                                   'cim:Simple_Float',
                                                   'cim:SynchronousMachineTimeConstantReactance.ks'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineTimeConstantReactance.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.ks'],
                                                   'cim:Simple_Float',
                                                   'cim:SynchronousMachineTimeConstantReactance.ks'
                                                 );
        }
        if ('cim:SynchronousMachineTimeConstantReactance.xDirectSync' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineTimeConstantReactance.xDirectSync'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.xDirectSync'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineTimeConstantReactance.xDirectSync'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineTimeConstantReactance.xDirectSync'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.xDirectSync'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineTimeConstantReactance.xDirectSync'
                                                 );
        }
        if ('cim:SynchronousMachineTimeConstantReactance.xDirectTrans' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineTimeConstantReactance.xDirectTrans'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.xDirectTrans'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineTimeConstantReactance.xDirectTrans'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineTimeConstantReactance.xDirectTrans'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.xDirectTrans'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineTimeConstantReactance.xDirectTrans'
                                                 );
        }
        if ('cim:SynchronousMachineTimeConstantReactance.xDirectSubtrans' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineTimeConstantReactance.xDirectSubtrans'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.xDirectSubtrans'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineTimeConstantReactance.xDirectSubtrans'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineTimeConstantReactance.xDirectSubtrans'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.xDirectSubtrans'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineTimeConstantReactance.xDirectSubtrans'
                                                 );
        }
        if ('cim:SynchronousMachineTimeConstantReactance.xQuadSync' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineTimeConstantReactance.xQuadSync'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.xQuadSync'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineTimeConstantReactance.xQuadSync'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineTimeConstantReactance.xQuadSync'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.xQuadSync'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineTimeConstantReactance.xQuadSync'
                                                 );
        }
        if ('cim:SynchronousMachineTimeConstantReactance.xQuadTrans' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineTimeConstantReactance.xQuadTrans'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.xQuadTrans'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineTimeConstantReactance.xQuadTrans'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineTimeConstantReactance.xQuadTrans'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.xQuadTrans'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineTimeConstantReactance.xQuadTrans'
                                                 );
        }
        if ('cim:SynchronousMachineTimeConstantReactance.xQuadSubtrans' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineTimeConstantReactance.xQuadSubtrans'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.xQuadSubtrans'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineTimeConstantReactance.xQuadSubtrans'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineTimeConstantReactance.xQuadSubtrans'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.xQuadSubtrans'],
                                                   'cim:PU',
                                                   'cim:SynchronousMachineTimeConstantReactance.xQuadSubtrans'
                                                 );
        }
        if ('cim:SynchronousMachineTimeConstantReactance.tpdo' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineTimeConstantReactance.tpdo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.tpdo'],
                                                   'cim:Seconds',
                                                   'cim:SynchronousMachineTimeConstantReactance.tpdo'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineTimeConstantReactance.tpdo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.tpdo'],
                                                   'cim:Seconds',
                                                   'cim:SynchronousMachineTimeConstantReactance.tpdo'
                                                 );
        }
        if ('cim:SynchronousMachineTimeConstantReactance.tppdo' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineTimeConstantReactance.tppdo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.tppdo'],
                                                   'cim:Seconds',
                                                   'cim:SynchronousMachineTimeConstantReactance.tppdo'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineTimeConstantReactance.tppdo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.tppdo'],
                                                   'cim:Seconds',
                                                   'cim:SynchronousMachineTimeConstantReactance.tppdo'
                                                 );
        }
        if ('cim:SynchronousMachineTimeConstantReactance.tpqo' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineTimeConstantReactance.tpqo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.tpqo'],
                                                   'cim:Seconds',
                                                   'cim:SynchronousMachineTimeConstantReactance.tpqo'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineTimeConstantReactance.tpqo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.tpqo'],
                                                   'cim:Seconds',
                                                   'cim:SynchronousMachineTimeConstantReactance.tpqo'
                                                 );
        }
        if ('cim:SynchronousMachineTimeConstantReactance.tppqo' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineTimeConstantReactance.tppqo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.tppqo'],
                                                   'cim:Seconds',
                                                   'cim:SynchronousMachineTimeConstantReactance.tppqo'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineTimeConstantReactance.tppqo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.tppqo'],
                                                   'cim:Seconds',
                                                   'cim:SynchronousMachineTimeConstantReactance.tppqo'
                                                 );
        }
        if ('cim:SynchronousMachineTimeConstantReactance.tc' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineTimeConstantReactance.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.tc'],
                                                   'cim:Seconds',
                                                   'cim:SynchronousMachineTimeConstantReactance.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineTimeConstantReactance.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineTimeConstantReactance.tc'],
                                                   'cim:Seconds',
                                                   'cim:SynchronousMachineTimeConstantReactance.tc'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'rotorType': [CGMESProfile.shortNames.DY, ],
						'modelType': [CGMESProfile.shortNames.DY, ],
						'ks': [CGMESProfile.shortNames.DY, ],
						'xDirectSync': [CGMESProfile.shortNames.DY, ],
						'xDirectTrans': [CGMESProfile.shortNames.DY, ],
						'xDirectSubtrans': [CGMESProfile.shortNames.DY, ],
						'xQuadSync': [CGMESProfile.shortNames.DY, ],
						'xQuadTrans': [CGMESProfile.shortNames.DY, ],
						'xQuadSubtrans': [CGMESProfile.shortNames.DY, ],
						'tpdo': [CGMESProfile.shortNames.DY, ],
						'tppdo': [CGMESProfile.shortNames.DY, ],
						'tpqo': [CGMESProfile.shortNames.DY, ],
						'tppqo': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:SynchronousMachineTimeConstantReactance.rotorType",
            "cim:SynchronousMachineTimeConstantReactance.modelType",
            "cim:SynchronousMachineTimeConstantReactance.ks",
            "cim:SynchronousMachineTimeConstantReactance.xDirectSync",
            "cim:SynchronousMachineTimeConstantReactance.xDirectTrans",
            "cim:SynchronousMachineTimeConstantReactance.xDirectSubtrans",
            "cim:SynchronousMachineTimeConstantReactance.xQuadSync",
            "cim:SynchronousMachineTimeConstantReactance.xQuadTrans",
            "cim:SynchronousMachineTimeConstantReactance.xQuadSubtrans",
            "cim:SynchronousMachineTimeConstantReactance.tpdo",
            "cim:SynchronousMachineTimeConstantReactance.tppdo",
            "cim:SynchronousMachineTimeConstantReactance.tpqo",
            "cim:SynchronousMachineTimeConstantReactance.tppqo",
            "cim:SynchronousMachineTimeConstantReactance.tc",
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
            if (!SynchronousMachineTimeConstantReactance.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class SynchronousMachineTimeConstantReactance: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SynchronousMachineTimeConstantReactance.attributeHTML(object, cimmenu);
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
export default SynchronousMachineTimeConstantReactance
