import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ReportingGroup extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="ReportingGroup") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:ReportingGroup.TopologicalNode' in object) {
            attributeEntries['filledEntries']['cim:ReportingGroup.TopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ReportingGroup.TopologicalNode'],
                                                   'cim:TopologicalNode',
                                                   'cim:ReportingGroup.TopologicalNode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ReportingGroup.TopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ReportingGroup.TopologicalNode'],
                                                   'cim:TopologicalNode',
                                                   'cim:ReportingGroup.TopologicalNode'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, CGMESProfile.shortNames.TP, ],
						'TopologicalNode': [CGMESProfile.shortNames.TP, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ReportingGroup.TopologicalNode",
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
            if (!ReportingGroup.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ReportingGroup: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ReportingGroup.attributeHTML(object, cimmenu);
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
export default ReportingGroup
