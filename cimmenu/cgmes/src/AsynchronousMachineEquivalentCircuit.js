import templates from "../../templates/index.js"
import AsynchronousMachineDynamics from "./AsynchronousMachineDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class AsynchronousMachineEquivalentCircuit extends AsynchronousMachineDynamics {

    static attributeHTML(object, cimmenu, classType="AsynchronousMachineEquivalentCircuit") {
        let attributeEntries = AsynchronousMachineDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:AsynchronousMachineEquivalentCircuit.xm' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachineEquivalentCircuit.xm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineEquivalentCircuit.xm'],
                                                   'cim:PU',
                                                   'cim:AsynchronousMachineEquivalentCircuit.xm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachineEquivalentCircuit.xm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineEquivalentCircuit.xm'],
                                                   'cim:PU',
                                                   'cim:AsynchronousMachineEquivalentCircuit.xm'
                                                 );
        }
        if ('cim:AsynchronousMachineEquivalentCircuit.rr1' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachineEquivalentCircuit.rr1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineEquivalentCircuit.rr1'],
                                                   'cim:PU',
                                                   'cim:AsynchronousMachineEquivalentCircuit.rr1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachineEquivalentCircuit.rr1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineEquivalentCircuit.rr1'],
                                                   'cim:PU',
                                                   'cim:AsynchronousMachineEquivalentCircuit.rr1'
                                                 );
        }
        if ('cim:AsynchronousMachineEquivalentCircuit.xlr1' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachineEquivalentCircuit.xlr1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineEquivalentCircuit.xlr1'],
                                                   'cim:PU',
                                                   'cim:AsynchronousMachineEquivalentCircuit.xlr1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachineEquivalentCircuit.xlr1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineEquivalentCircuit.xlr1'],
                                                   'cim:PU',
                                                   'cim:AsynchronousMachineEquivalentCircuit.xlr1'
                                                 );
        }
        if ('cim:AsynchronousMachineEquivalentCircuit.rr2' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachineEquivalentCircuit.rr2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineEquivalentCircuit.rr2'],
                                                   'cim:PU',
                                                   'cim:AsynchronousMachineEquivalentCircuit.rr2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachineEquivalentCircuit.rr2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineEquivalentCircuit.rr2'],
                                                   'cim:PU',
                                                   'cim:AsynchronousMachineEquivalentCircuit.rr2'
                                                 );
        }
        if ('cim:AsynchronousMachineEquivalentCircuit.xlr2' in object) {
            attributeEntries['filledEntries']['cim:AsynchronousMachineEquivalentCircuit.xlr2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineEquivalentCircuit.xlr2'],
                                                   'cim:PU',
                                                   'cim:AsynchronousMachineEquivalentCircuit.xlr2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AsynchronousMachineEquivalentCircuit.xlr2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AsynchronousMachineEquivalentCircuit.xlr2'],
                                                   'cim:PU',
                                                   'cim:AsynchronousMachineEquivalentCircuit.xlr2'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'xm': [CGMESProfile.shortNames.DY, ],
						'rr1': [CGMESProfile.shortNames.DY, ],
						'xlr1': [CGMESProfile.shortNames.DY, ],
						'rr2': [CGMESProfile.shortNames.DY, ],
						'xlr2': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:AsynchronousMachineEquivalentCircuit.xm",
            "cim:AsynchronousMachineEquivalentCircuit.rr1",
            "cim:AsynchronousMachineEquivalentCircuit.xlr1",
            "cim:AsynchronousMachineEquivalentCircuit.rr2",
            "cim:AsynchronousMachineEquivalentCircuit.xlr2",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( AsynchronousMachineDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!AsynchronousMachineEquivalentCircuit.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class AsynchronousMachineEquivalentCircuit: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = AsynchronousMachineEquivalentCircuit.attributeHTML(object, cimmenu);
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
export default AsynchronousMachineEquivalentCircuit
