import templates from "../../templates/index.js"
import TapChangerTablePoint from "./TapChangerTablePoint.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PhaseTapChangerTablePoint extends TapChangerTablePoint {

    static attributeHTML(object, cimmenu, classType="PhaseTapChangerTablePoint") {
        let attributeEntries = TapChangerTablePoint.attributeHTML(object, cimmenu, classType);
        if ('cim:PhaseTapChangerTablePoint.PhaseTapChangerTable' in object) {
            attributeEntries['filledEntries']['cim:PhaseTapChangerTablePoint.PhaseTapChangerTable'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerTablePoint.PhaseTapChangerTable'],
                                                   'cim:PhaseTapChangerTable',
                                                   'cim:PhaseTapChangerTablePoint.PhaseTapChangerTable'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PhaseTapChangerTablePoint.PhaseTapChangerTable'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerTablePoint.PhaseTapChangerTable'],
                                                   'cim:PhaseTapChangerTable',
                                                   'cim:PhaseTapChangerTablePoint.PhaseTapChangerTable'
                                                 );
        }
        if ('cim:PhaseTapChangerTablePoint.angle' in object) {
            attributeEntries['filledEntries']['cim:PhaseTapChangerTablePoint.angle'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerTablePoint.angle'],
                                                   'cim:AngleDegrees',
                                                   'cim:PhaseTapChangerTablePoint.angle'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PhaseTapChangerTablePoint.angle'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PhaseTapChangerTablePoint.angle'],
                                                   'cim:AngleDegrees',
                                                   'cim:PhaseTapChangerTablePoint.angle'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'PhaseTapChangerTable': [CGMESProfile.shortNames.EQ, ],
						'angle': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PhaseTapChangerTablePoint.PhaseTapChangerTable",
            "cim:PhaseTapChangerTablePoint.angle",
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
            if (!PhaseTapChangerTablePoint.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PhaseTapChangerTablePoint: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PhaseTapChangerTablePoint.attributeHTML(object, cimmenu);
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
export default PhaseTapChangerTablePoint
