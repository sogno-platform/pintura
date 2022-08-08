import templates from "../../templates/index.js"
import SynchronousMachineDynamics from "./SynchronousMachineDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class SynchronousMachineDetailed extends SynchronousMachineDynamics {

    static attributeHTML(object, cimmenu, classType="SynchronousMachineDetailed") {
        let attributeEntries = SynchronousMachineDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:SynchronousMachineDetailed.saturationFactorQAxis' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineDetailed.saturationFactorQAxis'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineDetailed.saturationFactorQAxis'],
                                                   'cim:Simple_Float',
                                                   'cim:SynchronousMachineDetailed.saturationFactorQAxis'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineDetailed.saturationFactorQAxis'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineDetailed.saturationFactorQAxis'],
                                                   'cim:Simple_Float',
                                                   'cim:SynchronousMachineDetailed.saturationFactorQAxis'
                                                 );
        }
        if ('cim:SynchronousMachineDetailed.saturationFactor120QAxis' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineDetailed.saturationFactor120QAxis'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineDetailed.saturationFactor120QAxis'],
                                                   'cim:Simple_Float',
                                                   'cim:SynchronousMachineDetailed.saturationFactor120QAxis'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineDetailed.saturationFactor120QAxis'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineDetailed.saturationFactor120QAxis'],
                                                   'cim:Simple_Float',
                                                   'cim:SynchronousMachineDetailed.saturationFactor120QAxis'
                                                 );
        }
        if ('cim:SynchronousMachineDetailed.efdBaseRatio' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineDetailed.efdBaseRatio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineDetailed.efdBaseRatio'],
                                                   'cim:Simple_Float',
                                                   'cim:SynchronousMachineDetailed.efdBaseRatio'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineDetailed.efdBaseRatio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineDetailed.efdBaseRatio'],
                                                   'cim:Simple_Float',
                                                   'cim:SynchronousMachineDetailed.efdBaseRatio'
                                                 );
        }
        if ('cim:SynchronousMachineDetailed.ifdBaseType' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineDetailed.ifdBaseType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineDetailed.ifdBaseType'],
                                                   'cim:IfdBaseKind',
                                                   'cim:SynchronousMachineDetailed.ifdBaseType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineDetailed.ifdBaseType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineDetailed.ifdBaseType'],
                                                   'cim:IfdBaseKind',
                                                   'cim:SynchronousMachineDetailed.ifdBaseType'
                                                 );
        }
        if ('cim:SynchronousMachineDetailed.ifdBaseValue' in object) {
            attributeEntries['filledEntries']['cim:SynchronousMachineDetailed.ifdBaseValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineDetailed.ifdBaseValue'],
                                                   'cim:CurrentFlow',
                                                   'cim:SynchronousMachineDetailed.ifdBaseValue'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SynchronousMachineDetailed.ifdBaseValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SynchronousMachineDetailed.ifdBaseValue'],
                                                   'cim:CurrentFlow',
                                                   'cim:SynchronousMachineDetailed.ifdBaseValue'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'saturationFactorQAxis': [CGMESProfile.shortNames.DY, ],
						'saturationFactor120QAxis': [CGMESProfile.shortNames.DY, ],
						'efdBaseRatio': [CGMESProfile.shortNames.DY, ],
						'ifdBaseType': [CGMESProfile.shortNames.DY, ],
						'ifdBaseValue': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:SynchronousMachineDetailed.saturationFactorQAxis",
            "cim:SynchronousMachineDetailed.saturationFactor120QAxis",
            "cim:SynchronousMachineDetailed.efdBaseRatio",
            "cim:SynchronousMachineDetailed.ifdBaseType",
            "cim:SynchronousMachineDetailed.ifdBaseValue",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( SynchronousMachineDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!SynchronousMachineDetailed.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class SynchronousMachineDetailed: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SynchronousMachineDetailed.attributeHTML(object, cimmenu);
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
        "SynchronousMachineTimeConstantReactance",
        "SynchronousMachineEquivalentCircuit",
        ];
        return subClasses;
    }
};
export default SynchronousMachineDetailed
