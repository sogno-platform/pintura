import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"

class GovSteamEU extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovSteamEU") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovSteamEU.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovSteamEU.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovSteamEU.mwbase'
                                                 );
        }
        if ('cim:GovSteamEU.tp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tp'
                                                 );
        }
        if ('cim:GovSteamEU.ke' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.ke'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.ke'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.ke'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.ke'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.ke'
                                                 );
        }
        if ('cim:GovSteamEU.tip' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.tip'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tip'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tip'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.tip'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tip'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tip'
                                                 );
        }
        if ('cim:GovSteamEU.tdp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.tdp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tdp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tdp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.tdp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tdp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tdp'
                                                 );
        }
        if ('cim:GovSteamEU.tfp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.tfp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tfp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tfp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.tfp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tfp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tfp'
                                                 );
        }
        if ('cim:GovSteamEU.tf' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tf'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tf'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.tf'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tf'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tf'
                                                 );
        }
        if ('cim:GovSteamEU.kfcor' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.kfcor'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.kfcor'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.kfcor'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.kfcor'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.kfcor'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.kfcor'
                                                 );
        }
        if ('cim:GovSteamEU.db1' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.db1'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.db1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.db1'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.db1'
                                                 );
        }
        if ('cim:GovSteamEU.wfmax' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.wfmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.wfmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.wfmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.wfmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.wfmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.wfmax'
                                                 );
        }
        if ('cim:GovSteamEU.wfmin' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.wfmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.wfmin'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.wfmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.wfmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.wfmin'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.wfmin'
                                                 );
        }
        if ('cim:GovSteamEU.pmax' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.pmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.pmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.pmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.pmax'
                                                 );
        }
        if ('cim:GovSteamEU.ten' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.ten'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.ten'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.ten'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.ten'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.ten'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.ten'
                                                 );
        }
        if ('cim:GovSteamEU.tw' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tw'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tw'
                                                 );
        }
        if ('cim:GovSteamEU.kwcor' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.kwcor'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.kwcor'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.kwcor'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.kwcor'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.kwcor'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.kwcor'
                                                 );
        }
        if ('cim:GovSteamEU.db2' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.db2'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.db2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.db2'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.db2'
                                                 );
        }
        if ('cim:GovSteamEU.wwmax' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.wwmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.wwmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.wwmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.wwmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.wwmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.wwmax'
                                                 );
        }
        if ('cim:GovSteamEU.wwmin' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.wwmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.wwmin'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.wwmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.wwmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.wwmin'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.wwmin'
                                                 );
        }
        if ('cim:GovSteamEU.wmax1' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.wmax1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.wmax1'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.wmax1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.wmax1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.wmax1'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.wmax1'
                                                 );
        }
        if ('cim:GovSteamEU.wmax2' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.wmax2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.wmax2'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.wmax2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.wmax2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.wmax2'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.wmax2'
                                                 );
        }
        if ('cim:GovSteamEU.tvhp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.tvhp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tvhp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tvhp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.tvhp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tvhp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tvhp'
                                                 );
        }
        if ('cim:GovSteamEU.cho' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.cho'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.cho'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamEU.cho'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.cho'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.cho'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamEU.cho'
                                                 );
        }
        if ('cim:GovSteamEU.chc' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.chc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.chc'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamEU.chc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.chc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.chc'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteamEU.chc'
                                                 );
        }
        if ('cim:GovSteamEU.hhpmax' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.hhpmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.hhpmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.hhpmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.hhpmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.hhpmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.hhpmax'
                                                 );
        }
        if ('cim:GovSteamEU.tvip' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.tvip'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tvip'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tvip'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.tvip'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tvip'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tvip'
                                                 );
        }
        if ('cim:GovSteamEU.cio' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.cio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.cio'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.cio'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.cio'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.cio'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.cio'
                                                 );
        }
        if ('cim:GovSteamEU.cic' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.cic'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.cic'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.cic'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.cic'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.cic'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.cic'
                                                 );
        }
        if ('cim:GovSteamEU.simx' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.simx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.simx'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.simx'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.simx'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.simx'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.simx'
                                                 );
        }
        if ('cim:GovSteamEU.thp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.thp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.thp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.thp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.thp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.thp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.thp'
                                                 );
        }
        if ('cim:GovSteamEU.trh' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.trh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.trh'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.trh'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.trh'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.trh'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.trh'
                                                 );
        }
        if ('cim:GovSteamEU.tlp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.tlp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tlp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tlp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.tlp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tlp'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tlp'
                                                 );
        }
        if ('cim:GovSteamEU.prhmax' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.prhmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.prhmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.prhmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.prhmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.prhmax'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.prhmax'
                                                 );
        }
        if ('cim:GovSteamEU.khp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.khp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.khp'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.khp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.khp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.khp'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.khp'
                                                 );
        }
        if ('cim:GovSteamEU.klp' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.klp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.klp'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.klp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.klp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.klp'],
                                                   'cim:PU',
                                                   'cim:GovSteamEU.klp'
                                                 );
        }
        if ('cim:GovSteamEU.tb' in object) {
            attributeEntries['filledEntries']['cim:GovSteamEU.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tb'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteamEU.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteamEU.tb'],
                                                   'cim:Seconds',
                                                   'cim:GovSteamEU.tb'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovSteamEU.mwbase",
            "cim:GovSteamEU.tp",
            "cim:GovSteamEU.ke",
            "cim:GovSteamEU.tip",
            "cim:GovSteamEU.tdp",
            "cim:GovSteamEU.tfp",
            "cim:GovSteamEU.tf",
            "cim:GovSteamEU.kfcor",
            "cim:GovSteamEU.db1",
            "cim:GovSteamEU.wfmax",
            "cim:GovSteamEU.wfmin",
            "cim:GovSteamEU.pmax",
            "cim:GovSteamEU.ten",
            "cim:GovSteamEU.tw",
            "cim:GovSteamEU.kwcor",
            "cim:GovSteamEU.db2",
            "cim:GovSteamEU.wwmax",
            "cim:GovSteamEU.wwmin",
            "cim:GovSteamEU.wmax1",
            "cim:GovSteamEU.wmax2",
            "cim:GovSteamEU.tvhp",
            "cim:GovSteamEU.cho",
            "cim:GovSteamEU.chc",
            "cim:GovSteamEU.hhpmax",
            "cim:GovSteamEU.tvip",
            "cim:GovSteamEU.cio",
            "cim:GovSteamEU.cic",
            "cim:GovSteamEU.simx",
            "cim:GovSteamEU.thp",
            "cim:GovSteamEU.trh",
            "cim:GovSteamEU.tlp",
            "cim:GovSteamEU.prhmax",
            "cim:GovSteamEU.khp",
            "cim:GovSteamEU.klp",
            "cim:GovSteamEU.tb",
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
            if (!GovSteamEU.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovSteamEU: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovSteamEU.attributeHTML(object, cimmenu);
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
export default GovSteamEU
