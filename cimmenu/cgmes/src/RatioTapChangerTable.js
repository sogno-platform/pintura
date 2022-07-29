import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class RatioTapChangerTable extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="RatioTapChangerTable") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:RatioTapChangerTable.RatioTapChangerTablePoint' in object) {
            attributeEntries['filledEntries']['cim:RatioTapChangerTable.RatioTapChangerTablePoint'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RatioTapChangerTable.RatioTapChangerTablePoint'],
                                                   'cim:RatioTapChangerTablePoint',
                                                   'cim:RatioTapChangerTable.RatioTapChangerTablePoint'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RatioTapChangerTable.RatioTapChangerTablePoint'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RatioTapChangerTable.RatioTapChangerTablePoint'],
                                                   'cim:RatioTapChangerTablePoint',
                                                   'cim:RatioTapChangerTable.RatioTapChangerTablePoint'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'RatioTapChangerTablePoint': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:RatioTapChangerTable.RatioTapChangerTablePoint",
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
            if (!RatioTapChangerTable.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class RatioTapChangerTable: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = RatioTapChangerTable.attributeHTML(object, cimmenu);
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
export default RatioTapChangerTable
