import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcOEX3T extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcOEX3T") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcOEX3T.t1' in object) {
            attributeEntries['filledEntries']['cim:ExcOEX3T.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.t1'],
                                                   'cim:Seconds',
                                                   'cim:ExcOEX3T.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcOEX3T.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.t1'],
                                                   'cim:Seconds',
                                                   'cim:ExcOEX3T.t1'
                                                 );
        }
        if ('cim:ExcOEX3T.t2' in object) {
            attributeEntries['filledEntries']['cim:ExcOEX3T.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.t2'],
                                                   'cim:Seconds',
                                                   'cim:ExcOEX3T.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcOEX3T.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.t2'],
                                                   'cim:Seconds',
                                                   'cim:ExcOEX3T.t2'
                                                 );
        }
        if ('cim:ExcOEX3T.t3' in object) {
            attributeEntries['filledEntries']['cim:ExcOEX3T.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.t3'],
                                                   'cim:Seconds',
                                                   'cim:ExcOEX3T.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcOEX3T.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.t3'],
                                                   'cim:Seconds',
                                                   'cim:ExcOEX3T.t3'
                                                 );
        }
        if ('cim:ExcOEX3T.t4' in object) {
            attributeEntries['filledEntries']['cim:ExcOEX3T.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.t4'],
                                                   'cim:Seconds',
                                                   'cim:ExcOEX3T.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcOEX3T.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.t4'],
                                                   'cim:Seconds',
                                                   'cim:ExcOEX3T.t4'
                                                 );
        }
        if ('cim:ExcOEX3T.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcOEX3T.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.ka'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcOEX3T.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.ka'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.ka'
                                                 );
        }
        if ('cim:ExcOEX3T.t5' in object) {
            attributeEntries['filledEntries']['cim:ExcOEX3T.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.t5'],
                                                   'cim:Seconds',
                                                   'cim:ExcOEX3T.t5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcOEX3T.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.t5'],
                                                   'cim:Seconds',
                                                   'cim:ExcOEX3T.t5'
                                                 );
        }
        if ('cim:ExcOEX3T.t6' in object) {
            attributeEntries['filledEntries']['cim:ExcOEX3T.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.t6'],
                                                   'cim:Seconds',
                                                   'cim:ExcOEX3T.t6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcOEX3T.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.t6'],
                                                   'cim:Seconds',
                                                   'cim:ExcOEX3T.t6'
                                                 );
        }
        if ('cim:ExcOEX3T.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcOEX3T.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcOEX3T.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.vrmax'
                                                 );
        }
        if ('cim:ExcOEX3T.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcOEX3T.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcOEX3T.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.vrmin'
                                                 );
        }
        if ('cim:ExcOEX3T.te' in object) {
            attributeEntries['filledEntries']['cim:ExcOEX3T.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcOEX3T.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcOEX3T.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcOEX3T.te'
                                                 );
        }
        if ('cim:ExcOEX3T.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcOEX3T.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.kf'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcOEX3T.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.kf'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.kf'
                                                 );
        }
        if ('cim:ExcOEX3T.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcOEX3T.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcOEX3T.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcOEX3T.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcOEX3T.tf'
                                                 );
        }
        if ('cim:ExcOEX3T.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcOEX3T.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.kc'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcOEX3T.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.kc'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.kc'
                                                 );
        }
        if ('cim:ExcOEX3T.kd' in object) {
            attributeEntries['filledEntries']['cim:ExcOEX3T.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.kd'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcOEX3T.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.kd'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.kd'
                                                 );
        }
        if ('cim:ExcOEX3T.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcOEX3T.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.ke'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcOEX3T.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.ke'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.ke'
                                                 );
        }
        if ('cim:ExcOEX3T.e1' in object) {
            attributeEntries['filledEntries']['cim:ExcOEX3T.e1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.e1'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.e1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcOEX3T.e1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.e1'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.e1'
                                                 );
        }
        if ('cim:ExcOEX3T.see1' in object) {
            attributeEntries['filledEntries']['cim:ExcOEX3T.see1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.see1'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.see1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcOEX3T.see1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.see1'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.see1'
                                                 );
        }
        if ('cim:ExcOEX3T.e2' in object) {
            attributeEntries['filledEntries']['cim:ExcOEX3T.e2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.e2'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.e2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcOEX3T.e2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.e2'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.e2'
                                                 );
        }
        if ('cim:ExcOEX3T.see2' in object) {
            attributeEntries['filledEntries']['cim:ExcOEX3T.see2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.see2'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.see2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcOEX3T.see2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcOEX3T.see2'],
                                                   'cim:PU',
                                                   'cim:ExcOEX3T.see2'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						't1': [CGMESProfile.shortNames.DY, ],
						't2': [CGMESProfile.shortNames.DY, ],
						't3': [CGMESProfile.shortNames.DY, ],
						't4': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						't5': [CGMESProfile.shortNames.DY, ],
						't6': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						'te': [CGMESProfile.shortNames.DY, ],
						'kf': [CGMESProfile.shortNames.DY, ],
						'tf': [CGMESProfile.shortNames.DY, ],
						'kc': [CGMESProfile.shortNames.DY, ],
						'kd': [CGMESProfile.shortNames.DY, ],
						'ke': [CGMESProfile.shortNames.DY, ],
						'e1': [CGMESProfile.shortNames.DY, ],
						'see1': [CGMESProfile.shortNames.DY, ],
						'e2': [CGMESProfile.shortNames.DY, ],
						'see2': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcOEX3T.t1",
            "cim:ExcOEX3T.t2",
            "cim:ExcOEX3T.t3",
            "cim:ExcOEX3T.t4",
            "cim:ExcOEX3T.ka",
            "cim:ExcOEX3T.t5",
            "cim:ExcOEX3T.t6",
            "cim:ExcOEX3T.vrmax",
            "cim:ExcOEX3T.vrmin",
            "cim:ExcOEX3T.te",
            "cim:ExcOEX3T.kf",
            "cim:ExcOEX3T.tf",
            "cim:ExcOEX3T.kc",
            "cim:ExcOEX3T.kd",
            "cim:ExcOEX3T.ke",
            "cim:ExcOEX3T.e1",
            "cim:ExcOEX3T.see1",
            "cim:ExcOEX3T.e2",
            "cim:ExcOEX3T.see2",
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
            if (!ExcOEX3T.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcOEX3T: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcOEX3T.attributeHTML(object, cimmenu);
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
export default ExcOEX3T
