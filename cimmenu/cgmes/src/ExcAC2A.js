import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcAC2A extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcAC2A") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcAC2A.tb' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC2A.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.tb'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC2A.tb'
                                                 );
        }
        if ('cim:ExcAC2A.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC2A.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC2A.tc'
                                                 );
        }
        if ('cim:ExcAC2A.ka' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.ka'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.ka'
                                                 );
        }
        if ('cim:ExcAC2A.ta' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC2A.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.ta'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC2A.ta'
                                                 );
        }
        if ('cim:ExcAC2A.vamax' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.vamax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.vamax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.vamax'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.vamax'
                                                 );
        }
        if ('cim:ExcAC2A.vamin' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.vamin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.vamin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.vamin'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.vamin'
                                                 );
        }
        if ('cim:ExcAC2A.kb' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.kb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.kb'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.kb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.kb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.kb'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.kb'
                                                 );
        }
        if ('cim:ExcAC2A.kb1' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.kb1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.kb1'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.kb1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.kb1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.kb1'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.kb1'
                                                 );
        }
        if ('cim:ExcAC2A.vrmax' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.vrmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.vrmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.vrmax'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.vrmax'
                                                 );
        }
        if ('cim:ExcAC2A.vrmin' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.vrmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.vrmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.vrmin'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.vrmin'
                                                 );
        }
        if ('cim:ExcAC2A.te' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC2A.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC2A.te'
                                                 );
        }
        if ('cim:ExcAC2A.vfemax' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.vfemax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.vfemax'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.vfemax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.vfemax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.vfemax'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.vfemax'
                                                 );
        }
        if ('cim:ExcAC2A.kh' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.kh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.kh'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.kh'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.kh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.kh'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.kh'
                                                 );
        }
        if ('cim:ExcAC2A.kf' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.kf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.kf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.kf'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.kf'
                                                 );
        }
        if ('cim:ExcAC2A.kl' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.kl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.kl'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.kl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.kl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.kl'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.kl'
                                                 );
        }
        if ('cim:ExcAC2A.vlr' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.vlr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.vlr'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.vlr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.vlr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.vlr'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.vlr'
                                                 );
        }
        if ('cim:ExcAC2A.kl1' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.kl1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.kl1'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.kl1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.kl1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.kl1'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.kl1'
                                                 );
        }
        if ('cim:ExcAC2A.ks' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.ks'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.ks'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.ks'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.ks'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.ks'
                                                 );
        }
        if ('cim:ExcAC2A.tf' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC2A.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.tf'],
                                                   'cim:Seconds',
                                                   'cim:ExcAC2A.tf'
                                                 );
        }
        if ('cim:ExcAC2A.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.kc'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.kc'
                                                 );
        }
        if ('cim:ExcAC2A.kd' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.kd'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.kd'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.kd'
                                                 );
        }
        if ('cim:ExcAC2A.ke' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.ke'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.ke'
                                                 );
        }
        if ('cim:ExcAC2A.ve1' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.ve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.ve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.ve1'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.ve1'
                                                 );
        }
        if ('cim:ExcAC2A.seve1' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC2A.seve1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.seve1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.seve1'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC2A.seve1'
                                                 );
        }
        if ('cim:ExcAC2A.ve2' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.ve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.ve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.ve2'],
                                                   'cim:PU',
                                                   'cim:ExcAC2A.ve2'
                                                 );
        }
        if ('cim:ExcAC2A.seve2' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC2A.seve2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.seve2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.seve2'],
                                                   'cim:Simple_Float',
                                                   'cim:ExcAC2A.seve2'
                                                 );
        }
        if ('cim:ExcAC2A.hvgate' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.hvgate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.hvgate'],
                                                   'cim:Boolean',
                                                   'cim:ExcAC2A.hvgate'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.hvgate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.hvgate'],
                                                   'cim:Boolean',
                                                   'cim:ExcAC2A.hvgate'
                                                 );
        }
        if ('cim:ExcAC2A.lvgate' in object) {
            attributeEntries['filledEntries']['cim:ExcAC2A.lvgate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.lvgate'],
                                                   'cim:Boolean',
                                                   'cim:ExcAC2A.lvgate'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcAC2A.lvgate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcAC2A.lvgate'],
                                                   'cim:Boolean',
                                                   'cim:ExcAC2A.lvgate'
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
						'kb': [CGMESProfile.shortNames.DY, ],
						'kb1': [CGMESProfile.shortNames.DY, ],
						'vrmax': [CGMESProfile.shortNames.DY, ],
						'vrmin': [CGMESProfile.shortNames.DY, ],
						'te': [CGMESProfile.shortNames.DY, ],
						'vfemax': [CGMESProfile.shortNames.DY, ],
						'kh': [CGMESProfile.shortNames.DY, ],
						'kf': [CGMESProfile.shortNames.DY, ],
						'kl': [CGMESProfile.shortNames.DY, ],
						'vlr': [CGMESProfile.shortNames.DY, ],
						'kl1': [CGMESProfile.shortNames.DY, ],
						'ks': [CGMESProfile.shortNames.DY, ],
						'tf': [CGMESProfile.shortNames.DY, ],
						'kc': [CGMESProfile.shortNames.DY, ],
						'kd': [CGMESProfile.shortNames.DY, ],
						'ke': [CGMESProfile.shortNames.DY, ],
						've1': [CGMESProfile.shortNames.DY, ],
						'seve1': [CGMESProfile.shortNames.DY, ],
						've2': [CGMESProfile.shortNames.DY, ],
						'seve2': [CGMESProfile.shortNames.DY, ],
						'hvgate': [CGMESProfile.shortNames.DY, ],
						'lvgate': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcAC2A.tb",
            "cim:ExcAC2A.tc",
            "cim:ExcAC2A.ka",
            "cim:ExcAC2A.ta",
            "cim:ExcAC2A.vamax",
            "cim:ExcAC2A.vamin",
            "cim:ExcAC2A.kb",
            "cim:ExcAC2A.kb1",
            "cim:ExcAC2A.vrmax",
            "cim:ExcAC2A.vrmin",
            "cim:ExcAC2A.te",
            "cim:ExcAC2A.vfemax",
            "cim:ExcAC2A.kh",
            "cim:ExcAC2A.kf",
            "cim:ExcAC2A.kl",
            "cim:ExcAC2A.vlr",
            "cim:ExcAC2A.kl1",
            "cim:ExcAC2A.ks",
            "cim:ExcAC2A.tf",
            "cim:ExcAC2A.kc",
            "cim:ExcAC2A.kd",
            "cim:ExcAC2A.ke",
            "cim:ExcAC2A.ve1",
            "cim:ExcAC2A.seve1",
            "cim:ExcAC2A.ve2",
            "cim:ExcAC2A.seve2",
            "cim:ExcAC2A.hvgate",
            "cim:ExcAC2A.lvgate",
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
            if (!ExcAC2A.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class ExcAC2A: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcAC2A.attributeHTML(object, cimmenu);
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
export default ExcAC2A
