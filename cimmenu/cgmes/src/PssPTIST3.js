import templates from "../../templates/index.js"
import PowerSystemStabilizerDynamics from "./PowerSystemStabilizerDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PssPTIST3 extends PowerSystemStabilizerDynamics {

    static attributeHTML(object, cimmenu, classType="PssPTIST3") {
        let attributeEntries = PowerSystemStabilizerDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:PssPTIST3.m' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.m'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.m'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.m'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.m'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.m'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.m'
                                                 );
        }
        if ('cim:PssPTIST3.tf' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.tf'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.tf'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.tf'
                                                 );
        }
        if ('cim:PssPTIST3.tp' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.tp'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.tp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.tp'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.tp'
                                                 );
        }
        if ('cim:PssPTIST3.t1' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.t1'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.t1'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.t1'
                                                 );
        }
        if ('cim:PssPTIST3.t2' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.t2'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.t2'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.t2'
                                                 );
        }
        if ('cim:PssPTIST3.t3' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.t3'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.t3'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.t3'
                                                 );
        }
        if ('cim:PssPTIST3.t4' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.t4'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.t4'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.t4'
                                                 );
        }
        if ('cim:PssPTIST3.k' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.k'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.k'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.k'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.k'
                                                 );
        }
        if ('cim:PssPTIST3.dtf' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.dtf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.dtf'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.dtf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.dtf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.dtf'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.dtf'
                                                 );
        }
        if ('cim:PssPTIST3.dtc' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.dtc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.dtc'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.dtc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.dtc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.dtc'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.dtc'
                                                 );
        }
        if ('cim:PssPTIST3.dtp' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.dtp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.dtp'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.dtp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.dtp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.dtp'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.dtp'
                                                 );
        }
        if ('cim:PssPTIST3.t5' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.t5'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.t5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.t5'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.t5'
                                                 );
        }
        if ('cim:PssPTIST3.t6' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.t6'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.t6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.t6'],
                                                   'cim:Seconds',
                                                   'cim:PssPTIST3.t6'
                                                 );
        }
        if ('cim:PssPTIST3.a0' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.a0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.a0'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.a0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.a0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.a0'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.a0'
                                                 );
        }
        if ('cim:PssPTIST3.a1' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.a1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.a1'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.a1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.a1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.a1'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.a1'
                                                 );
        }
        if ('cim:PssPTIST3.a2' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.a2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.a2'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.a2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.a2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.a2'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.a2'
                                                 );
        }
        if ('cim:PssPTIST3.b0' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.b0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.b0'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.b0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.b0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.b0'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.b0'
                                                 );
        }
        if ('cim:PssPTIST3.b1' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.b1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.b1'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.b1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.b1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.b1'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.b1'
                                                 );
        }
        if ('cim:PssPTIST3.b2' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.b2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.b2'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.b2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.b2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.b2'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.b2'
                                                 );
        }
        if ('cim:PssPTIST3.a3' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.a3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.a3'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.a3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.a3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.a3'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.a3'
                                                 );
        }
        if ('cim:PssPTIST3.a4' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.a4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.a4'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.a4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.a4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.a4'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.a4'
                                                 );
        }
        if ('cim:PssPTIST3.a5' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.a5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.a5'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.a5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.a5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.a5'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.a5'
                                                 );
        }
        if ('cim:PssPTIST3.b3' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.b3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.b3'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.b3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.b3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.b3'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.b3'
                                                 );
        }
        if ('cim:PssPTIST3.b4' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.b4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.b4'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.b4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.b4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.b4'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.b4'
                                                 );
        }
        if ('cim:PssPTIST3.b5' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.b5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.b5'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.b5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.b5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.b5'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.b5'
                                                 );
        }
        if ('cim:PssPTIST3.athres' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.athres'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.athres'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.athres'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.athres'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.athres'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.athres'
                                                 );
        }
        if ('cim:PssPTIST3.dl' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.dl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.dl'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.dl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.dl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.dl'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.dl'
                                                 );
        }
        if ('cim:PssPTIST3.al' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.al'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.al'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.al'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.al'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.al'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.al'
                                                 );
        }
        if ('cim:PssPTIST3.lthres' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.lthres'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.lthres'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.lthres'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.lthres'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.lthres'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.lthres'
                                                 );
        }
        if ('cim:PssPTIST3.pmin' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.pmin'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.pmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.pmin'],
                                                   'cim:PU',
                                                   'cim:PssPTIST3.pmin'
                                                 );
        }
        if ('cim:PssPTIST3.isw' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.isw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.isw'],
                                                   'cim:Boolean',
                                                   'cim:PssPTIST3.isw'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.isw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.isw'],
                                                   'cim:Boolean',
                                                   'cim:PssPTIST3.isw'
                                                 );
        }
        if ('cim:PssPTIST3.nav' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.nav'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.nav'],
                                                   'cim:Simple_Float',
                                                   'cim:PssPTIST3.nav'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.nav'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.nav'],
                                                   'cim:Simple_Float',
                                                   'cim:PssPTIST3.nav'
                                                 );
        }
        if ('cim:PssPTIST3.ncl' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.ncl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.ncl'],
                                                   'cim:Simple_Float',
                                                   'cim:PssPTIST3.ncl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.ncl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.ncl'],
                                                   'cim:Simple_Float',
                                                   'cim:PssPTIST3.ncl'
                                                 );
        }
        if ('cim:PssPTIST3.ncr' in object) {
            attributeEntries['filledEntries']['cim:PssPTIST3.ncr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.ncr'],
                                                   'cim:Simple_Float',
                                                   'cim:PssPTIST3.ncr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssPTIST3.ncr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssPTIST3.ncr'],
                                                   'cim:Simple_Float',
                                                   'cim:PssPTIST3.ncr'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'm': [CGMESProfile.shortNames.DY, ],
						'tf': [CGMESProfile.shortNames.DY, ],
						'tp': [CGMESProfile.shortNames.DY, ],
						't1': [CGMESProfile.shortNames.DY, ],
						't2': [CGMESProfile.shortNames.DY, ],
						't3': [CGMESProfile.shortNames.DY, ],
						't4': [CGMESProfile.shortNames.DY, ],
						'k': [CGMESProfile.shortNames.DY, ],
						'dtf': [CGMESProfile.shortNames.DY, ],
						'dtc': [CGMESProfile.shortNames.DY, ],
						'dtp': [CGMESProfile.shortNames.DY, ],
						't5': [CGMESProfile.shortNames.DY, ],
						't6': [CGMESProfile.shortNames.DY, ],
						'a0': [CGMESProfile.shortNames.DY, ],
						'a1': [CGMESProfile.shortNames.DY, ],
						'a2': [CGMESProfile.shortNames.DY, ],
						'b0': [CGMESProfile.shortNames.DY, ],
						'b1': [CGMESProfile.shortNames.DY, ],
						'b2': [CGMESProfile.shortNames.DY, ],
						'a3': [CGMESProfile.shortNames.DY, ],
						'a4': [CGMESProfile.shortNames.DY, ],
						'a5': [CGMESProfile.shortNames.DY, ],
						'b3': [CGMESProfile.shortNames.DY, ],
						'b4': [CGMESProfile.shortNames.DY, ],
						'b5': [CGMESProfile.shortNames.DY, ],
						'athres': [CGMESProfile.shortNames.DY, ],
						'dl': [CGMESProfile.shortNames.DY, ],
						'al': [CGMESProfile.shortNames.DY, ],
						'lthres': [CGMESProfile.shortNames.DY, ],
						'pmin': [CGMESProfile.shortNames.DY, ],
						'isw': [CGMESProfile.shortNames.DY, ],
						'nav': [CGMESProfile.shortNames.DY, ],
						'ncl': [CGMESProfile.shortNames.DY, ],
						'ncr': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PssPTIST3.m",
            "cim:PssPTIST3.tf",
            "cim:PssPTIST3.tp",
            "cim:PssPTIST3.t1",
            "cim:PssPTIST3.t2",
            "cim:PssPTIST3.t3",
            "cim:PssPTIST3.t4",
            "cim:PssPTIST3.k",
            "cim:PssPTIST3.dtf",
            "cim:PssPTIST3.dtc",
            "cim:PssPTIST3.dtp",
            "cim:PssPTIST3.t5",
            "cim:PssPTIST3.t6",
            "cim:PssPTIST3.a0",
            "cim:PssPTIST3.a1",
            "cim:PssPTIST3.a2",
            "cim:PssPTIST3.b0",
            "cim:PssPTIST3.b1",
            "cim:PssPTIST3.b2",
            "cim:PssPTIST3.a3",
            "cim:PssPTIST3.a4",
            "cim:PssPTIST3.a5",
            "cim:PssPTIST3.b3",
            "cim:PssPTIST3.b4",
            "cim:PssPTIST3.b5",
            "cim:PssPTIST3.athres",
            "cim:PssPTIST3.dl",
            "cim:PssPTIST3.al",
            "cim:PssPTIST3.lthres",
            "cim:PssPTIST3.pmin",
            "cim:PssPTIST3.isw",
            "cim:PssPTIST3.nav",
            "cim:PssPTIST3.ncl",
            "cim:PssPTIST3.ncr",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( PowerSystemStabilizerDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!PssPTIST3.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class PssPTIST3: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PssPTIST3.attributeHTML(object, cimmenu);
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
export default PssPTIST3
