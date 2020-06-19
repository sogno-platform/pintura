import templates from "../../templates/index.js"
import UnderexcitationLimiterDynamics from "./UnderexcitationLimiterDynamics.js"
import common from "../../src/common.js"

class UnderexcLimIEEE2 extends UnderexcitationLimiterDynamics {

    static attributeHTML(object, cimmenu, classType="UnderexcLimIEEE2") {
        let attributeEntries = UnderexcitationLimiterDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:UnderexcLimIEEE2.tuv' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.tuv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.tuv'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE2.tuv'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.tuv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.tuv'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE2.tuv'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.tup' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.tup'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.tup'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE2.tup'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.tup'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.tup'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE2.tup'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.tuq' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.tuq'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.tuq'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE2.tuq'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.tuq'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.tuq'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE2.tuq'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.kui' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.kui'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.kui'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.kui'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.kui'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.kui'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.kui'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.kul' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.kul'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.kul'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.kul'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.kul'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.kul'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.kul'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.vuimax' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.vuimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.vuimax'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.vuimax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.vuimax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.vuimax'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.vuimax'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.vuimin' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.vuimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.vuimin'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.vuimin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.vuimin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.vuimin'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.vuimin'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.kuf' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.kuf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.kuf'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.kuf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.kuf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.kuf'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.kuf'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.kfb' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.kfb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.kfb'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.kfb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.kfb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.kfb'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.kfb'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.tul' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.tul'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.tul'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE2.tul'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.tul'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.tul'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE2.tul'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.tu1' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.tu1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.tu1'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE2.tu1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.tu1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.tu1'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE2.tu1'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.tu2' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.tu2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.tu2'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE2.tu2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.tu2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.tu2'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE2.tu2'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.tu3' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.tu3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.tu3'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE2.tu3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.tu3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.tu3'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE2.tu3'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.tu4' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.tu4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.tu4'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE2.tu4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.tu4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.tu4'],
                                                   'cim:Seconds',
                                                   'cim:UnderexcLimIEEE2.tu4'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.vulmax' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.vulmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.vulmax'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.vulmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.vulmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.vulmax'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.vulmax'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.vulmin' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.vulmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.vulmin'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.vulmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.vulmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.vulmin'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.vulmin'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.p0' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.p0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p0'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.p0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p0'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p0'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.q0' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.q0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q0'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.q0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q0'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q0'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.p1' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.p1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p1'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.p1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p1'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p1'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.q1' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.q1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q1'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.q1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q1'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q1'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.p2' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.p2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p2'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.p2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p2'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p2'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.q2' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.q2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q2'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.q2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q2'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q2'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.p3' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.p3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p3'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.p3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p3'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p3'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.q3' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.q3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q3'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.q3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q3'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q3'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.p4' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.p4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p4'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.p4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p4'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p4'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.q4' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.q4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q4'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.q4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q4'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q4'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.p5' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.p5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p5'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.p5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p5'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p5'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.q5' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.q5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q5'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.q5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q5'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q5'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.p6' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.p6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p6'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.p6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p6'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p6'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.q6' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.q6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q6'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.q6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q6'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q6'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.p7' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.p7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p7'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.p7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p7'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p7'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.q7' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.q7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q7'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.q7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q7'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q7'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.p8' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.p8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p8'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p8'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.p8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p8'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p8'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.q8' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.q8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q8'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q8'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.q8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q8'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q8'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.p9' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.p9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p9'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p9'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.p9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p9'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p9'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.q9' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.q9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q9'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q9'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.q9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q9'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q9'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.p10' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.p10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p10'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p10'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.p10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.p10'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.p10'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.q10' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.q10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q10'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q10'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.q10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.q10'],
                                                   'cim:PU',
                                                   'cim:UnderexcLimIEEE2.q10'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.k1' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.k1'],
                                                   'cim:Simple_Float',
                                                   'cim:UnderexcLimIEEE2.k1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.k1'],
                                                   'cim:Simple_Float',
                                                   'cim:UnderexcLimIEEE2.k1'
                                                 );
        }
        if ('cim:UnderexcLimIEEE2.k2' in object) {
            attributeEntries['filledEntries']['cim:UnderexcLimIEEE2.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.k2'],
                                                   'cim:Simple_Float',
                                                   'cim:UnderexcLimIEEE2.k2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:UnderexcLimIEEE2.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['UnderexcLimIEEE2.k2'],
                                                   'cim:Simple_Float',
                                                   'cim:UnderexcLimIEEE2.k2'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:UnderexcLimIEEE2.tuv",
            "cim:UnderexcLimIEEE2.tup",
            "cim:UnderexcLimIEEE2.tuq",
            "cim:UnderexcLimIEEE2.kui",
            "cim:UnderexcLimIEEE2.kul",
            "cim:UnderexcLimIEEE2.vuimax",
            "cim:UnderexcLimIEEE2.vuimin",
            "cim:UnderexcLimIEEE2.kuf",
            "cim:UnderexcLimIEEE2.kfb",
            "cim:UnderexcLimIEEE2.tul",
            "cim:UnderexcLimIEEE2.tu1",
            "cim:UnderexcLimIEEE2.tu2",
            "cim:UnderexcLimIEEE2.tu3",
            "cim:UnderexcLimIEEE2.tu4",
            "cim:UnderexcLimIEEE2.vulmax",
            "cim:UnderexcLimIEEE2.vulmin",
            "cim:UnderexcLimIEEE2.p0",
            "cim:UnderexcLimIEEE2.q0",
            "cim:UnderexcLimIEEE2.p1",
            "cim:UnderexcLimIEEE2.q1",
            "cim:UnderexcLimIEEE2.p2",
            "cim:UnderexcLimIEEE2.q2",
            "cim:UnderexcLimIEEE2.p3",
            "cim:UnderexcLimIEEE2.q3",
            "cim:UnderexcLimIEEE2.p4",
            "cim:UnderexcLimIEEE2.q4",
            "cim:UnderexcLimIEEE2.p5",
            "cim:UnderexcLimIEEE2.q5",
            "cim:UnderexcLimIEEE2.p6",
            "cim:UnderexcLimIEEE2.q6",
            "cim:UnderexcLimIEEE2.p7",
            "cim:UnderexcLimIEEE2.q7",
            "cim:UnderexcLimIEEE2.p8",
            "cim:UnderexcLimIEEE2.q8",
            "cim:UnderexcLimIEEE2.p9",
            "cim:UnderexcLimIEEE2.q9",
            "cim:UnderexcLimIEEE2.p10",
            "cim:UnderexcLimIEEE2.q10",
            "cim:UnderexcLimIEEE2.k1",
            "cim:UnderexcLimIEEE2.k2",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( UnderexcitationLimiterDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!UnderexcLimIEEE2.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class UnderexcLimIEEE2: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = UnderexcLimIEEE2.attributeHTML(object, cimmenu);
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
export default UnderexcLimIEEE2
