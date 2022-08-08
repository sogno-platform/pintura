import templates from "../../templates/index.js"
import VoltageCompensatorDynamics from "./VoltageCompensatorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class VCompIEEEType2 extends VoltageCompensatorDynamics {

    static attributeHTML(object, cimmenu, classType="VCompIEEEType2") {
        let attributeEntries = VoltageCompensatorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:VCompIEEEType2.tr' in object) {
            attributeEntries['filledEntries']['cim:VCompIEEEType2.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VCompIEEEType2.tr'],
                                                   'cim:Seconds',
                                                   'cim:VCompIEEEType2.tr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VCompIEEEType2.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VCompIEEEType2.tr'],
                                                   'cim:Seconds',
                                                   'cim:VCompIEEEType2.tr'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'tr': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:VCompIEEEType2.tr",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( VoltageCompensatorDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!VCompIEEEType2.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class VCompIEEEType2: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = VCompIEEEType2.attributeHTML(object, cimmenu);
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
export default VCompIEEEType2
