import templates from "../../templates/index.js"
import TapChangerTablePoint from "./TapChangerTablePoint.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class RatioTapChangerTablePoint extends TapChangerTablePoint {

    static attributeHTML(object, cimmenu, classType="RatioTapChangerTablePoint") {
        let attributeEntries = TapChangerTablePoint.attributeHTML(object, cimmenu, classType);
        if ('cim:RatioTapChangerTablePoint.RatioTapChangerTable' in object) {
            attributeEntries['filledEntries']['cim:RatioTapChangerTablePoint.RatioTapChangerTable'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RatioTapChangerTablePoint.RatioTapChangerTable'],
                                                   'cim:RatioTapChangerTable',
                                                   'cim:RatioTapChangerTablePoint.RatioTapChangerTable'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:RatioTapChangerTablePoint.RatioTapChangerTable'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['RatioTapChangerTablePoint.RatioTapChangerTable'],
                                                   'cim:RatioTapChangerTable',
                                                   'cim:RatioTapChangerTablePoint.RatioTapChangerTable'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'RatioTapChangerTable': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:RatioTapChangerTablePoint.RatioTapChangerTable",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( TapChangerTablePoint.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!RatioTapChangerTablePoint.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class RatioTapChangerTablePoint: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = RatioTapChangerTablePoint.attributeHTML(object, cimmenu);
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
export default RatioTapChangerTablePoint
