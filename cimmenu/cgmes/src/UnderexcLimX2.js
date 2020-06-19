import templates from "../../templates/index.js"
import UnderexcitationLimiterDynamics from "./UnderexcitationLimiterDynamics.js"
import common from "../../src/common.js"

class UnderexcLimX2 extends UnderexcitationLimiterDynamics {

    static attributeHTML(object, cimmenu, classType="UnderexcLimX2") {
        let attributeEntries = UnderexcitationLimiterDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:UnderexcLimX2.kf2' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimX2.kf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX2.kf2'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimX2.kf2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimX2.kf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX2.kf2'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimX2.kf2'
                                                 );
        }
        if ('cim:UnderexcLimX2.tf2' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimX2.tf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX2.tf2'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimX2.tf2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimX2.tf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX2.tf2'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimX2.tf2'
                                                 );
        }
        if ('cim:UnderexcLimX2.km' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimX2.km'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX2.km'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimX2.km'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimX2.km'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX2.km'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimX2.km'
                                                 );
        }
        if ('cim:UnderexcLimX2.tm' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimX2.tm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX2.tm'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimX2.tm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimX2.tm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX2.tm'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimX2.tm'
                                                 );
        }
        if ('cim:UnderexcLimX2.melmax' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimX2.melmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX2.melmax'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimX2.melmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimX2.melmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX2.melmax'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimX2.melmax'
                                                 );
        }
        if ('cim:UnderexcLimX2.qo' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimX2.qo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX2.qo'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimX2.qo'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimX2.qo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX2.qo'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimX2.qo'
                                                 );
        }
        if ('cim:UnderexcLimX2.r' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimX2.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX2.r'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimX2.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimX2.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimX2.r'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimX2.r'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:UnderexcLimX2.kf2",
            "cim:UnderexcLimX2.tf2",
            "cim:UnderexcLimX2.km",
            "cim:UnderexcLimX2.tm",
            "cim:UnderexcLimX2.melmax",
            "cim:UnderexcLimX2.qo",
            "cim:UnderexcLimX2.r",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( UnderexcitationLimiterDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!UnderexcLimX2.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class UnderexcLimX2: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = UnderexcLimX2.attributeHTML(object, cimmenu);
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
export default UnderexcLimX2
