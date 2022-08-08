import templates from "../../templates/index.js"
import RegulatingCondEq from "./RegulatingCondEq.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class RotatingMachine extends RegulatingCondEq {

    static attributeHTML(object, cimmenu, classType="RotatingMachine") {
        let attributeEntries = RegulatingCondEq.attributeHTML(object, cimmenu, classType);
        if ('cim:RotatingMachine.GeneratingUnit' in object) {
            attributeEntries['filledEntries']['cim:RotatingMachine.GeneratingUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachine.GeneratingUnit'],
                                                   'cim:GeneratingUnit',
                                                   'cim:RotatingMachine.GeneratingUnit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RotatingMachine.GeneratingUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachine.GeneratingUnit'],
                                                   'cim:GeneratingUnit',
                                                   'cim:RotatingMachine.GeneratingUnit'
                                                 );
        }
        if ('cim:RotatingMachine.ratedPowerFactor' in object) {
            attributeEntries['filledEntries']['cim:RotatingMachine.ratedPowerFactor'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachine.ratedPowerFactor'],
                                                   'cim:Simple_Float',
                                                   'cim:RotatingMachine.ratedPowerFactor'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RotatingMachine.ratedPowerFactor'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachine.ratedPowerFactor'],
                                                   'cim:Simple_Float',
                                                   'cim:RotatingMachine.ratedPowerFactor'
                                                 );
        }
        if ('cim:RotatingMachine.ratedS' in object) {
            attributeEntries['filledEntries']['cim:RotatingMachine.ratedS'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachine.ratedS'],
                                                   'cim:ApparentPower',
                                                   'cim:RotatingMachine.ratedS'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RotatingMachine.ratedS'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachine.ratedS'],
                                                   'cim:ApparentPower',
                                                   'cim:RotatingMachine.ratedS'
                                                 );
        }
        if ('cim:RotatingMachine.ratedU' in object) {
            attributeEntries['filledEntries']['cim:RotatingMachine.ratedU'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachine.ratedU'],
                                                   'cim:Voltage',
                                                   'cim:RotatingMachine.ratedU'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RotatingMachine.ratedU'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachine.ratedU'],
                                                   'cim:Voltage',
                                                   'cim:RotatingMachine.ratedU'
                                                 );
        }
        if ('cim:RotatingMachine.p' in object) {
            attributeEntries['filledEntries']['cim:RotatingMachine.p'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachine.p'],
                                                   'cim:ActivePower',
                                                   'cim:RotatingMachine.p'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RotatingMachine.p'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachine.p'],
                                                   'cim:ActivePower',
                                                   'cim:RotatingMachine.p'
                                                 );
        }
        if ('cim:RotatingMachine.q' in object) {
            attributeEntries['filledEntries']['cim:RotatingMachine.q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachine.q'],
                                                   'cim:ReactivePower',
                                                   'cim:RotatingMachine.q'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RotatingMachine.q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RotatingMachine.q'],
                                                   'cim:ReactivePower',
                                                   'cim:RotatingMachine.q'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, CGMESProfile.shortNames.DY, ],
						'GeneratingUnit': [CGMESProfile.shortNames.EQ, ],
						'ratedPowerFactor': [CGMESProfile.shortNames.EQ, ],
						'ratedS': [CGMESProfile.shortNames.EQ, ],
						'ratedU': [CGMESProfile.shortNames.EQ, ],
						'p': [CGMESProfile.shortNames.SSH, ],
						'q': [CGMESProfile.shortNames.SSH, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:RotatingMachine.GeneratingUnit",
            "cim:RotatingMachine.ratedPowerFactor",
            "cim:RotatingMachine.ratedS",
            "cim:RotatingMachine.ratedU",
            "cim:RotatingMachine.p",
            "cim:RotatingMachine.q",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( RegulatingCondEq.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!RotatingMachine.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class RotatingMachine: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = RotatingMachine.attributeHTML(object, cimmenu);
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
        "AsynchronousMachine",
        "SynchronousMachine",
        ];
        return subClasses;
    }
};
export default RotatingMachine
