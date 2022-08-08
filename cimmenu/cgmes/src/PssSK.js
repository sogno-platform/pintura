import templates from "../../templates/index.js"
import PowerSystemStabilizerDynamics from "./PowerSystemStabilizerDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PssSK extends PowerSystemStabilizerDynamics {

    static attributeHTML(object, cimmenu, classType="PssSK") {
        let attributeEntries = PowerSystemStabilizerDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:PssSK.k1' in object) {
            attributeEntries['filledEntries']['cim:PssSK.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.k1'],
                                                   'cim:PU',
                                                   'cim:PssSK.k1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSK.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.k1'],
                                                   'cim:PU',
                                                   'cim:PssSK.k1'
                                                 );
        }
        if ('cim:PssSK.k2' in object) {
            attributeEntries['filledEntries']['cim:PssSK.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.k2'],
                                                   'cim:PU',
                                                   'cim:PssSK.k2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSK.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.k2'],
                                                   'cim:PU',
                                                   'cim:PssSK.k2'
                                                 );
        }
        if ('cim:PssSK.k3' in object) {
            attributeEntries['filledEntries']['cim:PssSK.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.k3'],
                                                   'cim:PU',
                                                   'cim:PssSK.k3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSK.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.k3'],
                                                   'cim:PU',
                                                   'cim:PssSK.k3'
                                                 );
        }
        if ('cim:PssSK.t1' in object) {
            attributeEntries['filledEntries']['cim:PssSK.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.t1'],
                                                   'cim:Seconds',
                                                   'cim:PssSK.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSK.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.t1'],
                                                   'cim:Seconds',
                                                   'cim:PssSK.t1'
                                                 );
        }
        if ('cim:PssSK.t2' in object) {
            attributeEntries['filledEntries']['cim:PssSK.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.t2'],
                                                   'cim:Seconds',
                                                   'cim:PssSK.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSK.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.t2'],
                                                   'cim:Seconds',
                                                   'cim:PssSK.t2'
                                                 );
        }
        if ('cim:PssSK.t3' in object) {
            attributeEntries['filledEntries']['cim:PssSK.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.t3'],
                                                   'cim:Seconds',
                                                   'cim:PssSK.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSK.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.t3'],
                                                   'cim:Seconds',
                                                   'cim:PssSK.t3'
                                                 );
        }
        if ('cim:PssSK.t4' in object) {
            attributeEntries['filledEntries']['cim:PssSK.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.t4'],
                                                   'cim:Seconds',
                                                   'cim:PssSK.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSK.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.t4'],
                                                   'cim:Seconds',
                                                   'cim:PssSK.t4'
                                                 );
        }
        if ('cim:PssSK.t5' in object) {
            attributeEntries['filledEntries']['cim:PssSK.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.t5'],
                                                   'cim:Seconds',
                                                   'cim:PssSK.t5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSK.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.t5'],
                                                   'cim:Seconds',
                                                   'cim:PssSK.t5'
                                                 );
        }
        if ('cim:PssSK.t6' in object) {
            attributeEntries['filledEntries']['cim:PssSK.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.t6'],
                                                   'cim:Seconds',
                                                   'cim:PssSK.t6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSK.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.t6'],
                                                   'cim:Seconds',
                                                   'cim:PssSK.t6'
                                                 );
        }
        if ('cim:PssSK.vsmax' in object) {
            attributeEntries['filledEntries']['cim:PssSK.vsmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.vsmax'],
                                                   'cim:PU',
                                                   'cim:PssSK.vsmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSK.vsmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.vsmax'],
                                                   'cim:PU',
                                                   'cim:PssSK.vsmax'
                                                 );
        }
        if ('cim:PssSK.vsmin' in object) {
            attributeEntries['filledEntries']['cim:PssSK.vsmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.vsmin'],
                                                   'cim:PU',
                                                   'cim:PssSK.vsmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssSK.vsmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssSK.vsmin'],
                                                   'cim:PU',
                                                   'cim:PssSK.vsmin'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'k1': [CGMESProfile.shortNames.DY, ],
						'k2': [CGMESProfile.shortNames.DY, ],
						'k3': [CGMESProfile.shortNames.DY, ],
						't1': [CGMESProfile.shortNames.DY, ],
						't2': [CGMESProfile.shortNames.DY, ],
						't3': [CGMESProfile.shortNames.DY, ],
						't4': [CGMESProfile.shortNames.DY, ],
						't5': [CGMESProfile.shortNames.DY, ],
						't6': [CGMESProfile.shortNames.DY, ],
						'vsmax': [CGMESProfile.shortNames.DY, ],
						'vsmin': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PssSK.k1",
            "cim:PssSK.k2",
            "cim:PssSK.k3",
            "cim:PssSK.t1",
            "cim:PssSK.t2",
            "cim:PssSK.t3",
            "cim:PssSK.t4",
            "cim:PssSK.t5",
            "cim:PssSK.t6",
            "cim:PssSK.vsmax",
            "cim:PssSK.vsmin",
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
            if (!PssSK.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class PssSK: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PssSK.attributeHTML(object, cimmenu);
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
export default PssSK
