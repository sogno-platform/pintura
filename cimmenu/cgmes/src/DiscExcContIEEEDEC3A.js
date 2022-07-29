import templates from "../../templates/index.js"
import DiscontinuousExcitationControlDynamics from "./DiscontinuousExcitationControlDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class DiscExcContIEEEDEC3A extends DiscontinuousExcitationControlDynamics {

    static attributeHTML(object, cimmenu, classType="DiscExcContIEEEDEC3A") {
        let attributeEntries = DiscontinuousExcitationControlDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:DiscExcContIEEEDEC3A.vtmin' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC3A.vtmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC3A.vtmin'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC3A.vtmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC3A.vtmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC3A.vtmin'],
                                                   'cim:PU',
                                                   'cim:DiscExcContIEEEDEC3A.vtmin'
                                                 );
        }
        if ('cim:DiscExcContIEEEDEC3A.tdr' in object) {
            attributeEntries['filledEntries']['cim:DiscExcContIEEEDEC3A.tdr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC3A.tdr'],
                                                   'cim:Seconds',
                                                   'cim:DiscExcContIEEEDEC3A.tdr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:DiscExcContIEEEDEC3A.tdr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['DiscExcContIEEEDEC3A.tdr'],
                                                   'cim:Seconds',
                                                   'cim:DiscExcContIEEEDEC3A.tdr'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'vtmin': [CGMESProfile.shortNames.DY, ],
						'tdr': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:DiscExcContIEEEDEC3A.vtmin",
            "cim:DiscExcContIEEEDEC3A.tdr",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( DiscontinuousExcitationControlDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!DiscExcContIEEEDEC3A.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class DiscExcContIEEEDEC3A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = DiscExcContIEEEDEC3A.attributeHTML(object, cimmenu);
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
export default DiscExcContIEEEDEC3A
