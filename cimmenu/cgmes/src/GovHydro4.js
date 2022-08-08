import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovHydro4 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovHydro4") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovHydro4.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydro4.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydro4.mwbase'
                                                 );
        }
        if ('cim:GovHydro4.tg' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.tg'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro4.tg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.tg'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro4.tg'
                                                 );
        }
        if ('cim:GovHydro4.tp' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.tp'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro4.tp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.tp'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro4.tp'
                                                 );
        }
        if ('cim:GovHydro4.uo' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.uo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.uo'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydro4.uo'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.uo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.uo'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydro4.uo'
                                                 );
        }
        if ('cim:GovHydro4.uc' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.uc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.uc'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydro4.uc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.uc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.uc'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydro4.uc'
                                                 );
        }
        if ('cim:GovHydro4.gmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.gmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.gmax'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.gmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.gmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.gmax'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.gmax'
                                                 );
        }
        if ('cim:GovHydro4.gmin' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.gmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.gmin'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.gmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.gmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.gmin'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.gmin'
                                                 );
        }
        if ('cim:GovHydro4.rperm' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.rperm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.rperm'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro4.rperm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.rperm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.rperm'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro4.rperm'
                                                 );
        }
        if ('cim:GovHydro4.rtemp' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.rtemp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.rtemp'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro4.rtemp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.rtemp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.rtemp'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro4.rtemp'
                                                 );
        }
        if ('cim:GovHydro4.tr' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.tr'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro4.tr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.tr'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro4.tr'
                                                 );
        }
        if ('cim:GovHydro4.tw' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro4.tw'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro4.tw'
                                                 );
        }
        if ('cim:GovHydro4.at' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.at'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.at'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.at'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.at'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.at'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.at'
                                                 );
        }
        if ('cim:GovHydro4.dturb' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.dturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.dturb'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.dturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.dturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.dturb'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.dturb'
                                                 );
        }
        if ('cim:GovHydro4.hdam' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.hdam'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.hdam'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.hdam'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.hdam'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.hdam'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.hdam'
                                                 );
        }
        if ('cim:GovHydro4.qn1' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.qn1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.qn1'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.qn1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.qn1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.qn1'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.qn1'
                                                 );
        }
        if ('cim:GovHydro4.db1' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovHydro4.db1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovHydro4.db1'
                                                 );
        }
        if ('cim:GovHydro4.eps' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.eps'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.eps'],
                                                   'cim:Frequency',
                                                   'cim:GovHydro4.eps'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.eps'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.eps'],
                                                   'cim:Frequency',
                                                   'cim:GovHydro4.eps'
                                                 );
        }
        if ('cim:GovHydro4.db2' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.db2'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydro4.db2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.db2'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydro4.db2'
                                                 );
        }
        if ('cim:GovHydro4.gv0' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.gv0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.gv0'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.gv0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.gv0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.gv0'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.gv0'
                                                 );
        }
        if ('cim:GovHydro4.pgv0' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.pgv0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.pgv0'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.pgv0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.pgv0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.pgv0'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.pgv0'
                                                 );
        }
        if ('cim:GovHydro4.gv1' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.gv1'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.gv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.gv1'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.gv1'
                                                 );
        }
        if ('cim:GovHydro4.pgv1' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.pgv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.pgv1'
                                                 );
        }
        if ('cim:GovHydro4.gv2' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.gv2'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.gv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.gv2'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.gv2'
                                                 );
        }
        if ('cim:GovHydro4.pgv2' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.pgv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.pgv2'
                                                 );
        }
        if ('cim:GovHydro4.gv3' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.gv3'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.gv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.gv3'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.gv3'
                                                 );
        }
        if ('cim:GovHydro4.pgv3' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.pgv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.pgv3'
                                                 );
        }
        if ('cim:GovHydro4.gv4' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.gv4'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.gv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.gv4'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.gv4'
                                                 );
        }
        if ('cim:GovHydro4.pgv4' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.pgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.pgv4'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.pgv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.pgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.pgv4'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.pgv4'
                                                 );
        }
        if ('cim:GovHydro4.gv5' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.gv5'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.gv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.gv5'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.gv5'
                                                 );
        }
        if ('cim:GovHydro4.pgv5' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.pgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.pgv5'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.pgv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.pgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.pgv5'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.pgv5'
                                                 );
        }
        if ('cim:GovHydro4.bgv0' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.bgv0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.bgv0'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.bgv0'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.bgv0'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.bgv0'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.bgv0'
                                                 );
        }
        if ('cim:GovHydro4.bgv1' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.bgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.bgv1'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.bgv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.bgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.bgv1'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.bgv1'
                                                 );
        }
        if ('cim:GovHydro4.bgv2' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.bgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.bgv2'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.bgv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.bgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.bgv2'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.bgv2'
                                                 );
        }
        if ('cim:GovHydro4.bgv3' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.bgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.bgv3'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.bgv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.bgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.bgv3'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.bgv3'
                                                 );
        }
        if ('cim:GovHydro4.bgv4' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.bgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.bgv4'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.bgv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.bgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.bgv4'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.bgv4'
                                                 );
        }
        if ('cim:GovHydro4.bgv5' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.bgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.bgv5'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.bgv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.bgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.bgv5'],
                                                   'cim:PU',
                                                   'cim:GovHydro4.bgv5'
                                                 );
        }
        if ('cim:GovHydro4.bmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.bmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.bmax'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydro4.bmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.bmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.bmax'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydro4.bmax'
                                                 );
        }
        if ('cim:GovHydro4.tblade' in object) {
            attributeEntries['filledEntries']['cim:GovHydro4.tblade'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.tblade'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro4.tblade'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro4.tblade'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro4.tblade'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro4.tblade'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'mwbase': [CGMESProfile.shortNames.DY, ],
						'tg': [CGMESProfile.shortNames.DY, ],
						'tp': [CGMESProfile.shortNames.DY, ],
						'uo': [CGMESProfile.shortNames.DY, ],
						'uc': [CGMESProfile.shortNames.DY, ],
						'gmax': [CGMESProfile.shortNames.DY, ],
						'gmin': [CGMESProfile.shortNames.DY, ],
						'rperm': [CGMESProfile.shortNames.DY, ],
						'rtemp': [CGMESProfile.shortNames.DY, ],
						'tr': [CGMESProfile.shortNames.DY, ],
						'tw': [CGMESProfile.shortNames.DY, ],
						'at': [CGMESProfile.shortNames.DY, ],
						'dturb': [CGMESProfile.shortNames.DY, ],
						'hdam': [CGMESProfile.shortNames.DY, ],
						'qn1': [CGMESProfile.shortNames.DY, ],
						'db1': [CGMESProfile.shortNames.DY, ],
						'eps': [CGMESProfile.shortNames.DY, ],
						'db2': [CGMESProfile.shortNames.DY, ],
						'gv0': [CGMESProfile.shortNames.DY, ],
						'pgv0': [CGMESProfile.shortNames.DY, ],
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
						'bgv0': [CGMESProfile.shortNames.DY, ],
						'bgv1': [CGMESProfile.shortNames.DY, ],
						'bgv2': [CGMESProfile.shortNames.DY, ],
						'bgv3': [CGMESProfile.shortNames.DY, ],
						'bgv4': [CGMESProfile.shortNames.DY, ],
						'bgv5': [CGMESProfile.shortNames.DY, ],
						'bmax': [CGMESProfile.shortNames.DY, ],
						'tblade': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovHydro4.mwbase",
            "cim:GovHydro4.tg",
            "cim:GovHydro4.tp",
            "cim:GovHydro4.uo",
            "cim:GovHydro4.uc",
            "cim:GovHydro4.gmax",
            "cim:GovHydro4.gmin",
            "cim:GovHydro4.rperm",
            "cim:GovHydro4.rtemp",
            "cim:GovHydro4.tr",
            "cim:GovHydro4.tw",
            "cim:GovHydro4.at",
            "cim:GovHydro4.dturb",
            "cim:GovHydro4.hdam",
            "cim:GovHydro4.qn1",
            "cim:GovHydro4.db1",
            "cim:GovHydro4.eps",
            "cim:GovHydro4.db2",
            "cim:GovHydro4.gv0",
            "cim:GovHydro4.pgv0",
            "cim:GovHydro4.gv1",
            "cim:GovHydro4.pgv1",
            "cim:GovHydro4.gv2",
            "cim:GovHydro4.pgv2",
            "cim:GovHydro4.gv3",
            "cim:GovHydro4.pgv3",
            "cim:GovHydro4.gv4",
            "cim:GovHydro4.pgv4",
            "cim:GovHydro4.gv5",
            "cim:GovHydro4.pgv5",
            "cim:GovHydro4.bgv0",
            "cim:GovHydro4.bgv1",
            "cim:GovHydro4.bgv2",
            "cim:GovHydro4.bgv3",
            "cim:GovHydro4.bgv4",
            "cim:GovHydro4.bgv5",
            "cim:GovHydro4.bmax",
            "cim:GovHydro4.tblade",
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
            if (!GovHydro4.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class GovHydro4: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovHydro4.attributeHTML(object, cimmenu);
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
export default GovHydro4
