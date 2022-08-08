import templates from "../../templates/index.js"
import OverexcitationLimiterDynamics from "./OverexcitationLimiterDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class OverexcLimX1 extends OverexcitationLimiterDynamics {

    static attributeHTML(object, cimmenu, classType="OverexcLimX1") {
        let attributeEntries = OverexcitationLimiterDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:OverexcLimX1.efdrated' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX1.efdrated'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.efdrated'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX1.efdrated'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX1.efdrated'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.efdrated'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX1.efdrated'
                                                 );
        }
        if ('cim:OverexcLimX1.efd1' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX1.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.efd1'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX1.efd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX1.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.efd1'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX1.efd1'
                                                 );
        }
        if ('cim:OverexcLimX1.t1' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX1.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.t1'],
                                                   'cim:Seconds',
                                                   'cim:OverexcLimX1.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX1.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.t1'],
                                                   'cim:Seconds',
                                                   'cim:OverexcLimX1.t1'
                                                 );
        }
        if ('cim:OverexcLimX1.efd2' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX1.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.efd2'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX1.efd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX1.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.efd2'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX1.efd2'
                                                 );
        }
        if ('cim:OverexcLimX1.t2' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX1.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.t2'],
                                                   'cim:Seconds',
                                                   'cim:OverexcLimX1.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX1.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.t2'],
                                                   'cim:Seconds',
                                                   'cim:OverexcLimX1.t2'
                                                 );
        }
        if ('cim:OverexcLimX1.efd3' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX1.efd3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.efd3'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX1.efd3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX1.efd3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.efd3'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX1.efd3'
                                                 );
        }
        if ('cim:OverexcLimX1.t3' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX1.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.t3'],
                                                   'cim:Seconds',
                                                   'cim:OverexcLimX1.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX1.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.t3'],
                                                   'cim:Seconds',
                                                   'cim:OverexcLimX1.t3'
                                                 );
        }
        if ('cim:OverexcLimX1.efddes' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX1.efddes'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.efddes'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX1.efddes'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX1.efddes'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.efddes'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX1.efddes'
                                                 );
        }
        if ('cim:OverexcLimX1.kmx' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX1.kmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.kmx'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX1.kmx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX1.kmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.kmx'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX1.kmx'
                                                 );
        }
        if ('cim:OverexcLimX1.vlow' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX1.vlow'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.vlow'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX1.vlow'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX1.vlow'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX1.vlow'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX1.vlow'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'efdrated': [CGMESProfile.shortNames.DY, ],
						'efd1': [CGMESProfile.shortNames.DY, ],
						't1': [CGMESProfile.shortNames.DY, ],
						'efd2': [CGMESProfile.shortNames.DY, ],
						't2': [CGMESProfile.shortNames.DY, ],
						'efd3': [CGMESProfile.shortNames.DY, ],
						't3': [CGMESProfile.shortNames.DY, ],
						'efddes': [CGMESProfile.shortNames.DY, ],
						'kmx': [CGMESProfile.shortNames.DY, ],
						'vlow': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:OverexcLimX1.efdrated",
            "cim:OverexcLimX1.efd1",
            "cim:OverexcLimX1.t1",
            "cim:OverexcLimX1.efd2",
            "cim:OverexcLimX1.t2",
            "cim:OverexcLimX1.efd3",
            "cim:OverexcLimX1.t3",
            "cim:OverexcLimX1.efddes",
            "cim:OverexcLimX1.kmx",
            "cim:OverexcLimX1.vlow",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( OverexcitationLimiterDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!OverexcLimX1.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class OverexcLimX1: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = OverexcLimX1.attributeHTML(object, cimmenu);
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
export default OverexcLimX1
