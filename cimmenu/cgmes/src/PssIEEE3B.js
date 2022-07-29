import templates from "../../templates/index.js"
import PowerSystemStabilizerDynamics from "./PowerSystemStabilizerDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PssIEEE3B extends PowerSystemStabilizerDynamics {

    static attributeHTML(object, cimmenu, classType="PssIEEE3B") {
        let attributeEntries = PowerSystemStabilizerDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:PssIEEE3B.inputSignal1Type' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE3B.inputSignal1Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.inputSignal1Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:PssIEEE3B.inputSignal1Type'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE3B.inputSignal1Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.inputSignal1Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:PssIEEE3B.inputSignal1Type'
                                                 );
        }
        if ('cim:PssIEEE3B.inputSignal2Type' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE3B.inputSignal2Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.inputSignal2Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:PssIEEE3B.inputSignal2Type'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE3B.inputSignal2Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.inputSignal2Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:PssIEEE3B.inputSignal2Type'
                                                 );
        }
        if ('cim:PssIEEE3B.t1' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE3B.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.t1'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE3B.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE3B.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.t1'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE3B.t1'
                                                 );
        }
        if ('cim:PssIEEE3B.t2' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE3B.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.t2'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE3B.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE3B.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.t2'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE3B.t2'
                                                 );
        }
        if ('cim:PssIEEE3B.tw1' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE3B.tw1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.tw1'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE3B.tw1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE3B.tw1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.tw1'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE3B.tw1'
                                                 );
        }
        if ('cim:PssIEEE3B.tw2' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE3B.tw2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.tw2'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE3B.tw2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE3B.tw2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.tw2'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE3B.tw2'
                                                 );
        }
        if ('cim:PssIEEE3B.tw3' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE3B.tw3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.tw3'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE3B.tw3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE3B.tw3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.tw3'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE3B.tw3'
                                                 );
        }
        if ('cim:PssIEEE3B.ks1' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE3B.ks1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.ks1'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.ks1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE3B.ks1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.ks1'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.ks1'
                                                 );
        }
        if ('cim:PssIEEE3B.ks2' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE3B.ks2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.ks2'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.ks2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE3B.ks2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.ks2'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.ks2'
                                                 );
        }
        if ('cim:PssIEEE3B.a1' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE3B.a1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.a1'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.a1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE3B.a1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.a1'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.a1'
                                                 );
        }
        if ('cim:PssIEEE3B.a2' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE3B.a2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.a2'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.a2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE3B.a2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.a2'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.a2'
                                                 );
        }
        if ('cim:PssIEEE3B.a3' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE3B.a3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.a3'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.a3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE3B.a3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.a3'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.a3'
                                                 );
        }
        if ('cim:PssIEEE3B.a4' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE3B.a4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.a4'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.a4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE3B.a4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.a4'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.a4'
                                                 );
        }
        if ('cim:PssIEEE3B.a5' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE3B.a5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.a5'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.a5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE3B.a5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.a5'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.a5'
                                                 );
        }
        if ('cim:PssIEEE3B.a6' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE3B.a6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.a6'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.a6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE3B.a6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.a6'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.a6'
                                                 );
        }
        if ('cim:PssIEEE3B.a7' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE3B.a7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.a7'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.a7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE3B.a7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.a7'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.a7'
                                                 );
        }
        if ('cim:PssIEEE3B.a8' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE3B.a8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.a8'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.a8'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE3B.a8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.a8'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.a8'
                                                 );
        }
        if ('cim:PssIEEE3B.vstmax' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE3B.vstmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.vstmax'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.vstmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE3B.vstmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.vstmax'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.vstmax'
                                                 );
        }
        if ('cim:PssIEEE3B.vstmin' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE3B.vstmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.vstmin'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.vstmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE3B.vstmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE3B.vstmin'],
                                                   'cim:PU',
                                                   'cim:PssIEEE3B.vstmin'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'inputSignal1Type': [CGMESProfile.shortNames.DY, ],
						'inputSignal2Type': [CGMESProfile.shortNames.DY, ],
						't1': [CGMESProfile.shortNames.DY, ],
						't2': [CGMESProfile.shortNames.DY, ],
						'tw1': [CGMESProfile.shortNames.DY, ],
						'tw2': [CGMESProfile.shortNames.DY, ],
						'tw3': [CGMESProfile.shortNames.DY, ],
						'ks1': [CGMESProfile.shortNames.DY, ],
						'ks2': [CGMESProfile.shortNames.DY, ],
						'a1': [CGMESProfile.shortNames.DY, ],
						'a2': [CGMESProfile.shortNames.DY, ],
						'a3': [CGMESProfile.shortNames.DY, ],
						'a4': [CGMESProfile.shortNames.DY, ],
						'a5': [CGMESProfile.shortNames.DY, ],
						'a6': [CGMESProfile.shortNames.DY, ],
						'a7': [CGMESProfile.shortNames.DY, ],
						'a8': [CGMESProfile.shortNames.DY, ],
						'vstmax': [CGMESProfile.shortNames.DY, ],
						'vstmin': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PssIEEE3B.inputSignal1Type",
            "cim:PssIEEE3B.inputSignal2Type",
            "cim:PssIEEE3B.t1",
            "cim:PssIEEE3B.t2",
            "cim:PssIEEE3B.tw1",
            "cim:PssIEEE3B.tw2",
            "cim:PssIEEE3B.tw3",
            "cim:PssIEEE3B.ks1",
            "cim:PssIEEE3B.ks2",
            "cim:PssIEEE3B.a1",
            "cim:PssIEEE3B.a2",
            "cim:PssIEEE3B.a3",
            "cim:PssIEEE3B.a4",
            "cim:PssIEEE3B.a5",
            "cim:PssIEEE3B.a6",
            "cim:PssIEEE3B.a7",
            "cim:PssIEEE3B.a8",
            "cim:PssIEEE3B.vstmax",
            "cim:PssIEEE3B.vstmin",
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
            if (!PssIEEE3B.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PssIEEE3B: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PssIEEE3B.attributeHTML(object, cimmenu);
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
export default PssIEEE3B
