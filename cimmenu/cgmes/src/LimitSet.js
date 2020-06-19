import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"

class LimitSet extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="LimitSet") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:LimitSet.isPercentageLimits' in object) {
            attributeEntries['filledEntries']['cim:LimitSet.isPercentageLimits'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LimitSet.isPercentageLimits'],
                                                   'cim:Boolean',
                                                   'cim:LimitSet.isPercentageLimits'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:LimitSet.isPercentageLimits'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['LimitSet.isPercentageLimits'],
                                                   'cim:Boolean',
                                                   'cim:LimitSet.isPercentageLimits'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:LimitSet.isPercentageLimits",
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
            if (!LimitSet.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class LimitSet: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = LimitSet.attributeHTML(object, cimmenu);
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
        "AccumulatorLimitSet",
        "AnalogLimitSet",
        ];
        return subClasses;
    }
};
export default LimitSet
