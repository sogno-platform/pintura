import templates from "../../templates/index.js"
import ConductingEquipment from "./ConductingEquipment.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class EnergyConsumer extends ConductingEquipment {

    static attributeHTML(object, cimmenu, classType="EnergyConsumer") {
        let attributeEntries = ConductingEquipment.attributeHTML(object, cimmenu, classType);
        if ('cim:EnergyConsumer.LoadResponse' in object) {
            attributeEntries['filledEntries']['cim:EnergyConsumer.LoadResponse'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergyConsumer.LoadResponse'],
                                                   'cim:LoadResponseCharacteristic',
                                                   'cim:EnergyConsumer.LoadResponse'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergyConsumer.LoadResponse'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergyConsumer.LoadResponse'],
                                                   'cim:LoadResponseCharacteristic',
                                                   'cim:EnergyConsumer.LoadResponse'
                                                 );
        }
        if ('cim:EnergyConsumer.pfixed' in object) {
            attributeEntries['filledEntries']['cim:EnergyConsumer.pfixed'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergyConsumer.pfixed'],
                                                   'cim:ActivePower',
                                                   'cim:EnergyConsumer.pfixed'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergyConsumer.pfixed'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergyConsumer.pfixed'],
                                                   'cim:ActivePower',
                                                   'cim:EnergyConsumer.pfixed'
                                                 );
        }
        if ('cim:EnergyConsumer.pfixedPct' in object) {
            attributeEntries['filledEntries']['cim:EnergyConsumer.pfixedPct'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergyConsumer.pfixedPct'],
                                                   'cim:PerCent',
                                                   'cim:EnergyConsumer.pfixedPct'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergyConsumer.pfixedPct'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergyConsumer.pfixedPct'],
                                                   'cim:PerCent',
                                                   'cim:EnergyConsumer.pfixedPct'
                                                 );
        }
        if ('cim:EnergyConsumer.qfixed' in object) {
            attributeEntries['filledEntries']['cim:EnergyConsumer.qfixed'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergyConsumer.qfixed'],
                                                   'cim:ReactivePower',
                                                   'cim:EnergyConsumer.qfixed'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergyConsumer.qfixed'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergyConsumer.qfixed'],
                                                   'cim:ReactivePower',
                                                   'cim:EnergyConsumer.qfixed'
                                                 );
        }
        if ('cim:EnergyConsumer.qfixedPct' in object) {
            attributeEntries['filledEntries']['cim:EnergyConsumer.qfixedPct'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergyConsumer.qfixedPct'],
                                                   'cim:PerCent',
                                                   'cim:EnergyConsumer.qfixedPct'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergyConsumer.qfixedPct'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergyConsumer.qfixedPct'],
                                                   'cim:PerCent',
                                                   'cim:EnergyConsumer.qfixedPct'
                                                 );
        }
        if ('cim:EnergyConsumer.p' in object) {
            attributeEntries['filledEntries']['cim:EnergyConsumer.p'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergyConsumer.p'],
                                                   'cim:ActivePower',
                                                   'cim:EnergyConsumer.p'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergyConsumer.p'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergyConsumer.p'],
                                                   'cim:ActivePower',
                                                   'cim:EnergyConsumer.p'
                                                 );
        }
        if ('cim:EnergyConsumer.q' in object) {
            attributeEntries['filledEntries']['cim:EnergyConsumer.q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergyConsumer.q'],
                                                   'cim:ReactivePower',
                                                   'cim:EnergyConsumer.q'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergyConsumer.q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergyConsumer.q'],
                                                   'cim:ReactivePower',
                                                   'cim:EnergyConsumer.q'
                                                 );
        }
        if ('cim:EnergyConsumer.LoadDynamics' in object) {
            attributeEntries['filledEntries']['cim:EnergyConsumer.LoadDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergyConsumer.LoadDynamics'],
                                                   'cim:LoadDynamics',
                                                   'cim:EnergyConsumer.LoadDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:EnergyConsumer.LoadDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['EnergyConsumer.LoadDynamics'],
                                                   'cim:LoadDynamics',
                                                   'cim:EnergyConsumer.LoadDynamics'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.DY, ],
						'LoadResponse': [CGMESProfile.shortNames.EQ, ],
						'pfixed': [CGMESProfile.shortNames.EQ, ],
						'pfixedPct': [CGMESProfile.shortNames.EQ, ],
						'qfixed': [CGMESProfile.shortNames.EQ, ],
						'qfixedPct': [CGMESProfile.shortNames.EQ, ],
						'p': [CGMESProfile.shortNames.SSH, ],
						'q': [CGMESProfile.shortNames.SSH, ],
						'LoadDynamics': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:EnergyConsumer.LoadResponse",
            "cim:EnergyConsumer.pfixed",
            "cim:EnergyConsumer.pfixedPct",
            "cim:EnergyConsumer.qfixed",
            "cim:EnergyConsumer.qfixedPct",
            "cim:EnergyConsumer.p",
            "cim:EnergyConsumer.q",
            "cim:EnergyConsumer.LoadDynamics",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( ConductingEquipment.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!EnergyConsumer.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class EnergyConsumer: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = EnergyConsumer.attributeHTML(object, cimmenu);
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
        "ConformLoad",
        "NonConformLoad",
        "StationSupply",
        ];
        return subClasses;
    }
};
export default EnergyConsumer
