import templates from "../../templates/index.js"
import PowerSystemStabilizerDynamics from "./PowerSystemStabilizerDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class PssIEEE2B extends PowerSystemStabilizerDynamics {

    static attributeHTML(object, cimmenu, classType="PssIEEE2B") {
        let attributeEntries = PowerSystemStabilizerDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:PssIEEE2B.inputSignal1Type' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.inputSignal1Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.inputSignal1Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:PssIEEE2B.inputSignal1Type'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.inputSignal1Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.inputSignal1Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:PssIEEE2B.inputSignal1Type'
                                                 );
        }
        if ('cim:PssIEEE2B.inputSignal2Type' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.inputSignal2Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.inputSignal2Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:PssIEEE2B.inputSignal2Type'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.inputSignal2Type'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.inputSignal2Type'],
                                                   'cim:InputSignalKind',
                                                   'cim:PssIEEE2B.inputSignal2Type'
                                                 );
        }
        if ('cim:PssIEEE2B.vsi1max' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.vsi1max'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.vsi1max'],
                                                   'cim:PU',
                                                   'cim:PssIEEE2B.vsi1max'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.vsi1max'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.vsi1max'],
                                                   'cim:PU',
                                                   'cim:PssIEEE2B.vsi1max'
                                                 );
        }
        if ('cim:PssIEEE2B.vsi1min' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.vsi1min'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.vsi1min'],
                                                   'cim:PU',
                                                   'cim:PssIEEE2B.vsi1min'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.vsi1min'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.vsi1min'],
                                                   'cim:PU',
                                                   'cim:PssIEEE2B.vsi1min'
                                                 );
        }
        if ('cim:PssIEEE2B.tw1' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.tw1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.tw1'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.tw1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.tw1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.tw1'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.tw1'
                                                 );
        }
        if ('cim:PssIEEE2B.tw2' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.tw2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.tw2'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.tw2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.tw2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.tw2'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.tw2'
                                                 );
        }
        if ('cim:PssIEEE2B.vsi2max' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.vsi2max'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.vsi2max'],
                                                   'cim:PU',
                                                   'cim:PssIEEE2B.vsi2max'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.vsi2max'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.vsi2max'],
                                                   'cim:PU',
                                                   'cim:PssIEEE2B.vsi2max'
                                                 );
        }
        if ('cim:PssIEEE2B.vsi2min' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.vsi2min'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.vsi2min'],
                                                   'cim:PU',
                                                   'cim:PssIEEE2B.vsi2min'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.vsi2min'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.vsi2min'],
                                                   'cim:PU',
                                                   'cim:PssIEEE2B.vsi2min'
                                                 );
        }
        if ('cim:PssIEEE2B.tw3' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.tw3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.tw3'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.tw3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.tw3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.tw3'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.tw3'
                                                 );
        }
        if ('cim:PssIEEE2B.tw4' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.tw4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.tw4'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.tw4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.tw4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.tw4'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.tw4'
                                                 );
        }
        if ('cim:PssIEEE2B.t1' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t1'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t1'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t1'
                                                 );
        }
        if ('cim:PssIEEE2B.t2' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t2'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t2'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t2'
                                                 );
        }
        if ('cim:PssIEEE2B.t3' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t3'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t3'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t3'
                                                 );
        }
        if ('cim:PssIEEE2B.t4' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t4'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t4'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t4'
                                                 );
        }
        if ('cim:PssIEEE2B.t6' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t6'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t6'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t6'
                                                 );
        }
        if ('cim:PssIEEE2B.t7' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.t7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t7'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.t7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t7'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t7'
                                                 );
        }
        if ('cim:PssIEEE2B.t8' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.t8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t8'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t8'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.t8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t8'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t8'
                                                 );
        }
        if ('cim:PssIEEE2B.t9' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.t9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t9'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t9'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.t9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t9'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t9'
                                                 );
        }
        if ('cim:PssIEEE2B.t10' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.t10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t10'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t10'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.t10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t10'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t10'
                                                 );
        }
        if ('cim:PssIEEE2B.t11' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.t11'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t11'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t11'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.t11'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.t11'],
                                                   'cim:Seconds',
                                                   'cim:PssIEEE2B.t11'
                                                 );
        }
        if ('cim:PssIEEE2B.ks1' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.ks1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.ks1'],
                                                   'cim:PU',
                                                   'cim:PssIEEE2B.ks1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.ks1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.ks1'],
                                                   'cim:PU',
                                                   'cim:PssIEEE2B.ks1'
                                                 );
        }
        if ('cim:PssIEEE2B.ks2' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.ks2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.ks2'],
                                                   'cim:PU',
                                                   'cim:PssIEEE2B.ks2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.ks2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.ks2'],
                                                   'cim:PU',
                                                   'cim:PssIEEE2B.ks2'
                                                 );
        }
        if ('cim:PssIEEE2B.ks3' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.ks3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.ks3'],
                                                   'cim:PU',
                                                   'cim:PssIEEE2B.ks3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.ks3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.ks3'],
                                                   'cim:PU',
                                                   'cim:PssIEEE2B.ks3'
                                                 );
        }
        if ('cim:PssIEEE2B.n' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.n'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.n'],
                                                   'cim:Integer',
                                                   'cim:PssIEEE2B.n'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.n'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.n'],
                                                   'cim:Integer',
                                                   'cim:PssIEEE2B.n'
                                                 );
        }
        if ('cim:PssIEEE2B.m' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.m'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.m'],
                                                   'cim:Integer',
                                                   'cim:PssIEEE2B.m'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.m'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.m'],
                                                   'cim:Integer',
                                                   'cim:PssIEEE2B.m'
                                                 );
        }
        if ('cim:PssIEEE2B.vstmax' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.vstmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.vstmax'],
                                                   'cim:PU',
                                                   'cim:PssIEEE2B.vstmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.vstmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.vstmax'],
                                                   'cim:PU',
                                                   'cim:PssIEEE2B.vstmax'
                                                 );
        }
        if ('cim:PssIEEE2B.vstmin' in object) {
            attributeEntries['filledEntries']['cim:PssIEEE2B.vstmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.vstmin'],
                                                   'cim:PU',
                                                   'cim:PssIEEE2B.vstmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:PssIEEE2B.vstmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['PssIEEE2B.vstmin'],
                                                   'cim:PU',
                                                   'cim:PssIEEE2B.vstmin'
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
						'n': [CGMESProfile.shortNames.DY, ],
						'm': [CGMESProfile.shortNames.DY, ],
						'vstmax': [CGMESProfile.shortNames.DY, ],
						'vstmin': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:PssIEEE2B.inputSignal1Type",
            "cim:PssIEEE2B.inputSignal2Type",
            "cim:PssIEEE2B.vsi1max",
            "cim:PssIEEE2B.vsi1min",
            "cim:PssIEEE2B.tw1",
            "cim:PssIEEE2B.tw2",
            "cim:PssIEEE2B.vsi2max",
            "cim:PssIEEE2B.vsi2min",
            "cim:PssIEEE2B.tw3",
            "cim:PssIEEE2B.tw4",
            "cim:PssIEEE2B.t1",
            "cim:PssIEEE2B.t2",
            "cim:PssIEEE2B.t3",
            "cim:PssIEEE2B.t4",
            "cim:PssIEEE2B.t6",
            "cim:PssIEEE2B.t7",
            "cim:PssIEEE2B.t8",
            "cim:PssIEEE2B.t9",
            "cim:PssIEEE2B.t10",
            "cim:PssIEEE2B.t11",
            "cim:PssIEEE2B.ks1",
            "cim:PssIEEE2B.ks2",
            "cim:PssIEEE2B.ks3",
            "cim:PssIEEE2B.n",
            "cim:PssIEEE2B.m",
            "cim:PssIEEE2B.vstmax",
            "cim:PssIEEE2B.vstmin",
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
            if (!PssIEEE2B.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class PssIEEE2B: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = PssIEEE2B.attributeHTML(object, cimmenu);
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
export default PssIEEE2B
