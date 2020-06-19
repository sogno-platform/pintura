import templates from "../../templates/index.js"
import Limit from "./Limit.js"
import common from "../../src/common.js"

class AccumulatorLimit extends Limit {

    static attributeHTML(object, cimmenu, classType="AccumulatorLimit") {
        let attributeEntries = Limit.attributeHTML(object, cimmenu, classType);
        if ('cim:AccumulatorLimit.value' in object) {
            attributeEntries['filledEntries']['cim:AccumulatorLimit.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AccumulatorLimit.value'],
                                                   'cim:Integer',
                                                   'cim:AccumulatorLimit.value'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AccumulatorLimit.value'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AccumulatorLimit.value'],
                                                   'cim:Integer',
                                                   'cim:AccumulatorLimit.value'
                                                 );
        }
        if ('cim:AccumulatorLimit.LimitSet' in object) {
            attributeEntries['filledEntries']['cim:AccumulatorLimit.LimitSet'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AccumulatorLimit.LimitSet'],
                                                   'cim:AccumulatorLimitSet',
                                                   'cim:AccumulatorLimit.LimitSet'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:AccumulatorLimit.LimitSet'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['AccumulatorLimit.LimitSet'],
                                                   'cim:AccumulatorLimitSet',
                                                   'cim:AccumulatorLimit.LimitSet'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:AccumulatorLimit.value",
            "cim:AccumulatorLimit.LimitSet",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( Limit.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!AccumulatorLimit.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class AccumulatorLimit: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = AccumulatorLimit.attributeHTML(object, cimmenu);
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
export default AccumulatorLimit
