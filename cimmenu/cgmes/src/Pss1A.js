import templates from "../../templates/index.js"
import PowerSystemStabilizerDynamics from "./PowerSystemStabilizerDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Pss1A extends PowerSystemStabilizerDynamics {

    static attributeHTML(object, cimmenu, classType="Pss1A") {
        let attributeEntries = PowerSystemStabilizerDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:Pss1A.inputSignalType' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.inputSignalType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.inputSignalType'],
                                                   'cim:InputSignalKind',
                                                   'cim:Pss1A.inputSignalType'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.inputSignalType'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.inputSignalType'],
                                                   'cim:InputSignalKind',
                                                   'cim:Pss1A.inputSignalType'
                                                 );
        }
        if ('cim:Pss1A.a1' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.a1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.a1'],
                                                   'cim:PU',
                                                   'cim:Pss1A.a1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.a1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.a1'],
                                                   'cim:PU',
                                                   'cim:Pss1A.a1'
                                                 );
        }
        if ('cim:Pss1A.a2' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.a2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.a2'],
                                                   'cim:PU',
                                                   'cim:Pss1A.a2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.a2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.a2'],
                                                   'cim:PU',
                                                   'cim:Pss1A.a2'
                                                 );
        }
        if ('cim:Pss1A.t1' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.t1'],
                                                   'cim:Seconds',
                                                   'cim:Pss1A.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.t1'],
                                                   'cim:Seconds',
                                                   'cim:Pss1A.t1'
                                                 );
        }
        if ('cim:Pss1A.t2' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.t2'],
                                                   'cim:Seconds',
                                                   'cim:Pss1A.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.t2'],
                                                   'cim:Seconds',
                                                   'cim:Pss1A.t2'
                                                 );
        }
        if ('cim:Pss1A.t3' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.t3'],
                                                   'cim:Seconds',
                                                   'cim:Pss1A.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.t3'],
                                                   'cim:Seconds',
                                                   'cim:Pss1A.t3'
                                                 );
        }
        if ('cim:Pss1A.t4' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.t4'],
                                                   'cim:Seconds',
                                                   'cim:Pss1A.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.t4'],
                                                   'cim:Seconds',
                                                   'cim:Pss1A.t4'
                                                 );
        }
        if ('cim:Pss1A.t5' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.t5'],
                                                   'cim:Seconds',
                                                   'cim:Pss1A.t5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.t5'],
                                                   'cim:Seconds',
                                                   'cim:Pss1A.t5'
                                                 );
        }
        if ('cim:Pss1A.t6' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.t6'],
                                                   'cim:Seconds',
                                                   'cim:Pss1A.t6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.t6'],
                                                   'cim:Seconds',
                                                   'cim:Pss1A.t6'
                                                 );
        }
        if ('cim:Pss1A.ks' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.ks'],
                                                   'cim:PU',
                                                   'cim:Pss1A.ks'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.ks'],
                                                   'cim:PU',
                                                   'cim:Pss1A.ks'
                                                 );
        }
        if ('cim:Pss1A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.vrmax'],
                                                   'cim:PU',
                                                   'cim:Pss1A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.vrmax'],
                                                   'cim:PU',
                                                   'cim:Pss1A.vrmax'
                                                 );
        }
        if ('cim:Pss1A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.vrmin'],
                                                   'cim:PU',
                                                   'cim:Pss1A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.vrmin'],
                                                   'cim:PU',
                                                   'cim:Pss1A.vrmin'
                                                 );
        }
        if ('cim:Pss1A.vcu' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.vcu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.vcu'],
                                                   'cim:PU',
                                                   'cim:Pss1A.vcu'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.vcu'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.vcu'],
                                                   'cim:PU',
                                                   'cim:Pss1A.vcu'
                                                 );
        }
        if ('cim:Pss1A.vcl' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.vcl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.vcl'],
                                                   'cim:PU',
                                                   'cim:Pss1A.vcl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.vcl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.vcl'],
                                                   'cim:PU',
                                                   'cim:Pss1A.vcl'
                                                 );
        }
        if ('cim:Pss1A.a3' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.a3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.a3'],
                                                   'cim:PU',
                                                   'cim:Pss1A.a3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.a3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.a3'],
                                                   'cim:PU',
                                                   'cim:Pss1A.a3'
                                                 );
        }
        if ('cim:Pss1A.a4' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.a4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.a4'],
                                                   'cim:PU',
                                                   'cim:Pss1A.a4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.a4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.a4'],
                                                   'cim:PU',
                                                   'cim:Pss1A.a4'
                                                 );
        }
        if ('cim:Pss1A.a5' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.a5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.a5'],
                                                   'cim:PU',
                                                   'cim:Pss1A.a5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.a5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.a5'],
                                                   'cim:PU',
                                                   'cim:Pss1A.a5'
                                                 );
        }
        if ('cim:Pss1A.a6' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.a6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.a6'],
                                                   'cim:PU',
                                                   'cim:Pss1A.a6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.a6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.a6'],
                                                   'cim:PU',
                                                   'cim:Pss1A.a6'
                                                 );
        }
        if ('cim:Pss1A.a7' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.a7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.a7'],
                                                   'cim:PU',
                                                   'cim:Pss1A.a7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.a7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.a7'],
                                                   'cim:PU',
                                                   'cim:Pss1A.a7'
                                                 );
        }
        if ('cim:Pss1A.a8' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.a8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.a8'],
                                                   'cim:PU',
                                                   'cim:Pss1A.a8'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.a8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.a8'],
                                                   'cim:PU',
                                                   'cim:Pss1A.a8'
                                                 );
        }
        if ('cim:Pss1A.kd' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.kd'],
                                                   'cim:Boolean',
                                                   'cim:Pss1A.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.kd'],
                                                   'cim:Boolean',
                                                   'cim:Pss1A.kd'
                                                 );
        }
        if ('cim:Pss1A.tdelay' in object) {
            attributeEntries['filledEntries']['cim:Pss1A.tdelay'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.tdelay'],
                                                   'cim:Seconds',
                                                   'cim:Pss1A.tdelay'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss1A.tdelay'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss1A.tdelay'],
                                                   'cim:Seconds',
                                                   'cim:Pss1A.tdelay'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'inputSignalType': [CGMESProfile.shortNames.DY, ],
						'a1': [CGMESProfile.shortNames.DY, ],
						'a2': [CGMESProfile.shortNames.DY, ],
						't1': [CGMESProfile.shortNames.DY, ],
						't2': [CGMESProfile.shortNames.DY, ],
						't3': [CGMESProfile.shortNames.DY, ],
						't4': [CGMESProfile.shortNames.DY, ],
						't5': [CGMESProfile.shortNames.DY, ],
						't6': [CGMESProfile.shortNames.DY, ],
						'ks': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						'vcu': [CGMESProfile.shortNames.DY, ],
						'vcl': [CGMESProfile.shortNames.DY, ],
						'a3': [CGMESProfile.shortNames.DY, ],
						'a4': [CGMESProfile.shortNames.DY, ],
						'a5': [CGMESProfile.shortNames.DY, ],
						'a6': [CGMESProfile.shortNames.DY, ],
						'a7': [CGMESProfile.shortNames.DY, ],
						'a8': [CGMESProfile.shortNames.DY, ],
						'kd': [CGMESProfile.shortNames.DY, ],
						'tdelay': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Pss1A.inputSignalType",
            "cim:Pss1A.a1",
            "cim:Pss1A.a2",
            "cim:Pss1A.t1",
            "cim:Pss1A.t2",
            "cim:Pss1A.t3",
            "cim:Pss1A.t4",
            "cim:Pss1A.t5",
            "cim:Pss1A.t6",
            "cim:Pss1A.ks",
            "cim:Pss1A.vrmax",
            "cim:Pss1A.vrmin",
            "cim:Pss1A.vcu",
            "cim:Pss1A.vcl",
            "cim:Pss1A.a3",
            "cim:Pss1A.a4",
            "cim:Pss1A.a5",
            "cim:Pss1A.a6",
            "cim:Pss1A.a7",
            "cim:Pss1A.a8",
            "cim:Pss1A.kd",
            "cim:Pss1A.tdelay",
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
            if (!Pss1A.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class Pss1A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Pss1A.attributeHTML(object, cimmenu);
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
export default Pss1A
