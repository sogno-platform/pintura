import templates from "../../templates/index.js"
import PhaseTapChangerNonLinear from "./PhaseTapChangerNonLinear.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PhaseTapChangerAsymmetrical extends PhaseTapChangerNonLinear {

    static attributeHTML(object, cimmenu, classType="PhaseTapChangerAsymmetrical") {
        let attributeEntries = PhaseTapChangerNonLinear.attributeHTML(object, cimmenu, classType);
        if ('cim:PhaseTapChangerAsymmetrical.windingConnectionAngle' in object) {
            attributeEntries['filledEntries']['cim:PhaseTapChangerAsymmetrical.windingConnectionAngle'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerAsymmetrical.windingConnectionAngle'],
                                                   'cim:AngleDegrees',
                                                   'cim:PhaseTapChangerAsymmetrical.windingConnectionAngle'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PhaseTapChangerAsymmetrical.windingConnectionAngle'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerAsymmetrical.windingConnectionAngle'],
                                                   'cim:AngleDegrees',
                                                   'cim:PhaseTapChangerAsymmetrical.windingConnectionAngle'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.SSH, ],
						'windingConnectionAngle': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PhaseTapChangerAsymmetrical.windingConnectionAngle",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( PhaseTapChangerNonLinear.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!PhaseTapChangerAsymmetrical.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PhaseTapChangerAsymmetrical: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PhaseTapChangerAsymmetrical.attributeHTML(object, cimmenu);
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
export default PhaseTapChangerAsymmetrical
