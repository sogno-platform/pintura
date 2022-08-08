import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class SvShuntCompensatorSections extends BaseClass {

    static attributeHTML(object, cimmenu, classType="SvShuntCompensatorSections") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:SvShuntCompensatorSections.sections' in object) {
            attributeEntries['filledEntries']['cim:SvShuntCompensatorSections.sections'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvShuntCompensatorSections.sections'],
                                                   'cim:Simple_Float',
                                                   'cim:SvShuntCompensatorSections.sections'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SvShuntCompensatorSections.sections'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvShuntCompensatorSections.sections'],
                                                   'cim:Simple_Float',
                                                   'cim:SvShuntCompensatorSections.sections'
                                                 );
        }
        if ('cim:SvShuntCompensatorSections.ShuntCompensator' in object) {
            attributeEntries['filledEntries']['cim:SvShuntCompensatorSections.ShuntCompensator'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvShuntCompensatorSections.ShuntCompensator'],
                                                   'cim:ShuntCompensator',
                                                   'cim:SvShuntCompensatorSections.ShuntCompensator'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SvShuntCompensatorSections.ShuntCompensator'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvShuntCompensatorSections.ShuntCompensator'],
                                                   'cim:ShuntCompensator',
                                                   'cim:SvShuntCompensatorSections.ShuntCompensator'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.SV, ],
						'sections': [CGMESProfile.shortNames.SV, ],
						'ShuntCompensator': [CGMESProfile.shortNames.SV, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:SvShuntCompensatorSections.sections",
            "cim:SvShuntCompensatorSections.ShuntCompensator",
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
            if (!SvShuntCompensatorSections.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class SvShuntCompensatorSections: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SvShuntCompensatorSections.attributeHTML(object, cimmenu);
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
export default SvShuntCompensatorSections
