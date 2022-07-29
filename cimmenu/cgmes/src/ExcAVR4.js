import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcAVR4 extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcAVR4") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcAVR4.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR4.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.ka'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR4.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR4.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.ka'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR4.ka'
                                                 );
        }
        if ('cim:ExcAVR4.vrmn' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR4.vrmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.vrmn'],
                                                   'cim:PU',
                                                   'cim:ExcAVR4.vrmn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR4.vrmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.vrmn'],
                                                   'cim:PU',
                                                   'cim:ExcAVR4.vrmn'
                                                 );
        }
        if ('cim:ExcAVR4.vrmx' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR4.vrmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.vrmx'],
                                                   'cim:PU',
                                                   'cim:ExcAVR4.vrmx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR4.vrmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.vrmx'],
                                                   'cim:PU',
                                                   'cim:ExcAVR4.vrmx'
                                                 );
        }
        if ('cim:ExcAVR4.t1' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR4.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.t1'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR4.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR4.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.t1'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR4.t1'
                                                 );
        }
        if ('cim:ExcAVR4.t2' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR4.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.t2'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR4.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR4.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.t2'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR4.t2'
                                                 );
        }
        if ('cim:ExcAVR4.t3' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR4.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.t3'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR4.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR4.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.t3'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR4.t3'
                                                 );
        }
        if ('cim:ExcAVR4.t4' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR4.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.t4'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR4.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR4.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.t4'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR4.t4'
                                                 );
        }
        if ('cim:ExcAVR4.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR4.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.ke'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR4.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR4.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.ke'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR4.ke'
                                                 );
        }
        if ('cim:ExcAVR4.vfmx' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR4.vfmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.vfmx'],
                                                   'cim:PU',
                                                   'cim:ExcAVR4.vfmx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR4.vfmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.vfmx'],
                                                   'cim:PU',
                                                   'cim:ExcAVR4.vfmx'
                                                 );
        }
        if ('cim:ExcAVR4.vfmn' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR4.vfmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.vfmn'],
                                                   'cim:PU',
                                                   'cim:ExcAVR4.vfmn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR4.vfmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.vfmn'],
                                                   'cim:PU',
                                                   'cim:ExcAVR4.vfmn'
                                                 );
        }
        if ('cim:ExcAVR4.kif' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR4.kif'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.kif'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR4.kif'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR4.kif'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.kif'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR4.kif'
                                                 );
        }
        if ('cim:ExcAVR4.tif' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR4.tif'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.tif'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR4.tif'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR4.tif'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.tif'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR4.tif'
                                                 );
        }
        if ('cim:ExcAVR4.t1if' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR4.t1if'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.t1if'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR4.t1if'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR4.t1if'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.t1if'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR4.t1if'
                                                 );
        }
        if ('cim:ExcAVR4.imul' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR4.imul'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.imul'],
                                                   'cim:Boolean',
                                                   'cim:ExcAVR4.imul'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR4.imul'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR4.imul'],
                                                   'cim:Boolean',
                                                   'cim:ExcAVR4.imul'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						'vrmn': [CGMESProfile.shortNames.DY, ],
						'vrmx': [CGMESProfile.shortNames.DY, ],
						't1': [CGMESProfile.shortNames.DY, ],
						't2': [CGMESProfile.shortNames.DY, ],
						't3': [CGMESProfile.shortNames.DY, ],
						't4': [CGMESProfile.shortNames.DY, ],
						'ke': [CGMESProfile.shortNames.DY, ],
						'vfmx': [CGMESProfile.shortNames.DY, ],
						'vfmn': [CGMESProfile.shortNames.DY, ],
						'kif': [CGMESProfile.shortNames.DY, ],
						'tif': [CGMESProfile.shortNames.DY, ],
						't1if': [CGMESProfile.shortNames.DY, ],
						'imul': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcAVR4.ka",
            "cim:ExcAVR4.vrmn",
            "cim:ExcAVR4.vrmx",
            "cim:ExcAVR4.t1",
            "cim:ExcAVR4.t2",
            "cim:ExcAVR4.t3",
            "cim:ExcAVR4.t4",
            "cim:ExcAVR4.ke",
            "cim:ExcAVR4.vfmx",
            "cim:ExcAVR4.vfmn",
            "cim:ExcAVR4.kif",
            "cim:ExcAVR4.tif",
            "cim:ExcAVR4.t1if",
            "cim:ExcAVR4.imul",
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
            if (!ExcAVR4.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcAVR4: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcAVR4.attributeHTML(object, cimmenu);
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
export default ExcAVR4
