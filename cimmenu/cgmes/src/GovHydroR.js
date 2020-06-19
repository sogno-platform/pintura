import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"

class GovHydroR extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovHydroR") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovHydroR.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroR.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroR.mwbase'
                                                 );
        }
        if ('cim:GovHydroR.pmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.pmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.pmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.pmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.pmax'
                                                 );
        }
        if ('cim:GovHydroR.pmin' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.pmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.pmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.pmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.pmin'
                                                 );
        }
        if ('cim:GovHydroR.r' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.r'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.r'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.r'
                                                 );
        }
        if ('cim:GovHydroR.td' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.td'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.td'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.td'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.td'
                                                 );
        }
        if ('cim:GovHydroR.t1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.t1'
                                                 );
        }
        if ('cim:GovHydroR.t2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.t2'
                                                 );
        }
        if ('cim:GovHydroR.t3' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.t3'
                                                 );
        }
        if ('cim:GovHydroR.t4' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.t4'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.t4'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.t4'
                                                 );
        }
        if ('cim:GovHydroR.t5' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.t5'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.t5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.t5'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.t5'
                                                 );
        }
        if ('cim:GovHydroR.t6' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.t6'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.t6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.t6'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.t6'
                                                 );
        }
        if ('cim:GovHydroR.t7' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.t7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.t7'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.t7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.t7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.t7'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.t7'
                                                 );
        }
        if ('cim:GovHydroR.t8' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.t8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.t8'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.t8'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.t8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.t8'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.t8'
                                                 );
        }
        if ('cim:GovHydroR.tp' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.tp'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.tp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.tp'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.tp'
                                                 );
        }
        if ('cim:GovHydroR.velop' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.velop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.velop'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroR.velop'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.velop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.velop'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroR.velop'
                                                 );
        }
        if ('cim:GovHydroR.velcl' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.velcl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.velcl'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroR.velcl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.velcl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.velcl'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroR.velcl'
                                                 );
        }
        if ('cim:GovHydroR.ki' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.ki'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.ki'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.ki'
                                                 );
        }
        if ('cim:GovHydroR.kg' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.kg'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.kg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.kg'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.kg'
                                                 );
        }
        if ('cim:GovHydroR.gmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.gmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.gmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.gmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.gmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.gmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.gmax'
                                                 );
        }
        if ('cim:GovHydroR.gmin' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.gmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.gmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.gmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.gmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.gmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.gmin'
                                                 );
        }
        if ('cim:GovHydroR.tt' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.tt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.tt'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.tt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.tt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.tt'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.tt'
                                                 );
        }
        if ('cim:GovHydroR.inputSignal' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.inputSignal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.inputSignal'],
                                                   'cim:Boolean',
                                                   'cim:GovHydroR.inputSignal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.inputSignal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.inputSignal'],
                                                   'cim:Boolean',
                                                   'cim:GovHydroR.inputSignal'
                                                 );
        }
        if ('cim:GovHydroR.db1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovHydroR.db1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovHydroR.db1'
                                                 );
        }
        if ('cim:GovHydroR.eps' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.eps'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.eps'],
                                                   'cim:Frequency',
                                                   'cim:GovHydroR.eps'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.eps'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.eps'],
                                                   'cim:Frequency',
                                                   'cim:GovHydroR.eps'
                                                 );
        }
        if ('cim:GovHydroR.db2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.db2'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroR.db2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.db2'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroR.db2'
                                                 );
        }
        if ('cim:GovHydroR.tw' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.tw'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroR.tw'
                                                 );
        }
        if ('cim:GovHydroR.at' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.at'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.at'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.at'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.at'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.at'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.at'
                                                 );
        }
        if ('cim:GovHydroR.dturb' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.dturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.dturb'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.dturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.dturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.dturb'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.dturb'
                                                 );
        }
        if ('cim:GovHydroR.qnl' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.qnl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.qnl'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.qnl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.qnl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.qnl'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.qnl'
                                                 );
        }
        if ('cim:GovHydroR.h0' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.h0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.h0'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.h0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.h0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.h0'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.h0'
                                                 );
        }
        if ('cim:GovHydroR.gv1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.gv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.gv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.gv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.gv1'
                                                 );
        }
        if ('cim:GovHydroR.pgv1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.pgv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.pgv1'
                                                 );
        }
        if ('cim:GovHydroR.gv2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.gv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.gv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.gv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.gv2'
                                                 );
        }
        if ('cim:GovHydroR.pgv2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.pgv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.pgv2'
                                                 );
        }
        if ('cim:GovHydroR.gv3' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.gv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.gv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.gv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.gv3'
                                                 );
        }
        if ('cim:GovHydroR.pgv3' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.pgv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.pgv3'
                                                 );
        }
        if ('cim:GovHydroR.gv4' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.gv4'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.gv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.gv4'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.gv4'
                                                 );
        }
        if ('cim:GovHydroR.pgv4' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.pgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.pgv4'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.pgv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.pgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.pgv4'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.pgv4'
                                                 );
        }
        if ('cim:GovHydroR.gv5' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.gv5'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.gv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.gv5'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.gv5'
                                                 );
        }
        if ('cim:GovHydroR.pgv5' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.pgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.pgv5'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.pgv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.pgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.pgv5'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.pgv5'
                                                 );
        }
        if ('cim:GovHydroR.gv6' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.gv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.gv6'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.gv6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.gv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.gv6'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.gv6'
                                                 );
        }
        if ('cim:GovHydroR.pgv6' in object) {
            attributeEntries['filledEntries']['cim:GovHydroR.pgv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.pgv6'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.pgv6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroR.pgv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroR.pgv6'],
                                                   'cim:PU',
                                                   'cim:GovHydroR.pgv6'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovHydroR.mwbase",
            "cim:GovHydroR.pmax",
            "cim:GovHydroR.pmin",
            "cim:GovHydroR.r",
            "cim:GovHydroR.td",
            "cim:GovHydroR.t1",
            "cim:GovHydroR.t2",
            "cim:GovHydroR.t3",
            "cim:GovHydroR.t4",
            "cim:GovHydroR.t5",
            "cim:GovHydroR.t6",
            "cim:GovHydroR.t7",
            "cim:GovHydroR.t8",
            "cim:GovHydroR.tp",
            "cim:GovHydroR.velop",
            "cim:GovHydroR.velcl",
            "cim:GovHydroR.ki",
            "cim:GovHydroR.kg",
            "cim:GovHydroR.gmax",
            "cim:GovHydroR.gmin",
            "cim:GovHydroR.tt",
            "cim:GovHydroR.inputSignal",
            "cim:GovHydroR.db1",
            "cim:GovHydroR.eps",
            "cim:GovHydroR.db2",
            "cim:GovHydroR.tw",
            "cim:GovHydroR.at",
            "cim:GovHydroR.dturb",
            "cim:GovHydroR.qnl",
            "cim:GovHydroR.h0",
            "cim:GovHydroR.gv1",
            "cim:GovHydroR.pgv1",
            "cim:GovHydroR.gv2",
            "cim:GovHydroR.pgv2",
            "cim:GovHydroR.gv3",
            "cim:GovHydroR.pgv3",
            "cim:GovHydroR.gv4",
            "cim:GovHydroR.pgv4",
            "cim:GovHydroR.gv5",
            "cim:GovHydroR.pgv5",
            "cim:GovHydroR.gv6",
            "cim:GovHydroR.pgv6",
        ];
        if ( attribute.substr(0,8) == "pintura:") {
            return true;
        }
        if ( attributes.indexOf(attribute) >= 0 ) {
            return true;
        }
        else if ( TurbineGovernorDynamics.isMemberAttribute(attribute) ) {
            return true;
        }
        else {
            return false;
        }
    }

    static read(object) {
        Object.keys(object).forEach((attribute) => {
            if (!GovHydroR.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovHydroR: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovHydroR.attributeHTML(object, cimmenu);
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
export default GovHydroR
