import templates from "../../templates/index.js"
import PowerSystemResource from "./PowerSystemResource.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ControlArea extends PowerSystemResource {

    static attributeHTML(object, cimmenu, classType="ControlArea") {
        let attributeEntries = PowerSystemResource.attributeHTML(object, cimmenu, classType);
        if ('cim:ControlArea.type' in object) {
            attributeEntries['filledEntries']['cim:ControlArea.type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ControlArea.type'],
                                                   'cim:ControlAreaTypeKind',
                                                   'cim:ControlArea.type'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ControlArea.type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ControlArea.type'],
                                                   'cim:ControlAreaTypeKind',
                                                   'cim:ControlArea.type'
                                                 );
        }
        if ('cim:ControlArea.ControlAreaGeneratingUnit' in object) {
            attributeEntries['filledEntries']['cim:ControlArea.ControlAreaGeneratingUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ControlArea.ControlAreaGeneratingUnit'],
                                                   'cim:ControlAreaGeneratingUnit',
                                                   'cim:ControlArea.ControlAreaGeneratingUnit'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ControlArea.ControlAreaGeneratingUnit'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ControlArea.ControlAreaGeneratingUnit'],
                                                   'cim:ControlAreaGeneratingUnit',
                                                   'cim:ControlArea.ControlAreaGeneratingUnit'
                                                 );
        }
        if ('cim:ControlArea.EnergyArea' in object) {
            attributeEntries['filledEntries']['cim:ControlArea.EnergyArea'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ControlArea.EnergyArea'],
                                                   'cim:EnergyArea',
                                                   'cim:ControlArea.EnergyArea'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ControlArea.EnergyArea'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ControlArea.EnergyArea'],
                                                   'cim:EnergyArea',
                                                   'cim:ControlArea.EnergyArea'
                                                 );
        }
        if ('cim:ControlArea.netInterchange' in object) {
            attributeEntries['filledEntries']['cim:ControlArea.netInterchange'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ControlArea.netInterchange'],
                                                   'cim:ActivePower',
                                                   'cim:ControlArea.netInterchange'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ControlArea.netInterchange'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ControlArea.netInterchange'],
                                                   'cim:ActivePower',
                                                   'cim:ControlArea.netInterchange'
                                                 );
        }
        if ('cim:ControlArea.pTolerance' in object) {
            attributeEntries['filledEntries']['cim:ControlArea.pTolerance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ControlArea.pTolerance'],
                                                   'cim:ActivePower',
                                                   'cim:ControlArea.pTolerance'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ControlArea.pTolerance'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ControlArea.pTolerance'],
                                                   'cim:ActivePower',
                                                   'cim:ControlArea.pTolerance'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, ],
						'type': [CGMESProfile.shortNames.EQ, ],
						'ControlAreaGeneratingUnit': [CGMESProfile.shortNames.EQ, ],
						'EnergyArea': [CGMESProfile.shortNames.EQ, ],
						'netInterchange': [CGMESProfile.shortNames.SSH, ],
						'pTolerance': [CGMESProfile.shortNames.SSH, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ControlArea.type",
            "cim:ControlArea.ControlAreaGeneratingUnit",
            "cim:ControlArea.EnergyArea",
            "cim:ControlArea.netInterchange",
            "cim:ControlArea.pTolerance",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( PowerSystemResource.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!ControlArea.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ControlArea: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ControlArea.attributeHTML(object, cimmenu);
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
export default ControlArea
