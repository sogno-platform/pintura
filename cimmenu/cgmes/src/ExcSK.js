import templates from "../../templates/index.js"
import ExcitationSystemDynamics from "./ExcitationSystemDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class ExcSK extends ExcitationSystemDynamics {

    static attributeHTML(object, cimmenu, classType="ExcSK") {
        let attributeEntries = ExcitationSystemDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:ExcSK.efdmax' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.efdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.efdmax'],
                                                   'cim:PU',
                                                   'cim:ExcSK.efdmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.efdmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.efdmax'],
                                                   'cim:PU',
                                                   'cim:ExcSK.efdmax'
                                                 );
        }
        if ('cim:ExcSK.efdmin' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.efdmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.efdmin'],
                                                   'cim:PU',
                                                   'cim:ExcSK.efdmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.efdmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.efdmin'],
                                                   'cim:PU',
                                                   'cim:ExcSK.efdmin'
                                                 );
        }
        if ('cim:ExcSK.emax' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.emax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.emax'],
                                                   'cim:PU',
                                                   'cim:ExcSK.emax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.emax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.emax'],
                                                   'cim:PU',
                                                   'cim:ExcSK.emax'
                                                 );
        }
        if ('cim:ExcSK.emin' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.emin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.emin'],
                                                   'cim:PU',
                                                   'cim:ExcSK.emin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.emin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.emin'],
                                                   'cim:PU',
                                                   'cim:ExcSK.emin'
                                                 );
        }
        if ('cim:ExcSK.k' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.k'],
                                                   'cim:PU',
                                                   'cim:ExcSK.k'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.k'],
                                                   'cim:PU',
                                                   'cim:ExcSK.k'
                                                 );
        }
        if ('cim:ExcSK.k1' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.k1'],
                                                   'cim:PU',
                                                   'cim:ExcSK.k1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.k1'],
                                                   'cim:PU',
                                                   'cim:ExcSK.k1'
                                                 );
        }
        if ('cim:ExcSK.k2' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.k2'],
                                                   'cim:PU',
                                                   'cim:ExcSK.k2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.k2'],
                                                   'cim:PU',
                                                   'cim:ExcSK.k2'
                                                 );
        }
        if ('cim:ExcSK.kc' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.kc'],
                                                   'cim:PU',
                                                   'cim:ExcSK.kc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.kc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.kc'],
                                                   'cim:PU',
                                                   'cim:ExcSK.kc'
                                                 );
        }
        if ('cim:ExcSK.kce' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.kce'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.kce'],
                                                   'cim:PU',
                                                   'cim:ExcSK.kce'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.kce'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.kce'],
                                                   'cim:PU',
                                                   'cim:ExcSK.kce'
                                                 );
        }
        if ('cim:ExcSK.kd' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.kd'],
                                                   'cim:PU',
                                                   'cim:ExcSK.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.kd'],
                                                   'cim:PU',
                                                   'cim:ExcSK.kd'
                                                 );
        }
        if ('cim:ExcSK.kgob' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.kgob'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.kgob'],
                                                   'cim:PU',
                                                   'cim:ExcSK.kgob'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.kgob'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.kgob'],
                                                   'cim:PU',
                                                   'cim:ExcSK.kgob'
                                                 );
        }
        if ('cim:ExcSK.kp' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.kp'],
                                                   'cim:PU',
                                                   'cim:ExcSK.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.kp'],
                                                   'cim:PU',
                                                   'cim:ExcSK.kp'
                                                 );
        }
        if ('cim:ExcSK.kqi' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.kqi'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.kqi'],
                                                   'cim:PU',
                                                   'cim:ExcSK.kqi'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.kqi'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.kqi'],
                                                   'cim:PU',
                                                   'cim:ExcSK.kqi'
                                                 );
        }
        if ('cim:ExcSK.kqob' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.kqob'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.kqob'],
                                                   'cim:PU',
                                                   'cim:ExcSK.kqob'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.kqob'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.kqob'],
                                                   'cim:PU',
                                                   'cim:ExcSK.kqob'
                                                 );
        }
        if ('cim:ExcSK.kqp' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.kqp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.kqp'],
                                                   'cim:PU',
                                                   'cim:ExcSK.kqp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.kqp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.kqp'],
                                                   'cim:PU',
                                                   'cim:ExcSK.kqp'
                                                 );
        }
        if ('cim:ExcSK.nq' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.nq'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.nq'],
                                                   'cim:PU',
                                                   'cim:ExcSK.nq'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.nq'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.nq'],
                                                   'cim:PU',
                                                   'cim:ExcSK.nq'
                                                 );
        }
        if ('cim:ExcSK.qconoff' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.qconoff'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.qconoff'],
                                                   'cim:Boolean',
                                                   'cim:ExcSK.qconoff'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.qconoff'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.qconoff'],
                                                   'cim:Boolean',
                                                   'cim:ExcSK.qconoff'
                                                 );
        }
        if ('cim:ExcSK.qz' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.qz'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.qz'],
                                                   'cim:PU',
                                                   'cim:ExcSK.qz'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.qz'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.qz'],
                                                   'cim:PU',
                                                   'cim:ExcSK.qz'
                                                 );
        }
        if ('cim:ExcSK.remote' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.remote'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.remote'],
                                                   'cim:Boolean',
                                                   'cim:ExcSK.remote'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.remote'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.remote'],
                                                   'cim:Boolean',
                                                   'cim:ExcSK.remote'
                                                 );
        }
        if ('cim:ExcSK.sbase' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.sbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.sbase'],
                                                   'cim:ApparentPower',
                                                   'cim:ExcSK.sbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.sbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.sbase'],
                                                   'cim:ApparentPower',
                                                   'cim:ExcSK.sbase'
                                                 );
        }
        if ('cim:ExcSK.tc' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcSK.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.tc'],
                                                   'cim:Seconds',
                                                   'cim:ExcSK.tc'
                                                 );
        }
        if ('cim:ExcSK.te' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcSK.te'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.te'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.te'],
                                                   'cim:Seconds',
                                                   'cim:ExcSK.te'
                                                 );
        }
        if ('cim:ExcSK.ti' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.ti'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.ti'],
                                                   'cim:Seconds',
                                                   'cim:ExcSK.ti'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.ti'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.ti'],
                                                   'cim:Seconds',
                                                   'cim:ExcSK.ti'
                                                 );
        }
        if ('cim:ExcSK.tp' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.tp'],
                                                   'cim:Seconds',
                                                   'cim:ExcSK.tp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.tp'],
                                                   'cim:Seconds',
                                                   'cim:ExcSK.tp'
                                                 );
        }
        if ('cim:ExcSK.tr' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.tr'],
                                                   'cim:Seconds',
                                                   'cim:ExcSK.tr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.tr'],
                                                   'cim:Seconds',
                                                   'cim:ExcSK.tr'
                                                 );
        }
        if ('cim:ExcSK.uimax' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.uimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.uimax'],
                                                   'cim:PU',
                                                   'cim:ExcSK.uimax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.uimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.uimax'],
                                                   'cim:PU',
                                                   'cim:ExcSK.uimax'
                                                 );
        }
        if ('cim:ExcSK.uimin' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.uimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.uimin'],
                                                   'cim:PU',
                                                   'cim:ExcSK.uimin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.uimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.uimin'],
                                                   'cim:PU',
                                                   'cim:ExcSK.uimin'
                                                 );
        }
        if ('cim:ExcSK.urmax' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.urmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.urmax'],
                                                   'cim:PU',
                                                   'cim:ExcSK.urmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.urmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.urmax'],
                                                   'cim:PU',
                                                   'cim:ExcSK.urmax'
                                                 );
        }
        if ('cim:ExcSK.urmin' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.urmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.urmin'],
                                                   'cim:PU',
                                                   'cim:ExcSK.urmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.urmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.urmin'],
                                                   'cim:PU',
                                                   'cim:ExcSK.urmin'
                                                 );
        }
        if ('cim:ExcSK.vtmax' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.vtmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.vtmax'],
                                                   'cim:PU',
                                                   'cim:ExcSK.vtmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.vtmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.vtmax'],
                                                   'cim:PU',
                                                   'cim:ExcSK.vtmax'
                                                 );
        }
        if ('cim:ExcSK.vtmin' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.vtmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.vtmin'],
                                                   'cim:PU',
                                                   'cim:ExcSK.vtmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.vtmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.vtmin'],
                                                   'cim:PU',
                                                   'cim:ExcSK.vtmin'
                                                 );
        }
        if ('cim:ExcSK.yp' in object) {
            attributeEntries['filledEntries']['cim:ExcSK.yp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.yp'],
                                                   'cim:PU',
                                                   'cim:ExcSK.yp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:ExcSK.yp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['ExcSK.yp'],
                                                   'cim:PU',
                                                   'cim:ExcSK.yp'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'efdmax': [CGMESProfile.shortNames.DY, ],
						'efdmin': [CGMESProfile.shortNames.DY, ],
						'emax': [CGMESProfile.shortNames.DY, ],
						'emin': [CGMESProfile.shortNames.DY, ],
						'k': [CGMESProfile.shortNames.DY, ],
						'k1': [CGMESProfile.shortNames.DY, ],
						'k2': [CGMESProfile.shortNames.DY, ],
						'kc': [CGMESProfile.shortNames.DY, ],
						'kce': [CGMESProfile.shortNames.DY, ],
						'kd': [CGMESProfile.shortNames.DY, ],
						'kgob': [CGMESProfile.shortNames.DY, ],
						'kp': [CGMESProfile.shortNames.DY, ],
						'kqi': [CGMESProfile.shortNames.DY, ],
						'kqob': [CGMESProfile.shortNames.DY, ],
						'kqp': [CGMESProfile.shortNames.DY, ],
						'nq': [CGMESProfile.shortNames.DY, ],
						'qconoff': [CGMESProfile.shortNames.DY, ],
						'qz': [CGMESProfile.shortNames.DY, ],
						'remote': [CGMESProfile.shortNames.DY, ],
						'sbase': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						'te': [CGMESProfile.shortNames.DY, ],
						'ti': [CGMESProfile.shortNames.DY, ],
						'tp': [CGMESProfile.shortNames.DY, ],
						'tr': [CGMESProfile.shortNames.DY, ],
						'uimax': [CGMESProfile.shortNames.DY, ],
						'uimin': [CGMESProfile.shortNames.DY, ],
						'urmax': [CGMESProfile.shortNames.DY, ],
						'urmin': [CGMESProfile.shortNames.DY, ],
						'vtmax': [CGMESProfile.shortNames.DY, ],
						'vtmin': [CGMESProfile.shortNames.DY, ],
						'yp': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:ExcSK.efdmax",
            "cim:ExcSK.efdmin",
            "cim:ExcSK.emax",
            "cim:ExcSK.emin",
            "cim:ExcSK.k",
            "cim:ExcSK.k1",
            "cim:ExcSK.k2",
            "cim:ExcSK.kc",
            "cim:ExcSK.kce",
            "cim:ExcSK.kd",
            "cim:ExcSK.kgob",
            "cim:ExcSK.kp",
            "cim:ExcSK.kqi",
            "cim:ExcSK.kqob",
            "cim:ExcSK.kqp",
            "cim:ExcSK.nq",
            "cim:ExcSK.qconoff",
            "cim:ExcSK.qz",
            "cim:ExcSK.remote",
            "cim:ExcSK.sbase",
            "cim:ExcSK.tc",
            "cim:ExcSK.te",
            "cim:ExcSK.ti",
            "cim:ExcSK.tp",
            "cim:ExcSK.tr",
            "cim:ExcSK.uimax",
            "cim:ExcSK.uimin",
            "cim:ExcSK.urmax",
            "cim:ExcSK.urmin",
            "cim:ExcSK.vtmax",
            "cim:ExcSK.vtmin",
            "cim:ExcSK.yp",
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
            if (!ExcSK.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class ExcSK: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = ExcSK.attributeHTML(object, cimmenu);
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
export default ExcSK
