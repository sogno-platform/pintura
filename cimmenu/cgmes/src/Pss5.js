import templates from "../../templates/index.js"
import PowerSystemStabilizerDynamics from "./PowerSystemStabilizerDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Pss5 extends PowerSystemStabilizerDynamics {

    static attributeHTML(object, cimmenu, classType="Pss5") {
        let attributeEntries = PowerSystemStabilizerDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:Pss5.kpe' in object) {
            attributeEntries['filledEntries']['cim:Pss5.kpe'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.kpe'],
                                                   'cim:Simple_Float',
                                                   'cim:Pss5.kpe'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss5.kpe'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.kpe'],
                                                   'cim:Simple_Float',
                                                   'cim:Pss5.kpe'
                                                 );
        }
        if ('cim:Pss5.kf' in object) {
            attributeEntries['filledEntries']['cim:Pss5.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.kf'],
                                                   'cim:Simple_Float',
                                                   'cim:Pss5.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss5.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.kf'],
                                                   'cim:Simple_Float',
                                                   'cim:Pss5.kf'
                                                 );
        }
        if ('cim:Pss5.isfreq' in object) {
            attributeEntries['filledEntries']['cim:Pss5.isfreq'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.isfreq'],
                                                   'cim:Boolean',
                                                   'cim:Pss5.isfreq'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss5.isfreq'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.isfreq'],
                                                   'cim:Boolean',
                                                   'cim:Pss5.isfreq'
                                                 );
        }
        if ('cim:Pss5.kpss' in object) {
            attributeEntries['filledEntries']['cim:Pss5.kpss'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.kpss'],
                                                   'cim:Simple_Float',
                                                   'cim:Pss5.kpss'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss5.kpss'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.kpss'],
                                                   'cim:Simple_Float',
                                                   'cim:Pss5.kpss'
                                                 );
        }
        if ('cim:Pss5.ctw2' in object) {
            attributeEntries['filledEntries']['cim:Pss5.ctw2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.ctw2'],
                                                   'cim:Boolean',
                                                   'cim:Pss5.ctw2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss5.ctw2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.ctw2'],
                                                   'cim:Boolean',
                                                   'cim:Pss5.ctw2'
                                                 );
        }
        if ('cim:Pss5.tw1' in object) {
            attributeEntries['filledEntries']['cim:Pss5.tw1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.tw1'],
                                                   'cim:Seconds',
                                                   'cim:Pss5.tw1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss5.tw1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.tw1'],
                                                   'cim:Seconds',
                                                   'cim:Pss5.tw1'
                                                 );
        }
        if ('cim:Pss5.tw2' in object) {
            attributeEntries['filledEntries']['cim:Pss5.tw2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.tw2'],
                                                   'cim:Seconds',
                                                   'cim:Pss5.tw2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss5.tw2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.tw2'],
                                                   'cim:Seconds',
                                                   'cim:Pss5.tw2'
                                                 );
        }
        if ('cim:Pss5.tl1' in object) {
            attributeEntries['filledEntries']['cim:Pss5.tl1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.tl1'],
                                                   'cim:Seconds',
                                                   'cim:Pss5.tl1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss5.tl1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.tl1'],
                                                   'cim:Seconds',
                                                   'cim:Pss5.tl1'
                                                 );
        }
        if ('cim:Pss5.tl2' in object) {
            attributeEntries['filledEntries']['cim:Pss5.tl2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.tl2'],
                                                   'cim:Seconds',
                                                   'cim:Pss5.tl2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss5.tl2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.tl2'],
                                                   'cim:Seconds',
                                                   'cim:Pss5.tl2'
                                                 );
        }
        if ('cim:Pss5.tl3' in object) {
            attributeEntries['filledEntries']['cim:Pss5.tl3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.tl3'],
                                                   'cim:Seconds',
                                                   'cim:Pss5.tl3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss5.tl3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.tl3'],
                                                   'cim:Seconds',
                                                   'cim:Pss5.tl3'
                                                 );
        }
        if ('cim:Pss5.tl4' in object) {
            attributeEntries['filledEntries']['cim:Pss5.tl4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.tl4'],
                                                   'cim:Seconds',
                                                   'cim:Pss5.tl4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss5.tl4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.tl4'],
                                                   'cim:Seconds',
                                                   'cim:Pss5.tl4'
                                                 );
        }
        if ('cim:Pss5.vsmn' in object) {
            attributeEntries['filledEntries']['cim:Pss5.vsmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.vsmn'],
                                                   'cim:PU',
                                                   'cim:Pss5.vsmn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss5.vsmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.vsmn'],
                                                   'cim:PU',
                                                   'cim:Pss5.vsmn'
                                                 );
        }
        if ('cim:Pss5.vsmx' in object) {
            attributeEntries['filledEntries']['cim:Pss5.vsmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.vsmx'],
                                                   'cim:PU',
                                                   'cim:Pss5.vsmx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss5.vsmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.vsmx'],
                                                   'cim:PU',
                                                   'cim:Pss5.vsmx'
                                                 );
        }
        if ('cim:Pss5.tpe' in object) {
            attributeEntries['filledEntries']['cim:Pss5.tpe'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.tpe'],
                                                   'cim:Seconds',
                                                   'cim:Pss5.tpe'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss5.tpe'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.tpe'],
                                                   'cim:Seconds',
                                                   'cim:Pss5.tpe'
                                                 );
        }
        if ('cim:Pss5.pmm' in object) {
            attributeEntries['filledEntries']['cim:Pss5.pmm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.pmm'],
                                                   'cim:PU',
                                                   'cim:Pss5.pmm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss5.pmm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.pmm'],
                                                   'cim:PU',
                                                   'cim:Pss5.pmm'
                                                 );
        }
        if ('cim:Pss5.deadband' in object) {
            attributeEntries['filledEntries']['cim:Pss5.deadband'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.deadband'],
                                                   'cim:PU',
                                                   'cim:Pss5.deadband'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss5.deadband'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.deadband'],
                                                   'cim:PU',
                                                   'cim:Pss5.deadband'
                                                 );
        }
        if ('cim:Pss5.vadat' in object) {
            attributeEntries['filledEntries']['cim:Pss5.vadat'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.vadat'],
                                                   'cim:Boolean',
                                                   'cim:Pss5.vadat'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss5.vadat'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss5.vadat'],
                                                   'cim:Boolean',
                                                   'cim:Pss5.vadat'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'kpe': [CGMESProfile.shortNames.DY, ],
						'kf': [CGMESProfile.shortNames.DY, ],
						'isfreq': [CGMESProfile.shortNames.DY, ],
						'kpss': [CGMESProfile.shortNames.DY, ],
						'ctw2': [CGMESProfile.shortNames.DY, ],
						'tw1': [CGMESProfile.shortNames.DY, ],
						'tw2': [CGMESProfile.shortNames.DY, ],
						'tl1': [CGMESProfile.shortNames.DY, ],
						'tl2': [CGMESProfile.shortNames.DY, ],
						'tl3': [CGMESProfile.shortNames.DY, ],
						'tl4': [CGMESProfile.shortNames.DY, ],
						'vsmn': [CGMESProfile.shortNames.DY, ],
						'vsmx': [CGMESProfile.shortNames.DY, ],
						'tpe': [CGMESProfile.shortNames.DY, ],
						'pmm': [CGMESProfile.shortNames.DY, ],
						'deadband': [CGMESProfile.shortNames.DY, ],
						'vadat': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Pss5.kpe",
            "cim:Pss5.kf",
            "cim:Pss5.isfreq",
            "cim:Pss5.kpss",
            "cim:Pss5.ctw2",
            "cim:Pss5.tw1",
            "cim:Pss5.tw2",
            "cim:Pss5.tl1",
            "cim:Pss5.tl2",
            "cim:Pss5.tl3",
            "cim:Pss5.tl4",
            "cim:Pss5.vsmn",
            "cim:Pss5.vsmx",
            "cim:Pss5.tpe",
            "cim:Pss5.pmm",
            "cim:Pss5.deadband",
            "cim:Pss5.vadat",
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
            if (!Pss5.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class Pss5: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Pss5.attributeHTML(object, cimmenu);
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
export default Pss5
