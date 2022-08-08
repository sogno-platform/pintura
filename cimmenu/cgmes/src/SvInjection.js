import templates from "../../templates/index.js"
import BaseClass from "./BaseClass.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class SvInjection extends BaseClass {

    static attributeHTML(object, cimmenu, classType="SvInjection") {
        let attributeEntries = BaseClass.attributeHTML(object, cimmenu, classType);
        if ('cim:SvInjection.pInjection' in object) {
            attributeEntries['filledEntries']['cim:SvInjection.pInjection'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvInjection.pInjection'],
                                                   'cim:ActivePower',
                                                   'cim:SvInjection.pInjection'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SvInjection.pInjection'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvInjection.pInjection'],
                                                   'cim:ActivePower',
                                                   'cim:SvInjection.pInjection'
                                                 );
        }
        if ('cim:SvInjection.qInjection' in object) {
            attributeEntries['filledEntries']['cim:SvInjection.qInjection'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvInjection.qInjection'],
                                                   'cim:ReactivePower',
                                                   'cim:SvInjection.qInjection'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SvInjection.qInjection'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvInjection.qInjection'],
                                                   'cim:ReactivePower',
                                                   'cim:SvInjection.qInjection'
                                                 );
        }
        if ('cim:SvInjection.TopologicalNode' in object) {
            attributeEntries['filledEntries']['cim:SvInjection.TopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvInjection.TopologicalNode'],
                                                   'cim:TopologicalNode',
                                                   'cim:SvInjection.TopologicalNode'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:SvInjection.TopologicalNode'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['SvInjection.TopologicalNode'],
                                                   'cim:TopologicalNode',
                                                   'cim:SvInjection.TopologicalNode'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.SV, ],
						'pInjection': [CGMESProfile.shortNames.SV, ],
						'qInjection': [CGMESProfile.shortNames.SV, ],
						'TopologicalNode': [CGMESProfile.shortNames.SV, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:SvInjection.pInjection",
            "cim:SvInjection.qInjection",
            "cim:SvInjection.TopologicalNode",
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
            if (!SvInjection.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class SvInjection: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = SvInjection.attributeHTML(object, cimmenu);
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
export default SvInjection
