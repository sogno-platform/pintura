import templates from "../../templates/index.js"
import PowerSystemStabilizerDynamics from "./PowerSystemStabilizerDynamics.js"
import common from "../../src/common.js"

class PssELIN2 extends PowerSystemStabilizerDynamics {

    static attributeHTML(object, cimmenu, classType="PssELIN2") {
        let attributeEntries = PowerSystemStabilizerDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:PssELIN2.ts1' in object) {
            attributeEntries['filledEntries']['cim:PssELIN2.ts1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.ts1'],
                                                   'cim:Seconds',
                                                   'cim:PssELIN2.ts1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssELIN2.ts1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.ts1'],
                                                   'cim:Seconds',
                                                   'cim:PssELIN2.ts1'
                                                 );
        }
        if ('cim:PssELIN2.ts2' in object) {
            attributeEntries['filledEntries']['cim:PssELIN2.ts2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.ts2'],
                                                   'cim:Seconds',
                                                   'cim:PssELIN2.ts2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssELIN2.ts2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.ts2'],
                                                   'cim:Seconds',
                                                   'cim:PssELIN2.ts2'
                                                 );
        }
        if ('cim:PssELIN2.ts3' in object) {
            attributeEntries['filledEntries']['cim:PssELIN2.ts3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.ts3'],
                                                   'cim:Seconds',
                                                   'cim:PssELIN2.ts3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssELIN2.ts3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.ts3'],
                                                   'cim:Seconds',
                                                   'cim:PssELIN2.ts3'
                                                 );
        }
        if ('cim:PssELIN2.ts4' in object) {
            attributeEntries['filledEntries']['cim:PssELIN2.ts4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.ts4'],
                                                   'cim:Seconds',
                                                   'cim:PssELIN2.ts4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssELIN2.ts4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.ts4'],
                                                   'cim:Seconds',
                                                   'cim:PssELIN2.ts4'
                                                 );
        }
        if ('cim:PssELIN2.ts5' in object) {
            attributeEntries['filledEntries']['cim:PssELIN2.ts5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.ts5'],
                                                   'cim:Seconds',
                                                   'cim:PssELIN2.ts5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssELIN2.ts5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.ts5'],
                                                   'cim:Seconds',
                                                   'cim:PssELIN2.ts5'
                                                 );
        }
        if ('cim:PssELIN2.ts6' in object) {
            attributeEntries['filledEntries']['cim:PssELIN2.ts6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.ts6'],
                                                   'cim:Seconds',
                                                   'cim:PssELIN2.ts6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssELIN2.ts6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.ts6'],
                                                   'cim:Seconds',
                                                   'cim:PssELIN2.ts6'
                                                 );
        }
        if ('cim:PssELIN2.ks1' in object) {
            attributeEntries['filledEntries']['cim:PssELIN2.ks1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.ks1'],
                                                   'cim:PU',
                                                   'cim:PssELIN2.ks1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssELIN2.ks1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.ks1'],
                                                   'cim:PU',
                                                   'cim:PssELIN2.ks1'
                                                 );
        }
        if ('cim:PssELIN2.ks2' in object) {
            attributeEntries['filledEntries']['cim:PssELIN2.ks2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.ks2'],
                                                   'cim:PU',
                                                   'cim:PssELIN2.ks2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssELIN2.ks2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.ks2'],
                                                   'cim:PU',
                                                   'cim:PssELIN2.ks2'
                                                 );
        }
        if ('cim:PssELIN2.ppss' in object) {
            attributeEntries['filledEntries']['cim:PssELIN2.ppss'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.ppss'],
                                                   'cim:PU',
                                                   'cim:PssELIN2.ppss'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssELIN2.ppss'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.ppss'],
                                                   'cim:PU',
                                                   'cim:PssELIN2.ppss'
                                                 );
        }
        if ('cim:PssELIN2.apss' in object) {
            attributeEntries['filledEntries']['cim:PssELIN2.apss'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.apss'],
                                                   'cim:PU',
                                                   'cim:PssELIN2.apss'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssELIN2.apss'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.apss'],
                                                   'cim:PU',
                                                   'cim:PssELIN2.apss'
                                                 );
        }
        if ('cim:PssELIN2.psslim' in object) {
            attributeEntries['filledEntries']['cim:PssELIN2.psslim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.psslim'],
                                                   'cim:PU',
                                                   'cim:PssELIN2.psslim'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssELIN2.psslim'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssELIN2.psslim'],
                                                   'cim:PU',
                                                   'cim:PssELIN2.psslim'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PssELIN2.ts1",
            "cim:PssELIN2.ts2",
            "cim:PssELIN2.ts3",
            "cim:PssELIN2.ts4",
            "cim:PssELIN2.ts5",
            "cim:PssELIN2.ts6",
            "cim:PssELIN2.ks1",
            "cim:PssELIN2.ks2",
            "cim:PssELIN2.ppss",
            "cim:PssELIN2.apss",
            "cim:PssELIN2.psslim",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( PowerSystemStabilizerDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!PssELIN2.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PssELIN2: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PssELIN2.attributeHTML(object, cimmenu);
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
export default PssELIN2
