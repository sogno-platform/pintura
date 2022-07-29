import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PhaseTapChangerTable extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="PhaseTapChangerTable") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:PhaseTapChangerTable.PhaseTapChangerTabular' in object) {
            attributeEntries['filledEntries']['cim:PhaseTapChangerTable.PhaseTapChangerTabular'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerTable.PhaseTapChangerTabular'],
                                                   'cim:PhaseTapChangerTabular',
                                                   'cim:PhaseTapChangerTable.PhaseTapChangerTabular'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PhaseTapChangerTable.PhaseTapChangerTabular'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerTable.PhaseTapChangerTabular'],
                                                   'cim:PhaseTapChangerTabular',
                                                   'cim:PhaseTapChangerTable.PhaseTapChangerTabular'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'PhaseTapChangerTabular': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PhaseTapChangerTable.PhaseTapChangerTabular",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( IdentifiedObject.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!PhaseTapChangerTable.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PhaseTapChangerTable: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PhaseTapChangerTable.attributeHTML(object, cimmenu);
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
export default PhaseTapChangerTable
