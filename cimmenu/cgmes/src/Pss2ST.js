import templates from "../../templates/index.js"
import PowerSystemStabilizerDynamics from "./PowerSystemStabilizerDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Pss2ST extends PowerSystemStabilizerDynamics {

    static attributeHTML(object, cimmenu, classType="Pss2ST") {
        let attributeEntries = PowerSystemStabilizerDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:Pss2ST.inputSignal1Type' in object) {
            attributeEntries['filledEntries']['cim:Pss2ST.inputSignal1Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.inputSignal1Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:Pss2ST.inputSignal1Type'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2ST.inputSignal1Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.inputSignal1Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:Pss2ST.inputSignal1Type'
                                                 );
        }
        if ('cim:Pss2ST.inputSignal2Type' in object) {
            attributeEntries['filledEntries']['cim:Pss2ST.inputSignal2Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.inputSignal2Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:Pss2ST.inputSignal2Type'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2ST.inputSignal2Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.inputSignal2Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:Pss2ST.inputSignal2Type'
                                                 );
        }
        if ('cim:Pss2ST.k1' in object) {
            attributeEntries['filledEntries']['cim:Pss2ST.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.k1'],
                                                   'cim:PU',
                                                   'cim:Pss2ST.k1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2ST.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.k1'],
                                                   'cim:PU',
                                                   'cim:Pss2ST.k1'
                                                 );
        }
        if ('cim:Pss2ST.k2' in object) {
            attributeEntries['filledEntries']['cim:Pss2ST.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.k2'],
                                                   'cim:PU',
                                                   'cim:Pss2ST.k2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2ST.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.k2'],
                                                   'cim:PU',
                                                   'cim:Pss2ST.k2'
                                                 );
        }
        if ('cim:Pss2ST.t1' in object) {
            attributeEntries['filledEntries']['cim:Pss2ST.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t1'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2ST.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t1'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t1'
                                                 );
        }
        if ('cim:Pss2ST.t2' in object) {
            attributeEntries['filledEntries']['cim:Pss2ST.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t2'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2ST.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t2'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t2'
                                                 );
        }
        if ('cim:Pss2ST.t3' in object) {
            attributeEntries['filledEntries']['cim:Pss2ST.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t3'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2ST.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t3'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t3'
                                                 );
        }
        if ('cim:Pss2ST.t4' in object) {
            attributeEntries['filledEntries']['cim:Pss2ST.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t4'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2ST.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t4'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t4'
                                                 );
        }
        if ('cim:Pss2ST.t5' in object) {
            attributeEntries['filledEntries']['cim:Pss2ST.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t5'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2ST.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t5'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t5'
                                                 );
        }
        if ('cim:Pss2ST.t6' in object) {
            attributeEntries['filledEntries']['cim:Pss2ST.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t6'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2ST.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t6'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t6'
                                                 );
        }
        if ('cim:Pss2ST.t7' in object) {
            attributeEntries['filledEntries']['cim:Pss2ST.t7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t7'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2ST.t7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t7'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t7'
                                                 );
        }
        if ('cim:Pss2ST.t8' in object) {
            attributeEntries['filledEntries']['cim:Pss2ST.t8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t8'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t8'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2ST.t8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t8'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t8'
                                                 );
        }
        if ('cim:Pss2ST.t9' in object) {
            attributeEntries['filledEntries']['cim:Pss2ST.t9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t9'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t9'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2ST.t9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t9'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t9'
                                                 );
        }
        if ('cim:Pss2ST.t10' in object) {
            attributeEntries['filledEntries']['cim:Pss2ST.t10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t10'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t10'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2ST.t10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.t10'],
                                                   'cim:Seconds',
                                                   'cim:Pss2ST.t10'
                                                 );
        }
        if ('cim:Pss2ST.lsmax' in object) {
            attributeEntries['filledEntries']['cim:Pss2ST.lsmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.lsmax'],
                                                   'cim:PU',
                                                   'cim:Pss2ST.lsmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2ST.lsmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.lsmax'],
                                                   'cim:PU',
                                                   'cim:Pss2ST.lsmax'
                                                 );
        }
        if ('cim:Pss2ST.lsmin' in object) {
            attributeEntries['filledEntries']['cim:Pss2ST.lsmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.lsmin'],
                                                   'cim:PU',
                                                   'cim:Pss2ST.lsmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2ST.lsmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.lsmin'],
                                                   'cim:PU',
                                                   'cim:Pss2ST.lsmin'
                                                 );
        }
        if ('cim:Pss2ST.vcu' in object) {
            attributeEntries['filledEntries']['cim:Pss2ST.vcu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.vcu'],
                                                   'cim:PU',
                                                   'cim:Pss2ST.vcu'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2ST.vcu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.vcu'],
                                                   'cim:PU',
                                                   'cim:Pss2ST.vcu'
                                                 );
        }
        if ('cim:Pss2ST.vcl' in object) {
            attributeEntries['filledEntries']['cim:Pss2ST.vcl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.vcl'],
                                                   'cim:PU',
                                                   'cim:Pss2ST.vcl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2ST.vcl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2ST.vcl'],
                                                   'cim:PU',
                                                   'cim:Pss2ST.vcl'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'inputSignal1Type': [CGMESProfile.shortNames.DY, ],
						'inputSignal2Type': [CGMESProfile.shortNames.DY, ],
						'k1': [CGMESProfile.shortNames.DY, ],
						'k2': [CGMESProfile.shortNames.DY, ],
						't1': [CGMESProfile.shortNames.DY, ],
						't2': [CGMESProfile.shortNames.DY, ],
						't3': [CGMESProfile.shortNames.DY, ],
						't4': [CGMESProfile.shortNames.DY, ],
						't5': [CGMESProfile.shortNames.DY, ],
						't6': [CGMESProfile.shortNames.DY, ],
						't7': [CGMESProfile.shortNames.DY, ],
						't8': [CGMESProfile.shortNames.DY, ],
						't9': [CGMESProfile.shortNames.DY, ],
						't10': [CGMESProfile.shortNames.DY, ],
						'lsmax': [CGMESProfile.shortNames.DY, ],
						'lsmin': [CGMESProfile.shortNames.DY, ],
						'vcu': [CGMESProfile.shortNames.DY, ],
						'vcl': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Pss2ST.inputSignal1Type",
            "cim:Pss2ST.inputSignal2Type",
            "cim:Pss2ST.k1",
            "cim:Pss2ST.k2",
            "cim:Pss2ST.t1",
            "cim:Pss2ST.t2",
            "cim:Pss2ST.t3",
            "cim:Pss2ST.t4",
            "cim:Pss2ST.t5",
            "cim:Pss2ST.t6",
            "cim:Pss2ST.t7",
            "cim:Pss2ST.t8",
            "cim:Pss2ST.t9",
            "cim:Pss2ST.t10",
            "cim:Pss2ST.lsmax",
            "cim:Pss2ST.lsmin",
            "cim:Pss2ST.vcu",
            "cim:Pss2ST.vcl",
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
            if (!Pss2ST.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class Pss2ST: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Pss2ST.attributeHTML(object, cimmenu);
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
export default Pss2ST
