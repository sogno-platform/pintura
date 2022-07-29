import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcIEEEST5B extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcIEEEST5B") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcIEEEST5B.kr' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST5B.kr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.kr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST5B.kr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST5B.kr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.kr'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST5B.kr'
                                                 );
        }
        if ('cim:ExcIEEEST5B.t1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST5B.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.t1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST5B.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.t1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.t1'
                                                 );
        }
        if ('cim:ExcIEEEST5B.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST5B.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST5B.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST5B.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.kc'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST5B.kc'
                                                 );
        }
        if ('cim:ExcIEEEST5B.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST5B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST5B.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST5B.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST5B.vrmax'
                                                 );
        }
        if ('cim:ExcIEEEST5B.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST5B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST5B.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST5B.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcIEEEST5B.vrmin'
                                                 );
        }
        if ('cim:ExcIEEEST5B.tc1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST5B.tc1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tc1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tc1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST5B.tc1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tc1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tc1'
                                                 );
        }
        if ('cim:ExcIEEEST5B.tb1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST5B.tb1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tb1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tb1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST5B.tb1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tb1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tb1'
                                                 );
        }
        if ('cim:ExcIEEEST5B.tc2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST5B.tc2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tc2'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tc2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST5B.tc2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tc2'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tc2'
                                                 );
        }
        if ('cim:ExcIEEEST5B.tb2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST5B.tb2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tb2'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tb2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST5B.tb2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tb2'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tb2'
                                                 );
        }
        if ('cim:ExcIEEEST5B.toc1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST5B.toc1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.toc1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.toc1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST5B.toc1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.toc1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.toc1'
                                                 );
        }
        if ('cim:ExcIEEEST5B.tob1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST5B.tob1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tob1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tob1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST5B.tob1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tob1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tob1'
                                                 );
        }
        if ('cim:ExcIEEEST5B.toc2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST5B.toc2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.toc2'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.toc2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST5B.toc2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.toc2'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.toc2'
                                                 );
        }
        if ('cim:ExcIEEEST5B.tob2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST5B.tob2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tob2'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tob2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST5B.tob2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tob2'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tob2'
                                                 );
        }
        if ('cim:ExcIEEEST5B.tuc1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST5B.tuc1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tuc1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tuc1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST5B.tuc1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tuc1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tuc1'
                                                 );
        }
        if ('cim:ExcIEEEST5B.tub1' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST5B.tub1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tub1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tub1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST5B.tub1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tub1'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tub1'
                                                 );
        }
        if ('cim:ExcIEEEST5B.tuc2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST5B.tuc2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tuc2'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tuc2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST5B.tuc2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tuc2'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tuc2'
                                                 );
        }
        if ('cim:ExcIEEEST5B.tub2' in object) {
            attributeEntries['filledEntries']['cim:ExcIEEEST5B.tub2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tub2'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tub2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcIEEEST5B.tub2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcIEEEST5B.tub2'],
                                                   'cim:Seconds',
                                                   'cim:ExcIEEEST5B.tub2'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'kr': [CGMESProfile.shortNames.DY, ],
						't1': [CGMESProfile.shortNames.DY, ],
						'kc': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						'tc1': [CGMESProfile.shortNames.DY, ],
						'tb1': [CGMESProfile.shortNames.DY, ],
						'tc2': [CGMESProfile.shortNames.DY, ],
						'tb2': [CGMESProfile.shortNames.DY, ],
						'toc1': [CGMESProfile.shortNames.DY, ],
						'tob1': [CGMESProfile.shortNames.DY, ],
						'toc2': [CGMESProfile.shortNames.DY, ],
						'tob2': [CGMESProfile.shortNames.DY, ],
						'tuc1': [CGMESProfile.shortNames.DY, ],
						'tub1': [CGMESProfile.shortNames.DY, ],
						'tuc2': [CGMESProfile.shortNames.DY, ],
						'tub2': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcIEEEST5B.kr",
            "cim:ExcIEEEST5B.t1",
            "cim:ExcIEEEST5B.kc",
            "cim:ExcIEEEST5B.vrmax",
            "cim:ExcIEEEST5B.vrmin",
            "cim:ExcIEEEST5B.tc1",
            "cim:ExcIEEEST5B.tb1",
            "cim:ExcIEEEST5B.tc2",
            "cim:ExcIEEEST5B.tb2",
            "cim:ExcIEEEST5B.toc1",
            "cim:ExcIEEEST5B.tob1",
            "cim:ExcIEEEST5B.toc2",
            "cim:ExcIEEEST5B.tob2",
            "cim:ExcIEEEST5B.tuc1",
            "cim:ExcIEEEST5B.tub1",
            "cim:ExcIEEEST5B.tuc2",
            "cim:ExcIEEEST5B.tub2",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( ExcitationSystemDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!ExcIEEEST5B.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcIEEEST5B: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcIEEEST5B.attributeHTML(object, cimmenu);
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
export default ExcIEEEST5B
