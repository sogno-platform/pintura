import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Location extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="Location") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:Location.CoordinateSystem' in object) {
            attributeEntries['filledEntries']['cim:Location.CoordinateSystem'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Location.CoordinateSystem'],
                                                   'cim:CoordinateSystem',
                                                   'cim:Location.CoordinateSystem'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Location.CoordinateSystem'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Location.CoordinateSystem'],
                                                   'cim:CoordinateSystem',
                                                   'cim:Location.CoordinateSystem'
                                                 );
        }
        if ('cim:Location.PowerSystemResources' in object) {
            attributeEntries['filledEntries']['cim:Location.PowerSystemResources'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Location.PowerSystemResources'],
                                                   'cim:PowerSystemResource',
                                                   'cim:Location.PowerSystemResources'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Location.PowerSystemResources'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Location.PowerSystemResources'],
                                                   'cim:PowerSystemResource',
                                                   'cim:Location.PowerSystemResources'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.GL, ],
						'CoordinateSystem': [CGMESProfile.shortNames.GL, ],
						'PowerSystemResources': [CGMESProfile.shortNames.GL, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Location.CoordinateSystem",
            "cim:Location.PowerSystemResources",
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
            if (!Location.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class Location: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Location.attributeHTML(object, cimmenu);
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
export default Location
