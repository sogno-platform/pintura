import templates from "../../templates/index.js"
import ACDCTerminal from "./ACDCTerminal.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Terminal extends ACDCTerminal {

    static attributeHTML(object, cimmenu, classType="Terminal") {
        let attributeEntries = ACDCTerminal.attributeHTML(object, cimmenu, classType);
        if ('cim:Terminal.ConductingEquipment' in object) {
            attributeEntries['filledEntries']['cim:Terminal.ConductingEquipment'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Terminal.ConductingEquipment'],
                                                   'cim:ConductingEquipment',
                                                   'cim:Terminal.ConductingEquipment'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Terminal.ConductingEquipment'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Terminal.ConductingEquipment'],
                                                   'cim:ConductingEquipment',
                                                   'cim:Terminal.ConductingEquipment'
                                                 );
        }
        if ('cim:Terminal.phases' in object) {
            attributeEntries['filledEntries']['cim:Terminal.phases'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Terminal.phases'],
                                                   'cim:PhaseCode',
                                                   'cim:Terminal.phases'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Terminal.phases'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Terminal.phases'],
                                                   'cim:PhaseCode',
                                                   'cim:Terminal.phases'
                                                 );
        }
        if ('cim:Terminal.TieFlow' in object) {
            attributeEntries['filledEntries']['cim:Terminal.TieFlow'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Terminal.TieFlow'],
                                                   'cim:TieFlow',
                                                   'cim:Terminal.TieFlow'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Terminal.TieFlow'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Terminal.TieFlow'],
                                                   'cim:TieFlow',
                                                   'cim:Terminal.TieFlow'
                                                 );
        }
        if ('cim:Terminal.ConnectivityNode' in object) {
            attributeEntries['filledEntries']['cim:Terminal.ConnectivityNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Terminal.ConnectivityNode'],
                                                   'cim:ConnectivityNode',
                                                   'cim:Terminal.ConnectivityNode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Terminal.ConnectivityNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Terminal.ConnectivityNode'],
                                                   'cim:ConnectivityNode',
                                                   'cim:Terminal.ConnectivityNode'
                                                 );
        }
        if ('cim:Terminal.HasSecondMutualCoupling' in object) {
            attributeEntries['filledEntries']['cim:Terminal.HasSecondMutualCoupling'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Terminal.HasSecondMutualCoupling'],
                                                   'cim:MutualCoupling',
                                                   'cim:Terminal.HasSecondMutualCoupling'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Terminal.HasSecondMutualCoupling'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Terminal.HasSecondMutualCoupling'],
                                                   'cim:MutualCoupling',
                                                   'cim:Terminal.HasSecondMutualCoupling'
                                                 );
        }
        if ('cim:Terminal.RemoteInputSignal' in object) {
            attributeEntries['filledEntries']['cim:Terminal.RemoteInputSignal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Terminal.RemoteInputSignal'],
                                                   'cim:RemoteInputSignal',
                                                   'cim:Terminal.RemoteInputSignal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Terminal.RemoteInputSignal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Terminal.RemoteInputSignal'],
                                                   'cim:RemoteInputSignal',
                                                   'cim:Terminal.RemoteInputSignal'
                                                 );
        }
        if ('cim:Terminal.TopologicalNode' in object) {
            attributeEntries['filledEntries']['cim:Terminal.TopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Terminal.TopologicalNode'],
                                                   'cim:TopologicalNode',
                                                   'cim:Terminal.TopologicalNode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Terminal.TopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Terminal.TopologicalNode'],
                                                   'cim:TopologicalNode',
                                                   'cim:Terminal.TopologicalNode'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.SV, CGMESProfile.shortNames.DY, CGMESProfile.shortNames.TP, CGMESProfile.shortNames.EQ_BD, ],
						'ConductingEquipment': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.DY, CGMESProfile.shortNames.EQ_BD, ],
						'phases': [CGMESProfile.shortNames.EQ, ],
						'TieFlow': [CGMESProfile.shortNames.EQ, ],
						'ConnectivityNode': [CGMESProfile.shortNames.EQ, ],
						'HasSecondMutualCoupling': [CGMESProfile.shortNames.EQ, ],
						'RemoteInputSignal': [CGMESProfile.shortNames.DY, ],
						'TopologicalNode': [CGMESProfile.shortNames.TP, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Terminal.ConductingEquipment",
            "cim:Terminal.phases",
            "cim:Terminal.TieFlow",
            "cim:Terminal.ConnectivityNode",
            "cim:Terminal.HasSecondMutualCoupling",
            "cim:Terminal.RemoteInputSignal",
            "cim:Terminal.TopologicalNode",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( ACDCTerminal.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!Terminal.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class Terminal: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Terminal.attributeHTML(object, cimmenu);
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
export default Terminal
