import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcAVR2 extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcAVR2") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcAVR2.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR2.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.ka'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR2.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR2.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.ka'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR2.ka'
                                                 );
        }
        if ('cim:ExcAVR2.vrmn' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR2.vrmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.vrmn'],
                                                   'cim:PU',
                                                   'cim:ExcAVR2.vrmn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR2.vrmn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.vrmn'],
                                                   'cim:PU',
                                                   'cim:ExcAVR2.vrmn'
                                                 );
        }
        if ('cim:ExcAVR2.vrmx' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR2.vrmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.vrmx'],
                                                   'cim:PU',
                                                   'cim:ExcAVR2.vrmx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR2.vrmx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.vrmx'],
                                                   'cim:PU',
                                                   'cim:ExcAVR2.vrmx'
                                                 );
        }
        if ('cim:ExcAVR2.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR2.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR2.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR2.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR2.ta'
                                                 );
        }
        if ('cim:ExcAVR2.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR2.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR2.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR2.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR2.tb'
                                                 );
        }
        if ('cim:ExcAVR2.te' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR2.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR2.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR2.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR2.te'
                                                 );
        }
        if ('cim:ExcAVR2.e1' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR2.e1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.e1'],
                                                   'cim:PU',
                                                   'cim:ExcAVR2.e1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR2.e1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.e1'],
                                                   'cim:PU',
                                                   'cim:ExcAVR2.e1'
                                                 );
        }
        if ('cim:ExcAVR2.se1' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR2.se1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.se1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR2.se1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR2.se1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.se1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR2.se1'
                                                 );
        }
        if ('cim:ExcAVR2.e2' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR2.e2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.e2'],
                                                   'cim:PU',
                                                   'cim:ExcAVR2.e2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR2.e2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.e2'],
                                                   'cim:PU',
                                                   'cim:ExcAVR2.e2'
                                                 );
        }
        if ('cim:ExcAVR2.se2' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR2.se2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.se2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR2.se2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR2.se2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.se2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR2.se2'
                                                 );
        }
        if ('cim:ExcAVR2.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR2.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.kf'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR2.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR2.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.kf'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAVR2.kf'
                                                 );
        }
        if ('cim:ExcAVR2.tf1' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR2.tf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.tf1'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR2.tf1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR2.tf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.tf1'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR2.tf1'
                                                 );
        }
        if ('cim:ExcAVR2.tf2' in object) {
            attributeEntries['filledEntries']['cim:ExcAVR2.tf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.tf2'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR2.tf2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAVR2.tf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAVR2.tf2'],
                                                   'cim:Seconds',
                                                   'cim:ExcAVR2.tf2'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						'vrmn': [CGMESProfile.shortNames.DY, ],
						'vrmx': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'tb': [CGMESProfile.shortNames.DY, ],
						'te': [CGMESProfile.shortNames.DY, ],
						'e1': [CGMESProfile.shortNames.DY, ],
						'se1': [CGMESProfile.shortNames.DY, ],
						'e2': [CGMESProfile.shortNames.DY, ],
						'se2': [CGMESProfile.shortNames.DY, ],
						'kf': [CGMESProfile.shortNames.DY, ],
						'tf1': [CGMESProfile.shortNames.DY, ],
						'tf2': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcAVR2.ka",
            "cim:ExcAVR2.vrmn",
            "cim:ExcAVR2.vrmx",
            "cim:ExcAVR2.ta",
            "cim:ExcAVR2.tb",
            "cim:ExcAVR2.te",
            "cim:ExcAVR2.e1",
            "cim:ExcAVR2.se1",
            "cim:ExcAVR2.e2",
            "cim:ExcAVR2.se2",
            "cim:ExcAVR2.kf",
            "cim:ExcAVR2.tf1",
            "cim:ExcAVR2.tf2",
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
            if (!ExcAVR2.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcAVR2: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcAVR2.attributeHTML(object, cimmenu);
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
export default ExcAVR2
