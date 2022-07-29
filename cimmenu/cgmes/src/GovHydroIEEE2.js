import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"
import CGMESProfile from "./CGMESProfile.js"


class GovHydroIEEE2 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovHydroIEEE2") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovHydroIEEE2.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroIEEE2.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovHydroIEEE2.mwbase'
                                                 );
        }
        if ('cim:GovHydroIEEE2.tg' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.tg'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroIEEE2.tg'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.tg'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.tg'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroIEEE2.tg'
                                                 );
        }
        if ('cim:GovHydroIEEE2.tp' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.tp'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroIEEE2.tp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.tp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.tp'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroIEEE2.tp'
                                                 );
        }
        if ('cim:GovHydroIEEE2.uo' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.uo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.uo'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroIEEE2.uo'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.uo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.uo'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroIEEE2.uo'
                                                 );
        }
        if ('cim:GovHydroIEEE2.uc' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.uc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.uc'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroIEEE2.uc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.uc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.uc'],
                                                   'cim:Simple_Float',
                                                   'cim:GovHydroIEEE2.uc'
                                                 );
        }
        if ('cim:GovHydroIEEE2.pmax' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.pmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.pmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.pmax'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.pmax'
                                                 );
        }
        if ('cim:GovHydroIEEE2.pmin' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.pmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.pmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.pmin'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.pmin'
                                                 );
        }
        if ('cim:GovHydroIEEE2.rperm' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.rperm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.rperm'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.rperm'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.rperm'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.rperm'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.rperm'
                                                 );
        }
        if ('cim:GovHydroIEEE2.rtemp' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.rtemp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.rtemp'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.rtemp'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.rtemp'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.rtemp'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.rtemp'
                                                 );
        }
        if ('cim:GovHydroIEEE2.tr' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.tr'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroIEEE2.tr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.tr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.tr'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroIEEE2.tr'
                                                 );
        }
        if ('cim:GovHydroIEEE2.tw' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroIEEE2.tw'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.tw'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.tw'],
                                                   'cim:Seconds',
                                                   'cim:GovHydroIEEE2.tw'
                                                 );
        }
        if ('cim:GovHydroIEEE2.kturb' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.kturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.kturb'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.kturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.kturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.kturb'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.kturb'
                                                 );
        }
        if ('cim:GovHydroIEEE2.aturb' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.aturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.aturb'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.aturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.aturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.aturb'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.aturb'
                                                 );
        }
        if ('cim:GovHydroIEEE2.bturb' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.bturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.bturb'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.bturb'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.bturb'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.bturb'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.bturb'
                                                 );
        }
        if ('cim:GovHydroIEEE2.gv1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.gv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.gv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.gv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.gv1'
                                                 );
        }
        if ('cim:GovHydroIEEE2.pgv1' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.pgv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.pgv1'
                                                 );
        }
        if ('cim:GovHydroIEEE2.gv2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.gv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.gv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.gv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.gv2'
                                                 );
        }
        if ('cim:GovHydroIEEE2.pgv2' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.pgv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.pgv2'
                                                 );
        }
        if ('cim:GovHydroIEEE2.gv3' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.gv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.gv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.gv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.gv3'
                                                 );
        }
        if ('cim:GovHydroIEEE2.pgv3' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.pgv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.pgv3'
                                                 );
        }
        if ('cim:GovHydroIEEE2.gv4' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.gv4'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.gv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.gv4'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.gv4'
                                                 );
        }
        if ('cim:GovHydroIEEE2.pgv4' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.pgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.pgv4'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.pgv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.pgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.pgv4'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.pgv4'
                                                 );
        }
        if ('cim:GovHydroIEEE2.gv5' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.gv5'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.gv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.gv5'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.gv5'
                                                 );
        }
        if ('cim:GovHydroIEEE2.pgv5' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.pgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.pgv5'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.pgv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.pgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.pgv5'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.pgv5'
                                                 );
        }
        if ('cim:GovHydroIEEE2.gv6' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.gv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.gv6'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.gv6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.gv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.gv6'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.gv6'
                                                 );
        }
        if ('cim:GovHydroIEEE2.pgv6' in object) {
            attributeEntries['filledEntries']['cim:GovHydroIEEE2.pgv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.pgv6'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.pgv6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovHydroIEEE2.pgv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovHydroIEEE2.pgv6'],
                                                   'cim:PU',
                                                   'cim:GovHydroIEEE2.pgv6'
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
            "cim:GovHydroIEEE2.mwbase",
            "cim:GovHydroIEEE2.tg",
            "cim:GovHydroIEEE2.tp",
            "cim:GovHydroIEEE2.uo",
            "cim:GovHydroIEEE2.uc",
            "cim:GovHydroIEEE2.pmax",
            "cim:GovHydroIEEE2.pmin",
            "cim:GovHydroIEEE2.rperm",
            "cim:GovHydroIEEE2.rtemp",
            "cim:GovHydroIEEE2.tr",
            "cim:GovHydroIEEE2.tw",
            "cim:GovHydroIEEE2.kturb",
            "cim:GovHydroIEEE2.aturb",
            "cim:GovHydroIEEE2.bturb",
            "cim:GovHydroIEEE2.gv1",
            "cim:GovHydroIEEE2.pgv1",
            "cim:GovHydroIEEE2.gv2",
            "cim:GovHydroIEEE2.pgv2",
            "cim:GovHydroIEEE2.gv3",
            "cim:GovHydroIEEE2.pgv3",
            "cim:GovHydroIEEE2.gv4",
            "cim:GovHydroIEEE2.pgv4",
            "cim:GovHydroIEEE2.gv5",
            "cim:GovHydroIEEE2.pgv5",
            "cim:GovHydroIEEE2.gv6",
            "cim:GovHydroIEEE2.pgv6",
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
            if (!GovHydroIEEE2.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovHydroIEEE2: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovHydroIEEE2.attributeHTML(object, cimmenu);
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
export default GovHydroIEEE2
