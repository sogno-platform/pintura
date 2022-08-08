import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcAVR5 extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcAVR5") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcAVR5.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR5.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR5.ka'],
                                                   'cim:PU',
                                                   'cim:ExcAVR5.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR5.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR5.ka'],
                                                   'cim:PU',
                                                   'cim:ExcAVR5.ka'
                                                 );
        }
        if ('cim:ExcAVR5.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR5.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR5.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR5.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR5.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR5.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR5.ta'
                                                 );
        }
        if ('cim:ExcAVR5.rex' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR5.rex'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR5.rex'],
                                                   'cim:PU',
                                                   'cim:ExcAVR5.rex'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR5.rex'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR5.rex'],
                                                   'cim:PU',
                                                   'cim:ExcAVR5.rex'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'rex': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcAVR5.ka",
            "cim:ExcAVR5.ta",
            "cim:ExcAVR5.rex",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( ExcitationSystemDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!ExcAVR5.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcAVR5: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcAVR5.attributeHTML(object, cimmenu);
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
export default ExcAVR5
