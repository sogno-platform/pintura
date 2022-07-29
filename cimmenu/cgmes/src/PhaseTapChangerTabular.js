import templates from "../../templates/index.js"
import PhaseTapChanger from "./PhaseTapChanger.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PhaseTapChangerTabular extends PhaseTapChanger {

    static attributeHTML(object, cimmenu, classType="PhaseTapChangerTabular") {
        let attributeEntries = PhaseTapChanger.attributeHTML(object, cimmenu, classType);
        if ('cim:PhaseTapChangerTabular.PhaseTapChangerTable' in object) {
            attributeEntries['filledEntries']['cim:PhaseTapChangerTabular.PhaseTapChangerTable'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerTabular.PhaseTapChangerTable'],
                                                   'cim:PhaseTapChangerTable',
                                                   'cim:PhaseTapChangerTabular.PhaseTapChangerTable'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PhaseTapChangerTabular.PhaseTapChangerTable'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerTabular.PhaseTapChangerTable'],
                                                   'cim:PhaseTapChangerTable',
                                                   'cim:PhaseTapChangerTabular.PhaseTapChangerTable'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, ],
						'PhaseTapChangerTable': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PhaseTapChangerTabular.PhaseTapChangerTable",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( PhaseTapChanger.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!PhaseTapChangerTabular.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PhaseTapChangerTabular: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PhaseTapChangerTabular.attributeHTML(object, cimmenu);
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
export default PhaseTapChangerTabular
