import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcPIC extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcPIC") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcPIC.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.ka'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.ka'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.ka'
                                                 );
        }
        if ('cim:ExcPIC.ta1' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.ta1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.ta1'],
                                                   'cim:Seconds',
                                                   'cim:ExcPIC.ta1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.ta1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.ta1'],
                                                   'cim:Seconds',
                                                   'cim:ExcPIC.ta1'
                                                 );
        }
        if ('cim:ExcPIC.vr1' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.vr1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.vr1'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.vr1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.vr1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.vr1'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.vr1'
                                                 );
        }
        if ('cim:ExcPIC.vr2' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.vr2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.vr2'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.vr2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.vr2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.vr2'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.vr2'
                                                 );
        }
        if ('cim:ExcPIC.ta2' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.ta2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.ta2'],
                                                   'cim:Seconds',
                                                   'cim:ExcPIC.ta2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.ta2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.ta2'],
                                                   'cim:Seconds',
                                                   'cim:ExcPIC.ta2'
                                                 );
        }
        if ('cim:ExcPIC.ta3' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.ta3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.ta3'],
                                                   'cim:Seconds',
                                                   'cim:ExcPIC.ta3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.ta3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.ta3'],
                                                   'cim:Seconds',
                                                   'cim:ExcPIC.ta3'
                                                 );
        }
        if ('cim:ExcPIC.ta4' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.ta4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.ta4'],
                                                   'cim:Seconds',
                                                   'cim:ExcPIC.ta4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.ta4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.ta4'],
                                                   'cim:Seconds',
                                                   'cim:ExcPIC.ta4'
                                                 );
        }
        if ('cim:ExcPIC.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.vrmax'
                                                 );
        }
        if ('cim:ExcPIC.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.vrmin'
                                                 );
        }
        if ('cim:ExcPIC.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.kf'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.kf'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.kf'
                                                 );
        }
        if ('cim:ExcPIC.tf1' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.tf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.tf1'],
                                                   'cim:Seconds',
                                                   'cim:ExcPIC.tf1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.tf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.tf1'],
                                                   'cim:Seconds',
                                                   'cim:ExcPIC.tf1'
                                                 );
        }
        if ('cim:ExcPIC.tf2' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.tf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.tf2'],
                                                   'cim:Seconds',
                                                   'cim:ExcPIC.tf2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.tf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.tf2'],
                                                   'cim:Seconds',
                                                   'cim:ExcPIC.tf2'
                                                 );
        }
        if ('cim:ExcPIC.efdmax' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.efdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.efdmax'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.efdmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.efdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.efdmax'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.efdmax'
                                                 );
        }
        if ('cim:ExcPIC.efdmin' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.efdmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.efdmin'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.efdmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.efdmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.efdmin'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.efdmin'
                                                 );
        }
        if ('cim:ExcPIC.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.ke'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.ke'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.ke'
                                                 );
        }
        if ('cim:ExcPIC.te' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcPIC.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcPIC.te'
                                                 );
        }
        if ('cim:ExcPIC.e1' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.e1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.e1'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.e1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.e1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.e1'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.e1'
                                                 );
        }
        if ('cim:ExcPIC.se1' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.se1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.se1'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.se1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.se1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.se1'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.se1'
                                                 );
        }
        if ('cim:ExcPIC.e2' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.e2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.e2'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.e2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.e2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.e2'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.e2'
                                                 );
        }
        if ('cim:ExcPIC.se2' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.se2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.se2'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.se2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.se2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.se2'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.se2'
                                                 );
        }
        if ('cim:ExcPIC.kp' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.kp'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.kp'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.kp'
                                                 );
        }
        if ('cim:ExcPIC.ki' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.ki'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.ki'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.ki'
                                                 );
        }
        if ('cim:ExcPIC.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcPIC.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.kc'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcPIC.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcPIC.kc'],
                                                   'cim:PU',
                                                   'cim:ExcPIC.kc'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						'ta1': [CGMESProfile.shortNames.DY, ],
						'vr1': [CGMESProfile.shortNames.DY, ],
						'vr2': [CGMESProfile.shortNames.DY, ],
						'ta2': [CGMESProfile.shortNames.DY, ],
						'ta3': [CGMESProfile.shortNames.DY, ],
						'ta4': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						'kf': [CGMESProfile.shortNames.DY, ],
						'tf1': [CGMESProfile.shortNames.DY, ],
						'tf2': [CGMESProfile.shortNames.DY, ],
						'efdmax': [CGMESProfile.shortNames.DY, ],
						'efdmin': [CGMESProfile.shortNames.DY, ],
						'ke': [CGMESProfile.shortNames.DY, ],
						'te': [CGMESProfile.shortNames.DY, ],
						'e1': [CGMESProfile.shortNames.DY, ],
						'se1': [CGMESProfile.shortNames.DY, ],
						'e2': [CGMESProfile.shortNames.DY, ],
						'se2': [CGMESProfile.shortNames.DY, ],
						'kp': [CGMESProfile.shortNames.DY, ],
						'ki': [CGMESProfile.shortNames.DY, ],
						'kc': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcPIC.ka",
            "cim:ExcPIC.ta1",
            "cim:ExcPIC.vr1",
            "cim:ExcPIC.vr2",
            "cim:ExcPIC.ta2",
            "cim:ExcPIC.ta3",
            "cim:ExcPIC.ta4",
            "cim:ExcPIC.vrmax",
            "cim:ExcPIC.vrmin",
            "cim:ExcPIC.kf",
            "cim:ExcPIC.tf1",
            "cim:ExcPIC.tf2",
            "cim:ExcPIC.efdmax",
            "cim:ExcPIC.efdmin",
            "cim:ExcPIC.ke",
            "cim:ExcPIC.te",
            "cim:ExcPIC.e1",
            "cim:ExcPIC.se1",
            "cim:ExcPIC.e2",
            "cim:ExcPIC.se2",
            "cim:ExcPIC.kp",
            "cim:ExcPIC.ki",
            "cim:ExcPIC.kc",
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
            if (!ExcPIC.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcPIC: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcPIC.attributeHTML(object, cimmenu);
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
export default ExcPIC
