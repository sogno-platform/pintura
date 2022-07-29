import templates from "../../templates/index.js"
import RotatingMachine from "./RotatingMachine.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class AsynchronousMachine extends RotatingMachine {

    static attributeHTML(object, cimmenu, classType="AsynchronousMachine") {
        let attributeEntries = RotatingMachine.attributeHTML(object, cimmenu, classType);
        if ('cim:AsynchronousMachine.nominalFrequency' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachine.nominalFrequency'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.nominalFrequency'],
                                                   'cim:Frequency',
                                                   'cim:AsynchronousMachine.nominalFrequency'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachine.nominalFrequency'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.nominalFrequency'],
                                                   'cim:Frequency',
                                                   'cim:AsynchronousMachine.nominalFrequency'
                                                 );
        }
        if ('cim:AsynchronousMachine.nominalSpeed' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachine.nominalSpeed'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.nominalSpeed'],
                                                   'cim:RotationSpeed',
                                                   'cim:AsynchronousMachine.nominalSpeed'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachine.nominalSpeed'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.nominalSpeed'],
                                                   'cim:RotationSpeed',
                                                   'cim:AsynchronousMachine.nominalSpeed'
                                                 );
        }
        if ('cim:AsynchronousMachine.converterFedDrive' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachine.converterFedDrive'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.converterFedDrive'],
                                                   'cim:Boolean',
                                                   'cim:AsynchronousMachine.converterFedDrive'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachine.converterFedDrive'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.converterFedDrive'],
                                                   'cim:Boolean',
                                                   'cim:AsynchronousMachine.converterFedDrive'
                                                 );
        }
        if ('cim:AsynchronousMachine.efficiency' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachine.efficiency'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.efficiency'],
                                                   'cim:PerCent',
                                                   'cim:AsynchronousMachine.efficiency'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachine.efficiency'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.efficiency'],
                                                   'cim:PerCent',
                                                   'cim:AsynchronousMachine.efficiency'
                                                 );
        }
        if ('cim:AsynchronousMachine.iaIrRatio' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachine.iaIrRatio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.iaIrRatio'],
                                                   'cim:Simple_Float',
                                                   'cim:AsynchronousMachine.iaIrRatio'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachine.iaIrRatio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.iaIrRatio'],
                                                   'cim:Simple_Float',
                                                   'cim:AsynchronousMachine.iaIrRatio'
                                                 );
        }
        if ('cim:AsynchronousMachine.polePairNumber' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachine.polePairNumber'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.polePairNumber'],
                                                   'cim:Integer',
                                                   'cim:AsynchronousMachine.polePairNumber'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachine.polePairNumber'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.polePairNumber'],
                                                   'cim:Integer',
                                                   'cim:AsynchronousMachine.polePairNumber'
                                                 );
        }
        if ('cim:AsynchronousMachine.ratedMechanicalPower' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachine.ratedMechanicalPower'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.ratedMechanicalPower'],
                                                   'cim:ActivePower',
                                                   'cim:AsynchronousMachine.ratedMechanicalPower'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachine.ratedMechanicalPower'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.ratedMechanicalPower'],
                                                   'cim:ActivePower',
                                                   'cim:AsynchronousMachine.ratedMechanicalPower'
                                                 );
        }
        if ('cim:AsynchronousMachine.reversible' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachine.reversible'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.reversible'],
                                                   'cim:Boolean',
                                                   'cim:AsynchronousMachine.reversible'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachine.reversible'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.reversible'],
                                                   'cim:Boolean',
                                                   'cim:AsynchronousMachine.reversible'
                                                 );
        }
        if ('cim:AsynchronousMachine.rxLockedRotorRatio' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachine.rxLockedRotorRatio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.rxLockedRotorRatio'],
                                                   'cim:Simple_Float',
                                                   'cim:AsynchronousMachine.rxLockedRotorRatio'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachine.rxLockedRotorRatio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.rxLockedRotorRatio'],
                                                   'cim:Simple_Float',
                                                   'cim:AsynchronousMachine.rxLockedRotorRatio'
                                                 );
        }
        if ('cim:AsynchronousMachine.asynchronousMachineType' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachine.asynchronousMachineType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.asynchronousMachineType'],
                                                   'cim:AsynchronousMachineKind',
                                                   'cim:AsynchronousMachine.asynchronousMachineType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachine.asynchronousMachineType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachine.asynchronousMachineType'],
                                                   'cim:AsynchronousMachineKind',
                                                   'cim:AsynchronousMachine.asynchronousMachineType'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.DY, ],
						'nominalFrequency': [CGMESProfile.shortNames.EQ, ],
						'nominalSpeed': [CGMESProfile.shortNames.EQ, ],
						'converterFedDrive': [CGMESProfile.shortNames.EQ, ],
						'efficiency': [CGMESProfile.shortNames.EQ, ],
						'iaIrRatio': [CGMESProfile.shortNames.EQ, ],
						'polePairNumber': [CGMESProfile.shortNames.EQ, ],
						'ratedMechanicalPower': [CGMESProfile.shortNames.EQ, ],
						'reversible': [CGMESProfile.shortNames.EQ, ],
						'rxLockedRotorRatio': [CGMESProfile.shortNames.EQ, ],
						'asynchronousMachineType': [CGMESProfile.shortNames.SSH, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:AsynchronousMachine.nominalFrequency",
            "cim:AsynchronousMachine.nominalSpeed",
            "cim:AsynchronousMachine.converterFedDrive",
            "cim:AsynchronousMachine.efficiency",
            "cim:AsynchronousMachine.iaIrRatio",
            "cim:AsynchronousMachine.polePairNumber",
            "cim:AsynchronousMachine.ratedMechanicalPower",
            "cim:AsynchronousMachine.reversible",
            "cim:AsynchronousMachine.rxLockedRotorRatio",
            "cim:AsynchronousMachine.asynchronousMachineType",
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
            if (!AsynchronousMachine.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class AsynchronousMachine: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = AsynchronousMachine.attributeHTML(object, cimmenu);
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
export default AsynchronousMachine
