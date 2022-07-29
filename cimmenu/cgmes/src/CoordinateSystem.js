import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class CoordinateSystem extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="CoordinateSystem") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:CoordinateSystem.crsUrn' in object) {
            attributeEntries['filledEntries']['cim:CoordinateSystem.crsUrn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CoordinateSystem.crsUrn'],
                                                   'cim:String',
                                                   'cim:CoordinateSystem.crsUrn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:CoordinateSystem.crsUrn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['CoordinateSystem.crsUrn'],
                                                   'cim:String',
                                                   'cim:CoordinateSystem.crsUrn'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.GL, ],
						'crsUrn': [CGMESProfile.shortNames.GL, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:CoordinateSystem.crsUrn",
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
            if (!CoordinateSystem.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class CoordinateSystem: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = CoordinateSystem.attributeHTML(object, cimmenu);
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
export default CoordinateSystem
