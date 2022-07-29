import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcAC5A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcAC5A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcAC5A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcAC5A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcAC5A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC5A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcAC5A.ka'
                                                 );
        }
        if ('cim:ExcAC5A.ks' in object) {
            attributeEntries['filledEntries']['cim:ExcAC5A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.ks'],
                                                   'cim:PU',
                                                   'cim:ExcAC5A.ks'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC5A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.ks'],
                                                   'cim:PU',
                                                   'cim:ExcAC5A.ks'
                                                 );
        }
        if ('cim:ExcAC5A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcAC5A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC5A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC5A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC5A.tb'
                                                 );
        }
        if ('cim:ExcAC5A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcAC5A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC5A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC5A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC5A.tc'
                                                 );
        }
        if ('cim:ExcAC5A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcAC5A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC5A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC5A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC5A.ta'
                                                 );
        }
        if ('cim:ExcAC5A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcAC5A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcAC5A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC5A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcAC5A.vrmax'
                                                 );
        }
        if ('cim:ExcAC5A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcAC5A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcAC5A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC5A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcAC5A.vrmin'
                                                 );
        }
        if ('cim:ExcAC5A.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcAC5A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcAC5A.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC5A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcAC5A.ke'
                                                 );
        }
        if ('cim:ExcAC5A.te' in object) {
            attributeEntries['filledEntries']['cim:ExcAC5A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC5A.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC5A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC5A.te'
                                                 );
        }
        if ('cim:ExcAC5A.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcAC5A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcAC5A.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC5A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcAC5A.kf'
                                                 );
        }
        if ('cim:ExcAC5A.tf1' in object) {
            attributeEntries['filledEntries']['cim:ExcAC5A.tf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.tf1'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC5A.tf1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC5A.tf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.tf1'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC5A.tf1'
                                                 );
        }
        if ('cim:ExcAC5A.tf2' in object) {
            attributeEntries['filledEntries']['cim:ExcAC5A.tf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.tf2'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC5A.tf2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC5A.tf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.tf2'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC5A.tf2'
                                                 );
        }
        if ('cim:ExcAC5A.tf3' in object) {
            attributeEntries['filledEntries']['cim:ExcAC5A.tf3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.tf3'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC5A.tf3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC5A.tf3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.tf3'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC5A.tf3'
                                                 );
        }
        if ('cim:ExcAC5A.efd1' in object) {
            attributeEntries['filledEntries']['cim:ExcAC5A.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.efd1'],
                                                   'cim:PU',
                                                   'cim:ExcAC5A.efd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC5A.efd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.efd1'],
                                                   'cim:PU',
                                                   'cim:ExcAC5A.efd1'
                                                 );
        }
        if ('cim:ExcAC5A.seefd1' in object) {
            attributeEntries['filledEntries']['cim:ExcAC5A.seefd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.seefd1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC5A.seefd1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC5A.seefd1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.seefd1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC5A.seefd1'
                                                 );
        }
        if ('cim:ExcAC5A.efd2' in object) {
            attributeEntries['filledEntries']['cim:ExcAC5A.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.efd2'],
                                                   'cim:PU',
                                                   'cim:ExcAC5A.efd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC5A.efd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.efd2'],
                                                   'cim:PU',
                                                   'cim:ExcAC5A.efd2'
                                                 );
        }
        if ('cim:ExcAC5A.seefd2' in object) {
            attributeEntries['filledEntries']['cim:ExcAC5A.seefd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.seefd2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC5A.seefd2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC5A.seefd2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.seefd2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC5A.seefd2'
                                                 );
        }
        if ('cim:ExcAC5A.a' in object) {
            attributeEntries['filledEntries']['cim:ExcAC5A.a'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.a'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC5A.a'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC5A.a'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC5A.a'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC5A.a'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						'ks': [CGMESProfile.shortNames.DY, ],
						'tb': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						'ke': [CGMESProfile.shortNames.DY, ],
						'te': [CGMESProfile.shortNames.DY, ],
						'kf': [CGMESProfile.shortNames.DY, ],
						'tf1': [CGMESProfile.shortNames.DY, ],
						'tf2': [CGMESProfile.shortNames.DY, ],
						'tf3': [CGMESProfile.shortNames.DY, ],
						'efd1': [CGMESProfile.shortNames.DY, ],
						'seefd1': [CGMESProfile.shortNames.DY, ],
						'efd2': [CGMESProfile.shortNames.DY, ],
						'seefd2': [CGMESProfile.shortNames.DY, ],
						'a': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcAC5A.ka",
            "cim:ExcAC5A.ks",
            "cim:ExcAC5A.tb",
            "cim:ExcAC5A.tc",
            "cim:ExcAC5A.ta",
            "cim:ExcAC5A.vrmax",
            "cim:ExcAC5A.vrmin",
            "cim:ExcAC5A.ke",
            "cim:ExcAC5A.te",
            "cim:ExcAC5A.kf",
            "cim:ExcAC5A.tf1",
            "cim:ExcAC5A.tf2",
            "cim:ExcAC5A.tf3",
            "cim:ExcAC5A.efd1",
            "cim:ExcAC5A.seefd1",
            "cim:ExcAC5A.efd2",
            "cim:ExcAC5A.seefd2",
            "cim:ExcAC5A.a",
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
            if (!ExcAC5A.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcAC5A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcAC5A.attributeHTML(object, cimmenu);
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
export default ExcAC5A
