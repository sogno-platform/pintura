import templates from "../../templates/index.js"
import IdentifiedObject from "./IdentifiedObject.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class WindPitchContEmulIEC extends IdentifiedObject {

    static attributeHTML(object, cimmenu, classType="WindPitchContEmulIEC") {
        let attributeEntries = IdentifiedObject.attributeHTML(object, cimmenu, classType);
        if ('cim:WindPitchContEmulIEC.kdroop' in object) {
            attributeEntries['filledEntries']['cim:WindPitchContEmulIEC.kdroop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.kdroop'],
                                                   'cim:Simple_Float',
                                                   'cim:WindPitchContEmulIEC.kdroop'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPitchContEmulIEC.kdroop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.kdroop'],
                                                   'cim:Simple_Float',
                                                   'cim:WindPitchContEmulIEC.kdroop'
                                                 );
        }
        if ('cim:WindPitchContEmulIEC.kipce' in object) {
            attributeEntries['filledEntries']['cim:WindPitchContEmulIEC.kipce'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.kipce'],
                                                   'cim:Simple_Float',
                                                   'cim:WindPitchContEmulIEC.kipce'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPitchContEmulIEC.kipce'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.kipce'],
                                                   'cim:Simple_Float',
                                                   'cim:WindPitchContEmulIEC.kipce'
                                                 );
        }
        if ('cim:WindPitchContEmulIEC.komegaaero' in object) {
            attributeEntries['filledEntries']['cim:WindPitchContEmulIEC.komegaaero'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.komegaaero'],
                                                   'cim:PU',
                                                   'cim:WindPitchContEmulIEC.komegaaero'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPitchContEmulIEC.komegaaero'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.komegaaero'],
                                                   'cim:PU',
                                                   'cim:WindPitchContEmulIEC.komegaaero'
                                                 );
        }
        if ('cim:WindPitchContEmulIEC.kppce' in object) {
            attributeEntries['filledEntries']['cim:WindPitchContEmulIEC.kppce'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.kppce'],
                                                   'cim:Simple_Float',
                                                   'cim:WindPitchContEmulIEC.kppce'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPitchContEmulIEC.kppce'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.kppce'],
                                                   'cim:Simple_Float',
                                                   'cim:WindPitchContEmulIEC.kppce'
                                                 );
        }
        if ('cim:WindPitchContEmulIEC.omegaref' in object) {
            attributeEntries['filledEntries']['cim:WindPitchContEmulIEC.omegaref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.omegaref'],
                                                   'cim:PU',
                                                   'cim:WindPitchContEmulIEC.omegaref'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPitchContEmulIEC.omegaref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.omegaref'],
                                                   'cim:PU',
                                                   'cim:WindPitchContEmulIEC.omegaref'
                                                 );
        }
        if ('cim:WindPitchContEmulIEC.pimax' in object) {
            attributeEntries['filledEntries']['cim:WindPitchContEmulIEC.pimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.pimax'],
                                                   'cim:PU',
                                                   'cim:WindPitchContEmulIEC.pimax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPitchContEmulIEC.pimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.pimax'],
                                                   'cim:PU',
                                                   'cim:WindPitchContEmulIEC.pimax'
                                                 );
        }
        if ('cim:WindPitchContEmulIEC.pimin' in object) {
            attributeEntries['filledEntries']['cim:WindPitchContEmulIEC.pimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.pimin'],
                                                   'cim:PU',
                                                   'cim:WindPitchContEmulIEC.pimin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPitchContEmulIEC.pimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.pimin'],
                                                   'cim:PU',
                                                   'cim:WindPitchContEmulIEC.pimin'
                                                 );
        }
        if ('cim:WindPitchContEmulIEC.t1' in object) {
            attributeEntries['filledEntries']['cim:WindPitchContEmulIEC.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.t1'],
                                                   'cim:Seconds',
                                                   'cim:WindPitchContEmulIEC.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPitchContEmulIEC.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.t1'],
                                                   'cim:Seconds',
                                                   'cim:WindPitchContEmulIEC.t1'
                                                 );
        }
        if ('cim:WindPitchContEmulIEC.t2' in object) {
            attributeEntries['filledEntries']['cim:WindPitchContEmulIEC.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.t2'],
                                                   'cim:Seconds',
                                                   'cim:WindPitchContEmulIEC.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPitchContEmulIEC.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.t2'],
                                                   'cim:Seconds',
                                                   'cim:WindPitchContEmulIEC.t2'
                                                 );
        }
        if ('cim:WindPitchContEmulIEC.tpe' in object) {
            attributeEntries['filledEntries']['cim:WindPitchContEmulIEC.tpe'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.tpe'],
                                                   'cim:Seconds',
                                                   'cim:WindPitchContEmulIEC.tpe'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:WindPitchContEmulIEC.tpe'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['WindPitchContEmulIEC.tpe'],
                                                   'cim:Seconds',
                                                   'cim:WindPitchContEmulIEC.tpe'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'kdroop': [CGMESProfile.shortNames.DY, ],
						'kipce': [CGMESProfile.shortNames.DY, ],
						'komegaaero': [CGMESProfile.shortNames.DY, ],
						'kppce': [CGMESProfile.shortNames.DY, ],
						'omegaref': [CGMESProfile.shortNames.DY, ],
						'pimax': [CGMESProfile.shortNames.DY, ],
						'pimin': [CGMESProfile.shortNames.DY, ],
						't1': [CGMESProfile.shortNames.DY, ],
						't2': [CGMESProfile.shortNames.DY, ],
						'tpe': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:WindPitchContEmulIEC.kdroop",
            "cim:WindPitchContEmulIEC.kipce",
            "cim:WindPitchContEmulIEC.komegaaero",
            "cim:WindPitchContEmulIEC.kppce",
            "cim:WindPitchContEmulIEC.omegaref",
            "cim:WindPitchContEmulIEC.pimax",
            "cim:WindPitchContEmulIEC.pimin",
            "cim:WindPitchContEmulIEC.t1",
            "cim:WindPitchContEmulIEC.t2",
            "cim:WindPitchContEmulIEC.tpe",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( IdentifiedObject.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!WindPitchContEmulIEC.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class WindPitchContEmulIEC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = WindPitchContEmulIEC.attributeHTML(object, cimmenu);
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
export default WindPitchContEmulIEC
