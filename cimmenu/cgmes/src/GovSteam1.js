import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"

class GovSteam1 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovSteam1") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovSteam1.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovSteam1.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovSteam1.mwbase'
                                                 );
        }
        if ('cim:GovSteam1.k' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.k'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.k'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.k'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.k'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.k'
                                                 );
        }
        if ('cim:GovSteam1.t1' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam1.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam1.t1'
                                                 );
        }
        if ('cim:GovSteam1.t2' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam1.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam1.t2'
                                                 );
        }
        if ('cim:GovSteam1.t3' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam1.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam1.t3'
                                                 );
        }
        if ('cim:GovSteam1.uo' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.uo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.uo'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.uo'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.uo'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.uo'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.uo'
                                                 );
        }
        if ('cim:GovSteam1.uc' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.uc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.uc'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.uc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.uc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.uc'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.uc'
                                                 );
        }
        if ('cim:GovSteam1.pmax' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.pmax'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.pmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.pmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.pmax'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.pmax'
                                                 );
        }
        if ('cim:GovSteam1.pmin' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.pmin'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.pmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.pmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.pmin'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.pmin'
                                                 );
        }
        if ('cim:GovSteam1.t4' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.t4'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam1.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.t4'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam1.t4'
                                                 );
        }
        if ('cim:GovSteam1.k1' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.k1'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.k1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.k1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.k1'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.k1'
                                                 );
        }
        if ('cim:GovSteam1.k2' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.k2'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.k2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.k2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.k2'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.k2'
                                                 );
        }
        if ('cim:GovSteam1.t5' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.t5'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam1.t5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.t5'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam1.t5'
                                                 );
        }
        if ('cim:GovSteam1.k3' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.k3'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.k3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.k3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.k3'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.k3'
                                                 );
        }
        if ('cim:GovSteam1.k4' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.k4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.k4'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.k4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.k4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.k4'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.k4'
                                                 );
        }
        if ('cim:GovSteam1.t6' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.t6'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam1.t6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.t6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.t6'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam1.t6'
                                                 );
        }
        if ('cim:GovSteam1.k5' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.k5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.k5'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.k5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.k5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.k5'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.k5'
                                                 );
        }
        if ('cim:GovSteam1.k6' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.k6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.k6'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.k6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.k6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.k6'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.k6'
                                                 );
        }
        if ('cim:GovSteam1.t7' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.t7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.t7'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam1.t7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.t7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.t7'],
                                                   'cim:Seconds',
                                                   'cim:GovSteam1.t7'
                                                 );
        }
        if ('cim:GovSteam1.k7' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.k7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.k7'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.k7'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.k7'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.k7'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.k7'
                                                 );
        }
        if ('cim:GovSteam1.k8' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.k8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.k8'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.k8'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.k8'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.k8'],
                                                   'cim:Simple_Float',
                                                   'cim:GovSteam1.k8'
                                                 );
        }
        if ('cim:GovSteam1.db1' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovSteam1.db1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovSteam1.db1'
                                                 );
        }
        if ('cim:GovSteam1.eps' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.eps'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.eps'],
                                                   'cim:Frequency',
                                                   'cim:GovSteam1.eps'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.eps'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.eps'],
                                                   'cim:Frequency',
                                                   'cim:GovSteam1.eps'
                                                 );
        }
        if ('cim:GovSteam1.sdb1' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.sdb1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.sdb1'],
                                                   'cim:Boolean',
                                                   'cim:GovSteam1.sdb1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.sdb1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.sdb1'],
                                                   'cim:Boolean',
                                                   'cim:GovSteam1.sdb1'
                                                 );
        }
        if ('cim:GovSteam1.sdb2' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.sdb2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.sdb2'],
                                                   'cim:Boolean',
                                                   'cim:GovSteam1.sdb2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.sdb2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.sdb2'],
                                                   'cim:Boolean',
                                                   'cim:GovSteam1.sdb2'
                                                 );
        }
        if ('cim:GovSteam1.db2' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.db2'],
                                                   'cim:ActivePower',
                                                   'cim:GovSteam1.db2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.db2'],
                                                   'cim:ActivePower',
                                                   'cim:GovSteam1.db2'
                                                 );
        }
        if ('cim:GovSteam1.valve' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.valve'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.valve'],
                                                   'cim:Boolean',
                                                   'cim:GovSteam1.valve'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.valve'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.valve'],
                                                   'cim:Boolean',
                                                   'cim:GovSteam1.valve'
                                                 );
        }
        if ('cim:GovSteam1.gv1' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.gv1'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.gv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.gv1'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.gv1'
                                                 );
        }
        if ('cim:GovSteam1.pgv1' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.pgv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.pgv1'
                                                 );
        }
        if ('cim:GovSteam1.gv2' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.gv2'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.gv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.gv2'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.gv2'
                                                 );
        }
        if ('cim:GovSteam1.pgv2' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.pgv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.pgv2'
                                                 );
        }
        if ('cim:GovSteam1.gv3' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.gv3'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.gv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.gv3'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.gv3'
                                                 );
        }
        if ('cim:GovSteam1.pgv3' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.pgv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.pgv3'
                                                 );
        }
        if ('cim:GovSteam1.gv4' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.gv4'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.gv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.gv4'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.gv4'
                                                 );
        }
        if ('cim:GovSteam1.pgv4' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.pgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.pgv4'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.pgv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.pgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.pgv4'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.pgv4'
                                                 );
        }
        if ('cim:GovSteam1.gv5' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.gv5'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.gv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.gv5'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.gv5'
                                                 );
        }
        if ('cim:GovSteam1.pgv5' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.pgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.pgv5'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.pgv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.pgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.pgv5'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.pgv5'
                                                 );
        }
        if ('cim:GovSteam1.gv6' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.gv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.gv6'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.gv6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.gv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.gv6'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.gv6'
                                                 );
        }
        if ('cim:GovSteam1.pgv6' in object) {
            attributeEntries['filledEntries']['cim:GovSteam1.pgv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.pgv6'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.pgv6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovSteam1.pgv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovSteam1.pgv6'],
                                                   'cim:PU',
                                                   'cim:GovSteam1.pgv6'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovSteam1.mwbase",
            "cim:GovSteam1.k",
            "cim:GovSteam1.t1",
            "cim:GovSteam1.t2",
            "cim:GovSteam1.t3",
            "cim:GovSteam1.uo",
            "cim:GovSteam1.uc",
            "cim:GovSteam1.pmax",
            "cim:GovSteam1.pmin",
            "cim:GovSteam1.t4",
            "cim:GovSteam1.k1",
            "cim:GovSteam1.k2",
            "cim:GovSteam1.t5",
            "cim:GovSteam1.k3",
            "cim:GovSteam1.k4",
            "cim:GovSteam1.t6",
            "cim:GovSteam1.k5",
            "cim:GovSteam1.k6",
            "cim:GovSteam1.t7",
            "cim:GovSteam1.k7",
            "cim:GovSteam1.k8",
            "cim:GovSteam1.db1",
            "cim:GovSteam1.eps",
            "cim:GovSteam1.sdb1",
            "cim:GovSteam1.sdb2",
            "cim:GovSteam1.db2",
            "cim:GovSteam1.valve",
            "cim:GovSteam1.gv1",
            "cim:GovSteam1.pgv1",
            "cim:GovSteam1.gv2",
            "cim:GovSteam1.pgv2",
            "cim:GovSteam1.gv3",
            "cim:GovSteam1.pgv3",
            "cim:GovSteam1.gv4",
            "cim:GovSteam1.pgv4",
            "cim:GovSteam1.gv5",
            "cim:GovSteam1.pgv5",
            "cim:GovSteam1.gv6",
            "cim:GovSteam1.pgv6",
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
            if (!GovSteam1.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovSteam1: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovSteam1.attributeHTML(object, cimmenu);
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
export default GovSteam1
