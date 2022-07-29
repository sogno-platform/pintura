import templates from "../../templates/index.js"
import PowerSystemStabilizerDynamics from "./PowerSystemStabilizerDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PssSB4 extends PowerSystemStabilizerDynamics {

    static attributeHTML(object, cimmenu, classType="PssSB4") {
        let attributeEntries = PowerSystemStabilizerDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:PssSB4.tt' in object) {
            attributeEntries['filledEntries']['cim:PssSB4.tt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.tt'],
                                                   'cim:Seconds',
                                                   'cim:PssSB4.tt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSB4.tt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.tt'],
                                                   'cim:Seconds',
                                                   'cim:PssSB4.tt'
                                                 );
        }
        if ('cim:PssSB4.kx' in object) {
            attributeEntries['filledEntries']['cim:PssSB4.kx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.kx'],
                                                   'cim:PU',
                                                   'cim:PssSB4.kx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSB4.kx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.kx'],
                                                   'cim:PU',
                                                   'cim:PssSB4.kx'
                                                 );
        }
        if ('cim:PssSB4.tx2' in object) {
            attributeEntries['filledEntries']['cim:PssSB4.tx2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.tx2'],
                                                   'cim:Seconds',
                                                   'cim:PssSB4.tx2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSB4.tx2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.tx2'],
                                                   'cim:Seconds',
                                                   'cim:PssSB4.tx2'
                                                 );
        }
        if ('cim:PssSB4.ta' in object) {
            attributeEntries['filledEntries']['cim:PssSB4.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.ta'],
                                                   'cim:Seconds',
                                                   'cim:PssSB4.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSB4.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.ta'],
                                                   'cim:Seconds',
                                                   'cim:PssSB4.ta'
                                                 );
        }
        if ('cim:PssSB4.tx1' in object) {
            attributeEntries['filledEntries']['cim:PssSB4.tx1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.tx1'],
                                                   'cim:Seconds',
                                                   'cim:PssSB4.tx1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSB4.tx1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.tx1'],
                                                   'cim:Seconds',
                                                   'cim:PssSB4.tx1'
                                                 );
        }
        if ('cim:PssSB4.tb' in object) {
            attributeEntries['filledEntries']['cim:PssSB4.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.tb'],
                                                   'cim:Seconds',
                                                   'cim:PssSB4.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSB4.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.tb'],
                                                   'cim:Seconds',
                                                   'cim:PssSB4.tb'
                                                 );
        }
        if ('cim:PssSB4.tc' in object) {
            attributeEntries['filledEntries']['cim:PssSB4.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.tc'],
                                                   'cim:Seconds',
                                                   'cim:PssSB4.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSB4.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.tc'],
                                                   'cim:Seconds',
                                                   'cim:PssSB4.tc'
                                                 );
        }
        if ('cim:PssSB4.td' in object) {
            attributeEntries['filledEntries']['cim:PssSB4.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.td'],
                                                   'cim:Seconds',
                                                   'cim:PssSB4.td'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSB4.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.td'],
                                                   'cim:Seconds',
                                                   'cim:PssSB4.td'
                                                 );
        }
        if ('cim:PssSB4.te' in object) {
            attributeEntries['filledEntries']['cim:PssSB4.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.te'],
                                                   'cim:Seconds',
                                                   'cim:PssSB4.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSB4.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.te'],
                                                   'cim:Seconds',
                                                   'cim:PssSB4.te'
                                                 );
        }
        if ('cim:PssSB4.vsmax' in object) {
            attributeEntries['filledEntries']['cim:PssSB4.vsmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.vsmax'],
                                                   'cim:PU',
                                                   'cim:PssSB4.vsmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSB4.vsmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.vsmax'],
                                                   'cim:PU',
                                                   'cim:PssSB4.vsmax'
                                                 );
        }
        if ('cim:PssSB4.vsmin' in object) {
            attributeEntries['filledEntries']['cim:PssSB4.vsmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.vsmin'],
                                                   'cim:PU',
                                                   'cim:PssSB4.vsmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSB4.vsmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSB4.vsmin'],
                                                   'cim:PU',
                                                   'cim:PssSB4.vsmin'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'tt': [CGMESProfile.shortNames.DY, ],
						'kx': [CGMESProfile.shortNames.DY, ],
						'tx2': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'tx1': [CGMESProfile.shortNames.DY, ],
						'tb': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						'td': [CGMESProfile.shortNames.DY, ],
						'te': [CGMESProfile.shortNames.DY, ],
						'vsmax': [CGMESProfile.shortNames.DY, ],
						'vsmin': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PssSB4.tt",
            "cim:PssSB4.kx",
            "cim:PssSB4.tx2",
            "cim:PssSB4.ta",
            "cim:PssSB4.tx1",
            "cim:PssSB4.tb",
            "cim:PssSB4.tc",
            "cim:PssSB4.td",
            "cim:PssSB4.te",
            "cim:PssSB4.vsmax",
            "cim:PssSB4.vsmin",
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
            if (!PssSB4.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PssSB4: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PssSB4.attributeHTML(object, cimmenu);
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
export default PssSB4
