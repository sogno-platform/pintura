import templates from "../../templates/index.js"
import OverexcitationLimiterDynamics from "./OverexcitationLimiterDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class OverexcLimX2 extends OverexcitationLimiterDynamics {

    static attributeHTML(object, cimmenu, classType="OverexcLimX2") {
        let attributeEntries = OverexcitationLimiterDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:OverexcLimX2.m' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX2.m'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.m'],
                                                   'cim:Boolean',
                                                   'cim:OverexcLimX2.m'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX2.m'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.m'],
                                                   'cim:Boolean',
                                                   'cim:OverexcLimX2.m'
                                                 );
        }
        if ('cim:OverexcLimX2.efdrated' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX2.efdrated'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.efdrated'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX2.efdrated'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX2.efdrated'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.efdrated'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX2.efdrated'
                                                 );
        }
        if ('cim:OverexcLimX2.efd1' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX2.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.efd1'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX2.efd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX2.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.efd1'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX2.efd1'
                                                 );
        }
        if ('cim:OverexcLimX2.t1' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX2.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.t1'],
                                                   'cim:Seconds',
                                                   'cim:OverexcLimX2.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX2.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.t1'],
                                                   'cim:Seconds',
                                                   'cim:OverexcLimX2.t1'
                                                 );
        }
        if ('cim:OverexcLimX2.efd2' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX2.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.efd2'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX2.efd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX2.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.efd2'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX2.efd2'
                                                 );
        }
        if ('cim:OverexcLimX2.t2' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX2.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.t2'],
                                                   'cim:Seconds',
                                                   'cim:OverexcLimX2.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX2.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.t2'],
                                                   'cim:Seconds',
                                                   'cim:OverexcLimX2.t2'
                                                 );
        }
        if ('cim:OverexcLimX2.efd3' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX2.efd3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.efd3'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX2.efd3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX2.efd3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.efd3'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX2.efd3'
                                                 );
        }
        if ('cim:OverexcLimX2.t3' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX2.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.t3'],
                                                   'cim:Seconds',
                                                   'cim:OverexcLimX2.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX2.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.t3'],
                                                   'cim:Seconds',
                                                   'cim:OverexcLimX2.t3'
                                                 );
        }
        if ('cim:OverexcLimX2.efddes' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX2.efddes'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.efddes'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX2.efddes'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX2.efddes'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.efddes'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX2.efddes'
                                                 );
        }
        if ('cim:OverexcLimX2.kmx' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX2.kmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.kmx'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX2.kmx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX2.kmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.kmx'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX2.kmx'
                                                 );
        }
        if ('cim:OverexcLimX2.vlow' in object) {
            attributeEntries['filledEntries']['cim:OverexcLimX2.vlow'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.vlow'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX2.vlow'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:OverexcLimX2.vlow'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['OverexcLimX2.vlow'],
                                                   'cim:PU',
                                                   'cim:OverexcLimX2.vlow'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'm': [CGMESProfile.shortNames.DY, ],
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
            "cim:OverexcLimX2.m",
            "cim:OverexcLimX2.efdrated",
            "cim:OverexcLimX2.efd1",
            "cim:OverexcLimX2.t1",
            "cim:OverexcLimX2.efd2",
            "cim:OverexcLimX2.t2",
            "cim:OverexcLimX2.efd3",
            "cim:OverexcLimX2.t3",
            "cim:OverexcLimX2.efddes",
            "cim:OverexcLimX2.kmx",
            "cim:OverexcLimX2.vlow",
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
            if (!OverexcLimX2.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class OverexcLimX2: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = OverexcLimX2.attributeHTML(object, cimmenu);
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
export default OverexcLimX2
