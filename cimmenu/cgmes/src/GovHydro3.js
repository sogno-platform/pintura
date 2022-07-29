import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovHydro3 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovHydro3") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovHydro3.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydro3.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydro3.mwbase'
                                                 );
        }
        if ('cim:GovHydro3.pmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.pmax'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.pmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.pmax'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.pmax'
                                                 );
        }
        if ('cim:GovHydro3.pmin' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.pmin'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.pmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.pmin'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.pmin'
                                                 );
        }
        if ('cim:GovHydro3.governorControl' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.governorControl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.governorControl'],
                                                   'cim:Boolean',
                                                   'cim:GovHydro3.governorControl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.governorControl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.governorControl'],
                                                   'cim:Boolean',
                                                   'cim:GovHydro3.governorControl'
                                                 );
        }
        if ('cim:GovHydro3.rgate' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.rgate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.rgate'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.rgate'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.rgate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.rgate'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.rgate'
                                                 );
        }
        if ('cim:GovHydro3.relec' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.relec'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.relec'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.relec'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.relec'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.relec'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.relec'
                                                 );
        }
        if ('cim:GovHydro3.td' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.td'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro3.td'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.td'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro3.td'
                                                 );
        }
        if ('cim:GovHydro3.tf' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.tf'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro3.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.tf'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro3.tf'
                                                 );
        }
        if ('cim:GovHydro3.tp' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.tp'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro3.tp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.tp'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro3.tp'
                                                 );
        }
        if ('cim:GovHydro3.velop' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.velop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.velop'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydro3.velop'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.velop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.velop'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydro3.velop'
                                                 );
        }
        if ('cim:GovHydro3.velcl' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.velcl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.velcl'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydro3.velcl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.velcl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.velcl'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydro3.velcl'
                                                 );
        }
        if ('cim:GovHydro3.k1' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.k1'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.k1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.k1'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.k1'
                                                 );
        }
        if ('cim:GovHydro3.k2' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.k2'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.k2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.k2'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.k2'
                                                 );
        }
        if ('cim:GovHydro3.ki' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.ki'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.ki'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.ki'
                                                 );
        }
        if ('cim:GovHydro3.kg' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.kg'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.kg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.kg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.kg'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.kg'
                                                 );
        }
        if ('cim:GovHydro3.tt' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.tt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.tt'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro3.tt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.tt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.tt'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro3.tt'
                                                 );
        }
        if ('cim:GovHydro3.db1' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovHydro3.db1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovHydro3.db1'
                                                 );
        }
        if ('cim:GovHydro3.eps' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.eps'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.eps'],
                                                   'cim:Frequency',
                                                   'cim:GovHydro3.eps'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.eps'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.eps'],
                                                   'cim:Frequency',
                                                   'cim:GovHydro3.eps'
                                                 );
        }
        if ('cim:GovHydro3.db2' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.db2'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydro3.db2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.db2'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydro3.db2'
                                                 );
        }
        if ('cim:GovHydro3.tw' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro3.tw'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro3.tw'
                                                 );
        }
        if ('cim:GovHydro3.at' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.at'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.at'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.at'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.at'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.at'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.at'
                                                 );
        }
        if ('cim:GovHydro3.dturb' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.dturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.dturb'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.dturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.dturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.dturb'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.dturb'
                                                 );
        }
        if ('cim:GovHydro3.qnl' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.qnl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.qnl'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.qnl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.qnl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.qnl'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.qnl'
                                                 );
        }
        if ('cim:GovHydro3.h0' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.h0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.h0'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.h0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.h0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.h0'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.h0'
                                                 );
        }
        if ('cim:GovHydro3.gv1' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.gv1'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.gv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.gv1'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.gv1'
                                                 );
        }
        if ('cim:GovHydro3.pgv1' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.pgv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.pgv1'
                                                 );
        }
        if ('cim:GovHydro3.gv2' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.gv2'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.gv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.gv2'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.gv2'
                                                 );
        }
        if ('cim:GovHydro3.pgv2' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.pgv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.pgv2'
                                                 );
        }
        if ('cim:GovHydro3.gv3' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.gv3'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.gv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.gv3'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.gv3'
                                                 );
        }
        if ('cim:GovHydro3.pgv3' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.pgv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.pgv3'
                                                 );
        }
        if ('cim:GovHydro3.gv4' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.gv4'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.gv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.gv4'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.gv4'
                                                 );
        }
        if ('cim:GovHydro3.pgv4' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.pgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.pgv4'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.pgv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.pgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.pgv4'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.pgv4'
                                                 );
        }
        if ('cim:GovHydro3.gv5' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.gv5'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.gv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.gv5'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.gv5'
                                                 );
        }
        if ('cim:GovHydro3.pgv5' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.pgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.pgv5'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.pgv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.pgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.pgv5'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.pgv5'
                                                 );
        }
        if ('cim:GovHydro3.gv6' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.gv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.gv6'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.gv6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.gv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.gv6'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.gv6'
                                                 );
        }
        if ('cim:GovHydro3.pgv6' in object) {
            attributeEntries['filledEntries']['cim:GovHydro3.pgv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.pgv6'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.pgv6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro3.pgv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro3.pgv6'],
                                                   'cim:PU',
                                                   'cim:GovHydro3.pgv6'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'mwbase': [CGMESProfile.shortNames.DY, ],
						'pmax': [CGMESProfile.shortNames.DY, ],
						'pmin': [CGMESProfile.shortNames.DY, ],
						'governorControl': [CGMESProfile.shortNames.DY, ],
						'rgate': [CGMESProfile.shortNames.DY, ],
						'relec': [CGMESProfile.shortNames.DY, ],
						'td': [CGMESProfile.shortNames.DY, ],
						'tf': [CGMESProfile.shortNames.DY, ],
						'tp': [CGMESProfile.shortNames.DY, ],
						'velop': [CGMESProfile.shortNames.DY, ],
						'velcl': [CGMESProfile.shortNames.DY, ],
						'k1': [CGMESProfile.shortNames.DY, ],
						'k2': [CGMESProfile.shortNames.DY, ],
						'ki': [CGMESProfile.shortNames.DY, ],
						'kg': [CGMESProfile.shortNames.DY, ],
						'tt': [CGMESProfile.shortNames.DY, ],
						'db1': [CGMESProfile.shortNames.DY, ],
						'eps': [CGMESProfile.shortNames.DY, ],
						'db2': [CGMESProfile.shortNames.DY, ],
						'tw': [CGMESProfile.shortNames.DY, ],
						'at': [CGMESProfile.shortNames.DY, ],
						'dturb': [CGMESProfile.shortNames.DY, ],
						'qnl': [CGMESProfile.shortNames.DY, ],
						'h0': [CGMESProfile.shortNames.DY, ],
						'gv1': [CGMESProfile.shortNames.DY, ],
						'pgv1': [CGMESProfile.shortNames.DY, ],
						'gv2': [CGMESProfile.shortNames.DY, ],
						'pgv2': [CGMESProfile.shortNames.DY, ],
						'gv3': [CGMESProfile.shortNames.DY, ],
						'pgv3': [CGMESProfile.shortNames.DY, ],
						'gv4': [CGMESProfile.shortNames.DY, ],
						'pgv4': [CGMESProfile.shortNames.DY, ],
						'gv5': [CGMESProfile.shortNames.DY, ],
						'pgv5': [CGMESProfile.shortNames.DY, ],
						'gv6': [CGMESProfile.shortNames.DY, ],
						'pgv6': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovHydro3.mwbase",
            "cim:GovHydro3.pmax",
            "cim:GovHydro3.pmin",
            "cim:GovHydro3.governorControl",
            "cim:GovHydro3.rgate",
            "cim:GovHydro3.relec",
            "cim:GovHydro3.td",
            "cim:GovHydro3.tf",
            "cim:GovHydro3.tp",
            "cim:GovHydro3.velop",
            "cim:GovHydro3.velcl",
            "cim:GovHydro3.k1",
            "cim:GovHydro3.k2",
            "cim:GovHydro3.ki",
            "cim:GovHydro3.kg",
            "cim:GovHydro3.tt",
            "cim:GovHydro3.db1",
            "cim:GovHydro3.eps",
            "cim:GovHydro3.db2",
            "cim:GovHydro3.tw",
            "cim:GovHydro3.at",
            "cim:GovHydro3.dturb",
            "cim:GovHydro3.qnl",
            "cim:GovHydro3.h0",
            "cim:GovHydro3.gv1",
            "cim:GovHydro3.pgv1",
            "cim:GovHydro3.gv2",
            "cim:GovHydro3.pgv2",
            "cim:GovHydro3.gv3",
            "cim:GovHydro3.pgv3",
            "cim:GovHydro3.gv4",
            "cim:GovHydro3.pgv4",
            "cim:GovHydro3.gv5",
            "cim:GovHydro3.pgv5",
            "cim:GovHydro3.gv6",
            "cim:GovHydro3.pgv6",
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
            if (!GovHydro3.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovHydro3: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovHydro3.attributeHTML(object, cimmenu);
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
export default GovHydro3
