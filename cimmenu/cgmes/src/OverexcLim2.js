import templates from "../../templates/index.js"
import OverexcitationLimiterDynamics from "./OverexcitationLimiterDynamics.js"
import common from "../../src/common.js"

class OverexcLim2 extends OverexcitationLimiterDynamics {

    static attributeHTML(object, cimmenu, classType="OverexcLim2") {
        let attributeEntries = OverexcitationLimiterDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:OverexcLim2.koi' in object) {
            attributeEntries['filledEntries']['cim:OverexcLim2.koi'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLim2.koi'],
                                                   'cim:PU',
                                                   'cim:OverexcLim2.koi'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLim2.koi'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLim2.koi'],
                                                   'cim:PU',
                                                   'cim:OverexcLim2.koi'
                                                 );
        }
        if ('cim:OverexcLim2.voimax' in object) {
            attributeEntries['filledEntries']['cim:OverexcLim2.voimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLim2.voimax'],
                                                   'cim:PU',
                                                   'cim:OverexcLim2.voimax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLim2.voimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLim2.voimax'],
                                                   'cim:PU',
                                                   'cim:OverexcLim2.voimax'
                                                 );
        }
        if ('cim:OverexcLim2.voimin' in object) {
            attributeEntries['filledEntries']['cim:OverexcLim2.voimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLim2.voimin'],
                                                   'cim:PU',
                                                   'cim:OverexcLim2.voimin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLim2.voimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLim2.voimin'],
                                                   'cim:PU',
                                                   'cim:OverexcLim2.voimin'
                                                 );
        }
        if ('cim:OverexcLim2.ifdlim' in object) {
            attributeEntries['filledEntries']['cim:OverexcLim2.ifdlim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLim2.ifdlim'],
                                                   'cim:PU',
                                                   'cim:OverexcLim2.ifdlim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLim2.ifdlim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLim2.ifdlim'],
                                                   'cim:PU',
                                                   'cim:OverexcLim2.ifdlim'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:OverexcLim2.koi",
            "cim:OverexcLim2.voimax",
            "cim:OverexcLim2.voimin",
            "cim:OverexcLim2.ifdlim",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( OverexcitationLimiterDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!OverexcLim2.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class OverexcLim2: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = OverexcLim2.attributeHTML(object, cimmenu);
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
export default OverexcLim2
