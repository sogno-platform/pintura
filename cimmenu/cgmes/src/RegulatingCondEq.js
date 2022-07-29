import templates from "../../templates/index.js"
import ConductingEquipment from "./ConductingEquipment.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class RegulatingCondEq extends ConductingEquipment {

    static attributeHTML(object, cimmenu, classType="RegulatingCondEq") {
        let attributeEntries = ConductingEquipment.attributeHTML(object, cimmenu, classType);
        if ('cim:RegulatingCondEq.RegulatingControl' in object) {
            attributeEntries['filledEntries']['cim:RegulatingCondEq.RegulatingControl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegulatingCondEq.RegulatingControl'],
                                                   'cim:RegulatingControl',
                                                   'cim:RegulatingCondEq.RegulatingControl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RegulatingCondEq.RegulatingControl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegulatingCondEq.RegulatingControl'],
                                                   'cim:RegulatingControl',
                                                   'cim:RegulatingCondEq.RegulatingControl'
                                                 );
        }
        if ('cim:RegulatingCondEq.controlEnabled' in object) {
            attributeEntries['filledEntries']['cim:RegulatingCondEq.controlEnabled'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegulatingCondEq.controlEnabled'],
                                                   'cim:Boolean',
                                                   'cim:RegulatingCondEq.controlEnabled'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RegulatingCondEq.controlEnabled'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegulatingCondEq.controlEnabled'],
                                                   'cim:Boolean',
                                                   'cim:RegulatingCondEq.controlEnabled'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.DY, ],
						'RegulatingControl': [CGMESProfile.shortNames.EQ, ],
						'controlEnabled': [CGMESProfile.shortNames.SSH, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:RegulatingCondEq.RegulatingControl",
            "cim:RegulatingCondEq.controlEnabled",
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
            if (!RegulatingCondEq.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class RegulatingCondEq: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = RegulatingCondEq.attributeHTML(object, cimmenu);
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
        "ExternalNetworkInjection",
        "RotatingMachine",
        "AsynchronousMachine",
        "SynchronousMachine",
        "ShuntCompensator",
        "LinearShuntCompensator",
        "NonlinearShuntCompensator",
        "StaticVarCompensator",
        ];
        return subClasses;
    }
};
export default RegulatingCondEq
