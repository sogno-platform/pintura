import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcAC3A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcAC3A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcAC3A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC3A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC3A.tb'
                                                 );
        }
        if ('cim:ExcAC3A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC3A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC3A.tc'
                                                 );
        }
        if ('cim:ExcAC3A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.ka'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC3A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.ka'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC3A.ka'
                                                 );
        }
        if ('cim:ExcAC3A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.ta'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.ta'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.ta'
                                                 );
        }
        if ('cim:ExcAC3A.vamax' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.vamax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.vamax'
                                                 );
        }
        if ('cim:ExcAC3A.vamin' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.vamin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.vamin'
                                                 );
        }
        if ('cim:ExcAC3A.te' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC3A.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC3A.te'
                                                 );
        }
        if ('cim:ExcAC3A.vemin' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.vemin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.vemin'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.vemin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.vemin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.vemin'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.vemin'
                                                 );
        }
        if ('cim:ExcAC3A.kr' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.kr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.kr'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.kr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.kr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.kr'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.kr'
                                                 );
        }
        if ('cim:ExcAC3A.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.kf'
                                                 );
        }
        if ('cim:ExcAC3A.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC3A.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC3A.tf'
                                                 );
        }
        if ('cim:ExcAC3A.kn' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.kn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.kn'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.kn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.kn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.kn'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.kn'
                                                 );
        }
        if ('cim:ExcAC3A.efdn' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.efdn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.efdn'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.efdn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.efdn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.efdn'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.efdn'
                                                 );
        }
        if ('cim:ExcAC3A.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.kc'
                                                 );
        }
        if ('cim:ExcAC3A.kd' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.kd'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.kd'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.kd'
                                                 );
        }
        if ('cim:ExcAC3A.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.ke'
                                                 );
        }
        if ('cim:ExcAC3A.klv' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.klv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.klv'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.klv'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.klv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.klv'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.klv'
                                                 );
        }
        if ('cim:ExcAC3A.kf1' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.kf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.kf1'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.kf1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.kf1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.kf1'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.kf1'
                                                 );
        }
        if ('cim:ExcAC3A.kf2' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.kf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.kf2'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.kf2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.kf2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.kf2'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.kf2'
                                                 );
        }
        if ('cim:ExcAC3A.ks' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.ks'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.ks'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.ks'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.ks'
                                                 );
        }
        if ('cim:ExcAC3A.vfemax' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.vfemax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.vfemax'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.vfemax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.vfemax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.vfemax'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.vfemax'
                                                 );
        }
        if ('cim:ExcAC3A.ve1' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.ve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.ve1'
                                                 );
        }
        if ('cim:ExcAC3A.seve1' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC3A.seve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC3A.seve1'
                                                 );
        }
        if ('cim:ExcAC3A.ve2' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.ve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.ve2'
                                                 );
        }
        if ('cim:ExcAC3A.seve2' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC3A.seve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC3A.seve2'
                                                 );
        }
        if ('cim:ExcAC3A.vlv' in object) {
            attributeEntries['filledEntries']['cim:ExcAC3A.vlv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.vlv'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.vlv'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC3A.vlv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC3A.vlv'],
                                                   'cim:PU',
                                                   'cim:ExcAC3A.vlv'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'tb': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'vamax': [CGMESProfile.shortNames.DY, ],
						'vamin': [CGMESProfile.shortNames.DY, ],
						'te': [CGMESProfile.shortNames.DY, ],
						'vemin': [CGMESProfile.shortNames.DY, ],
						'kr': [CGMESProfile.shortNames.DY, ],
						'kf': [CGMESProfile.shortNames.DY, ],
						'tf': [CGMESProfile.shortNames.DY, ],
						'kn': [CGMESProfile.shortNames.DY, ],
						'efdn': [CGMESProfile.shortNames.DY, ],
						'kc': [CGMESProfile.shortNames.DY, ],
						'kd': [CGMESProfile.shortNames.DY, ],
						'ke': [CGMESProfile.shortNames.DY, ],
						'klv': [CGMESProfile.shortNames.DY, ],
						'kf1': [CGMESProfile.shortNames.DY, ],
						'kf2': [CGMESProfile.shortNames.DY, ],
						'ks': [CGMESProfile.shortNames.DY, ],
						'vfemax': [CGMESProfile.shortNames.DY, ],
						've1': [CGMESProfile.shortNames.DY, ],
						'seve1': [CGMESProfile.shortNames.DY, ],
						've2': [CGMESProfile.shortNames.DY, ],
						'seve2': [CGMESProfile.shortNames.DY, ],
						'vlv': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcAC3A.tb",
            "cim:ExcAC3A.tc",
            "cim:ExcAC3A.ka",
            "cim:ExcAC3A.ta",
            "cim:ExcAC3A.vamax",
            "cim:ExcAC3A.vamin",
            "cim:ExcAC3A.te",
            "cim:ExcAC3A.vemin",
            "cim:ExcAC3A.kr",
            "cim:ExcAC3A.kf",
            "cim:ExcAC3A.tf",
            "cim:ExcAC3A.kn",
            "cim:ExcAC3A.efdn",
            "cim:ExcAC3A.kc",
            "cim:ExcAC3A.kd",
            "cim:ExcAC3A.ke",
            "cim:ExcAC3A.klv",
            "cim:ExcAC3A.kf1",
            "cim:ExcAC3A.kf2",
            "cim:ExcAC3A.ks",
            "cim:ExcAC3A.vfemax",
            "cim:ExcAC3A.ve1",
            "cim:ExcAC3A.seve1",
            "cim:ExcAC3A.ve2",
            "cim:ExcAC3A.seve2",
            "cim:ExcAC3A.vlv",
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
            if (!ExcAC3A.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcAC3A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcAC3A.attributeHTML(object, cimmenu);
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
export default ExcAC3A
