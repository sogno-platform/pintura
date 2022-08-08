import templates from "../../templates/index.js"
import PowerSystemStabilizerDynamics from "./PowerSystemStabilizerDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PssPTIST1 extends PowerSystemStabilizerDynamics {

    static attributeHTML(object, cimmenu, classType="PssPTIST1") {
        let attributeEntries = PowerSystemStabilizerDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:PssPTIST1.m' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST1.m'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.m'],
                                                   'cim:PU',
                                                   'cim:PssPTIST1.m'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST1.m'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.m'],
                                                   'cim:PU',
                                                   'cim:PssPTIST1.m'
                                                 );
        }
        if ('cim:PssPTIST1.tf' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST1.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.tf'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST1.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST1.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.tf'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST1.tf'
                                                 );
        }
        if ('cim:PssPTIST1.tp' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST1.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.tp'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST1.tp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST1.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.tp'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST1.tp'
                                                 );
        }
        if ('cim:PssPTIST1.t1' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST1.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.t1'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST1.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST1.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.t1'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST1.t1'
                                                 );
        }
        if ('cim:PssPTIST1.t2' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST1.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.t2'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST1.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST1.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.t2'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST1.t2'
                                                 );
        }
        if ('cim:PssPTIST1.t3' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST1.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.t3'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST1.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST1.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.t3'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST1.t3'
                                                 );
        }
        if ('cim:PssPTIST1.t4' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST1.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.t4'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST1.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST1.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.t4'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST1.t4'
                                                 );
        }
        if ('cim:PssPTIST1.k' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST1.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.k'],
                                                   'cim:PU',
                                                   'cim:PssPTIST1.k'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST1.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.k'],
                                                   'cim:PU',
                                                   'cim:PssPTIST1.k'
                                                 );
        }
        if ('cim:PssPTIST1.dtf' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST1.dtf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.dtf'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST1.dtf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST1.dtf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.dtf'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST1.dtf'
                                                 );
        }
        if ('cim:PssPTIST1.dtc' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST1.dtc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.dtc'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST1.dtc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST1.dtc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.dtc'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST1.dtc'
                                                 );
        }
        if ('cim:PssPTIST1.dtp' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST1.dtp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.dtp'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST1.dtp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST1.dtp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST1.dtp'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST1.dtp'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'm': [CGMESProfile.shortNames.DY, ],
						'tf': [CGMESProfile.shortNames.DY, ],
						'tp': [CGMESProfile.shortNames.DY, ],
						't1': [CGMESProfile.shortNames.DY, ],
						't2': [CGMESProfile.shortNames.DY, ],
						't3': [CGMESProfile.shortNames.DY, ],
						't4': [CGMESProfile.shortNames.DY, ],
						'k': [CGMESProfile.shortNames.DY, ],
						'dtf': [CGMESProfile.shortNames.DY, ],
						'dtc': [CGMESProfile.shortNames.DY, ],
						'dtp': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PssPTIST1.m",
            "cim:PssPTIST1.tf",
            "cim:PssPTIST1.tp",
            "cim:PssPTIST1.t1",
            "cim:PssPTIST1.t2",
            "cim:PssPTIST1.t3",
            "cim:PssPTIST1.t4",
            "cim:PssPTIST1.k",
            "cim:PssPTIST1.dtf",
            "cim:PssPTIST1.dtc",
            "cim:PssPTIST1.dtp",
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
            if (!PssPTIST1.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class PssPTIST1: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PssPTIST1.attributeHTML(object, cimmenu);
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
export default PssPTIST1
