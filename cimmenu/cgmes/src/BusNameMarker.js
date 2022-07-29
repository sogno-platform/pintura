import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class BusNameMarker extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="BusNameMarker") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:BusNameMarker.priority' in object) {
            attributeEntries['filledEntries']['cim:BusNameMarker.priority'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['BusNameMarker.priority'],
                                                   'cim:Integer',
                                                   'cim:BusNameMarker.priority'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:BusNameMarker.priority'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['BusNameMarker.priority'],
                                                   'cim:Integer',
                                                   'cim:BusNameMarker.priority'
                                                 );
        }
        if ('cim:BusNameMarker.ReportingGroup' in object) {
            attributeEntries['filledEntries']['cim:BusNameMarker.ReportingGroup'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['BusNameMarker.ReportingGroup'],
                                                   'cim:ReportingGroup',
                                                   'cim:BusNameMarker.ReportingGroup'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:BusNameMarker.ReportingGroup'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['BusNameMarker.ReportingGroup'],
                                                   'cim:ReportingGroup',
                                                   'cim:BusNameMarker.ReportingGroup'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'priority': [CGMESProfile.shortNames.EQ, ],
						'ReportingGroup': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:BusNameMarker.priority",
            "cim:BusNameMarker.ReportingGroup",
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
            if (!BusNameMarker.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class BusNameMarker: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = BusNameMarker.attributeHTML(object, cimmenu);
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
export default BusNameMarker
