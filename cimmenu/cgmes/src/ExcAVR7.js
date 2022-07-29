import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcAVR7 extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcAVR7") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcAVR7.k1' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.k1'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.k1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.k1'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.k1'
                                                 );
        }
        if ('cim:ExcAVR7.a1' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.a1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.a1'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.a1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.a1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.a1'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.a1'
                                                 );
        }
        if ('cim:ExcAVR7.a2' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.a2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.a2'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.a2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.a2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.a2'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.a2'
                                                 );
        }
        if ('cim:ExcAVR7.t1' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.t1'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR7.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.t1'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR7.t1'
                                                 );
        }
        if ('cim:ExcAVR7.t2' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.t2'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR7.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.t2'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR7.t2'
                                                 );
        }
        if ('cim:ExcAVR7.vmax1' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.vmax1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.vmax1'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.vmax1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.vmax1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.vmax1'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.vmax1'
                                                 );
        }
        if ('cim:ExcAVR7.vmin1' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.vmin1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.vmin1'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.vmin1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.vmin1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.vmin1'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.vmin1'
                                                 );
        }
        if ('cim:ExcAVR7.k3' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.k3'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.k3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.k3'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.k3'
                                                 );
        }
        if ('cim:ExcAVR7.a3' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.a3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.a3'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.a3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.a3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.a3'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.a3'
                                                 );
        }
        if ('cim:ExcAVR7.a4' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.a4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.a4'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.a4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.a4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.a4'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.a4'
                                                 );
        }
        if ('cim:ExcAVR7.t3' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.t3'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR7.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.t3'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR7.t3'
                                                 );
        }
        if ('cim:ExcAVR7.t4' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.t4'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR7.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.t4'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR7.t4'
                                                 );
        }
        if ('cim:ExcAVR7.vmax3' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.vmax3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.vmax3'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.vmax3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.vmax3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.vmax3'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.vmax3'
                                                 );
        }
        if ('cim:ExcAVR7.vmin3' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.vmin3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.vmin3'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.vmin3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.vmin3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.vmin3'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.vmin3'
                                                 );
        }
        if ('cim:ExcAVR7.k5' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.k5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.k5'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.k5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.k5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.k5'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.k5'
                                                 );
        }
        if ('cim:ExcAVR7.a5' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.a5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.a5'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.a5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.a5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.a5'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.a5'
                                                 );
        }
        if ('cim:ExcAVR7.a6' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.a6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.a6'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.a6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.a6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.a6'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.a6'
                                                 );
        }
        if ('cim:ExcAVR7.t5' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.t5'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR7.t5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.t5'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR7.t5'
                                                 );
        }
        if ('cim:ExcAVR7.t6' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.t6'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR7.t6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.t6'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR7.t6'
                                                 );
        }
        if ('cim:ExcAVR7.vmax5' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.vmax5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.vmax5'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.vmax5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.vmax5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.vmax5'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.vmax5'
                                                 );
        }
        if ('cim:ExcAVR7.vmin5' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR7.vmin5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.vmin5'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.vmin5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR7.vmin5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR7.vmin5'],
                                                   'cim:PU',
                                                   'cim:ExcAVR7.vmin5'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'k1': [CGMESProfile.shortNames.DY, ],
						'a1': [CGMESProfile.shortNames.DY, ],
						'a2': [CGMESProfile.shortNames.DY, ],
						't1': [CGMESProfile.shortNames.DY, ],
						't2': [CGMESProfile.shortNames.DY, ],
						'vmax1': [CGMESProfile.shortNames.DY, ],
						'vmin1': [CGMESProfile.shortNames.DY, ],
						'k3': [CGMESProfile.shortNames.DY, ],
						'a3': [CGMESProfile.shortNames.DY, ],
						'a4': [CGMESProfile.shortNames.DY, ],
						't3': [CGMESProfile.shortNames.DY, ],
						't4': [CGMESProfile.shortNames.DY, ],
						'vmax3': [CGMESProfile.shortNames.DY, ],
						'vmin3': [CGMESProfile.shortNames.DY, ],
						'k5': [CGMESProfile.shortNames.DY, ],
						'a5': [CGMESProfile.shortNames.DY, ],
						'a6': [CGMESProfile.shortNames.DY, ],
						't5': [CGMESProfile.shortNames.DY, ],
						't6': [CGMESProfile.shortNames.DY, ],
						'vmax5': [CGMESProfile.shortNames.DY, ],
						'vmin5': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcAVR7.k1",
            "cim:ExcAVR7.a1",
            "cim:ExcAVR7.a2",
            "cim:ExcAVR7.t1",
            "cim:ExcAVR7.t2",
            "cim:ExcAVR7.vmax1",
            "cim:ExcAVR7.vmin1",
            "cim:ExcAVR7.k3",
            "cim:ExcAVR7.a3",
            "cim:ExcAVR7.a4",
            "cim:ExcAVR7.t3",
            "cim:ExcAVR7.t4",
            "cim:ExcAVR7.vmax3",
            "cim:ExcAVR7.vmin3",
            "cim:ExcAVR7.k5",
            "cim:ExcAVR7.a5",
            "cim:ExcAVR7.a6",
            "cim:ExcAVR7.t5",
            "cim:ExcAVR7.t6",
            "cim:ExcAVR7.vmax5",
            "cim:ExcAVR7.vmin5",
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
            if (!ExcAVR7.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcAVR7: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcAVR7.attributeHTML(object, cimmenu);
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
export default ExcAVR7
