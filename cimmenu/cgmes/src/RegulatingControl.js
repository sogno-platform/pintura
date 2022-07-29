import templates from "../../templates/index.js"
import PowerSystemResource from "./PowerSystemResource.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class RegulatingControl extends PowerSystemResource {

    static attributeHTML(object, cimmenu, classType="RegulatingControl") {
        let attributeEntries = PowerSystemResource.attributeHTML(object, cimmenu, classType);
        if ('cim:RegulatingControl.Terminal' in object) {
            attributeEntries['filledEntries']['cim:RegulatingControl.Terminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegulatingControl.Terminal'],
                                                   'cim:Terminal',
                                                   'cim:RegulatingControl.Terminal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RegulatingControl.Terminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegulatingControl.Terminal'],
                                                   'cim:Terminal',
                                                   'cim:RegulatingControl.Terminal'
                                                 );
        }
        if ('cim:RegulatingControl.mode' in object) {
            attributeEntries['filledEntries']['cim:RegulatingControl.mode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegulatingControl.mode'],
                                                   'cim:RegulatingControlModeKind',
                                                   'cim:RegulatingControl.mode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RegulatingControl.mode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegulatingControl.mode'],
                                                   'cim:RegulatingControlModeKind',
                                                   'cim:RegulatingControl.mode'
                                                 );
        }
        if ('cim:RegulatingControl.discrete' in object) {
            attributeEntries['filledEntries']['cim:RegulatingControl.discrete'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegulatingControl.discrete'],
                                                   'cim:Boolean',
                                                   'cim:RegulatingControl.discrete'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RegulatingControl.discrete'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegulatingControl.discrete'],
                                                   'cim:Boolean',
                                                   'cim:RegulatingControl.discrete'
                                                 );
        }
        if ('cim:RegulatingControl.enabled' in object) {
            attributeEntries['filledEntries']['cim:RegulatingControl.enabled'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegulatingControl.enabled'],
                                                   'cim:Boolean',
                                                   'cim:RegulatingControl.enabled'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RegulatingControl.enabled'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegulatingControl.enabled'],
                                                   'cim:Boolean',
                                                   'cim:RegulatingControl.enabled'
                                                 );
        }
        if ('cim:RegulatingControl.targetDeadband' in object) {
            attributeEntries['filledEntries']['cim:RegulatingControl.targetDeadband'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegulatingControl.targetDeadband'],
                                                   'cim:Simple_Float',
                                                   'cim:RegulatingControl.targetDeadband'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RegulatingControl.targetDeadband'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegulatingControl.targetDeadband'],
                                                   'cim:Simple_Float',
                                                   'cim:RegulatingControl.targetDeadband'
                                                 );
        }
        if ('cim:RegulatingControl.targetValue' in object) {
            attributeEntries['filledEntries']['cim:RegulatingControl.targetValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegulatingControl.targetValue'],
                                                   'cim:Simple_Float',
                                                   'cim:RegulatingControl.targetValue'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RegulatingControl.targetValue'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegulatingControl.targetValue'],
                                                   'cim:Simple_Float',
                                                   'cim:RegulatingControl.targetValue'
                                                 );
        }
        if ('cim:RegulatingControl.targetValueUnitMultiplier' in object) {
            attributeEntries['filledEntries']['cim:RegulatingControl.targetValueUnitMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegulatingControl.targetValueUnitMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:RegulatingControl.targetValueUnitMultiplier'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RegulatingControl.targetValueUnitMultiplier'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RegulatingControl.targetValueUnitMultiplier'],
                                                   'cim:UnitMultiplier',
                                                   'cim:RegulatingControl.targetValueUnitMultiplier'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, ],
						'Terminal': [CGMESProfile.shortNames.EQ, ],
						'mode': [CGMESProfile.shortNames.EQ, ],
						'discrete': [CGMESProfile.shortNames.SSH, ],
						'enabled': [CGMESProfile.shortNames.SSH, ],
						'targetDeadband': [CGMESProfile.shortNames.SSH, ],
						'targetValue': [CGMESProfile.shortNames.SSH, ],
						'targetValueUnitMultiplier': [CGMESProfile.shortNames.SSH, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:RegulatingControl.Terminal",
            "cim:RegulatingControl.mode",
            "cim:RegulatingControl.discrete",
            "cim:RegulatingControl.enabled",
            "cim:RegulatingControl.targetDeadband",
            "cim:RegulatingControl.targetValue",
            "cim:RegulatingControl.targetValueUnitMultiplier",
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
            if (!RegulatingControl.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class RegulatingControl: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = RegulatingControl.attributeHTML(object, cimmenu);
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
        "TapChangerControl",
        ];
        return subClasses;
    }
};
export default RegulatingControl
