import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Season extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="Season") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:Season.endDate' in object) {
            attributeEntries['filledEntries']['cim:Season.endDate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Season.endDate'],
                                                   'cim:MonthDay',
                                                   'cim:Season.endDate'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Season.endDate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Season.endDate'],
                                                   'cim:MonthDay',
                                                   'cim:Season.endDate'
                                                 );
        }
        if ('cim:Season.startDate' in object) {
            attributeEntries['filledEntries']['cim:Season.startDate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Season.startDate'],
                                                   'cim:MonthDay',
                                                   'cim:Season.startDate'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Season.startDate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Season.startDate'],
                                                   'cim:MonthDay',
                                                   'cim:Season.startDate'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'endDate': [CGMESProfile.shortNames.EQ, ],
						'startDate': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Season.endDate",
            "cim:Season.startDate",
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
            if (!Season.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class Season: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Season.attributeHTML(object, cimmenu);
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
export default Season
