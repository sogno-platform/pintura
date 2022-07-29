import templates from "../../templates/index.js"
import Equipment from "./Equipment.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ConductingEquipment extends Equipment {

    static attributeHTML(object, cimmenu, classType="ConductingEquipment") {
        let attributeEntries = Equipment.attributeHTML(object, cimmenu, classType);
        if ('cim:ConductingEquipment.BaseVoltage' in object) {
            attributeEntries['filledEntries']['cim:ConductingEquipment.BaseVoltage'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConductingEquipment.BaseVoltage'],
                                                   'cim:BaseVoltage',
                                                   'cim:ConductingEquipment.BaseVoltage'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ConductingEquipment.BaseVoltage'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConductingEquipment.BaseVoltage'],
                                                   'cim:BaseVoltage',
                                                   'cim:ConductingEquipment.BaseVoltage'
                                                 );
        }
        if ('cim:ConductingEquipment.SvStatus' in object) {
            attributeEntries['filledEntries']['cim:ConductingEquipment.SvStatus'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConductingEquipment.SvStatus'],
                                                   'cim:SvStatus',
                                                   'cim:ConductingEquipment.SvStatus'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ConductingEquipment.SvStatus'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ConductingEquipment.SvStatus'],
                                                   'cim:SvStatus',
                                                   'cim:ConductingEquipment.SvStatus'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.SV, CGMESProfile.shortNames.DY, CGMESProfile.shortNames.EQ_BD, ],
						'BaseVoltage': [CGMESProfile.shortNames.EQ, ],
						'SvStatus': [CGMESProfile.shortNames.SV, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ConductingEquipment.BaseVoltage",
            "cim:ConductingEquipment.SvStatus",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( Equipment.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!ConductingEquipment.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ConductingEquipment: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ConductingEquipment.attributeHTML(object, cimmenu);
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
        "ACDCConverter",
        "CsConverter",
        "VsConverter",
        "EnergySource",
        "Conductor",
        "ACLineSegment",
        "Connector",
        "BusbarSection",
        "Junction",
        "EnergyConsumer",
        "ConformLoad",
        "NonConformLoad",
        "StationSupply",
        "PowerTransformer",
        "RegulatingCondEq",
        "ExternalNetworkInjection",
        "RotatingMachine",
        "AsynchronousMachine",
        "SynchronousMachine",
        "ShuntCompensator",
        "LinearShuntCompensator",
        "NonlinearShuntCompensator",
        "StaticVarCompensator",
        "SeriesCompensator",
        "Switch",
        "Disconnector",
        "ProtectedSwitch",
        "Breaker",
        "LoadBreakSwitch",
        "GroundDisconnector",
        "EquivalentEquipment",
        "EquivalentBranch",
        "EquivalentInjection",
        "EquivalentShunt",
        "EarthFaultCompensator",
        "GroundingImpedance",
        "PetersenCoil",
        "Ground",
        ];
        return subClasses;
    }
};
export default ConductingEquipment
