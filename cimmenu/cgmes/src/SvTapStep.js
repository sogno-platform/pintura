import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class SvTapStep extends BaseClass {

    static attributeHTML(object, cimmenu, classType="SvTapStep") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:SvTapStep.position' in object) {
            attributeEntries['filledEntries']['cim:SvTapStep.position'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvTapStep.position'],
                                                   'cim:Simple_Float',
                                                   'cim:SvTapStep.position'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SvTapStep.position'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvTapStep.position'],
                                                   'cim:Simple_Float',
                                                   'cim:SvTapStep.position'
                                                 );
        }
        if ('cim:SvTapStep.TapChanger' in object) {
            attributeEntries['filledEntries']['cim:SvTapStep.TapChanger'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvTapStep.TapChanger'],
                                                   'cim:TapChanger',
                                                   'cim:SvTapStep.TapChanger'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SvTapStep.TapChanger'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvTapStep.TapChanger'],
                                                   'cim:TapChanger',
                                                   'cim:SvTapStep.TapChanger'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.SV, ],
						'position': [CGMESProfile.shortNames.SV, ],
						'TapChanger': [CGMESProfile.shortNames.SV, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:SvTapStep.position",
            "cim:SvTapStep.TapChanger",
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
            if (!SvTapStep.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class SvTapStep: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SvTapStep.attributeHTML(object, cimmenu);
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
export default SvTapStep
