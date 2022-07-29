import templates from "../../templates/index.js"
import PowerSystemStabilizerDynamics from "./PowerSystemStabilizerDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class Pss2B extends PowerSystemStabilizerDynamics {

    static attributeHTML(object, cimmenu, classType="Pss2B") {
        let attributeEntries = PowerSystemStabilizerDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:Pss2B.inputSignal1Type' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.inputSignal1Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.inputSignal1Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:Pss2B.inputSignal1Type'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.inputSignal1Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.inputSignal1Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:Pss2B.inputSignal1Type'
                                                 );
        }
        if ('cim:Pss2B.inputSignal2Type' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.inputSignal2Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.inputSignal2Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:Pss2B.inputSignal2Type'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.inputSignal2Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.inputSignal2Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:Pss2B.inputSignal2Type'
                                                 );
        }
        if ('cim:Pss2B.vsi1max' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.vsi1max'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.vsi1max'],
                                                   'cim:PU',
                                                   'cim:Pss2B.vsi1max'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.vsi1max'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.vsi1max'],
                                                   'cim:PU',
                                                   'cim:Pss2B.vsi1max'
                                                 );
        }
        if ('cim:Pss2B.vsi1min' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.vsi1min'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.vsi1min'],
                                                   'cim:PU',
                                                   'cim:Pss2B.vsi1min'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.vsi1min'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.vsi1min'],
                                                   'cim:PU',
                                                   'cim:Pss2B.vsi1min'
                                                 );
        }
        if ('cim:Pss2B.tw1' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.tw1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.tw1'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.tw1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.tw1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.tw1'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.tw1'
                                                 );
        }
        if ('cim:Pss2B.tw2' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.tw2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.tw2'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.tw2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.tw2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.tw2'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.tw2'
                                                 );
        }
        if ('cim:Pss2B.vsi2max' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.vsi2max'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.vsi2max'],
                                                   'cim:PU',
                                                   'cim:Pss2B.vsi2max'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.vsi2max'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.vsi2max'],
                                                   'cim:PU',
                                                   'cim:Pss2B.vsi2max'
                                                 );
        }
        if ('cim:Pss2B.vsi2min' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.vsi2min'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.vsi2min'],
                                                   'cim:PU',
                                                   'cim:Pss2B.vsi2min'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.vsi2min'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.vsi2min'],
                                                   'cim:PU',
                                                   'cim:Pss2B.vsi2min'
                                                 );
        }
        if ('cim:Pss2B.tw3' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.tw3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.tw3'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.tw3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.tw3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.tw3'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.tw3'
                                                 );
        }
        if ('cim:Pss2B.tw4' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.tw4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.tw4'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.tw4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.tw4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.tw4'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.tw4'
                                                 );
        }
        if ('cim:Pss2B.t1' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t1'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t1'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t1'
                                                 );
        }
        if ('cim:Pss2B.t2' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t2'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t2'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t2'
                                                 );
        }
        if ('cim:Pss2B.t3' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t3'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t3'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t3'
                                                 );
        }
        if ('cim:Pss2B.t4' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t4'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t4'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t4'
                                                 );
        }
        if ('cim:Pss2B.t6' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t6'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t6'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t6'
                                                 );
        }
        if ('cim:Pss2B.t7' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.t7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t7'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.t7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t7'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t7'
                                                 );
        }
        if ('cim:Pss2B.t8' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.t8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t8'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t8'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.t8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t8'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t8'
                                                 );
        }
        if ('cim:Pss2B.t9' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.t9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t9'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t9'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.t9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t9'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t9'
                                                 );
        }
        if ('cim:Pss2B.t10' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.t10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t10'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t10'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.t10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t10'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t10'
                                                 );
        }
        if ('cim:Pss2B.t11' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.t11'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t11'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t11'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.t11'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.t11'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.t11'
                                                 );
        }
        if ('cim:Pss2B.ks1' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.ks1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.ks1'],
                                                   'cim:PU',
                                                   'cim:Pss2B.ks1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.ks1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.ks1'],
                                                   'cim:PU',
                                                   'cim:Pss2B.ks1'
                                                 );
        }
        if ('cim:Pss2B.ks2' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.ks2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.ks2'],
                                                   'cim:PU',
                                                   'cim:Pss2B.ks2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.ks2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.ks2'],
                                                   'cim:PU',
                                                   'cim:Pss2B.ks2'
                                                 );
        }
        if ('cim:Pss2B.ks3' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.ks3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.ks3'],
                                                   'cim:PU',
                                                   'cim:Pss2B.ks3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.ks3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.ks3'],
                                                   'cim:PU',
                                                   'cim:Pss2B.ks3'
                                                 );
        }
        if ('cim:Pss2B.ks4' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.ks4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.ks4'],
                                                   'cim:PU',
                                                   'cim:Pss2B.ks4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.ks4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.ks4'],
                                                   'cim:PU',
                                                   'cim:Pss2B.ks4'
                                                 );
        }
        if ('cim:Pss2B.n' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.n'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.n'],
                                                   'cim:Integer',
                                                   'cim:Pss2B.n'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.n'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.n'],
                                                   'cim:Integer',
                                                   'cim:Pss2B.n'
                                                 );
        }
        if ('cim:Pss2B.m' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.m'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.m'],
                                                   'cim:Integer',
                                                   'cim:Pss2B.m'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.m'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.m'],
                                                   'cim:Integer',
                                                   'cim:Pss2B.m'
                                                 );
        }
        if ('cim:Pss2B.vstmax' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.vstmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.vstmax'],
                                                   'cim:PU',
                                                   'cim:Pss2B.vstmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.vstmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.vstmax'],
                                                   'cim:PU',
                                                   'cim:Pss2B.vstmax'
                                                 );
        }
        if ('cim:Pss2B.vstmin' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.vstmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.vstmin'],
                                                   'cim:PU',
                                                   'cim:Pss2B.vstmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.vstmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.vstmin'],
                                                   'cim:PU',
                                                   'cim:Pss2B.vstmin'
                                                 );
        }
        if ('cim:Pss2B.a' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.a'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.a'],
                                                   'cim:Simple_Float',
                                                   'cim:Pss2B.a'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.a'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.a'],
                                                   'cim:Simple_Float',
                                                   'cim:Pss2B.a'
                                                 );
        }
        if ('cim:Pss2B.ta' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.ta'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.ta'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.ta'
                                                 );
        }
        if ('cim:Pss2B.tb' in object) {
            attributeEntries['filledEntries']['cim:Pss2B.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.tb'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:Pss2B.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['Pss2B.tb'],
                                                   'cim:Seconds',
                                                   'cim:Pss2B.tb'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'inputSignal1Type': [CGMESProfile.shortNames.DY, ],
						'inputSignal2Type': [CGMESProfile.shortNames.DY, ],
						'vsi1max': [CGMESProfile.shortNames.DY, ],
						'vsi1min': [CGMESProfile.shortNames.DY, ],
						'tw1': [CGMESProfile.shortNames.DY, ],
						'tw2': [CGMESProfile.shortNames.DY, ],
						'vsi2max': [CGMESProfile.shortNames.DY, ],
						'vsi2min': [CGMESProfile.shortNames.DY, ],
						'tw3': [CGMESProfile.shortNames.DY, ],
						'tw4': [CGMESProfile.shortNames.DY, ],
						't1': [CGMESProfile.shortNames.DY, ],
						't2': [CGMESProfile.shortNames.DY, ],
						't3': [CGMESProfile.shortNames.DY, ],
						't4': [CGMESProfile.shortNames.DY, ],
						't6': [CGMESProfile.shortNames.DY, ],
						't7': [CGMESProfile.shortNames.DY, ],
						't8': [CGMESProfile.shortNames.DY, ],
						't9': [CGMESProfile.shortNames.DY, ],
						't10': [CGMESProfile.shortNames.DY, ],
						't11': [CGMESProfile.shortNames.DY, ],
						'ks1': [CGMESProfile.shortNames.DY, ],
						'ks2': [CGMESProfile.shortNames.DY, ],
						'ks3': [CGMESProfile.shortNames.DY, ],
						'ks4': [CGMESProfile.shortNames.DY, ],
						'n': [CGMESProfile.shortNames.DY, ],
						'm': [CGMESProfile.shortNames.DY, ],
						'vstmax': [CGMESProfile.shortNames.DY, ],
						'vstmin': [CGMESProfile.shortNames.DY, ],
						'a': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'tb': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:Pss2B.inputSignal1Type",
            "cim:Pss2B.inputSignal2Type",
            "cim:Pss2B.vsi1max",
            "cim:Pss2B.vsi1min",
            "cim:Pss2B.tw1",
            "cim:Pss2B.tw2",
            "cim:Pss2B.vsi2max",
            "cim:Pss2B.vsi2min",
            "cim:Pss2B.tw3",
            "cim:Pss2B.tw4",
            "cim:Pss2B.t1",
            "cim:Pss2B.t2",
            "cim:Pss2B.t3",
            "cim:Pss2B.t4",
            "cim:Pss2B.t6",
            "cim:Pss2B.t7",
            "cim:Pss2B.t8",
            "cim:Pss2B.t9",
            "cim:Pss2B.t10",
            "cim:Pss2B.t11",
            "cim:Pss2B.ks1",
            "cim:Pss2B.ks2",
            "cim:Pss2B.ks3",
            "cim:Pss2B.ks4",
            "cim:Pss2B.n",
            "cim:Pss2B.m",
            "cim:Pss2B.vstmax",
            "cim:Pss2B.vstmin",
            "cim:Pss2B.a",
            "cim:Pss2B.ta",
            "cim:Pss2B.tb",
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
            if (!Pss2B.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class Pss2B: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = Pss2B.attributeHTML(object, cimmenu);
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
export default Pss2B
