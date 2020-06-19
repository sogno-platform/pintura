import templates from "../../templates/index.js"
import TurbineGovernorDynamics from "./TurbineGovernorDynamics.js"
import common from "../../src/common.js"

class GovGAST1 extends TurbineGovernorDynamics {

    static attributeHTML(object, cimmenu, classType="GovGAST1") {
        let attributeEntries = TurbineGovernorDynamics.attributeHTML(object, cimmenu, classType);
        if ('cim:GovGAST1.mwbase' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovGAST1.mwbase'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.mwbase'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.mwbase'],
                                                   'cim:ActivePower',
                                                   'cim:GovGAST1.mwbase'
                                                 );
        }
        if ('cim:GovGAST1.r' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.r'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.r'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.r'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.r'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.r'
                                                 );
        }
        if ('cim:GovGAST1.t1' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST1.t1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.t1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.t1'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST1.t1'
                                                 );
        }
        if ('cim:GovGAST1.t2' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST1.t2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.t2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.t2'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST1.t2'
                                                 );
        }
        if ('cim:GovGAST1.t3' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST1.t3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.t3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.t3'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST1.t3'
                                                 );
        }
        if ('cim:GovGAST1.lmax' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.lmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.lmax'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.lmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.lmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.lmax'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.lmax'
                                                 );
        }
        if ('cim:GovGAST1.kt' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.kt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.kt'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.kt'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.kt'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.kt'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.kt'
                                                 );
        }
        if ('cim:GovGAST1.vmax' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.vmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.vmax'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.vmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.vmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.vmax'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.vmax'
                                                 );
        }
        if ('cim:GovGAST1.vmin' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.vmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.vmin'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.vmin'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.vmin'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.vmin'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.vmin'
                                                 );
        }
        if ('cim:GovGAST1.fidle' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.fidle'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.fidle'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.fidle'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.fidle'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.fidle'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.fidle'
                                                 );
        }
        if ('cim:GovGAST1.rmax' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.rmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.rmax'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST1.rmax'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.rmax'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.rmax'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST1.rmax'
                                                 );
        }
        if ('cim:GovGAST1.loadinc' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.loadinc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.loadinc'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.loadinc'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.loadinc'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.loadinc'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.loadinc'
                                                 );
        }
        if ('cim:GovGAST1.tltr' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.tltr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.tltr'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST1.tltr'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.tltr'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.tltr'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST1.tltr'
                                                 );
        }
        if ('cim:GovGAST1.ltrate' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.ltrate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.ltrate'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST1.ltrate'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.ltrate'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.ltrate'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST1.ltrate'
                                                 );
        }
        if ('cim:GovGAST1.a' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.a'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.a'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST1.a'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.a'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.a'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST1.a'
                                                 );
        }
        if ('cim:GovGAST1.b' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.b'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.b'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST1.b'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.b'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.b'],
                                                   'cim:Simple_Float',
                                                   'cim:GovGAST1.b'
                                                 );
        }
        if ('cim:GovGAST1.db1' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovGAST1.db1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.db1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.db1'],
                                                   'cim:Frequency',
                                                   'cim:GovGAST1.db1'
                                                 );
        }
        if ('cim:GovGAST1.eps' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.eps'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.eps'],
                                                   'cim:Frequency',
                                                   'cim:GovGAST1.eps'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.eps'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.eps'],
                                                   'cim:Frequency',
                                                   'cim:GovGAST1.eps'
                                                 );
        }
        if ('cim:GovGAST1.db2' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.db2'],
                                                   'cim:ActivePower',
                                                   'cim:GovGAST1.db2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.db2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.db2'],
                                                   'cim:ActivePower',
                                                   'cim:GovGAST1.db2'
                                                 );
        }
        if ('cim:GovGAST1.gv1' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.gv1'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.gv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.gv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.gv1'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.gv1'
                                                 );
        }
        if ('cim:GovGAST1.pgv1' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.pgv1'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.pgv1'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.pgv1'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.pgv1'
                                                 );
        }
        if ('cim:GovGAST1.gv2' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.gv2'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.gv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.gv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.gv2'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.gv2'
                                                 );
        }
        if ('cim:GovGAST1.pgv2' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.pgv2'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.pgv2'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.pgv2'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.pgv2'
                                                 );
        }
        if ('cim:GovGAST1.gv3' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.gv3'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.gv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.gv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.gv3'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.gv3'
                                                 );
        }
        if ('cim:GovGAST1.pgv3' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.pgv3'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.pgv3'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.pgv3'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.pgv3'
                                                 );
        }
        if ('cim:GovGAST1.gv4' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.gv4'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.gv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.gv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.gv4'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.gv4'
                                                 );
        }
        if ('cim:GovGAST1.pgv4' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.pgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.pgv4'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.pgv4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.pgv4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.pgv4'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.pgv4'
                                                 );
        }
        if ('cim:GovGAST1.gv5' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.gv5'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.gv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.gv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.gv5'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.gv5'
                                                 );
        }
        if ('cim:GovGAST1.pgv5' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.pgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.pgv5'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.pgv5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.pgv5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.pgv5'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.pgv5'
                                                 );
        }
        if ('cim:GovGAST1.gv6' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.gv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.gv6'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.gv6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.gv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.gv6'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.gv6'
                                                 );
        }
        if ('cim:GovGAST1.pgv6' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.pgv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.pgv6'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.pgv6'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.pgv6'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.pgv6'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.pgv6'
                                                 );
        }
        if ('cim:GovGAST1.ka' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.ka'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.ka'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.ka'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.ka'],
                                                   'cim:PU',
                                                   'cim:GovGAST1.ka'
                                                 );
        }
        if ('cim:GovGAST1.t4' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.t4'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST1.t4'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.t4'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.t4'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST1.t4'
                                                 );
        }
        if ('cim:GovGAST1.t5' in object) {
            attributeEntries['filledEntries']['cim:GovGAST1.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.t5'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST1.t5'
                                                 );
        }
        else {
            attributeEntries['emptyEntries']['cim:GovGAST1.t5'] =
                cimmenu.getAggregateComponentMenu(
                                                   'cim:'+classType,
                                                   object['pintura:rdfid'],
                                                   object['GovGAST1.t5'],
                                                   'cim:Seconds',
                                                   'cim:GovGAST1.t5'
                                                 );
        }
        return attributeEntries;
    }

    static isMemberAttribute(attribute) {
        let attributes = [
            "cim:GovGAST1.mwbase",
            "cim:GovGAST1.r",
            "cim:GovGAST1.t1",
            "cim:GovGAST1.t2",
            "cim:GovGAST1.t3",
            "cim:GovGAST1.lmax",
            "cim:GovGAST1.kt",
            "cim:GovGAST1.vmax",
            "cim:GovGAST1.vmin",
            "cim:GovGAST1.fidle",
            "cim:GovGAST1.rmax",
            "cim:GovGAST1.loadinc",
            "cim:GovGAST1.tltr",
            "cim:GovGAST1.ltrate",
            "cim:GovGAST1.a",
            "cim:GovGAST1.b",
            "cim:GovGAST1.db1",
            "cim:GovGAST1.eps",
            "cim:GovGAST1.db2",
            "cim:GovGAST1.gv1",
            "cim:GovGAST1.pgv1",
            "cim:GovGAST1.gv2",
            "cim:GovGAST1.pgv2",
            "cim:GovGAST1.gv3",
            "cim:GovGAST1.pgv3",
            "cim:GovGAST1.gv4",
            "cim:GovGAST1.pgv4",
            "cim:GovGAST1.gv5",
            "cim:GovGAST1.pgv5",
            "cim:GovGAST1.gv6",
            "cim:GovGAST1.pgv6",
            "cim:GovGAST1.ka",
            "cim:GovGAST1.t4",
            "cim:GovGAST1.t5",
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
            if (!GovGAST1.isMemberAttribute(attribute)) {
                console.error("Unexpected attribute for class GovGAST1: ", attribute, " with value: ", object[attribute])
            }
        });
    }
    static renderAsClass(object, cimmenu) {
        let separateEntries = GovGAST1.attributeHTML(object, cimmenu);
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
export default GovGAST1
