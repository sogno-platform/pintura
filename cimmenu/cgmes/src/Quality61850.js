import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Quality61850 extends BaseClass {

    static attributeHTML(object, cimmenu, classType="Quality61850") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:Quality61850.badReference' in object) {
            attributeEntries['filledEntries']['cim:Quality61850.badReference'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.badReference'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.badReference'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Quality61850.badReference'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.badReference'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.badReference'
                                                 );
        }
        if ('cim:Quality61850.estimatorReplaced' in object) {
            attributeEntries['filledEntries']['cim:Quality61850.estimatorReplaced'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.estimatorReplaced'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.estimatorReplaced'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Quality61850.estimatorReplaced'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.estimatorReplaced'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.estimatorReplaced'
                                                 );
        }
        if ('cim:Quality61850.failure' in object) {
            attributeEntries['filledEntries']['cim:Quality61850.failure'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.failure'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.failure'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Quality61850.failure'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.failure'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.failure'
                                                 );
        }
        if ('cim:Quality61850.oldData' in object) {
            attributeEntries['filledEntries']['cim:Quality61850.oldData'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.oldData'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.oldData'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Quality61850.oldData'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.oldData'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.oldData'
                                                 );
        }
        if ('cim:Quality61850.operatorBlocked' in object) {
            attributeEntries['filledEntries']['cim:Quality61850.operatorBlocked'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.operatorBlocked'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.operatorBlocked'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Quality61850.operatorBlocked'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.operatorBlocked'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.operatorBlocked'
                                                 );
        }
        if ('cim:Quality61850.oscillatory' in object) {
            attributeEntries['filledEntries']['cim:Quality61850.oscillatory'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.oscillatory'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.oscillatory'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Quality61850.oscillatory'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.oscillatory'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.oscillatory'
                                                 );
        }
        if ('cim:Quality61850.outOfRange' in object) {
            attributeEntries['filledEntries']['cim:Quality61850.outOfRange'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.outOfRange'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.outOfRange'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Quality61850.outOfRange'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.outOfRange'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.outOfRange'
                                                 );
        }
        if ('cim:Quality61850.overFlow' in object) {
            attributeEntries['filledEntries']['cim:Quality61850.overFlow'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.overFlow'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.overFlow'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Quality61850.overFlow'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.overFlow'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.overFlow'
                                                 );
        }
        if ('cim:Quality61850.source' in object) {
            attributeEntries['filledEntries']['cim:Quality61850.source'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.source'],
                                                   'cim:Source',
                                                   'cim:Quality61850.source'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Quality61850.source'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.source'],
                                                   'cim:Source',
                                                   'cim:Quality61850.source'
                                                 );
        }
        if ('cim:Quality61850.suspect' in object) {
            attributeEntries['filledEntries']['cim:Quality61850.suspect'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.suspect'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.suspect'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Quality61850.suspect'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.suspect'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.suspect'
                                                 );
        }
        if ('cim:Quality61850.test' in object) {
            attributeEntries['filledEntries']['cim:Quality61850.test'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.test'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.test'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Quality61850.test'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.test'],
                                                   'cim:Boolean',
                                                   'cim:Quality61850.test'
                                                 );
        }
        if ('cim:Quality61850.validity' in object) {
            attributeEntries['filledEntries']['cim:Quality61850.validity'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.validity'],
                                                   'cim:Validity',
                                                   'cim:Quality61850.validity'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Quality61850.validity'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Quality61850.validity'],
                                                   'cim:Validity',
                                                   'cim:Quality61850.validity'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.EQ, ],
						'badReference': [CGMESProfile.shortNames.EQ, ],
						'estimatorReplaced': [CGMESProfile.shortNames.EQ, ],
						'failure': [CGMESProfile.shortNames.EQ, ],
						'oldData': [CGMESProfile.shortNames.EQ, ],
						'operatorBlocked': [CGMESProfile.shortNames.EQ, ],
						'oscillatory': [CGMESProfile.shortNames.EQ, ],
						'outOfRange': [CGMESProfile.shortNames.EQ, ],
						'overFlow': [CGMESProfile.shortNames.EQ, ],
						'source': [CGMESProfile.shortNames.EQ, ],
						'suspect': [CGMESProfile.shortNames.EQ, ],
						'test': [CGMESProfile.shortNames.EQ, ],
						'validity': [CGMESProfile.shortNames.EQ, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Quality61850.badReference",
            "cim:Quality61850.estimatorReplaced",
            "cim:Quality61850.failure",
            "cim:Quality61850.oldData",
            "cim:Quality61850.operatorBlocked",
            "cim:Quality61850.oscillatory",
            "cim:Quality61850.outOfRange",
            "cim:Quality61850.overFlow",
            "cim:Quality61850.source",
            "cim:Quality61850.suspect",
            "cim:Quality61850.test",
            "cim:Quality61850.validity",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( BaseClass.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!Quality61850.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class Quality61850: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Quality61850.attributeHTML(object, cimmenu);
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
        "MeasurementValueQuality",
        ];
        return subClasses;
    }
};
export default Quality61850
