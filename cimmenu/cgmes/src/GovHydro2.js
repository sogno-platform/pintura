import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovHydro2 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovHydro2") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovHydro2.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydro2.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydro2.mwbase'
                                                 );
        }
        if ('cim:GovHydro2.tg' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.tg'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro2.tg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.tg'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro2.tg'
                                                 );
        }
        if ('cim:GovHydro2.tp' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.tp'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro2.tp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.tp'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro2.tp'
                                                 );
        }
        if ('cim:GovHydro2.uo' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.uo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.uo'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydro2.uo'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.uo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.uo'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydro2.uo'
                                                 );
        }
        if ('cim:GovHydro2.uc' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.uc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.uc'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydro2.uc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.uc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.uc'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydro2.uc'
                                                 );
        }
        if ('cim:GovHydro2.pmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.pmax'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.pmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.pmax'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.pmax'
                                                 );
        }
        if ('cim:GovHydro2.pmin' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.pmin'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.pmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.pmin'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.pmin'
                                                 );
        }
        if ('cim:GovHydro2.rperm' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.rperm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.rperm'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.rperm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.rperm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.rperm'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.rperm'
                                                 );
        }
        if ('cim:GovHydro2.rtemp' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.rtemp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.rtemp'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.rtemp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.rtemp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.rtemp'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.rtemp'
                                                 );
        }
        if ('cim:GovHydro2.tr' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.tr'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro2.tr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.tr'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro2.tr'
                                                 );
        }
        if ('cim:GovHydro2.tw' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro2.tw'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovHydro2.tw'
                                                 );
        }
        if ('cim:GovHydro2.kturb' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.kturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.kturb'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.kturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.kturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.kturb'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.kturb'
                                                 );
        }
        if ('cim:GovHydro2.aturb' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.aturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.aturb'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.aturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.aturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.aturb'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.aturb'
                                                 );
        }
        if ('cim:GovHydro2.bturb' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.bturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.bturb'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.bturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.bturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.bturb'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.bturb'
                                                 );
        }
        if ('cim:GovHydro2.db1' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovHydro2.db1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovHydro2.db1'
                                                 );
        }
        if ('cim:GovHydro2.eps' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.eps'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.eps'],
                                                   'cim:Frequency',
                                                   'cim:GovHydro2.eps'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.eps'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.eps'],
                                                   'cim:Frequency',
                                                   'cim:GovHydro2.eps'
                                                 );
        }
        if ('cim:GovHydro2.db2' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.db2'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydro2.db2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.db2'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydro2.db2'
                                                 );
        }
        if ('cim:GovHydro2.gv1' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.gv1'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.gv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.gv1'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.gv1'
                                                 );
        }
        if ('cim:GovHydro2.pgv1' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.pgv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.pgv1'
                                                 );
        }
        if ('cim:GovHydro2.gv2' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.gv2'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.gv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.gv2'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.gv2'
                                                 );
        }
        if ('cim:GovHydro2.pgv2' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.pgv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.pgv2'
                                                 );
        }
        if ('cim:GovHydro2.gv3' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.gv3'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.gv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.gv3'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.gv3'
                                                 );
        }
        if ('cim:GovHydro2.pgv3' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.pgv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.pgv3'
                                                 );
        }
        if ('cim:GovHydro2.gv4' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.gv4'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.gv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.gv4'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.gv4'
                                                 );
        }
        if ('cim:GovHydro2.pgv4' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.pgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.pgv4'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.pgv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.pgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.pgv4'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.pgv4'
                                                 );
        }
        if ('cim:GovHydro2.gv5' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.gv5'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.gv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.gv5'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.gv5'
                                                 );
        }
        if ('cim:GovHydro2.pgv5' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.pgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.pgv5'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.pgv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.pgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.pgv5'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.pgv5'
                                                 );
        }
        if ('cim:GovHydro2.gv6' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.gv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.gv6'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.gv6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.gv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.gv6'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.gv6'
                                                 );
        }
        if ('cim:GovHydro2.pgv6' in object) {
            attributeEntries['filledEntries']['cim:GovHydro2.pgv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.pgv6'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.pgv6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydro2.pgv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydro2.pgv6'],
                                                   'cim:PU',
                                                   'cim:GovHydro2.pgv6'
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
						'pmax': [CGMESProfile.shortNames.DY, ],
						'pmin': [CGMESProfile.shortNames.DY, ],
						'rperm': [CGMESProfile.shortNames.DY, ],
						'rtemp': [CGMESProfile.shortNames.DY, ],
						'tr': [CGMESProfile.shortNames.DY, ],
						'tw': [CGMESProfile.shortNames.DY, ],
						'kturb': [CGMESProfile.shortNames.DY, ],
						'aturb': [CGMESProfile.shortNames.DY, ],
						'bturb': [CGMESProfile.shortNames.DY, ],
						'db1': [CGMESProfile.shortNames.DY, ],
						'eps': [CGMESProfile.shortNames.DY, ],
						'db2': [CGMESProfile.shortNames.DY, ],
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
            "cim:GovHydro2.mwbase",
            "cim:GovHydro2.tg",
            "cim:GovHydro2.tp",
            "cim:GovHydro2.uo",
            "cim:GovHydro2.uc",
            "cim:GovHydro2.pmax",
            "cim:GovHydro2.pmin",
            "cim:GovHydro2.rperm",
            "cim:GovHydro2.rtemp",
            "cim:GovHydro2.tr",
            "cim:GovHydro2.tw",
            "cim:GovHydro2.kturb",
            "cim:GovHydro2.aturb",
            "cim:GovHydro2.bturb",
            "cim:GovHydro2.db1",
            "cim:GovHydro2.eps",
            "cim:GovHydro2.db2",
            "cim:GovHydro2.gv1",
            "cim:GovHydro2.pgv1",
            "cim:GovHydro2.gv2",
            "cim:GovHydro2.pgv2",
            "cim:GovHydro2.gv3",
            "cim:GovHydro2.pgv3",
            "cim:GovHydro2.gv4",
            "cim:GovHydro2.pgv4",
            "cim:GovHydro2.gv5",
            "cim:GovHydro2.pgv5",
            "cim:GovHydro2.gv6",
            "cim:GovHydro2.pgv6",
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
            if (!GovHydro2.isMemberAttribute(attribute) && !(attribute == "about")) {
                console.error("Unexpected attribute for class GovHydro2: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovHydro2.attributeHTML(object, cimmenu);
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
export default GovHydro2
