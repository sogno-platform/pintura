import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"

class GovGAST4 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovGAST4") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovGAST4.bp' in object) {
            attributeEntries['filledEntries']['cim:GovGAST4.bp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.bp'],
                                                   'cim:PU',
                                                   'cim:GovGAST4.bp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST4.bp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.bp'],
                                                   'cim:PU',
                                                   'cim:GovGAST4.bp'
                                                 );
        }
        if ('cim:GovGAST4.tv' in object) {
            attributeEntries['filledEntries']['cim:GovGAST4.tv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.tv'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST4.tv'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST4.tv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.tv'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST4.tv'
                                                 );
        }
        if ('cim:GovGAST4.ta' in object) {
            attributeEntries['filledEntries']['cim:GovGAST4.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST4.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST4.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST4.ta'
                                                 );
        }
        if ('cim:GovGAST4.tc' in object) {
            attributeEntries['filledEntries']['cim:GovGAST4.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.tc'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST4.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST4.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.tc'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST4.tc'
                                                 );
        }
        if ('cim:GovGAST4.tcm' in object) {
            attributeEntries['filledEntries']['cim:GovGAST4.tcm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.tcm'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST4.tcm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST4.tcm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.tcm'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST4.tcm'
                                                 );
        }
        if ('cim:GovGAST4.ktm' in object) {
            attributeEntries['filledEntries']['cim:GovGAST4.ktm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.ktm'],
                                                   'cim:PU',
                                                   'cim:GovGAST4.ktm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST4.ktm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.ktm'],
                                                   'cim:PU',
                                                   'cim:GovGAST4.ktm'
                                                 );
        }
        if ('cim:GovGAST4.tm' in object) {
            attributeEntries['filledEntries']['cim:GovGAST4.tm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.tm'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST4.tm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST4.tm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.tm'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST4.tm'
                                                 );
        }
        if ('cim:GovGAST4.rymx' in object) {
            attributeEntries['filledEntries']['cim:GovGAST4.rymx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.rymx'],
                                                   'cim:PU',
                                                   'cim:GovGAST4.rymx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST4.rymx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.rymx'],
                                                   'cim:PU',
                                                   'cim:GovGAST4.rymx'
                                                 );
        }
        if ('cim:GovGAST4.rymn' in object) {
            attributeEntries['filledEntries']['cim:GovGAST4.rymn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.rymn'],
                                                   'cim:PU',
                                                   'cim:GovGAST4.rymn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST4.rymn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.rymn'],
                                                   'cim:PU',
                                                   'cim:GovGAST4.rymn'
                                                 );
        }
        if ('cim:GovGAST4.mxef' in object) {
            attributeEntries['filledEntries']['cim:GovGAST4.mxef'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.mxef'],
                                                   'cim:PU',
                                                   'cim:GovGAST4.mxef'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST4.mxef'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.mxef'],
                                                   'cim:PU',
                                                   'cim:GovGAST4.mxef'
                                                 );
        }
        if ('cim:GovGAST4.mnef' in object) {
            attributeEntries['filledEntries']['cim:GovGAST4.mnef'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.mnef'],
                                                   'cim:PU',
                                                   'cim:GovGAST4.mnef'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST4.mnef'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST4.mnef'],
                                                   'cim:PU',
                                                   'cim:GovGAST4.mnef'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovGAST4.bp",
            "cim:GovGAST4.tv",
            "cim:GovGAST4.ta",
            "cim:GovGAST4.tc",
            "cim:GovGAST4.tcm",
            "cim:GovGAST4.ktm",
            "cim:GovGAST4.tm",
            "cim:GovGAST4.rymx",
            "cim:GovGAST4.rymn",
            "cim:GovGAST4.mxef",
            "cim:GovGAST4.mnef",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( TurbineGovernorDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!GovGAST4.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovGAST4: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovGAST4.attributeHTML(object, cimmenu);
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
export default GovGAST4
