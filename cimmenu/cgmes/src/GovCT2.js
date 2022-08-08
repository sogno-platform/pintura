import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovCT2 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovCT2") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovCT2.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovCT2.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovCT2.mwbase'
                                                 );
        }
        if ('cim:GovCT2.r' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.r'],
                                                   'cim:PU',
                                                   'cim:GovCT2.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.r'],
                                                   'cim:PU',
                                                   'cim:GovCT2.r'
                                                 );
        }
        if ('cim:GovCT2.rselect' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.rselect'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.rselect'],
                                                   'cim:DroopSignalFeedbackKind',
                                                   'cim:GovCT2.rselect'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.rselect'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.rselect'],
                                                   'cim:DroopSignalFeedbackKind',
                                                   'cim:GovCT2.rselect'
                                                 );
        }
        if ('cim:GovCT2.tpelec' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.tpelec'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.tpelec'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.tpelec'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.tpelec'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.tpelec'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.tpelec'
                                                 );
        }
        if ('cim:GovCT2.maxerr' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.maxerr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.maxerr'],
                                                   'cim:PU',
                                                   'cim:GovCT2.maxerr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.maxerr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.maxerr'],
                                                   'cim:PU',
                                                   'cim:GovCT2.maxerr'
                                                 );
        }
        if ('cim:GovCT2.minerr' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.minerr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.minerr'],
                                                   'cim:PU',
                                                   'cim:GovCT2.minerr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.minerr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.minerr'],
                                                   'cim:PU',
                                                   'cim:GovCT2.minerr'
                                                 );
        }
        if ('cim:GovCT2.kpgov' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.kpgov'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.kpgov'],
                                                   'cim:PU',
                                                   'cim:GovCT2.kpgov'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.kpgov'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.kpgov'],
                                                   'cim:PU',
                                                   'cim:GovCT2.kpgov'
                                                 );
        }
        if ('cim:GovCT2.kigov' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.kigov'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.kigov'],
                                                   'cim:PU',
                                                   'cim:GovCT2.kigov'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.kigov'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.kigov'],
                                                   'cim:PU',
                                                   'cim:GovCT2.kigov'
                                                 );
        }
        if ('cim:GovCT2.kdgov' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.kdgov'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.kdgov'],
                                                   'cim:PU',
                                                   'cim:GovCT2.kdgov'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.kdgov'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.kdgov'],
                                                   'cim:PU',
                                                   'cim:GovCT2.kdgov'
                                                 );
        }
        if ('cim:GovCT2.tdgov' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.tdgov'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.tdgov'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.tdgov'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.tdgov'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.tdgov'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.tdgov'
                                                 );
        }
        if ('cim:GovCT2.vmax' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.vmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.vmax'],
                                                   'cim:PU',
                                                   'cim:GovCT2.vmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.vmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.vmax'],
                                                   'cim:PU',
                                                   'cim:GovCT2.vmax'
                                                 );
        }
        if ('cim:GovCT2.vmin' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.vmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.vmin'],
                                                   'cim:PU',
                                                   'cim:GovCT2.vmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.vmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.vmin'],
                                                   'cim:PU',
                                                   'cim:GovCT2.vmin'
                                                 );
        }
        if ('cim:GovCT2.tact' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.tact'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.tact'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.tact'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.tact'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.tact'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.tact'
                                                 );
        }
        if ('cim:GovCT2.kturb' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.kturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.kturb'],
                                                   'cim:PU',
                                                   'cim:GovCT2.kturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.kturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.kturb'],
                                                   'cim:PU',
                                                   'cim:GovCT2.kturb'
                                                 );
        }
        if ('cim:GovCT2.wfnl' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.wfnl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.wfnl'],
                                                   'cim:PU',
                                                   'cim:GovCT2.wfnl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.wfnl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.wfnl'],
                                                   'cim:PU',
                                                   'cim:GovCT2.wfnl'
                                                 );
        }
        if ('cim:GovCT2.tb' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.tb'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.tb'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.tb'
                                                 );
        }
        if ('cim:GovCT2.tc' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.tc'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.tc'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.tc'
                                                 );
        }
        if ('cim:GovCT2.wfspd' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.wfspd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.wfspd'],
                                                   'cim:Boolean',
                                                   'cim:GovCT2.wfspd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.wfspd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.wfspd'],
                                                   'cim:Boolean',
                                                   'cim:GovCT2.wfspd'
                                                 );
        }
        if ('cim:GovCT2.teng' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.teng'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.teng'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.teng'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.teng'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.teng'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.teng'
                                                 );
        }
        if ('cim:GovCT2.tfload' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.tfload'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.tfload'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.tfload'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.tfload'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.tfload'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.tfload'
                                                 );
        }
        if ('cim:GovCT2.kpload' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.kpload'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.kpload'],
                                                   'cim:PU',
                                                   'cim:GovCT2.kpload'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.kpload'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.kpload'],
                                                   'cim:PU',
                                                   'cim:GovCT2.kpload'
                                                 );
        }
        if ('cim:GovCT2.kiload' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.kiload'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.kiload'],
                                                   'cim:PU',
                                                   'cim:GovCT2.kiload'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.kiload'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.kiload'],
                                                   'cim:PU',
                                                   'cim:GovCT2.kiload'
                                                 );
        }
        if ('cim:GovCT2.ldref' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.ldref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.ldref'],
                                                   'cim:PU',
                                                   'cim:GovCT2.ldref'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.ldref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.ldref'],
                                                   'cim:PU',
                                                   'cim:GovCT2.ldref'
                                                 );
        }
        if ('cim:GovCT2.dm' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.dm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.dm'],
                                                   'cim:PU',
                                                   'cim:GovCT2.dm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.dm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.dm'],
                                                   'cim:PU',
                                                   'cim:GovCT2.dm'
                                                 );
        }
        if ('cim:GovCT2.ropen' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.ropen'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.ropen'],
                                                   'cim:Simple_Float',
                                                   'cim:GovCT2.ropen'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.ropen'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.ropen'],
                                                   'cim:Simple_Float',
                                                   'cim:GovCT2.ropen'
                                                 );
        }
        if ('cim:GovCT2.rclose' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.rclose'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.rclose'],
                                                   'cim:Simple_Float',
                                                   'cim:GovCT2.rclose'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.rclose'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.rclose'],
                                                   'cim:Simple_Float',
                                                   'cim:GovCT2.rclose'
                                                 );
        }
        if ('cim:GovCT2.kimw' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.kimw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.kimw'],
                                                   'cim:PU',
                                                   'cim:GovCT2.kimw'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.kimw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.kimw'],
                                                   'cim:PU',
                                                   'cim:GovCT2.kimw'
                                                 );
        }
        if ('cim:GovCT2.aset' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.aset'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.aset'],
                                                   'cim:Simple_Float',
                                                   'cim:GovCT2.aset'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.aset'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.aset'],
                                                   'cim:Simple_Float',
                                                   'cim:GovCT2.aset'
                                                 );
        }
        if ('cim:GovCT2.ka' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.ka'],
                                                   'cim:PU',
                                                   'cim:GovCT2.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.ka'],
                                                   'cim:PU',
                                                   'cim:GovCT2.ka'
                                                 );
        }
        if ('cim:GovCT2.ta' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.ta'
                                                 );
        }
        if ('cim:GovCT2.db' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.db'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.db'],
                                                   'cim:PU',
                                                   'cim:GovCT2.db'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.db'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.db'],
                                                   'cim:PU',
                                                   'cim:GovCT2.db'
                                                 );
        }
        if ('cim:GovCT2.tsa' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.tsa'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.tsa'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.tsa'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.tsa'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.tsa'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.tsa'
                                                 );
        }
        if ('cim:GovCT2.tsb' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.tsb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.tsb'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.tsb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.tsb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.tsb'],
                                                   'cim:Seconds',
                                                   'cim:GovCT2.tsb'
                                                 );
        }
        if ('cim:GovCT2.rup' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.rup'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.rup'],
                                                   'cim:PU',
                                                   'cim:GovCT2.rup'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.rup'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.rup'],
                                                   'cim:PU',
                                                   'cim:GovCT2.rup'
                                                 );
        }
        if ('cim:GovCT2.rdown' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.rdown'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.rdown'],
                                                   'cim:PU',
                                                   'cim:GovCT2.rdown'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.rdown'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.rdown'],
                                                   'cim:PU',
                                                   'cim:GovCT2.rdown'
                                                 );
        }
        if ('cim:GovCT2.prate' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.prate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.prate'],
                                                   'cim:PU',
                                                   'cim:GovCT2.prate'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.prate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.prate'],
                                                   'cim:PU',
                                                   'cim:GovCT2.prate'
                                                 );
        }
        if ('cim:GovCT2.flim1' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.flim1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim1'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.flim1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim1'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim1'
                                                 );
        }
        if ('cim:GovCT2.plim1' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.plim1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim1'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.plim1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim1'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim1'
                                                 );
        }
        if ('cim:GovCT2.flim2' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.flim2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim2'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.flim2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim2'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim2'
                                                 );
        }
        if ('cim:GovCT2.plim2' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.plim2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim2'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.plim2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim2'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim2'
                                                 );
        }
        if ('cim:GovCT2.flim3' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.flim3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim3'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.flim3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim3'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim3'
                                                 );
        }
        if ('cim:GovCT2.plim3' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.plim3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim3'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.plim3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim3'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim3'
                                                 );
        }
        if ('cim:GovCT2.flim4' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.flim4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim4'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.flim4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim4'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim4'
                                                 );
        }
        if ('cim:GovCT2.plim4' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.plim4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim4'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.plim4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim4'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim4'
                                                 );
        }
        if ('cim:GovCT2.flim5' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.flim5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim5'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.flim5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim5'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim5'
                                                 );
        }
        if ('cim:GovCT2.plim5' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.plim5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim5'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.plim5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim5'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim5'
                                                 );
        }
        if ('cim:GovCT2.flim6' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.flim6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim6'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.flim6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim6'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim6'
                                                 );
        }
        if ('cim:GovCT2.plim6' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.plim6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim6'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.plim6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim6'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim6'
                                                 );
        }
        if ('cim:GovCT2.flim7' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.flim7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim7'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.flim7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim7'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim7'
                                                 );
        }
        if ('cim:GovCT2.plim7' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.plim7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim7'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.plim7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim7'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim7'
                                                 );
        }
        if ('cim:GovCT2.flim8' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.flim8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim8'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim8'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.flim8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim8'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim8'
                                                 );
        }
        if ('cim:GovCT2.plim8' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.plim8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim8'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim8'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.plim8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim8'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim8'
                                                 );
        }
        if ('cim:GovCT2.flim9' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.flim9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim9'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim9'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.flim9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim9'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim9'
                                                 );
        }
        if ('cim:GovCT2.plim9' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.plim9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim9'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim9'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.plim9'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim9'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim9'
                                                 );
        }
        if ('cim:GovCT2.flim10' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.flim10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim10'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim10'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.flim10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.flim10'],
                                                   'cim:Frequency',
                                                   'cim:GovCT2.flim10'
                                                 );
        }
        if ('cim:GovCT2.plim10' in object) {
            attributeEntries['filledEntries']['cim:GovCT2.plim10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim10'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim10'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT2.plim10'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT2.plim10'],
                                                   'cim:PU',
                                                   'cim:GovCT2.plim10'
                                                 );
        }
        return attributeEntries;
    }

    static possibleProfileList = {'class': [CGMESProfile.shortNames.DY, ],
						'mwbase': [CGMESProfile.shortNames.DY, ],
						'r': [CGMESProfile.shortNames.DY, ],
						'rselect': [CGMESProfile.shortNames.DY, ],
						'tpelec': [CGMESProfile.shortNames.DY, ],
						'maxerr': [CGMESProfile.shortNames.DY, ],
						'minerr': [CGMESProfile.shortNames.DY, ],
						'kpgov': [CGMESProfile.shortNames.DY, ],
						'kigov': [CGMESProfile.shortNames.DY, ],
						'kdgov': [CGMESProfile.shortNames.DY, ],
						'tdgov': [CGMESProfile.shortNames.DY, ],
						'vmax': [CGMESProfile.shortNames.DY, ],
						'vmin': [CGMESProfile.shortNames.DY, ],
						'tact': [CGMESProfile.shortNames.DY, ],
						'kturb': [CGMESProfile.shortNames.DY, ],
						'wfnl': [CGMESProfile.shortNames.DY, ],
						'tb': [CGMESProfile.shortNames.DY, ],
						'tc': [CGMESProfile.shortNames.DY, ],
						'wfspd': [CGMESProfile.shortNames.DY, ],
						'teng': [CGMESProfile.shortNames.DY, ],
						'tfload': [CGMESProfile.shortNames.DY, ],
						'kpload': [CGMESProfile.shortNames.DY, ],
						'kiload': [CGMESProfile.shortNames.DY, ],
						'ldref': [CGMESProfile.shortNames.DY, ],
						'dm': [CGMESProfile.shortNames.DY, ],
						'ropen': [CGMESProfile.shortNames.DY, ],
						'rclose': [CGMESProfile.shortNames.DY, ],
						'kimw': [CGMESProfile.shortNames.DY, ],
						'aset': [CGMESProfile.shortNames.DY, ],
						'ka': [CGMESProfile.shortNames.DY, ],
						'ta': [CGMESProfile.shortNames.DY, ],
						'db': [CGMESProfile.shortNames.DY, ],
						'tsa': [CGMESProfile.shortNames.DY, ],
						'tsb': [CGMESProfile.shortNames.DY, ],
						'rup': [CGMESProfile.shortNames.DY, ],
						'rdown': [CGMESProfile.shortNames.DY, ],
						'prate': [CGMESProfile.shortNames.DY, ],
						'flim1': [CGMESProfile.shortNames.DY, ],
						'plim1': [CGMESProfile.shortNames.DY, ],
						'flim2': [CGMESProfile.shortNames.DY, ],
						'plim2': [CGMESProfile.shortNames.DY, ],
						'flim3': [CGMESProfile.shortNames.DY, ],
						'plim3': [CGMESProfile.shortNames.DY, ],
						'flim4': [CGMESProfile.shortNames.DY, ],
						'plim4': [CGMESProfile.shortNames.DY, ],
						'flim5': [CGMESProfile.shortNames.DY, ],
						'plim5': [CGMESProfile.shortNames.DY, ],
						'flim6': [CGMESProfile.shortNames.DY, ],
						'plim6': [CGMESProfile.shortNames.DY, ],
						'flim7': [CGMESProfile.shortNames.DY, ],
						'plim7': [CGMESProfile.shortNames.DY, ],
						'flim8': [CGMESProfile.shortNames.DY, ],
						'plim8': [CGMESProfile.shortNames.DY, ],
						'flim9': [CGMESProfile.shortNames.DY, ],
						'plim9': [CGMESProfile.shortNames.DY, ],
						'flim10': [CGMESProfile.shortNames.DY, ],
						'plim10': [CGMESProfile.shortNames.DY, ],
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovCT2.mwbase",
            "cim:GovCT2.r",
            "cim:GovCT2.rselect",
            "cim:GovCT2.tpelec",
            "cim:GovCT2.maxerr",
            "cim:GovCT2.minerr",
            "cim:GovCT2.kpgov",
            "cim:GovCT2.kigov",
            "cim:GovCT2.kdgov",
            "cim:GovCT2.tdgov",
            "cim:GovCT2.vmax",
            "cim:GovCT2.vmin",
            "cim:GovCT2.tact",
            "cim:GovCT2.kturb",
            "cim:GovCT2.wfnl",
            "cim:GovCT2.tb",
            "cim:GovCT2.tc",
            "cim:GovCT2.wfspd",
            "cim:GovCT2.teng",
            "cim:GovCT2.tfload",
            "cim:GovCT2.kpload",
            "cim:GovCT2.kiload",
            "cim:GovCT2.ldref",
            "cim:GovCT2.dm",
            "cim:GovCT2.ropen",
            "cim:GovCT2.rclose",
            "cim:GovCT2.kimw",
            "cim:GovCT2.aset",
            "cim:GovCT2.ka",
            "cim:GovCT2.ta",
            "cim:GovCT2.db",
            "cim:GovCT2.tsa",
            "cim:GovCT2.tsb",
            "cim:GovCT2.rup",
            "cim:GovCT2.rdown",
            "cim:GovCT2.prate",
            "cim:GovCT2.flim1",
            "cim:GovCT2.plim1",
            "cim:GovCT2.flim2",
            "cim:GovCT2.plim2",
            "cim:GovCT2.flim3",
            "cim:GovCT2.plim3",
            "cim:GovCT2.flim4",
            "cim:GovCT2.plim4",
            "cim:GovCT2.flim5",
            "cim:GovCT2.plim5",
            "cim:GovCT2.flim6",
            "cim:GovCT2.plim6",
            "cim:GovCT2.flim7",
            "cim:GovCT2.plim7",
            "cim:GovCT2.flim8",
            "cim:GovCT2.plim8",
            "cim:GovCT2.flim9",
            "cim:GovCT2.plim9",
            "cim:GovCT2.flim10",
            "cim:GovCT2.plim10",
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
            if (!GovCT2.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class GovCT2: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovCT2.attributeHTML(object, cimmenu);
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
export default GovCT2
