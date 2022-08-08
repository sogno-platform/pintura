import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class SvPowerFlow extends BaseClass {

    static attributeHTML(object, cimmenu, classType="SvPowerFlow") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:SvPowerFlow.Terminal' in object) {
            attributeEntries['filledEntries']['cim:SvPowerFlow.Terminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvPowerFlow.Terminal'],
                                                   'cim:Terminal',
                                                   'cim:SvPowerFlow.Terminal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SvPowerFlow.Terminal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvPowerFlow.Terminal'],
                                                   'cim:Terminal',
                                                   'cim:SvPowerFlow.Terminal'
                                                 );
        }
        if ('cim:SvPowerFlow.p' in object) {
            attributeEntries['filledEntries']['cim:SvPowerFlow.p'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvPowerFlow.p'],
                                                   'cim:ActivePower',
                                                   'cim:SvPowerFlow.p'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SvPowerFlow.p'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvPowerFlow.p'],
                                                   'cim:ActivePower',
                                                   'cim:SvPowerFlow.p'
                                                 );
        }
        if ('cim:SvPowerFlow.q' in object) {
            attributeEntries['filledEntries']['cim:SvPowerFlow.q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvPowerFlow.q'],
                                                   'cim:ReactivePower',
                                                   'cim:SvPowerFlow.q'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SvPowerFlow.q'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvPowerFlow.q'],
                                                   'cim:ReactivePower',
                                                   'cim:SvPowerFlow.q'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.SV, ],
						'Terminal': [CGMESProfile.shortNames.SV, ],
						'p': [CGMESProfile.shortNames.SV, ],
						'q': [CGMESProfile.shortNames.SV, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:SvPowerFlow.Terminal",
            "cim:SvPowerFlow.p",
            "cim:SvPowerFlow.q",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( BaseClass.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!SvPowerFlow.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class SvPowerFlow: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SvPowerFlow.attributeHTML(object, cimmenu);
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
export default SvPowerFlow
