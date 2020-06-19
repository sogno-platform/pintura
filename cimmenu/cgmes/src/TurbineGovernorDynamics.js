import templates from "../../templates/index.js"
import DynamicsFunctionBlock from "./DynamicsFunctionBlock.js"
import common from "../../src/common.js"

class TurbineGovernorDynamics extends DynamicsFunctionBlock {

    static attributeHTML(object, cimmenu, classType="TurbineGovernorDynamics") {
        let attributeEntries = DynamicsFunctionBlock.attributeHTML(object, cimmenu, classType);
        if ('cim:TurbineGovernorDynamics.SynchronousMachineDynamics' in object) {
            attributeEntries['filledEntries']['cim:TurbineGovernorDynamics.SynchronousMachineDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbineGovernorDynamics.SynchronousMachineDynamics'],
                                                   'cim:SynchronousMachineDynamics',
                                                   'cim:TurbineGovernorDynamics.SynchronousMachineDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TurbineGovernorDynamics.SynchronousMachineDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbineGovernorDynamics.SynchronousMachineDynamics'],
                                                   'cim:SynchronousMachineDynamics',
                                                   'cim:TurbineGovernorDynamics.SynchronousMachineDynamics'
                                                 );
        }
        if ('cim:TurbineGovernorDynamics.AsynchronousMachineDynamics' in object) {
            attributeEntries['filledEntries']['cim:TurbineGovernorDynamics.AsynchronousMachineDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbineGovernorDynamics.AsynchronousMachineDynamics'],
                                                   'cim:AsynchronousMachineDynamics',
                                                   'cim:TurbineGovernorDynamics.AsynchronousMachineDynamics'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:TurbineGovernorDynamics.AsynchronousMachineDynamics'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['TurbineGovernorDynamics.AsynchronousMachineDynamics'],
                                                   'cim:AsynchronousMachineDynamics',
                                                   'cim:TurbineGovernorDynamics.AsynchronousMachineDynamics'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:TurbineGovernorDynamics.SynchronousMachineDynamics",
            "cim:TurbineGovernorDynamics.AsynchronousMachineDynamics",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( DynamicsFunctionBlock.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!TurbineGovernorDynamics.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class TurbineGovernorDynamics: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu);
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
        "TurbineGovernorUserDefined",
        "GovHydroIEEE0",
        "GovHydroIEEE2",
        "GovSteamIEEE1",
        "GovCT1",
        "GovCT2",
        "GovGAST",
        "GovGAST1",
        "GovGAST2",
        "GovGAST3",
        "GovGAST4",
        "GovGASTWD",
        "GovHydro1",
        "GovHydro2",
        "GovHydro3",
        "GovHydro4",
        "GovHydroDD",
        "GovHydroFrancis",
        "GovHydroPelton",
        "GovHydroPID",
        "GovHydroPID2",
        "GovHydroR",
        "GovHydroWEH",
        "GovHydroWPID",
        "GovSteam0",
        "GovSteam1",
        "GovSteam2",
        "GovSteamCC",
        "GovSteamEU",
        "GovSteamFV2",
        "GovSteamFV3",
        "GovSteamFV4",
        "GovSteamSGO",
        ];
        return subClasses;
    }
};
export default TurbineGovernorDynamics
