import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovHydroWEH extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovHydroWEH") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovHydroWEH.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroWEH.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroWEH.mwbase'
                                                 );
        }
        if ('cim:GovHydroWEH.rpg' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.rpg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.rpg'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroWEH.rpg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.rpg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.rpg'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroWEH.rpg'
                                                 );
        }
        if ('cim:GovHydroWEH.rpp' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.rpp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.rpp'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroWEH.rpp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.rpp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.rpp'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroWEH.rpp'
                                                 );
        }
        if ('cim:GovHydroWEH.tpe' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.tpe'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.tpe'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWEH.tpe'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.tpe'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.tpe'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWEH.tpe'
                                                 );
        }
        if ('cim:GovHydroWEH.kp' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.kp'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.kp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.kp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.kp'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.kp'
                                                 );
        }
        if ('cim:GovHydroWEH.ki' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.ki'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.ki'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.ki'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.ki'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.ki'
                                                 );
        }
        if ('cim:GovHydroWEH.kd' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.kd'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.kd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.kd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.kd'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.kd'
                                                 );
        }
        if ('cim:GovHydroWEH.td' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.td'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWEH.td'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.td'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.td'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWEH.td'
                                                 );
        }
        if ('cim:GovHydroWEH.tp' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.tp'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWEH.tp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.tp'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWEH.tp'
                                                 );
        }
        if ('cim:GovHydroWEH.tdv' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.tdv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.tdv'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWEH.tdv'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.tdv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.tdv'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWEH.tdv'
                                                 );
        }
        if ('cim:GovHydroWEH.tg' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.tg'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWEH.tg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.tg'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWEH.tg'
                                                 );
        }
        if ('cim:GovHydroWEH.gtmxop' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.gtmxop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.gtmxop'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.gtmxop'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.gtmxop'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.gtmxop'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.gtmxop'
                                                 );
        }
        if ('cim:GovHydroWEH.gtmxcl' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.gtmxcl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.gtmxcl'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.gtmxcl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.gtmxcl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.gtmxcl'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.gtmxcl'
                                                 );
        }
        if ('cim:GovHydroWEH.gmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.gmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.gmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.gmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.gmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.gmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.gmax'
                                                 );
        }
        if ('cim:GovHydroWEH.gmin' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.gmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.gmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.gmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.gmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.gmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.gmin'
                                                 );
        }
        if ('cim:GovHydroWEH.dturb' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.dturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.dturb'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.dturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.dturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.dturb'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.dturb'
                                                 );
        }
        if ('cim:GovHydroWEH.tw' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWEH.tw'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroWEH.tw'
                                                 );
        }
        if ('cim:GovHydroWEH.db' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.db'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.db'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.db'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.db'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.db'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.db'
                                                 );
        }
        if ('cim:GovHydroWEH.dpv' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.dpv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.dpv'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.dpv'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.dpv'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.dpv'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.dpv'
                                                 );
        }
        if ('cim:GovHydroWEH.dicn' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.dicn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.dicn'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.dicn'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.dicn'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.dicn'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.dicn'
                                                 );
        }
        if ('cim:GovHydroWEH.feedbackSignal' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.feedbackSignal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.feedbackSignal'],
                                                   'cim:Boolean',
                                                   'cim:GovHydroWEH.feedbackSignal'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.feedbackSignal'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.feedbackSignal'],
                                                   'cim:Boolean',
                                                   'cim:GovHydroWEH.feedbackSignal'
                                                 );
        }
        if ('cim:GovHydroWEH.gv1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.gv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.gv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.gv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.gv1'
                                                 );
        }
        if ('cim:GovHydroWEH.gv2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.gv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.gv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.gv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.gv2'
                                                 );
        }
        if ('cim:GovHydroWEH.gv3' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.gv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.gv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.gv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.gv3'
                                                 );
        }
        if ('cim:GovHydroWEH.gv4' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.gv4'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.gv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.gv4'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.gv4'
                                                 );
        }
        if ('cim:GovHydroWEH.gv5' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.gv5'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.gv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.gv5'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.gv5'
                                                 );
        }
        if ('cim:GovHydroWEH.fl1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.fl1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fl1'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fl1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.fl1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fl1'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fl1'
                                                 );
        }
        if ('cim:GovHydroWEH.fl2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.fl2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fl2'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fl2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.fl2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fl2'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fl2'
                                                 );
        }
        if ('cim:GovHydroWEH.fl3' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.fl3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fl3'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fl3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.fl3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fl3'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fl3'
                                                 );
        }
        if ('cim:GovHydroWEH.fl4' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.fl4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fl4'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fl4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.fl4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fl4'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fl4'
                                                 );
        }
        if ('cim:GovHydroWEH.fl5' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.fl5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fl5'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fl5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.fl5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fl5'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fl5'
                                                 );
        }
        if ('cim:GovHydroWEH.fp1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.fp1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp1'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.fp1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp1'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp1'
                                                 );
        }
        if ('cim:GovHydroWEH.fp2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.fp2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp2'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.fp2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp2'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp2'
                                                 );
        }
        if ('cim:GovHydroWEH.fp3' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.fp3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp3'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.fp3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp3'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp3'
                                                 );
        }
        if ('cim:GovHydroWEH.fp4' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.fp4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp4'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.fp4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp4'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp4'
                                                 );
        }
        if ('cim:GovHydroWEH.fp5' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.fp5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp5'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.fp5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp5'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp5'
                                                 );
        }
        if ('cim:GovHydroWEH.fp6' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.fp6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp6'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.fp6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp6'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp6'
                                                 );
        }
        if ('cim:GovHydroWEH.fp7' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.fp7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp7'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.fp7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp7'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp7'
                                                 );
        }
        if ('cim:GovHydroWEH.fp8' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.fp8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp8'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp8'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.fp8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp8'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp8'
                                                 );
        }
        if ('cim:GovHydroWEH.fp9' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.fp9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp9'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp9'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.fp9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp9'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp9'
                                                 );
        }
        if ('cim:GovHydroWEH.fp10' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.fp10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp10'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp10'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.fp10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.fp10'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.fp10'
                                                 );
        }
        if ('cim:GovHydroWEH.pmss1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.pmss1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss1'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.pmss1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss1'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss1'
                                                 );
        }
        if ('cim:GovHydroWEH.pmss2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.pmss2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss2'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.pmss2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss2'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss2'
                                                 );
        }
        if ('cim:GovHydroWEH.pmss3' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.pmss3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss3'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.pmss3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss3'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss3'
                                                 );
        }
        if ('cim:GovHydroWEH.pmss4' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.pmss4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss4'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.pmss4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss4'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss4'
                                                 );
        }
        if ('cim:GovHydroWEH.pmss5' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.pmss5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss5'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.pmss5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss5'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss5'
                                                 );
        }
        if ('cim:GovHydroWEH.pmss6' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.pmss6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss6'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.pmss6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss6'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss6'
                                                 );
        }
        if ('cim:GovHydroWEH.pmss7' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.pmss7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss7'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.pmss7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss7'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss7'
                                                 );
        }
        if ('cim:GovHydroWEH.pmss8' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.pmss8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss8'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss8'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.pmss8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss8'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss8'
                                                 );
        }
        if ('cim:GovHydroWEH.pmss9' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.pmss9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss9'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss9'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.pmss9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss9'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss9'
                                                 );
        }
        if ('cim:GovHydroWEH.pmss10' in object) {
            attributeEntries['filledEntries']['cim:GovHydroWEH.pmss10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss10'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss10'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroWEH.pmss10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroWEH.pmss10'],
                                                   'cim:PU',
                                                   'cim:GovHydroWEH.pmss10'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'mwbase': [CGMESProfile.shortNames.DY, ],
						'rpg': [CGMESProfile.shortNames.DY, ],
						'rpp': [CGMESProfile.shortNames.DY, ],
						'tpe': [CGMESProfile.shortNames.DY, ],
						'kp': [CGMESProfile.shortNames.DY, ],
						'ki': [CGMESProfile.shortNames.DY, ],
						'kd': [CGMESProfile.shortNames.DY, ],
						'td': [CGMESProfile.shortNames.DY, ],
						'tp': [CGMESProfile.shortNames.DY, ],
						'tdv': [CGMESProfile.shortNames.DY, ],
						'tg': [CGMESProfile.shortNames.DY, ],
						'gtmxop': [CGMESProfile.shortNames.DY, ],
						'gtmxcl': [CGMESProfile.shortNames.DY, ],
						'gmax': [CGMESProfile.shortNames.DY, ],
						'gmin': [CGMESProfile.shortNames.DY, ],
						'dturb': [CGMESProfile.shortNames.DY, ],
						'tw': [CGMESProfile.shortNames.DY, ],
						'db': [CGMESProfile.shortNames.DY, ],
						'dpv': [CGMESProfile.shortNames.DY, ],
						'dicn': [CGMESProfile.shortNames.DY, ],
						'feedbackSignal': [CGMESProfile.shortNames.DY, ],
						'gv1': [CGMESProfile.shortNames.DY, ],
						'gv2': [CGMESProfile.shortNames.DY, ],
						'gv3': [CGMESProfile.shortNames.DY, ],
						'gv4': [CGMESProfile.shortNames.DY, ],
						'gv5': [CGMESProfile.shortNames.DY, ],
						'fl1': [CGMESProfile.shortNames.DY, ],
						'fl2': [CGMESProfile.shortNames.DY, ],
						'fl3': [CGMESProfile.shortNames.DY, ],
						'fl4': [CGMESProfile.shortNames.DY, ],
						'fl5': [CGMESProfile.shortNames.DY, ],
						'fp1': [CGMESProfile.shortNames.DY, ],
						'fp2': [CGMESProfile.shortNames.DY, ],
						'fp3': [CGMESProfile.shortNames.DY, ],
						'fp4': [CGMESProfile.shortNames.DY, ],
						'fp5': [CGMESProfile.shortNames.DY, ],
						'fp6': [CGMESProfile.shortNames.DY, ],
						'fp7': [CGMESProfile.shortNames.DY, ],
						'fp8': [CGMESProfile.shortNames.DY, ],
						'fp9': [CGMESProfile.shortNames.DY, ],
						'fp10': [CGMESProfile.shortNames.DY, ],
						'pmss1': [CGMESProfile.shortNames.DY, ],
						'pmss2': [CGMESProfile.shortNames.DY, ],
						'pmss3': [CGMESProfile.shortNames.DY, ],
						'pmss4': [CGMESProfile.shortNames.DY, ],
						'pmss5': [CGMESProfile.shortNames.DY, ],
						'pmss6': [CGMESProfile.shortNames.DY, ],
						'pmss7': [CGMESProfile.shortNames.DY, ],
						'pmss8': [CGMESProfile.shortNames.DY, ],
						'pmss9': [CGMESProfile.shortNames.DY, ],
						'pmss10': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovHydroWEH.mwbase",
            "cim:GovHydroWEH.rpg",
            "cim:GovHydroWEH.rpp",
            "cim:GovHydroWEH.tpe",
            "cim:GovHydroWEH.kp",
            "cim:GovHydroWEH.ki",
            "cim:GovHydroWEH.kd",
            "cim:GovHydroWEH.td",
            "cim:GovHydroWEH.tp",
            "cim:GovHydroWEH.tdv",
            "cim:GovHydroWEH.tg",
            "cim:GovHydroWEH.gtmxop",
            "cim:GovHydroWEH.gtmxcl",
            "cim:GovHydroWEH.gmax",
            "cim:GovHydroWEH.gmin",
            "cim:GovHydroWEH.dturb",
            "cim:GovHydroWEH.tw",
            "cim:GovHydroWEH.db",
            "cim:GovHydroWEH.dpv",
            "cim:GovHydroWEH.dicn",
            "cim:GovHydroWEH.feedbackSignal",
            "cim:GovHydroWEH.gv1",
            "cim:GovHydroWEH.gv2",
            "cim:GovHydroWEH.gv3",
            "cim:GovHydroWEH.gv4",
            "cim:GovHydroWEH.gv5",
            "cim:GovHydroWEH.fl1",
            "cim:GovHydroWEH.fl2",
            "cim:GovHydroWEH.fl3",
            "cim:GovHydroWEH.fl4",
            "cim:GovHydroWEH.fl5",
            "cim:GovHydroWEH.fp1",
            "cim:GovHydroWEH.fp2",
            "cim:GovHydroWEH.fp3",
            "cim:GovHydroWEH.fp4",
            "cim:GovHydroWEH.fp5",
            "cim:GovHydroWEH.fp6",
            "cim:GovHydroWEH.fp7",
            "cim:GovHydroWEH.fp8",
            "cim:GovHydroWEH.fp9",
            "cim:GovHydroWEH.fp10",
            "cim:GovHydroWEH.pmss1",
            "cim:GovHydroWEH.pmss2",
            "cim:GovHydroWEH.pmss3",
            "cim:GovHydroWEH.pmss4",
            "cim:GovHydroWEH.pmss5",
            "cim:GovHydroWEH.pmss6",
            "cim:GovHydroWEH.pmss7",
            "cim:GovHydroWEH.pmss8",
            "cim:GovHydroWEH.pmss9",
            "cim:GovHydroWEH.pmss10",
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
            if (!GovHydroWEH.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovHydroWEH: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovHydroWEH.attributeHTML(object, cimmenu);
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
export default GovHydroWEH
