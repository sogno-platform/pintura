import templates from "../../templates/index.js"
import VoltageAdjusterDynamics from "./VoltageAdjusterDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class VAdjIEEE extends VoltageAdjusterDynamics {

    static attributeHTML(object, cimmenu, classType="VAdjIEEE") {
        let attributeEntries = VoltageAdjusterDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:VAdjIEEE.vadjf' in object) {
            attributeEntries['filledEntries']['cim:VAdjIEEE.vadjf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VAdjIEEE.vadjf'],
                                                   'cim:Simple_Float',
                                                   'cim:VAdjIEEE.vadjf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VAdjIEEE.vadjf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VAdjIEEE.vadjf'],
                                                   'cim:Simple_Float',
                                                   'cim:VAdjIEEE.vadjf'
                                                 );
        }
        if ('cim:VAdjIEEE.adjslew' in object) {
            attributeEntries['filledEntries']['cim:VAdjIEEE.adjslew'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VAdjIEEE.adjslew'],
                                                   'cim:Simple_Float',
                                                   'cim:VAdjIEEE.adjslew'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VAdjIEEE.adjslew'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VAdjIEEE.adjslew'],
                                                   'cim:Simple_Float',
                                                   'cim:VAdjIEEE.adjslew'
                                                 );
        }
        if ('cim:VAdjIEEE.vadjmax' in object) {
            attributeEntries['filledEntries']['cim:VAdjIEEE.vadjmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VAdjIEEE.vadjmax'],
                                                   'cim:PU',
                                                   'cim:VAdjIEEE.vadjmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VAdjIEEE.vadjmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VAdjIEEE.vadjmax'],
                                                   'cim:PU',
                                                   'cim:VAdjIEEE.vadjmax'
                                                 );
        }
        if ('cim:VAdjIEEE.vadjmin' in object) {
            attributeEntries['filledEntries']['cim:VAdjIEEE.vadjmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VAdjIEEE.vadjmin'],
                                                   'cim:PU',
                                                   'cim:VAdjIEEE.vadjmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VAdjIEEE.vadjmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VAdjIEEE.vadjmin'],
                                                   'cim:PU',
                                                   'cim:VAdjIEEE.vadjmin'
                                                 );
        }
        if ('cim:VAdjIEEE.taon' in object) {
            attributeEntries['filledEntries']['cim:VAdjIEEE.taon'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VAdjIEEE.taon'],
                                                   'cim:Seconds',
                                                   'cim:VAdjIEEE.taon'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VAdjIEEE.taon'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VAdjIEEE.taon'],
                                                   'cim:Seconds',
                                                   'cim:VAdjIEEE.taon'
                                                 );
        }
        if ('cim:VAdjIEEE.taoff' in object) {
            attributeEntries['filledEntries']['cim:VAdjIEEE.taoff'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VAdjIEEE.taoff'],
                                                   'cim:Seconds',
                                                   'cim:VAdjIEEE.taoff'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:VAdjIEEE.taoff'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['VAdjIEEE.taoff'],
                                                   'cim:Seconds',
                                                   'cim:VAdjIEEE.taoff'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'vadjf': [CGMESProfile.shortNames.DY, ],
						'adjslew': [CGMESProfile.shortNames.DY, ],
						'vadjmax': [CGMESProfile.shortNames.DY, ],
						'vadjmin': [CGMESProfile.shortNames.DY, ],
						'taon': [CGMESProfile.shortNames.DY, ],
						'taoff': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:VAdjIEEE.vadjf",
            "cim:VAdjIEEE.adjslew",
            "cim:VAdjIEEE.vadjmax",
            "cim:VAdjIEEE.vadjmin",
            "cim:VAdjIEEE.taon",
            "cim:VAdjIEEE.taoff",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( VoltageAdjusterDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!VAdjIEEE.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class VAdjIEEE: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = VAdjIEEE.attributeHTML(object, cimmenu);
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
export default VAdjIEEE
