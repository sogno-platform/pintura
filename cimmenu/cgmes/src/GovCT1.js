import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovCT1 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovCT1") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovCT1.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovCT1.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovCT1.mwbase'
                                                 );
        }
        if ('cim:GovCT1.r' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.r'],
                                                   'cim:PU',
                                                   'cim:GovCT1.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.r'],
                                                   'cim:PU',
                                                   'cim:GovCT1.r'
                                                 );
        }
        if ('cim:GovCT1.rselect' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.rselect'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.rselect'],
                                                   'cim:DroopSignalFeedbackKind',
                                                   'cim:GovCT1.rselect'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.rselect'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.rselect'],
                                                   'cim:DroopSignalFeedbackKind',
                                                   'cim:GovCT1.rselect'
                                                 );
        }
        if ('cim:GovCT1.tpelec' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.tpelec'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.tpelec'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.tpelec'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.tpelec'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.tpelec'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.tpelec'
                                                 );
        }
        if ('cim:GovCT1.maxerr' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.maxerr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.maxerr'],
                                                   'cim:PU',
                                                   'cim:GovCT1.maxerr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.maxerr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.maxerr'],
                                                   'cim:PU',
                                                   'cim:GovCT1.maxerr'
                                                 );
        }
        if ('cim:GovCT1.minerr' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.minerr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.minerr'],
                                                   'cim:PU',
                                                   'cim:GovCT1.minerr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.minerr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.minerr'],
                                                   'cim:PU',
                                                   'cim:GovCT1.minerr'
                                                 );
        }
        if ('cim:GovCT1.kpgov' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.kpgov'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.kpgov'],
                                                   'cim:PU',
                                                   'cim:GovCT1.kpgov'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.kpgov'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.kpgov'],
                                                   'cim:PU',
                                                   'cim:GovCT1.kpgov'
                                                 );
        }
        if ('cim:GovCT1.kigov' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.kigov'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.kigov'],
                                                   'cim:PU',
                                                   'cim:GovCT1.kigov'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.kigov'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.kigov'],
                                                   'cim:PU',
                                                   'cim:GovCT1.kigov'
                                                 );
        }
        if ('cim:GovCT1.kdgov' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.kdgov'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.kdgov'],
                                                   'cim:PU',
                                                   'cim:GovCT1.kdgov'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.kdgov'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.kdgov'],
                                                   'cim:PU',
                                                   'cim:GovCT1.kdgov'
                                                 );
        }
        if ('cim:GovCT1.tdgov' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.tdgov'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.tdgov'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.tdgov'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.tdgov'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.tdgov'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.tdgov'
                                                 );
        }
        if ('cim:GovCT1.vmax' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.vmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.vmax'],
                                                   'cim:PU',
                                                   'cim:GovCT1.vmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.vmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.vmax'],
                                                   'cim:PU',
                                                   'cim:GovCT1.vmax'
                                                 );
        }
        if ('cim:GovCT1.vmin' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.vmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.vmin'],
                                                   'cim:PU',
                                                   'cim:GovCT1.vmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.vmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.vmin'],
                                                   'cim:PU',
                                                   'cim:GovCT1.vmin'
                                                 );
        }
        if ('cim:GovCT1.tact' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.tact'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.tact'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.tact'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.tact'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.tact'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.tact'
                                                 );
        }
        if ('cim:GovCT1.kturb' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.kturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.kturb'],
                                                   'cim:PU',
                                                   'cim:GovCT1.kturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.kturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.kturb'],
                                                   'cim:PU',
                                                   'cim:GovCT1.kturb'
                                                 );
        }
        if ('cim:GovCT1.wfnl' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.wfnl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.wfnl'],
                                                   'cim:PU',
                                                   'cim:GovCT1.wfnl'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.wfnl'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.wfnl'],
                                                   'cim:PU',
                                                   'cim:GovCT1.wfnl'
                                                 );
        }
        if ('cim:GovCT1.tb' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.tb'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.tb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.tb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.tb'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.tb'
                                                 );
        }
        if ('cim:GovCT1.tc' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.tc'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.tc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.tc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.tc'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.tc'
                                                 );
        }
        if ('cim:GovCT1.wfspd' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.wfspd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.wfspd'],
                                                   'cim:Boolean',
                                                   'cim:GovCT1.wfspd'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.wfspd'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.wfspd'],
                                                   'cim:Boolean',
                                                   'cim:GovCT1.wfspd'
                                                 );
        }
        if ('cim:GovCT1.teng' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.teng'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.teng'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.teng'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.teng'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.teng'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.teng'
                                                 );
        }
        if ('cim:GovCT1.tfload' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.tfload'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.tfload'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.tfload'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.tfload'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.tfload'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.tfload'
                                                 );
        }
        if ('cim:GovCT1.kpload' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.kpload'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.kpload'],
                                                   'cim:PU',
                                                   'cim:GovCT1.kpload'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.kpload'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.kpload'],
                                                   'cim:PU',
                                                   'cim:GovCT1.kpload'
                                                 );
        }
        if ('cim:GovCT1.kiload' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.kiload'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.kiload'],
                                                   'cim:PU',
                                                   'cim:GovCT1.kiload'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.kiload'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.kiload'],
                                                   'cim:PU',
                                                   'cim:GovCT1.kiload'
                                                 );
        }
        if ('cim:GovCT1.ldref' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.ldref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.ldref'],
                                                   'cim:PU',
                                                   'cim:GovCT1.ldref'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.ldref'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.ldref'],
                                                   'cim:PU',
                                                   'cim:GovCT1.ldref'
                                                 );
        }
        if ('cim:GovCT1.dm' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.dm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.dm'],
                                                   'cim:PU',
                                                   'cim:GovCT1.dm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.dm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.dm'],
                                                   'cim:PU',
                                                   'cim:GovCT1.dm'
                                                 );
        }
        if ('cim:GovCT1.ropen' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.ropen'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.ropen'],
                                                   'cim:Simple_Float',
                                                   'cim:GovCT1.ropen'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.ropen'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.ropen'],
                                                   'cim:Simple_Float',
                                                   'cim:GovCT1.ropen'
                                                 );
        }
        if ('cim:GovCT1.rclose' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.rclose'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.rclose'],
                                                   'cim:Simple_Float',
                                                   'cim:GovCT1.rclose'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.rclose'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.rclose'],
                                                   'cim:Simple_Float',
                                                   'cim:GovCT1.rclose'
                                                 );
        }
        if ('cim:GovCT1.kimw' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.kimw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.kimw'],
                                                   'cim:PU',
                                                   'cim:GovCT1.kimw'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.kimw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.kimw'],
                                                   'cim:PU',
                                                   'cim:GovCT1.kimw'
                                                 );
        }
        if ('cim:GovCT1.aset' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.aset'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.aset'],
                                                   'cim:Simple_Float',
                                                   'cim:GovCT1.aset'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.aset'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.aset'],
                                                   'cim:Simple_Float',
                                                   'cim:GovCT1.aset'
                                                 );
        }
        if ('cim:GovCT1.ka' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.ka'],
                                                   'cim:PU',
                                                   'cim:GovCT1.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.ka'],
                                                   'cim:PU',
                                                   'cim:GovCT1.ka'
                                                 );
        }
        if ('cim:GovCT1.ta' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.ta'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.ta'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.ta'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.ta'
                                                 );
        }
        if ('cim:GovCT1.db' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.db'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.db'],
                                                   'cim:PU',
                                                   'cim:GovCT1.db'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.db'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.db'],
                                                   'cim:PU',
                                                   'cim:GovCT1.db'
                                                 );
        }
        if ('cim:GovCT1.tsa' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.tsa'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.tsa'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.tsa'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.tsa'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.tsa'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.tsa'
                                                 );
        }
        if ('cim:GovCT1.tsb' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.tsb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.tsb'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.tsb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.tsb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.tsb'],
                                                   'cim:Seconds',
                                                   'cim:GovCT1.tsb'
                                                 );
        }
        if ('cim:GovCT1.rup' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.rup'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.rup'],
                                                   'cim:PU',
                                                   'cim:GovCT1.rup'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.rup'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.rup'],
                                                   'cim:PU',
                                                   'cim:GovCT1.rup'
                                                 );
        }
        if ('cim:GovCT1.rdown' in object) {
            attributeEntries['filledEntries']['cim:GovCT1.rdown'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.rdown'],
                                                   'cim:PU',
                                                   'cim:GovCT1.rdown'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovCT1.rdown'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovCT1.rdown'],
                                                   'cim:PU',
                                                   'cim:GovCT1.rdown'
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
						 }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovCT1.mwbase",
            "cim:GovCT1.r",
            "cim:GovCT1.rselect",
            "cim:GovCT1.tpelec",
            "cim:GovCT1.maxerr",
            "cim:GovCT1.minerr",
            "cim:GovCT1.kpgov",
            "cim:GovCT1.kigov",
            "cim:GovCT1.kdgov",
            "cim:GovCT1.tdgov",
            "cim:GovCT1.vmax",
            "cim:GovCT1.vmin",
            "cim:GovCT1.tact",
            "cim:GovCT1.kturb",
            "cim:GovCT1.wfnl",
            "cim:GovCT1.tb",
            "cim:GovCT1.tc",
            "cim:GovCT1.wfspd",
            "cim:GovCT1.teng",
            "cim:GovCT1.tfload",
            "cim:GovCT1.kpload",
            "cim:GovCT1.kiload",
            "cim:GovCT1.ldref",
            "cim:GovCT1.dm",
            "cim:GovCT1.ropen",
            "cim:GovCT1.rclose",
            "cim:GovCT1.kimw",
            "cim:GovCT1.aset",
            "cim:GovCT1.ka",
            "cim:GovCT1.ta",
            "cim:GovCT1.db",
            "cim:GovCT1.tsa",
            "cim:GovCT1.tsb",
            "cim:GovCT1.rup",
            "cim:GovCT1.rdown",
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
            if (!GovCT1.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovCT1: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovCT1.attributeHTML(object, cimmenu);
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
export default GovCT1
